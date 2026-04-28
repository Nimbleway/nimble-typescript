import { describe, test, expect } from 'vitest';
import { createClient } from '../src/client.js';

const client = createClient();

const statusPattern = /^(success|skipped|fatal|error|postponed|ignored|rejected|blocked)$/;
const taskStatePattern = /^(pending|success|error)$/;

const taskSchema = expect.objectContaining({
  id: expect.any(String),
  state: expect.stringMatching(taskStatePattern),
  status_url: expect.any(String),
  download_url: expect.any(String),
  created_at: expect.any(String),
  status_code: expect.any(Number),
  api_type: expect.any(String),
});

const dataSchema = expect.objectContaining({
  html: expect.any(String),
  markdown: expect.any(String),
  parsing: expect.objectContaining({
    status: expect.any(String),
    // eslint-disable-next-line no-restricted-syntax -- spec uses additionalProperties for parsing entities
    entities: expect.objectContaining({}),
  }),
  network_capture: expect.arrayContaining([
    expect.objectContaining({
      filter: expect.objectContaining({
        status_code: expect.any(Number),
        method: expect.any(String),
        resource_type: expect.any(String),
      }),
      results: expect.arrayContaining([
        expect.objectContaining({
          request: expect.objectContaining({
            resource_type: expect.any(String),
            method: expect.any(String),
            url: expect.any(String),
          }),
          response: expect.objectContaining({
            status: expect.any(Number),
            status_text: expect.any(String),
            serialization: expect.any(String),
            body: expect.any(String),
          }),
        }),
      ]),
    }),
  ]),
  cookies: expect.any(Array),
  fetch: expect.any(Array),
  screenshots: expect.any(Array),
  eval: expect.any(Array),
  redirects: expect.arrayContaining([
    expect.objectContaining({
      status_code: expect.any(Number),
      url: expect.any(String),
    }),
  ]),
  browser_actions: expect.objectContaining({
    success: expect.any(Boolean),
    results: expect.arrayContaining([
      expect.objectContaining({
        name: expect.any(String),
        status: expect.any(String),
        duration: expect.any(Number),
      }),
    ]),
    total_duration: expect.any(Number),
  }),
  // eslint-disable-next-line no-restricted-syntax -- spec defines as Record<string, string>
  headers: expect.objectContaining({}),
  links: expect.any(Array),
  pages_html: expect.any(Array),
});

const metadataSchema = expect.objectContaining({
  driver: expect.any(String),
  query_time: expect.any(String),
  query_duration: expect.any(Number),
  tag: expect.any(String),
  agent: expect.any(String),
  localization_id: expect.any(String),
});

const extractResponseSchema = {
  task_id: expect.any(String),
  url: expect.any(String),
  status: expect.stringMatching(statusPattern),
  status_code: expect.any(Number),
  data: dataSchema,
  metadata: metadataSchema,
  debug: expect.objectContaining({
    proxy_total_bytes_usage: expect.any(Number),
    // eslint-disable-next-line no-restricted-syntax -- spec defines as Record<string, number>
    performance_metrics: expect.objectContaining({}),
  }),
  warnings: expect.any(Array),
  pagination: expect.objectContaining({
    // eslint-disable-next-line no-restricted-syntax -- spec uses additionalProperties, no defined shape
    next_page_params: expect.objectContaining({}),
  }),
};

describe('extract', () => {
  test('extract: required params only', async () => {
    const response = await client.extract({ url: 'https://www.example.com' });

    expect(response).toMatchObject(extractResponseSchema);
  });

  test('extract: with optional params', async () => {
    const response = await client.extract({
      url: 'https://www.example.com',
      country: 'US',
      locale: 'en-US',
      render: true,
      formats: ['html', 'markdown'],
    });

    expect(response).toMatchObject(extractResponseSchema);
  });

  test('extractAsync: required params only', async () => {
    const response = await client.extractAsync({ url: 'https://www.example.com' });

    expect(response).toMatchObject({
      status: 'success',
      task: taskSchema,
    });
  });

  test('extractAsync: with storage options', async () => {
    const response = await client.extractAsync({
      url: 'https://www.example.com',
      country: 'US',
      callback_url: 'https://example.com/webhook',
      storage_type: 's3',
      storage_url: 's3://bucket/path',
    });

    expect(response).toMatchObject({
      status: 'success',
      task: taskSchema,
    });
  });

  test('extractBatch: required params only', async () => {
    const response = await client.extractBatch({
      inputs: [{ url: 'https://www.example.com/page1' }, { url: 'https://www.example.com/page2' }],
    });

    expect(response).toMatchObject({
      batch_id: expect.any(String),
      batch_size: expect.any(Number),
      tasks: expect.any(Array),
    });
    for (const task of response.tasks) {
      expect(task).toEqual(taskSchema);
    }
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

    expect(response).toMatchObject({
      batch_id: expect.any(String),
      batch_size: expect.any(Number),
      tasks: expect.any(Array),
    });
    for (const task of response.tasks) {
      expect(task).toEqual(taskSchema);
    }
  });
});
