import { describe, test, expect, beforeEach } from 'vitest';
import { createClientWithCapture, type CapturedRequest } from '../src/client.js';

let client: ReturnType<typeof createClientWithCapture>['client'];
let requests: CapturedRequest[];

beforeEach(() => {
    ({ client, requests } = createClientWithCapture());
});

describe('extract', () => {
    test('extract: required params only', async () => {
        const response = await client.extract({ url: 'https://www.example.com' });

        expect(response).toBeDefined();
        expect(requests).toContainEqual({ method: 'POST', path: '/v1/extract' });
    });

    test('extract: with optional params', async () => {
        const response = await client.extract({
            url: 'https://www.example.com',
            country: 'US',
            locale: 'en-US',
            render: true,
            formats: ['html', 'markdown'],
        });

        expect(response).toBeDefined();
        expect(requests).toContainEqual({ method: 'POST', path: '/v1/extract' });
    });

    test('extractAsync: required params only', async () => {
        const response = await client.extractAsync({ url: 'https://www.example.com' });

        expect(response).toBeDefined();
        expect(requests).toContainEqual({ method: 'POST', path: '/v1/extract/async' });
    });

    test('extractAsync: with storage options', async () => {
        const response = await client.extractAsync({
            url: 'https://www.example.com',
            country: 'US',
            callback_url: 'https://example.com/webhook',
            storage_type: 's3',
            storage_url: 's3://bucket/path',
        });

        expect(response).toBeDefined();
        expect(requests).toContainEqual({ method: 'POST', path: '/v1/extract/async' });
    });

    test('extractBatch: required params only', async () => {
        const response = await client.extractBatch({
            inputs: [{ url: 'https://www.example.com/page1' }, { url: 'https://www.example.com/page2' }],
        });

        expect(response).toBeDefined();
        expect(requests).toContainEqual({ method: 'POST', path: '/v1/extract/batch' });
    });

    test('extractBatch: with shared inputs', async () => {
        const response = await client.extractBatch({
            inputs: [{ url: 'https://www.example.com/page1' }],
            shared_inputs: {
                country: 'US',
                render: true,
                formats: ['html', 'markdown'],
            },
        });

        expect(response).toBeDefined();
        expect(requests).toContainEqual({ method: 'POST', path: '/v1/extract/batch' });
    });
});
