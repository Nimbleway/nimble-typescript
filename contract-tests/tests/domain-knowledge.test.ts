import { describe, test, expect, beforeEach } from 'vitest';
import { createClientWithCapture, type CapturedRequest } from '../src/client.js';

let nimbleSdk: ReturnType<typeof createClientWithCapture>['nimbleSdk'];
let requests: CapturedRequest[];

beforeEach(() => {
  ({ nimbleSdk, requests } = createClientWithCapture());
});

describe('domainKnowledge', () => {
  // Route not in public spec
  test.fails('getDriver: no params', async () => {
    const response = await nimbleSdk.domainKnowledge.getDriver();

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'GET', path: '/v1/domain-knowledge/driver' });
  });
});
