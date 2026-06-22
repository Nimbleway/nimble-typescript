// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class FastSerp extends APIResource {
  /**
   * Fast SERP
   *
   * @example
   * ```ts
   * const response = await client.fastSerp.run({
   *   search_engine: 'google_search',
   * });
   * ```
   */
  run(body: FastSerpRunParams, options?: RequestOptions): APIPromise<FastSerpRunResponse> {
    return this._client.post('/v1/fast-serp', { body, ...options });
  }
}

export interface FastSerpRunResponse {
  data: FastSerpRunResponse.Data;

  metadata: FastSerpRunResponse.Metadata;

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

  debug?: FastSerpRunResponse.Debug;

  /**
   * Pagination information if applicable.
   */
  pagination?: FastSerpRunResponse.NextPageParams | Array<FastSerpRunResponse.UnionMember1>;

  /**
   * The HTTP status code of the task.
   */
  status_code?: number;

  /**
   * List of warnings generated during the task.
   */
  warnings?: Array<string>;
}

export namespace FastSerpRunResponse {
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
     * List of all unique URLs found on the page.
     */
    links?: Array<string>;

    /**
     * The Markdown version of the HTML content.
     */
    markdown?: string;

    /**
     * The network capture data collected during the task.
     */
    network_capture?: Array<Data.NetworkCapture>;

    /**
     * Individual HTML content of each pagination page, before merging.
     */
    pages_html?: Array<string>;

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

export interface FastSerpRunParams {
  /**
   * The search engine to query.
   */
  search_engine:
    | 'google_search'
    | 'google_sge'
    | 'google_aio'
    | 'google_maps_search'
    | 'google_maps_reviews'
    | 'google_maps_place'
    | 'google_news'
    | 'google_images'
    | 'bing_search'
    | 'yandex_search';

  /**
   * ISO Alpha-2 country code used to access the target search engine (e.g. US, DE,
   * GB).
   */
  country?: string;

  /**
   * Device type used for the search request.
   */
  device?: 'desktop' | 'mobile';

  /**
   * Top-level domain for the search engine (e.g. "com", "co.uk", "de").
   */
  domain?: string;

  /**
   * Locale used for the search request.
   */
  locale?: string;

  /**
   * Geo-location for the search (canonical Google location name).
   */
  location?: string;

  /**
   * Number of results to return (1–100).
   */
  num_results?: number;

  /**
   * The result page number for pagination.
   */
  page?: number;

  /**
   * When true, the SERP response is parsed into structured JSON.
   */
  parse?: boolean;

  /**
   * The search keyword or phrase to query.
   */
  query?: string;

  /**
   * Whether to render the page in a browser before extracting.
   */
  render?: boolean;

  /**
   * When true, disables Google result filtering (filter=0) so omitted/duplicate and
   * highly similar pages are also returned. Applies to Google search engines.
   */
  show_hidden_results?: boolean;
}

export declare namespace FastSerp {
  export { type FastSerpRunResponse as FastSerpRunResponse, type FastSerpRunParams as FastSerpRunParams };
}
