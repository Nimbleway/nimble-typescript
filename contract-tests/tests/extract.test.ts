import { describe, test, expect } from 'vitest';
import { createClient } from '../src/client.js';

const client = createClient();

describe('extract', () => {
  test('extract: required params only', async () => {
    const response = await client.extract({ url: 'https://www.example.com' });
    expect(response.url).toBeDefined();
    expect(response.status).toBeDefined();
    expect(response.task_id).toBeDefined();
  });

  test('extract: with optional params', async () => {
    const response = await client.extract({
      url: 'https://www.example.com',
      country: 'US',
      locale: 'en-US',
      render: true,
      formats: ['html', 'markdown'],
    });
    expect(response.url).toBeDefined();
    expect(response.status).toBeDefined();
  });

  test('extractAsync: required params only', async () => {
    const response = await client.extractAsync({ url: 'https://www.example.com' });
    expect(response.status).toBeDefined();
    expect(response.task).toBeDefined();
  });

  test('extractAsync: with storage options', async () => {
    const response = await client.extractAsync({
      url: 'https://www.example.com',
      country: 'US',
      callback_url: 'https://example.com/webhook',
      storage_type: 's3',
      storage_url: 's3://bucket/path',
    });
    expect(response.status).toBeDefined();
  });

  test('extractBatch: required params only', async () => {
    const response = await client.extractBatch({
      inputs: [{ url: 'https://www.example.com/page1' }, { url: 'https://www.example.com/page2' }],
    });
    expect(response.batch_id).toBeDefined();
    expect(response.batch_size).toBeDefined();
    expect(response.tasks).toBeDefined();
    expect(Array.isArray(response.tasks)).toBe(true);
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
    expect(response.batch_id).toBeDefined();
  });
});
