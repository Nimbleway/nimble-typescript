import { describe, test, expect } from 'vitest';
import { createClient } from '../src/client.js';

const client = createClient();

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

describe('batches', () => {
  test('list: no params', async () => {
    const response = await client.batches.list();
    expect(response).toBeDefined();
  });

  test('get: by batch id', async () => {
    const response = await client.batches.get('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');

    expect(response).toMatchObject({
      status: 'success',
      id: expect.any(String),
      completed: expect.any(Boolean),
      completed_count: expect.any(Number),
      progress: expect.any(Number),
      created_at: expect.any(String),
      tasks: expect.any(Array),
    });
    for (const task of response.tasks) {
      expect(task).toEqual(taskSchema);
    }
  });

  test('progress: by batch id', async () => {
    const response = await client.batches.progress('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');

    expect(response).toMatchObject({
      status: 'success',
      id: expect.any(String),
      completed: expect.any(Boolean),
      completed_count: expect.any(Number),
      progress: expect.any(Number),
    });
  });
});
