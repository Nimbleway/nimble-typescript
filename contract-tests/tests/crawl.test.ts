import { describe, test, expect, beforeEach } from 'vitest';
import { createClientWithCapture, type CapturedRequest } from '../src/client.js';

let nimbleSdk: ReturnType<typeof createClientWithCapture>['nimbleSdk'];
let requests: CapturedRequest[];

beforeEach(() => {
  ({ nimbleSdk, requests } = createClientWithCapture());
});

describe('crawl', () => {
  test('run: required params only', async () => {
    const response = await nimbleSdk.crawl.run({
      url: 'https://www.example.com',
    });

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'POST', path: '/v1/crawl' });
  });

  test('run: with optional params', async () => {
    const response = await nimbleSdk.crawl.run({
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

  // Spec bug: shared batch schema requires search_engine for non-SERP endpoints
  test.fails('list: no params', async () => {
    const response = await nimbleSdk.crawl.list();

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'GET', path: '/v1/crawl' });
  });

  // Spec bug: crawl status enum incomplete
  test.fails('list: with filters', async () => {
    const response = await nimbleSdk.crawl.list({
      status: 'running',
      limit: 10,
    });

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'GET', path: '/v1/crawl' });
  });

  // Spec bug: response tasks missing required url field
  test.fails('status: by crawl id', async () => {
    const response = await nimbleSdk.crawl.status('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');

    expect(response).toBeDefined();
    expect(requests).toContainEqual({
      method: 'GET',
      path: '/v1/crawl/e8ed8ef6-2657-43ba-98d5-a5c79ea7b551',
    });
  });

  test('terminate: by crawl id', async () => {
    const response = await nimbleSdk.crawl.terminate('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');

    expect(response).toBeDefined();
    expect(requests).toContainEqual({
      method: 'DELETE',
      path: '/v1/crawl/e8ed8ef6-2657-43ba-98d5-a5c79ea7b551',
    });
  });
});
