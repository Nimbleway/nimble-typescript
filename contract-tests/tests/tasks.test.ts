import { describe, test, expect } from 'vitest';
import { createClient } from '../src/client.js';

const client = createClient();

describe('tasks', () => {
  test('list: no params', async () => {
    const response = await client.tasks.list();
    expect(response.data).toBeDefined();
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.pagination).toBeDefined();
    expect(typeof response.pagination.has_next).toBe('boolean');
  });

  test('list: with pagination params', async () => {
    const response = await client.tasks.list({
      limit: 5,
    });
    expect(response.data).toBeDefined();
    expect(response.pagination).toBeDefined();
  });

  test('get: by task id', async () => {
    const response = await client.tasks.get('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');
    expect(response.task).toBeDefined();
    expect(response.task.id).toBeDefined();
    expect(response.task.state).toBeDefined();
    expect(response.task.created_at).toBeDefined();
  });

  test('results: by task id', async () => {
    const response = await client.tasks.results('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');
    expect(response).toBeDefined();
    expect(typeof response).toBe('object');
  });
});
