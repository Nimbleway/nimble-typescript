import { describe, test, expect } from 'vitest';
import { createClient } from '../src/client.js';

const client = createClient();

const taskStatePattern = /^(pending|success|error)$/;

const taskSchema = expect.objectContaining({
  id: expect.any(String),
  state: expect.stringMatching(taskStatePattern),
  status_url: expect.any(String),
  download_url: expect.any(String),
  error: expect.any(String),
  error_type: expect.any(String),
  created_at: expect.any(String),
  modified_at: expect.any(String),
  account_name: expect.any(String),
  batch_id: expect.any(String),
  status_code: expect.any(Number),
  api_type: expect.any(String),
});

const paginationSchema = expect.objectContaining({
  has_next: expect.any(Boolean),
  next_cursor: expect.any(String),
  total: expect.any(Number),
});

describe('tasks', () => {
  test('list: no params', async () => {
    const response = await client.tasks.list();

    expect(response).toMatchObject({
      data: expect.any(Array),
      pagination: paginationSchema,
    });
    for (const task of response.data) {
      expect(task).toEqual(taskSchema);
    }
  });

  test('list: with pagination params', async () => {
    const response = await client.tasks.list({
      limit: 5,
    });

    expect(response).toMatchObject({
      data: expect.any(Array),
      pagination: paginationSchema,
    });
    for (const task of response.data) {
      expect(task).toEqual(taskSchema);
    }
  });

  test('get: by task id', async () => {
    const response = await client.tasks.get('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');

    expect(response).toMatchObject({
      task: taskSchema,
    });
  });

  test('results: by task id', async () => {
    const response = await client.tasks.results('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');

    expect(response).toBeDefined();
    expect(typeof response).toBe('object');
  });
});
