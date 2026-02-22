// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nimble from 'nimble-js';

const client = new Nimble({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('top level methods', () => {
  // Mock server tests are disabled
  test.skip('map: only required params', async () => {
    const responsePromise = client.map({ url: 'url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('map: required and optional params', async () => {
    const response = await client.map({
      url: 'url',
      country: 'US',
      domain_filter: 'all',
      limit: 1000,
      locale: 'en-US',
      sitemap: 'include',
    });
  });

  // Mock server tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.search({ query: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('search: required and optional params', async () => {
    const response = await client.search({
      query: 'x',
      content_type: ['string'],
      country: 'country',
      deep_search: true,
      end_date: 'end_date',
      exclude_domains: ['string'],
      include_answer: true,
      include_domains: ['string'],
      locale: 'locale',
      max_subagents: 1,
      num_results: 1,
      parsing_type: 'plain_text',
      search_engine: 'google_search',
      start_date: 'start_date',
      time_range: 'hour',
      topic: 'string',
    });
  });
});
