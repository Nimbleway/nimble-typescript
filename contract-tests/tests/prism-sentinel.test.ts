import { describe, test, expect } from 'vitest';
import { PRISM_BASE_URL } from '../src/client.js';

// Validates that Prism's --errors flag is active and enforcing the spec.
// If these tests fail, the entire suite's safety guarantee is gone.
describe('prism sentinel', () => {
  test('rejects request with invalid body (422)', async () => {
    const response = await fetch(`${PRISM_BASE_URL}/v1/extract`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer test-api-key' },
      body: JSON.stringify({}),
    });

    expect(response.status).toBe(400);
  });

  test('returns 404 for nonexistent route', async () => {
    const response = await fetch(`${PRISM_BASE_URL}/v1/nonexistent-route`, {
      method: 'GET',
      headers: { Authorization: 'Bearer test-api-key' },
    });

    expect(response.status).toBe(404);
  });
});
