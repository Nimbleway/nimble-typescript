// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
     * Screenshots taken during the task, from browser actions, or the screenshot
     * format.
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
   * platform-specific data in additional_data and typed metadata.
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

    /**
     * Platform-specific fields (e.g., price, rating, publish_date). Omitted from
     * response when no extra data.
     */
    additional_data?: { [key: string]: unknown } | null;
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
   * Array of browser automation actions to execute sequentially
   */
  browser_actions?: Array<
    | ExtractParams.AutoScrollAction
    | ExtractParams.ClickAction
    | ExtractParams.EvalAction
    | ExtractParams.FetchAction
    | ExtractParams.FillAction
    | ExtractParams.GetCookiesAction
    | ExtractParams.GotoAction
    | ExtractParams.PressAction
    | ExtractParams.ScreenshotAction
    | ExtractParams.ScrollAction
    | ExtractParams.WaitAction
    | ExtractParams.WaitForElementAction
    | ExtractParams.WaitForNavigationAction
  >;

  /**
   * City for geolocation
   */
  city?: string;

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
  formats?: Array<'html' | 'markdown' | 'screenshot'>;

  /**
   * Custom HTTP headers to include in the request
   */
  headers?: { [key: string]: string | Array<string> | null };

  /**
   * Whether to use HTTP/2 protocol
   */
  http2?: boolean;

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
   * HTTP method for the request
   */
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

  /**
   * Filters for capturing network traffic
   */
  network_capture?: Array<ExtractParams.NetworkCapture>;

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
   * Request timeout in milliseconds
   */
  request_timeout?: number;

  session?: ExtractParams.Session;

  /**
   * Skills or capabilities required for the request
   */
  skill?: string | Array<string>;

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
}

export namespace ExtractParams {
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

  export interface Session {
    id?: string;

    prefetch_userbrowser?: boolean;

    retry?: boolean;

    timeout?: number;
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
   * Range: 1-10.
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
   * Search focus/specialization. Can be a single focus mode (e.g., 'shopping',
   * 'social') or a list of explicit subagent names (e.g., ['amazon_serp',
   * 'target_serp'])
   */
  topic?: string | Array<string>;
}

export declare namespace TopLevel {
  export {
    type ExtractResponse as ExtractResponse,
    type MapResponse as MapResponse,
    type SearchResponse as SearchResponse,
    type ExtractParams as ExtractParams,
    type MapParams as MapParams,
    type SearchParams as SearchParams,
  };
}
