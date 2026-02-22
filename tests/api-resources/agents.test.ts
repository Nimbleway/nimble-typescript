// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nimble from 'nimble-js';

const client = new Nimble({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource agents', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.agents.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.list(
        {
          limit: 1,
          offset: 0,
          privacy: 'public',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Nimble.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('async: only required params', async () => {
    const responsePromise = client.agents.async({
      agent: 'agent',
      params: { foo: 'bar' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('async: required and optional params', async () => {
    const response = await client.agents.async({
      agent: 'agent',
      params: { foo: 'bar' },
      callback_url: 'https://example.com/webhook/callback',
      localization: true,
      storage_compress: true,
      storage_object_name: 'result-2024-01-15.json',
      storage_type: 's3',
      storage_url: 's3://bucket-name/path/to/object',
    });
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.agents.get('template_name');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('run: only required params', async () => {
    const responsePromise = client.agents.run({
      agent: 'agent',
      params: { foo: 'bar' },
    });
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
    const response = await client.agents.run({
      agent: 'agent',
      params: { foo: 'bar' },
      localization: true,
    });
  });
});
