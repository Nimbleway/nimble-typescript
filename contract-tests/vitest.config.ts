import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    resolve: {
        alias: {
            '@nimble-way/nimble-js': resolve(__dirname, '..', 'dist'),
        },
    },
    test: {
        testTimeout: 15_000,
        globalSetup: './src/setup.ts',
        coverage: {
            provider: 'v8',
            include: [resolve(__dirname, '..', 'dist', '**/*.mjs')],
            exclude: [
                '**/internal/**',
                '**/core/**',
                '**/index.mjs',
                '**/version.mjs',
                '**/error.mjs',
                '**/resource.mjs',
                '**/resources.mjs',
                '**/uploads.mjs',
                '**/api-promise.mjs',
                '**/resources/index.mjs',
                '**/resources/shared.mjs',
                '**/resources/top-level.mjs',
                '**/*.d.mts',
            ],
            allowExternal: true,
            reportsDirectory: './coverage',
            reporter: ['json-summary'],
        },
    },
});
