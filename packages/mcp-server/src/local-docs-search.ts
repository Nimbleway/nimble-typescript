// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'extract',
    endpoint: '/v1/extract',
    httpMethod: 'post',
    summary: 'Extract',
    description: 'Extract',
    stainlessPath: '(resource) $client > (method) extract',
    qualified: 'client.extract',
    params: [
      'url: string;',
      "browser?: 'chrome' | 'firefox' | { name: 'chrome' | 'firefox'; version?: string; };",
      "browser_actions?: { auto_scroll: boolean | number | string | { click_selector?: string | string[]; container?: string | string[]; delay_after_scroll?: number | string; idle_timeout?: number | string; loading_selector?: string | string[]; max_duration?: number | string; pause_on_selector?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; step_size?: number; }; } | { click: string | string[] | { selector: string | string[]; count?: number; delay?: number | string; offset_x?: number; offset_y?: number; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; steps?: number; strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; timeout?: number; visible?: boolean; }; } | { eval: string | { code: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fetch: string | { url: string; body?: string; headers?: object; method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fill: { selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; mode?: 'type'; mouse_movement_strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; typing_interval?: number | string; typing_strategy?: 'simple' | 'distribution'; visible?: boolean; } | { mode: 'paste'; selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { get_cookies: boolean | { required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { goto: string | { url: string; referer?: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; wait_until?: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; }; } | { press: string | { key: string; delay?: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { screenshot: boolean | { format?: 'png' | 'jpeg' | 'webp'; full_page?: boolean; quality?: number; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { scroll: number | string | { container?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; to?: string | string[]; visible?: boolean; x?: number; y?: number; }; } | { wait: number | string | { duration: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { wait_for_element: string | string[] | { selector: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { wait_for_navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2' | { navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; }[];",
      'city?: string;',
      'consent_header?: boolean;',
      "cookies?: { creation?: string; domain?: string; expires?: string; extensions?: string[]; hostOnly?: boolean; httpOnly?: boolean; lastAccessed?: string; maxAge?: 'Infinity' | '-Infinity' | number; name?: string; path?: string; pathIsDefault?: boolean; sameSite?: 'strict' | 'lax' | 'none'; secure?: boolean; value?: string; }[] | string;",
      'country?: string;',
      "device?: 'desktop' | 'mobile' | 'tablet';",
      "driver?: 'vx6' | 'vx8' | 'vx8-pro' | 'vx10' | 'vx10-pro' | 'vx12' | 'vx12-pro' | 'media-vx6';",
      'expected_status_codes?: number[];',
      "formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[];",
      'headers?: object;',
      'http2?: boolean;',
      'is_xhr?: boolean;',
      'locale?: string;',
      "markdown_backend?: 'full_page' | 'main_content';",
      "method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';",
      "network_capture?: { method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; resource_type?: string | string[]; status_code?: number | number[]; url?: { value: string; type?: 'exact' | 'contains'; }; validation?: boolean; wait_for_requests_count?: number; wait_for_requests_count_timeout?: number; }[];",
      "os?: 'windows' | 'mac os' | 'linux' | 'android' | 'ios';",
      'parse?: boolean;',
      'parser?: object | string;',
      "referrer_type?: 'random' | 'no-referer' | 'same-origin' | 'google' | 'bing' | 'facebook' | 'twitter' | 'instagram';",
      'render?: boolean;',
      'request_timeout?: number;',
      'session?: { id?: string; prefetch_userbrowser?: boolean; retry?: boolean; timeout?: number; };',
      'skill?: string | string[];',
      'state?: string;',
      'tag?: string;',
    ],
    response:
      "{ data: { browser_actions?: { results: object[]; success: boolean; total_duration: number; }; cookies?: object[]; eval?: object[]; fetch?: object[]; headers?: object; html?: string; links?: string[]; markdown?: string; network_capture?: { filter: object; results: object[]; errorMessage?: string; }[]; pages_html?: string[]; parsing?: { entities: object; status: 'success'; } | { error: string; status: 'error'; } | object; redirects?: { status_code: number; url: string; }[]; screenshots?: object[]; }; metadata: { agent?: string; driver?: string; localization_id?: string; query_duration?: number; query_time?: string; response_parameters?: object; tag?: string; }; status: 'success' | 'skipped' | 'fatal' | 'error' | 'postponed' | 'ignored' | 'rejected' | 'blocked'; task_id: string; url: string; debug?: { performance_metrics?: object; proxy_total_bytes_usage?: number; transformed_output?: object; userbrowser?: object; }; pagination?: { next_page_params: object; } | { next_page_params: object; }[]; status_code?: number; warnings?: string[]; }",
    markdown:
      "## extract\n\n`client.extract(url: string, browser?: 'chrome' | 'firefox' | { name: 'chrome' | 'firefox'; version?: string; }, browser_actions?: { auto_scroll: boolean | number | string | object; } | { click: string | string[] | object; } | { eval: string | object; } | { fetch: string | object; } | { fill: object | object; } | { get_cookies: boolean | object; } | { goto: string | object; } | { press: string | object; } | { screenshot: boolean | object; } | { scroll: number | string | object; } | { wait: number | string | object; } | { wait_for_element: string | string[] | object; } | { wait_for_navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2' | object; }[], city?: string, consent_header?: boolean, cookies?: { creation?: string; domain?: string; expires?: string; extensions?: string[]; hostOnly?: boolean; httpOnly?: boolean; lastAccessed?: string; maxAge?: 'Infinity' | '-Infinity' | number; name?: string; path?: string; pathIsDefault?: boolean; sameSite?: 'strict' | 'lax' | 'none'; secure?: boolean; value?: string; }[] | string, country?: string, device?: 'desktop' | 'mobile' | 'tablet', driver?: 'vx6' | 'vx8' | 'vx8-pro' | 'vx10' | 'vx10-pro' | 'vx12' | 'vx12-pro' | 'media-vx6', expected_status_codes?: number[], formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[], headers?: object, http2?: boolean, is_xhr?: boolean, locale?: string, markdown_backend?: 'full_page' | 'main_content', method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE', network_capture?: { method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; resource_type?: string | string[]; status_code?: number | number[]; url?: { value: string; type?: 'exact' | 'contains'; }; validation?: boolean; wait_for_requests_count?: number; wait_for_requests_count_timeout?: number; }[], os?: 'windows' | 'mac os' | 'linux' | 'android' | 'ios', parse?: boolean, parser?: object | string, referrer_type?: 'random' | 'no-referer' | 'same-origin' | 'google' | 'bing' | 'facebook' | 'twitter' | 'instagram', render?: boolean, request_timeout?: number, session?: { id?: string; prefetch_userbrowser?: boolean; retry?: boolean; timeout?: number; }, skill?: string | string[], state?: string, tag?: string): { data: object; metadata: object; status: 'success' | 'skipped' | 'fatal' | 'error' | 'postponed' | 'ignored' | 'rejected' | 'blocked'; task_id: string; url: string; debug?: object; pagination?: object | object[]; status_code?: number; warnings?: string[]; }`\n\n**post** `/v1/extract`\n\nExtract\n\n### Parameters\n\n- `url: string`\n  Target URL to scrape\n\n- `browser?: 'chrome' | 'firefox' | { name: 'chrome' | 'firefox'; version?: string; }`\n  Browser type to emulate\n\n- `browser_actions?: { auto_scroll: boolean | number | string | { click_selector?: string | string[]; container?: string | string[]; delay_after_scroll?: number | string; idle_timeout?: number | string; loading_selector?: string | string[]; max_duration?: number | string; pause_on_selector?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; step_size?: number; }; } | { click: string | string[] | { selector: string | string[]; count?: number; delay?: number | string; offset_x?: number; offset_y?: number; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; steps?: number; strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; timeout?: number; visible?: boolean; }; } | { eval: string | { code: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fetch: string | { url: string; body?: string; headers?: object; method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fill: { selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; mode?: 'type'; mouse_movement_strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; typing_interval?: number | string; typing_strategy?: 'simple' | 'distribution'; visible?: boolean; } | { mode: 'paste'; selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { get_cookies: boolean | { required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { goto: string | { url: string; referer?: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; wait_until?: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; }; } | { press: string | { key: string; delay?: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { screenshot: boolean | { format?: 'png' | 'jpeg' | 'webp'; full_page?: boolean; quality?: number; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { scroll: number | string | { container?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; to?: string | string[]; visible?: boolean; x?: number; y?: number; }; } | { wait: number | string | { duration: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { wait_for_element: string | string[] | { selector: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { wait_for_navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2' | { navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; }[]`\n  Array of browser automation actions to execute sequentially\n\n- `city?: string`\n  City for geolocation\n\n- `consent_header?: boolean`\n  Whether to automatically handle cookie consent headers\n\n- `cookies?: { creation?: string; domain?: string; expires?: string; extensions?: string[]; hostOnly?: boolean; httpOnly?: boolean; lastAccessed?: string; maxAge?: 'Infinity' | '-Infinity' | number; name?: string; path?: string; pathIsDefault?: boolean; sameSite?: 'strict' | 'lax' | 'none'; secure?: boolean; value?: string; }[] | string`\n  Browser cookies as array of cookie objects\n\n- `country?: string`\n  Country code for geolocation and proxy selection\n\n- `device?: 'desktop' | 'mobile' | 'tablet'`\n  Device type for browser emulation\n\n- `driver?: 'vx6' | 'vx8' | 'vx8-pro' | 'vx10' | 'vx10-pro' | 'vx12' | 'vx12-pro' | 'media-vx6'`\n  Browser driver to use\n\n- `expected_status_codes?: number[]`\n  Expected HTTP status codes for successful requests\n\n- `formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[]`\n  List of acceptable response formats in order of preference\n\n- `headers?: object`\n  Custom HTTP headers to include in the request\n\n- `http2?: boolean`\n  Whether to use HTTP/2 protocol\n\n- `is_xhr?: boolean`\n  Whether to emulate XMLHttpRequest behavior\n\n- `locale?: string`\n  Locale for browser language and region settings\n\n- `markdown_backend?: 'full_page' | 'main_content'`\n  Selects which markdown conversion strategy to use. \"full_page\" converts the entire HTML page. \"main_content\" uses Mozilla Readability to extract the main article content before converting.\n\n- `method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'`\n  HTTP method for the request\n\n- `network_capture?: { method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; resource_type?: string | string[]; status_code?: number | number[]; url?: { value: string; type?: 'exact' | 'contains'; }; validation?: boolean; wait_for_requests_count?: number; wait_for_requests_count_timeout?: number; }[]`\n  Filters for capturing network traffic\n\n- `os?: 'windows' | 'mac os' | 'linux' | 'android' | 'ios'`\n  Operating system to emulate\n\n- `parse?: boolean`\n  Whether to parse the response content\n\n- `parser?: object | string`\n  Custom parser configuration as a key-value map\n\n- `referrer_type?: 'random' | 'no-referer' | 'same-origin' | 'google' | 'bing' | 'facebook' | 'twitter' | 'instagram'`\n  Referrer policy for the request\n\n- `render?: boolean`\n  Whether to render JavaScript content using a browser\n\n- `request_timeout?: number`\n  Request timeout in milliseconds\n\n- `session?: { id?: string; prefetch_userbrowser?: boolean; retry?: boolean; timeout?: number; }`\n  - `id?: string`\n  - `prefetch_userbrowser?: boolean`\n  - `retry?: boolean`\n  - `timeout?: number`\n\n- `skill?: string | string[]`\n  Skills or capabilities required for the request\n\n- `state?: string`\n  US state for geolocation (only valid when country is US)\n\n- `tag?: string`\n  User-defined tag for request identification\n\n### Returns\n\n- `{ data: { browser_actions?: { results: object[]; success: boolean; total_duration: number; }; cookies?: object[]; eval?: object[]; fetch?: object[]; headers?: object; html?: string; links?: string[]; markdown?: string; network_capture?: { filter: object; results: object[]; errorMessage?: string; }[]; pages_html?: string[]; parsing?: { entities: object; status: 'success'; } | { error: string; status: 'error'; } | object; redirects?: { status_code: number; url: string; }[]; screenshots?: object[]; }; metadata: { agent?: string; driver?: string; localization_id?: string; query_duration?: number; query_time?: string; response_parameters?: object; tag?: string; }; status: 'success' | 'skipped' | 'fatal' | 'error' | 'postponed' | 'ignored' | 'rejected' | 'blocked'; task_id: string; url: string; debug?: { performance_metrics?: object; proxy_total_bytes_usage?: number; transformed_output?: object; userbrowser?: object; }; pagination?: { next_page_params: object; } | { next_page_params: object; }[]; status_code?: number; warnings?: string[]; }`\n\n  - `data: { browser_actions?: { results: { duration: number; name: string; status: 'no-run' | 'in-progress' | 'done' | 'error' | 'skipped'; error?: string; result?: object; }[]; success: boolean; total_duration: number; }; cookies?: object[]; eval?: object[]; fetch?: object[]; headers?: object; html?: string; links?: string[]; markdown?: string; network_capture?: { filter: { validation: boolean; wait_for_requests_count: number; method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; resource_type?: string | string[]; status_code?: number | number[]; url?: { type: 'exact' | 'contains'; value: string; }; wait_for_requests_count_timeout?: number; }; results: { request: { headers: object; method: string; resource_type: string; url: string; body?: string; }; response: { body: string; headers: object; serialization: 'none' | 'base64'; status: number; status_text: string; }; }[]; errorMessage?: string; }[]; pages_html?: string[]; parsing?: { entities: object; status: 'success'; } | { error: string; status: 'error'; } | object; redirects?: { status_code: number; url: string; }[]; screenshots?: object[]; }`\n  - `metadata: { agent?: string; driver?: string; localization_id?: string; query_duration?: number; query_time?: string; response_parameters?: object; tag?: string; }`\n  - `status: 'success' | 'skipped' | 'fatal' | 'error' | 'postponed' | 'ignored' | 'rejected' | 'blocked'`\n  - `task_id: string`\n  - `url: string`\n  - `debug?: { performance_metrics?: object; proxy_total_bytes_usage?: number; transformed_output?: object; userbrowser?: object; }`\n  - `pagination?: { next_page_params: object; } | { next_page_params: object; }[]`\n  - `status_code?: number`\n  - `warnings?: string[]`\n\n### Example\n\n```typescript\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble();\n\nconst response = await client.extract({ url: 'url' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.extract',
        example:
          "import Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.extract({ url: 'url' });\n\nconsole.log(response.task_id);",
      },
      python: {
        method: 'extract',
        example:
          'import os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.extract(\n    url="url",\n)\nprint(response.task_id)',
      },
      go: {
        method: 'client.Extract',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Extract(context.TODO(), githubcomnimblewaynimblego.ExtractParams{\n\t\tURL: "url",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.TaskID)\n}\n',
      },
      cli: {
        method: '$client extract',
        example: "nimble extract \\\n  --api-key 'My API Key' \\\n  --url url",
      },
      http: {
        example:
          'curl https://sdk.nimbleway.com/v1/extract \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIMBLE_API_KEY" \\\n    -d \'{\n          "url": "url",\n          "browser_actions": [\n            {\n              "goto": "https://example.com/login"\n            },\n            {\n              "wait_for_element": "#login-form"\n            },\n            {\n              "fill": {\n                "selector": "#username",\n                "value": "user@example.com",\n                "mode": "type"\n              }\n            },\n            {\n              "fill": {\n                "selector": "#password",\n                "value": "password123",\n                "mode": "type"\n              }\n            },\n            {\n              "click": "#submit"\n            },\n            {\n              "screenshot": {\n                "full_page": true\n              }\n            }\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'extract_async',
    endpoint: '/v1/extract/async',
    httpMethod: 'post',
    summary: 'Extract Async Endpoint',
    description: 'Extract Async Endpoint',
    stainlessPath: '(resource) $client > (method) extract_async',
    qualified: 'client.extractAsync',
    params: [
      'url: string;',
      "browser?: 'chrome' | 'firefox' | { name: 'chrome' | 'firefox'; version?: string; };",
      "browser_actions?: { auto_scroll: boolean | number | string | { click_selector?: string | string[]; container?: string | string[]; delay_after_scroll?: number | string; idle_timeout?: number | string; loading_selector?: string | string[]; max_duration?: number | string; pause_on_selector?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; step_size?: number; }; } | { click: string | string[] | { selector: string | string[]; count?: number; delay?: number | string; offset_x?: number; offset_y?: number; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; steps?: number; strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; timeout?: number; visible?: boolean; }; } | { eval: string | { code: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fetch: string | { url: string; body?: string; headers?: object; method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fill: { selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; mode?: 'type'; mouse_movement_strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; typing_interval?: number | string; typing_strategy?: 'simple' | 'distribution'; visible?: boolean; } | { mode: 'paste'; selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { get_cookies: boolean | { required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { goto: string | { url: string; referer?: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; wait_until?: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; }; } | { press: string | { key: string; delay?: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { screenshot: boolean | { format?: 'png' | 'jpeg' | 'webp'; full_page?: boolean; quality?: number; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { scroll: number | string | { container?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; to?: string | string[]; visible?: boolean; x?: number; y?: number; }; } | { wait: number | string | { duration: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { wait_for_element: string | string[] | { selector: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { wait_for_navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2' | { navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; }[];",
      'callback_url?: string;',
      'city?: string;',
      'consent_header?: boolean;',
      "cookies?: { creation?: string; domain?: string; expires?: string; extensions?: string[]; hostOnly?: boolean; httpOnly?: boolean; lastAccessed?: string; maxAge?: 'Infinity' | '-Infinity' | number; name?: string; path?: string; pathIsDefault?: boolean; sameSite?: 'strict' | 'lax' | 'none'; secure?: boolean; value?: string; }[] | string;",
      'country?: string;',
      "device?: 'desktop' | 'mobile' | 'tablet';",
      "driver?: 'vx6' | 'vx8' | 'vx8-pro' | 'vx10' | 'vx10-pro' | 'vx12' | 'vx12-pro' | 'media-vx6';",
      'expected_status_codes?: number[];',
      "formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[];",
      'headers?: object;',
      'http2?: boolean;',
      'is_xhr?: boolean;',
      'locale?: string;',
      "markdown_backend?: 'full_page' | 'main_content';",
      "method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';",
      "network_capture?: { method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; resource_type?: string | string[]; status_code?: number | number[]; url?: { value: string; type?: 'exact' | 'contains'; }; validation?: boolean; wait_for_requests_count?: number; wait_for_requests_count_timeout?: number; }[];",
      "os?: 'windows' | 'mac os' | 'linux' | 'android' | 'ios';",
      'parse?: boolean;',
      'parser?: object | string;',
      "referrer_type?: 'random' | 'no-referer' | 'same-origin' | 'google' | 'bing' | 'facebook' | 'twitter' | 'instagram';",
      'render?: boolean;',
      'request_timeout?: number;',
      'session?: { id?: string; prefetch_userbrowser?: boolean; retry?: boolean; timeout?: number; };',
      'skill?: string | string[];',
      'state?: string;',
      'storage_compress?: boolean;',
      'storage_object_name?: string;',
      'storage_type?: string;',
      'storage_url?: string;',
      'tag?: string;',
    ],
    response:
      "{ status: 'success'; task: { id: string; _query: object; created_at: string; input: object; state: 'pending' | 'success' | 'error'; status_url: string; account_name?: string; api_type?: 'web' | 'serp' | 'ecommerce' | 'social' | 'media' | 'agent' | 'extract'; batch_id?: string; download_url?: string; error?: string; error_type?: string; modified_at?: string; output_url?: string; status_code?: number; }; }",
    markdown:
      "## extract_async\n\n`client.extractAsync(url: string, browser?: 'chrome' | 'firefox' | { name: 'chrome' | 'firefox'; version?: string; }, browser_actions?: { auto_scroll: boolean | number | string | object; } | { click: string | string[] | object; } | { eval: string | object; } | { fetch: string | object; } | { fill: object | object; } | { get_cookies: boolean | object; } | { goto: string | object; } | { press: string | object; } | { screenshot: boolean | object; } | { scroll: number | string | object; } | { wait: number | string | object; } | { wait_for_element: string | string[] | object; } | { wait_for_navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2' | object; }[], callback_url?: string, city?: string, consent_header?: boolean, cookies?: { creation?: string; domain?: string; expires?: string; extensions?: string[]; hostOnly?: boolean; httpOnly?: boolean; lastAccessed?: string; maxAge?: 'Infinity' | '-Infinity' | number; name?: string; path?: string; pathIsDefault?: boolean; sameSite?: 'strict' | 'lax' | 'none'; secure?: boolean; value?: string; }[] | string, country?: string, device?: 'desktop' | 'mobile' | 'tablet', driver?: 'vx6' | 'vx8' | 'vx8-pro' | 'vx10' | 'vx10-pro' | 'vx12' | 'vx12-pro' | 'media-vx6', expected_status_codes?: number[], formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[], headers?: object, http2?: boolean, is_xhr?: boolean, locale?: string, markdown_backend?: 'full_page' | 'main_content', method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE', network_capture?: { method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; resource_type?: string | string[]; status_code?: number | number[]; url?: { value: string; type?: 'exact' | 'contains'; }; validation?: boolean; wait_for_requests_count?: number; wait_for_requests_count_timeout?: number; }[], os?: 'windows' | 'mac os' | 'linux' | 'android' | 'ios', parse?: boolean, parser?: object | string, referrer_type?: 'random' | 'no-referer' | 'same-origin' | 'google' | 'bing' | 'facebook' | 'twitter' | 'instagram', render?: boolean, request_timeout?: number, session?: { id?: string; prefetch_userbrowser?: boolean; retry?: boolean; timeout?: number; }, skill?: string | string[], state?: string, storage_compress?: boolean, storage_object_name?: string, storage_type?: string, storage_url?: string, tag?: string): { status: 'success'; task: object; }`\n\n**post** `/v1/extract/async`\n\nExtract Async Endpoint\n\n### Parameters\n\n- `url: string`\n  Target URL to scrape\n\n- `browser?: 'chrome' | 'firefox' | { name: 'chrome' | 'firefox'; version?: string; }`\n  Browser type to emulate\n\n- `browser_actions?: { auto_scroll: boolean | number | string | { click_selector?: string | string[]; container?: string | string[]; delay_after_scroll?: number | string; idle_timeout?: number | string; loading_selector?: string | string[]; max_duration?: number | string; pause_on_selector?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; step_size?: number; }; } | { click: string | string[] | { selector: string | string[]; count?: number; delay?: number | string; offset_x?: number; offset_y?: number; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; steps?: number; strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; timeout?: number; visible?: boolean; }; } | { eval: string | { code: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fetch: string | { url: string; body?: string; headers?: object; method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fill: { selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; mode?: 'type'; mouse_movement_strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; typing_interval?: number | string; typing_strategy?: 'simple' | 'distribution'; visible?: boolean; } | { mode: 'paste'; selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { get_cookies: boolean | { required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { goto: string | { url: string; referer?: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; wait_until?: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; }; } | { press: string | { key: string; delay?: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { screenshot: boolean | { format?: 'png' | 'jpeg' | 'webp'; full_page?: boolean; quality?: number; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { scroll: number | string | { container?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; to?: string | string[]; visible?: boolean; x?: number; y?: number; }; } | { wait: number | string | { duration: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { wait_for_element: string | string[] | { selector: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { wait_for_navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2' | { navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; }[]`\n  Array of browser automation actions to execute sequentially\n\n- `callback_url?: string`\n  URL to call back when async operation completes\n\n- `city?: string`\n  City for geolocation\n\n- `consent_header?: boolean`\n  Whether to automatically handle cookie consent headers\n\n- `cookies?: { creation?: string; domain?: string; expires?: string; extensions?: string[]; hostOnly?: boolean; httpOnly?: boolean; lastAccessed?: string; maxAge?: 'Infinity' | '-Infinity' | number; name?: string; path?: string; pathIsDefault?: boolean; sameSite?: 'strict' | 'lax' | 'none'; secure?: boolean; value?: string; }[] | string`\n  Browser cookies as array of cookie objects\n\n- `country?: string`\n  Country code for geolocation and proxy selection\n\n- `device?: 'desktop' | 'mobile' | 'tablet'`\n  Device type for browser emulation\n\n- `driver?: 'vx6' | 'vx8' | 'vx8-pro' | 'vx10' | 'vx10-pro' | 'vx12' | 'vx12-pro' | 'media-vx6'`\n  Browser driver to use\n\n- `expected_status_codes?: number[]`\n  Expected HTTP status codes for successful requests\n\n- `formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[]`\n  List of acceptable response formats in order of preference\n\n- `headers?: object`\n  Custom HTTP headers to include in the request\n\n- `http2?: boolean`\n  Whether to use HTTP/2 protocol\n\n- `is_xhr?: boolean`\n  Whether to emulate XMLHttpRequest behavior\n\n- `locale?: string`\n  Locale for browser language and region settings\n\n- `markdown_backend?: 'full_page' | 'main_content'`\n  Selects which markdown conversion strategy to use. \"full_page\" converts the entire HTML page. \"main_content\" uses Mozilla Readability to extract the main article content before converting.\n\n- `method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'`\n  HTTP method for the request\n\n- `network_capture?: { method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; resource_type?: string | string[]; status_code?: number | number[]; url?: { value: string; type?: 'exact' | 'contains'; }; validation?: boolean; wait_for_requests_count?: number; wait_for_requests_count_timeout?: number; }[]`\n  Filters for capturing network traffic\n\n- `os?: 'windows' | 'mac os' | 'linux' | 'android' | 'ios'`\n  Operating system to emulate\n\n- `parse?: boolean`\n  Whether to parse the response content\n\n- `parser?: object | string`\n  Custom parser configuration as a key-value map\n\n- `referrer_type?: 'random' | 'no-referer' | 'same-origin' | 'google' | 'bing' | 'facebook' | 'twitter' | 'instagram'`\n  Referrer policy for the request\n\n- `render?: boolean`\n  Whether to render JavaScript content using a browser\n\n- `request_timeout?: number`\n  Request timeout in milliseconds\n\n- `session?: { id?: string; prefetch_userbrowser?: boolean; retry?: boolean; timeout?: number; }`\n  - `id?: string`\n  - `prefetch_userbrowser?: boolean`\n  - `retry?: boolean`\n  - `timeout?: number`\n\n- `skill?: string | string[]`\n  Skills or capabilities required for the request\n\n- `state?: string`\n  US state for geolocation (only valid when country is US)\n\n- `storage_compress?: boolean`\n  Whether to compress stored data\n\n- `storage_object_name?: string`\n  Custom name for the stored object\n\n- `storage_type?: string`\n  Type of storage to use for results\n\n- `storage_url?: string`\n  URL for storage location\n\n- `tag?: string`\n  User-defined tag for request identification\n\n### Returns\n\n- `{ status: 'success'; task: { id: string; _query: object; created_at: string; input: object; state: 'pending' | 'success' | 'error'; status_url: string; account_name?: string; api_type?: 'web' | 'serp' | 'ecommerce' | 'social' | 'media' | 'agent' | 'extract'; batch_id?: string; download_url?: string; error?: string; error_type?: string; modified_at?: string; output_url?: string; status_code?: number; }; }`\n  Response when an async extract task is created successfully.\n\n  - `status: 'success'`\n  - `task: { id: string; _query: object; created_at: string; input: object; state: 'pending' | 'success' | 'error'; status_url: string; account_name?: string; api_type?: 'web' | 'serp' | 'ecommerce' | 'social' | 'media' | 'agent' | 'extract'; batch_id?: string; download_url?: string; error?: string; error_type?: string; modified_at?: string; output_url?: string; status_code?: number; }`\n\n### Example\n\n```typescript\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble();\n\nconst response = await client.extractAsync({ url: 'url' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.extractAsync',
        example:
          "import Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.extractAsync({ url: 'url' });\n\nconsole.log(response.status);",
      },
      python: {
        method: 'extract_async',
        example:
          'import os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.extract_async(\n    url="url",\n)\nprint(response.status)',
      },
      go: {
        method: 'client.ExtractAsync',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.ExtractAsync(context.TODO(), githubcomnimblewaynimblego.ExtractAsyncParams{\n\t\tURL: "url",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Status)\n}\n',
      },
      cli: {
        method: '$client extract_async',
        example: "nimble extract-async \\\n  --api-key 'My API Key' \\\n  --url url",
      },
      http: {
        example:
          'curl https://sdk.nimbleway.com/v1/extract/async \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIMBLE_API_KEY" \\\n    -d \'{\n          "url": "url",\n          "browser_actions": [\n            {\n              "goto": "https://example.com/login"\n            },\n            {\n              "wait_for_element": "#login-form"\n            },\n            {\n              "fill": {\n                "selector": "#username",\n                "value": "user@example.com",\n                "mode": "type"\n              }\n            },\n            {\n              "fill": {\n                "selector": "#password",\n                "value": "password123",\n                "mode": "type"\n              }\n            },\n            {\n              "click": "#submit"\n            },\n            {\n              "screenshot": {\n                "full_page": true\n              }\n            }\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'extract_batch',
    endpoint: '/v1/extract/batch',
    httpMethod: 'post',
    summary: 'Extract Batch Endpoint',
    description: 'Extract Batch Endpoint',
    stainlessPath: '(resource) $client > (method) extract_batch',
    qualified: 'client.extractBatch',
    params: [
      "inputs: { browser?: 'chrome' | 'firefox' | { name: 'chrome' | 'firefox'; version?: string; }; browser_actions?: { auto_scroll: boolean | number | string | { click_selector?: string | string[]; container?: string | string[]; delay_after_scroll?: number | string; idle_timeout?: number | string; loading_selector?: string | string[]; max_duration?: number | string; pause_on_selector?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; step_size?: number; }; } | { click: string | string[] | { selector: string | string[]; count?: number; delay?: number | string; offset_x?: number; offset_y?: number; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; steps?: number; strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; timeout?: number; visible?: boolean; }; } | { eval: string | { code: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fetch: string | { url: string; body?: string; headers?: object; method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fill: { selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; mode?: 'type'; mouse_movement_strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; typing_interval?: number | string; typing_strategy?: 'simple' | 'distribution'; visible?: boolean; } | { mode: 'paste'; selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { get_cookies: boolean | { required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { goto: string | { url: string; referer?: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; wait_until?: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; }; } | { press: string | { key: string; delay?: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { screenshot: boolean | { format?: 'png' | 'jpeg' | 'webp'; full_page?: boolean; quality?: number; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { scroll: number | string | { container?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; to?: string | string[]; visible?: boolean; x?: number; y?: number; }; } | { wait: number | string | { duration: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { wait_for_element: string | string[] | { selector: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { wait_for_navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2' | { navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; }[]; callback_url?: string; city?: string; consent_header?: boolean; cookies?: { creation?: string; domain?: string; expires?: string; extensions?: string[]; hostOnly?: boolean; httpOnly?: boolean; lastAccessed?: string; maxAge?: 'Infinity' | '-Infinity' | number; name?: string; path?: string; pathIsDefault?: boolean; sameSite?: 'strict' | 'lax' | 'none'; secure?: boolean; value?: string; }[] | string; country?: string; device?: 'desktop' | 'mobile' | 'tablet'; driver?: 'vx6' | 'vx8' | 'vx8-pro' | 'vx10' | 'vx10-pro' | 'vx12' | 'vx12-pro' | 'media-vx6'; expected_status_codes?: number[]; formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[]; headers?: object; http2?: boolean; is_xhr?: boolean; locale?: string; markdown_backend?: 'full_page' | 'main_content'; method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'; network_capture?: { method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; resource_type?: string | string[]; status_code?: number | number[]; url?: { value: string; type?: 'exact' | 'contains'; }; validation?: boolean; wait_for_requests_count?: number; wait_for_requests_count_timeout?: number; }[]; os?: 'windows' | 'mac os' | 'linux' | 'android' | 'ios'; parse?: boolean; parser?: object | string; referrer_type?: 'random' | 'no-referer' | 'same-origin' | 'google' | 'bing' | 'facebook' | 'twitter' | 'instagram'; render?: boolean; request_timeout?: number; session?: { id?: string; prefetch_userbrowser?: boolean; retry?: boolean; timeout?: number; }; skill?: string | string[]; state?: string; storage_compress?: boolean; storage_object_name?: string; storage_type?: string; storage_url?: string; tag?: string; url?: string; }[];",
      "shared_inputs?: { browser?: 'chrome' | 'firefox' | { name: 'chrome' | 'firefox'; version?: string; }; browser_actions?: { auto_scroll: boolean | number | string | { click_selector?: string | string[]; container?: string | string[]; delay_after_scroll?: number | string; idle_timeout?: number | string; loading_selector?: string | string[]; max_duration?: number | string; pause_on_selector?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; step_size?: number; }; } | { click: string | string[] | { selector: string | string[]; count?: number; delay?: number | string; offset_x?: number; offset_y?: number; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; steps?: number; strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; timeout?: number; visible?: boolean; }; } | { eval: string | { code: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fetch: string | { url: string; body?: string; headers?: object; method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fill: { selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; mode?: 'type'; mouse_movement_strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; typing_interval?: number | string; typing_strategy?: 'simple' | 'distribution'; visible?: boolean; } | { mode: 'paste'; selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { get_cookies: boolean | { required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { goto: string | { url: string; referer?: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; wait_until?: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; }; } | { press: string | { key: string; delay?: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { screenshot: boolean | { format?: 'png' | 'jpeg' | 'webp'; full_page?: boolean; quality?: number; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { scroll: number | string | { container?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; to?: string | string[]; visible?: boolean; x?: number; y?: number; }; } | { wait: number | string | { duration: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { wait_for_element: string | string[] | { selector: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { wait_for_navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2' | { navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; }[]; callback_url?: string; city?: string; consent_header?: boolean; cookies?: { creation?: string; domain?: string; expires?: string; extensions?: string[]; hostOnly?: boolean; httpOnly?: boolean; lastAccessed?: string; maxAge?: 'Infinity' | '-Infinity' | number; name?: string; path?: string; pathIsDefault?: boolean; sameSite?: 'strict' | 'lax' | 'none'; secure?: boolean; value?: string; }[] | string; country?: string; device?: 'desktop' | 'mobile' | 'tablet'; driver?: 'vx6' | 'vx8' | 'vx8-pro' | 'vx10' | 'vx10-pro' | 'vx12' | 'vx12-pro' | 'media-vx6'; expected_status_codes?: number[]; formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[]; headers?: object; http2?: boolean; is_xhr?: boolean; locale?: string; markdown_backend?: 'full_page' | 'main_content'; method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'; network_capture?: { method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; resource_type?: string | string[]; status_code?: number | number[]; url?: { value: string; type?: 'exact' | 'contains'; }; validation?: boolean; wait_for_requests_count?: number; wait_for_requests_count_timeout?: number; }[]; os?: 'windows' | 'mac os' | 'linux' | 'android' | 'ios'; parse?: boolean; parser?: object | string; referrer_type?: 'random' | 'no-referer' | 'same-origin' | 'google' | 'bing' | 'facebook' | 'twitter' | 'instagram'; render?: boolean; request_timeout?: number; session?: { id?: string; prefetch_userbrowser?: boolean; retry?: boolean; timeout?: number; }; skill?: string | string[]; state?: string; storage_compress?: boolean; storage_object_name?: string; storage_type?: string; storage_url?: string; tag?: string; url?: string; };",
    ],
    response:
      "{ batch_id: string; batch_size: number; tasks: { id: string; _query: object; created_at: string; input: object; state: 'pending' | 'success' | 'error'; status_url: string; account_name?: string; api_type?: 'web' | 'serp' | 'ecommerce' | 'social' | 'media' | 'agent' | 'extract'; batch_id?: string; download_url?: string; error?: string; error_type?: string; modified_at?: string; output_url?: string; status_code?: number; }[]; }",
    markdown:
      "## extract_batch\n\n`client.extractBatch(inputs: { browser?: 'chrome' | 'firefox' | { name: 'chrome' | 'firefox'; version?: string; }; browser_actions?: object | object | object | object | object | object | object | object | object | object | object | object | object[]; callback_url?: string; city?: string; consent_header?: boolean; cookies?: { creation?: string; domain?: string; expires?: string; extensions?: string[]; hostOnly?: boolean; httpOnly?: boolean; lastAccessed?: string; maxAge?: 'Infinity' | '-Infinity' | number; name?: string; path?: string; pathIsDefault?: boolean; sameSite?: 'strict' | 'lax' | 'none'; secure?: boolean; value?: string; }[] | string; country?: string; device?: 'desktop' | 'mobile' | 'tablet'; driver?: 'vx6' | 'vx8' | 'vx8-pro' | 'vx10' | 'vx10-pro' | 'vx12' | 'vx12-pro' | 'media-vx6'; expected_status_codes?: number[]; formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[]; headers?: object; http2?: boolean; is_xhr?: boolean; locale?: string; markdown_backend?: 'full_page' | 'main_content'; method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'; network_capture?: { method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; resource_type?: string | string[]; status_code?: number | number[]; url?: object; validation?: boolean; wait_for_requests_count?: number; wait_for_requests_count_timeout?: number; }[]; os?: 'windows' | 'mac os' | 'linux' | 'android' | 'ios'; parse?: boolean; parser?: object | string; referrer_type?: 'random' | 'no-referer' | 'same-origin' | 'google' | 'bing' | 'facebook' | 'twitter' | 'instagram'; render?: boolean; request_timeout?: number; session?: { id?: string; prefetch_userbrowser?: boolean; retry?: boolean; timeout?: number; }; skill?: string | string[]; state?: string; storage_compress?: boolean; storage_object_name?: string; storage_type?: string; storage_url?: string; tag?: string; url?: string; }[], shared_inputs?: { browser?: 'chrome' | 'firefox' | { name: 'chrome' | 'firefox'; version?: string; }; browser_actions?: object | object | object | object | object | object | object | object | object | object | object | object | object[]; callback_url?: string; city?: string; consent_header?: boolean; cookies?: { creation?: string; domain?: string; expires?: string; extensions?: string[]; hostOnly?: boolean; httpOnly?: boolean; lastAccessed?: string; maxAge?: 'Infinity' | '-Infinity' | number; name?: string; path?: string; pathIsDefault?: boolean; sameSite?: 'strict' | 'lax' | 'none'; secure?: boolean; value?: string; }[] | string; country?: string; device?: 'desktop' | 'mobile' | 'tablet'; driver?: 'vx6' | 'vx8' | 'vx8-pro' | 'vx10' | 'vx10-pro' | 'vx12' | 'vx12-pro' | 'media-vx6'; expected_status_codes?: number[]; formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[]; headers?: object; http2?: boolean; is_xhr?: boolean; locale?: string; markdown_backend?: 'full_page' | 'main_content'; method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'; network_capture?: { method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; resource_type?: string | string[]; status_code?: number | number[]; url?: object; validation?: boolean; wait_for_requests_count?: number; wait_for_requests_count_timeout?: number; }[]; os?: 'windows' | 'mac os' | 'linux' | 'android' | 'ios'; parse?: boolean; parser?: object | string; referrer_type?: 'random' | 'no-referer' | 'same-origin' | 'google' | 'bing' | 'facebook' | 'twitter' | 'instagram'; render?: boolean; request_timeout?: number; session?: { id?: string; prefetch_userbrowser?: boolean; retry?: boolean; timeout?: number; }; skill?: string | string[]; state?: string; storage_compress?: boolean; storage_object_name?: string; storage_type?: string; storage_url?: string; tag?: string; url?: string; }): { batch_id: string; batch_size: number; tasks: object[]; }`\n\n**post** `/v1/extract/batch`\n\nExtract Batch Endpoint\n\n### Parameters\n\n- `inputs: { browser?: 'chrome' | 'firefox' | { name: 'chrome' | 'firefox'; version?: string; }; browser_actions?: { auto_scroll: boolean | number | string | { click_selector?: string | string[]; container?: string | string[]; delay_after_scroll?: number | string; idle_timeout?: number | string; loading_selector?: string | string[]; max_duration?: number | string; pause_on_selector?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; step_size?: number; }; } | { click: string | string[] | { selector: string | string[]; count?: number; delay?: number | string; offset_x?: number; offset_y?: number; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; steps?: number; strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; timeout?: number; visible?: boolean; }; } | { eval: string | { code: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fetch: string | { url: string; body?: string; headers?: object; method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fill: { selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; mode?: 'type'; mouse_movement_strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; typing_interval?: number | string; typing_strategy?: 'simple' | 'distribution'; visible?: boolean; } | { mode: 'paste'; selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { get_cookies: boolean | { required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { goto: string | { url: string; referer?: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; wait_until?: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; }; } | { press: string | { key: string; delay?: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { screenshot: boolean | { format?: 'png' | 'jpeg' | 'webp'; full_page?: boolean; quality?: number; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { scroll: number | string | { container?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; to?: string | string[]; visible?: boolean; x?: number; y?: number; }; } | { wait: number | string | { duration: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { wait_for_element: string | string[] | { selector: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { wait_for_navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2' | { navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; }[]; callback_url?: string; city?: string; consent_header?: boolean; cookies?: { creation?: string; domain?: string; expires?: string; extensions?: string[]; hostOnly?: boolean; httpOnly?: boolean; lastAccessed?: string; maxAge?: 'Infinity' | '-Infinity' | number; name?: string; path?: string; pathIsDefault?: boolean; sameSite?: 'strict' | 'lax' | 'none'; secure?: boolean; value?: string; }[] | string; country?: string; device?: 'desktop' | 'mobile' | 'tablet'; driver?: 'vx6' | 'vx8' | 'vx8-pro' | 'vx10' | 'vx10-pro' | 'vx12' | 'vx12-pro' | 'media-vx6'; expected_status_codes?: number[]; formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[]; headers?: object; http2?: boolean; is_xhr?: boolean; locale?: string; markdown_backend?: 'full_page' | 'main_content'; method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'; network_capture?: { method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; resource_type?: string | string[]; status_code?: number | number[]; url?: { value: string; type?: 'exact' | 'contains'; }; validation?: boolean; wait_for_requests_count?: number; wait_for_requests_count_timeout?: number; }[]; os?: 'windows' | 'mac os' | 'linux' | 'android' | 'ios'; parse?: boolean; parser?: object | string; referrer_type?: 'random' | 'no-referer' | 'same-origin' | 'google' | 'bing' | 'facebook' | 'twitter' | 'instagram'; render?: boolean; request_timeout?: number; session?: { id?: string; prefetch_userbrowser?: boolean; retry?: boolean; timeout?: number; }; skill?: string | string[]; state?: string; storage_compress?: boolean; storage_object_name?: string; storage_type?: string; storage_url?: string; tag?: string; url?: string; }[]`\n  Array of extraction requests. Each object can include extraction parameters and async/storage settings.\n\n- `shared_inputs?: { browser?: 'chrome' | 'firefox' | { name: 'chrome' | 'firefox'; version?: string; }; browser_actions?: { auto_scroll: boolean | number | string | { click_selector?: string | string[]; container?: string | string[]; delay_after_scroll?: number | string; idle_timeout?: number | string; loading_selector?: string | string[]; max_duration?: number | string; pause_on_selector?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; step_size?: number; }; } | { click: string | string[] | { selector: string | string[]; count?: number; delay?: number | string; offset_x?: number; offset_y?: number; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; steps?: number; strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; timeout?: number; visible?: boolean; }; } | { eval: string | { code: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fetch: string | { url: string; body?: string; headers?: object; method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fill: { selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; mode?: 'type'; mouse_movement_strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; typing_interval?: number | string; typing_strategy?: 'simple' | 'distribution'; visible?: boolean; } | { mode: 'paste'; selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { get_cookies: boolean | { required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { goto: string | { url: string; referer?: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; wait_until?: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; }; } | { press: string | { key: string; delay?: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { screenshot: boolean | { format?: 'png' | 'jpeg' | 'webp'; full_page?: boolean; quality?: number; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { scroll: number | string | { container?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; to?: string | string[]; visible?: boolean; x?: number; y?: number; }; } | { wait: number | string | { duration: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { wait_for_element: string | string[] | { selector: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { wait_for_navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2' | { navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; }[]; callback_url?: string; city?: string; consent_header?: boolean; cookies?: { creation?: string; domain?: string; expires?: string; extensions?: string[]; hostOnly?: boolean; httpOnly?: boolean; lastAccessed?: string; maxAge?: 'Infinity' | '-Infinity' | number; name?: string; path?: string; pathIsDefault?: boolean; sameSite?: 'strict' | 'lax' | 'none'; secure?: boolean; value?: string; }[] | string; country?: string; device?: 'desktop' | 'mobile' | 'tablet'; driver?: 'vx6' | 'vx8' | 'vx8-pro' | 'vx10' | 'vx10-pro' | 'vx12' | 'vx12-pro' | 'media-vx6'; expected_status_codes?: number[]; formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[]; headers?: object; http2?: boolean; is_xhr?: boolean; locale?: string; markdown_backend?: 'full_page' | 'main_content'; method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'; network_capture?: { method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; resource_type?: string | string[]; status_code?: number | number[]; url?: { value: string; type?: 'exact' | 'contains'; }; validation?: boolean; wait_for_requests_count?: number; wait_for_requests_count_timeout?: number; }[]; os?: 'windows' | 'mac os' | 'linux' | 'android' | 'ios'; parse?: boolean; parser?: object | string; referrer_type?: 'random' | 'no-referer' | 'same-origin' | 'google' | 'bing' | 'facebook' | 'twitter' | 'instagram'; render?: boolean; request_timeout?: number; session?: { id?: string; prefetch_userbrowser?: boolean; retry?: boolean; timeout?: number; }; skill?: string | string[]; state?: string; storage_compress?: boolean; storage_object_name?: string; storage_type?: string; storage_url?: string; tag?: string; url?: string; }`\n  Shared parameters applied to the entire batch. Can include extraction parameters and async/storage settings.\n  - `browser?: 'chrome' | 'firefox' | { name: 'chrome' | 'firefox'; version?: string; }`\n    Browser type to emulate\n  - `browser_actions?: { auto_scroll: boolean | number | string | { click_selector?: string | string[]; container?: string | string[]; delay_after_scroll?: number | string; idle_timeout?: number | string; loading_selector?: string | string[]; max_duration?: number | string; pause_on_selector?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; step_size?: number; }; } | { click: string | string[] | { selector: string | string[]; count?: number; delay?: number | string; offset_x?: number; offset_y?: number; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; steps?: number; strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; timeout?: number; visible?: boolean; }; } | { eval: string | { code: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fetch: string | { url: string; body?: string; headers?: object; method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fill: { selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; mode?: 'type'; mouse_movement_strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; typing_interval?: number | string; typing_strategy?: 'simple' | 'distribution'; visible?: boolean; } | { mode: 'paste'; selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { get_cookies: boolean | { required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { goto: string | { url: string; referer?: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; wait_until?: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; }; } | { press: string | { key: string; delay?: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { screenshot: boolean | { format?: 'png' | 'jpeg' | 'webp'; full_page?: boolean; quality?: number; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { scroll: number | string | { container?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; to?: string | string[]; visible?: boolean; x?: number; y?: number; }; } | { wait: number | string | { duration: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { wait_for_element: string | string[] | { selector: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { wait_for_navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2' | { navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; }[]`\n    Array of browser automation actions to execute sequentially\n  - `callback_url?: string`\n    URL to call back when async operation completes\n  - `city?: string`\n    City for geolocation\n  - `consent_header?: boolean`\n    Whether to automatically handle cookie consent headers\n  - `cookies?: { creation?: string; domain?: string; expires?: string; extensions?: string[]; hostOnly?: boolean; httpOnly?: boolean; lastAccessed?: string; maxAge?: 'Infinity' | '-Infinity' | number; name?: string; path?: string; pathIsDefault?: boolean; sameSite?: 'strict' | 'lax' | 'none'; secure?: boolean; value?: string; }[] | string`\n    Browser cookies as array of cookie objects\n  - `country?: string`\n    Country code for geolocation and proxy selection\n  - `device?: 'desktop' | 'mobile' | 'tablet'`\n    Device type for browser emulation\n  - `driver?: 'vx6' | 'vx8' | 'vx8-pro' | 'vx10' | 'vx10-pro' | 'vx12' | 'vx12-pro' | 'media-vx6'`\n    Browser driver to use\n  - `expected_status_codes?: number[]`\n    Expected HTTP status codes for successful requests\n  - `formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[]`\n    List of acceptable response formats in order of preference\n  - `headers?: object`\n    Custom HTTP headers to include in the request\n  - `http2?: boolean`\n    Whether to use HTTP/2 protocol\n  - `is_xhr?: boolean`\n    Whether to emulate XMLHttpRequest behavior\n  - `locale?: string`\n    Locale for browser language and region settings\n  - `markdown_backend?: 'full_page' | 'main_content'`\n    Selects which markdown conversion strategy to use. \"full_page\" converts the entire HTML page. \"main_content\" uses Mozilla Readability to extract the main article content before converting.\n  - `method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'`\n    HTTP method for the request\n  - `network_capture?: { method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; resource_type?: string | string[]; status_code?: number | number[]; url?: { value: string; type?: 'exact' | 'contains'; }; validation?: boolean; wait_for_requests_count?: number; wait_for_requests_count_timeout?: number; }[]`\n    Filters for capturing network traffic\n  - `os?: 'windows' | 'mac os' | 'linux' | 'android' | 'ios'`\n    Operating system to emulate\n  - `parse?: boolean`\n    Whether to parse the response content\n  - `parser?: object | string`\n    Custom parser configuration as a key-value map\n  - `referrer_type?: 'random' | 'no-referer' | 'same-origin' | 'google' | 'bing' | 'facebook' | 'twitter' | 'instagram'`\n    Referrer policy for the request\n  - `render?: boolean`\n    Whether to render JavaScript content using a browser\n  - `request_timeout?: number`\n    Request timeout in milliseconds\n  - `session?: { id?: string; prefetch_userbrowser?: boolean; retry?: boolean; timeout?: number; }`\n  - `skill?: string | string[]`\n    Skills or capabilities required for the request\n  - `state?: string`\n    US state for geolocation (only valid when country is US)\n  - `storage_compress?: boolean`\n    Whether to compress stored data\n  - `storage_object_name?: string`\n    Custom name for the stored object\n  - `storage_type?: string`\n    Type of storage to use for results\n  - `storage_url?: string`\n    URL for storage location\n  - `tag?: string`\n    User-defined tag for request identification\n  - `url?: string`\n    Target URL to scrape\n\n### Returns\n\n- `{ batch_id: string; batch_size: number; tasks: { id: string; _query: object; created_at: string; input: object; state: 'pending' | 'success' | 'error'; status_url: string; account_name?: string; api_type?: 'web' | 'serp' | 'ecommerce' | 'social' | 'media' | 'agent' | 'extract'; batch_id?: string; download_url?: string; error?: string; error_type?: string; modified_at?: string; output_url?: string; status_code?: number; }[]; }`\n  Response when a batch of extract tasks is created successfully.\n\n  - `batch_id: string`\n  - `batch_size: number`\n  - `tasks: { id: string; _query: object; created_at: string; input: object; state: 'pending' | 'success' | 'error'; status_url: string; account_name?: string; api_type?: 'web' | 'serp' | 'ecommerce' | 'social' | 'media' | 'agent' | 'extract'; batch_id?: string; download_url?: string; error?: string; error_type?: string; modified_at?: string; output_url?: string; status_code?: number; }[]`\n\n### Example\n\n```typescript\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble();\n\nconst response = await client.extractBatch({ inputs: [{}] });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.extractBatch',
        example:
          "import Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.extractBatch({ inputs: [{}] });\n\nconsole.log(response.batch_id);",
      },
      python: {
        method: 'extract_batch',
        example:
          'import os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.extract_batch(\n    inputs=[{}],\n)\nprint(response.batch_id)',
      },
      go: {
        method: 'client.ExtractBatch',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.ExtractBatch(context.TODO(), githubcomnimblewaynimblego.ExtractBatchParams{\n\t\tInputs: []githubcomnimblewaynimblego.ExtractBatchParamsInput{{}},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.BatchID)\n}\n',
      },
      cli: {
        method: '$client extract_batch',
        example: "nimble extract-batch \\\n  --api-key 'My API Key' \\\n  --input '{}'",
      },
      http: {
        example:
          'curl https://sdk.nimbleway.com/v1/extract/batch \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIMBLE_API_KEY" \\\n    -d \'{\n          "inputs": [\n            {}\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'map',
    endpoint: '/v1/map',
    httpMethod: 'post',
    summary: 'Create map task',
    description: 'Create map task',
    stainlessPath: '(resource) $client > (method) map',
    qualified: 'client.map',
    params: [
      'url: string;',
      'country?: string;',
      "domain_filter?: 'domain' | 'subdomain' | 'all';",
      'limit?: number;',
      'locale?: string;',
      "sitemap?: 'skip' | 'include' | 'only';",
    ],
    response:
      '{ links: { url: string; description?: string; title?: string; }[]; success: boolean; task_id: string; }',
    markdown:
      "## map\n\n`client.map(url: string, country?: string, domain_filter?: 'domain' | 'subdomain' | 'all', limit?: number, locale?: string, sitemap?: 'skip' | 'include' | 'only'): { links: object[]; success: boolean; task_id: string; }`\n\n**post** `/v1/map`\n\nCreate map task\n\n### Parameters\n\n- `url: string`\n  Url to map.\n\n- `country?: string`\n  Country code for geolocation and proxy selection\n\n- `domain_filter?: 'domain' | 'subdomain' | 'all'`\n  Includes subdomains of the main domain in the mapping process.\n\n- `limit?: number`\n  Maximum number of links to return.\n\n- `locale?: string`\n  Locale for browser language and region settings\n\n- `sitemap?: 'skip' | 'include' | 'only'`\n  Sitemap and other methods will be used together to find URLs.\n\n### Returns\n\n- `{ links: { url: string; description?: string; title?: string; }[]; success: boolean; task_id: string; }`\n  Response schema for map requests.\n\n  - `links: { url: string; description?: string; title?: string; }[]`\n  - `success: boolean`\n  - `task_id: string`\n\n### Example\n\n```typescript\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble();\n\nconst response = await client.map({ url: 'url' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.map',
        example:
          "import Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.map({ url: 'url' });\n\nconsole.log(response.task_id);",
      },
      python: {
        method: 'map',
        example:
          'import os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.map(\n    url="url",\n)\nprint(response.task_id)',
      },
      go: {
        method: 'client.Map',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Map(context.TODO(), githubcomnimblewaynimblego.MapParams{\n\t\tURL: "url",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.TaskID)\n}\n',
      },
      cli: {
        method: '$client map',
        example: "nimble map \\\n  --api-key 'My API Key' \\\n  --url url",
      },
      http: {
        example:
          'curl https://sdk.nimbleway.com/v1/map \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIMBLE_API_KEY" \\\n    -d \'{\n          "url": "url"\n        }\'',
      },
    },
  },
  {
    name: 'search',
    endpoint: '/v1/search',
    httpMethod: 'post',
    summary: 'Search',
    description: 'Search',
    stainlessPath: '(resource) $client > (method) search',
    qualified: 'client.search',
    params: [
      'query: string;',
      'content_type?: string[];',
      'country?: string;',
      'deep_search?: boolean;',
      'end_date?: string;',
      'exclude_domains?: string[];',
      'focus?: string | string[];',
      'include_answer?: boolean;',
      'include_domains?: string[];',
      'locale?: string;',
      'max_results?: number;',
      'max_subagents?: number;',
      "output_format?: 'plain_text' | 'markdown' | 'simplified_html';",
      "search_depth?: 'lite' | 'fast' | 'deep';",
      'start_date?: string;',
      "time_range?: 'hour' | 'day' | 'week' | 'month' | 'year';",
    ],
    response:
      '{ request_id: string; results: { content: string; description: string; metadata: { country: string; entity_type: string; locale: string; position: number; driver?: string; } | { agent_name: string; }; title: string; url: string; additional_data?: object; }[]; total_results: number; answer?: string; answer_citations?: { marker: number; result_index: number; }[]; }',
    markdown:
      "## search\n\n`client.search(query: string, content_type?: string[], country?: string, deep_search?: boolean, end_date?: string, exclude_domains?: string[], focus?: string | string[], include_answer?: boolean, include_domains?: string[], locale?: string, max_results?: number, max_subagents?: number, output_format?: 'plain_text' | 'markdown' | 'simplified_html', search_depth?: 'lite' | 'fast' | 'deep', start_date?: string, time_range?: 'hour' | 'day' | 'week' | 'month' | 'year'): { request_id: string; results: object[]; total_results: number; answer?: string; answer_citations?: object[]; }`\n\n**post** `/v1/search`\n\nSearch\n\n### Parameters\n\n- `query: string`\n  Search query string\n\n- `content_type?: string[]`\n  Filter by content type (only supported with focus=general). Supports semantic groups ('documents', 'spreadsheets', 'presentations') and specific formats ('pdf', 'docx', 'xlsx', etc.)\n\n- `country?: string`\n  Country code for geo-targeted results (e.g., 'US', 'GB', 'IL')\n\n- `deep_search?: boolean`\n  Deprecated. Use search_depth instead. true maps to 'deep', false maps to 'lite'.\n\n- `end_date?: string`\n  Filter results before this date (format: YYYY-MM-DD or YYYY)\n\n- `exclude_domains?: string[]`\n  List of domains to exclude from search results. Maximum 50 domains.\n\n- `focus?: string | string[]`\n  Search focus mode (e.g., 'general', 'news', 'shopping') or a list of explicit subagent names (e.g., ['amazon_serp', 'target_serp'])\n\n- `include_answer?: boolean`\n  Generate an LLM-powered answer summary based on search result snippets.\n\n- `include_domains?: string[]`\n  List of domains to include in search results. Maximum 50 domains.\n\n- `locale?: string`\n  Language/locale code (e.g., 'en', 'fr', 'de')\n\n- `max_results?: number`\n  Maximum number of results to return. Actual count may be lower depending on availability.\n\n- `max_subagents?: number`\n  Maximum number of subagents to execute in parallel for WSA focus modes (shopping, social, geo). Ignored for SERP focus modes.\n\n- `output_format?: 'plain_text' | 'markdown' | 'simplified_html'`\n  Output format: plain_text, markdown, or simplified_html\n\n- `search_depth?: 'lite' | 'fast' | 'deep'`\n  Controls content richness and latency of search results.\n\n- lite: Token-efficient metadata for high-volume pipelines (title, URL, description only)\n- fast: Rich content (~2K chars) optimized for AI agents\n- deep: Full page content via Webit scraping for comprehensive analysis\n\n- `start_date?: string`\n  Filter results after this date (format: YYYY-MM-DD or YYYY)\n\n- `time_range?: 'hour' | 'day' | 'week' | 'month' | 'year'`\n  Time range filters passed to Webit SERP API as 'time' parameter.\n\n### Returns\n\n- `{ request_id: string; results: { content: string; description: string; metadata: { country: string; entity_type: string; locale: string; position: number; driver?: string; } | { agent_name: string; }; title: string; url: string; additional_data?: object; }[]; total_results: number; answer?: string; answer_citations?: { marker: number; result_index: number; }[]; }`\n  Response model from SearchService with results and optional LLM answer.\n\nNote: request_id is always a valid UUID generated internally by the middleware,\nso no validation is needed.\n\n  - `request_id: string`\n  - `results: { content: string; description: string; metadata: { country: string; entity_type: string; locale: string; position: number; driver?: string; } | { agent_name: string; }; title: string; url: string; additional_data?: object; }[]`\n  - `total_results: number`\n  - `answer?: string`\n  - `answer_citations?: { marker: number; result_index: number; }[]`\n\n### Example\n\n```typescript\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble();\n\nconst response = await client.search({ query: 'x' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.search',
        example:
          "import Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.search({ query: 'x' });\n\nconsole.log(response.request_id);",
      },
      python: {
        method: 'search',
        example:
          'import os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.search(\n    query="x",\n)\nprint(response.request_id)',
      },
      go: {
        method: 'client.Search',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Search(context.TODO(), githubcomnimblewaynimblego.SearchParams{\n\t\tQuery: "x",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.RequestID)\n}\n',
      },
      cli: {
        method: '$client search',
        example: "nimble search \\\n  --api-key 'My API Key' \\\n  --query x",
      },
      http: {
        example:
          'curl https://sdk.nimbleway.com/v1/search \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIMBLE_API_KEY" \\\n    -d \'{\n          "query": "x"\n        }\'',
      },
    },
  },
  {
    name: 'run',
    endpoint: '/v1/agents/run',
    httpMethod: 'post',
    summary: '',
    description: 'Execute WSA Realtime Endpoint',
    stainlessPath: '(resource) agent > (method) run',
    qualified: 'client.agent.run',
    params: [
      'agent: string;',
      'params: object;',
      "formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[];",
      'localization?: boolean;',
    ],
    response:
      "{ data: { browser_actions?: { results: object[]; success: boolean; total_duration: number; }; cookies?: object[]; eval?: object[]; fetch?: object[]; headers?: object; html?: string; links?: string[]; markdown?: string; network_capture?: { filter: object; results: object[]; errorMessage?: string; }[]; pages_html?: string[]; parsing?: { entities: object; status: 'success'; } | { error: string; status: 'error'; } | object; redirects?: { status_code: number; url: string; }[]; screenshots?: object[]; }; metadata: { agent?: string; driver?: string; localization_id?: string; query_duration?: number; query_time?: string; response_parameters?: object; tag?: string; }; status: 'success' | 'skipped' | 'fatal' | 'error' | 'postponed' | 'ignored' | 'rejected' | 'blocked'; task_id: string; url: string; debug?: { performance_metrics?: object; proxy_total_bytes_usage?: number; transformed_output?: object; userbrowser?: object; }; pagination?: { next_page_params: object; } | { next_page_params: object; }[]; status_code?: number; warnings?: string[]; }",
    markdown:
      "## run\n\n`client.agent.run(agent: string, params: object, formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[], localization?: boolean): { data: object; metadata: object; status: 'success' | 'skipped' | 'fatal' | 'error' | 'postponed' | 'ignored' | 'rejected' | 'blocked'; task_id: string; url: string; debug?: object; pagination?: object | object[]; status_code?: number; warnings?: string[]; }`\n\n**post** `/v1/agents/run`\n\nExecute WSA Realtime Endpoint\n\n### Parameters\n\n- `agent: string`\n\n- `params: object`\n\n- `formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[]`\n  Response formats to include. All disabled by default.\n\n- `localization?: boolean`\n\n### Returns\n\n- `{ data: { browser_actions?: { results: object[]; success: boolean; total_duration: number; }; cookies?: object[]; eval?: object[]; fetch?: object[]; headers?: object; html?: string; links?: string[]; markdown?: string; network_capture?: { filter: object; results: object[]; errorMessage?: string; }[]; pages_html?: string[]; parsing?: { entities: object; status: 'success'; } | { error: string; status: 'error'; } | object; redirects?: { status_code: number; url: string; }[]; screenshots?: object[]; }; metadata: { agent?: string; driver?: string; localization_id?: string; query_duration?: number; query_time?: string; response_parameters?: object; tag?: string; }; status: 'success' | 'skipped' | 'fatal' | 'error' | 'postponed' | 'ignored' | 'rejected' | 'blocked'; task_id: string; url: string; debug?: { performance_metrics?: object; proxy_total_bytes_usage?: number; transformed_output?: object; userbrowser?: object; }; pagination?: { next_page_params: object; } | { next_page_params: object; }[]; status_code?: number; warnings?: string[]; }`\n\n  - `data: { browser_actions?: { results: { duration: number; name: string; status: 'no-run' | 'in-progress' | 'done' | 'error' | 'skipped'; error?: string; result?: object; }[]; success: boolean; total_duration: number; }; cookies?: object[]; eval?: object[]; fetch?: object[]; headers?: object; html?: string; links?: string[]; markdown?: string; network_capture?: { filter: { validation: boolean; wait_for_requests_count: number; method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; resource_type?: string | string[]; status_code?: number | number[]; url?: { type: 'exact' | 'contains'; value: string; }; wait_for_requests_count_timeout?: number; }; results: { request: { headers: object; method: string; resource_type: string; url: string; body?: string; }; response: { body: string; headers: object; serialization: 'none' | 'base64'; status: number; status_text: string; }; }[]; errorMessage?: string; }[]; pages_html?: string[]; parsing?: { entities: object; status: 'success'; } | { error: string; status: 'error'; } | object; redirects?: { status_code: number; url: string; }[]; screenshots?: object[]; }`\n  - `metadata: { agent?: string; driver?: string; localization_id?: string; query_duration?: number; query_time?: string; response_parameters?: object; tag?: string; }`\n  - `status: 'success' | 'skipped' | 'fatal' | 'error' | 'postponed' | 'ignored' | 'rejected' | 'blocked'`\n  - `task_id: string`\n  - `url: string`\n  - `debug?: { performance_metrics?: object; proxy_total_bytes_usage?: number; transformed_output?: object; userbrowser?: object; }`\n  - `pagination?: { next_page_params: object; } | { next_page_params: object; }[]`\n  - `status_code?: number`\n  - `warnings?: string[]`\n\n### Example\n\n```typescript\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble();\n\nconst response = await client.agent.run({\n  agent: 'agent',\n  params: { foo: 'bar' },\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agent.run',
        example:
          "import Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agent.run({\n  agent: 'agent',\n  params: { foo: 'bar' },\n});\n\nconsole.log(response.task_id);",
      },
      python: {
        method: 'agent.run',
        example:
          'import os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agent.run(\n    agent="agent",\n    params={\n        "foo": "bar"\n    },\n)\nprint(response.task_id)',
      },
      go: {
        method: 'client.Agent.Run',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agent.Run(context.TODO(), githubcomnimblewaynimblego.AgentRunParams{\n\t\tAgent: "agent",\n\t\tParams: map[string]any{\n\t\t\t"foo": "bar",\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.TaskID)\n}\n',
      },
      cli: {
        method: 'agent run',
        example:
          "nimble agent run \\\n  --api-key 'My API Key' \\\n  --agent agent \\\n  --params '{foo: bar}'",
      },
      http: {
        example:
          'curl https://sdk.nimbleway.com/v1/agents/run \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIMBLE_API_KEY" \\\n    -d \'{\n          "agent": "agent",\n          "params": {\n            "foo": "bar"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'run_async',
    endpoint: '/v1/agents/async',
    httpMethod: 'post',
    summary: '',
    description: 'Execute WSA Async Endpoint',
    stainlessPath: '(resource) agent > (method) run_async',
    qualified: 'client.agent.runAsync',
    params: [
      'agent: string;',
      'params: object;',
      'callback_url?: string;',
      "formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[];",
      'localization?: boolean;',
      'storage_compress?: boolean;',
      'storage_object_name?: string;',
      'storage_type?: string;',
      'storage_url?: string;',
    ],
    response: "{ status: 'success'; task: object; }",
    markdown:
      "## run_async\n\n`client.agent.runAsync(agent: string, params: object, callback_url?: string, formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[], localization?: boolean, storage_compress?: boolean, storage_object_name?: string, storage_type?: string, storage_url?: string): { status: 'success'; task: object; }`\n\n**post** `/v1/agents/async`\n\nExecute WSA Async Endpoint\n\n### Parameters\n\n- `agent: string`\n\n- `params: object`\n\n- `callback_url?: string`\n  URL to call back when async operation completes\n\n- `formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[]`\n  Response formats to include. All disabled by default.\n\n- `localization?: boolean`\n\n- `storage_compress?: boolean`\n  Whether to compress stored data\n\n- `storage_object_name?: string`\n  Custom name for the stored object\n\n- `storage_type?: string`\n  Type of storage to use for results\n\n- `storage_url?: string`\n  URL for storage location\n\n### Returns\n\n- `{ status: 'success'; task: object; }`\n\n  - `status: 'success'`\n  - `task: object`\n\n### Example\n\n```typescript\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble();\n\nconst response = await client.agent.runAsync({\n  agent: 'agent',\n  params: { foo: 'bar' },\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agent.runAsync',
        example:
          "import Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agent.runAsync({\n  agent: 'agent',\n  params: { foo: 'bar' },\n});\n\nconsole.log(response.status);",
      },
      python: {
        method: 'agent.run_async',
        example:
          'import os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agent.run_async(\n    agent="agent",\n    params={\n        "foo": "bar"\n    },\n)\nprint(response.status)',
      },
      go: {
        method: 'client.Agent.RunAsync',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agent.RunAsync(context.TODO(), githubcomnimblewaynimblego.AgentRunAsyncParams{\n\t\tAgent: "agent",\n\t\tParams: map[string]any{\n\t\t\t"foo": "bar",\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Status)\n}\n',
      },
      cli: {
        method: 'agent run_async',
        example:
          "nimble agent run-async \\\n  --api-key 'My API Key' \\\n  --agent agent \\\n  --params '{foo: bar}'",
      },
      http: {
        example:
          'curl https://sdk.nimbleway.com/v1/agents/async \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIMBLE_API_KEY" \\\n    -d \'{\n          "agent": "agent",\n          "params": {\n            "foo": "bar"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'run_batch',
    endpoint: '/v1/agents/batch',
    httpMethod: 'post',
    summary: '',
    description: 'Execute WSA Batch Endpoint',
    stainlessPath: '(resource) agent > (method) run_batch',
    qualified: 'client.agent.runBatch',
    params: [
      "inputs: { formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[]; localization?: boolean; params?: object; }[];",
      "shared_inputs: { agent: string; formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[]; localization?: boolean; params?: object; };",
    ],
    response:
      "{ batch_id: string; batch_size: number; tasks: { id: string; _query: object; created_at: string; input: object; state: 'pending' | 'success' | 'error'; status_url: string; account_name?: string; api_type?: 'web' | 'serp' | 'ecommerce' | 'social' | 'media' | 'agent' | 'extract'; batch_id?: string; download_url?: string; error?: string; error_type?: string; modified_at?: string; output_url?: string; status_code?: number; }[]; }",
    markdown:
      "## run_batch\n\n`client.agent.runBatch(inputs: { formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[]; localization?: boolean; params?: object; }[], shared_inputs: { agent: string; formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[]; localization?: boolean; params?: object; }): { batch_id: string; batch_size: number; tasks: object[]; }`\n\n**post** `/v1/agents/batch`\n\nExecute WSA Batch Endpoint\n\n### Parameters\n\n- `inputs: { formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[]; localization?: boolean; params?: object; }[]`\n\n- `shared_inputs: { agent: string; formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[]; localization?: boolean; params?: object; }`\n  - `agent: string`\n  - `formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[]`\n    Response formats to include. All disabled by default.\n  - `localization?: boolean`\n  - `params?: object`\n\n### Returns\n\n- `{ batch_id: string; batch_size: number; tasks: { id: string; _query: object; created_at: string; input: object; state: 'pending' | 'success' | 'error'; status_url: string; account_name?: string; api_type?: 'web' | 'serp' | 'ecommerce' | 'social' | 'media' | 'agent' | 'extract'; batch_id?: string; download_url?: string; error?: string; error_type?: string; modified_at?: string; output_url?: string; status_code?: number; }[]; }`\n  Response when a batch of extract tasks is created successfully.\n\n  - `batch_id: string`\n  - `batch_size: number`\n  - `tasks: { id: string; _query: object; created_at: string; input: object; state: 'pending' | 'success' | 'error'; status_url: string; account_name?: string; api_type?: 'web' | 'serp' | 'ecommerce' | 'social' | 'media' | 'agent' | 'extract'; batch_id?: string; download_url?: string; error?: string; error_type?: string; modified_at?: string; output_url?: string; status_code?: number; }[]`\n\n### Example\n\n```typescript\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble();\n\nconst response = await client.agent.runBatch({\n  inputs: [{}],\n  shared_inputs: { agent: 'agent' },\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agent.runBatch',
        example:
          "import Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agent.runBatch({\n  inputs: [{}],\n  shared_inputs: { agent: 'agent' },\n});\n\nconsole.log(response.batch_id);",
      },
      python: {
        method: 'agent.run_batch',
        example:
          'import os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agent.run_batch(\n    inputs=[{}],\n    shared_inputs={\n        "agent": "agent"\n    },\n)\nprint(response.batch_id)',
      },
      go: {
        method: 'client.Agent.RunBatch',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agent.RunBatch(context.TODO(), githubcomnimblewaynimblego.AgentRunBatchParams{\n\t\tInputs: []githubcomnimblewaynimblego.AgentRunBatchParamsInput{{}},\n\t\tSharedInputs: githubcomnimblewaynimblego.AgentRunBatchParamsSharedInputs{\n\t\t\tAgent: "agent",\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.BatchID)\n}\n',
      },
      cli: {
        method: 'agent run_batch',
        example:
          "nimble agent run-batch \\\n  --api-key 'My API Key' \\\n  --input '{}' \\\n  --shared-inputs '{agent: agent}'",
      },
      http: {
        example:
          'curl https://sdk.nimbleway.com/v1/agents/batch \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIMBLE_API_KEY" \\\n    -d \'{\n          "inputs": [\n            {}\n          ],\n          "shared_inputs": {\n            "agent": "agent"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/agents',
    httpMethod: 'get',
    summary: 'List Agent Templates',
    description: 'List Agent Templates',
    stainlessPath: '(resource) agent > (method) list',
    qualified: 'client.agent.list',
    params: [
      'limit?: number;',
      "managed_by?: 'nimble' | 'community' | 'self_managed';",
      'offset?: number;',
      "privacy?: 'public' | 'private' | 'all';",
      'search?: string;',
    ],
    response:
      '{ display_name: string; is_public: boolean; name: string; description?: string; domain?: string; entity_type?: string; managed_by?: string; vertical?: string; }[]',
    markdown:
      "## list\n\n`client.agent.list(limit?: number, managed_by?: 'nimble' | 'community' | 'self_managed', offset?: number, privacy?: 'public' | 'private' | 'all', search?: string): { display_name: string; is_public: boolean; name: string; description?: string; domain?: string; entity_type?: string; managed_by?: string; vertical?: string; }[]`\n\n**get** `/v1/agents`\n\nList Agent Templates\n\n### Parameters\n\n- `limit?: number`\n  Number of results per page\n\n- `managed_by?: 'nimble' | 'community' | 'self_managed'`\n  Filter templates by attribution\n\n- `offset?: number`\n  Pagination offset\n\n- `privacy?: 'public' | 'private' | 'all'`\n  Filter by privacy level\n\n- `search?: string`\n  Search templates by name, domain, or vertical\n\n### Returns\n\n- `{ display_name: string; is_public: boolean; name: string; description?: string; domain?: string; entity_type?: string; managed_by?: string; vertical?: string; }[]`\n\n### Example\n\n```typescript\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble();\n\nconst agents = await client.agent.list();\n\nconsole.log(agents);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agent.list',
        example:
          "import Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst agents = await client.agent.list();\n\nconsole.log(agents);",
      },
      python: {
        method: 'agent.list',
        example:
          'import os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\nagents = client.agent.list()\nprint(agents)',
      },
      go: {
        method: 'client.Agent.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tagents, err := client.Agent.List(context.TODO(), githubcomnimblewaynimblego.AgentListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", agents)\n}\n',
      },
      cli: {
        method: 'agent list',
        example: "nimble agent list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://sdk.nimbleway.com/v1/agents \\\n    -H "Authorization: Bearer $NIMBLE_API_KEY"',
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/agents/{template_name}',
    httpMethod: 'get',
    summary: 'Get Agent Template',
    description: 'Get Agent Template',
    stainlessPath: '(resource) agent > (method) get',
    qualified: 'client.agent.get',
    params: ['template_name: string;'],
    response:
      '{ display_name: string; is_public: boolean; name: string; description?: string; domain?: string; entity_type?: string; feature_flags?: { is_localization_supported?: boolean; is_pagination_supported?: boolean; }; input_properties?: { default?: string | boolean | number; description?: string; examples?: object[]; is_localization_param?: boolean; is_pagination_param?: boolean; name?: string; required?: boolean; rules?: string[]; type?: string; }[]; managed_by?: string; output_schema?: object; vertical?: string; }',
    markdown:
      "## get\n\n`client.agent.get(template_name: string): { display_name: string; is_public: boolean; name: string; description?: string; domain?: string; entity_type?: string; feature_flags?: object; input_properties?: object[]; managed_by?: string; output_schema?: object; vertical?: string; }`\n\n**get** `/v1/agents/{template_name}`\n\nGet Agent Template\n\n### Parameters\n\n- `template_name: string`\n\n### Returns\n\n- `{ display_name: string; is_public: boolean; name: string; description?: string; domain?: string; entity_type?: string; feature_flags?: { is_localization_supported?: boolean; is_pagination_supported?: boolean; }; input_properties?: { default?: string | boolean | number; description?: string; examples?: object[]; is_localization_param?: boolean; is_pagination_param?: boolean; name?: string; required?: boolean; rules?: string[]; type?: string; }[]; managed_by?: string; output_schema?: object; vertical?: string; }`\n\n  - `display_name: string`\n  - `is_public: boolean`\n  - `name: string`\n  - `description?: string`\n  - `domain?: string`\n  - `entity_type?: string`\n  - `feature_flags?: { is_localization_supported?: boolean; is_pagination_supported?: boolean; }`\n  - `input_properties?: { default?: string | boolean | number; description?: string; examples?: object[]; is_localization_param?: boolean; is_pagination_param?: boolean; name?: string; required?: boolean; rules?: string[]; type?: string; }[]`\n  - `managed_by?: string`\n  - `output_schema?: object`\n  - `vertical?: string`\n\n### Example\n\n```typescript\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble();\n\nconst agent = await client.agent.get('template_name');\n\nconsole.log(agent);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agent.get',
        example:
          "import Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst agent = await client.agent.get('template_name');\n\nconsole.log(agent.display_name);",
      },
      python: {
        method: 'agent.get',
        example:
          'import os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\nagent = client.agent.get(\n    "template_name",\n)\nprint(agent.display_name)',
      },
      go: {
        method: 'client.Agent.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tagent, err := client.Agent.Get(context.TODO(), "template_name")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", agent.DisplayName)\n}\n',
      },
      cli: {
        method: 'agent get',
        example: "nimble agent get \\\n  --api-key 'My API Key' \\\n  --template-name template_name",
      },
      http: {
        example:
          'curl https://sdk.nimbleway.com/v1/agents/$TEMPLATE_NAME \\\n    -H "Authorization: Bearer $NIMBLE_API_KEY"',
      },
    },
  },
  {
    name: 'generate',
    endpoint: '/v1/agents/generations',
    httpMethod: 'post',
    summary: 'Create Agent Generation',
    description: 'Create Agent Generation',
    stainlessPath: '(resource) agent > (method) generate',
    qualified: 'client.agent.generate',
    params: [
      '{ prompt: string; url: string; agent_name?: string; input_schema?: object; metadata?: { description?: string; display_name?: string; tags?: string[]; }; output_schema?: object; } | { from_agent: string; prompt: string; };',
    ],
    response:
      '{ id: string; status: string; agent_name?: string; completed_at?: string; created_at?: string; error?: string; generated_version?: { id: string; agent_name: string; created_at: string; input_schema: object; metadata: { data_source?: string; description?: string; display_name?: string; domain?: string; entity_type?: string; tags?: string[]; vertical?: string; }; output_schema: object; steps: object[]; version_number: number; output_sample_data?: object; }; generated_version_id?: string; source_version_id?: string; started_at?: string; summary?: string; }',
    perLanguage: {
      typescript: {
        method: 'client.agent.generate',
        example:
          "import Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agent.generate({ prompt: 'prompt', url: 'url' });\n\nconsole.log(response.id);",
      },
      python: {
        method: 'agent.generate',
        example:
          'import os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agent.generate(\n    prompt="prompt",\n    url="url",\n)\nprint(response.id)',
      },
      go: {
        method: 'client.Agent.Generate',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agent.Generate(context.TODO(), githubcomnimblewaynimblego.AgentGenerateParams{\n\t\tOfCreateAgentGenerationRequest: &githubcomnimblewaynimblego.AgentGenerateParamsBodyCreateAgentGenerationRequest{\n\t\t\tPrompt: "prompt",\n\t\t\tURL:    "url",\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      cli: {
        method: 'agent generate',
        example:
          "nimble agent generate \\\n  --api-key 'My API Key' \\\n  --prompt prompt \\\n  --url url \\\n  --from-agent from_agent",
      },
      http: {
        example:
          'curl https://sdk.nimbleway.com/v1/agents/generations \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIMBLE_API_KEY" \\\n    -d \'{\n          "prompt": "prompt",\n          "url": "url"\n        }\'',
      },
    },
  },
  {
    name: 'get_generation',
    endpoint: '/v1/agents/generations/{generation_id}',
    httpMethod: 'get',
    summary: 'Get Agent Generation',
    description: 'Get Agent Generation',
    stainlessPath: '(resource) agent > (method) get_generation',
    qualified: 'client.agent.getGeneration',
    params: ['generation_id: string;'],
    response:
      '{ id: string; status: string; agent_name?: string; completed_at?: string; created_at?: string; error?: string; generated_version?: { id: string; agent_name: string; created_at: string; input_schema: object; metadata: { data_source?: string; description?: string; display_name?: string; domain?: string; entity_type?: string; tags?: string[]; vertical?: string; }; output_schema: object; steps: object[]; version_number: number; output_sample_data?: object; }; generated_version_id?: string; source_version_id?: string; started_at?: string; summary?: string; }',
    markdown:
      "## get_generation\n\n`client.agent.getGeneration(generation_id: string): { id: string; status: string; agent_name?: string; completed_at?: string; created_at?: string; error?: string; generated_version?: object; generated_version_id?: string; source_version_id?: string; started_at?: string; summary?: string; }`\n\n**get** `/v1/agents/generations/{generation_id}`\n\nGet Agent Generation\n\n### Parameters\n\n- `generation_id: string`\n\n### Returns\n\n- `{ id: string; status: string; agent_name?: string; completed_at?: string; created_at?: string; error?: string; generated_version?: { id: string; agent_name: string; created_at: string; input_schema: object; metadata: { data_source?: string; description?: string; display_name?: string; domain?: string; entity_type?: string; tags?: string[]; vertical?: string; }; output_schema: object; steps: object[]; version_number: number; output_sample_data?: object; }; generated_version_id?: string; source_version_id?: string; started_at?: string; summary?: string; }`\n\n  - `id: string`\n  - `status: string`\n  - `agent_name?: string`\n  - `completed_at?: string`\n  - `created_at?: string`\n  - `error?: string`\n  - `generated_version?: { id: string; agent_name: string; created_at: string; input_schema: object; metadata: { data_source?: string; description?: string; display_name?: string; domain?: string; entity_type?: string; tags?: string[]; vertical?: string; }; output_schema: object; steps: object[]; version_number: number; output_sample_data?: object; }`\n  - `generated_version_id?: string`\n  - `source_version_id?: string`\n  - `started_at?: string`\n  - `summary?: string`\n\n### Example\n\n```typescript\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble();\n\nconst response = await client.agent.getGeneration('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agent.getGeneration',
        example:
          "import Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agent.getGeneration('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.id);",
      },
      python: {
        method: 'agent.get_generation',
        example:
          'import os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agent.get_generation(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.id)',
      },
      go: {
        method: 'client.Agent.GetGeneration',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agent.GetGeneration(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      cli: {
        method: 'agent get_generation',
        example:
          "nimble agent get-generation \\\n  --api-key 'My API Key' \\\n  --generation-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://sdk.nimbleway.com/v1/agents/generations/$GENERATION_ID \\\n    -H "Authorization: Bearer $NIMBLE_API_KEY"',
      },
    },
  },
  {
    name: 'publish',
    endpoint: '/v1/agents/{agent_name}/publish',
    httpMethod: 'post',
    summary: 'Publish Agent Version',
    description: 'Publish Agent Version',
    stainlessPath: '(resource) agent > (method) publish',
    qualified: 'client.agent.publish',
    params: ['agent_name: string;', 'version_id: string;'],
    response: '{ agent_name: string; published_version_id: string; }',
    markdown:
      "## publish\n\n`client.agent.publish(agent_name: string, version_id: string): { agent_name: string; published_version_id: string; }`\n\n**post** `/v1/agents/{agent_name}/publish`\n\nPublish Agent Version\n\n### Parameters\n\n- `agent_name: string`\n\n- `version_id: string`\n\n### Returns\n\n- `{ agent_name: string; published_version_id: string; }`\n\n  - `agent_name: string`\n  - `published_version_id: string`\n\n### Example\n\n```typescript\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble();\n\nconst response = await client.agent.publish('agent_name', { version_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agent.publish',
        example:
          "import Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agent.publish('agent_name', {\n  version_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.published_version_id);",
      },
      python: {
        method: 'agent.publish',
        example:
          'import os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agent.publish(\n    agent_name="agent_name",\n    version_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.published_version_id)',
      },
      go: {
        method: 'client.Agent.Publish',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agent.Publish(\n\t\tcontext.TODO(),\n\t\t"agent_name",\n\t\tgithubcomnimblewaynimblego.AgentPublishParams{\n\t\t\tVersionID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.PublishedVersionID)\n}\n',
      },
      cli: {
        method: 'agent publish',
        example:
          "nimble agent publish \\\n  --api-key 'My API Key' \\\n  --agent-name agent_name \\\n  --version-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://sdk.nimbleway.com/v1/agents/$AGENT_NAME/publish \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIMBLE_API_KEY" \\\n    -d \'{\n          "version_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n        }\'',
      },
    },
  },
  {
    name: 'run',
    endpoint: '/v1/crawl',
    httpMethod: 'post',
    summary: 'Create crawl task',
    description: 'Create crawl task',
    stainlessPath: '(resource) crawl > (method) run',
    qualified: 'client.crawl.run',
    params: [
      'url: string;',
      'allow_external_links?: boolean;',
      'allow_subdomains?: boolean;',
      "callback?: { url: string; events?: 'started' | 'page' | 'completed' | 'failed'[]; headers?: object; metadata?: object; } | string;",
      'crawl_entire_domain?: boolean;',
      'exclude_paths?: string[];',
      "extract_options?: { browser?: 'chrome' | 'firefox' | { name: 'chrome' | 'firefox'; version?: string; }; browser_actions?: { auto_scroll: boolean | number | string | { click_selector?: string | string[]; container?: string | string[]; delay_after_scroll?: number | string; idle_timeout?: number | string; loading_selector?: string | string[]; max_duration?: number | string; pause_on_selector?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; step_size?: number; }; } | { click: string | string[] | { selector: string | string[]; count?: number; delay?: number | string; offset_x?: number; offset_y?: number; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; steps?: number; strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; timeout?: number; visible?: boolean; }; } | { eval: string | { code: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fetch: string | { url: string; body?: string; headers?: object; method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fill: { selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; mode?: 'type'; mouse_movement_strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; typing_interval?: number | string; typing_strategy?: 'simple' | 'distribution'; visible?: boolean; } | { mode: 'paste'; selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { get_cookies: boolean | { required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { goto: string | { url: string; referer?: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; wait_until?: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; }; } | { press: string | { key: string; delay?: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { screenshot: boolean | { format?: 'png' | 'jpeg' | 'webp'; full_page?: boolean; quality?: number; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { scroll: number | string | { container?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; to?: string | string[]; visible?: boolean; x?: number; y?: number; }; } | { wait: number | string | { duration: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { wait_for_element: string | string[] | { selector: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { wait_for_navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2' | { navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; }[]; city?: string; consent_header?: boolean; cookies?: { creation?: string; domain?: string; expires?: string; extensions?: string[]; hostOnly?: boolean; httpOnly?: boolean; lastAccessed?: string; maxAge?: 'Infinity' | '-Infinity' | number; name?: string; path?: string; pathIsDefault?: boolean; sameSite?: 'strict' | 'lax' | 'none'; secure?: boolean; value?: string; }[] | string; country?: string; device?: 'desktop' | 'mobile' | 'tablet'; driver?: 'vx6' | 'vx8' | 'vx8-pro' | 'vx10' | 'vx10-pro' | 'vx12' | 'vx12-pro' | 'media-vx6'; expected_status_codes?: number[]; formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[]; headers?: object; http2?: boolean; is_xhr?: boolean; locale?: string; markdown_backend?: 'full_page' | 'main_content'; method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'; network_capture?: { method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; resource_type?: string | string[]; status_code?: number | number[]; url?: { value: string; type?: 'exact' | 'contains'; }; validation?: boolean; wait_for_requests_count?: number; wait_for_requests_count_timeout?: number; }[]; os?: 'windows' | 'mac os' | 'linux' | 'android' | 'ios'; parse?: boolean; parser?: object | string; referrer_type?: 'random' | 'no-referer' | 'same-origin' | 'google' | 'bing' | 'facebook' | 'twitter' | 'instagram'; render?: boolean; request_timeout?: number; session?: { id?: string; prefetch_userbrowser?: boolean; retry?: boolean; timeout?: number; }; skill?: string | string[]; state?: string; tag?: string; url?: string; };",
      'ignore_query_parameters?: boolean;',
      'include_paths?: string[];',
      'limit?: number;',
      'max_discovery_depth?: number;',
      'name?: string;',
      "sitemap?: 'skip' | 'include' | 'only';",
    ],
    response:
      "{ account_name: string; crawl_id: string; crawl_options: { allow_external_links: boolean; allow_subdomains: boolean; crawl_entire_domain: boolean; ignore_query_parameters: boolean; limit: number; max_discovery_depth: number; sitemap: 'skip' | 'include' | 'only'; callback?: { url: string; events?: 'started' | 'page' | 'completed' | 'failed'[]; headers?: object; metadata?: object; } | string; exclude_paths?: string[]; include_paths?: string[]; }; created_at: string | object; status: 'queued' | 'running' | 'succeeded' | 'failed' | 'canceled'; updated_at: string | object; url: string; completed?: number; completed_at?: string | object; extract_options?: object; failed?: number; name?: string; pending?: number; tasks?: { status: 'pending' | 'completed' | 'failed'; task_id: string; created_at?: string; updated_at?: string; }[]; total?: number; }",
    markdown:
      "## run\n\n`client.crawl.run(url: string, allow_external_links?: boolean, allow_subdomains?: boolean, callback?: { url: string; events?: 'started' | 'page' | 'completed' | 'failed'[]; headers?: object; metadata?: object; } | string, crawl_entire_domain?: boolean, exclude_paths?: string[], extract_options?: { browser?: 'chrome' | 'firefox' | { name: 'chrome' | 'firefox'; version?: string; }; browser_actions?: object | object | object | object | object | object | object | object | object | object | object | object | object[]; city?: string; consent_header?: boolean; cookies?: { creation?: string; domain?: string; expires?: string; extensions?: string[]; hostOnly?: boolean; httpOnly?: boolean; lastAccessed?: string; maxAge?: 'Infinity' | '-Infinity' | number; name?: string; path?: string; pathIsDefault?: boolean; sameSite?: 'strict' | 'lax' | 'none'; secure?: boolean; value?: string; }[] | string; country?: string; device?: 'desktop' | 'mobile' | 'tablet'; driver?: 'vx6' | 'vx8' | 'vx8-pro' | 'vx10' | 'vx10-pro' | 'vx12' | 'vx12-pro' | 'media-vx6'; expected_status_codes?: number[]; formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[]; headers?: object; http2?: boolean; is_xhr?: boolean; locale?: string; markdown_backend?: 'full_page' | 'main_content'; method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'; network_capture?: { method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; resource_type?: string | string[]; status_code?: number | number[]; url?: object; validation?: boolean; wait_for_requests_count?: number; wait_for_requests_count_timeout?: number; }[]; os?: 'windows' | 'mac os' | 'linux' | 'android' | 'ios'; parse?: boolean; parser?: object | string; referrer_type?: 'random' | 'no-referer' | 'same-origin' | 'google' | 'bing' | 'facebook' | 'twitter' | 'instagram'; render?: boolean; request_timeout?: number; session?: { id?: string; prefetch_userbrowser?: boolean; retry?: boolean; timeout?: number; }; skill?: string | string[]; state?: string; tag?: string; url?: string; }, ignore_query_parameters?: boolean, include_paths?: string[], limit?: number, max_discovery_depth?: number, name?: string, sitemap?: 'skip' | 'include' | 'only'): { account_name: string; crawl_id: string; crawl_options: object; created_at: string | object; status: 'queued' | 'running' | 'succeeded' | 'failed' | 'canceled'; updated_at: string | object; url: string; completed?: number; completed_at?: string | object; extract_options?: object; failed?: number; name?: string; pending?: number; tasks?: object[]; total?: number; }`\n\n**post** `/v1/crawl`\n\nCreate crawl task\n\n### Parameters\n\n- `url: string`\n  Url to crawl.\n\n- `allow_external_links?: boolean`\n  Allows the crawler to follow links to external websites.\n\n- `allow_subdomains?: boolean`\n  Allows the crawler to follow links to subdomains of the main domain.\n\n- `callback?: { url: string; events?: 'started' | 'page' | 'completed' | 'failed'[]; headers?: object; metadata?: object; } | string`\n  Webhook configuration for receiving crawl results.\n\n- `crawl_entire_domain?: boolean`\n  Allows the crawler to follow internal links to sibling or parent URLs, not just child paths.\n\n- `exclude_paths?: string[]`\n  URL pathname regex patterns that exclude matching URLs from the crawl.\n\n- `extract_options?: { browser?: 'chrome' | 'firefox' | { name: 'chrome' | 'firefox'; version?: string; }; browser_actions?: { auto_scroll: boolean | number | string | { click_selector?: string | string[]; container?: string | string[]; delay_after_scroll?: number | string; idle_timeout?: number | string; loading_selector?: string | string[]; max_duration?: number | string; pause_on_selector?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; step_size?: number; }; } | { click: string | string[] | { selector: string | string[]; count?: number; delay?: number | string; offset_x?: number; offset_y?: number; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; steps?: number; strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; timeout?: number; visible?: boolean; }; } | { eval: string | { code: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fetch: string | { url: string; body?: string; headers?: object; method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fill: { selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; mode?: 'type'; mouse_movement_strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; typing_interval?: number | string; typing_strategy?: 'simple' | 'distribution'; visible?: boolean; } | { mode: 'paste'; selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { get_cookies: boolean | { required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { goto: string | { url: string; referer?: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; wait_until?: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; }; } | { press: string | { key: string; delay?: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { screenshot: boolean | { format?: 'png' | 'jpeg' | 'webp'; full_page?: boolean; quality?: number; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { scroll: number | string | { container?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; to?: string | string[]; visible?: boolean; x?: number; y?: number; }; } | { wait: number | string | { duration: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { wait_for_element: string | string[] | { selector: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { wait_for_navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2' | { navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; }[]; city?: string; consent_header?: boolean; cookies?: { creation?: string; domain?: string; expires?: string; extensions?: string[]; hostOnly?: boolean; httpOnly?: boolean; lastAccessed?: string; maxAge?: 'Infinity' | '-Infinity' | number; name?: string; path?: string; pathIsDefault?: boolean; sameSite?: 'strict' | 'lax' | 'none'; secure?: boolean; value?: string; }[] | string; country?: string; device?: 'desktop' | 'mobile' | 'tablet'; driver?: 'vx6' | 'vx8' | 'vx8-pro' | 'vx10' | 'vx10-pro' | 'vx12' | 'vx12-pro' | 'media-vx6'; expected_status_codes?: number[]; formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[]; headers?: object; http2?: boolean; is_xhr?: boolean; locale?: string; markdown_backend?: 'full_page' | 'main_content'; method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'; network_capture?: { method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; resource_type?: string | string[]; status_code?: number | number[]; url?: { value: string; type?: 'exact' | 'contains'; }; validation?: boolean; wait_for_requests_count?: number; wait_for_requests_count_timeout?: number; }[]; os?: 'windows' | 'mac os' | 'linux' | 'android' | 'ios'; parse?: boolean; parser?: object | string; referrer_type?: 'random' | 'no-referer' | 'same-origin' | 'google' | 'bing' | 'facebook' | 'twitter' | 'instagram'; render?: boolean; request_timeout?: number; session?: { id?: string; prefetch_userbrowser?: boolean; retry?: boolean; timeout?: number; }; skill?: string | string[]; state?: string; tag?: string; url?: string; }`\n  - `browser?: 'chrome' | 'firefox' | { name: 'chrome' | 'firefox'; version?: string; }`\n    Browser type to emulate\n  - `browser_actions?: { auto_scroll: boolean | number | string | { click_selector?: string | string[]; container?: string | string[]; delay_after_scroll?: number | string; idle_timeout?: number | string; loading_selector?: string | string[]; max_duration?: number | string; pause_on_selector?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; step_size?: number; }; } | { click: string | string[] | { selector: string | string[]; count?: number; delay?: number | string; offset_x?: number; offset_y?: number; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; steps?: number; strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; timeout?: number; visible?: boolean; }; } | { eval: string | { code: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fetch: string | { url: string; body?: string; headers?: object; method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; } | { fill: { selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; mode?: 'type'; mouse_movement_strategy?: 'linear' | 'ghost-cursor' | 'windmouse'; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; typing_interval?: number | string; typing_strategy?: 'simple' | 'distribution'; visible?: boolean; } | { mode: 'paste'; selector: string | string[]; value: string; click_on_element?: boolean; delay?: number | string; required?: 'true' | 'false' | boolean; scroll?: boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { get_cookies: boolean | { required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { goto: string | { url: string; referer?: string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; wait_until?: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; }; } | { press: string | { key: string; delay?: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { screenshot: boolean | { format?: 'png' | 'jpeg' | 'webp'; full_page?: boolean; quality?: number; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { scroll: number | string | { container?: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; to?: string | string[]; visible?: boolean; x?: number; y?: number; }; } | { wait: number | string | { duration: number | string; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; }; } | { wait_for_element: string | string[] | { selector: string | string[]; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; visible?: boolean; }; } | { wait_for_navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2' | { navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'; required?: 'true' | 'false' | boolean; skip?: 'true' | 'false' | boolean; timeout?: number; }; }[]`\n    Array of browser automation actions to execute sequentially\n  - `city?: string`\n    City for geolocation\n  - `consent_header?: boolean`\n    Whether to automatically handle cookie consent headers\n  - `cookies?: { creation?: string; domain?: string; expires?: string; extensions?: string[]; hostOnly?: boolean; httpOnly?: boolean; lastAccessed?: string; maxAge?: 'Infinity' | '-Infinity' | number; name?: string; path?: string; pathIsDefault?: boolean; sameSite?: 'strict' | 'lax' | 'none'; secure?: boolean; value?: string; }[] | string`\n    Browser cookies as array of cookie objects\n  - `country?: string`\n    Country code for geolocation and proxy selection\n  - `device?: 'desktop' | 'mobile' | 'tablet'`\n    Device type for browser emulation\n  - `driver?: 'vx6' | 'vx8' | 'vx8-pro' | 'vx10' | 'vx10-pro' | 'vx12' | 'vx12-pro' | 'media-vx6'`\n    Browser driver to use\n  - `expected_status_codes?: number[]`\n    Expected HTTP status codes for successful requests\n  - `formats?: 'html' | 'markdown' | 'screenshot' | 'headers' | 'links'[]`\n    List of acceptable response formats in order of preference\n  - `headers?: object`\n    Custom HTTP headers to include in the request\n  - `http2?: boolean`\n    Whether to use HTTP/2 protocol\n  - `is_xhr?: boolean`\n    Whether to emulate XMLHttpRequest behavior\n  - `locale?: string`\n    Locale for browser language and region settings\n  - `markdown_backend?: 'full_page' | 'main_content'`\n    Selects which markdown conversion strategy to use. \"full_page\" converts the entire HTML page. \"main_content\" uses Mozilla Readability to extract the main article content before converting.\n  - `method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'`\n    HTTP method for the request\n  - `network_capture?: { method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'; resource_type?: string | string[]; status_code?: number | number[]; url?: { value: string; type?: 'exact' | 'contains'; }; validation?: boolean; wait_for_requests_count?: number; wait_for_requests_count_timeout?: number; }[]`\n    Filters for capturing network traffic\n  - `os?: 'windows' | 'mac os' | 'linux' | 'android' | 'ios'`\n    Operating system to emulate\n  - `parse?: boolean`\n    Whether to parse the response content\n  - `parser?: object | string`\n    Custom parser configuration as a key-value map\n  - `referrer_type?: 'random' | 'no-referer' | 'same-origin' | 'google' | 'bing' | 'facebook' | 'twitter' | 'instagram'`\n    Referrer policy for the request\n  - `render?: boolean`\n    Whether to render JavaScript content using a browser\n  - `request_timeout?: number`\n    Request timeout in milliseconds\n  - `session?: { id?: string; prefetch_userbrowser?: boolean; retry?: boolean; timeout?: number; }`\n  - `skill?: string | string[]`\n    Skills or capabilities required for the request\n  - `state?: string`\n    US state for geolocation (only valid when country is US)\n  - `tag?: string`\n    User-defined tag for request identification\n  - `url?: string`\n    Target URL to scrape\n\n- `ignore_query_parameters?: boolean`\n  Do not re-scrape the same path with different (or none) query parameters.\n\n- `include_paths?: string[]`\n  URL pathname regex patterns that include matching URLs in the crawl.\n\n- `limit?: number`\n  Maximum number of pages to crawl.\n\n- `max_discovery_depth?: number`\n  Maximum depth to crawl based on discovery order.\n\n- `name?: string`\n  Name of the crawl.\n\n- `sitemap?: 'skip' | 'include' | 'only'`\n  Sitemap and other methods will be used together to find URLs.\n\n### Returns\n\n- `{ account_name: string; crawl_id: string; crawl_options: { allow_external_links: boolean; allow_subdomains: boolean; crawl_entire_domain: boolean; ignore_query_parameters: boolean; limit: number; max_discovery_depth: number; sitemap: 'skip' | 'include' | 'only'; callback?: { url: string; events?: 'started' | 'page' | 'completed' | 'failed'[]; headers?: object; metadata?: object; } | string; exclude_paths?: string[]; include_paths?: string[]; }; created_at: string | object; status: 'queued' | 'running' | 'succeeded' | 'failed' | 'canceled'; updated_at: string | object; url: string; completed?: number; completed_at?: string | object; extract_options?: object; failed?: number; name?: string; pending?: number; tasks?: { status: 'pending' | 'completed' | 'failed'; task_id: string; created_at?: string; updated_at?: string; }[]; total?: number; }`\n  Crawl API response\n\n  - `account_name: string`\n  - `crawl_id: string`\n  - `crawl_options: { allow_external_links: boolean; allow_subdomains: boolean; crawl_entire_domain: boolean; ignore_query_parameters: boolean; limit: number; max_discovery_depth: number; sitemap: 'skip' | 'include' | 'only'; callback?: { url: string; events?: 'started' | 'page' | 'completed' | 'failed'[]; headers?: object; metadata?: object; } | string; exclude_paths?: string[]; include_paths?: string[]; }`\n  - `created_at: string | object`\n  - `status: 'queued' | 'running' | 'succeeded' | 'failed' | 'canceled'`\n  - `updated_at: string | object`\n  - `url: string`\n  - `completed?: number`\n  - `completed_at?: string | object`\n  - `extract_options?: object`\n  - `failed?: number`\n  - `name?: string`\n  - `pending?: number`\n  - `tasks?: { status: 'pending' | 'completed' | 'failed'; task_id: string; created_at?: string; updated_at?: string; }[]`\n  - `total?: number`\n\n### Example\n\n```typescript\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble();\n\nconst response = await client.crawl.run({ url: 'url' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.crawl.run',
        example:
          "import Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.crawl.run({ url: 'url' });\n\nconsole.log(response.crawl_id);",
      },
      python: {
        method: 'crawl.run',
        example:
          'import os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.crawl.run(\n    url="url",\n)\nprint(response.crawl_id)',
      },
      go: {
        method: 'client.Crawl.Run',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Crawl.Run(context.TODO(), githubcomnimblewaynimblego.CrawlRunParams{\n\t\tURL: "url",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.CrawlID)\n}\n',
      },
      cli: {
        method: 'crawl run',
        example: "nimble crawl run \\\n  --api-key 'My API Key' \\\n  --url url",
      },
      http: {
        example:
          'curl https://sdk.nimbleway.com/v1/crawl \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIMBLE_API_KEY" \\\n    -d \'{\n          "url": "url"\n        }\'',
      },
    },
  },
  {
    name: 'status',
    endpoint: '/v1/crawl/{id}',
    httpMethod: 'get',
    summary: 'Get crawl data',
    description: 'Get crawl data',
    stainlessPath: '(resource) crawl > (method) status',
    qualified: 'client.crawl.status',
    params: ['id: string;'],
    response:
      "{ account_name: string; crawl_id: string; crawl_options: { allow_external_links: boolean; allow_subdomains: boolean; crawl_entire_domain: boolean; ignore_query_parameters: boolean; limit: number; max_discovery_depth: number; sitemap: 'skip' | 'include' | 'only'; callback?: { url: string; events?: 'started' | 'page' | 'completed' | 'failed'[]; headers?: object; metadata?: object; } | string; exclude_paths?: string[]; include_paths?: string[]; }; created_at: string | object; status: 'queued' | 'running' | 'succeeded' | 'failed' | 'canceled'; updated_at: string | object; url: string; completed?: number; completed_at?: string | object; extract_options?: object; failed?: number; name?: string; pending?: number; tasks?: { status: 'pending' | 'completed' | 'failed'; task_id: string; created_at?: string; updated_at?: string; }[]; total?: number; }",
    markdown:
      "## status\n\n`client.crawl.status(id: string): { account_name: string; crawl_id: string; crawl_options: object; created_at: string | object; status: 'queued' | 'running' | 'succeeded' | 'failed' | 'canceled'; updated_at: string | object; url: string; completed?: number; completed_at?: string | object; extract_options?: object; failed?: number; name?: string; pending?: number; tasks?: object[]; total?: number; }`\n\n**get** `/v1/crawl/{id}`\n\nGet crawl data\n\n### Parameters\n\n- `id: string`\n  The unique identifier of the crawl task.\n\n### Returns\n\n- `{ account_name: string; crawl_id: string; crawl_options: { allow_external_links: boolean; allow_subdomains: boolean; crawl_entire_domain: boolean; ignore_query_parameters: boolean; limit: number; max_discovery_depth: number; sitemap: 'skip' | 'include' | 'only'; callback?: { url: string; events?: 'started' | 'page' | 'completed' | 'failed'[]; headers?: object; metadata?: object; } | string; exclude_paths?: string[]; include_paths?: string[]; }; created_at: string | object; status: 'queued' | 'running' | 'succeeded' | 'failed' | 'canceled'; updated_at: string | object; url: string; completed?: number; completed_at?: string | object; extract_options?: object; failed?: number; name?: string; pending?: number; tasks?: { status: 'pending' | 'completed' | 'failed'; task_id: string; created_at?: string; updated_at?: string; }[]; total?: number; }`\n  Crawl API response\n\n  - `account_name: string`\n  - `crawl_id: string`\n  - `crawl_options: { allow_external_links: boolean; allow_subdomains: boolean; crawl_entire_domain: boolean; ignore_query_parameters: boolean; limit: number; max_discovery_depth: number; sitemap: 'skip' | 'include' | 'only'; callback?: { url: string; events?: 'started' | 'page' | 'completed' | 'failed'[]; headers?: object; metadata?: object; } | string; exclude_paths?: string[]; include_paths?: string[]; }`\n  - `created_at: string | object`\n  - `status: 'queued' | 'running' | 'succeeded' | 'failed' | 'canceled'`\n  - `updated_at: string | object`\n  - `url: string`\n  - `completed?: number`\n  - `completed_at?: string | object`\n  - `extract_options?: object`\n  - `failed?: number`\n  - `name?: string`\n  - `pending?: number`\n  - `tasks?: { status: 'pending' | 'completed' | 'failed'; task_id: string; created_at?: string; updated_at?: string; }[]`\n  - `total?: number`\n\n### Example\n\n```typescript\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble();\n\nconst response = await client.crawl.status('123e4567-e89b-12d3-a456-426614174000');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.crawl.status',
        example:
          "import Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.crawl.status('123e4567-e89b-12d3-a456-426614174000');\n\nconsole.log(response.crawl_id);",
      },
      python: {
        method: 'crawl.status',
        example:
          'import os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.crawl.status(\n    "123e4567-e89b-12d3-a456-426614174000",\n)\nprint(response.crawl_id)',
      },
      go: {
        method: 'client.Crawl.Status',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Crawl.Status(context.TODO(), "123e4567-e89b-12d3-a456-426614174000")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.CrawlID)\n}\n',
      },
      cli: {
        method: 'crawl status',
        example:
          "nimble crawl status \\\n  --api-key 'My API Key' \\\n  --id 123e4567-e89b-12d3-a456-426614174000",
      },
      http: {
        example:
          'curl https://sdk.nimbleway.com/v1/crawl/$ID \\\n    -H "Authorization: Bearer $NIMBLE_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/crawl',
    httpMethod: 'get',
    summary: 'Crawl by Filter',
    description: 'Crawl by Filter',
    stainlessPath: '(resource) crawl > (method) list',
    qualified: 'client.crawl.list',
    params: [
      'cursor?: string;',
      'limit?: number;',
      "status?: 'queued' | 'running' | 'succeeded' | 'failed' | 'canceled' | 'all';",
    ],
    response:
      "{ data: { account_name: string; crawl_id: string; crawl_options: { allow_external_links: boolean; allow_subdomains: boolean; crawl_entire_domain: boolean; ignore_query_parameters: boolean; limit: number; max_discovery_depth: number; sitemap: 'skip' | 'include' | 'only'; callback?: object | string; exclude_paths?: string[]; include_paths?: string[]; }; created_at: string | object; status: 'queued' | 'running' | 'succeeded' | 'failed' | 'canceled'; updated_at: string | object; url: string; completed?: number; completed_at?: string | object; extract_options?: object; failed?: number; name?: string; pending?: number; tasks?: { status: 'pending' | 'completed' | 'failed'; task_id: string; created_at?: string; updated_at?: string; }[]; total?: number; }[]; pagination: { has_next: boolean; next_cursor?: string; total?: number; }; }",
    markdown:
      "## list\n\n`client.crawl.list(cursor?: string, limit?: number, status?: 'queued' | 'running' | 'succeeded' | 'failed' | 'canceled' | 'all'): { data: object[]; pagination: object; }`\n\n**get** `/v1/crawl`\n\nCrawl by Filter\n\n### Parameters\n\n- `cursor?: string`\n  Cursor for pagination.\n\n- `limit?: number`\n  Number of crawls to return per page.\n\n- `status?: 'queued' | 'running' | 'succeeded' | 'failed' | 'canceled' | 'all'`\n  Filter crawls by their status.\n\n### Returns\n\n- `{ data: { account_name: string; crawl_id: string; crawl_options: { allow_external_links: boolean; allow_subdomains: boolean; crawl_entire_domain: boolean; ignore_query_parameters: boolean; limit: number; max_discovery_depth: number; sitemap: 'skip' | 'include' | 'only'; callback?: object | string; exclude_paths?: string[]; include_paths?: string[]; }; created_at: string | object; status: 'queued' | 'running' | 'succeeded' | 'failed' | 'canceled'; updated_at: string | object; url: string; completed?: number; completed_at?: string | object; extract_options?: object; failed?: number; name?: string; pending?: number; tasks?: { status: 'pending' | 'completed' | 'failed'; task_id: string; created_at?: string; updated_at?: string; }[]; total?: number; }[]; pagination: { has_next: boolean; next_cursor?: string; total?: number; }; }`\n  Successful get crawl response\n\n  - `data: { account_name: string; crawl_id: string; crawl_options: { allow_external_links: boolean; allow_subdomains: boolean; crawl_entire_domain: boolean; ignore_query_parameters: boolean; limit: number; max_discovery_depth: number; sitemap: 'skip' | 'include' | 'only'; callback?: { url: string; events?: 'started' | 'page' | 'completed' | 'failed'[]; headers?: object; metadata?: object; } | string; exclude_paths?: string[]; include_paths?: string[]; }; created_at: string | object; status: 'queued' | 'running' | 'succeeded' | 'failed' | 'canceled'; updated_at: string | object; url: string; completed?: number; completed_at?: string | object; extract_options?: object; failed?: number; name?: string; pending?: number; tasks?: { status: 'pending' | 'completed' | 'failed'; task_id: string; created_at?: string; updated_at?: string; }[]; total?: number; }[]`\n  - `pagination: { has_next: boolean; next_cursor?: string; total?: number; }`\n\n### Example\n\n```typescript\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble();\n\nconst crawls = await client.crawl.list();\n\nconsole.log(crawls);\n```",
    perLanguage: {
      typescript: {
        method: 'client.crawl.list',
        example:
          "import Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst crawls = await client.crawl.list();\n\nconsole.log(crawls.data);",
      },
      python: {
        method: 'crawl.list',
        example:
          'import os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\ncrawls = client.crawl.list()\nprint(crawls.data)',
      },
      go: {
        method: 'client.Crawl.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcrawls, err := client.Crawl.List(context.TODO(), githubcomnimblewaynimblego.CrawlListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", crawls.Data)\n}\n',
      },
      cli: {
        method: 'crawl list',
        example: "nimble crawl list \\\n  --api-key 'My API Key'",
      },
      http: {
        example: 'curl https://sdk.nimbleway.com/v1/crawl \\\n    -H "Authorization: Bearer $NIMBLE_API_KEY"',
      },
    },
  },
  {
    name: 'terminate',
    endpoint: '/v1/crawl/{id}',
    httpMethod: 'delete',
    summary: 'Cancel Crawl',
    description: 'Cancel Crawl',
    stainlessPath: '(resource) crawl > (method) terminate',
    qualified: 'client.crawl.terminate',
    params: ['id: string;'],
    response: "{ status: 'canceled'; }",
    markdown:
      "## terminate\n\n`client.crawl.terminate(id: string): { status: 'canceled'; }`\n\n**delete** `/v1/crawl/{id}`\n\nCancel Crawl\n\n### Parameters\n\n- `id: string`\n  The unique identifier of the crawl task.\n\n### Returns\n\n- `{ status: 'canceled'; }`\n\n  - `status: 'canceled'`\n\n### Example\n\n```typescript\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble();\n\nconst response = await client.crawl.terminate('123e4567-e89b-12d3-a456-426614174000');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.crawl.terminate',
        example:
          "import Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.crawl.terminate('123e4567-e89b-12d3-a456-426614174000');\n\nconsole.log(response.status);",
      },
      python: {
        method: 'crawl.terminate',
        example:
          'import os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.crawl.terminate(\n    "123e4567-e89b-12d3-a456-426614174000",\n)\nprint(response.status)',
      },
      go: {
        method: 'client.Crawl.Terminate',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Crawl.Terminate(context.TODO(), "123e4567-e89b-12d3-a456-426614174000")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Status)\n}\n',
      },
      cli: {
        method: 'crawl terminate',
        example:
          "nimble crawl terminate \\\n  --api-key 'My API Key' \\\n  --id 123e4567-e89b-12d3-a456-426614174000",
      },
      http: {
        example:
          'curl https://sdk.nimbleway.com/v1/crawl/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $NIMBLE_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/tasks',
    httpMethod: 'get',
    summary: 'List tasks',
    description: 'Retrieve a paginated list of tasks for the authenticated account.',
    stainlessPath: '(resource) tasks > (method) list',
    qualified: 'client.tasks.list',
    params: ['cursor?: string;', 'limit?: number;'],
    response:
      "{ data: { id: string; _query: object; created_at: string; input: object; state: 'pending' | 'success' | 'error'; status_url: string; account_name?: string; api_type?: 'web' | 'serp' | 'ecommerce' | 'social' | 'media' | 'agent' | 'extract'; batch_id?: string; download_url?: string; error?: string; error_type?: string; modified_at?: string; output_url?: string; status_code?: number; }[]; pagination: { has_next: boolean; next_cursor: string; total: number; }; }",
    markdown:
      "## list\n\n`client.tasks.list(cursor?: string, limit?: number): { data: object[]; pagination: object; }`\n\n**get** `/v1/tasks`\n\nRetrieve a paginated list of tasks for the authenticated account.\n\n### Parameters\n\n- `cursor?: string`\n  Cursor for pagination. Use the next_cursor from the previous response.\n\n- `limit?: number`\n  Number of tasks to return per page.\n\n### Returns\n\n- `{ data: { id: string; _query: object; created_at: string; input: object; state: 'pending' | 'success' | 'error'; status_url: string; account_name?: string; api_type?: 'web' | 'serp' | 'ecommerce' | 'social' | 'media' | 'agent' | 'extract'; batch_id?: string; download_url?: string; error?: string; error_type?: string; modified_at?: string; output_url?: string; status_code?: number; }[]; pagination: { has_next: boolean; next_cursor: string; total: number; }; }`\n  Paginated list of tasks response.\n\n  - `data: { id: string; _query: object; created_at: string; input: object; state: 'pending' | 'success' | 'error'; status_url: string; account_name?: string; api_type?: 'web' | 'serp' | 'ecommerce' | 'social' | 'media' | 'agent' | 'extract'; batch_id?: string; download_url?: string; error?: string; error_type?: string; modified_at?: string; output_url?: string; status_code?: number; }[]`\n  - `pagination: { has_next: boolean; next_cursor: string; total: number; }`\n\n### Example\n\n```typescript\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble();\n\nconst tasks = await client.tasks.list();\n\nconsole.log(tasks);\n```",
    perLanguage: {
      typescript: {
        method: 'client.tasks.list',
        example:
          "import Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst tasks = await client.tasks.list();\n\nconsole.log(tasks.data);",
      },
      python: {
        method: 'tasks.list',
        example:
          'import os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\ntasks = client.tasks.list()\nprint(tasks.data)',
      },
      go: {
        method: 'client.Tasks.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\ttasks, err := client.Tasks.List(context.TODO(), githubcomnimblewaynimblego.TaskListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", tasks.Data)\n}\n',
      },
      cli: {
        method: 'tasks list',
        example: "nimble tasks list \\\n  --api-key 'My API Key'",
      },
      http: {
        example: 'curl https://sdk.nimbleway.com/v1/tasks \\\n    -H "Authorization: Bearer $NIMBLE_API_KEY"',
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/tasks/{task_id}',
    httpMethod: 'get',
    summary: 'Get task details',
    description: 'Retrieve the details of a specific task by its ID.',
    stainlessPath: '(resource) tasks > (method) get',
    qualified: 'client.tasks.get',
    params: ['task_id: string;'],
    response:
      "{ task: { id: string; _query: object; created_at: string; input: object; state: 'pending' | 'success' | 'error'; status_url: string; account_name?: string; api_type?: 'web' | 'serp' | 'ecommerce' | 'social' | 'media' | 'agent' | 'extract'; batch_id?: string; download_url?: string; error?: string; error_type?: string; modified_at?: string; output_url?: string; status_code?: number; }; }",
    markdown:
      "## get\n\n`client.tasks.get(task_id: string): { task: object; }`\n\n**get** `/v1/tasks/{task_id}`\n\nRetrieve the details of a specific task by its ID.\n\n### Parameters\n\n- `task_id: string`\n  The unique identifier of the task.\n\n### Returns\n\n- `{ task: { id: string; _query: object; created_at: string; input: object; state: 'pending' | 'success' | 'error'; status_url: string; account_name?: string; api_type?: 'web' | 'serp' | 'ecommerce' | 'social' | 'media' | 'agent' | 'extract'; batch_id?: string; download_url?: string; error?: string; error_type?: string; modified_at?: string; output_url?: string; status_code?: number; }; }`\n  Response containing task details.\n\n  - `task: { id: string; _query: object; created_at: string; input: object; state: 'pending' | 'success' | 'error'; status_url: string; account_name?: string; api_type?: 'web' | 'serp' | 'ecommerce' | 'social' | 'media' | 'agent' | 'extract'; batch_id?: string; download_url?: string; error?: string; error_type?: string; modified_at?: string; output_url?: string; status_code?: number; }`\n\n### Example\n\n```typescript\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble();\n\nconst task = await client.tasks.get('123e4567-e89b-12d3-a456-426614174000');\n\nconsole.log(task);\n```",
    perLanguage: {
      typescript: {
        method: 'client.tasks.get',
        example:
          "import Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst task = await client.tasks.get('123e4567-e89b-12d3-a456-426614174000');\n\nconsole.log(task.task);",
      },
      python: {
        method: 'tasks.get',
        example:
          'import os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\ntask = client.tasks.get(\n    "123e4567-e89b-12d3-a456-426614174000",\n)\nprint(task.task)',
      },
      go: {
        method: 'client.Tasks.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\ttask, err := client.Tasks.Get(context.TODO(), "123e4567-e89b-12d3-a456-426614174000")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", task.Task)\n}\n',
      },
      cli: {
        method: 'tasks get',
        example:
          "nimble tasks get \\\n  --api-key 'My API Key' \\\n  --task-id 123e4567-e89b-12d3-a456-426614174000",
      },
      http: {
        example:
          'curl https://sdk.nimbleway.com/v1/tasks/$TASK_ID \\\n    -H "Authorization: Bearer $NIMBLE_API_KEY"',
      },
    },
  },
  {
    name: 'results',
    endpoint: '/v1/tasks/{task_id}/results',
    httpMethod: 'get',
    summary: 'Get task results',
    description: 'Retrieve the results of a completed task.',
    stainlessPath: '(resource) tasks > (method) results',
    qualified: 'client.tasks.results',
    params: ['task_id: string;'],
    response: 'object',
    markdown:
      "## results\n\n`client.tasks.results(task_id: string): object`\n\n**get** `/v1/tasks/{task_id}/results`\n\nRetrieve the results of a completed task.\n\n### Parameters\n\n- `task_id: string`\n  The unique identifier of the task.\n\n### Returns\n\n- `object`\n  The results of the completed task.\n\n### Example\n\n```typescript\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble();\n\nconst response = await client.tasks.results('123e4567-e89b-12d3-a456-426614174000');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.tasks.results',
        example:
          "import Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.tasks.results('123e4567-e89b-12d3-a456-426614174000');\n\nconsole.log(response);",
      },
      python: {
        method: 'tasks.results',
        example:
          'import os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.tasks.results(\n    "123e4567-e89b-12d3-a456-426614174000",\n)\nprint(response)',
      },
      go: {
        method: 'client.Tasks.Results',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Tasks.Results(context.TODO(), "123e4567-e89b-12d3-a456-426614174000")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      cli: {
        method: 'tasks results',
        example:
          "nimble tasks results \\\n  --api-key 'My API Key' \\\n  --task-id 123e4567-e89b-12d3-a456-426614174000",
      },
      http: {
        example:
          'curl https://sdk.nimbleway.com/v1/tasks/$TASK_ID/results \\\n    -H "Authorization: Bearer $NIMBLE_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/batches',
    httpMethod: 'get',
    summary: 'List batches',
    description: 'Retrieve a paginated list of batches for the authenticated account.',
    stainlessPath: '(resource) batches > (method) list',
    qualified: 'client.batches.list',
    markdown:
      "## list\n\n`client.batches.list(): void`\n\n**get** `/v1/batches`\n\nRetrieve a paginated list of batches for the authenticated account.\n\n### Example\n\n```typescript\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble();\n\nawait client.batches.list()\n```",
    perLanguage: {
      typescript: {
        method: 'client.batches.list',
        example:
          "import Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.batches.list();",
      },
      python: {
        method: 'batches.list',
        example:
          'import os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\nclient.batches.list()',
      },
      go: {
        method: 'client.Batches.List',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Batches.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'batches list',
        example: "nimble batches list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://sdk.nimbleway.com/v1/batches \\\n    -H "Authorization: Bearer $NIMBLE_API_KEY"',
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/batches/{batch_id}',
    httpMethod: 'get',
    summary: 'Get batch details',
    description: 'Retrieve the details of a batch including all its tasks and completion status.',
    stainlessPath: '(resource) batches > (method) get',
    qualified: 'client.batches.get',
    params: ['batch_id: string;'],
    response:
      "{ id: string; completed: boolean; completed_count: number; created_at: string; progress: number; status: 'success'; tasks: { id: string; _query: object; created_at: string; input: object; state: 'pending' | 'success' | 'error'; status_url: string; account_name?: string; api_type?: 'web' | 'serp' | 'ecommerce' | 'social' | 'media' | 'agent' | 'extract'; batch_id?: string; download_url?: string; error?: string; error_type?: string; modified_at?: string; output_url?: string; status_code?: number; }[]; completed_at?: string; }",
    markdown:
      "## get\n\n`client.batches.get(batch_id: string): { id: string; completed: boolean; completed_count: number; created_at: string; progress: number; status: 'success'; tasks: object[]; completed_at?: string; }`\n\n**get** `/v1/batches/{batch_id}`\n\nRetrieve the details of a batch including all its tasks and completion status.\n\n### Parameters\n\n- `batch_id: string`\n  The unique identifier of the batch.\n\n### Returns\n\n- `{ id: string; completed: boolean; completed_count: number; created_at: string; progress: number; status: 'success'; tasks: { id: string; _query: object; created_at: string; input: object; state: 'pending' | 'success' | 'error'; status_url: string; account_name?: string; api_type?: 'web' | 'serp' | 'ecommerce' | 'social' | 'media' | 'agent' | 'extract'; batch_id?: string; download_url?: string; error?: string; error_type?: string; modified_at?: string; output_url?: string; status_code?: number; }[]; completed_at?: string; }`\n  Response containing batch details with all tasks.\n\n  - `id: string`\n  - `completed: boolean`\n  - `completed_count: number`\n  - `created_at: string`\n  - `progress: number`\n  - `status: 'success'`\n  - `tasks: { id: string; _query: object; created_at: string; input: object; state: 'pending' | 'success' | 'error'; status_url: string; account_name?: string; api_type?: 'web' | 'serp' | 'ecommerce' | 'social' | 'media' | 'agent' | 'extract'; batch_id?: string; download_url?: string; error?: string; error_type?: string; modified_at?: string; output_url?: string; status_code?: number; }[]`\n  - `completed_at?: string`\n\n### Example\n\n```typescript\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble();\n\nconst batch = await client.batches.get('123e4567-e89b-12d3-a456-426614174000');\n\nconsole.log(batch);\n```",
    perLanguage: {
      typescript: {
        method: 'client.batches.get',
        example:
          "import Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst batch = await client.batches.get('123e4567-e89b-12d3-a456-426614174000');\n\nconsole.log(batch.id);",
      },
      python: {
        method: 'batches.get',
        example:
          'import os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\nbatch = client.batches.get(\n    "123e4567-e89b-12d3-a456-426614174000",\n)\nprint(batch.id)',
      },
      go: {
        method: 'client.Batches.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tbatch, err := client.Batches.Get(context.TODO(), "123e4567-e89b-12d3-a456-426614174000")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", batch.ID)\n}\n',
      },
      cli: {
        method: 'batches get',
        example:
          "nimble batches get \\\n  --api-key 'My API Key' \\\n  --batch-id 123e4567-e89b-12d3-a456-426614174000",
      },
      http: {
        example:
          'curl https://sdk.nimbleway.com/v1/batches/$BATCH_ID \\\n    -H "Authorization: Bearer $NIMBLE_API_KEY"',
      },
    },
  },
  {
    name: 'progress',
    endpoint: '/v1/batches/{batch_id}/progress',
    httpMethod: 'get',
    summary: 'Get batch progress',
    description: 'Retrieve lightweight progress information for a batch without fetching all task details.',
    stainlessPath: '(resource) batches > (method) progress',
    qualified: 'client.batches.progress',
    params: ['batch_id: string;'],
    response:
      "{ id: string; completed: boolean; completed_count: number; progress: number; status: 'success'; completed_at?: string; }",
    markdown:
      "## progress\n\n`client.batches.progress(batch_id: string): { id: string; completed: boolean; completed_count: number; progress: number; status: 'success'; completed_at?: string; }`\n\n**get** `/v1/batches/{batch_id}/progress`\n\nRetrieve lightweight progress information for a batch without fetching all task details.\n\n### Parameters\n\n- `batch_id: string`\n  The unique identifier of the batch.\n\n### Returns\n\n- `{ id: string; completed: boolean; completed_count: number; progress: number; status: 'success'; completed_at?: string; }`\n  Lightweight batch progress without task details.\n\n  - `id: string`\n  - `completed: boolean`\n  - `completed_count: number`\n  - `progress: number`\n  - `status: 'success'`\n  - `completed_at?: string`\n\n### Example\n\n```typescript\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble();\n\nconst response = await client.batches.progress('123e4567-e89b-12d3-a456-426614174000');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.batches.progress',
        example:
          "import Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.batches.progress('123e4567-e89b-12d3-a456-426614174000');\n\nconsole.log(response.id);",
      },
      python: {
        method: 'batches.progress',
        example:
          'import os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.batches.progress(\n    "123e4567-e89b-12d3-a456-426614174000",\n)\nprint(response.id)',
      },
      go: {
        method: 'client.Batches.Progress',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Batches.Progress(context.TODO(), "123e4567-e89b-12d3-a456-426614174000")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      cli: {
        method: 'batches progress',
        example:
          "nimble batches progress \\\n  --api-key 'My API Key' \\\n  --batch-id 123e4567-e89b-12d3-a456-426614174000",
      },
      http: {
        example:
          'curl https://sdk.nimbleway.com/v1/batches/$BATCH_ID/progress \\\n    -H "Authorization: Bearer $NIMBLE_API_KEY"',
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'cli',
    content:
      "# Nimble CLI\n\nThe official CLI for the [Nimble REST API](docs.nimbleway.com).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n<!-- x-release-please-start-version -->\n\n## Installation\n\n### Installing with Go\n\nTo test or install the CLI locally, you need [Go](https://go.dev/doc/install) version 1.22 or later installed.\n\n~~~sh\ngo install 'github.com/Nimbleway/nimble-cli/cmd/nimble@latest'\n~~~\n\nOnce you have run `go install`, the binary is placed in your Go bin directory:\n\n- **Default location**: `$HOME/go/bin` (or `$GOPATH/bin` if GOPATH is set)\n- **Check your path**: Run `go env GOPATH` to see the base directory\n\nIf commands aren't found after installation, add the Go bin directory to your PATH:\n\n~~~sh\n# Add to your shell profile (.zshrc, .bashrc, etc.)\nexport PATH=\"$PATH:$(go env GOPATH)/bin\"\n~~~\n\n<!-- x-release-please-end -->\n\n### Running Locally\n\nAfter cloning the git repository for this project, you can use the\n`scripts/run` script to run the tool locally:\n\n~~~sh\n./scripts/run args...\n~~~\n\n## Usage\n\nThe CLI follows a resource-based command structure:\n\n~~~sh\nnimble [resource] <command> [flags...]\n~~~\n\n~~~sh\nnimble extract \\\n  --api-key 'My API Key' \\\n  --url https://exapmle.com\n~~~\n\nFor details about specific commands, use the `--help` flag.\n\n### Environment variables\n\n| Environment variable | Required | Default value |\n| -------------------- | -------- | ------------- |\n| `NIMBLE_API_KEY`     | no       | `null`        |\n\n### Global flags\n\n- `--api-key` (can also be set with `NIMBLE_API_KEY` env var)\n- `--help` - Show command line usage\n- `--debug` - Enable debug logging (includes HTTP request/response details)\n- `--version`, `-v` - Show the CLI version\n- `--base-url` - Use a custom API backend URL\n- `--format` - Change the output format (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--format-error` - Change the output format for errors (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--transform` - Transform the data output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n- `--transform-error` - Transform the error output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n\n### Passing files as arguments\n\nTo pass files to your API, you can use the `@myfile.ext` syntax:\n\n~~~bash\nnimble <command> --arg @abe.jpg\n~~~\n\nFiles can also be passed inside JSON or YAML blobs:\n\n~~~bash\nnimble <command> --arg '{image: \"@abe.jpg\"}'\n# Equivalent:\nnimble <command> <<YAML\narg:\n  image: \"@abe.jpg\"\nYAML\n~~~\n\nIf you need to pass a string literal that begins with an `@` sign, you can\nescape the `@` sign to avoid accidentally passing a file.\n\n~~~bash\nnimble <command> --username '\\@abe'\n~~~\n\n#### Explicit encoding\n\nFor JSON endpoints, the CLI tool does filetype sniffing to determine whether the\nfile contents should be sent as a string literal (for plain text files) or as a\nbase64-encoded string literal (for binary files). If you need to explicitly send\nthe file as either plain text or base64-encoded data, you can use\n`@file://myfile.txt` (for string encoding) or `@data://myfile.dat` (for\nbase64-encoding). Note that absolute paths will begin with `@file://` or\n`@data://`, followed by a third `/` (for example, `@file:///tmp/file.txt`).\n\n~~~bash\nnimble <command> --arg @data://file.txt\n~~~\n\n## Linking different Go SDK versions\n\nYou can link the CLI against a different version of the Nimble Go SDK\nfor development purposes using the `./scripts/link` script.\n\nTo link to a specific version from a repository (version can be a branch,\ngit tag, or commit hash):\n\n~~~bash\n./scripts/link github.com/org/repo@version\n~~~\n\nTo link to a local copy of the SDK:\n\n~~~bash\n./scripts/link ../path/to/githubcomnimblewaynimblego-go\n~~~\n\nIf you run the link script without any arguments, it will default to `../githubcomnimblewaynimblego-go`.\n",
  },
  {
    language: 'go',
    content:
      '# Nimble Go API Library\n\n<a href="https://pkg.go.dev/github.com/Nimbleway/nimble-go"><img src="https://pkg.go.dev/badge/github.com/Nimbleway/nimble-go.svg" alt="Go Reference"></a>\n\nThe Nimble Go library provides convenient access to the [Nimble REST API](docs.nimbleway.com)\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Nimble MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=nimble-js-mcp&config=eyJuYW1lIjoibmltYmxlLWpzLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL25pbWJsZXdheS5zdGxtY3AuY29tIiwiaGVhZGVycyI6eyJ4LW5pbWJsZS1hcGkta2V5IjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22nimble-js-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnimbleway.stlmcp.com%22%2C%22headers%22%3A%7B%22x-nimble-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n```go\nimport (\n\t"github.com/Nimbleway/nimble-go" // imported as SDK_PackageName\n)\n```\n\n<!-- x-release-please-end -->\n\nOr to pin the version:\n\n<!-- x-release-please-start-version -->\n\n```sh\ngo get -u \'github.com/Nimbleway/nimble-go@v0.0.1\'\n```\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Nimbleway/nimble-go"\n\t"github.com/Nimbleway/nimble-go/option"\n)\n\nfunc main() {\n\tclient := githubcomnimblewaynimblego.NewClient(\n\t\toption.WithAPIKey("My API Key"), // defaults to os.LookupEnv("NIMBLE_API_KEY")\n\t)\n\tresponse, err := client.Extract(context.TODO(), githubcomnimblewaynimblego.ExtractParams{\n\t\tURL: "https://exapmle.com",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.TaskID)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.Extract(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/Nimbleway/nimble-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.Extract(context.TODO(), githubcomnimblewaynimblego.ExtractParams{\n\tURL: "https://exapmle.com",\n})\nif err != nil {\n\tvar apierr *githubcomnimblewaynimblego.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/v1/extract": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.Extract(\n\tctx,\n\tgithubcomnimblewaynimblego.ExtractParams{\n\t\tURL: "https://exapmle.com",\n\t},\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := githubcomnimblewaynimblego.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.Extract(\n\tcontext.TODO(),\n\tgithubcomnimblewaynimblego.ExtractParams{\n\t\tURL: "https://exapmle.com",\n\t},\n\toption.WithMaxRetries(5),\n)\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\nresponse, err := client.Extract(\n\tcontext.TODO(),\n\tgithubcomnimblewaynimblego.ExtractParams{\n\t\tURL: "https://exapmle.com",\n\t},\n\toption.WithResponseInto(&response),\n)\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", response)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/Nimbleway/nimble-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'python',
    content:
      '# Nimble Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/nimble_python.svg?label=pypi%20(stable))](https://pypi.org/project/nimble_python/)\n\nThe Nimble Python library provides convenient access to the Nimble REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Nimble MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=nimble-js-mcp&config=eyJuYW1lIjoibmltYmxlLWpzLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL25pbWJsZXdheS5zdGxtY3AuY29tIiwiaGVhZGVycyI6eyJ4LW5pbWJsZS1hcGkta2V5IjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22nimble-js-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnimbleway.stlmcp.com%22%2C%22headers%22%3A%7B%22x-nimble-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\n The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install nimble_python\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom nimble_python import Nimble\n\nclient = Nimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\n\nresponse = client.extract(\n    url="https://exapmle.com",\n)\nprint(response.task_id)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `NIMBLE_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncNimble` instead of `Nimble` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom nimble_python import AsyncNimble\n\nclient = AsyncNimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n)\n\nasync def main() -> None:\n  response = await client.extract(\n      url="https://exapmle.com",\n  )\n  print(response.task_id)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install nimble_python[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom nimble_python import DefaultAioHttpClient\nfrom nimble_python import AsyncNimble\n\nasync def main() -> None:\n  async with AsyncNimble(\n    api_key=os.environ.get("NIMBLE_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    response = await client.extract(\n        url="https://exapmle.com",\n    )\n    print(response.task_id)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom nimble_python import Nimble\n\nclient = Nimble()\n\nresponse = client.extract(\n    url="url",\n    session={},\n)\nprint(response.session)\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `nimble_python.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `nimble_python.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `nimble_python.APIError`.\n\n```python\nimport nimble_python\nfrom nimble_python import Nimble\n\nclient = Nimble()\n\ntry:\n    client.extract(\n        url="https://exapmle.com",\n    )\nexcept nimble_python.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept nimble_python.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept nimble_python.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom nimble_python import Nimble\n\n# Configure the default for all requests:\nclient = Nimble(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).extract(\n    url="https://exapmle.com",\n)\n```\n\n### Timeouts\n\nBy default requests time out after 3 minutes. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom nimble_python import Nimble\n\n# Configure the default for all requests:\nclient = Nimble(\n    # 20 seconds (default is 3 minutes)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = Nimble(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).extract(\n    url="https://exapmle.com",\n)\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `NIMBLE_LOG` to `info`.\n\n```shell\n$ export NIMBLE_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom nimble_python import Nimble\n\nclient = Nimble()\nresponse = client.with_raw_response.extract(\n    url="https://exapmle.com",\n)\nprint(response.headers.get(\'X-My-Header\'))\n\nclient = response.parse()  # get the object that `extract()` would have returned\nprint(client.task_id)\n```\n\nThese methods return an [`APIResponse`](https://github.com/Nimbleway/nimble-python/tree/main/src/nimble_python/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/Nimbleway/nimble-python/tree/main/src/nimble_python/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.with_streaming_response.extract(\n    url="https://exapmle.com",\n) as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom nimble_python import Nimble, DefaultHttpxClient\n\nclient = Nimble(\n    # Or use the `NIMBLE_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom nimble_python import Nimble\n\nwith Nimble() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/Nimbleway/nimble-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport nimble_python\nprint(nimble_python.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Nimble TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/@nimble-way/nimble-js.svg?label=npm%20(stable))](https://npmjs.org/package/@nimble-way/nimble-js) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@nimble-way/nimble-js)\n\nThis library provides convenient access to the Nimble REST API from server-side TypeScript or JavaScript.\n\n\n\nThe full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Nimble MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=nimble-js-mcp&config=eyJuYW1lIjoibmltYmxlLWpzLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL25pbWJsZXdheS5zdGxtY3AuY29tIiwiaGVhZGVycyI6eyJ4LW5pbWJsZS1hcGkta2V5IjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22nimble-js-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnimbleway.stlmcp.com%22%2C%22headers%22%3A%7B%22x-nimble-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install @nimble-way/nimble-js\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.extract({ url: 'https://exapmle.com' });\n\nconsole.log(response.task_id);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  apiKey: process.env['NIMBLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst params: Nimble.ExtractParams = { url: 'https://exapmle.com' };\nconst response: Nimble.ExtractResponse = await client.extract(params);\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst response = await client.extract({ url: 'https://exapmle.com' }).catch(async (err) => {\n  if (err instanceof Nimble.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Nimble({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.extract({ url: 'https://exapmle.com' }, {\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 3 minutes by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Nimble({\n  timeout: 20 * 1000, // 20 seconds (default is 3 minutes)\n});\n\n// Override per-request:\nawait client.extract({ url: 'https://exapmle.com' }, {\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Nimble();\n\nconst response = await client.extract({ url: 'https://exapmle.com' }).asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: response, response: raw } = await client\n  .extract({ url: 'https://exapmle.com' })\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(response.task_id);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `NIMBLE_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Nimble from '@nimble-way/nimble-js';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Nimble({\n  logger: logger.child({ name: 'Nimble' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.extract({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Nimble from '@nimble-way/nimble-js';\nimport fetch from 'my-fetch';\n\nconst client = new Nimble({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Nimble from '@nimble-way/nimble-js';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Nimble({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Nimble from '@nimble-way/nimble-js';\n\nconst client = new Nimble({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Nimble from 'npm:@nimble-way/nimble-js';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Nimble({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/Nimbleway/nimble-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
