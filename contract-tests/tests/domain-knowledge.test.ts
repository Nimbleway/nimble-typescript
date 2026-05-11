import { describe, test, expect, beforeEach } from 'vitest';
import { createClientWithCapture, type CapturedRequest } from '../src/client.js';

let client: ReturnType<typeof createClientWithCapture>['client'];
let requests: CapturedRequest[];

beforeEach(() => {
  ({ client, requests } = createClientWithCapture());
});

// TODO: /v1/domain-knowledge/driver is not in the public OpenAPI spec.
// This test exercises the SDK method but will 404 against Prism.
describe('domainKnowledge', () => {
  test('getDriver: no params', async () => {
    const response = await client.domainKnowledge.getDriver();

    expect(response).toBeDefined();
    expect(requests).toContainEqual({ method: 'GET', path: '/v1/domain-knowledge/driver' });
  });
});
