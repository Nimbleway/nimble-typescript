import { describe, test, expect, beforeEach } from 'vitest';
import { createClientWithCapture, type CapturedRequest } from '../src/client.js';

let client: ReturnType<typeof createClientWithCapture>['client'];
let requests: CapturedRequest[];

beforeEach(() => {
  ({ client, requests } = createClientWithCapture());
});

describe('serp', () => {
  test('run: required params only', async () => {
    const response = await client.serp.run({
      search_engine: 'google_search',
    });

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'POST', path: '/v1/serp' });
  });

  test('runAsync: required params only', async () => {
    const response = await client.serp.runAsync({
      search_engine: 'google_search',
    });

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'POST', path: '/v1/serp/async' });
  });

  test('runBatch: required params', async () => {
    const response = await client.serp.runBatch({
      inputs: [{ search_engine: 'google_search' }],
    });

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'POST', path: '/v1/serp/batch' });
  });
});
