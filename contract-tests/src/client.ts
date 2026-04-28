import Nimble from '@nimble-way/nimble-js';

const PRISM_PORT = process.env.PRISM_PORT || '4010';

export function createClient(): Nimble {
  return new Nimble({
    apiKey: 'test-api-key',
    baseURL: `http://127.0.0.1:${PRISM_PORT}`,
    maxRetries: 0,
    timeout: 10_000,
  });
}
