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
     * Browser actions execution results. Present only when browser_actions were
     * specified in the request.
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
    parsing?: Data.ParsingSuccessResult | Data.ParsingErrorResult | { [key: string]: unknown };

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
     * Browser actions execution results. Present only when browser_actions were
     * specified in the request.
     */
    export interface BrowserActions {
      results: Array<BrowserActions.Result>;

      success: boolean;

      total_duration: number;
    }

    export namespace BrowserActions {
      export interface Result {
        duration: number;

        name:
          | 'goto'
          | 'wait'
          | 'wait_for_element'
          | 'wait_for_navigation'
          | 'click'
          | 'fill'
          | 'press'
          | 'scroll'
          | 'auto_scroll'
          | 'screenshot'
          | 'get_cookies'
          | 'eval'
          | 'fetch';

        status: 'no-run' | 'in-progress' | 'done' | 'error' | 'skipped';

        error?: string;

        result?: unknown;
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

    export interface ParsingSuccessResult {
      entities: { [key: string]: unknown };

      status: 'success';
    }

    export interface ParsingErrorResult {
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
     * The name of the agent used for the query.
     */
    agent?: string;

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
 * Crawl API response
 */
export interface CrawlResponse {
  account_name: string;

  crawl_id: string;

  crawl_options: CrawlResponse.CrawlOptions;

  created_at: string | { [key: string]: unknown };

  status: 'queued' | 'running' | 'succeeded' | 'failed' | 'canceled';

  updated_at: string | { [key: string]: unknown };

  url: string;

  completed?: number;

  completed_at?: string | { [key: string]: unknown } | null;

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
    status: 'pending' | 'completed' | 'failed';

    task_id: string;

    created_at?: string;

    updated_at?: string;
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
     * Array of browser automation actions to execute sequentially
     */
    browser_actions?: Array<
      | ExtractOptions.AutoScrollAction
      | ExtractOptions.ClickAction
      | ExtractOptions.EvalAction
      | ExtractOptions.FetchAction
      | ExtractOptions.FillAction
      | ExtractOptions.GetCookiesAction
      | ExtractOptions.GotoAction
      | ExtractOptions.PressAction
      | ExtractOptions.ScreenshotAction
      | ExtractOptions.ScrollAction
      | ExtractOptions.WaitAction
      | ExtractOptions.WaitForElementAction
      | ExtractOptions.WaitForNavigationAction
    >;

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
     * Expected HTTP status codes for successful requests
     */
    expected_status_codes?: Array<number>;

    /**
     * List of acceptable response formats in order of preference
     */
    formats?: Array<'html' | 'markdown'>;

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

    /**
     * Continuously scroll to load dynamic content
     */
    export interface AutoScrollAction {
      auto_scroll: boolean | number | string | AutoScrollAction.UnionMember3;
    }

    export namespace AutoScrollAction {
      export interface UnionMember3 {
        /**
         * CSS selector or array of alternative selectors. Use an array when you have
         * multiple possible selectors for the same element.
         */
        click_selector?: string | Array<string>;

        /**
         * CSS selector or array of alternative selectors. Use an array when you have
         * multiple possible selectors for the same element.
         */
        container?: string | Array<string>;

        /**
         * Duration value that accepts various formats. Supports: number (ms), string
         * ("1000"), or string with unit ("2s", "500ms", "2m", "1h")
         */
        delay_after_scroll?: number | string;

        /**
         * Duration value that accepts various formats. Supports: number (ms), string
         * ("1000"), or string with unit ("2s", "500ms", "2m", "1h")
         */
        idle_timeout?: number | string;

        /**
         * CSS selector or array of alternative selectors. Use an array when you have
         * multiple possible selectors for the same element.
         */
        loading_selector?: string | Array<string>;

        /**
         * Duration value that accepts various formats. Supports: number (ms), string
         * ("1000"), or string with unit ("2s", "500ms", "2m", "1h")
         */
        max_duration?: number | string;

        /**
         * CSS selector or array of alternative selectors. Use an array when you have
         * multiple possible selectors for the same element.
         */
        pause_on_selector?: string | Array<string>;

        /**
         * Whether this action is required. If true, pipeline stops on failure. Accepts
         * boolean or string "true"/"false". Default: true.
         */
        required?: 'true' | 'false' | boolean;

        /**
         * Whether to skip this action. Accepts boolean or string "true"/"false". Default:
         * false.
         */
        skip?: 'true' | 'false' | boolean;

        step_size?: number;
      }
    }

    /**
     * Click on an element by selector
     */
    export interface ClickAction {
      click: string | Array<string> | ClickAction.UnionMember2;
    }

    export namespace ClickAction {
      export interface UnionMember2 {
        /**
         * CSS selector or array of alternative selectors. Use an array when you have
         * multiple possible selectors for the same element.
         */
        selector: string | Array<string>;

        count?: number;

        /**
         * Duration value that accepts various formats. Supports: number (ms), string
         * ("1000"), or string with unit ("2s", "500ms", "2m", "1h")
         */
        delay?: number | string;

        offset_x?: number;

        offset_y?: number;

        /**
         * Whether this action is required. If true, pipeline stops on failure. Accepts
         * boolean or string "true"/"false". Default: true.
         */
        required?: 'true' | 'false' | boolean;

        scroll?: boolean;

        /**
         * Whether to skip this action. Accepts boolean or string "true"/"false". Default:
         * false.
         */
        skip?: 'true' | 'false' | boolean;

        steps?: number;

        strategy?: 'linear' | 'ghost-cursor' | 'windmouse';

        /**
         * Timeout in milliseconds. Set to 0 for infinite timeout (no timeout). Default:
         * 15000ms.
         */
        timeout?: number;

        visible?: boolean;
      }
    }

    /**
     * Execute JavaScript code in page context
     */
    export interface EvalAction {
      eval: string | EvalAction.UnionMember1;
    }

    export namespace EvalAction {
      export interface UnionMember1 {
        code: string;

        /**
         * Whether this action is required. If true, pipeline stops on failure. Accepts
         * boolean or string "true"/"false". Default: true.
         */
        required?: 'true' | 'false' | boolean;

        /**
         * Whether to skip this action. Accepts boolean or string "true"/"false". Default:
         * false.
         */
        skip?: 'true' | 'false' | boolean;

        /**
         * Timeout in milliseconds. Set to 0 for infinite timeout (no timeout). Default:
         * 15000ms.
         */
        timeout?: number;
      }
    }

    /**
     * Make an HTTP request in browser context
     */
    export interface FetchAction {
      fetch: string | FetchAction.UnionMember1;
    }

    export namespace FetchAction {
      export interface UnionMember1 {
        url: string;

        body?: string;

        headers?: { [key: string]: string };

        method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';

        /**
         * Whether this action is required. If true, pipeline stops on failure. Accepts
         * boolean or string "true"/"false". Default: true.
         */
        required?: 'true' | 'false' | boolean;

        /**
         * Whether to skip this action. Accepts boolean or string "true"/"false". Default:
         * false.
         */
        skip?: 'true' | 'false' | boolean;

        /**
         * Timeout in milliseconds. Set to 0 for infinite timeout (no timeout). Default:
         * 15000ms.
         */
        timeout?: number;
      }
    }

    /**
     * Fill text into an input field
     */
    export interface FillAction {
      /**
       * Fill options with mode-specific fields. Use "type" mode for behavioral typing
       * simulation, or "paste" mode for instant paste.
       */
      fill: FillAction.Type | FillAction.Paste;
    }

    export namespace FillAction {
      export interface Type {
        /**
         * CSS selector or array of alternative selectors. Use an array when you have
         * multiple possible selectors for the same element.
         */
        selector: string | Array<string>;

        value: string;

        click_on_element?: boolean;

        /**
         * Duration value that accepts various formats. Supports: number (ms), string
         * ("1000"), or string with unit ("2s", "500ms", "2m", "1h")
         */
        delay?: number | string;

        mode?: 'type';

        mouse_movement_strategy?: 'linear' | 'ghost-cursor' | 'windmouse';

        /**
         * Whether this action is required. If true, pipeline stops on failure. Accepts
         * boolean or string "true"/"false". Default: true.
         */
        required?: 'true' | 'false' | boolean;

        scroll?: boolean;

        /**
         * Whether to skip this action. Accepts boolean or string "true"/"false". Default:
         * false.
         */
        skip?: 'true' | 'false' | boolean;

        /**
         * Timeout in milliseconds. Set to 0 for infinite timeout (no timeout). Default:
         * 15000ms.
         */
        timeout?: number;

        /**
         * Duration value that accepts various formats. Supports: number (ms), string
         * ("1000"), or string with unit ("2s", "500ms", "2m", "1h")
         */
        typing_interval?: number | string;

        typing_strategy?: 'simple' | 'distribution';

        visible?: boolean;
      }

      export interface Paste {
        mode: 'paste';

        /**
         * CSS selector or array of alternative selectors. Use an array when you have
         * multiple possible selectors for the same element.
         */
        selector: string | Array<string>;

        value: string;

        click_on_element?: boolean;

        /**
         * Duration value that accepts various formats. Supports: number (ms), string
         * ("1000"), or string with unit ("2s", "500ms", "2m", "1h")
         */
        delay?: number | string;

        /**
         * Whether this action is required. If true, pipeline stops on failure. Accepts
         * boolean or string "true"/"false". Default: true.
         */
        required?: 'true' | 'false' | boolean;

        scroll?: boolean;

        /**
         * Whether to skip this action. Accepts boolean or string "true"/"false". Default:
         * false.
         */
        skip?: 'true' | 'false' | boolean;

        /**
         * Timeout in milliseconds. Set to 0 for infinite timeout (no timeout). Default:
         * 15000ms.
         */
        timeout?: number;

        visible?: boolean;
      }
    }

    /**
     * Retrieve browser cookies
     */
    export interface GetCookiesAction {
      get_cookies: boolean | GetCookiesAction.UnionMember1;
    }

    export namespace GetCookiesAction {
      export interface UnionMember1 {
        /**
         * Whether this action is required. If true, pipeline stops on failure. Accepts
         * boolean or string "true"/"false". Default: true.
         */
        required?: 'true' | 'false' | boolean;

        /**
         * Whether to skip this action. Accepts boolean or string "true"/"false". Default:
         * false.
         */
        skip?: 'true' | 'false' | boolean;

        [k: string]: unknown;
      }
    }

    /**
     * Navigate to a URL
     */
    export interface GotoAction {
      goto: string | GotoAction.UnionMember1;
    }

    export namespace GotoAction {
      export interface UnionMember1 {
        url: string;

        referer?: string;

        /**
         * Whether this action is required. If true, pipeline stops on failure. Accepts
         * boolean or string "true"/"false". Default: true.
         */
        required?: 'true' | 'false' | boolean;

        /**
         * Whether to skip this action. Accepts boolean or string "true"/"false". Default:
         * false.
         */
        skip?: 'true' | 'false' | boolean;

        /**
         * Timeout in milliseconds. Set to 0 for infinite timeout (no timeout). Default:
         * 15000ms.
         */
        timeout?: number;

        wait_until?: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2';
      }
    }

    /**
     * Press a keyboard key
     */
    export interface PressAction {
      press: string | PressAction.UnionMember1;
    }

    export namespace PressAction {
      export interface UnionMember1 {
        key:
          | '0'
          | '1'
          | '2'
          | '3'
          | '4'
          | '5'
          | '6'
          | '7'
          | '8'
          | '9'
          | 'Power'
          | 'Eject'
          | 'Abort'
          | 'Help'
          | 'Backspace'
          | 'Tab'
          | 'Numpad5'
          | 'NumpadEnter'
          | 'Enter'
          | '\r'
          | '\n'
          | 'ShiftLeft'
          | 'ShiftRight'
          | 'ControlLeft'
          | 'ControlRight'
          | 'AltLeft'
          | 'AltRight'
          | 'Pause'
          | 'CapsLock'
          | 'Escape'
          | 'Convert'
          | 'NonConvert'
          | 'Space'
          | 'Numpad9'
          | 'PageUp'
          | 'Numpad3'
          | 'PageDown'
          | 'End'
          | 'Numpad1'
          | 'Home'
          | 'Numpad7'
          | 'ArrowLeft'
          | 'Numpad4'
          | 'Numpad8'
          | 'ArrowUp'
          | 'ArrowRight'
          | 'Numpad6'
          | 'Numpad2'
          | 'ArrowDown'
          | 'Select'
          | 'Open'
          | 'PrintScreen'
          | 'Insert'
          | 'Numpad0'
          | 'Delete'
          | 'NumpadDecimal'
          | 'Digit0'
          | 'Digit1'
          | 'Digit2'
          | 'Digit3'
          | 'Digit4'
          | 'Digit5'
          | 'Digit6'
          | 'Digit7'
          | 'Digit8'
          | 'Digit9'
          | 'KeyA'
          | 'KeyB'
          | 'KeyC'
          | 'KeyD'
          | 'KeyE'
          | 'KeyF'
          | 'KeyG'
          | 'KeyH'
          | 'KeyI'
          | 'KeyJ'
          | 'KeyK'
          | 'KeyL'
          | 'KeyM'
          | 'KeyN'
          | 'KeyO'
          | 'KeyP'
          | 'KeyQ'
          | 'KeyR'
          | 'KeyS'
          | 'KeyT'
          | 'KeyU'
          | 'KeyV'
          | 'KeyW'
          | 'KeyX'
          | 'KeyY'
          | 'KeyZ'
          | 'MetaLeft'
          | 'MetaRight'
          | 'ContextMenu'
          | 'NumpadMultiply'
          | 'NumpadAdd'
          | 'NumpadSubtract'
          | 'NumpadDivide'
          | 'F1'
          | 'F2'
          | 'F3'
          | 'F4'
          | 'F5'
          | 'F6'
          | 'F7'
          | 'F8'
          | 'F9'
          | 'F10'
          | 'F11'
          | 'F12'
          | 'F13'
          | 'F14'
          | 'F15'
          | 'F16'
          | 'F17'
          | 'F18'
          | 'F19'
          | 'F20'
          | 'F21'
          | 'F22'
          | 'F23'
          | 'F24'
          | 'NumLock'
          | 'ScrollLock'
          | 'AudioVolumeMute'
          | 'AudioVolumeDown'
          | 'AudioVolumeUp'
          | 'MediaTrackNext'
          | 'MediaTrackPrevious'
          | 'MediaStop'
          | 'MediaPlayPause'
          | 'Semicolon'
          | 'Equal'
          | 'NumpadEqual'
          | 'Comma'
          | 'Minus'
          | 'Period'
          | 'Slash'
          | 'Backquote'
          | 'BracketLeft'
          | 'Backslash'
          | 'BracketRight'
          | 'Quote'
          | 'AltGraph'
          | 'Props'
          | 'Cancel'
          | 'Clear'
          | 'Shift'
          | 'Control'
          | 'Alt'
          | 'Accept'
          | 'ModeChange'
          | ' '
          | 'Print'
          | 'Execute'
          | ' '
          | 'a'
          | 'b'
          | 'c'
          | 'd'
          | 'e'
          | 'f'
          | 'g'
          | 'h'
          | 'i'
          | 'j'
          | 'k'
          | 'l'
          | 'm'
          | 'n'
          | 'o'
          | 'p'
          | 'q'
          | 'r'
          | 's'
          | 't'
          | 'u'
          | 'v'
          | 'w'
          | 'x'
          | 'y'
          | 'z'
          | 'Meta'
          | '*'
          | '+'
          | '-'
          | '/'
          | ';'
          | '='
          | ','
          | '.'
          | '`'
          | '['
          | '\\'
          | ']'
          | "'"
          | 'Attn'
          | 'CrSel'
          | 'ExSel'
          | 'EraseEof'
          | 'Play'
          | 'ZoomOut'
          | ')'
          | '!'
          | '@'
          | '#'
          | '$'
          | '%'
          | '^'
          | '&'
          | '('
          | 'A'
          | 'B'
          | 'C'
          | 'D'
          | 'E'
          | 'F'
          | 'G'
          | 'H'
          | 'I'
          | 'J'
          | 'K'
          | 'L'
          | 'M'
          | 'N'
          | 'O'
          | 'P'
          | 'Q'
          | 'R'
          | 'S'
          | 'T'
          | 'U'
          | 'V'
          | 'W'
          | 'X'
          | 'Y'
          | 'Z'
          | ':'
          | '<'
          | '_'
          | '>'
          | '?'
          | '~'
          | '{'
          | '|'
          | '}'
          | '"'
          | 'SoftLeft'
          | 'SoftRight'
          | 'Camera'
          | 'Call'
          | 'EndCall'
          | 'VolumeDown'
          | 'VolumeUp';

        /**
         * Duration value that accepts various formats. Supports: number (ms), string
         * ("1000"), or string with unit ("2s", "500ms", "2m", "1h")
         */
        delay?: number | string;

        /**
         * Whether this action is required. If true, pipeline stops on failure. Accepts
         * boolean or string "true"/"false". Default: true.
         */
        required?: 'true' | 'false' | boolean;

        /**
         * Whether to skip this action. Accepts boolean or string "true"/"false". Default:
         * false.
         */
        skip?: 'true' | 'false' | boolean;
      }
    }

    /**
     * Capture a page screenshot
     */
    export interface ScreenshotAction {
      screenshot: boolean | ScreenshotAction.UnionMember1;
    }

    export namespace ScreenshotAction {
      export interface UnionMember1 {
        format?: 'png' | 'jpeg' | 'webp';

        full_page?: boolean;

        quality?: number;

        /**
         * Whether this action is required. If true, pipeline stops on failure. Accepts
         * boolean or string "true"/"false". Default: true.
         */
        required?: 'true' | 'false' | boolean;

        /**
         * Whether to skip this action. Accepts boolean or string "true"/"false". Default:
         * false.
         */
        skip?: 'true' | 'false' | boolean;
      }
    }

    /**
     * Scroll the page or an element
     */
    export interface ScrollAction {
      scroll: number | string | ScrollAction.UnionMember2;
    }

    export namespace ScrollAction {
      export interface UnionMember2 {
        /**
         * CSS selector or array of alternative selectors. Use an array when you have
         * multiple possible selectors for the same element.
         */
        container?: string | Array<string>;

        /**
         * Whether this action is required. If true, pipeline stops on failure. Accepts
         * boolean or string "true"/"false". Default: true.
         */
        required?: 'true' | 'false' | boolean;

        /**
         * Whether to skip this action. Accepts boolean or string "true"/"false". Default:
         * false.
         */
        skip?: 'true' | 'false' | boolean;

        /**
         * CSS selector or array of alternative selectors. Use an array when you have
         * multiple possible selectors for the same element.
         */
        to?: string | Array<string>;

        visible?: boolean;

        x?: number;

        y?: number;
      }
    }

    /**
     * Wait for a specified duration
     */
    export interface WaitAction {
      wait: number | string | WaitAction.UnionMember2;
    }

    export namespace WaitAction {
      export interface UnionMember2 {
        /**
         * Duration value that accepts various formats. Supports: number (ms), string
         * ("1000"), or string with unit ("2s", "500ms", "2m", "1h")
         */
        duration: number | string;

        /**
         * Whether this action is required. If true, pipeline stops on failure. Accepts
         * boolean or string "true"/"false". Default: true.
         */
        required?: 'true' | 'false' | boolean;

        /**
         * Whether to skip this action. Accepts boolean or string "true"/"false". Default:
         * false.
         */
        skip?: 'true' | 'false' | boolean;
      }
    }

    /**
     * Wait for an element to appear or reach a specific state
     */
    export interface WaitForElementAction {
      wait_for_element: string | Array<string> | WaitForElementAction.UnionMember2;
    }

    export namespace WaitForElementAction {
      export interface UnionMember2 {
        /**
         * CSS selector or array of alternative selectors. Use an array when you have
         * multiple possible selectors for the same element.
         */
        selector: string | Array<string>;

        /**
         * Whether this action is required. If true, pipeline stops on failure. Accepts
         * boolean or string "true"/"false". Default: true.
         */
        required?: 'true' | 'false' | boolean;

        /**
         * Whether to skip this action. Accepts boolean or string "true"/"false". Default:
         * false.
         */
        skip?: 'true' | 'false' | boolean;

        /**
         * Timeout in milliseconds. Set to 0 for infinite timeout (no timeout). Default:
         * 15000ms.
         */
        timeout?: number;

        visible?: boolean;
      }
    }

    /**
     * Wait for page navigation to complete
     */
    export interface WaitForNavigationAction {
      wait_for_navigation:
        | 'load'
        | 'domcontentloaded'
        | 'networkidle0'
        | 'networkidle2'
        | WaitForNavigationAction.UnionMember1;
    }

    export namespace WaitForNavigationAction {
      export interface UnionMember1 {
        navigation: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2';

        /**
         * Whether this action is required. If true, pipeline stops on failure. Accepts
         * boolean or string "true"/"false". Default: true.
         */
        required?: 'true' | 'false' | boolean;

        /**
         * Whether to skip this action. Accepts boolean or string "true"/"false". Default:
         * false.
         */
        skip?: 'true' | 'false' | boolean;

        /**
         * Timeout in milliseconds. Set to 0 for infinite timeout (no timeout). Default:
         * 15000ms.
         */
        timeout?: number;
      }
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
      account_name?: string;

      api_type?: string;

      crawl_depth?: number;

      crawl_id?: string;

      definition_id?: number;

      definition_name?: string;

      endpoint?: string;

      execution_id?: string;

      flowit_task_id?: string;

      input_id?: string;

      is_public_wsa?: boolean;

      is_sitemap?: boolean;

      is_wsa?: boolean;

      parser_id?: string;

      pipeline_execution_id?: number;

      query_template_id?: string;

      source?: string;

      template_id?: number;

      template_name?: string;

      wsa_id?: string;

      wsa_name?: string;

      wsa_version?: number;
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

export declare namespace TopLevel {
  export {
    type AgentResponse as AgentResponse,
    type CrawlResponse as CrawlResponse,
    type MapResponse as MapResponse,
    type AgentParams as AgentParams,
    type CrawlParams as CrawlParams,
    type MapParams as MapParams,
  };
}
