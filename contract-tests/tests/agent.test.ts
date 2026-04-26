import { describe, test, expect } from 'vitest';
import { createClient } from '../src/client.js';

const client = createClient();

describe('agent', () => {
  test('run: required params only', async () => {
    const response = await client.agent.run({
      agent: 'amazon_pdp',
      params: { asin: 'B0DLKFK6LR' },
    });
    expect(response.status).toBeDefined();
    expect(response.task_id).toBeDefined();
    expect(response.url).toBeDefined();
    expect(response.data).toBeDefined();
    expect(response.metadata).toBeDefined();
  });

  test('run: with optional params', async () => {
    const response = await client.agent.run({
      agent: 'amazon_pdp',
      params: { asin: 'B0DLKFK6LR' },
      formats: ['html', 'markdown'],
      localization: true,
    });
    expect(response.status).toBeDefined();
  });

  test('runAsync: required params only', async () => {
    const response = await client.agent.runAsync({
      agent: 'amazon_pdp',
      params: { asin: 'B0DLKFK6LR' },
    });
    expect(response.status).toBeDefined();
    expect(response.task).toBeDefined();
  });

  test('runAsync: with storage options', async () => {
    const response = await client.agent.runAsync({
      agent: 'amazon_pdp',
      params: { asin: 'B0DLKFK6LR' },
      callback_url: 'https://example.com/webhook',
      storage_type: 's3',
      storage_url: 's3://bucket/results',
    });
    expect(response.status).toBeDefined();
  });

  test('runBatch: required params', async () => {
    const response = await client.agent.runBatch({
      inputs: [{ params: { asin: 'B0DLKFK6LR' } }, { params: { asin: 'B0DLKFK6LS' } }],
      shared_inputs: { agent: 'amazon_pdp' },
    });
    expect(response.batch_id).toBeDefined();
    expect(response.batch_size).toBeDefined();
    expect(response.tasks).toBeDefined();
    expect(Array.isArray(response.tasks)).toBe(true);
  });

  test('list: no params', async () => {
    const response = await client.agent.list();
    expect(Array.isArray(response)).toBe(true);
  });

  test('list: with filters', async () => {
    const response = await client.agent.list({
      limit: 5,
      privacy: 'public',
      managed_by: 'nimble',
    });
    expect(Array.isArray(response)).toBe(true);
  });

  test('get: by template name', async () => {
    const response = await client.agent.get('amazon_pdp');
    expect(response.name).toBeDefined();
    expect(response.display_name).toBeDefined();
    expect(typeof response.is_public).toBe('boolean');
  });

  test('generate: create agent generation', async () => {
    const response = await client.agent.generate({
      agent_name: 'test_agent',
      prompt: 'Extract product data from example.com',
      url: 'https://www.example.com',
    });
    expect(response.id).toBeDefined();
    expect(response.status).toBeDefined();
  });

  test('getGeneration: by generation id', async () => {
    const response = await client.agent.getGeneration('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');
    expect(response.id).toBeDefined();
    expect(response.status).toBeDefined();
  });

  test('publish: agent version', async () => {
    const response = await client.agent.publish('amazon_pdp', {
      version_id: 'e8ed8ef6-2657-43ba-98d5-a5c79ea7b551',
    });
    expect(response.agent_name).toBeDefined();
    expect(response.published_version_id).toBeDefined();
  });
});
