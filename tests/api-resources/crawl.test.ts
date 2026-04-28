// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nimble from '@nimble-way/nimble-js';

const client = new Nimble({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource crawl', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.crawl.list();
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
      client.crawl.list(
        {
          cursor: 'cursor',
          limit: 10,
          status: 'queued',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Nimble.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('run: only required params', async () => {
    const responsePromise = client.crawl.run({ url: 'url' });
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
    const response = await client.crawl.run({
      url: 'url',
      allow_external_links: false,
      allow_subdomains: false,
      callback: {
        url: 'https://example.com',
        events: ['started'],
        headers: { foo: 'string' },
        metadata: { foo: 'bar' },
      },
      crawl_entire_domain: false,
      exclude_paths: ['/exclude-this-path', '/and-this-path'],
      extract_options: {
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
        cookies: 'sessionId=abc123; userId=user456',
        country: 'US',
        device: 'desktop',
        driver: 'vx8',
        expected_status_codes: [200, 201],
        formats: ['html'],
        headers: { 'User-Agent': 'CustomBot/1.0', 'Accept-Language': 'en-US' },
        http2: true,
        is_xhr: true,
        locale: 'en-US',
        markdown_backend: 'full_page',
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
        url: 'url',
      },
      ignore_query_parameters: false,
      include_paths: ['/include-this-path', '/and-this-path'],
      limit: 100,
      max_discovery_depth: 3,
      name: 'The best crawl ever',
      sitemap: 'include',
    });
  });

  // Mock server tests are disabled
  test.skip('status', async () => {
    const responsePromise = client.crawl.status('123e4567-e89b-12d3-a456-426614174000');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('terminate', async () => {
    const responsePromise = client.crawl.terminate('123e4567-e89b-12d3-a456-426614174000');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
