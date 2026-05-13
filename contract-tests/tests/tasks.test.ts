import { describe, test, expect, beforeEach } from 'vitest';
import { createClientWithCapture, type CapturedRequest } from '../src/client.js';

let nimbleSdk: ReturnType<typeof createClientWithCapture>['nimbleSdk'];
let requests: CapturedRequest[];

beforeEach(() => {
  ({ nimbleSdk, requests } = createClientWithCapture());
});

describe('tasks', () => {
  test('list: no params', async () => {
    const response = await nimbleSdk.tasks.list();

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'GET', path: '/v1/tasks' });
  });

  test('list: with pagination params', async () => {
    const response = await nimbleSdk.tasks.list({
      limit: 5,
    });

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'GET', path: '/v1/tasks' });
  });

  test('get: by task id', async () => {
    const response = await nimbleSdk.tasks.get('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');

    expect(response).toBeDefined();
    expect(requests).toContainEqual({
      method: 'GET',
      path: '/v1/tasks/e8ed8ef6-2657-43ba-98d5-a5c79ea7b551',
    });
  });

  test('results: by task id', async () => {
    const response = await nimbleSdk.tasks.results('e8ed8ef6-2657-43ba-98d5-a5c79ea7b551');

    expect(response).toBeDefined();
    expect(requests).toContainEqual({
      method: 'GET',
      path: '/v1/tasks/e8ed8ef6-2657-43ba-98d5-a5c79ea7b551/results',
    });
  });
});
