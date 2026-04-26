import { describe, test, expect } from 'vitest';
import Nimble from '@nimble-way/nimble-js';

const INTERNAL_METHODS = new Set([
  'constructor',
  'withOptions',
  'get',
  'post',
  'patch',
  'put',
  'delete',
  'getAPIList',
  'buildURL',
  'buildRequest',
  'makeRequest',
  'makeStatusError',
  'fetchWithTimeout',
  'prepareOptions',
  'prepareRequest',
  'defaultQuery',
  'validateHeaders',
  'authHeaders',
  'stringifyQuery',
  'getUserAgent',
  'defaultIdempotencyKey',
  'methodRequest',
  'request',
  'shouldRetry',
  'retryRequest',
  'calculateDefaultRetryTimeoutMillis',
  'buildHeaders',
  'buildBody',
]);

function getPublicMethods(obj: object): string[] {
  const methods: string[] = [];
  let proto = Object.getPrototypeOf(obj);
  while (proto && proto !== Object.prototype) {
    for (const name of Object.getOwnPropertyNames(proto)) {
      if (
        typeof (proto as any)[name] === 'function' &&
        !name.startsWith('_') &&
        !name.startsWith('#') &&
        !INTERNAL_METHODS.has(name)
      ) {
        methods.push(name);
      }
    }
    proto = Object.getPrototypeOf(proto);
  }
  return [...new Set(methods)];
}

const KNOWN_RESOURCES = new Set(['agent', 'crawl', 'tasks', 'batches']);

function getResourceNames(client: Nimble): string[] {
  const resources: string[] = [];
  for (const key of Object.keys(client)) {
    const val = (client as any)[key];
    if (
      val &&
      typeof val === 'object' &&
      typeof val._client !== 'undefined' &&
      !key.startsWith('_')
    ) {
      resources.push(key);
    }
  }
  return resources;
}

const TESTED_CLIENT_METHODS = ['extract', 'extractAsync', 'extractBatch', 'map', 'search'];

const TESTED_RESOURCE_METHODS: Record<string, string[]> = {
  agent: ['run', 'runAsync', 'runBatch', 'list', 'get', 'generate', 'getGeneration', 'publish'],
  crawl: ['run', 'list', 'status', 'terminate'],
  tasks: ['list', 'get', 'results'],
  batches: ['list', 'get', 'progress'],
};

describe('API surface coverage guardrail', () => {
  const client = new Nimble({ apiKey: 'test' });

  test('all top-level client methods are tested', () => {
    const actualMethods = getPublicMethods(client);
    const untested = actualMethods.filter((m) => !TESTED_CLIENT_METHODS.includes(m));
    expect(untested, `Untested top-level methods: ${untested.join(', ')}`).toEqual([]);
  });

  test('all resource sub-clients are tested', () => {
    const actualResources = getResourceNames(client);
    const untestedResources = actualResources.filter((r) => !TESTED_RESOURCE_METHODS[r]);
    expect(
      untestedResources,
      `Untested resources: ${untestedResources.join(', ')}`,
    ).toEqual([]);
  });

  for (const [resource, testedMethods] of Object.entries(TESTED_RESOURCE_METHODS)) {
    test(`all ${resource} methods are tested`, () => {
      const resourceObj = (client as any)[resource];
      expect(resourceObj, `Resource '${resource}' not found on client`).toBeDefined();

      const actualMethods = getPublicMethods(resourceObj);
      const untested = actualMethods.filter((m) => !testedMethods.includes(m));
      expect(untested, `Untested ${resource} methods: ${untested.join(', ')}`).toEqual([]);
    });
  }

  test('summary: total coverage', () => {
    const clientMethods = getPublicMethods(client);
    const allResourceMethods = Object.entries(TESTED_RESOURCE_METHODS).flatMap(([resource, _]) => {
      const resourceObj = (client as any)[resource];
      return getPublicMethods(resourceObj).map((m) => `${resource}.${m}`);
    });

    const totalMethods = clientMethods.length + allResourceMethods.length;
    const testedCount =
      TESTED_CLIENT_METHODS.length +
      Object.values(TESTED_RESOURCE_METHODS).reduce((sum, m) => sum + m.length, 0);

    console.log(`\n📊 SDK API Surface Coverage: ${testedCount}/${totalMethods} methods tested`);
    expect(testedCount).toBeGreaterThanOrEqual(totalMethods);
  });
});
