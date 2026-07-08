import Nimble from '@nimble-way/nimble-js';

const PRISM_PORT = process.env.PRISM_PORT || '4010';

export const PRISM_BASE_URL = `http://127.0.0.1:${PRISM_PORT}`;

export function createClient(): Nimble {
  return new Nimble({
    apiKey: 'test-api-key',
    baseURL: PRISM_BASE_URL,
    maxRetries: 0,
    timeout: 10_000,
  });
}

export type CapturedRequest = { method: string; path: string };

export function createClientWithCapture(): { client: Nimble; requests: CapturedRequest[] } {
  const requests: CapturedRequest[] = [];

  const client = new Nimble({
    apiKey: 'test-api-key',
    baseURL: PRISM_BASE_URL,
    maxRetries: 0,
    timeout: 10_000,
    fetch: async (url, init) => {
      const parsed = new URL(typeof url === 'string' ? url : url.toString());
      requests.push({
        method: (init?.method ?? 'GET').toUpperCase(),
        path: parsed.pathname,
      });
      return globalThis.fetch(url, init);
    },
  });

  return { client, requests };
}
