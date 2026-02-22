// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Agents extends APIResource {
  /**
   * List Templates
   */
  list(
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListResponse> {
    return this._client.get('/v1/agents', { query, ...options });
  }

  /**
   * Execute WSA Async Endpoint
   */
  async(body: AgentAsyncParams, options?: RequestOptions): APIPromise<AgentAsyncResponse> {
    return this._client.post('/v1/agents/async', { body, ...options });
  }

  /**
   * Get Template
   */
  get(templateName: string, options?: RequestOptions): APIPromise<AgentGetResponse> {
    return this._client.get(path`/v1/agents/${templateName}`, options);
  }

  /**
   * Execute WSA Realtime Endpoint
   */
  run(body: AgentRunParams, options?: RequestOptions): APIPromise<AgentRunResponse> {
    return this._client.post('/v1/agents/run', { body, ...options });
  }
}

export type AgentListResponse = Array<AgentListResponse.AgentListResponseItem>;

export namespace AgentListResponse {
  export interface AgentListResponseItem {
    display_name: string;

    is_public: boolean;

    name: string;

    description?: string | null;

    domain?: string | null;

    entity_type?: string | null;

    vertical?: string | null;
  }
}

export interface AgentAsyncResponse {
  status: 'success';

  task: { [key: string]: unknown };
}

export interface AgentGetResponse {
  display_name: string;

  is_public: boolean;

  name: string;

  description?: string | null;

  domain?: string | null;

  entity_type?: string | null;

  feature_flags?: AgentGetResponse.FeatureFlags;

  input_properties?: Array<AgentGetResponse.InputProperty> | null;

  output_schema?: { [key: string]: unknown } | null;

  vertical?: string | null;
}

export namespace AgentGetResponse {
  export interface FeatureFlags {
    is_localization_supported?: boolean;

    is_pagination_supported?: boolean;
  }

  export interface InputProperty {
    default?: string | null;

    description?: string | null;

    examples?: Array<string> | null;

    name?: string;

    required?: boolean;

    rules?: Array<string> | null;

    type?: string;
  }
}

export interface AgentRunResponse {
  data: AgentRunResponse.Data;

  metadata: AgentRunResponse.Metadata;

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

  debug?: AgentRunResponse.Debug;

  /**
   * Pagination information if applicable.
   */
  pagination?: AgentRunResponse.NextPageParams | Array<AgentRunResponse.UnionMember1>;

  /**
   * The HTTP status code of the task.
   */
  status_code?: number;

  /**
   * List of warnings generated during the task.
   */
  warnings?: Array<string>;
}

export namespace AgentRunResponse {
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

export interface AgentListParams {
  /**
   * Number of results per page
   */
  limit?: number;

  /**
   * Pagination offset
   */
  offset?: number;

  /**
   * Filter by privacy level
   */
  privacy?: 'public' | 'private' | 'all';
}

export interface AgentAsyncParams {
  agent: string;

  params: { [key: string]: unknown };

  /**
   * URL to call back when async operation completes
   */
  callback_url?: string;

  localization?: boolean;

  /**
   * Whether to compress stored data
   */
  storage_compress?: boolean;

  /**
   * Custom name for the stored object
   */
  storage_object_name?: string;

  /**
   * Type of storage to use for results
   */
  storage_type?: string;

  /**
   * URL for storage location
   */
  storage_url?: string;
}

export interface AgentRunParams {
  agent: string;

  params: { [key: string]: unknown };

  localization?: boolean;
}

export declare namespace Agents {
  export {
    type AgentListResponse as AgentListResponse,
    type AgentAsyncResponse as AgentAsyncResponse,
    type AgentGetResponse as AgentGetResponse,
    type AgentRunResponse as AgentRunResponse,
    type AgentListParams as AgentListParams,
    type AgentAsyncParams as AgentAsyncParams,
    type AgentRunParams as AgentRunParams,
  };
}
