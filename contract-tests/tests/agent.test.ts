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
      results: expect.any(Array),
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

const agentRunResponseSchema = {
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

const agentTemplateSchema = expect.objectContaining({
  name: expect.any(String),
  is_public: expect.any(Boolean),
  display_name: expect.any(String),
  description: expect.any(String),
  vertical: expect.any(String),
  entity_type: expect.any(String),
  domain: expect.any(String),
  managed_by: expect.any(String),
});

const agentDetailSchema = expect.objectContaining({
  name: expect.any(String),
  is_public: expect.any(Boolean),
  display_name: expect.any(String),
  description: expect.any(String),
  vertical: expect.any(String),
  entity_type: expect.any(String),
  domain: expect.any(String),
  managed_by: expect.any(String),
  // eslint-disable-next-line no-restricted-syntax -- JSON Schema object, generic by nature
  output_schema: expect.objectContaining({}),
  input_properties: expect.arrayContaining([
    expect.objectContaining({
      name: expect.any(String),
      required: expect.any(Boolean),
      type: expect.any(String),
    }),
  ]),
  feature_flags: expect.objectContaining({
    is_localization_supported: expect.any(Boolean),
    is_pagination_supported: expect.any(Boolean),
  }),
});

const generationVersionSchema = expect.objectContaining({
  id: expect.any(String),
  agent_name: expect.any(String),
  version_number: expect.any(Number),
  metadata: expect.objectContaining({
    vertical: expect.any(String),
    data_source: expect.any(String),
    display_name: expect.any(String),
    description: expect.any(String),
    tags: expect.any(Array),
    domain: expect.any(String),
    entity_type: expect.any(String),
  }),
  steps: expect.any(Array),
  // eslint-disable-next-line no-restricted-syntax -- JSON Schema object, generic by nature
  input_schema: expect.objectContaining({}),
  // eslint-disable-next-line no-restricted-syntax -- JSON Schema object, generic by nature
  output_schema: expect.objectContaining({}),
  created_at: expect.any(String),
});

const generationResponseSchema = {
  id: expect.any(String),
  status: expect.any(String),
  agent_name: expect.any(String),
  source_version_id: expect.any(String),
  generated_version_id: expect.any(String),
  generated_version: generationVersionSchema,
  summary: expect.any(String),
  error: expect.any(String),
  created_at: expect.any(String),
  started_at: expect.any(String),
  completed_at: expect.any(String),
};

describe('agent', () => {
  test('run: required params only', async () => {
    const response = await client.agent.run({
      agent: 'amazon_pdp',
      params: { asin: 'B0DLKFK6LR' },
    });

    expect(response).toMatchObject(agentRunResponseSchema);
  });

  test('run: with optional params', async () => {
    const response = await client.agent.run({
      agent: 'amazon_pdp',
      params: { asin: 'B0DLKFK6LR' },
      formats: ['html', 'markdown'],
      localization: true,
    });

    expect(response).toMatchObject(agentRunResponseSchema);
  });

  test('runAsync: required params only', async () => {
    const response = await client.agent.runAsync({
      agent: 'amazon_pdp',
      params: { asin: 'B0DLKFK6LR' },
    });

    // agent runAsync task is typed as Record<string, unknown> in the OpenAPI spec
    expect(response).toMatchObject({
      status: 'success',
      // eslint-disable-next-line no-restricted-syntax -- spec defines task as Record<string, unknown>
      task: expect.objectContaining({}),
    });
  });

  test('runAsync: with storage options', async () => {
    const response = await client.agent.runAsync({
      agent: 'amazon_pdp',
      params: { asin: 'B0DLKFK6LR' },
      callback_url: 'https://example.com/webhook',
      storage_type: 's3',
      storage_url: 's3://bucket/results',
    });

    expect(response).toMatchObject({
      status: 'success',
      // eslint-disable-next-line no-restricted-syntax -- spec defines task as Record<string, unknown>
      task: expect.objectContaining({}),
    });
  });

  test('runBatch: required params', async () => {
    const response = await client.agent.runBatch({
      inputs: [{ params: { asin: 'B0DLKFK6LR' } }, { params: { asin: 'B0DLKFK6LS' } }],
      shared_inputs: { agent: 'amazon_pdp' },
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

  test('list: no params', async () => {
    const response = await client.agent.list();

    expect(Array.isArray(response)).toBe(true);
    for (const agent of response) {
      expect(agent).toEqual(agentTemplateSchema);
    }
  });

  test('list: with filters', async () => {
    const response = await client.agent.list({
      limit: 5,
      privacy: 'public',
      managed_by: 'nimble',
    });

    expect(Array.isArray(response)).toBe(true);
    for (const agent of response) {
      expect(agent).toEqual(agentTemplateSchema);
    }
  });

  test('get: by template name', async () => {
    const response = await client.agent.get('amazon_pdp');

    expect(response).toEqual(agentDetailSchema);
  });

  test('generate: create agent generation', async () => {
    const response = await client.agent.generate({
      agent_name: 'test_agent',
      prompt: 'Extract product data from example.com',
      url: 'https://www.example.com',
    });

    expect(response).toMatchObject(generationResponseSchema);
  });

  test('getGeneration: by generation id', async () => {
    const response = await client.agent.getGeneration('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');

    expect(response).toMatchObject(generationResponseSchema);
  });

  test('publish: agent version', async () => {
    const response = await client.agent.publish('amazon_pdp', {
      version_id: 'e8ed8ef6-2657-43ba-98d5-a5c79ea7b551',
    });

    expect(response).toMatchObject({
      agent_name: expect.any(String),
      published_version_id: expect.any(String),
    });
  });
});
