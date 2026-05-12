import { describe, test, expect, beforeEach } from 'vitest';
import { createClientWithCapture, type CapturedRequest } from '../src/client.js';

let client: ReturnType<typeof createClientWithCapture>['client'];
let requests: CapturedRequest[];

beforeEach(() => {
  ({ client, requests } = createClientWithCapture());
});

describe('serp', () => {
  // Spec bug: response missing required parsing field
  test.fails('run: required params only', async () => {
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

  // Spec bug: response missing status_url and _query on task items
  test.fails('runBatch: required params', async () => {
    const response = await client.serp.runBatch({
      inputs: [{ search_engine: 'google_search' }],
    });

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'POST', path: '/v1/serp/batch' });
  });
});
