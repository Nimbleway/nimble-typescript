import Nimble from '@nimble-way/nimble-js';

function getBaseURL(): string {
  const port = process.env.PRISM_PORT || '4010';
  return `http://127.0.0.1:${port}`;
}

export function createClient(): Nimble {
  return new Nimble({
    apiKey: 'test-api-key',
    baseURL: getBaseURL(),
    maxRetries: 0,
    timeout: 10_000,
  });
}

export type CapturedRequest = { method: string; path: string };

export function createClientWithCapture(): { client: Nimble; requests: CapturedRequest[] } {
  const requests: CapturedRequest[] = [];

  const client = new Nimble({
    apiKey: 'test-api-key',
    baseURL: getBaseURL(),
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
