# OpenAPI generator candidate

This directory is a reviewable generator output, not the published SDK. It does
not change the root package exports or version.

- Platform source commit: `25c2bef71be337ee92931dd2a9227cdd7a460e28`
- SDK input: `candidate/contract/openapi.yaml`
- SDK input SHA-256: `a7a58f01b3d0507613674b2b93abc61cfd3eb9efd425253aa1a733ec76d5e82b`
- Generator: `@hey-api/openapi-ts@0.99.0`
- Selected operations: 59

The input is a frozen copy of Platform's proposed `sdk/openapi.yaml` in
Nimbleway/platform#3592. Its names and operation selection remain under review.
CI regenerates the source, compares it with this directory, and compiles the
candidate. Publishing requires a separate package compatibility review.
