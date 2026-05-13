import { describe, test, expect, beforeEach } from 'vitest';
import { createClientWithCapture, type CapturedRequest } from '../src/client.js';

let nimbleSdk: ReturnType<typeof createClientWithCapture>['nimbleSdk'];
let requests: CapturedRequest[];

beforeEach(() => {
  ({ nimbleSdk, requests } = createClientWithCapture());
});

describe('media', () => {
  // Spec bug: endpoint only declares binary content type, SDK expects JSON
  test.fails('run: required params only', async () => {
    const response = await nimbleSdk.media.run({
      url: 'https://www.example.com/image.jpg',
    });

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'POST', path: '/v1/media' });
  });

  // Spec bug: api_type enum missing media value
  test.fails('runAsync: required params only', async () => {
    const response = await nimbleSdk.media.runAsync({
      url: 'https://www.example.com/image.jpg',
    });

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'POST', path: '/v1/media/async' });
  });
});
