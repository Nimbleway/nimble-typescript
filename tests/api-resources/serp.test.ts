// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nimble from '@nimble-way/nimble-js';

const client = new Nimble({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource serp', () => {
  // Mock server tests are disabled
  test.skip('run: only required params', async () => {
    const responsePromise = client.serp.run({ search_engine: 'google_search' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('run: required and optional params', async () => {
    const response = await client.serp.run({
      search_engine: 'google_search',
      country: 'US',
      device: 'desktop',
      domain: 'com',
      locale: 'en',
      location: 'New York, New York, United States',
      num_results: 10,
      page: 1,
      parse: true,
      query: 'nimble web data',
      render: false,
      show_hidden_results: false,
    });
  });

  // Mock server tests are disabled
  test.skip('runAsync: only required params', async () => {
    const responsePromise = client.serp.runAsync({ search_engine: 'google_search' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('runAsync: required and optional params', async () => {
    const response = await client.serp.runAsync({
      search_engine: 'google_search',
      callback_url: 'https://example.com/webhook/callback',
      country: 'US',
      device: 'desktop',
      domain: 'com',
      locale: 'en',
      location: 'New York, New York, United States',
      num_results: 10,
      page: 1,
      parse: true,
      query: 'nimble web data',
      render: false,
      show_hidden_results: false,
      storage_compress: true,
      storage_object_name: 'result-2024-01-15.json',
      storage_type: 's3',
      storage_url: 's3://bucket-name/path/to/object',
    });
  });

  // Mock server tests are disabled
  test.skip('runBatch: only required params', async () => {
    const responsePromise = client.serp.runBatch({ inputs: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('runBatch: required and optional params', async () => {
    const response = await client.serp.runBatch({
      inputs: [
        {
          callback_url: 'https://example.com/webhook/callback',
          country: 'US',
          device: 'desktop',
          domain: 'com',
          locale: 'en',
          location: 'New York, New York, United States',
          num_results: 10,
          page: 1,
          parse: true,
          query: 'nimble web data',
          render: false,
          search_engine: 'google_search',
          show_hidden_results: false,
          storage_compress: true,
          storage_object_name: 'result-2024-01-15.json',
          storage_type: 's3',
          storage_url: 's3://bucket-name/path/to/object',
        },
      ],
      shared_inputs: {
        callback_url: 'https://example.com/webhook/callback',
        country: 'US',
        device: 'desktop',
        domain: 'com',
        locale: 'en',
        location: 'New York, New York, United States',
        num_results: 10,
        page: 1,
        parse: true,
        query: 'nimble web data',
        render: false,
        search_engine: 'google_search',
        show_hidden_results: false,
        storage_compress: true,
        storage_object_name: 'result-2024-01-15.json',
        storage_type: 's3',
        storage_url: 's3://bucket-name/path/to/object',
      },
    });
  });
});
