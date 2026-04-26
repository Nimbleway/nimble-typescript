import { describe, test, expect } from 'vitest';
import { createClient } from '../src/client.js';

const client = createClient();

describe('batches', () => {
  test('list: no params', async () => {
    const response = await client.batches.list();
    expect(response).toBeDefined();
  });

  test('get: by batch id', async () => {
    const response = await client.batches.get('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');
    expect(response.id).toBeDefined();
    expect(typeof response.completed).toBe('boolean');
    expect(typeof response.completed_count).toBe('number');
    expect(typeof response.progress).toBe('number');
    expect(response.tasks).toBeDefined();
    expect(Array.isArray(response.tasks)).toBe(true);
  });

  test('progress: by batch id', async () => {
    const response = await client.batches.progress('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');
    expect(response.id).toBeDefined();
    expect(typeof response.completed).toBe('boolean');
    expect(typeof response.completed_count).toBe('number');
    expect(typeof response.progress).toBe('number');
  });
});
