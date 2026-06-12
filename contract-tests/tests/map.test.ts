import { describe, test, expect, beforeEach } from 'vitest';
import { createClientWithCapture, type CapturedRequest } from '../src/client.js';

let client: ReturnType<typeof createClientWithCapture>['client'];
let requests: CapturedRequest[];

beforeEach(() => {
  ({ client, requests } = createClientWithCapture());
});

describe('map', () => {
  test('map: required params only', async () => {
    const response = await client.map({ url: 'https://www.example.com' });

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'POST', path: '/v1/map' });
  });

  test('map: with optional params', async () => {
    const response = await client.map({
      url: 'https://www.example.com',
      country: 'US',
      locale: 'en-US',
    });

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'POST', path: '/v1/map' });
  });
});
