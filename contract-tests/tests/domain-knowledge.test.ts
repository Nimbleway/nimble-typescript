import { describe, test, expect, beforeEach } from 'vitest';
import { createClientWithCapture, type CapturedRequest } from '../src/client.js';

let client: ReturnType<typeof createClientWithCapture>['client'];
let requests: CapturedRequest[];

beforeEach(() => {
  ({ client, requests } = createClientWithCapture());
});

describe('domainKnowledge', () => {
  // Route not in public spec
  test.fails('getDriver: no params', async () => {
    const response = await client.domainKnowledge.getDriver();

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'GET', path: '/v1/domain-knowledge/driver' });
  });
});
