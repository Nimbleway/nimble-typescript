// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nimble from '@nimble-way/nimble-js';

const client = new Nimble({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource runs', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.agents.runs.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      input: 'input',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.agents.runs.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      input: 'input',
      effort: 'low',
      enable_events: true,
      input_data: [{ foo: 'bar' }],
      output_schema: { foo: 'bar' },
      previous_interaction_id: 'previous_interaction_id',
      sources: {
        allow: [
          {
            domains: ['string'],
            title: 'title',
            order: 0,
          },
        ],
        avoid: 'avoid',
        block: [
          {
            domains: ['string'],
            title: 'title',
            order: 0,
          },
        ],
        prioritize: 'prioritize',
      },
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.agents.runs.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.agents.runs.list(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { limit: 1, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Nimble.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.agents.runs.get('run_id', {
      agent_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.agents.runs.get('run_id', {
      agent_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('result: only required params', async () => {
    const responsePromise = client.agents.runs.result('run_id', {
      agent_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('result: required and optional params', async () => {
    const response = await client.agents.runs.result('run_id', {
      agent_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('streamEvents: only required params', async () => {
    const responsePromise = client.agents.runs.streamEvents('run_id', {
      agent_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('streamEvents: required and optional params', async () => {
    const response = await client.agents.runs.streamEvents('run_id', {
      agent_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
