#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/.."

PRISM_PORT="${PRISM_PORT:-4010}"

kill_prism() {
  pids=$(lsof -t -i tcp:"$PRISM_PORT" 2>/dev/null || true)
  if [ -n "$pids" ]; then
    kill $pids 2>/dev/null || true
  fi
  rm -f .prism.pid
}

cleanup() {
  kill_prism
  git checkout -- package.json 2>/dev/null || true
}

trap cleanup EXIT

echo "==> Packing SDK from dist/"
rm -f nimble-way-nimble-js-*.tgz
(cd ../dist && pnpm pack --pack-destination ../contract-tests) > /dev/null 2>&1
SDK_TGZ=$(ls nimble-way-nimble-js-*.tgz 2>/dev/null | head -1)
if [ -z "$SDK_TGZ" ]; then
  echo "ERROR: pnpm pack failed — no tarball found"
  exit 1
fi
echo "    Packed: $SDK_TGZ"

echo "==> Installing dependencies + SDK tarball"
npm install "$SDK_TGZ" > /dev/null 2>&1

# Extract tarball outside node_modules so v8 coverage can instrument it.
# Vitest excludes **/node_modules/** by default; this symlink trick makes
# Node resolve the SDK through .sdk/ which v8 sees as a regular directory.
rm -rf .sdk
mkdir -p .sdk
tar xzf "$SDK_TGZ" -C .sdk
rm -rf node_modules/@nimble-way/nimble-js
ln -s ../../.sdk/package node_modules/@nimble-way/nimble-js

echo "==> Running SDK contract tests"
npx vitest run --coverage "$@"
node scripts/coverage-summary.mjs
