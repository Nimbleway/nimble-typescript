// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Generations extends APIResource {
  /**
   * Create Extract Template Generation Public V2
   *
   * @example
   * ```ts
   * const generation =
   *   await client.extract.templates.generations.create({
   *     prompt: 'prompt',
   *     url: 'url',
   *   });
   * ```
   */
  create(body: GenerationCreateParams, options?: RequestOptions): APIPromise<GenerationCreateResponse> {
    return this._client.post('/v2/extract/templates/generations', { body, ...options });
  }

  /**
   * Get Extract Template Generation Public V2
   *
   * @example
   * ```ts
   * const generation =
   *   await client.extract.templates.generations.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  get(generationID: string, options?: RequestOptions): APIPromise<GenerationGetResponse> {
    return this._client.get(path`/v2/extract/templates/generations/${generationID}`, options);
  }
}

export interface GenerationCreateResponse {
  /**
   * Unique extract template generation identifier.
   */
  id: string;

  /**
   * Current generation status.
   */
  status: string;

  /**
   * When the generation completed.
   */
  completed_at?: string | null;

  /**
   * When the generation was created.
   */
  created_at?: string | null;

  /**
   * Error message when generation failed.
   */
  error?: string | null;

  /**
   * Generated version details, when available.
   */
  generated_version?: GenerationCreateResponse.GeneratedVersion | null;

  /**
   * Identifier of the generated version.
   */
  generated_version_id?: string | null;

  /**
   * Extract template name associated with the generation.
   */
  name?: string | null;

  /**
   * Identifier of the version being refined.
   */
  source_version_id?: string | null;

  /**
   * When the generation started executing.
   */
  started_at?: string | null;

  /**
   * Summary of the generation result.
   */
  summary?: string | null;
}

export namespace GenerationCreateResponse {
  /**
   * Generated version details, when available.
   */
  export interface GeneratedVersion {
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
    metadata: GeneratedVersion.Metadata;

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
    samples?: Array<GeneratedVersion.Sample> | null;
  }

  export namespace GeneratedVersion {
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

export interface GenerationGetResponse {
  /**
   * Unique extract template generation identifier.
   */
  id: string;

  /**
   * Current generation status.
   */
  status: string;

  /**
   * When the generation completed.
   */
  completed_at?: string | null;

  /**
   * When the generation was created.
   */
  created_at?: string | null;

  /**
   * Error message when generation failed.
   */
  error?: string | null;

  /**
   * Generated version details, when available.
   */
  generated_version?: GenerationGetResponse.GeneratedVersion | null;

  /**
   * Identifier of the generated version.
   */
  generated_version_id?: string | null;

  /**
   * Extract template name associated with the generation.
   */
  name?: string | null;

  /**
   * Identifier of the version being refined.
   */
  source_version_id?: string | null;

  /**
   * When the generation started executing.
   */
  started_at?: string | null;

  /**
   * Summary of the generation result.
   */
  summary?: string | null;
}

export namespace GenerationGetResponse {
  /**
   * Generated version details, when available.
   */
  export interface GeneratedVersion {
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
    metadata: GeneratedVersion.Metadata;

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
    samples?: Array<GeneratedVersion.Sample> | null;
  }

  export namespace GeneratedVersion {
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

export type GenerationCreateParams =
  | GenerationCreateParams.CreateExtractTemplateGenerationRequestPublicV2
  | GenerationCreateParams.CreateExtractTemplateRefinementRequestPublicV2;

export declare namespace GenerationCreateParams {
  export interface CreateExtractTemplateGenerationRequestPublicV2 {
    /**
     * Instructions for generating the extract template.
     */
    prompt: string;

    /**
     * Example URL used to generate the extract template.
     */
    url: string;

    /**
     * Optional JSON schema describing expected input parameters.
     */
    input_schema?: { [key: string]: unknown };

    /**
     * Metadata to attach to the generated extract template.
     */
    metadata?: CreateExtractTemplateGenerationRequestPublicV2.Metadata | null;

    /**
     * Optional stable name for the generated extract template.
     */
    name?: string | null;

    /**
     * Optional JSON schema describing desired extracted output.
     */
    output_schema?: { [key: string]: unknown };
  }

  export namespace CreateExtractTemplateGenerationRequestPublicV2 {
    /**
     * Metadata to attach to the generated extract template.
     */
    export interface Metadata {
      /**
       * Description for the generated template.
       */
      description?: string | null;

      /**
       * Human-friendly display name for the generated template.
       */
      display_name?: string | null;

      /**
       * Tags to associate with the generated template.
       */
      tags?: Array<string>;
    }
  }

  export interface CreateExtractTemplateRefinementRequestPublicV2 {
    /**
     * Name of the source extract template to refine.
     */
    from_extract_template: string;

    /**
     * Instructions for refining the extract template.
     */
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
