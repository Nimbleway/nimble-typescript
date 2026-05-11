import { describe, test, expect, beforeEach } from 'vitest';
import { createClientWithCapture, type CapturedRequest } from '../src/client.js';

let client: ReturnType<typeof createClientWithCapture>['client'];
let requests: CapturedRequest[];

beforeEach(() => {
  ({ client, requests } = createClientWithCapture());
});

describe('crawl', () => {
  test('run: required params only', async () => {
    const response = await client.crawl.run({
      url: 'https://www.example.com',
    });

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'POST', path: '/v1/crawl' });
  });

  test('run: with optional params', async () => {
    const response = await client.crawl.run({
      url: 'https://www.example.com',
      name: 'test-crawl',
      limit: 50,
      max_discovery_depth: 3,
      sitemap: 'include',
      allow_subdomains: true,
      allow_external_links: false,
      crawl_entire_domain: false,
      ignore_query_parameters: true,
    });

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'POST', path: '/v1/crawl' });
  });

  test('list: no params', async () => {
    const response = await client.crawl.list();

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'GET', path: '/v1/crawl' });
  });

  test('list: with filters', async () => {
    const response = await client.crawl.list({
      status: 'running',
      limit: 10,
    });

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'GET', path: '/v1/crawl' });
  });

  test('status: by crawl id', async () => {
    const response = await client.crawl.status('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');

    expect(response).toBeDefined();
    expect(requests).toContainEqual({
      method: 'GET',
      path: '/v1/crawl/e8ed8ef6-2657-43ba-98d5-a5c79ea7b551',
    });
  });

  test('terminate: by crawl id', async () => {
    const response = await client.crawl.terminate('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');

    expect(response).toBeDefined();
    expect(requests).toContainEqual({
      method: 'DELETE',
      path: '/v1/crawl/e8ed8ef6-2657-43ba-98d5-a5c79ea7b551',
    });
  });
});
