import { describe, test, expect, beforeEach } from 'vitest';
import { createClientWithCapture, type CapturedRequest } from '../src/client.js';

let client: ReturnType<typeof createClientWithCapture>['client'];
let requests: CapturedRequest[];

beforeEach(() => {
    ({ client, requests } = createClientWithCapture());
});

describe('tasks', () => {
    test('list: no params', async () => {
        const response = await client.tasks.list();

        expect(response).toBeDefined();
        expect(requests).toContainEqual({ method: 'GET', path: '/v1/tasks' });
    });

    test('list: with pagination params', async () => {
        const response = await client.tasks.list({
            limit: 5,
        });

        expect(response).toBeDefined();
        expect(requests).toContainEqual({ method: 'GET', path: '/v1/tasks' });
    });

    test('get: by task id', async () => {
        const response = await client.tasks.get('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');

        expect(response).toBeDefined();
        expect(requests).toContainEqual({ method: 'GET', path: '/v1/tasks/e8ed8ef6-2657-43ba-98d5-a5c79ea7b551' });
    });

    test('results: by task id', async () => {
        const response = await client.tasks.results('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');

        expect(response).toBeDefined();
        expect(requests).toContainEqual({
            method: 'GET',
            path: '/v1/tasks/e8ed8ef6-2657-43ba-98d5-a5c79ea7b551/results',
        });
    });
});
