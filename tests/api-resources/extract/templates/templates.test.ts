// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nimble from '@nimble-way/nimble-js';

const client = new Nimble({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource templates', () => {
  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.extract.templates.update('extract_template_name', {
      body: [{ op: 'add', path: 'path' }],
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
  test.skip('update: required and optional params', async () => {
    const response = await client.extract.templates.update('extract_template_name', {
      body: [
        {
          op: 'add',
          path: 'path',
          from: 'from',
          value: {},
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.extract.templates.list();
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
      client.extract.templates.list({ limit: 1, offset: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Nimble.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.extract.templates.delete('extract_template_name');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('async: only required params', async () => {
    const responsePromise = client.extract.templates.async({
      params: { foo: 'bar' },
      template: 'template',
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
    const response = await client.extract.templates.async({
      params: { foo: 'bar' },
      template: 'template',
      callback_url: 'https://example.com/webhook/callback',
      formats: ['html', 'markdown'],
      localization: true,
      storage_compress: true,
      storage_object_name: 'result-2024-01-15.json',
      storage_type: 's3',
      storage_url: 's3://bucket-name/path/to/object',
    });
  });

  // Mock server tests are disabled
  test.skip('batch: only required params', async () => {
    const responsePromise = client.extract.templates.batch({
      inputs: [{}],
      shared_inputs: { template: 'template' },
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
  test.skip('batch: required and optional params', async () => {
    const response = await client.extract.templates.batch({
      inputs: [
        {
          formats: ['html', 'markdown'],
          localization: true,
          params: { foo: 'bar' },
        },
      ],
      shared_inputs: {
        template: 'template',
        formats: ['html', 'markdown'],
        localization: true,
        params: { foo: 'bar' },
      },
    });
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.extract.templates.get('extract_template_name');
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
    const responsePromise = client.extract.templates.run({
      params: { foo: 'bar' },
      template: 'template',
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
    const response = await client.extract.templates.run({
      params: { foo: 'bar' },
      template: 'template',
      formats: ['html', 'markdown'],
      localization: true,
    });
  });
});
