import { describe, test, expect, beforeEach } from 'vitest';
import { createClientWithCapture, type CapturedRequest } from '../src/client.js';

let client: ReturnType<typeof createClientWithCapture>['client'];
let requests: CapturedRequest[];

beforeEach(() => {
    ({ client, requests } = createClientWithCapture());
});

describe('batches', () => {
    test('list: no params', async () => {
        const response = await client.batches.list();

        expect(response).toBeDefined();
        expect(requests).toContainEqual({ method: 'GET', path: '/v1/batches' });
    });

    test('get: by batch id', async () => {
        const response = await client.batches.get('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');

        expect(response).toBeDefined();
        expect(requests).toContainEqual({ method: 'GET', path: '/v1/batches/e8ed8ef6-2657-43ba-98d5-a5c79ea7b551' });
    });

    test('progress: by batch id', async () => {
        const response = await client.batches.progress('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');

        expect(response).toBeDefined();
        expect(requests).toContainEqual({
            method: 'GET',
            path: '/v1/batches/e8ed8ef6-2657-43ba-98d5-a5c79ea7b551/progress',
        });
    });
});
