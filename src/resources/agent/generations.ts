// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Generations extends APIResource {
  /**
   * Create Agent Generation
   */
  create(body: GenerationCreateParams, options?: RequestOptions): APIPromise<GenerationCreateResponse> {
    return this._client.post('/v1/agents/generations', { body, ...options });
  }

  /**
   * Get Agent Generation
   */
  get(generationID: string, options?: RequestOptions): APIPromise<GenerationGetResponse> {
    return this._client.get(path`/v1/agents/generations/${generationID}`, options);
  }
}

export interface GenerationCreateResponse {
  id: string;

  status: string;

  agent_name?: string | null;

  completed_at?: string | null;

  created_at?: string | null;

  error?: string | null;

  generated_version?: unknown | null;

  generated_version_id?: string | null;

  source_version_id?: string | null;

  started_at?: string | null;

  summary?: string | null;
}

export interface GenerationGetResponse {
  id: string;

  status: string;

  agent_name?: string | null;

  completed_at?: string | null;

  created_at?: string | null;

  error?: string | null;

  generated_version?: unknown | null;

  generated_version_id?: string | null;

  source_version_id?: string | null;

  started_at?: string | null;

  summary?: string | null;
}

export type GenerationCreateParams =
  | GenerationCreateParams.CreateAgentGenerationRequest
  | GenerationCreateParams.CreateAgentRefinementRequest;

export declare namespace GenerationCreateParams {
  export interface CreateAgentGenerationRequest {
    agent_name: string;

    prompt: string;

    url: string;

    input_schema?: unknown;

    metadata?: unknown | null;

    output_schema?: unknown;
  }

  export interface CreateAgentRefinementRequest {
    from_agent: string;

    prompt: string;
  }
}

export declare namespace Generations {
  export {
    type GenerationCreateResponse as GenerationCreateResponse,
    type GenerationGetResponse as GenerationGetResponse,
    type GenerationCreateParams as GenerationCreateParams,
  };
}
