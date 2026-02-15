// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nimble from 'nimble-js';

const client = new Nimble({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('top level methods', () => {
  // Prism tests are disabled
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

  // Prism tests are disabled
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
});
