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
   * Execute WSA Realtime Endpoint
   */
  async(body: AgentAsyncParams, options?: RequestOptions): APIPromise<AgentAsyncResponse> {
    return this._client.post('/v1/agent/async', { body, ...options });
  }

  /**
   * Get Template
   */
  get(templateName: string, options?: RequestOptions): APIPromise<AgentGetResponse> {
    return this._client.get(path`/v1/agents/${templateName}`, options);
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

export declare namespace Agents {
  export {
    type AgentListResponse as AgentListResponse,
    type AgentAsyncResponse as AgentAsyncResponse,
    type AgentGetResponse as AgentGetResponse,
    type AgentListParams as AgentListParams,
    type AgentAsyncParams as AgentAsyncParams,
  };
}
