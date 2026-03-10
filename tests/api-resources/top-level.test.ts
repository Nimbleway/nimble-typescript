// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nimble from '@nimble-way/nimble-js';

const client = new Nimble({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('top level methods', () => {
  // Mock server tests are disabled
  test.skip('extract: only required params', async () => {
    const responsePromise = client.extract({ url: 'url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('extract: required and optional params', async () => {
    const response = await client.extract({
      url: 'url',
      browser: 'chrome',
      browser_actions: [
        { goto: 'https://example.com/login' },
        { wait_for_element: '#login-form' },
        {
          fill: {
            selector: '#username',
            value: 'user@example.com',
            click_on_element: true,
            delay: 1000,
            mode: 'type',
            mouse_movement_strategy: 'linear',
            required: 'true',
            scroll: true,
            skip: 'true',
            timeout: 0,
            typing_interval: 1000,
            typing_strategy: 'simple',
            visible: true,
          },
        },
        {
          fill: {
            selector: '#password',
            value: 'password123',
            click_on_element: true,
            delay: 1000,
            mode: 'type',
            mouse_movement_strategy: 'linear',
            required: 'true',
            scroll: true,
            skip: 'true',
            timeout: 0,
            typing_interval: 1000,
            typing_strategy: 'simple',
            visible: true,
          },
        },
        { click: '#submit' },
        {
          screenshot: {
            format: 'png',
            full_page: true,
            quality: 0,
            required: 'true',
            skip: 'true',
          },
        },
      ],
      city: 'Los Angeles',
      consent_header: true,
      cookies: [
        {
          creation: 'creation',
          domain: 'domain',
          expires: 'expires',
          extensions: ['string'],
          hostOnly: true,
          httpOnly: true,
          lastAccessed: 'lastAccessed',
          maxAge: 'Infinity',
          name: 'name',
          path: 'path',
          pathIsDefault: true,
          sameSite: 'strict',
          secure: true,
          value: 'value',
        },
      ],
      country: 'US',
      device: 'desktop',
      driver: 'vx8',
      expected_status_codes: [200, 201],
      formats: ['html'],
      headers: { 'User-Agent': 'CustomBot/1.0', 'Accept-Language': 'en-US' },
      http2: true,
      is_xhr: true,
      locale: 'en-US',
      method: 'GET',
      network_capture: [
        {
          method: 'GET',
          resource_type: 'document',
          status_code: 100,
          url: { value: 'value', type: 'exact' },
          validation: true,
          wait_for_requests_count: 0,
          wait_for_requests_count_timeout: 1,
        },
      ],
      os: 'windows',
      parse: true,
      parser: { myParser: 'bar' },
      referrer_type: 'random',
      render: true,
      request_timeout: 30000,
      session: {
        id: 'id',
        prefetch_userbrowser: true,
        retry: true,
        timeout: 1,
      },
      skill: 'dynamic-content',
      state: 'CA',
      tag: 'campaign-2024-q1',
    });
  });

  // Mock server tests are disabled
  test.skip('extractAsync: only required params', async () => {
    const responsePromise = client.extractAsync({ url: 'url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('extractAsync: required and optional params', async () => {
    const response = await client.extractAsync({
      url: 'url',
      browser: 'chrome',
      browser_actions: [
        { goto: 'https://example.com/login' },
        { wait_for_element: '#login-form' },
        {
          fill: {
            selector: '#username',
            value: 'user@example.com',
            click_on_element: true,
            delay: 1000,
            mode: 'type',
            mouse_movement_strategy: 'linear',
            required: 'true',
            scroll: true,
            skip: 'true',
            timeout: 0,
            typing_interval: 1000,
            typing_strategy: 'simple',
            visible: true,
          },
        },
        {
          fill: {
            selector: '#password',
            value: 'password123',
            click_on_element: true,
            delay: 1000,
            mode: 'type',
            mouse_movement_strategy: 'linear',
            required: 'true',
            scroll: true,
            skip: 'true',
            timeout: 0,
            typing_interval: 1000,
            typing_strategy: 'simple',
            visible: true,
          },
        },
        { click: '#submit' },
        {
          screenshot: {
            format: 'png',
            full_page: true,
            quality: 0,
            required: 'true',
            skip: 'true',
          },
        },
      ],
      callback_url: 'https://example.com/webhook/callback',
      city: 'Los Angeles',
      consent_header: true,
      cookies: [
        {
          creation: 'creation',
          domain: 'domain',
          expires: 'expires',
          extensions: ['string'],
          hostOnly: true,
          httpOnly: true,
          lastAccessed: 'lastAccessed',
          maxAge: 'Infinity',
          name: 'name',
          path: 'path',
          pathIsDefault: true,
          sameSite: 'strict',
          secure: true,
          value: 'value',
        },
      ],
      country: 'US',
      device: 'desktop',
      driver: 'vx8',
      expected_status_codes: [200, 201],
      formats: ['html'],
      headers: { 'User-Agent': 'CustomBot/1.0', 'Accept-Language': 'en-US' },
      http2: true,
      is_xhr: true,
      locale: 'en-US',
      method: 'GET',
      network_capture: [
        {
          method: 'GET',
          resource_type: 'document',
          status_code: 100,
          url: { value: 'value', type: 'exact' },
          validation: true,
          wait_for_requests_count: 0,
          wait_for_requests_count_timeout: 1,
        },
      ],
      os: 'windows',
      parse: true,
      parser: { myParser: 'bar' },
      referrer_type: 'random',
      render: true,
      request_timeout: 30000,
      session: {
        id: 'id',
        prefetch_userbrowser: true,
        retry: true,
        timeout: 1,
      },
      skill: 'dynamic-content',
      state: 'CA',
      storage_compress: true,
      storage_object_name: 'result-2024-01-15.json',
      storage_type: 's3',
      storage_url: 's3://bucket-name/path/to/object',
      tag: 'campaign-2024-q1',
    });
  });

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
      focus: 'string',
      include_answer: true,
      include_domains: ['string'],
      locale: 'locale',
      max_results: 1,
      max_subagents: 1,
      output_format: 'plain_text',
      search_depth: 'lite',
      start_date: 'start_date',
      time_range: 'hour',
    });
  });
});
