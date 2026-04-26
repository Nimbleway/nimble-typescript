import { describe, test, expect } from 'vitest';
import { createClient } from '../src/client.js';

const client = createClient();

const searchResultSchema = expect.objectContaining({
  title: expect.any(String),
  description: expect.any(String),
  url: expect.any(String),
  content: expect.any(String),
  // eslint-disable-next-line no-restricted-syntax -- spec defines as empty object
  additional_data: expect.objectContaining({}),
  metadata: expect.objectContaining({
    position: expect.any(Number),
    entity_type: expect.any(String),
    country: expect.any(String),
    locale: expect.any(String),
    driver: expect.any(String),
  }),
});

const searchResponseSchema = {
  request_id: expect.any(String),
  total_results: expect.any(Number),
  results: expect.arrayContaining([searchResultSchema]),
};

describe('search', () => {
  test('search: required params only', async () => {
    const response = await client.search({ query: 'Nike brand perception' });

    expect(response).toMatchObject(searchResponseSchema);
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

    expect(response).toMatchObject({
      ...searchResponseSchema,
      answer: expect.any(String),
      answer_citations: expect.arrayContaining([
        expect.objectContaining({
          marker: expect.any(Number),
          result_index: expect.any(Number),
        }),
      ]),
    });
  });
});
