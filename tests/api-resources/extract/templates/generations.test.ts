// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nimble from '@nimble-way/nimble-js';

const client = new Nimble({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource generations', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.extract.templates.generations.create({ prompt: 'prompt', url: 'url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.extract.templates.generations.create({
      prompt: 'prompt',
      url: 'url',
      input_schema: { foo: 'bar' },
      metadata: {
        description: 'description',
        display_name: 'display_name',
        tags: ['string'],
      },
      name: 'name',
      output_schema: { foo: 'bar' },
    });
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.extract.templates.generations.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
