// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nimble from 'nimble-js';

const client = new Nimble({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('top level methods', () => {
  // Prism tests are disabled
  test.skip('agent: only required params', async () => {
    const responsePromise = client.agent({
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

  // Prism tests are disabled
  test.skip('agent: required and optional params', async () => {
    const response = await client.agent({
      agent: 'agent',
      params: { foo: 'bar' },
      localization: true,
    });
  });

  // Prism tests are disabled
  test.skip('crawl: only required params', async () => {
    const responsePromise = client.crawl({ url: 'url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('crawl: required and optional params', async () => {
    const response = await client.crawl({
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

  // Prism tests are disabled
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

  // Prism tests are disabled
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
