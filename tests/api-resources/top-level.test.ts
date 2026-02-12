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

  // Prism tests are disabled
  test.skip('agent: required and optional params', async () => {
    const response = await client.agent({
      params: { foo: 'bar' },
      template: 'template',
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
        expected_status_codes: [200, 201],
        formats: ['html'],
        headers: { 'User-Agent': 'CustomBot/1.0', 'Accept-Language': 'en-US' },
        http2: true,
        ip6: false,
        is_xhr: true,
        locale: 'en-US',
        metadata: {
          account_name: 'account_name',
          api_type: 'api_type',
          crawl_depth: -9007199254740991,
          crawl_id: 'crawl_id',
          definition_id: -9007199254740991,
          definition_name: 'definition_name',
          endpoint: 'endpoint',
          execution_id: 'execution_id',
          flowit_task_id: 'flowit_task_id',
          input_id: 'input_id',
          is_public_wsa: true,
          is_sitemap: true,
          is_wsa: true,
          parser_id: 'parser_id',
          pipeline_execution_id: -9007199254740991,
          query_template_id: 'query_template_id',
          source: 'source',
          template_id: -9007199254740991,
          template_name: 'template_name',
          wsa_id: 'wsa_id',
          wsa_name: 'wsa_name',
          wsa_version: 0,
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
        no_userbrowser: false,
        os: 'windows',
        parse: true,
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
        url: 'url',
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
      expected_status_codes: [200, 201],
      formats: ['html'],
      headers: { 'User-Agent': 'CustomBot/1.0', 'Accept-Language': 'en-US' },
      http2: true,
      ip6: false,
      is_xhr: true,
      locale: 'en-US',
      metadata: {
        account_name: 'account_name',
        api_type: 'api_type',
        crawl_depth: -9007199254740991,
        crawl_id: 'crawl_id',
        definition_id: -9007199254740991,
        definition_name: 'definition_name',
        endpoint: 'endpoint',
        execution_id: 'execution_id',
        flowit_task_id: 'flowit_task_id',
        input_id: 'input_id',
        is_public_wsa: true,
        is_sitemap: true,
        is_wsa: true,
        parser_id: 'parser_id',
        pipeline_execution_id: -9007199254740991,
        query_template_id: 'query_template_id',
        source: 'source',
        template_id: -9007199254740991,
        template_name: 'template_name',
        wsa_id: 'wsa_id',
        wsa_name: 'wsa_name',
        wsa_version: 0,
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
      no_userbrowser: false,
      os: 'windows',
      parse: true,
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
      userbrowser_creation_template_rendered: {
        id: 'id',
        allowed_parameter_names: ['x'],
        render_flow_rendered: [{ foo: 'bar' }],
      },
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
