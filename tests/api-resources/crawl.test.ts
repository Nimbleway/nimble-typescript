// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nimble from 'nimble-js';

const client = new Nimble({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource crawl', () => {
  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.crawl.list({ status: 'queued' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.crawl.list({
      status: 'queued',
      cursor: 'cursor',
      limit: 10,
    });
  });

  // Prism tests are disabled
  test.skip('root: only required params', async () => {
    const responsePromise = client.crawl.root({ url: 'url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('root: required and optional params', async () => {
    const response = await client.crawl.root({
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
        city: 'Los Angeles',
        client_timeout: 25000,
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
        disable_ip_check: false,
        driver: 'vx8',
        dynamic_parser: { myParser: 'bar' },
        expected_status_codes: [200, 201],
        format: 'json',
        headers: { 'User-Agent': 'CustomBot/1.0', 'Accept-Language': 'en-US' },
        http2: true,
        ip6: false,
        is_xhr: true,
        locale: 'en-US',
        markdown: false,
        metadata: {
          account_name: 'acme-corp',
          definition_id: 456,
          definition_name: 'product-scraper',
          endpoint: '/api/v2/scrape',
          execution_id: 'exec-abc123',
          flowit_task_id: 'task-xyz789',
          input_id: 'input-123',
          pipeline_execution_id: 12345,
          query_template_id: 'template-qry-001',
          source: 'web-app',
          template_id: 789,
          template_name: 'e-commerce-template',
        },
        method: 'GET',
        native_mode: 'requester',
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
        no_html: false,
        no_userbrowser: false,
        os: 'windows',
        parse: true,
        parse_options: { merge_dynamic: true },
        parser: { myParser: 'bar' },
        proxy_provider: 'brightdata',
        proxy_providers: { brightdata: 70, oxylabs: 30 },
        query_template: {
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          api_type: 'WEB',
          pagination: { next_page_params: { foo: 'bar' } },
          params: { foo: 'bar' },
        },
        raw_headers: true,
        referrer_type: 'random',
        render: true,
        render_flow: [{ wait: 'bar' }, { click: 'bar' }],
        render_options: {
          adblock: true,
          blocked_domains: ['ads.example.com', 'tracker.com'],
          browser_engine: 'chrome',
          cache: false,
          connector_type: 'puppeteer',
          disabled_resources: ['image', 'stylesheet'],
          enable_2captcha: true,
          extensions: ['extension-id-1', 'extension-id-2'],
          fingerprint_id: 'fp-abc123',
          hackium_configuration: {
            collect_logs: true,
            do_not_fix_math_salt: true,
            enable_document_element_spoof: true,
            enable_document_has_focus: true,
            enable_fake_navigation_history: true,
            enable_key_ordering: true,
            enable_sniffer: true,
            enable_verbose_logs: true,
          },
          headless: true,
          include_iframes: true,
          load_local_storage: true,
          local_storage_keys_to_load: ['authToken', 'userId'],
          mouse_strategy: 'linear',
          no_accept_encoding: true,
          override_permissions: true,
          random_header_order: true,
          render_type: 'domcontentloaded',
          store_local_storage: true,
          timeout: 30000,
          typing_interval: 100,
          typing_strategy: 'simple',
          userbrowser: true,
          wait_until: 'networkidle2',
          with_performance_metrics: true,
        },
        request_timeout: 30000,
        save_userbrowser: false,
        session: {
          id: 'id',
          prefetch_userbrowser: true,
          retry: true,
          timeout: 1,
        },
        skill: 'dynamic-content',
        skip_ubct: false,
        state: 'CA',
        tag: 'campaign-2024-q1',
        template: {
          name: 'x',
          params: { foo: 'bar' },
        },
        type: 'generic',
        url: 'https://example.com/page',
        userbrowser_creation_template_rendered: {
          id: 'id',
          allowed_parameter_names: ['x'],
          render_flow_rendered: [{ foo: 'bar' }],
        },
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

  // Prism tests are disabled
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
