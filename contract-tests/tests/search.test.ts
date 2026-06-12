import { describe, test, expect, beforeEach } from 'vitest';
import { createClientWithCapture, type CapturedRequest } from '../src/client.js';

let client: ReturnType<typeof createClientWithCapture>['client'];
let requests: CapturedRequest[];

beforeEach(() => {
  ({ client, requests } = createClientWithCapture());
});

describe('search', () => {
  test('search: required params only', async () => {
    const response = await client.search({ query: 'Nike brand perception' });

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'POST', path: '/v1/search' });
  });

  test('search: with optional params', async () => {
    const response = await client.search({
      query: 'Nike brand perception consumer reviews',
      focus: 'social',
      max_results: 10,
      country: 'US',
      locale: 'en',
      search_depth: 'fast',
      include_answer: true,
    });

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'POST', path: '/v1/search' });
  });
});
