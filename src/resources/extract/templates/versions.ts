// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Versions extends APIResource {
  /**
   * List Extract Template Versions Public V2
   *
   * @example
   * ```ts
   * const versions =
   *   await client.extract.templates.versions.list(
   *     'extract_template_name',
   *   );
   * ```
   */
  list(
    extractTemplateName: string,
    query: VersionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VersionListResponse> {
    return this._client.get(path`/v2/extract/templates/${extractTemplateName}/versions`, {
      query,
      ...options,
    });
  }

  /**
   * Get Extract Template Version Public V2
   *
   * @example
   * ```ts
   * const version = await client.extract.templates.versions.get(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { extract_template_name: 'extract_template_name' },
   * );
   * ```
   */
  get(versionID: string, params: VersionGetParams, options?: RequestOptions): APIPromise<VersionGetResponse> {
    const { extract_template_name } = params;
    return this._client.get(
      path`/v2/extract/templates/${extract_template_name}/versions/${versionID}`,
      options,
    );
  }
}

export interface VersionListResponse {
  /**
   * Items returned in this page.
   */
  items: Array<VersionListResponse.Item>;

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

export namespace VersionListResponse {
  export interface Item {
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
    metadata: Item.Metadata;

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
    samples?: Array<Item.Sample> | null;
  }

  export namespace Item {
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

export interface VersionGetResponse {
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
  metadata: VersionGetResponse.Metadata;

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
  samples?: Array<VersionGetResponse.Sample> | null;
}

export namespace VersionGetResponse {
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

export interface VersionListParams {
  limit?: number;

  offset?: number;
}

export interface VersionGetParams {
  extract_template_name: string;
}

export declare namespace Versions {
  export {
    type VersionListResponse as VersionListResponse,
    type VersionGetResponse as VersionGetResponse,
    type VersionListParams as VersionListParams,
    type VersionGetParams as VersionGetParams,
  };
}
