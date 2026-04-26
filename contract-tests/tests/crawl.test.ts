import { describe, test, expect } from 'vitest';
import { createClient } from '../src/client.js';

const client = createClient();

describe('crawl', () => {
  test('run: required params only', async () => {
    const response = await client.crawl.run({
      url: 'https://www.example.com',
    });
    expect(response.crawl_id).toBeDefined();
    expect(response.status).toBeDefined();
    expect(response.url).toBeDefined();
    expect(response.account_name).toBeDefined();
    expect(response.crawl_options).toBeDefined();
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
    expect(response.crawl_id).toBeDefined();
    expect(response.status).toBeDefined();
  });

  test('list: no params', async () => {
    const response = await client.crawl.list();
    expect(response.data).toBeDefined();
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.pagination).toBeDefined();
  });

  test('list: with filters', async () => {
    const response = await client.crawl.list({
      status: 'running',
      limit: 10,
    });
    expect(response.data).toBeDefined();
    expect(response.pagination).toBeDefined();
  });

  test('status: by crawl id', async () => {
    const response = await client.crawl.status('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');
    expect(response.crawl_id).toBeDefined();
    expect(response.status).toBeDefined();
    expect(response.url).toBeDefined();
  });

  test('terminate: by crawl id', async () => {
    const response = await client.crawl.terminate('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');
    expect(response.status).toBe('canceled');
  });
});
