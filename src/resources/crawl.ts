// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Crawl extends APIResource {
  /**
   * Crawl by Filter
   */
  list(query: CrawlListParams, options?: RequestOptions): APIPromise<CrawlListResponse> {
    return this._client.get('/v1/crawl', { query, ...options });
  }

  /**
   * Get crawl data
   */
  status(id: string, options?: RequestOptions): APIPromise<CrawlStatusResponse> {
    return this._client.get(path`/v1/crawl/${id}`, options);
  }

  /**
   * Cancel Crawl
   */
  terminate(id: string, options?: RequestOptions): APIPromise<CrawlTerminateResponse> {
    return this._client.delete(path`/v1/crawl/${id}`, options);
  }
}

/**
 * Successful get crawl response
 */
export interface CrawlListResponse {
  data: Array<CrawlListResponse.Data>;

  pagination: CrawlListResponse.Pagination;
}

export namespace CrawlListResponse {
  /**
   * Crawl API response
   */
  export interface Data {
    account_name: string;

    crawl_id: string;

    crawl_options: Data.CrawlOptions;

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

    tasks?: Array<Data.Task>;

    total?: number;
  }

  export namespace Data {
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

  export interface Pagination {
    has_next: boolean;

    next_cursor?: string | null;

    total?: number;
  }
}

/**
 * Crawl API response
 */
export interface CrawlStatusResponse {
  account_name: string;

  crawl_id: string;

  crawl_options: CrawlStatusResponse.CrawlOptions;

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

  tasks?: Array<CrawlStatusResponse.Task>;

  total?: number;
}

export namespace CrawlStatusResponse {
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

export interface CrawlTerminateResponse {
  status: 'canceled';
}

export interface CrawlListParams {
  /**
   * Filter crawls by their status.
   */
  status: 'queued' | 'running' | 'succeeded' | 'failed' | 'canceled';

  /**
   * Cursor for pagination.
   */
  cursor?: string | null;

  /**
   * Number of crawls to return per page.
   */
  limit?: number;
}

export declare namespace Crawl {
  export {
    type CrawlListResponse as CrawlListResponse,
    type CrawlStatusResponse as CrawlStatusResponse,
    type CrawlTerminateResponse as CrawlTerminateResponse,
    type CrawlListParams as CrawlListParams,
  };
}
