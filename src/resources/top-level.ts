// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface AgentResponse {
  data: AgentResponse.Data;

  metadata: AgentResponse.Metadata;

  /**
   * The status of the task.
   */
  status: 'success' | 'skipped' | 'fatal' | 'error' | 'postponed' | 'ignored' | 'rejected' | 'blocked';

  /**
   * Unique identifier for the task.
   */
  task_id: string;

  /**
   * The final URL.
   */
  url: string;

  debug?: AgentResponse.Debug;

  /**
   * Pagination information if applicable.
   */
  pagination?: AgentResponse.NextPageParams | Array<AgentResponse.UnionMember1>;

  /**
   * The HTTP status code of the task.
   */
  status_code?: number;

  /**
   * List of warnings generated during the task.
   */
  warnings?: Array<string>;
}

export namespace AgentResponse {
  export interface Data {
    /**
     * The render flow browser actions status results.
     */
    browser_actions?: Data.BrowserActions;

    /**
     * The cookies collected from browser actions during the task.
     */
    cookies?: Array<unknown>;

    /**
     * The evaluation results from browser actions during the task.
     */
    eval?: Array<unknown>;

    /**
     * The http requests from browser actions made during the task.
     */
    fetch?: Array<unknown>;

    /**
     * The headers received during the task.
     */
    headers?: { [key: string]: string };

    /**
     * The HTML content of the page.
     */
    html?: string;

    /**
     * The Markdown version of the HTML content.
     */
    markdown?: string;

    /**
     * The network capture data collected during the task.
     */
    network_capture?: Array<Data.NetworkCapture>;

    /**
     * The parsing results extracted from the HTML & network content.
     */
    parsing?: Data.UnionMember0 | Data.UnionMember1 | { [key: string]: unknown };

    /**
     * The list of redirects that occurred during the task.
     */
    redirects?: Array<Data.Redirect>;

    /**
     * The screenshots from browser actions taken during the task.
     */
    screenshots?: Array<unknown>;
  }

  export namespace Data {
    /**
     * The render flow browser actions status results.
     */
    export interface BrowserActions {
      results: Array<BrowserActions.UnionMember0 | BrowserActions.UnionMember1>;

      success: boolean;
    }

    export namespace BrowserActions {
      export interface UnionMember0 {
        duration: number;

        name: string;

        status: 'no-run' | 'in-progress' | 'done' | 'error' | 'skipped';

        result?: unknown;
      }

      export interface UnionMember1 {
        duration: number;

        error: string;

        name: string;

        status: 'no-run' | 'in-progress' | 'done' | 'error' | 'skipped';
      }
    }

    export interface NetworkCapture {
      filter: NetworkCapture.Filter;

      results: Array<NetworkCapture.Result>;

      errorMessage?: string;
    }

    export namespace NetworkCapture {
      export interface Filter {
        validation: boolean;

        wait_for_requests_count: number;

        method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';

        /**
         * Resource type for network capture filtering
         */
        resource_type?:
          | 'document'
          | 'stylesheet'
          | 'image'
          | 'media'
          | 'font'
          | 'script'
          | 'texttrack'
          | 'xhr'
          | 'fetch'
          | 'prefetch'
          | 'eventsource'
          | 'websocket'
          | 'manifest'
          | 'signedexchange'
          | 'ping'
          | 'cspviolationreport'
          | 'preflight'
          | 'other'
          | 'fedcm'
          | Array<
              | 'document'
              | 'stylesheet'
              | 'image'
              | 'media'
              | 'font'
              | 'script'
              | 'texttrack'
              | 'xhr'
              | 'fetch'
              | 'prefetch'
              | 'eventsource'
              | 'websocket'
              | 'manifest'
              | 'signedexchange'
              | 'ping'
              | 'cspviolationreport'
              | 'preflight'
              | 'other'
              | 'fedcm'
            >;

        status_code?: number | Array<number>;

        url?: Filter.URL;

        wait_for_requests_count_timeout?: number;
      }

      export namespace Filter {
        export interface URL {
          type: 'exact' | 'contains';

          value: string;
        }
      }

      export interface Result {
        request: Result.Request;

        response: Result.Response;
      }

      export namespace Result {
        export interface Request {
          headers: { [key: string]: string };

          method: string;

          /**
           * Resource type for network capture filtering
           */
          resource_type:
            | 'document'
            | 'stylesheet'
            | 'image'
            | 'media'
            | 'font'
            | 'script'
            | 'texttrack'
            | 'xhr'
            | 'fetch'
            | 'prefetch'
            | 'eventsource'
            | 'websocket'
            | 'manifest'
            | 'signedexchange'
            | 'ping'
            | 'cspviolationreport'
            | 'preflight'
            | 'other'
            | 'fedcm';

          url: string;

          body?: string;
        }

        export interface Response {
          body: string;

          headers: { [key: string]: string };

          serialization: 'none' | 'base64';

          status: number;

          status_text: string;
        }
      }
    }

    export interface UnionMember0 {
      entities: { [key: string]: unknown };

      status: 'success';
    }

    export interface UnionMember1 {
      error: string;

      status: 'error';
    }

    export interface Redirect {
      status_code: number;

      url: string;
    }
  }

  export interface Metadata {
    /**
     * The driver used for the task.
     */
    driver?: string;

    /**
     * The localization identifier for the query.
     */
    localization_id?: string;

    /**
     * The duration in milliseconds of the query processing.
     */
    query_duration?: number;

    /**
     * The time when the query was received.
     */
    query_time?: string;

    /**
     * Additional response parameters.
     */
    response_parameters?: unknown;

    /**
     * A tag associated with the query.
     */
    tag?: string;

    /**
     * The identifier of the template used for the query.
     */
    template_id?: string;
  }

  export interface Debug {
    /**
     * Performance metrics collected during the task.
     */
    performance_metrics?: { [key: string]: number };

    /**
     * Total bytes used by the proxy during the task.
     */
    proxy_total_bytes_usage?: number;

    /**
     * The transformed output after applying any transformations.
     */
    transformed_output?: unknown;

    /**
     * The userbrowser instance using during the task.
     */
    userbrowser?: unknown;
  }

  export interface NextPageParams {
    next_page_params: { [key: string]: unknown };
  }

  export interface UnionMember1 {
    next_page_params: { [key: string]: unknown };
  }
}

export interface CrawlResponse {
  id: string;

  account_name: string;

  crawl_options: CrawlResponse.CrawlOptions;

  created_at: string | { [key: string]: unknown };

  status: 'queued' | 'running' | 'succeeded' | 'failed' | 'canceled';

  updated_at: string | { [key: string]: unknown };

  url: string;

  completed?: number;

  completed_at?: string | { [key: string]: unknown } | null;

  encrypted_token?: string | null;

  extract_options?: { [key: string]: unknown } | null;

  failed?: number;

  name?: string | null;

  pending?: number;

  tasks?: Array<CrawlResponse.Task>;

  total?: number;
}

export namespace CrawlResponse {
  export interface CrawlOptions {
    allow_external_links: boolean;

    allow_subdomains: boolean;

    crawl_entire_domain: boolean;

    ignore_query_parameters: boolean;

    limit: number;

    max_discovery_depth: number;

    sitemap: 'skip' | 'include' | 'only';

    callback?: CrawlOptions.UnionMember0 | string;

    exclude_paths?: Array<string>;

    include_paths?: Array<string>;

    [k: string]: unknown;
  }

  export namespace CrawlOptions {
    export interface UnionMember0 {
      url: string;

      events?: Array<'started' | 'page' | 'completed' | 'failed'>;

      headers?: { [key: string]: string };

      metadata?: { [key: string]: unknown };
    }
  }

  export interface Task {
    crawl_id: string;

    status: 'pending' | 'completed' | 'failed';

    webit_task_id: string;

    created_at?: string | { [key: string]: unknown };

    updated_at?: string | { [key: string]: unknown };
  }
}

export interface ExtractResponse {
  data: ExtractResponse.Data;

  metadata: ExtractResponse.Metadata;

  /**
   * The status of the task.
   */
  status: 'success' | 'skipped' | 'fatal' | 'error' | 'postponed' | 'ignored' | 'rejected' | 'blocked';

  /**
   * Unique identifier for the task.
   */
  task_id: string;

  /**
   * The final URL.
   */
  url: string;

  debug?: ExtractResponse.Debug;

  /**
   * Pagination information if applicable.
   */
  pagination?: ExtractResponse.NextPageParams | Array<ExtractResponse.UnionMember1>;

  /**
   * The HTTP status code of the task.
   */
  status_code?: number;

  /**
   * List of warnings generated during the task.
   */
  warnings?: Array<string>;
}

export namespace ExtractResponse {
  export interface Data {
    /**
     * The render flow browser actions status results.
     */
    browser_actions?: Data.BrowserActions;

    /**
     * The cookies collected from browser actions during the task.
     */
    cookies?: Array<unknown>;

    /**
     * The evaluation results from browser actions during the task.
     */
    eval?: Array<unknown>;

    /**
     * The http requests from browser actions made during the task.
     */
    fetch?: Array<unknown>;

    /**
     * The headers received during the task.
     */
    headers?: { [key: string]: string };

    /**
     * The HTML content of the page.
     */
    html?: string;

    /**
     * The Markdown version of the HTML content.
     */
    markdown?: string;

    /**
     * The network capture data collected during the task.
     */
    network_capture?: Array<Data.NetworkCapture>;

    /**
     * The parsing results extracted from the HTML & network content.
     */
    parsing?: Data.UnionMember0 | Data.UnionMember1 | { [key: string]: unknown };

    /**
     * The list of redirects that occurred during the task.
     */
    redirects?: Array<Data.Redirect>;

    /**
     * The screenshots from browser actions taken during the task.
     */
    screenshots?: Array<unknown>;
  }

  export namespace Data {
    /**
     * The render flow browser actions status results.
     */
    export interface BrowserActions {
      results: Array<BrowserActions.UnionMember0 | BrowserActions.UnionMember1>;

      success: boolean;
    }

    export namespace BrowserActions {
      export interface UnionMember0 {
        duration: number;

        name: string;

        status: 'no-run' | 'in-progress' | 'done' | 'error' | 'skipped';

        result?: unknown;
      }

      export interface UnionMember1 {
        duration: number;

        error: string;

        name: string;

        status: 'no-run' | 'in-progress' | 'done' | 'error' | 'skipped';
      }
    }

    export interface NetworkCapture {
      filter: NetworkCapture.Filter;

      results: Array<NetworkCapture.Result>;

      errorMessage?: string;
    }

    export namespace NetworkCapture {
      export interface Filter {
        validation: boolean;

        wait_for_requests_count: number;

        method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';

        /**
         * Resource type for network capture filtering
         */
        resource_type?:
          | 'document'
          | 'stylesheet'
          | 'image'
          | 'media'
          | 'font'
          | 'script'
          | 'texttrack'
          | 'xhr'
          | 'fetch'
          | 'prefetch'
          | 'eventsource'
          | 'websocket'
          | 'manifest'
          | 'signedexchange'
          | 'ping'
          | 'cspviolationreport'
          | 'preflight'
          | 'other'
          | 'fedcm'
          | Array<
              | 'document'
              | 'stylesheet'
              | 'image'
              | 'media'
              | 'font'
              | 'script'
              | 'texttrack'
              | 'xhr'
              | 'fetch'
              | 'prefetch'
              | 'eventsource'
              | 'websocket'
              | 'manifest'
              | 'signedexchange'
              | 'ping'
              | 'cspviolationreport'
              | 'preflight'
              | 'other'
              | 'fedcm'
            >;

        status_code?: number | Array<number>;

        url?: Filter.URL;

        wait_for_requests_count_timeout?: number;
      }

      export namespace Filter {
        export interface URL {
          type: 'exact' | 'contains';

          value: string;
        }
      }

      export interface Result {
        request: Result.Request;

        response: Result.Response;
      }

      export namespace Result {
        export interface Request {
          headers: { [key: string]: string };

          method: string;

          /**
           * Resource type for network capture filtering
           */
          resource_type:
            | 'document'
            | 'stylesheet'
            | 'image'
            | 'media'
            | 'font'
            | 'script'
            | 'texttrack'
            | 'xhr'
            | 'fetch'
            | 'prefetch'
            | 'eventsource'
            | 'websocket'
            | 'manifest'
            | 'signedexchange'
            | 'ping'
            | 'cspviolationreport'
            | 'preflight'
            | 'other'
            | 'fedcm';

          url: string;

          body?: string;
        }

        export interface Response {
          body: string;

          headers: { [key: string]: string };

          serialization: 'none' | 'base64';

          status: number;

          status_text: string;
        }
      }
    }

    export interface UnionMember0 {
      entities: { [key: string]: unknown };

      status: 'success';
    }

    export interface UnionMember1 {
      error: string;

      status: 'error';
    }

    export interface Redirect {
      status_code: number;

      url: string;
    }
  }

  export interface Metadata {
    /**
     * The driver used for the task.
     */
    driver?: string;

    /**
     * The localization identifier for the query.
     */
    localization_id?: string;

    /**
     * The duration in milliseconds of the query processing.
     */
    query_duration?: number;

    /**
     * The time when the query was received.
     */
    query_time?: string;

    /**
     * Additional response parameters.
     */
    response_parameters?: unknown;

    /**
     * A tag associated with the query.
     */
    tag?: string;

    /**
     * The identifier of the template used for the query.
     */
    template_id?: string;
  }

  export interface Debug {
    /**
     * Performance metrics collected during the task.
     */
    performance_metrics?: { [key: string]: number };

    /**
     * Total bytes used by the proxy during the task.
     */
    proxy_total_bytes_usage?: number;

    /**
     * The transformed output after applying any transformations.
     */
    transformed_output?: unknown;

    /**
     * The userbrowser instance using during the task.
     */
    userbrowser?: unknown;
  }

  export interface NextPageParams {
    next_page_params: { [key: string]: unknown };
  }

  export interface UnionMember1 {
    next_page_params: { [key: string]: unknown };
  }
}

/**
 * Response schema for map requests.
 */
export interface MapResponse {
  /**
   * Array of mapped links with optional titles and descriptions.
   */
  links: Array<MapResponse.Link>;

  /**
   * Indicates if the map request was successful.
   */
  success: boolean;

  /**
   * Unique identifier for the map task.
   */
  task_id: string;
}

export namespace MapResponse {
  export interface Link {
    url: string;

    description?: string;

    title?: string;
  }
}

/**
 * Response model from SearchService with results and optional LLM answer.
 *
 * Note: request_id is always a valid UUID generated internally by the middleware,
 * so no validation is needed.
 */
export interface SearchResponse {
  /**
   * Unique identifier for this request (UUID)
   */
  request_id: string;

  results: Array<SearchResponse.Result>;

  /**
   * Number of results returned
   */
  total_results: number;

  answer?: string | null;

  /**
   * Citations mapping citation markers to result indices
   */
  answer_citations?: Array<SearchResponse.AnswerCitation> | null;
}

export namespace SearchResponse {
  /**
   * Unified result model for all search types (SERP and WSA).
   *
   * This model provides a consistent structure for search results, with
   * platform-specific data in extra_fields and typed metadata.
   */
  export interface Result {
    content: string;

    description: string;

    /**
     * Metadata for SERP-based search results (general, news, location).
     */
    metadata: Result.SerpMetadata | Result.WsaMetadata;

    title: string;

    url: string;

    extra_fields?: { [key: string]: unknown } | null;
  }

  export namespace Result {
    /**
     * Metadata for SERP-based search results (general, news, location).
     */
    export interface SerpMetadata {
      country: string;

      entity_type: string;

      locale: string;

      position: number;

      driver?: string | null;
    }

    /**
     * Metadata for WSA-based search results.
     */
    export interface WsaMetadata {
      agent_name: string;
    }
  }

  /**
   * Citation model that maps citation markers to result indices.
   */
  export interface AnswerCitation {
    /**
     * Citation marker number (e.g., 1 for [1])
     */
    marker: number;

    /**
     * Zero-based index into the results array
     */
    result_index: number;
  }
}

export type AgentParams = AgentParams.ExtractTemplateBody | AgentParams.AgentBody;

export declare namespace AgentParams {
  export interface ExtractTemplateBody {
    params: { [key: string]: unknown };

    template: string;

    localization?: boolean;
  }

  export interface AgentBody {
    agent: string;

    params: { [key: string]: unknown };

    localization?: boolean;
  }
}

export interface CrawlParams {
  /**
   * Url to crawl.
   */
  url: string;

  /**
   * Allows the crawler to follow links to external websites.
   */
  allow_external_links?: boolean;

  /**
   * Allows the crawler to follow links to subdomains of the main domain.
   */
  allow_subdomains?: boolean;

  /**
   * Webhook configuration for receiving crawl results.
   */
  callback?: CrawlParams.UnionMember0 | string;

  /**
   * Allows the crawler to follow internal links to sibling or parent URLs, not just
   * child paths.
   */
  crawl_entire_domain?: boolean;

  /**
   * URL pathname regex patterns that exclude matching URLs from the crawl.
   */
  exclude_paths?: Array<string>;

  extract_options?: CrawlParams.ExtractOptions;

  /**
   * Do not re-scrape the same path with different (or none) query parameters.
   */
  ignore_query_parameters?: boolean;

  /**
   * URL pathname regex patterns that include matching URLs in the crawl.
   */
  include_paths?: Array<string>;

  /**
   * Maximum number of pages to crawl.
   */
  limit?: number;

  /**
   * Maximum depth to crawl based on discovery order.
   */
  max_discovery_depth?: number;

  /**
   * Name of the crawl.
   */
  name?: string;

  /**
   * Sitemap and other methods will be used together to find URLs.
   */
  sitemap?: 'skip' | 'include' | 'only';
}

export namespace CrawlParams {
  export interface UnionMember0 {
    url: string;

    events?: Array<'started' | 'page' | 'completed' | 'failed'>;

    headers?: { [key: string]: string };

    metadata?: { [key: string]: unknown };
  }

  export interface ExtractOptions {
    /**
     * Browser type to emulate
     */
    browser?: 'chrome' | 'firefox' | ExtractOptions.UnionMember1;

    /**
     * City for geolocation
     */
    city?: string;

    /**
     * Client-side timeout in milliseconds
     */
    client_timeout?: number;

    /**
     * Whether to automatically handle cookie consent headers
     */
    consent_header?: boolean;

    /**
     * Browser cookies as array of cookie objects
     */
    cookies?: Array<ExtractOptions.UnionMember0> | string;

    /**
     * Country code for geolocation and proxy selection
     */
    country?:
      | 'AD'
      | 'AE'
      | 'AF'
      | 'AG'
      | 'AI'
      | 'AL'
      | 'AM'
      | 'AO'
      | 'AQ'
      | 'AR'
      | 'AS'
      | 'AT'
      | 'AU'
      | 'AW'
      | 'AX'
      | 'AZ'
      | 'BA'
      | 'BB'
      | 'BD'
      | 'BE'
      | 'BF'
      | 'BG'
      | 'BH'
      | 'BI'
      | 'BJ'
      | 'BL'
      | 'BM'
      | 'BN'
      | 'BO'
      | 'BQ'
      | 'BR'
      | 'BS'
      | 'BT'
      | 'BV'
      | 'BW'
      | 'BY'
      | 'BZ'
      | 'CA'
      | 'CC'
      | 'CD'
      | 'CF'
      | 'CG'
      | 'CH'
      | 'CI'
      | 'CK'
      | 'CL'
      | 'CM'
      | 'CN'
      | 'CO'
      | 'CR'
      | 'CU'
      | 'CV'
      | 'CW'
      | 'CX'
      | 'CY'
      | 'CZ'
      | 'DE'
      | 'DJ'
      | 'DK'
      | 'DM'
      | 'DO'
      | 'DZ'
      | 'EC'
      | 'EE'
      | 'EG'
      | 'EH'
      | 'ER'
      | 'ES'
      | 'ET'
      | 'FI'
      | 'FJ'
      | 'FK'
      | 'FM'
      | 'FO'
      | 'FR'
      | 'GA'
      | 'GB'
      | 'GD'
      | 'GE'
      | 'GF'
      | 'GG'
      | 'GH'
      | 'GI'
      | 'GL'
      | 'GM'
      | 'GN'
      | 'GP'
      | 'GQ'
      | 'GR'
      | 'GS'
      | 'GT'
      | 'GU'
      | 'GW'
      | 'GY'
      | 'HK'
      | 'HM'
      | 'HN'
      | 'HR'
      | 'HT'
      | 'HU'
      | 'ID'
      | 'IE'
      | 'IL'
      | 'IM'
      | 'IN'
      | 'IO'
      | 'IQ'
      | 'IR'
      | 'IS'
      | 'IT'
      | 'JE'
      | 'JM'
      | 'JO'
      | 'JP'
      | 'KE'
      | 'KG'
      | 'KH'
      | 'KI'
      | 'KM'
      | 'KN'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KY'
      | 'KZ'
      | 'LA'
      | 'LB'
      | 'LC'
      | 'LI'
      | 'LK'
      | 'LR'
      | 'LS'
      | 'LT'
      | 'LU'
      | 'LV'
      | 'LY'
      | 'MA'
      | 'MC'
      | 'MD'
      | 'ME'
      | 'MF'
      | 'MG'
      | 'MH'
      | 'MK'
      | 'ML'
      | 'MM'
      | 'MN'
      | 'MO'
      | 'MP'
      | 'MQ'
      | 'MR'
      | 'MS'
      | 'MT'
      | 'MU'
      | 'MV'
      | 'MW'
      | 'MX'
      | 'MY'
      | 'MZ'
      | 'NA'
      | 'NC'
      | 'NE'
      | 'NF'
      | 'NG'
      | 'NI'
      | 'NL'
      | 'NO'
      | 'NP'
      | 'NR'
      | 'NU'
      | 'NZ'
      | 'OM'
      | 'PA'
      | 'PE'
      | 'PF'
      | 'PG'
      | 'PH'
      | 'PK'
      | 'PL'
      | 'PM'
      | 'PN'
      | 'PR'
      | 'PS'
      | 'PT'
      | 'PW'
      | 'PY'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RS'
      | 'RU'
      | 'RW'
      | 'SA'
      | 'SB'
      | 'SC'
      | 'SD'
      | 'SE'
      | 'SG'
      | 'SH'
      | 'SI'
      | 'SJ'
      | 'SK'
      | 'SL'
      | 'SM'
      | 'SN'
      | 'SO'
      | 'SR'
      | 'SS'
      | 'ST'
      | 'SV'
      | 'SX'
      | 'SY'
      | 'SZ'
      | 'TC'
      | 'TD'
      | 'TF'
      | 'TG'
      | 'TH'
      | 'TJ'
      | 'TK'
      | 'TL'
      | 'TM'
      | 'TN'
      | 'TO'
      | 'TR'
      | 'TT'
      | 'TV'
      | 'TW'
      | 'TZ'
      | 'UA'
      | 'UG'
      | 'UM'
      | 'US'
      | 'UY'
      | 'UZ'
      | 'VA'
      | 'VC'
      | 'VE'
      | 'VG'
      | 'VI'
      | 'VN'
      | 'VU'
      | 'WF'
      | 'WS'
      | 'XK'
      | 'YE'
      | 'YT'
      | 'ZA'
      | 'ZM'
      | 'ZW'
      | 'ALL';

    /**
     * Device type for browser emulation
     */
    device?: 'desktop' | 'mobile' | 'tablet';

    /**
     * Whether to disable IP address validation
     */
    disable_ip_check?: boolean;

    /**
     * Browser driver to use
     */
    driver?: 'vx6' | 'vx8' | 'vx8-pro' | 'vx10' | 'vx10-pro' | 'vx12' | 'vx12-pro';

    /**
     * Custom parser configuration as a key-value map
     */
    dynamic_parser?: { [key: string]: unknown };

    /**
     * Expected HTTP status codes for successful requests
     */
    expected_status_codes?: Array<number>;

    /**
     * Response format
     */
    format?: 'json' | 'html' | 'csv' | 'raw' | 'json-lines' | 'markdown';

    /**
     * Custom HTTP headers to include in the request
     */
    headers?: { [key: string]: string | Array<string> | null };

    /**
     * Whether to use HTTP/2 protocol
     */
    http2?: boolean;

    /**
     * Whether to use IPv6 for the request
     */
    ip6?: boolean;

    /**
     * Whether to emulate XMLHttpRequest behavior
     */
    is_xhr?: boolean;

    /**
     * Locale for browser language and region settings
     */
    locale?:
      | 'aa-DJ'
      | 'aa-ER'
      | 'aa-ET'
      | 'af'
      | 'af-NA'
      | 'af-ZA'
      | 'ak'
      | 'ak-GH'
      | 'am'
      | 'am-ET'
      | 'an-ES'
      | 'ar'
      | 'ar-AE'
      | 'ar-BH'
      | 'ar-DZ'
      | 'ar-EG'
      | 'ar-IN'
      | 'ar-IQ'
      | 'ar-JO'
      | 'ar-KW'
      | 'ar-LB'
      | 'ar-LY'
      | 'ar-MA'
      | 'ar-OM'
      | 'ar-QA'
      | 'ar-SA'
      | 'ar-SD'
      | 'ar-SY'
      | 'ar-TN'
      | 'ar-YE'
      | 'as'
      | 'as-IN'
      | 'asa'
      | 'asa-TZ'
      | 'ast-ES'
      | 'az'
      | 'az-AZ'
      | 'az-Cyrl'
      | 'az-Cyrl-AZ'
      | 'az-Latn'
      | 'az-Latn-AZ'
      | 'be'
      | 'be-BY'
      | 'bem'
      | 'bem-ZM'
      | 'ber-DZ'
      | 'ber-MA'
      | 'bez'
      | 'bez-TZ'
      | 'bg'
      | 'bg-BG'
      | 'bho-IN'
      | 'bm'
      | 'bm-ML'
      | 'bn'
      | 'bn-BD'
      | 'bn-IN'
      | 'bo'
      | 'bo-CN'
      | 'bo-IN'
      | 'br-FR'
      | 'brx-IN'
      | 'bs'
      | 'bs-BA'
      | 'byn-ER'
      | 'ca'
      | 'ca-AD'
      | 'ca-ES'
      | 'ca-FR'
      | 'ca-IT'
      | 'cgg'
      | 'cgg-UG'
      | 'chr'
      | 'chr-US'
      | 'crh-UA'
      | 'cs'
      | 'cs-CZ'
      | 'csb-PL'
      | 'cv-RU'
      | 'cy'
      | 'cy-GB'
      | 'da'
      | 'da-DK'
      | 'dav'
      | 'dav-KE'
      | 'de'
      | 'de-AT'
      | 'de-BE'
      | 'de-CH'
      | 'de-DE'
      | 'de-LI'
      | 'de-LU'
      | 'dv-MV'
      | 'dz-BT'
      | 'ebu'
      | 'ebu-KE'
      | 'ee'
      | 'ee-GH'
      | 'ee-TG'
      | 'el'
      | 'el-CY'
      | 'el-GR'
      | 'en'
      | 'en-AG'
      | 'en-AS'
      | 'en-AU'
      | 'en-BE'
      | 'en-BW'
      | 'en-BZ'
      | 'en-CA'
      | 'en-DK'
      | 'en-GB'
      | 'en-GU'
      | 'en-HK'
      | 'en-IE'
      | 'en-IN'
      | 'en-JM'
      | 'en-MH'
      | 'en-MP'
      | 'en-MT'
      | 'en-MU'
      | 'en-NA'
      | 'en-NG'
      | 'en-NZ'
      | 'en-PH'
      | 'en-PK'
      | 'en-SG'
      | 'en-TT'
      | 'en-UM'
      | 'en-US'
      | 'en-VI'
      | 'en-ZA'
      | 'en-ZM'
      | 'en-ZW'
      | 'eo'
      | 'es'
      | 'es-419'
      | 'es-AR'
      | 'es-BO'
      | 'es-CL'
      | 'es-CO'
      | 'es-CR'
      | 'es-CU'
      | 'es-DO'
      | 'es-EC'
      | 'es-ES'
      | 'es-GQ'
      | 'es-GT'
      | 'es-HN'
      | 'es-MX'
      | 'es-NI'
      | 'es-PA'
      | 'es-PE'
      | 'es-PR'
      | 'es-PY'
      | 'es-SV'
      | 'es-US'
      | 'es-UY'
      | 'es-VE'
      | 'et'
      | 'et-EE'
      | 'eu'
      | 'eu-ES'
      | 'fa'
      | 'fa-AF'
      | 'fa-IR'
      | 'ff'
      | 'ff-SN'
      | 'fi'
      | 'fi-FI'
      | 'fil'
      | 'fil-PH'
      | 'fo'
      | 'fo-FO'
      | 'fr'
      | 'fr-BE'
      | 'fr-BF'
      | 'fr-BI'
      | 'fr-BJ'
      | 'fr-BL'
      | 'fr-CA'
      | 'fr-CD'
      | 'fr-CF'
      | 'fr-CG'
      | 'fr-CH'
      | 'fr-CI'
      | 'fr-CM'
      | 'fr-DJ'
      | 'fr-FR'
      | 'fr-GA'
      | 'fr-GN'
      | 'fr-GP'
      | 'fr-GQ'
      | 'fr-KM'
      | 'fr-LU'
      | 'fr-MC'
      | 'fr-MF'
      | 'fr-MG'
      | 'fr-ML'
      | 'fr-MQ'
      | 'fr-NE'
      | 'fr-RE'
      | 'fr-RW'
      | 'fr-SN'
      | 'fr-TD'
      | 'fr-TG'
      | 'fur-IT'
      | 'fy-DE'
      | 'fy-NL'
      | 'ga'
      | 'ga-IE'
      | 'gd-GB'
      | 'gez-ER'
      | 'gez-ET'
      | 'gl'
      | 'gl-ES'
      | 'gsw'
      | 'gsw-CH'
      | 'gu'
      | 'gu-IN'
      | 'guz'
      | 'guz-KE'
      | 'gv'
      | 'gv-GB'
      | 'ha'
      | 'ha-Latn'
      | 'ha-Latn-GH'
      | 'ha-Latn-NE'
      | 'ha-Latn-NG'
      | 'ha-NG'
      | 'haw'
      | 'haw-US'
      | 'he'
      | 'he-IL'
      | 'hi'
      | 'hi-IN'
      | 'hne-IN'
      | 'hr'
      | 'hr-HR'
      | 'hsb-DE'
      | 'ht-HT'
      | 'hu'
      | 'hu-HU'
      | 'hy'
      | 'hy-AM'
      | 'id'
      | 'id-ID'
      | 'ig'
      | 'ig-NG'
      | 'ii'
      | 'ii-CN'
      | 'ik-CA'
      | 'is'
      | 'is-IS'
      | 'it'
      | 'it-CH'
      | 'it-IT'
      | 'iu-CA'
      | 'iw-IL'
      | 'ja'
      | 'ja-JP'
      | 'jmc'
      | 'jmc-TZ'
      | 'ka'
      | 'ka-GE'
      | 'kab'
      | 'kab-DZ'
      | 'kam'
      | 'kam-KE'
      | 'kde'
      | 'kde-TZ'
      | 'kea'
      | 'kea-CV'
      | 'khq'
      | 'khq-ML'
      | 'ki'
      | 'ki-KE'
      | 'kk'
      | 'kk-Cyrl'
      | 'kk-Cyrl-KZ'
      | 'kk-KZ'
      | 'kl'
      | 'kl-GL'
      | 'kln'
      | 'kln-KE'
      | 'km'
      | 'km-KH'
      | 'kn'
      | 'kn-IN'
      | 'ko'
      | 'ko-KR'
      | 'kok'
      | 'kok-IN'
      | 'ks-IN'
      | 'ku-TR'
      | 'kw'
      | 'kw-GB'
      | 'ky-KG'
      | 'lag'
      | 'lag-TZ'
      | 'lb-LU'
      | 'lg'
      | 'lg-UG'
      | 'li-BE'
      | 'li-NL'
      | 'lij-IT'
      | 'lo-LA'
      | 'lt'
      | 'lt-LT'
      | 'luo'
      | 'luo-KE'
      | 'luy'
      | 'luy-KE'
      | 'lv'
      | 'lv-LV'
      | 'mag-IN'
      | 'mai-IN'
      | 'mas'
      | 'mas-KE'
      | 'mas-TZ'
      | 'mer'
      | 'mer-KE'
      | 'mfe'
      | 'mfe-MU'
      | 'mg'
      | 'mg-MG'
      | 'mhr-RU'
      | 'mi-NZ'
      | 'mk'
      | 'mk-MK'
      | 'ml'
      | 'ml-IN'
      | 'mn-MN'
      | 'mr'
      | 'mr-IN'
      | 'ms'
      | 'ms-BN'
      | 'ms-MY'
      | 'mt'
      | 'mt-MT'
      | 'my'
      | 'my-MM'
      | 'nan-TW'
      | 'naq'
      | 'naq-NA'
      | 'nb'
      | 'nb-NO'
      | 'nd'
      | 'nd-ZW'
      | 'nds-DE'
      | 'nds-NL'
      | 'ne'
      | 'ne-IN'
      | 'ne-NP'
      | 'nl'
      | 'nl-AW'
      | 'nl-BE'
      | 'nl-NL'
      | 'nn'
      | 'nn-NO'
      | 'nr-ZA'
      | 'nso-ZA'
      | 'nyn'
      | 'nyn-UG'
      | 'oc-FR'
      | 'om'
      | 'om-ET'
      | 'om-KE'
      | 'or'
      | 'or-IN'
      | 'os-RU'
      | 'pa'
      | 'pa-Arab'
      | 'pa-Arab-PK'
      | 'pa-Guru'
      | 'pa-Guru-IN'
      | 'pa-IN'
      | 'pa-PK'
      | 'pap-AN'
      | 'pl'
      | 'pl-PL'
      | 'ps'
      | 'ps-AF'
      | 'pt'
      | 'pt-BR'
      | 'pt-GW'
      | 'pt-MZ'
      | 'pt-PT'
      | 'rm'
      | 'rm-CH'
      | 'ro'
      | 'ro-MD'
      | 'ro-RO'
      | 'rof'
      | 'rof-TZ'
      | 'ru'
      | 'ru-MD'
      | 'ru-RU'
      | 'ru-UA'
      | 'rw'
      | 'rw-RW'
      | 'rwk'
      | 'rwk-TZ'
      | 'sa-IN'
      | 'saq'
      | 'saq-KE'
      | 'sc-IT'
      | 'sd-IN'
      | 'se-NO'
      | 'seh'
      | 'seh-MZ'
      | 'ses'
      | 'ses-ML'
      | 'sg'
      | 'sg-CF'
      | 'shi'
      | 'shi-Latn'
      | 'shi-Latn-MA'
      | 'shi-Tfng'
      | 'shi-Tfng-MA'
      | 'shs-CA'
      | 'si'
      | 'si-LK'
      | 'sid-ET'
      | 'sk'
      | 'sk-SK'
      | 'sl'
      | 'sl-SI'
      | 'sn'
      | 'sn-ZW'
      | 'so'
      | 'so-DJ'
      | 'so-ET'
      | 'so-KE'
      | 'so-SO'
      | 'sq'
      | 'sq-AL'
      | 'sq-MK'
      | 'sr'
      | 'sr-Cyrl'
      | 'sr-Cyrl-BA'
      | 'sr-Cyrl-ME'
      | 'sr-Cyrl-RS'
      | 'sr-Latn'
      | 'sr-Latn-BA'
      | 'sr-Latn-ME'
      | 'sr-Latn-RS'
      | 'sr-ME'
      | 'sr-RS'
      | 'ss-ZA'
      | 'st-ZA'
      | 'sv'
      | 'sv-FI'
      | 'sv-SE'
      | 'sw'
      | 'sw-KE'
      | 'sw-TZ'
      | 'ta'
      | 'ta-IN'
      | 'ta-LK'
      | 'te'
      | 'te-IN'
      | 'teo'
      | 'teo-KE'
      | 'teo-UG'
      | 'tg-TJ'
      | 'th'
      | 'th-TH'
      | 'ti'
      | 'ti-ER'
      | 'ti-ET'
      | 'tig-ER'
      | 'tk-TM'
      | 'tl-PH'
      | 'tn-ZA'
      | 'to'
      | 'to-TO'
      | 'tr'
      | 'tr-CY'
      | 'tr-TR'
      | 'ts-ZA'
      | 'tt-RU'
      | 'tzm'
      | 'tzm-Latn'
      | 'tzm-Latn-MA'
      | 'ug-CN'
      | 'uk'
      | 'uk-UA'
      | 'unm-US'
      | 'ur'
      | 'ur-IN'
      | 'ur-PK'
      | 'uz'
      | 'uz-Arab'
      | 'uz-Arab-AF'
      | 'uz-Cyrl'
      | 'uz-Cyrl-UZ'
      | 'uz-Latn'
      | 'uz-Latn-UZ'
      | 'uz-UZ'
      | 've-ZA'
      | 'vi'
      | 'vi-VN'
      | 'vun'
      | 'vun-TZ'
      | 'wa-BE'
      | 'wae-CH'
      | 'wal-ET'
      | 'wo-SN'
      | 'xh-ZA'
      | 'xog'
      | 'xog-UG'
      | 'yi-US'
      | 'yo'
      | 'yo-NG'
      | 'yue-HK'
      | 'zh'
      | 'zh-CN'
      | 'zh-HK'
      | 'zh-Hans'
      | 'zh-Hans-CN'
      | 'zh-Hans-HK'
      | 'zh-Hans-MO'
      | 'zh-Hans-SG'
      | 'zh-Hant'
      | 'zh-Hant-HK'
      | 'zh-Hant-MO'
      | 'zh-Hant-TW'
      | 'zh-SG'
      | 'zh-TW'
      | 'zu'
      | 'zu-ZA'
      | 'auto';

    /**
     * Whether to return response in Markdown format
     */
    markdown?: boolean;

    /**
     * Structured metadata about the request execution context
     */
    metadata?: ExtractOptions.Metadata;

    /**
     * HTTP method for the request
     */
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

    /**
     * Native execution mode
     */
    native_mode?: 'requester' | 'apm' | 'direct';

    /**
     * Filters for capturing network traffic
     */
    network_capture?: Array<ExtractOptions.NetworkCapture>;

    /**
     * Whether to exclude HTML from the response
     */
    no_html?: boolean;

    /**
     * Whether to disable browser-based rendering
     */
    no_userbrowser?: boolean;

    /**
     * Operating system to emulate
     */
    os?: 'windows' | 'mac os' | 'linux' | 'android' | 'ios';

    /**
     * Whether to parse the response content
     */
    parse?: boolean;

    /**
     * Configuration options for parsing behavior
     */
    parse_options?: ExtractOptions.ParseOptions;

    /**
     * Custom parser configuration as a key-value map
     */
    parser?: { [key: string]: unknown } | string;

    /**
     * Proxy provider to use for the request
     */
    proxy_provider?:
      | 'brightdata'
      | 'oxylabs'
      | 'smartproxy'
      | 'proxit'
      | 'proxit_preprod'
      | 'local'
      | 'rayobyte'
      | 'always'
      | 'oculusproxies'
      | 'froxy'
      | 'packetstream'
      | '911proxy'
      | 'direct911proxy'
      | 'thesocialproxy'
      | 'thesocialproxy2'
      | 'nimble-isp'
      | 'nimble-isp-mobile'
      | 'proxit-linux'
      | 'proxit-macos'
      | 'proxit-windows'
      | 'proxit-rental'
      | 'ipfoxy'
      | 'brightup'
      | 'research';

    /**
     * Weighted distribution of proxy providers
     */
    proxy_providers?: { [key: string]: number };

    /**
     * Query template configuration for structured data extraction
     */
    query_template?: ExtractOptions.QueryTemplate;

    /**
     * Whether to return raw HTTP headers in response
     */
    raw_headers?: boolean;

    /**
     * Referrer policy for the request
     */
    referrer_type?:
      | 'random'
      | 'no-referer'
      | 'same-origin'
      | 'google'
      | 'bing'
      | 'facebook'
      | 'twitter'
      | 'instagram';

    /**
     * Whether to render JavaScript content using a browser
     */
    render?: boolean;

    /**
     * Array of actions to perform during browser rendering
     */
    render_flow?: Array<{ [key: string]: unknown }>;

    render_options?: ExtractOptions.RenderOptions;

    /**
     * Request timeout in milliseconds
     */
    request_timeout?: number;

    /**
     * Whether to save the userbrowser session for reuse
     */
    save_userbrowser?: boolean;

    session?: ExtractOptions.Session;

    /**
     * Skills or capabilities required for the request
     */
    skill?: string | Array<string>;

    /**
     * Whether to skip userbrowser creation template processing
     */
    skip_ubct?: boolean;

    /**
     * US state for geolocation (only valid when country is US)
     */
    state?:
      | 'AL'
      | 'AK'
      | 'AS'
      | 'AZ'
      | 'AR'
      | 'CA'
      | 'CO'
      | 'CT'
      | 'DE'
      | 'DC'
      | 'FL'
      | 'GA'
      | 'GU'
      | 'HI'
      | 'ID'
      | 'IL'
      | 'IN'
      | 'IA'
      | 'KS'
      | 'KY'
      | 'LA'
      | 'ME'
      | 'MD'
      | 'MA'
      | 'MI'
      | 'MN'
      | 'MS'
      | 'MO'
      | 'MT'
      | 'NE'
      | 'NV'
      | 'NH'
      | 'NJ'
      | 'NM'
      | 'NY'
      | 'NC'
      | 'ND'
      | 'MP'
      | 'OH'
      | 'OK'
      | 'OR'
      | 'PA'
      | 'PR'
      | 'RI'
      | 'SC'
      | 'SD'
      | 'TN'
      | 'TX'
      | 'UT'
      | 'VT'
      | 'VA'
      | 'VI'
      | 'WA'
      | 'WV'
      | 'WI'
      | 'WY';

    /**
     * User-defined tag for request identification
     */
    tag?: string;

    /**
     * Userbrowser creation template configuration
     */
    template?: ExtractOptions.Template;

    /**
     * Type of query or scraping template
     */
    type?: string;

    /**
     * Target URL to scrape
     */
    url?: string;

    /**
     * Pre-rendered userbrowser creation template configuration
     */
    userbrowser_creation_template_rendered?: ExtractOptions.UserbrowserCreationTemplateRendered;
  }

  export namespace ExtractOptions {
    export interface UnionMember1 {
      name: 'chrome' | 'firefox';

      /**
       * Specific browser version to emulate
       */
      version?: string;
    }

    export interface UnionMember0 {
      creation?: string | null;

      domain?: string | null;

      expires?: string;

      extensions?: Array<string> | null;

      hostOnly?: boolean | null;

      httpOnly?: boolean | null;

      lastAccessed?: string | null;

      maxAge?: 'Infinity' | '-Infinity' | number | null;

      name?: string;

      path?: string | null;

      pathIsDefault?: boolean | null;

      sameSite?: 'strict' | 'lax' | 'none';

      secure?: boolean;

      value?: string;

      [k: string]: unknown;
    }

    /**
     * Structured metadata about the request execution context
     */
    export interface Metadata {
      /**
       * Account name associated with the request
       */
      account_name?: string;

      /**
       * Definition identifier
       */
      definition_id?: number;

      /**
       * Name of the definition
       */
      definition_name?: string;

      /**
       * API endpoint being called
       */
      endpoint?: string;

      /**
       * Unique identifier for this execution
       */
      execution_id?: string;

      /**
       * FlowIt task identifier
       */
      flowit_task_id?: string;

      /**
       * Input data identifier
       */
      input_id?: string;

      /**
       * Identifier for the pipeline execution
       */
      pipeline_execution_id?: number;

      /**
       * Query template identifier
       */
      query_template_id?: string;

      /**
       * Source system or application making the request
       */
      source?: string;

      /**
       * Template identifier
       */
      template_id?: number;

      /**
       * Name of the template
       */
      template_name?: string;
    }

    export interface NetworkCapture {
      method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';

      /**
       * Resource type for network capture filtering
       */
      resource_type?: string | Array<string>;

      status_code?: number | Array<number>;

      url?: NetworkCapture.URL;

      validation?: boolean;

      wait_for_requests_count?: number;

      wait_for_requests_count_timeout?: number;
    }

    export namespace NetworkCapture {
      export interface URL {
        value: string;

        type?: 'exact' | 'contains';
      }
    }

    /**
     * Configuration options for parsing behavior
     */
    export interface ParseOptions {
      /**
       * Whether to merge dynamic parsing results with static results
       */
      merge_dynamic?: boolean;

      [k: string]: unknown;
    }

    /**
     * Query template configuration for structured data extraction
     */
    export interface QueryTemplate {
      id: string;

      api_type?: 'WEB' | 'SERP' | 'SOCIAL';

      pagination?: QueryTemplate.NextPageParams | Array<QueryTemplate.UnionMember1>;

      params?: { [key: string]: unknown };

      [k: string]: unknown;
    }

    export namespace QueryTemplate {
      export interface NextPageParams {
        next_page_params: { [key: string]: unknown };
      }

      export interface UnionMember1 {
        next_page_params: { [key: string]: unknown };
      }
    }

    export interface RenderOptions {
      /**
       * Whether to enable ad blocking
       */
      adblock?: boolean;

      /**
       * Domains to block from loading
       */
      blocked_domains?: Array<string>;

      /**
       * Browser engine to use, or weighted distribution of engines
       */
      browser_engine?: 'chrome' | 'hackium' | 'firefox' | 'hackfox' | { [key: string]: number };

      /**
       * Whether to enable browser caching
       */
      cache?: boolean;

      /**
       * Type of browser connector to use
       */
      connector_type?: 'puppeteer' | 'puppeteer-cdp' | 'puppeteer-bidi' | 'webit-cdp' | 'playwright';

      /**
       * Types of resources to block from loading
       */
      disabled_resources?: Array<
        | 'other'
        | 'document'
        | 'stylesheet'
        | 'image'
        | 'media'
        | 'font'
        | 'script'
        | 'texttrack'
        | 'xhr'
        | 'fetch'
        | 'eventsource'
        | 'websocket'
        | 'manifest'
        | 'signedexchange'
        | 'ping'
        | 'cspviolationreport'
        | 'prefetch'
        | 'preflight'
        | 'fedcm'
      >;

      /**
       * Whether to use 2Captcha service for solving captchas
       */
      enable_2captcha?: boolean;

      /**
       * Browser extensions to load
       */
      extensions?: Array<string>;

      /**
       * Fingerprint identifier for browser customization
       */
      fingerprint_id?: string;

      /**
       * Configuration for Hackium browser modifications
       */
      hackium_configuration?: RenderOptions.HackiumConfiguration;

      /**
       * Whether to run browser in headless mode
       */
      headless?: boolean;

      /**
       * Whether to include iframe content in the result
       */
      include_iframes?: boolean;

      /**
       * Whether to load previously stored localStorage data
       */
      load_local_storage?: boolean;

      /**
       * Specific localStorage keys to load
       */
      local_storage_keys_to_load?: Array<string>;

      /**
       * Strategy for simulating mouse movements
       */
      mouse_strategy?: 'linear' | 'ghost-cursor' | 'windmouse';

      /**
       * Disable content encoding to avoid cached responses
       */
      no_accept_encoding?: boolean;

      /**
       * Whether to override default browser permissions
       */
      override_permissions?: boolean;

      /**
       * Whether to randomize HTTP header order
       */
      random_header_order?: boolean;

      /**
       * Type of render completion to wait for
       */
      render_type?:
        | 'domcontentloaded'
        | 'load'
        | 'idle0'
        | 'networkidle0'
        | 'idle2'
        | 'networkidle2'
        | 'navigate';

      /**
       * Whether to store localStorage data for future sessions
       */
      store_local_storage?: boolean;

      /**
       * Maximum time in milliseconds to wait for page render
       */
      timeout?: number;

      /**
       * Interval in milliseconds between key presses
       */
      typing_interval?: number;

      /**
       * Strategy for simulating keyboard typing
       */
      typing_strategy?: 'simple' | 'distribution';

      /**
       * Whether to use a persistent browser session
       */
      userbrowser?: boolean;

      /**
       * Browser event to wait for before considering page loaded
       */
      wait_until?:
        | 'load'
        | 'domcontentloaded'
        | 'idle0'
        | 'idle2'
        | 'networkidle0'
        | 'networkidle2'
        | 'navigate';

      /**
       * Whether to collect performance metrics during rendering
       */
      with_performance_metrics?: boolean;
    }

    export namespace RenderOptions {
      /**
       * Configuration for Hackium browser modifications
       */
      export interface HackiumConfiguration {
        collect_logs?: boolean;

        do_not_fix_math_salt?: boolean;

        enable_document_element_spoof?: boolean;

        enable_document_has_focus?: boolean;

        enable_fake_navigation_history?: boolean;

        enable_key_ordering?: boolean;

        enable_sniffer?: boolean;

        enable_verbose_logs?: boolean;
      }
    }

    export interface Session {
      id?: string;

      prefetch_userbrowser?: boolean;

      retry?: boolean;

      timeout?: number;
    }

    /**
     * Userbrowser creation template configuration
     */
    export interface Template {
      name: string;

      params?: { [key: string]: unknown };
    }

    /**
     * Pre-rendered userbrowser creation template configuration
     */
    export interface UserbrowserCreationTemplateRendered {
      id: string;

      allowed_parameter_names: Array<string>;

      render_flow_rendered: Array<{ [key: string]: unknown }>;
    }
  }
}

export interface ExtractParams {
  /**
   * Target URL to scrape
   */
  url: string;

  /**
   * Browser type to emulate
   */
  browser?: 'chrome' | 'firefox' | ExtractParams.UnionMember1;

  /**
   * City for geolocation
   */
  city?: string;

  /**
   * Client-side timeout in milliseconds
   */
  client_timeout?: number;

  /**
   * Whether to automatically handle cookie consent headers
   */
  consent_header?: boolean;

  /**
   * Browser cookies as array of cookie objects
   */
  cookies?: Array<ExtractParams.UnionMember0> | string;

  /**
   * Country code for geolocation and proxy selection
   */
  country?:
    | 'AD'
    | 'AE'
    | 'AF'
    | 'AG'
    | 'AI'
    | 'AL'
    | 'AM'
    | 'AO'
    | 'AQ'
    | 'AR'
    | 'AS'
    | 'AT'
    | 'AU'
    | 'AW'
    | 'AX'
    | 'AZ'
    | 'BA'
    | 'BB'
    | 'BD'
    | 'BE'
    | 'BF'
    | 'BG'
    | 'BH'
    | 'BI'
    | 'BJ'
    | 'BL'
    | 'BM'
    | 'BN'
    | 'BO'
    | 'BQ'
    | 'BR'
    | 'BS'
    | 'BT'
    | 'BV'
    | 'BW'
    | 'BY'
    | 'BZ'
    | 'CA'
    | 'CC'
    | 'CD'
    | 'CF'
    | 'CG'
    | 'CH'
    | 'CI'
    | 'CK'
    | 'CL'
    | 'CM'
    | 'CN'
    | 'CO'
    | 'CR'
    | 'CU'
    | 'CV'
    | 'CW'
    | 'CX'
    | 'CY'
    | 'CZ'
    | 'DE'
    | 'DJ'
    | 'DK'
    | 'DM'
    | 'DO'
    | 'DZ'
    | 'EC'
    | 'EE'
    | 'EG'
    | 'EH'
    | 'ER'
    | 'ES'
    | 'ET'
    | 'FI'
    | 'FJ'
    | 'FK'
    | 'FM'
    | 'FO'
    | 'FR'
    | 'GA'
    | 'GB'
    | 'GD'
    | 'GE'
    | 'GF'
    | 'GG'
    | 'GH'
    | 'GI'
    | 'GL'
    | 'GM'
    | 'GN'
    | 'GP'
    | 'GQ'
    | 'GR'
    | 'GS'
    | 'GT'
    | 'GU'
    | 'GW'
    | 'GY'
    | 'HK'
    | 'HM'
    | 'HN'
    | 'HR'
    | 'HT'
    | 'HU'
    | 'ID'
    | 'IE'
    | 'IL'
    | 'IM'
    | 'IN'
    | 'IO'
    | 'IQ'
    | 'IR'
    | 'IS'
    | 'IT'
    | 'JE'
    | 'JM'
    | 'JO'
    | 'JP'
    | 'KE'
    | 'KG'
    | 'KH'
    | 'KI'
    | 'KM'
    | 'KN'
    | 'KP'
    | 'KR'
    | 'KW'
    | 'KY'
    | 'KZ'
    | 'LA'
    | 'LB'
    | 'LC'
    | 'LI'
    | 'LK'
    | 'LR'
    | 'LS'
    | 'LT'
    | 'LU'
    | 'LV'
    | 'LY'
    | 'MA'
    | 'MC'
    | 'MD'
    | 'ME'
    | 'MF'
    | 'MG'
    | 'MH'
    | 'MK'
    | 'ML'
    | 'MM'
    | 'MN'
    | 'MO'
    | 'MP'
    | 'MQ'
    | 'MR'
    | 'MS'
    | 'MT'
    | 'MU'
    | 'MV'
    | 'MW'
    | 'MX'
    | 'MY'
    | 'MZ'
    | 'NA'
    | 'NC'
    | 'NE'
    | 'NF'
    | 'NG'
    | 'NI'
    | 'NL'
    | 'NO'
    | 'NP'
    | 'NR'
    | 'NU'
    | 'NZ'
    | 'OM'
    | 'PA'
    | 'PE'
    | 'PF'
    | 'PG'
    | 'PH'
    | 'PK'
    | 'PL'
    | 'PM'
    | 'PN'
    | 'PR'
    | 'PS'
    | 'PT'
    | 'PW'
    | 'PY'
    | 'QA'
    | 'RE'
    | 'RO'
    | 'RS'
    | 'RU'
    | 'RW'
    | 'SA'
    | 'SB'
    | 'SC'
    | 'SD'
    | 'SE'
    | 'SG'
    | 'SH'
    | 'SI'
    | 'SJ'
    | 'SK'
    | 'SL'
    | 'SM'
    | 'SN'
    | 'SO'
    | 'SR'
    | 'SS'
    | 'ST'
    | 'SV'
    | 'SX'
    | 'SY'
    | 'SZ'
    | 'TC'
    | 'TD'
    | 'TF'
    | 'TG'
    | 'TH'
    | 'TJ'
    | 'TK'
    | 'TL'
    | 'TM'
    | 'TN'
    | 'TO'
    | 'TR'
    | 'TT'
    | 'TV'
    | 'TW'
    | 'TZ'
    | 'UA'
    | 'UG'
    | 'UM'
    | 'US'
    | 'UY'
    | 'UZ'
    | 'VA'
    | 'VC'
    | 'VE'
    | 'VG'
    | 'VI'
    | 'VN'
    | 'VU'
    | 'WF'
    | 'WS'
    | 'XK'
    | 'YE'
    | 'YT'
    | 'ZA'
    | 'ZM'
    | 'ZW'
    | 'ALL';

  /**
   * Device type for browser emulation
   */
  device?: 'desktop' | 'mobile' | 'tablet';

  /**
   * Whether to disable IP address validation
   */
  disable_ip_check?: boolean;

  /**
   * Browser driver to use
   */
  driver?: 'vx6' | 'vx8' | 'vx8-pro' | 'vx10' | 'vx10-pro' | 'vx12' | 'vx12-pro';

  /**
   * Custom parser configuration as a key-value map
   */
  dynamic_parser?: { [key: string]: unknown };

  /**
   * Expected HTTP status codes for successful requests
   */
  expected_status_codes?: Array<number>;

  /**
   * Response format
   */
  format?: 'json' | 'html' | 'csv' | 'raw' | 'json-lines' | 'markdown';

  /**
   * Custom HTTP headers to include in the request
   */
  headers?: { [key: string]: string | Array<string> | null };

  /**
   * Whether to use HTTP/2 protocol
   */
  http2?: boolean;

  /**
   * Whether to use IPv6 for the request
   */
  ip6?: boolean;

  /**
   * Whether to emulate XMLHttpRequest behavior
   */
  is_xhr?: boolean;

  /**
   * Locale for browser language and region settings
   */
  locale?:
    | 'aa-DJ'
    | 'aa-ER'
    | 'aa-ET'
    | 'af'
    | 'af-NA'
    | 'af-ZA'
    | 'ak'
    | 'ak-GH'
    | 'am'
    | 'am-ET'
    | 'an-ES'
    | 'ar'
    | 'ar-AE'
    | 'ar-BH'
    | 'ar-DZ'
    | 'ar-EG'
    | 'ar-IN'
    | 'ar-IQ'
    | 'ar-JO'
    | 'ar-KW'
    | 'ar-LB'
    | 'ar-LY'
    | 'ar-MA'
    | 'ar-OM'
    | 'ar-QA'
    | 'ar-SA'
    | 'ar-SD'
    | 'ar-SY'
    | 'ar-TN'
    | 'ar-YE'
    | 'as'
    | 'as-IN'
    | 'asa'
    | 'asa-TZ'
    | 'ast-ES'
    | 'az'
    | 'az-AZ'
    | 'az-Cyrl'
    | 'az-Cyrl-AZ'
    | 'az-Latn'
    | 'az-Latn-AZ'
    | 'be'
    | 'be-BY'
    | 'bem'
    | 'bem-ZM'
    | 'ber-DZ'
    | 'ber-MA'
    | 'bez'
    | 'bez-TZ'
    | 'bg'
    | 'bg-BG'
    | 'bho-IN'
    | 'bm'
    | 'bm-ML'
    | 'bn'
    | 'bn-BD'
    | 'bn-IN'
    | 'bo'
    | 'bo-CN'
    | 'bo-IN'
    | 'br-FR'
    | 'brx-IN'
    | 'bs'
    | 'bs-BA'
    | 'byn-ER'
    | 'ca'
    | 'ca-AD'
    | 'ca-ES'
    | 'ca-FR'
    | 'ca-IT'
    | 'cgg'
    | 'cgg-UG'
    | 'chr'
    | 'chr-US'
    | 'crh-UA'
    | 'cs'
    | 'cs-CZ'
    | 'csb-PL'
    | 'cv-RU'
    | 'cy'
    | 'cy-GB'
    | 'da'
    | 'da-DK'
    | 'dav'
    | 'dav-KE'
    | 'de'
    | 'de-AT'
    | 'de-BE'
    | 'de-CH'
    | 'de-DE'
    | 'de-LI'
    | 'de-LU'
    | 'dv-MV'
    | 'dz-BT'
    | 'ebu'
    | 'ebu-KE'
    | 'ee'
    | 'ee-GH'
    | 'ee-TG'
    | 'el'
    | 'el-CY'
    | 'el-GR'
    | 'en'
    | 'en-AG'
    | 'en-AS'
    | 'en-AU'
    | 'en-BE'
    | 'en-BW'
    | 'en-BZ'
    | 'en-CA'
    | 'en-DK'
    | 'en-GB'
    | 'en-GU'
    | 'en-HK'
    | 'en-IE'
    | 'en-IN'
    | 'en-JM'
    | 'en-MH'
    | 'en-MP'
    | 'en-MT'
    | 'en-MU'
    | 'en-NA'
    | 'en-NG'
    | 'en-NZ'
    | 'en-PH'
    | 'en-PK'
    | 'en-SG'
    | 'en-TT'
    | 'en-UM'
    | 'en-US'
    | 'en-VI'
    | 'en-ZA'
    | 'en-ZM'
    | 'en-ZW'
    | 'eo'
    | 'es'
    | 'es-419'
    | 'es-AR'
    | 'es-BO'
    | 'es-CL'
    | 'es-CO'
    | 'es-CR'
    | 'es-CU'
    | 'es-DO'
    | 'es-EC'
    | 'es-ES'
    | 'es-GQ'
    | 'es-GT'
    | 'es-HN'
    | 'es-MX'
    | 'es-NI'
    | 'es-PA'
    | 'es-PE'
    | 'es-PR'
    | 'es-PY'
    | 'es-SV'
    | 'es-US'
    | 'es-UY'
    | 'es-VE'
    | 'et'
    | 'et-EE'
    | 'eu'
    | 'eu-ES'
    | 'fa'
    | 'fa-AF'
    | 'fa-IR'
    | 'ff'
    | 'ff-SN'
    | 'fi'
    | 'fi-FI'
    | 'fil'
    | 'fil-PH'
    | 'fo'
    | 'fo-FO'
    | 'fr'
    | 'fr-BE'
    | 'fr-BF'
    | 'fr-BI'
    | 'fr-BJ'
    | 'fr-BL'
    | 'fr-CA'
    | 'fr-CD'
    | 'fr-CF'
    | 'fr-CG'
    | 'fr-CH'
    | 'fr-CI'
    | 'fr-CM'
    | 'fr-DJ'
    | 'fr-FR'
    | 'fr-GA'
    | 'fr-GN'
    | 'fr-GP'
    | 'fr-GQ'
    | 'fr-KM'
    | 'fr-LU'
    | 'fr-MC'
    | 'fr-MF'
    | 'fr-MG'
    | 'fr-ML'
    | 'fr-MQ'
    | 'fr-NE'
    | 'fr-RE'
    | 'fr-RW'
    | 'fr-SN'
    | 'fr-TD'
    | 'fr-TG'
    | 'fur-IT'
    | 'fy-DE'
    | 'fy-NL'
    | 'ga'
    | 'ga-IE'
    | 'gd-GB'
    | 'gez-ER'
    | 'gez-ET'
    | 'gl'
    | 'gl-ES'
    | 'gsw'
    | 'gsw-CH'
    | 'gu'
    | 'gu-IN'
    | 'guz'
    | 'guz-KE'
    | 'gv'
    | 'gv-GB'
    | 'ha'
    | 'ha-Latn'
    | 'ha-Latn-GH'
    | 'ha-Latn-NE'
    | 'ha-Latn-NG'
    | 'ha-NG'
    | 'haw'
    | 'haw-US'
    | 'he'
    | 'he-IL'
    | 'hi'
    | 'hi-IN'
    | 'hne-IN'
    | 'hr'
    | 'hr-HR'
    | 'hsb-DE'
    | 'ht-HT'
    | 'hu'
    | 'hu-HU'
    | 'hy'
    | 'hy-AM'
    | 'id'
    | 'id-ID'
    | 'ig'
    | 'ig-NG'
    | 'ii'
    | 'ii-CN'
    | 'ik-CA'
    | 'is'
    | 'is-IS'
    | 'it'
    | 'it-CH'
    | 'it-IT'
    | 'iu-CA'
    | 'iw-IL'
    | 'ja'
    | 'ja-JP'
    | 'jmc'
    | 'jmc-TZ'
    | 'ka'
    | 'ka-GE'
    | 'kab'
    | 'kab-DZ'
    | 'kam'
    | 'kam-KE'
    | 'kde'
    | 'kde-TZ'
    | 'kea'
    | 'kea-CV'
    | 'khq'
    | 'khq-ML'
    | 'ki'
    | 'ki-KE'
    | 'kk'
    | 'kk-Cyrl'
    | 'kk-Cyrl-KZ'
    | 'kk-KZ'
    | 'kl'
    | 'kl-GL'
    | 'kln'
    | 'kln-KE'
    | 'km'
    | 'km-KH'
    | 'kn'
    | 'kn-IN'
    | 'ko'
    | 'ko-KR'
    | 'kok'
    | 'kok-IN'
    | 'ks-IN'
    | 'ku-TR'
    | 'kw'
    | 'kw-GB'
    | 'ky-KG'
    | 'lag'
    | 'lag-TZ'
    | 'lb-LU'
    | 'lg'
    | 'lg-UG'
    | 'li-BE'
    | 'li-NL'
    | 'lij-IT'
    | 'lo-LA'
    | 'lt'
    | 'lt-LT'
    | 'luo'
    | 'luo-KE'
    | 'luy'
    | 'luy-KE'
    | 'lv'
    | 'lv-LV'
    | 'mag-IN'
    | 'mai-IN'
    | 'mas'
    | 'mas-KE'
    | 'mas-TZ'
    | 'mer'
    | 'mer-KE'
    | 'mfe'
    | 'mfe-MU'
    | 'mg'
    | 'mg-MG'
    | 'mhr-RU'
    | 'mi-NZ'
    | 'mk'
    | 'mk-MK'
    | 'ml'
    | 'ml-IN'
    | 'mn-MN'
    | 'mr'
    | 'mr-IN'
    | 'ms'
    | 'ms-BN'
    | 'ms-MY'
    | 'mt'
    | 'mt-MT'
    | 'my'
    | 'my-MM'
    | 'nan-TW'
    | 'naq'
    | 'naq-NA'
    | 'nb'
    | 'nb-NO'
    | 'nd'
    | 'nd-ZW'
    | 'nds-DE'
    | 'nds-NL'
    | 'ne'
    | 'ne-IN'
    | 'ne-NP'
    | 'nl'
    | 'nl-AW'
    | 'nl-BE'
    | 'nl-NL'
    | 'nn'
    | 'nn-NO'
    | 'nr-ZA'
    | 'nso-ZA'
    | 'nyn'
    | 'nyn-UG'
    | 'oc-FR'
    | 'om'
    | 'om-ET'
    | 'om-KE'
    | 'or'
    | 'or-IN'
    | 'os-RU'
    | 'pa'
    | 'pa-Arab'
    | 'pa-Arab-PK'
    | 'pa-Guru'
    | 'pa-Guru-IN'
    | 'pa-IN'
    | 'pa-PK'
    | 'pap-AN'
    | 'pl'
    | 'pl-PL'
    | 'ps'
    | 'ps-AF'
    | 'pt'
    | 'pt-BR'
    | 'pt-GW'
    | 'pt-MZ'
    | 'pt-PT'
    | 'rm'
    | 'rm-CH'
    | 'ro'
    | 'ro-MD'
    | 'ro-RO'
    | 'rof'
    | 'rof-TZ'
    | 'ru'
    | 'ru-MD'
    | 'ru-RU'
    | 'ru-UA'
    | 'rw'
    | 'rw-RW'
    | 'rwk'
    | 'rwk-TZ'
    | 'sa-IN'
    | 'saq'
    | 'saq-KE'
    | 'sc-IT'
    | 'sd-IN'
    | 'se-NO'
    | 'seh'
    | 'seh-MZ'
    | 'ses'
    | 'ses-ML'
    | 'sg'
    | 'sg-CF'
    | 'shi'
    | 'shi-Latn'
    | 'shi-Latn-MA'
    | 'shi-Tfng'
    | 'shi-Tfng-MA'
    | 'shs-CA'
    | 'si'
    | 'si-LK'
    | 'sid-ET'
    | 'sk'
    | 'sk-SK'
    | 'sl'
    | 'sl-SI'
    | 'sn'
    | 'sn-ZW'
    | 'so'
    | 'so-DJ'
    | 'so-ET'
    | 'so-KE'
    | 'so-SO'
    | 'sq'
    | 'sq-AL'
    | 'sq-MK'
    | 'sr'
    | 'sr-Cyrl'
    | 'sr-Cyrl-BA'
    | 'sr-Cyrl-ME'
    | 'sr-Cyrl-RS'
    | 'sr-Latn'
    | 'sr-Latn-BA'
    | 'sr-Latn-ME'
    | 'sr-Latn-RS'
    | 'sr-ME'
    | 'sr-RS'
    | 'ss-ZA'
    | 'st-ZA'
    | 'sv'
    | 'sv-FI'
    | 'sv-SE'
    | 'sw'
    | 'sw-KE'
    | 'sw-TZ'
    | 'ta'
    | 'ta-IN'
    | 'ta-LK'
    | 'te'
    | 'te-IN'
    | 'teo'
    | 'teo-KE'
    | 'teo-UG'
    | 'tg-TJ'
    | 'th'
    | 'th-TH'
    | 'ti'
    | 'ti-ER'
    | 'ti-ET'
    | 'tig-ER'
    | 'tk-TM'
    | 'tl-PH'
    | 'tn-ZA'
    | 'to'
    | 'to-TO'
    | 'tr'
    | 'tr-CY'
    | 'tr-TR'
    | 'ts-ZA'
    | 'tt-RU'
    | 'tzm'
    | 'tzm-Latn'
    | 'tzm-Latn-MA'
    | 'ug-CN'
    | 'uk'
    | 'uk-UA'
    | 'unm-US'
    | 'ur'
    | 'ur-IN'
    | 'ur-PK'
    | 'uz'
    | 'uz-Arab'
    | 'uz-Arab-AF'
    | 'uz-Cyrl'
    | 'uz-Cyrl-UZ'
    | 'uz-Latn'
    | 'uz-Latn-UZ'
    | 'uz-UZ'
    | 've-ZA'
    | 'vi'
    | 'vi-VN'
    | 'vun'
    | 'vun-TZ'
    | 'wa-BE'
    | 'wae-CH'
    | 'wal-ET'
    | 'wo-SN'
    | 'xh-ZA'
    | 'xog'
    | 'xog-UG'
    | 'yi-US'
    | 'yo'
    | 'yo-NG'
    | 'yue-HK'
    | 'zh'
    | 'zh-CN'
    | 'zh-HK'
    | 'zh-Hans'
    | 'zh-Hans-CN'
    | 'zh-Hans-HK'
    | 'zh-Hans-MO'
    | 'zh-Hans-SG'
    | 'zh-Hant'
    | 'zh-Hant-HK'
    | 'zh-Hant-MO'
    | 'zh-Hant-TW'
    | 'zh-SG'
    | 'zh-TW'
    | 'zu'
    | 'zu-ZA'
    | 'auto';

  /**
   * Whether to return response in Markdown format
   */
  markdown?: boolean;

  /**
   * Structured metadata about the request execution context
   */
  metadata?: ExtractParams.Metadata;

  /**
   * HTTP method for the request
   */
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

  /**
   * Native execution mode
   */
  native_mode?: 'requester' | 'apm' | 'direct';

  /**
   * Filters for capturing network traffic
   */
  network_capture?: Array<ExtractParams.NetworkCapture>;

  /**
   * Whether to exclude HTML from the response
   */
  no_html?: boolean;

  /**
   * Whether to disable browser-based rendering
   */
  no_userbrowser?: boolean;

  /**
   * Operating system to emulate
   */
  os?: 'windows' | 'mac os' | 'linux' | 'android' | 'ios';

  /**
   * Whether to parse the response content
   */
  parse?: boolean;

  /**
   * Configuration options for parsing behavior
   */
  parse_options?: ExtractParams.ParseOptions;

  /**
   * Custom parser configuration as a key-value map
   */
  parser?: { [key: string]: unknown } | string;

  /**
   * Proxy provider to use for the request
   */
  proxy_provider?:
    | 'brightdata'
    | 'oxylabs'
    | 'smartproxy'
    | 'proxit'
    | 'proxit_preprod'
    | 'local'
    | 'rayobyte'
    | 'always'
    | 'oculusproxies'
    | 'froxy'
    | 'packetstream'
    | '911proxy'
    | 'direct911proxy'
    | 'thesocialproxy'
    | 'thesocialproxy2'
    | 'nimble-isp'
    | 'nimble-isp-mobile'
    | 'proxit-linux'
    | 'proxit-macos'
    | 'proxit-windows'
    | 'proxit-rental'
    | 'ipfoxy'
    | 'brightup'
    | 'research';

  /**
   * Weighted distribution of proxy providers
   */
  proxy_providers?: { [key: string]: number };

  /**
   * Query template configuration for structured data extraction
   */
  query_template?: ExtractParams.QueryTemplate;

  /**
   * Whether to return raw HTTP headers in response
   */
  raw_headers?: boolean;

  /**
   * Referrer policy for the request
   */
  referrer_type?:
    | 'random'
    | 'no-referer'
    | 'same-origin'
    | 'google'
    | 'bing'
    | 'facebook'
    | 'twitter'
    | 'instagram';

  /**
   * Whether to render JavaScript content using a browser
   */
  render?: boolean;

  /**
   * Array of actions to perform during browser rendering
   */
  render_flow?: Array<{ [key: string]: unknown }>;

  render_options?: ExtractParams.RenderOptions;

  /**
   * Request timeout in milliseconds
   */
  request_timeout?: number;

  /**
   * Whether to save the userbrowser session for reuse
   */
  save_userbrowser?: boolean;

  session?: ExtractParams.Session;

  /**
   * Skills or capabilities required for the request
   */
  skill?: string | Array<string>;

  /**
   * Whether to skip userbrowser creation template processing
   */
  skip_ubct?: boolean;

  /**
   * US state for geolocation (only valid when country is US)
   */
  state?:
    | 'AL'
    | 'AK'
    | 'AS'
    | 'AZ'
    | 'AR'
    | 'CA'
    | 'CO'
    | 'CT'
    | 'DE'
    | 'DC'
    | 'FL'
    | 'GA'
    | 'GU'
    | 'HI'
    | 'ID'
    | 'IL'
    | 'IN'
    | 'IA'
    | 'KS'
    | 'KY'
    | 'LA'
    | 'ME'
    | 'MD'
    | 'MA'
    | 'MI'
    | 'MN'
    | 'MS'
    | 'MO'
    | 'MT'
    | 'NE'
    | 'NV'
    | 'NH'
    | 'NJ'
    | 'NM'
    | 'NY'
    | 'NC'
    | 'ND'
    | 'MP'
    | 'OH'
    | 'OK'
    | 'OR'
    | 'PA'
    | 'PR'
    | 'RI'
    | 'SC'
    | 'SD'
    | 'TN'
    | 'TX'
    | 'UT'
    | 'VT'
    | 'VA'
    | 'VI'
    | 'WA'
    | 'WV'
    | 'WI'
    | 'WY';

  /**
   * User-defined tag for request identification
   */
  tag?: string;

  /**
   * Userbrowser creation template configuration
   */
  template?: ExtractParams.Template;

  /**
   * Type of query or scraping template
   */
  type?: string;

  /**
   * Pre-rendered userbrowser creation template configuration
   */
  userbrowser_creation_template_rendered?: ExtractParams.UserbrowserCreationTemplateRendered;
}

export namespace ExtractParams {
  export interface UnionMember1 {
    name: 'chrome' | 'firefox';

    /**
     * Specific browser version to emulate
     */
    version?: string;
  }

  export interface UnionMember0 {
    creation?: string | null;

    domain?: string | null;

    expires?: string;

    extensions?: Array<string> | null;

    hostOnly?: boolean | null;

    httpOnly?: boolean | null;

    lastAccessed?: string | null;

    maxAge?: 'Infinity' | '-Infinity' | number | null;

    name?: string;

    path?: string | null;

    pathIsDefault?: boolean | null;

    sameSite?: 'strict' | 'lax' | 'none';

    secure?: boolean;

    value?: string;

    [k: string]: unknown;
  }

  /**
   * Structured metadata about the request execution context
   */
  export interface Metadata {
    /**
     * Account name associated with the request
     */
    account_name?: string;

    /**
     * Definition identifier
     */
    definition_id?: number;

    /**
     * Name of the definition
     */
    definition_name?: string;

    /**
     * API endpoint being called
     */
    endpoint?: string;

    /**
     * Unique identifier for this execution
     */
    execution_id?: string;

    /**
     * FlowIt task identifier
     */
    flowit_task_id?: string;

    /**
     * Input data identifier
     */
    input_id?: string;

    /**
     * Identifier for the pipeline execution
     */
    pipeline_execution_id?: number;

    /**
     * Query template identifier
     */
    query_template_id?: string;

    /**
     * Source system or application making the request
     */
    source?: string;

    /**
     * Template identifier
     */
    template_id?: number;

    /**
     * Name of the template
     */
    template_name?: string;
  }

  export interface NetworkCapture {
    method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';

    /**
     * Resource type for network capture filtering
     */
    resource_type?: string | Array<string>;

    status_code?: number | Array<number>;

    url?: NetworkCapture.URL;

    validation?: boolean;

    wait_for_requests_count?: number;

    wait_for_requests_count_timeout?: number;
  }

  export namespace NetworkCapture {
    export interface URL {
      value: string;

      type?: 'exact' | 'contains';
    }
  }

  /**
   * Configuration options for parsing behavior
   */
  export interface ParseOptions {
    /**
     * Whether to merge dynamic parsing results with static results
     */
    merge_dynamic?: boolean;

    [k: string]: unknown;
  }

  /**
   * Query template configuration for structured data extraction
   */
  export interface QueryTemplate {
    id: string;

    api_type?: 'WEB' | 'SERP' | 'SOCIAL';

    pagination?: QueryTemplate.NextPageParams | Array<QueryTemplate.UnionMember1>;

    params?: { [key: string]: unknown };

    [k: string]: unknown;
  }

  export namespace QueryTemplate {
    export interface NextPageParams {
      next_page_params: { [key: string]: unknown };
    }

    export interface UnionMember1 {
      next_page_params: { [key: string]: unknown };
    }
  }

  export interface RenderOptions {
    /**
     * Whether to enable ad blocking
     */
    adblock?: boolean;

    /**
     * Domains to block from loading
     */
    blocked_domains?: Array<string>;

    /**
     * Browser engine to use, or weighted distribution of engines
     */
    browser_engine?: 'chrome' | 'hackium' | 'firefox' | 'hackfox' | { [key: string]: number };

    /**
     * Whether to enable browser caching
     */
    cache?: boolean;

    /**
     * Type of browser connector to use
     */
    connector_type?: 'puppeteer' | 'puppeteer-cdp' | 'puppeteer-bidi' | 'webit-cdp' | 'playwright';

    /**
     * Types of resources to block from loading
     */
    disabled_resources?: Array<
      | 'other'
      | 'document'
      | 'stylesheet'
      | 'image'
      | 'media'
      | 'font'
      | 'script'
      | 'texttrack'
      | 'xhr'
      | 'fetch'
      | 'eventsource'
      | 'websocket'
      | 'manifest'
      | 'signedexchange'
      | 'ping'
      | 'cspviolationreport'
      | 'prefetch'
      | 'preflight'
      | 'fedcm'
    >;

    /**
     * Whether to use 2Captcha service for solving captchas
     */
    enable_2captcha?: boolean;

    /**
     * Browser extensions to load
     */
    extensions?: Array<string>;

    /**
     * Fingerprint identifier for browser customization
     */
    fingerprint_id?: string;

    /**
     * Configuration for Hackium browser modifications
     */
    hackium_configuration?: RenderOptions.HackiumConfiguration;

    /**
     * Whether to run browser in headless mode
     */
    headless?: boolean;

    /**
     * Whether to include iframe content in the result
     */
    include_iframes?: boolean;

    /**
     * Whether to load previously stored localStorage data
     */
    load_local_storage?: boolean;

    /**
     * Specific localStorage keys to load
     */
    local_storage_keys_to_load?: Array<string>;

    /**
     * Strategy for simulating mouse movements
     */
    mouse_strategy?: 'linear' | 'ghost-cursor' | 'windmouse';

    /**
     * Disable content encoding to avoid cached responses
     */
    no_accept_encoding?: boolean;

    /**
     * Whether to override default browser permissions
     */
    override_permissions?: boolean;

    /**
     * Whether to randomize HTTP header order
     */
    random_header_order?: boolean;

    /**
     * Type of render completion to wait for
     */
    render_type?:
      | 'domcontentloaded'
      | 'load'
      | 'idle0'
      | 'networkidle0'
      | 'idle2'
      | 'networkidle2'
      | 'navigate';

    /**
     * Whether to store localStorage data for future sessions
     */
    store_local_storage?: boolean;

    /**
     * Maximum time in milliseconds to wait for page render
     */
    timeout?: number;

    /**
     * Interval in milliseconds between key presses
     */
    typing_interval?: number;

    /**
     * Strategy for simulating keyboard typing
     */
    typing_strategy?: 'simple' | 'distribution';

    /**
     * Whether to use a persistent browser session
     */
    userbrowser?: boolean;

    /**
     * Browser event to wait for before considering page loaded
     */
    wait_until?:
      | 'load'
      | 'domcontentloaded'
      | 'idle0'
      | 'idle2'
      | 'networkidle0'
      | 'networkidle2'
      | 'navigate';

    /**
     * Whether to collect performance metrics during rendering
     */
    with_performance_metrics?: boolean;
  }

  export namespace RenderOptions {
    /**
     * Configuration for Hackium browser modifications
     */
    export interface HackiumConfiguration {
      collect_logs?: boolean;

      do_not_fix_math_salt?: boolean;

      enable_document_element_spoof?: boolean;

      enable_document_has_focus?: boolean;

      enable_fake_navigation_history?: boolean;

      enable_key_ordering?: boolean;

      enable_sniffer?: boolean;

      enable_verbose_logs?: boolean;
    }
  }

  export interface Session {
    id?: string;

    prefetch_userbrowser?: boolean;

    retry?: boolean;

    timeout?: number;
  }

  /**
   * Userbrowser creation template configuration
   */
  export interface Template {
    name: string;

    params?: { [key: string]: unknown };
  }

  /**
   * Pre-rendered userbrowser creation template configuration
   */
  export interface UserbrowserCreationTemplateRendered {
    id: string;

    allowed_parameter_names: Array<string>;

    render_flow_rendered: Array<{ [key: string]: unknown }>;
  }
}

export interface MapParams {
  /**
   * Url to map.
   */
  url: string;

  /**
   * Country code for geolocation and proxy selection
   */
  country?:
    | 'AD'
    | 'AE'
    | 'AF'
    | 'AG'
    | 'AI'
    | 'AL'
    | 'AM'
    | 'AO'
    | 'AQ'
    | 'AR'
    | 'AS'
    | 'AT'
    | 'AU'
    | 'AW'
    | 'AX'
    | 'AZ'
    | 'BA'
    | 'BB'
    | 'BD'
    | 'BE'
    | 'BF'
    | 'BG'
    | 'BH'
    | 'BI'
    | 'BJ'
    | 'BL'
    | 'BM'
    | 'BN'
    | 'BO'
    | 'BQ'
    | 'BR'
    | 'BS'
    | 'BT'
    | 'BV'
    | 'BW'
    | 'BY'
    | 'BZ'
    | 'CA'
    | 'CC'
    | 'CD'
    | 'CF'
    | 'CG'
    | 'CH'
    | 'CI'
    | 'CK'
    | 'CL'
    | 'CM'
    | 'CN'
    | 'CO'
    | 'CR'
    | 'CU'
    | 'CV'
    | 'CW'
    | 'CX'
    | 'CY'
    | 'CZ'
    | 'DE'
    | 'DJ'
    | 'DK'
    | 'DM'
    | 'DO'
    | 'DZ'
    | 'EC'
    | 'EE'
    | 'EG'
    | 'EH'
    | 'ER'
    | 'ES'
    | 'ET'
    | 'FI'
    | 'FJ'
    | 'FK'
    | 'FM'
    | 'FO'
    | 'FR'
    | 'GA'
    | 'GB'
    | 'GD'
    | 'GE'
    | 'GF'
    | 'GG'
    | 'GH'
    | 'GI'
    | 'GL'
    | 'GM'
    | 'GN'
    | 'GP'
    | 'GQ'
    | 'GR'
    | 'GS'
    | 'GT'
    | 'GU'
    | 'GW'
    | 'GY'
    | 'HK'
    | 'HM'
    | 'HN'
    | 'HR'
    | 'HT'
    | 'HU'
    | 'ID'
    | 'IE'
    | 'IL'
    | 'IM'
    | 'IN'
    | 'IO'
    | 'IQ'
    | 'IR'
    | 'IS'
    | 'IT'
    | 'JE'
    | 'JM'
    | 'JO'
    | 'JP'
    | 'KE'
    | 'KG'
    | 'KH'
    | 'KI'
    | 'KM'
    | 'KN'
    | 'KP'
    | 'KR'
    | 'KW'
    | 'KY'
    | 'KZ'
    | 'LA'
    | 'LB'
    | 'LC'
    | 'LI'
    | 'LK'
    | 'LR'
    | 'LS'
    | 'LT'
    | 'LU'
    | 'LV'
    | 'LY'
    | 'MA'
    | 'MC'
    | 'MD'
    | 'ME'
    | 'MF'
    | 'MG'
    | 'MH'
    | 'MK'
    | 'ML'
    | 'MM'
    | 'MN'
    | 'MO'
    | 'MP'
    | 'MQ'
    | 'MR'
    | 'MS'
    | 'MT'
    | 'MU'
    | 'MV'
    | 'MW'
    | 'MX'
    | 'MY'
    | 'MZ'
    | 'NA'
    | 'NC'
    | 'NE'
    | 'NF'
    | 'NG'
    | 'NI'
    | 'NL'
    | 'NO'
    | 'NP'
    | 'NR'
    | 'NU'
    | 'NZ'
    | 'OM'
    | 'PA'
    | 'PE'
    | 'PF'
    | 'PG'
    | 'PH'
    | 'PK'
    | 'PL'
    | 'PM'
    | 'PN'
    | 'PR'
    | 'PS'
    | 'PT'
    | 'PW'
    | 'PY'
    | 'QA'
    | 'RE'
    | 'RO'
    | 'RS'
    | 'RU'
    | 'RW'
    | 'SA'
    | 'SB'
    | 'SC'
    | 'SD'
    | 'SE'
    | 'SG'
    | 'SH'
    | 'SI'
    | 'SJ'
    | 'SK'
    | 'SL'
    | 'SM'
    | 'SN'
    | 'SO'
    | 'SR'
    | 'SS'
    | 'ST'
    | 'SV'
    | 'SX'
    | 'SY'
    | 'SZ'
    | 'TC'
    | 'TD'
    | 'TF'
    | 'TG'
    | 'TH'
    | 'TJ'
    | 'TK'
    | 'TL'
    | 'TM'
    | 'TN'
    | 'TO'
    | 'TR'
    | 'TT'
    | 'TV'
    | 'TW'
    | 'TZ'
    | 'UA'
    | 'UG'
    | 'UM'
    | 'US'
    | 'UY'
    | 'UZ'
    | 'VA'
    | 'VC'
    | 'VE'
    | 'VG'
    | 'VI'
    | 'VN'
    | 'VU'
    | 'WF'
    | 'WS'
    | 'XK'
    | 'YE'
    | 'YT'
    | 'ZA'
    | 'ZM'
    | 'ZW';

  /**
   * Includes subdomains of the main domain in the mapping process.
   */
  domain_filter?: 'domain' | 'subdomain' | 'all';

  /**
   * Maximum number of links to return.
   */
  limit?: number;

  /**
   * Locale for browser language and region settings
   */
  locale?:
    | 'aa-DJ'
    | 'aa-ER'
    | 'aa-ET'
    | 'af'
    | 'af-NA'
    | 'af-ZA'
    | 'ak'
    | 'ak-GH'
    | 'am'
    | 'am-ET'
    | 'an-ES'
    | 'ar'
    | 'ar-AE'
    | 'ar-BH'
    | 'ar-DZ'
    | 'ar-EG'
    | 'ar-IN'
    | 'ar-IQ'
    | 'ar-JO'
    | 'ar-KW'
    | 'ar-LB'
    | 'ar-LY'
    | 'ar-MA'
    | 'ar-OM'
    | 'ar-QA'
    | 'ar-SA'
    | 'ar-SD'
    | 'ar-SY'
    | 'ar-TN'
    | 'ar-YE'
    | 'as'
    | 'as-IN'
    | 'asa'
    | 'asa-TZ'
    | 'ast-ES'
    | 'az'
    | 'az-AZ'
    | 'az-Cyrl'
    | 'az-Cyrl-AZ'
    | 'az-Latn'
    | 'az-Latn-AZ'
    | 'be'
    | 'be-BY'
    | 'bem'
    | 'bem-ZM'
    | 'ber-DZ'
    | 'ber-MA'
    | 'bez'
    | 'bez-TZ'
    | 'bg'
    | 'bg-BG'
    | 'bho-IN'
    | 'bm'
    | 'bm-ML'
    | 'bn'
    | 'bn-BD'
    | 'bn-IN'
    | 'bo'
    | 'bo-CN'
    | 'bo-IN'
    | 'br-FR'
    | 'brx-IN'
    | 'bs'
    | 'bs-BA'
    | 'byn-ER'
    | 'ca'
    | 'ca-AD'
    | 'ca-ES'
    | 'ca-FR'
    | 'ca-IT'
    | 'cgg'
    | 'cgg-UG'
    | 'chr'
    | 'chr-US'
    | 'crh-UA'
    | 'cs'
    | 'cs-CZ'
    | 'csb-PL'
    | 'cv-RU'
    | 'cy'
    | 'cy-GB'
    | 'da'
    | 'da-DK'
    | 'dav'
    | 'dav-KE'
    | 'de'
    | 'de-AT'
    | 'de-BE'
    | 'de-CH'
    | 'de-DE'
    | 'de-LI'
    | 'de-LU'
    | 'dv-MV'
    | 'dz-BT'
    | 'ebu'
    | 'ebu-KE'
    | 'ee'
    | 'ee-GH'
    | 'ee-TG'
    | 'el'
    | 'el-CY'
    | 'el-GR'
    | 'en'
    | 'en-AG'
    | 'en-AS'
    | 'en-AU'
    | 'en-BE'
    | 'en-BW'
    | 'en-BZ'
    | 'en-CA'
    | 'en-DK'
    | 'en-GB'
    | 'en-GU'
    | 'en-HK'
    | 'en-IE'
    | 'en-IN'
    | 'en-JM'
    | 'en-MH'
    | 'en-MP'
    | 'en-MT'
    | 'en-MU'
    | 'en-NA'
    | 'en-NG'
    | 'en-NZ'
    | 'en-PH'
    | 'en-PK'
    | 'en-SG'
    | 'en-TT'
    | 'en-UM'
    | 'en-US'
    | 'en-VI'
    | 'en-ZA'
    | 'en-ZM'
    | 'en-ZW'
    | 'eo'
    | 'es'
    | 'es-419'
    | 'es-AR'
    | 'es-BO'
    | 'es-CL'
    | 'es-CO'
    | 'es-CR'
    | 'es-CU'
    | 'es-DO'
    | 'es-EC'
    | 'es-ES'
    | 'es-GQ'
    | 'es-GT'
    | 'es-HN'
    | 'es-MX'
    | 'es-NI'
    | 'es-PA'
    | 'es-PE'
    | 'es-PR'
    | 'es-PY'
    | 'es-SV'
    | 'es-US'
    | 'es-UY'
    | 'es-VE'
    | 'et'
    | 'et-EE'
    | 'eu'
    | 'eu-ES'
    | 'fa'
    | 'fa-AF'
    | 'fa-IR'
    | 'ff'
    | 'ff-SN'
    | 'fi'
    | 'fi-FI'
    | 'fil'
    | 'fil-PH'
    | 'fo'
    | 'fo-FO'
    | 'fr'
    | 'fr-BE'
    | 'fr-BF'
    | 'fr-BI'
    | 'fr-BJ'
    | 'fr-BL'
    | 'fr-CA'
    | 'fr-CD'
    | 'fr-CF'
    | 'fr-CG'
    | 'fr-CH'
    | 'fr-CI'
    | 'fr-CM'
    | 'fr-DJ'
    | 'fr-FR'
    | 'fr-GA'
    | 'fr-GN'
    | 'fr-GP'
    | 'fr-GQ'
    | 'fr-KM'
    | 'fr-LU'
    | 'fr-MC'
    | 'fr-MF'
    | 'fr-MG'
    | 'fr-ML'
    | 'fr-MQ'
    | 'fr-NE'
    | 'fr-RE'
    | 'fr-RW'
    | 'fr-SN'
    | 'fr-TD'
    | 'fr-TG'
    | 'fur-IT'
    | 'fy-DE'
    | 'fy-NL'
    | 'ga'
    | 'ga-IE'
    | 'gd-GB'
    | 'gez-ER'
    | 'gez-ET'
    | 'gl'
    | 'gl-ES'
    | 'gsw'
    | 'gsw-CH'
    | 'gu'
    | 'gu-IN'
    | 'guz'
    | 'guz-KE'
    | 'gv'
    | 'gv-GB'
    | 'ha'
    | 'ha-Latn'
    | 'ha-Latn-GH'
    | 'ha-Latn-NE'
    | 'ha-Latn-NG'
    | 'ha-NG'
    | 'haw'
    | 'haw-US'
    | 'he'
    | 'he-IL'
    | 'hi'
    | 'hi-IN'
    | 'hne-IN'
    | 'hr'
    | 'hr-HR'
    | 'hsb-DE'
    | 'ht-HT'
    | 'hu'
    | 'hu-HU'
    | 'hy'
    | 'hy-AM'
    | 'id'
    | 'id-ID'
    | 'ig'
    | 'ig-NG'
    | 'ii'
    | 'ii-CN'
    | 'ik-CA'
    | 'is'
    | 'is-IS'
    | 'it'
    | 'it-CH'
    | 'it-IT'
    | 'iu-CA'
    | 'iw-IL'
    | 'ja'
    | 'ja-JP'
    | 'jmc'
    | 'jmc-TZ'
    | 'ka'
    | 'ka-GE'
    | 'kab'
    | 'kab-DZ'
    | 'kam'
    | 'kam-KE'
    | 'kde'
    | 'kde-TZ'
    | 'kea'
    | 'kea-CV'
    | 'khq'
    | 'khq-ML'
    | 'ki'
    | 'ki-KE'
    | 'kk'
    | 'kk-Cyrl'
    | 'kk-Cyrl-KZ'
    | 'kk-KZ'
    | 'kl'
    | 'kl-GL'
    | 'kln'
    | 'kln-KE'
    | 'km'
    | 'km-KH'
    | 'kn'
    | 'kn-IN'
    | 'ko'
    | 'ko-KR'
    | 'kok'
    | 'kok-IN'
    | 'ks-IN'
    | 'ku-TR'
    | 'kw'
    | 'kw-GB'
    | 'ky-KG'
    | 'lag'
    | 'lag-TZ'
    | 'lb-LU'
    | 'lg'
    | 'lg-UG'
    | 'li-BE'
    | 'li-NL'
    | 'lij-IT'
    | 'lo-LA'
    | 'lt'
    | 'lt-LT'
    | 'luo'
    | 'luo-KE'
    | 'luy'
    | 'luy-KE'
    | 'lv'
    | 'lv-LV'
    | 'mag-IN'
    | 'mai-IN'
    | 'mas'
    | 'mas-KE'
    | 'mas-TZ'
    | 'mer'
    | 'mer-KE'
    | 'mfe'
    | 'mfe-MU'
    | 'mg'
    | 'mg-MG'
    | 'mhr-RU'
    | 'mi-NZ'
    | 'mk'
    | 'mk-MK'
    | 'ml'
    | 'ml-IN'
    | 'mn-MN'
    | 'mr'
    | 'mr-IN'
    | 'ms'
    | 'ms-BN'
    | 'ms-MY'
    | 'mt'
    | 'mt-MT'
    | 'my'
    | 'my-MM'
    | 'nan-TW'
    | 'naq'
    | 'naq-NA'
    | 'nb'
    | 'nb-NO'
    | 'nd'
    | 'nd-ZW'
    | 'nds-DE'
    | 'nds-NL'
    | 'ne'
    | 'ne-IN'
    | 'ne-NP'
    | 'nl'
    | 'nl-AW'
    | 'nl-BE'
    | 'nl-NL'
    | 'nn'
    | 'nn-NO'
    | 'nr-ZA'
    | 'nso-ZA'
    | 'nyn'
    | 'nyn-UG'
    | 'oc-FR'
    | 'om'
    | 'om-ET'
    | 'om-KE'
    | 'or'
    | 'or-IN'
    | 'os-RU'
    | 'pa'
    | 'pa-Arab'
    | 'pa-Arab-PK'
    | 'pa-Guru'
    | 'pa-Guru-IN'
    | 'pa-IN'
    | 'pa-PK'
    | 'pap-AN'
    | 'pl'
    | 'pl-PL'
    | 'ps'
    | 'ps-AF'
    | 'pt'
    | 'pt-BR'
    | 'pt-GW'
    | 'pt-MZ'
    | 'pt-PT'
    | 'rm'
    | 'rm-CH'
    | 'ro'
    | 'ro-MD'
    | 'ro-RO'
    | 'rof'
    | 'rof-TZ'
    | 'ru'
    | 'ru-MD'
    | 'ru-RU'
    | 'ru-UA'
    | 'rw'
    | 'rw-RW'
    | 'rwk'
    | 'rwk-TZ'
    | 'sa-IN'
    | 'saq'
    | 'saq-KE'
    | 'sc-IT'
    | 'sd-IN'
    | 'se-NO'
    | 'seh'
    | 'seh-MZ'
    | 'ses'
    | 'ses-ML'
    | 'sg'
    | 'sg-CF'
    | 'shi'
    | 'shi-Latn'
    | 'shi-Latn-MA'
    | 'shi-Tfng'
    | 'shi-Tfng-MA'
    | 'shs-CA'
    | 'si'
    | 'si-LK'
    | 'sid-ET'
    | 'sk'
    | 'sk-SK'
    | 'sl'
    | 'sl-SI'
    | 'sn'
    | 'sn-ZW'
    | 'so'
    | 'so-DJ'
    | 'so-ET'
    | 'so-KE'
    | 'so-SO'
    | 'sq'
    | 'sq-AL'
    | 'sq-MK'
    | 'sr'
    | 'sr-Cyrl'
    | 'sr-Cyrl-BA'
    | 'sr-Cyrl-ME'
    | 'sr-Cyrl-RS'
    | 'sr-Latn'
    | 'sr-Latn-BA'
    | 'sr-Latn-ME'
    | 'sr-Latn-RS'
    | 'sr-ME'
    | 'sr-RS'
    | 'ss-ZA'
    | 'st-ZA'
    | 'sv'
    | 'sv-FI'
    | 'sv-SE'
    | 'sw'
    | 'sw-KE'
    | 'sw-TZ'
    | 'ta'
    | 'ta-IN'
    | 'ta-LK'
    | 'te'
    | 'te-IN'
    | 'teo'
    | 'teo-KE'
    | 'teo-UG'
    | 'tg-TJ'
    | 'th'
    | 'th-TH'
    | 'ti'
    | 'ti-ER'
    | 'ti-ET'
    | 'tig-ER'
    | 'tk-TM'
    | 'tl-PH'
    | 'tn-ZA'
    | 'to'
    | 'to-TO'
    | 'tr'
    | 'tr-CY'
    | 'tr-TR'
    | 'ts-ZA'
    | 'tt-RU'
    | 'tzm'
    | 'tzm-Latn'
    | 'tzm-Latn-MA'
    | 'ug-CN'
    | 'uk'
    | 'uk-UA'
    | 'unm-US'
    | 'ur'
    | 'ur-IN'
    | 'ur-PK'
    | 'uz'
    | 'uz-Arab'
    | 'uz-Arab-AF'
    | 'uz-Cyrl'
    | 'uz-Cyrl-UZ'
    | 'uz-Latn'
    | 'uz-Latn-UZ'
    | 'uz-UZ'
    | 've-ZA'
    | 'vi'
    | 'vi-VN'
    | 'vun'
    | 'vun-TZ'
    | 'wa-BE'
    | 'wae-CH'
    | 'wal-ET'
    | 'wo-SN'
    | 'xh-ZA'
    | 'xog'
    | 'xog-UG'
    | 'yi-US'
    | 'yo'
    | 'yo-NG'
    | 'yue-HK'
    | 'zh'
    | 'zh-CN'
    | 'zh-HK'
    | 'zh-Hans'
    | 'zh-Hans-CN'
    | 'zh-Hans-HK'
    | 'zh-Hans-MO'
    | 'zh-Hans-SG'
    | 'zh-Hant'
    | 'zh-Hant-HK'
    | 'zh-Hant-MO'
    | 'zh-Hant-TW'
    | 'zh-SG'
    | 'zh-TW'
    | 'zu'
    | 'zu-ZA'
    | 'auto';

  /**
   * Sitemap and other methods will be used together to find URLs.
   */
  sitemap?: 'skip' | 'include' | 'only';
}

export interface SearchParams {
  /**
   * Search query string
   */
  query: string;

  /**
   * Filter by content type (only supported with focus=general). Supports semantic
   * groups ('documents', 'spreadsheets', 'presentations') and specific formats
   * ('pdf', 'docx', 'xlsx', etc.)
   */
  content_type?: Array<string> | null;

  country?: string;

  /**
   * If True, fetches and extracts full page content for each search result. If
   * False, returns only metadata (title, snippet, URL)
   */
  deep_search?: boolean;

  /**
   * Filter results before this date (format: YYYY-MM-DD or YYYY)
   */
  end_date?: string | null;

  /**
   * List of domains to exclude from search results. Maximum 50 domains.
   */
  exclude_domains?: Array<string> | null;

  /**
   * Generate LLM answer summary based on search result snippets (works with both
   * deep_search=True and False)
   */
  include_answer?: boolean;

  /**
   * List of domains to include in search results. Maximum 50 domains.
   */
  include_domains?: Array<string> | null;

  locale?: string;

  /**
   * Maximum number of subagents to execute in parallel for WSA focus modes
   * (shopping, social, geo). Ignored for traditional SERP focus modes. Default: 3,
   * Range: 1-5.
   */
  max_subagents?: number;

  /**
   * Maximum number of results to return (actual count may be less)
   */
  num_results?: number;

  /**
   * Output format: plain_text, markdown, or simplified_html
   */
  parsing_type?: 'plain_text' | 'markdown' | 'simplified_html';

  /**
   * Enum representing the search engines supported by Nimble ⚠️ DEPRECATED: This
   * parameter is ignored. Use 'focus' parameter instead.
   */
  search_engine?: 'google_search' | 'google_sge' | 'bing_search' | 'yandex_search' | null;

  /**
   * Filter results after this date (format: YYYY-MM-DD or YYYY)
   */
  start_date?: string | null;

  /**
   * Time range filters passed to Webit SERP API as 'time' parameter.
   */
  time_range?: 'hour' | 'day' | 'week' | 'month' | 'year' | null;

  /**
   * Search focus/specialization (general, news, or location)
   */
  topic?: 'general' | 'news' | 'location' | 'coding' | 'academic' | 'geo' | 'shopping' | 'social';
}

export declare namespace TopLevel {
  export {
    type AgentResponse as AgentResponse,
    type CrawlResponse as CrawlResponse,
    type ExtractResponse as ExtractResponse,
    type MapResponse as MapResponse,
    type SearchResponse as SearchResponse,
    type AgentParams as AgentParams,
    type CrawlParams as CrawlParams,
    type ExtractParams as ExtractParams,
    type MapParams as MapParams,
    type SearchParams as SearchParams,
  };
}
