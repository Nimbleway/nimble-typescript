// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Templates extends APIResource {
  /**
   * List the pre-built agent templates available to your account. Use a template's
   * `template_name` with `POST /v2/agents` to create an agent instance from it.
   */
  list(
    query: TemplateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TemplateListResponse> {
    return this._client.get('/v2/agents/templates', { query, ...options });
  }

  /**
   * Retrieve a single agent template by its stable `template_name`.
   */
  get(templateName: string, options?: RequestOptions): APIPromise<TemplateGetResponse> {
    return this._client.get(path`/v2/agents/templates/${templateName}`, options);
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
     * Unique template identifier (wsat\_<uuid>).
     */
    id: string;

    /**
     * When the template was created.
     */
    created_at: string;

    /**
     * Template description shown to users.
     */
    description: string;

    /**
     * Human-friendly template name shown to users.
     */
    display_name: string;

    /**
     * Default effort level for runs created from this template.
     */
    effort: 'low' | 'medium' | 'high' | 'x-high' | '5x-high' | 'max';

    /**
     * Ordered goals for the template.
     */
    goals: Array<Item.Goal>;

    /**
     * Icon identifier used when presenting the template.
     */
    icon: string;

    /**
     * JSON schema describing the structured output the agent should produce.
     */
    output_schema: { [key: string]: unknown } | null;

    /**
     * Skill or operating context for the template.
     */
    skill: string;

    /**
     * Ordered source groups for the template.
     */
    sources: Array<Item.Source>;

    /**
     * Suggested prompts for the template.
     */
    suggested_questions: Array<Item.SuggestedQuestion>;

    /**
     * Stable template name used to create agent instances.
     */
    template_name: string;

    /**
     * When the template was last updated.
     */
    updated_at: string;

    /**
     * Primary use case supported by the template.
     */
    use_case: 'research' | 'enrichment' | 'dataset_building';
  }

  export namespace Item {
    export interface Goal {
      /**
       * Unique goal identifier (wsag\_<uuid>).
       */
      id: string;

      /**
       * Goal text.
       */
      goal: string;

      /**
       * Zero-based goal position.
       */
      order: number;
    }

    export interface Source {
      /**
       * Unique source group identifier (wsas\_<uuid>).
       */
      id: string;

      /**
       * Domains included in this source group.
       */
      domains: Array<string>;

      /**
       * Zero-based source group position.
       */
      order: number;

      /**
       * Source group title.
       */
      title: string;
    }

    export interface SuggestedQuestion {
      /**
       * Unique suggested question identifier (wsasq\_<uuid>).
       */
      id: string;

      /**
       * Zero-based suggested question position.
       */
      order: number;

      /**
       * Suggested prompt text.
       */
      question: string;
    }
  }
}

export interface TemplateGetResponse {
  /**
   * Unique template identifier (wsat\_<uuid>).
   */
  id: string;

  /**
   * When the template was created.
   */
  created_at: string;

  /**
   * Template description shown to users.
   */
  description: string;

  /**
   * Human-friendly template name shown to users.
   */
  display_name: string;

  /**
   * Default effort level for runs created from this template.
   */
  effort: 'low' | 'medium' | 'high' | 'x-high' | '5x-high' | 'max';

  /**
   * Ordered goals for the template.
   */
  goals: Array<TemplateGetResponse.Goal>;

  /**
   * Icon identifier used when presenting the template.
   */
  icon: string;

  /**
   * JSON schema describing the structured output the agent should produce.
   */
  output_schema: { [key: string]: unknown } | null;

  /**
   * Skill or operating context for the template.
   */
  skill: string;

  /**
   * Ordered source groups for the template.
   */
  sources: Array<TemplateGetResponse.Source>;

  /**
   * Suggested prompts for the template.
   */
  suggested_questions: Array<TemplateGetResponse.SuggestedQuestion>;

  /**
   * Stable template name used to create agent instances.
   */
  template_name: string;

  /**
   * When the template was last updated.
   */
  updated_at: string;

  /**
   * Primary use case supported by the template.
   */
  use_case: 'research' | 'enrichment' | 'dataset_building';
}

export namespace TemplateGetResponse {
  export interface Goal {
    /**
     * Unique goal identifier (wsag\_<uuid>).
     */
    id: string;

    /**
     * Goal text.
     */
    goal: string;

    /**
     * Zero-based goal position.
     */
    order: number;
  }

  export interface Source {
    /**
     * Unique source group identifier (wsas\_<uuid>).
     */
    id: string;

    /**
     * Domains included in this source group.
     */
    domains: Array<string>;

    /**
     * Zero-based source group position.
     */
    order: number;

    /**
     * Source group title.
     */
    title: string;
  }

  export interface SuggestedQuestion {
    /**
     * Unique suggested question identifier (wsasq\_<uuid>).
     */
    id: string;

    /**
     * Zero-based suggested question position.
     */
    order: number;

    /**
     * Suggested prompt text.
     */
    question: string;
  }
}

export interface TemplateListParams {
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
