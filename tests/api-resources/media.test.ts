// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nimble from '@nimble-way/nimble-js';

const client = new Nimble({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource media', () => {
  // Mock server tests are disabled
  test.skip('run: only required params', async () => {
    const responsePromise = client.media.run({ url: 'https://example.com' });
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
    const response = await client.media.run({
      url: 'https://example.com',
      country: 'country',
      expected_mime_types: ['string'],
      locale: 'locale',
      storage: {
        url: 'url',
        object_name: 'object_name',
        type: 's3',
      },
    });
  });

  // Mock server tests are disabled
  test.skip('runAsync: only required params', async () => {
    const responsePromise = client.media.runAsync({ url: 'https://example.com' });
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
    const response = await client.media.runAsync({
      url: 'https://example.com',
      callback_url: 'https://example.com/webhook/callback',
      country: 'country',
      expected_mime_types: ['string'],
      locale: 'locale',
      storage: {
        url: 'url',
        object_name: 'object_name',
        type: 's3',
      },
      storage_compress: true,
      storage_object_name: 'result-2024-01-15.json',
      storage_type: 's3',
      storage_url: 's3://bucket-name/path/to/object',
    });
  });
});
