import { describe, test, expect, beforeEach } from 'vitest';
import { createClientWithCapture, type CapturedRequest } from '../src/client.js';

let client: ReturnType<typeof createClientWithCapture>['client'];
let requests: CapturedRequest[];

beforeEach(() => {
  ({ client, requests } = createClientWithCapture());
});

describe('agent', () => {
  test('run: required params only', async () => {
    const response = await client.agent.run({
      agent: 'amazon_pdp',
      params: { asin: 'B0DLKFK6LR' },
    });

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'POST', path: '/v1/agents/run' });
  });

  test('run: with optional params', async () => {
    const response = await client.agent.run({
      agent: 'amazon_pdp',
      params: { asin: 'B0DLKFK6LR' },
      formats: ['html', 'markdown'],
      localization: true,
    });

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'POST', path: '/v1/agents/run' });
  });

  test('runAsync: required params only', async () => {
    const response = await client.agent.runAsync({
      agent: 'amazon_pdp',
      params: { asin: 'B0DLKFK6LR' },
    });

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'POST', path: '/v1/agents/async' });
  });

  test('runAsync: with storage options', async () => {
    const response = await client.agent.runAsync({
      agent: 'amazon_pdp',
      params: { asin: 'B0DLKFK6LR' },
      callback_url: 'https://example.com/webhook',
      storage_type: 's3',
      storage_url: 's3://bucket/results',
    });

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'POST', path: '/v1/agents/async' });
  });

  // Spec bug: shared batch schema requires search_engine for non-SERP endpoints
  test.fails('runBatch: required params', async () => {
    const response = await client.agent.runBatch({
      inputs: [{ params: { asin: 'B0DLKFK6LR' } }, { params: { asin: 'B0DLKFK6LS' } }],
      shared_inputs: { agent: 'amazon_pdp' },
    });

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'POST', path: '/v1/agents/batch' });
  });

  test('list: no params', async () => {
    const response = await client.agent.list();

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'GET', path: '/v1/agents' });
  });

  test('list: with filters', async () => {
    const response = await client.agent.list({
      limit: 5,
      privacy: 'public',
      managed_by: 'nimble',
    });

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'GET', path: '/v1/agents' });
  });

  test('get: by template name', async () => {
    const response = await client.agent.get('amazon_pdp');

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'GET', path: '/v1/agents/amazon_pdp' });
  });

  test('generate: create agent generation', async () => {
    const response = await client.agent.generate({
      agent_name: 'test_agent',
      prompt: 'Extract product data from example.com',
      url: 'https://www.example.com',
    });

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'POST', path: '/v1/agents/generations' });
  });

  test('getGeneration: by generation id', async () => {
    const response = await client.agent.getGeneration('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');

    expect(response).toBeDefined();
    expect(requests).toContainEqual({
      method: 'GET',
      path: '/v1/agents/generations/e8ed8ef6-2657-43ba-98d5-a5c79ea7b551',
    });
  });
});
