// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Templates extends APIResource {
  /**
   * List Templates
   */
  list(
    query: TemplateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TemplateListResponse> {
    return this._client.get('/v1/task-agents/templates', { query, ...options });
  }

  /**
   * Get Template
   */
  get(templateName: string, options?: RequestOptions): APIPromise<TemplateGetResponse> {
    return this._client.get(path`/v1/task-agents/templates/${templateName}`, options);
  }
}

export type TemplateListResponse = Array<TemplateListResponse.TemplateListResponseItem>;

export namespace TemplateListResponse {
  export interface TemplateListResponseItem {
    id: string;

    created_at: string;

    description: string;

    display_name: string;

    domain_expertise: string;

    /**
     * Canonical effort tier names for the research graph.
     */
    effort: 'low' | 'medium' | 'high' | 'x-high' | 'max';

    goals: Array<TemplateListResponseItem.Goal>;

    icon: string;

    output_schema: { [key: string]: unknown } | null;

    sources: Array<TemplateListResponseItem.Source>;

    suggested_questions: Array<TemplateListResponseItem.SuggestedQuestion>;

    template_name: string;

    updated_at: string;

    use_case: 'research' | 'enrichment' | 'dataset_building';
  }

  export namespace TemplateListResponseItem {
    export interface Goal {
      id: string;

      goal: string;

      order: number;
    }

    export interface Source {
      id: string;

      domains: Array<string>;

      order: number;

      title: string;
    }

    export interface SuggestedQuestion {
      id: string;

      order: number;

      question: string;
    }
  }
}

export interface TemplateGetResponse {
  id: string;

  created_at: string;

  description: string;

  display_name: string;

  domain_expertise: string;

  /**
   * Canonical effort tier names for the research graph.
   */
  effort: 'low' | 'medium' | 'high' | 'x-high' | 'max';

  goals: Array<TemplateGetResponse.Goal>;

  icon: string;

  output_schema: { [key: string]: unknown } | null;

  sources: Array<TemplateGetResponse.Source>;

  suggested_questions: Array<TemplateGetResponse.SuggestedQuestion>;

  template_name: string;

  updated_at: string;

  use_case: 'research' | 'enrichment' | 'dataset_building';
}

export namespace TemplateGetResponse {
  export interface Goal {
    id: string;

    goal: string;

    order: number;
  }

  export interface Source {
    id: string;

    domains: Array<string>;

    order: number;

    title: string;
  }

  export interface SuggestedQuestion {
    id: string;

    order: number;

    question: string;
  }
}

export interface TemplateListParams {
  /**
   * Canonical effort tier names for the research graph.
   */
  filter_effort?: 'low' | 'medium' | 'high' | 'x-high' | 'max' | null;

  filter_use_case?: 'research' | 'enrichment' | 'dataset_building' | null;

  limit?: number;

  offset?: number;
}

export declare namespace Templates {
  export {
    type TemplateListResponse as TemplateListResponse,
    type TemplateGetResponse as TemplateGetResponse,
    type TemplateListParams as TemplateListParams,
  };
}
