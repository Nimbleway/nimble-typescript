// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as GenerationsAPI from './generations';
import {
  GenerationCreateParams,
  GenerationCreateResponse,
  GenerationGetResponse,
  Generations,
} from './generations';
import * as VersionsAPI from './versions';
import {
  VersionGetParams,
  VersionGetResponse,
  VersionListParams,
  VersionListResponse,
  Versions,
} from './versions';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Templates extends APIResource {
  generations: GenerationsAPI.Generations = new GenerationsAPI.Generations(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Patch Extract Template Public V2
   *
   * @example
   * ```ts
   * const template = await client.extract.templates.update(
   *   'extract_template_name',
   *   { body: [{ op: 'add', path: 'path' }] },
   * );
   * ```
   */
  update(
    extractTemplateName: string,
    params: TemplateUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TemplateUpdateResponse> {
    const { body } = params;
    return this._client.patch(path`/v2/extract/templates/${extractTemplateName}`, { body: body, ...options });
  }

  /**
   * List Extract Templates Public V2
   *
   * @example
   * ```ts
   * const templates = await client.extract.templates.list();
   * ```
   */
  list(
    query: TemplateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TemplateListResponse> {
    return this._client.get('/v2/extract/templates', { query, ...options });
  }

  /**
   * Delete Extract Template Public V2
   *
   * @example
   * ```ts
   * await client.extract.templates.delete(
   *   'extract_template_name',
   * );
   * ```
   */
  delete(extractTemplateName: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/extract/templates/${extractTemplateName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Execute Extraction Template Async Endpoint
   *
   * @example
   * ```ts
   * const response = await client.extract.templates.async({
   *   params: { foo: 'bar' },
   *   template: 'template',
   * });
   * ```
   */
  async(body: TemplateAsyncParams, options?: RequestOptions): APIPromise<TemplateAsyncResponse> {
    return this._client.post('/v2/extract/templates/async', { body, ...options });
  }

  /**
   * Execute Extraction Template Batch Endpoint
   *
   * @example
   * ```ts
   * const response = await client.extract.templates.batch({
   *   inputs: [{}],
   *   shared_inputs: { template: 'template' },
   * });
   * ```
   */
  batch(body: TemplateBatchParams, options?: RequestOptions): APIPromise<TemplateBatchResponse> {
    return this._client.post('/v2/extract/templates/batch', { body, ...options });
  }

  /**
   * Get Extract Template Public V2
   *
   * @example
   * ```ts
   * const template = await client.extract.templates.get(
   *   'extract_template_name',
   * );
   * ```
   */
  get(extractTemplateName: string, options?: RequestOptions): APIPromise<TemplateGetResponse> {
    return this._client.get(path`/v2/extract/templates/${extractTemplateName}`, options);
  }

  /**
   * Execute Extraction Template Realtime Endpoint
   *
   * @example
   * ```ts
   * const response = await client.extract.templates.run({
   *   params: { foo: 'bar' },
   *   template: 'template',
   * });
   * ```
   */
  run(body: TemplateRunParams, options?: RequestOptions): APIPromise<TemplateRunResponse> {
    return this._client.post('/v2/extract/templates/run', { body, ...options });
  }
}

export interface TemplateUpdateResponse {
  /**
   * Unique extract template identifier.
   */
  id: string;

  /**
   * When the extract template was created.
   */
  created_at: string;

  /**
   * Stable extract template name.
   */
  name: string;

  /**
   * When the extract template was last updated.
   */
  updated_at: string;

  /**
   * Published version details, when available.
   */
  published_version?: TemplateUpdateResponse.PublishedVersion | null;

  /**
   * Identifier of the published version.
   */
  published_version_id?: string | null;
}

export namespace TemplateUpdateResponse {
  /**
   * Published version details, when available.
   */
  export interface PublishedVersion {
    /**
     * Unique extract template version identifier.
     */
    id: string;

    /**
     * When the version was created.
     */
    created_at: string;

    /**
     * JSON schema describing accepted input parameters.
     */
    input_schema: { [key: string]: unknown };

    /**
     * Metadata associated with this version.
     */
    metadata: PublishedVersion.Metadata;

    /**
     * Extract template name this version belongs to.
     */
    name: string;

    /**
     * JSON schema describing extracted output.
     */
    output_schema: { [key: string]: unknown };

    /**
     * Monotonic version number for the extract template.
     */
    version_number: number;

    /**
     * Sample input and output pairs for the version.
     */
    samples?: Array<PublishedVersion.Sample> | null;
  }

  export namespace PublishedVersion {
    /**
     * Metadata associated with this version.
     */
    export interface Metadata {
      /**
       * Data source associated with the version.
       */
      data_source?: string | null;

      /**
       * Version description shown to users.
       */
      description?: string | null;

      /**
       * Human-friendly version display name.
       */
      display_name?: string | null;

      /**
       * Domain associated with the version.
       */
      domain?: string | null;

      /**
       * Entity type produced by the version.
       */
      entity_type?: string | null;

      /**
       * Tags associated with the version.
       */
      tags?: Array<string>;

      /**
       * Business vertical associated with the version.
       */
      vertical?: string | null;
    }

    export interface Sample {
      /**
       * Sample input parameters for the version.
       */
      input?: unknown;

      /**
       * Sample output produced by the version.
       */
      output?: unknown;
    }
  }
}

export interface TemplateListResponse {
  /**
   * Items returned in this page.
   */
  items: Array<TemplateListResponse.Item>;

  /**
   * Maximum number of items returned.
   */
  limit: number;

  /**
   * Number of items skipped before this page.
   */
  offset: number;

  /**
   * Total number of items matching the query.
   */
  total: number;
}

export namespace TemplateListResponse {
  export interface Item {
    /**
     * Unique extract template identifier.
     */
    id: string;

    /**
     * When the extract template was created.
     */
    created_at: string;

    /**
     * Stable extract template name.
     */
    name: string;

    /**
     * When the extract template was last updated.
     */
    updated_at: string;

    /**
     * Published version details, when available.
     */
    published_version?: Item.PublishedVersion | null;

    /**
     * Identifier of the published version.
     */
    published_version_id?: string | null;
  }

  export namespace Item {
    /**
     * Published version details, when available.
     */
    export interface PublishedVersion {
      /**
       * Unique extract template version identifier.
       */
      id: string;

      /**
       * When the version was created.
       */
      created_at: string;

      /**
       * JSON schema describing accepted input parameters.
       */
      input_schema: { [key: string]: unknown };

      /**
       * Metadata associated with this version.
       */
      metadata: PublishedVersion.Metadata;

      /**
       * Extract template name this version belongs to.
       */
      name: string;

      /**
       * JSON schema describing extracted output.
       */
      output_schema: { [key: string]: unknown };

      /**
       * Monotonic version number for the extract template.
       */
      version_number: number;

      /**
       * Sample input and output pairs for the version.
       */
      samples?: Array<PublishedVersion.Sample> | null;
    }

    export namespace PublishedVersion {
      /**
       * Metadata associated with this version.
       */
      export interface Metadata {
        /**
         * Data source associated with the version.
         */
        data_source?: string | null;

        /**
         * Version description shown to users.
         */
        description?: string | null;

        /**
         * Human-friendly version display name.
         */
        display_name?: string | null;

        /**
         * Domain associated with the version.
         */
        domain?: string | null;

        /**
         * Entity type produced by the version.
         */
        entity_type?: string | null;

        /**
         * Tags associated with the version.
         */
        tags?: Array<string>;

        /**
         * Business vertical associated with the version.
         */
        vertical?: string | null;
      }

      export interface Sample {
        /**
         * Sample input parameters for the version.
         */
        input?: unknown;

        /**
         * Sample output produced by the version.
         */
        output?: unknown;
      }
    }
  }
}

export interface TemplateAsyncResponse {
  status: 'success';

  task: { [key: string]: unknown };
}

/**
 * Response when a batch of extract tasks is created successfully.
 */
export interface TemplateBatchResponse {
  /**
   * Unique identifier for the batch.
   */
  batch_id: string;

  /**
   * Number of tasks in the batch.
   */
  batch_size: number;

  /**
   * List of created tasks.
   */
  tasks: Array<TemplateBatchResponse.Task>;
}

export namespace TemplateBatchResponse {
  export interface Task {
    /**
     * Unique task identifier.
     */
    id: string;

    _query: unknown;

    /**
     * Timestamp when the task was created.
     */
    created_at: string;

    /**
     * Original input data for the task.
     */
    input: unknown;

    /**
     * Current state of the task.
     */
    state: 'pending' | 'queued' | 'in_progress' | 'success' | 'error';

    /**
     * URL for checking the task status.
     */
    status_url: string;

    /**
     * Account name that owns the task.
     */
    account_name?: string;

    api_type?: 'web' | 'serp' | 'ecommerce' | 'social' | 'media' | 'agent' | 'extract' | 'fast-serp' | 'labs';

    /**
     * Batch ID if this task is part of a batch.
     */
    batch_id?: string | null;

    /**
     * URL for downloading the task results.
     */
    download_url?: string | null;

    /**
     * Error message if the task failed.
     */
    error?: string | null;

    /**
     * Classification of the error type.
     */
    error_type?: string | null;

    /**
     * Timestamp when the task was last modified.
     */
    modified_at?: string;

    /**
     * Storage location of the output data.
     */
    output_url?: string | null;

    /**
     * Queue name the task was submitted to.
     */
    queue?: string;

    /**
     * HTTP status code from the task execution.
     */
    status_code?: number;
  }
}

export interface TemplateGetResponse {
  /**
   * Unique extract template identifier.
   */
  id: string;

  /**
   * When the extract template was created.
   */
  created_at: string;

  /**
   * Stable extract template name.
   */
  name: string;

  /**
   * When the extract template was last updated.
   */
  updated_at: string;

  /**
   * Published version details, when available.
   */
  published_version?: TemplateGetResponse.PublishedVersion | null;

  /**
   * Identifier of the published version.
   */
  published_version_id?: string | null;
}

export namespace TemplateGetResponse {
  /**
   * Published version details, when available.
   */
  export interface PublishedVersion {
    /**
     * Unique extract template version identifier.
     */
    id: string;

    /**
     * When the version was created.
     */
    created_at: string;

    /**
     * JSON schema describing accepted input parameters.
     */
    input_schema: { [key: string]: unknown };

    /**
     * Metadata associated with this version.
     */
    metadata: PublishedVersion.Metadata;

    /**
     * Extract template name this version belongs to.
     */
    name: string;

    /**
     * JSON schema describing extracted output.
     */
    output_schema: { [key: string]: unknown };

    /**
     * Monotonic version number for the extract template.
     */
    version_number: number;

    /**
     * Sample input and output pairs for the version.
     */
    samples?: Array<PublishedVersion.Sample> | null;
  }

  export namespace PublishedVersion {
    /**
     * Metadata associated with this version.
     */
    export interface Metadata {
      /**
       * Data source associated with the version.
       */
      data_source?: string | null;

      /**
       * Version description shown to users.
       */
      description?: string | null;

      /**
       * Human-friendly version display name.
       */
      display_name?: string | null;

      /**
       * Domain associated with the version.
       */
      domain?: string | null;

      /**
       * Entity type produced by the version.
       */
      entity_type?: string | null;

      /**
       * Tags associated with the version.
       */
      tags?: Array<string>;

      /**
       * Business vertical associated with the version.
       */
      vertical?: string | null;
    }

    export interface Sample {
      /**
       * Sample input parameters for the version.
       */
      input?: unknown;

      /**
       * Sample output produced by the version.
       */
      output?: unknown;
    }
  }
}

export interface TemplateRunResponse {
  data: TemplateRunResponse.Data;

  metadata: TemplateRunResponse.Metadata;

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

  debug?: TemplateRunResponse.Debug;

  /**
   * Pagination information if applicable.
   */
  pagination?: TemplateRunResponse.NextPageParams | Array<TemplateRunResponse.UnionMember1>;

  /**
   * The HTTP status code of the task.
   */
  status_code?: number;

  /**
   * List of warnings generated during the task.
   */
  warnings?: Array<string>;
}

export namespace TemplateRunResponse {
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

export interface TemplateUpdateParams {
  /**
   * A JSON Patch document per RFC 6902 — a JSON array of patch operations.
   */
  body: Array<TemplateUpdateParams.Body>;
}

export namespace TemplateUpdateParams {
  /**
   * A single JSON Patch operation per RFC 6902.
   */
  export interface Body {
    op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test';

    path: string;

    from?: string | null;

    value?: unknown;
  }
}

export interface TemplateListParams {
  limit?: number;

  offset?: number;
}

export interface TemplateAsyncParams {
  params: { [key: string]: unknown };

  template: string;

  /**
   * URL to call back when async operation completes
   */
  callback_url?: string;

  /**
   * Response formats to include. All disabled by default.
   */
  formats?: Array<'html' | 'markdown' | 'screenshot' | 'headers' | 'links'>;

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

export interface TemplateBatchParams {
  inputs: Array<TemplateBatchParams.Input>;

  shared_inputs: TemplateBatchParams.SharedInputs;
}

export namespace TemplateBatchParams {
  export interface Input {
    /**
     * Response formats to include. All disabled by default.
     */
    formats?: Array<'html' | 'markdown' | 'screenshot' | 'headers' | 'links'>;

    localization?: boolean;

    params?: { [key: string]: unknown };
  }

  export interface SharedInputs {
    template: string;

    /**
     * Response formats to include. All disabled by default.
     */
    formats?: Array<'html' | 'markdown' | 'screenshot' | 'headers' | 'links'>;

    localization?: boolean;

    params?: { [key: string]: unknown };
  }
}

export interface TemplateRunParams {
  params: { [key: string]: unknown };

  template: string;

  /**
   * Response formats to include. All disabled by default.
   */
  formats?: Array<'html' | 'markdown' | 'screenshot' | 'headers' | 'links'>;

  localization?: boolean;
}

Templates.Generations = Generations;
Templates.Versions = Versions;

export declare namespace Templates {
  export {
    type TemplateUpdateResponse as TemplateUpdateResponse,
    type TemplateListResponse as TemplateListResponse,
    type TemplateAsyncResponse as TemplateAsyncResponse,
    type TemplateBatchResponse as TemplateBatchResponse,
    type TemplateGetResponse as TemplateGetResponse,
    type TemplateRunResponse as TemplateRunResponse,
    type TemplateUpdateParams as TemplateUpdateParams,
    type TemplateListParams as TemplateListParams,
    type TemplateAsyncParams as TemplateAsyncParams,
    type TemplateBatchParams as TemplateBatchParams,
    type TemplateRunParams as TemplateRunParams,
  };

  export {
    Generations as Generations,
    type GenerationCreateResponse as GenerationCreateResponse,
    type GenerationGetResponse as GenerationGetResponse,
    type GenerationCreateParams as GenerationCreateParams,
  };

  export {
    Versions as Versions,
    type VersionListResponse as VersionListResponse,
    type VersionGetResponse as VersionGetResponse,
    type VersionListParams as VersionListParams,
    type VersionGetParams as VersionGetParams,
  };
}
