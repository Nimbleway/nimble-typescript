// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nimble from '@nimble-way/nimble-js';

const client = new Nimble({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource versions', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.extract.templates.versions.list('extract_template_name');
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
      client.extract.templates.versions.list(
        'extract_template_name',
        { limit: 1, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Nimble.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.extract.templates.versions.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      extract_template_name: 'extract_template_name',
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
  test.skip('get: required and optional params', async () => {
    const response = await client.extract.templates.versions.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      extract_template_name: 'extract_template_name',
    });
  });
});
