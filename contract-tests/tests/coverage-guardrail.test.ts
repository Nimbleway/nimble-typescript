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
  let proto: object | null = Object.getPrototypeOf(obj);
  while (proto && proto !== Object.prototype) {
    const record = proto as Record<string, unknown>;
    for (const name of Object.getOwnPropertyNames(proto)) {
      if (
        typeof record[name] === 'function' &&
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

function getResource(nimbleSdk: Nimble, name: string): unknown {
  return (nimbleSdk as Record<string, unknown>)[name];
}

function getResourceNames(nimbleSdk: Nimble): string[] {
  const resources: string[] = [];
  for (const key of Object.keys(nimbleSdk)) {
    const val = getResource(nimbleSdk, key);
    if (val !== null && val !== undefined && typeof val === 'object' && '_client' in val && !key.startsWith('_')) {
      resources.push(key);
    }
  }
  return resources;
}

const TESTED_CLIENT_METHODS = ['extract', 'extractAsync', 'extractBatch', 'map', 'search'];

// SDK methods that exist but are not in the public OpenAPI spec
const PRIVATE_METHODS: Record<string, string[]> = {
  agent: ['publish'],
};

const TESTED_RESOURCE_METHODS: Record<string, string[]> = {
  agent: ['run', 'runAsync', 'runBatch', 'list', 'get', 'generate', 'getGeneration'],
  crawl: ['run', 'list', 'status', 'terminate'],
  tasks: ['list', 'get', 'results'],
  batches: ['list', 'get', 'progress'],
  serp: ['run', 'runAsync', 'runBatch'],
  media: ['run', 'runAsync'],
  domainKnowledge: ['getDriver'],
};

describe('API surface coverage guardrail', () => {
  const nimbleSdk = new Nimble({ apiKey: 'test' });

  test('all top-level client methods are tested', () => {
    const actualMethods = getPublicMethods(nimbleSdk);
    const untested = actualMethods.filter((m) => !TESTED_CLIENT_METHODS.includes(m));
    expect(untested, `Untested top-level methods: ${untested.join(', ')}`).toEqual([]);
  });

  test('all resource sub-clients are tested', () => {
    const actualResources = getResourceNames(nimbleSdk);
    const untestedResources = actualResources.filter((r) => !TESTED_RESOURCE_METHODS[r]);
    expect(untestedResources, `Untested resources: ${untestedResources.join(', ')}`).toEqual([]);
  });

  for (const [resource, testedMethods] of Object.entries(TESTED_RESOURCE_METHODS)) {
    test(`all ${resource} methods are tested`, () => {
      const resourceObj = getResource(nimbleSdk, resource);
      expect(resourceObj, `Resource '${resource}' not found on client`).toBeDefined();

      const excluded = PRIVATE_METHODS[resource] ?? [];
      const actualMethods = getPublicMethods(resourceObj as object).filter((m) => !excluded.includes(m));
      const untested = actualMethods.filter((m) => !testedMethods.includes(m));
      expect(untested, `Untested ${resource} methods: ${untested.join(', ')}`).toEqual([]);
    });
  }

  test('summary: total coverage', () => {
    const clientMethods = getPublicMethods(nimbleSdk);
    const allResourceMethods = Object.entries(TESTED_RESOURCE_METHODS).flatMap(([resource, _]) => {
      const resourceObj = getResource(nimbleSdk, resource);
      return getPublicMethods(resourceObj as object).map((m) => `${resource}.${m}`);
    });

    const totalMethods = clientMethods.length + allResourceMethods.length;
    const testedCount =
      TESTED_CLIENT_METHODS.length +
      Object.values(TESTED_RESOURCE_METHODS).reduce((sum, m) => sum + m.length, 0);

    console.log(`\n📊 SDK API Surface Coverage: ${testedCount}/${totalMethods} methods tested`);
    expect(testedCount).toBeGreaterThanOrEqual(totalMethods);
  });
});
