import { describe, test, expect } from 'vitest';
import { createClient } from '../src/client.js';

const client = createClient();

describe('search', () => {
  test('search: required params only', async () => {
    const response = await client.search({ query: 'Nike brand perception' });
    expect(response).toBeDefined();
  });

  test('search: with optional params', async () => {
    const response = await client.search({
      query: 'Nike brand perception consumer reviews',
      focus: 'social',
      max_results: 10,
      country: 'US',
      locale: 'en',
      search_depth: 'fast',
      include_answer: true,
    });
    expect(response).toBeDefined();
  });
});
