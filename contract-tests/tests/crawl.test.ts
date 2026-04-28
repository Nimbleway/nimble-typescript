import { describe, test, expect } from 'vitest';
import { createClient } from '../src/client.js';

const client = createClient();

const crawlStatusPattern = /^(queued|running|succeeded|failed|canceled)$/;
const crawlTaskStatusPattern = /^(pending|completed|failed)$/;

const crawlOptionsSchema = expect.objectContaining({
  sitemap: expect.any(String),
  crawl_entire_domain: expect.any(Boolean),
  limit: expect.any(Number),
  max_discovery_depth: expect.any(Number),
  exclude_paths: expect.any(Array),
  include_paths: expect.any(Array),
  ignore_query_parameters: expect.any(Boolean),
  allow_external_links: expect.any(Boolean),
  allow_subdomains: expect.any(Boolean),
});

const crawlTaskSchema = expect.objectContaining({
  task_id: expect.any(String),
  status: expect.stringMatching(crawlTaskStatusPattern),
  created_at: expect.any(String),
  updated_at: expect.any(String),
});

const crawlSchema = {
  crawl_id: expect.any(String),
  name: expect.any(String),
  url: expect.any(String),
  status: expect.stringMatching(crawlStatusPattern),
  account_name: expect.any(String),
  total: expect.any(Number),
  pending: expect.any(Number),
  completed: expect.any(Number),
  failed: expect.any(Number),
  created_at: expect.any(String),
  updated_at: expect.any(String),
  crawl_options: crawlOptionsSchema,
  // eslint-disable-next-line no-restricted-syntax -- spec uses additionalProperties, no defined shape
  extract_options: expect.objectContaining({}),
  tasks: expect.arrayContaining([crawlTaskSchema]),
};

const paginationSchema = expect.objectContaining({
  has_next: expect.any(Boolean),
  next_cursor: expect.any(String),
  total: expect.any(Number),
});

describe('crawl', () => {
  test('run: required params only', async () => {
    const response = await client.crawl.run({
      url: 'https://www.example.com',
    });

    expect(response).toMatchObject(crawlSchema);
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

    expect(response).toMatchObject(crawlSchema);
  });

  test('list: no params', async () => {
    const response = await client.crawl.list();

    expect(response).toMatchObject({
      data: expect.any(Array),
      pagination: paginationSchema,
    });
    for (const crawl of response.data) {
      expect(crawl).toMatchObject(crawlSchema);
    }
  });

  test('list: with filters', async () => {
    const response = await client.crawl.list({
      status: 'running',
      limit: 10,
    });

    expect(response).toMatchObject({
      data: expect.any(Array),
      pagination: paginationSchema,
    });
  });

  test('status: by crawl id', async () => {
    const response = await client.crawl.status('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');

    expect(response).toMatchObject(crawlSchema);
  });

  test('terminate: by crawl id', async () => {
    const response = await client.crawl.terminate('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');

    expect(response).toMatchObject({
      status: 'canceled',
    });
  });
});
