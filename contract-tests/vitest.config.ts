import { realpathSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

const sdkRealPath = realpathSync(resolve(__dirname, '.sdk/package'));

export default defineConfig({
  test: {
    testTimeout: 15_000,
    globalSetup: './src/setup.ts',
    coverage: {
      provider: 'v8',
      include: [`${sdkRealPath}/**/*.mjs`],
      exclude: [
        `${sdkRealPath}/internal/**`,
        `${sdkRealPath}/core/**`,
        `${sdkRealPath}/index.mjs`,
        `${sdkRealPath}/version.mjs`,
        `${sdkRealPath}/error.mjs`,
        `${sdkRealPath}/resource.mjs`,
        `${sdkRealPath}/resources.mjs`,
        `${sdkRealPath}/uploads.mjs`,
        `${sdkRealPath}/api-promise.mjs`,
        `${sdkRealPath}/resources/index.mjs`,
        `${sdkRealPath}/resources/shared.mjs`,
        `${sdkRealPath}/resources/top-level.mjs`,
        `${sdkRealPath}/**/*.d.mts`,
      ],
      allowExternal: true,
      reportsDirectory: './coverage',
      reporter: ['json-summary'],
    },
  },
});
