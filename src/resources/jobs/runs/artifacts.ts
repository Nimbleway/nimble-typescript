// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Artifacts extends APIResource {
  /**
   * List Run Artifacts
   */
  list(runID: string, options?: RequestOptions): APIPromise<ArtifactListResponse> {
    return this._client.get(path`/v1/jobs/runs/${runID}/artifacts`, options);
  }

  /**
   * Get Run Artifact Download URL
   */
  downloadURL(
    artifactID: string,
    params: ArtifactDownloadURLParams,
    options?: RequestOptions,
  ): APIPromise<ArtifactDownloadURLResponse> {
    const { run_id } = params;
    return this._client.get(path`/v1/jobs/runs/${run_id}/artifacts/${artifactID}/download-url`, options);
  }

  /**
   * Get Run Artifact
   */
  get(
    artifactID: string,
    params: ArtifactGetParams,
    options?: RequestOptions,
  ): APIPromise<ArtifactGetResponse> {
    const { run_id } = params;
    return this._client.get(path`/v1/jobs/runs/${run_id}/artifacts/${artifactID}`, options);
  }

  /**
   * Preview Run Artifact
   */
  preview(
    artifactID: string,
    params: ArtifactPreviewParams,
    options?: RequestOptions,
  ): APIPromise<ArtifactPreviewResponse> {
    const { run_id } = params;
    return this._client.get(path`/v1/jobs/runs/${run_id}/artifacts/${artifactID}/preview`, options);
  }
}

/**
 * Artifacts produced by a run.
 */
export interface ArtifactListResponse {
  /**
   * Artifacts produced by the run.
   */
  items: Array<ArtifactListResponse.Item>;
}

export namespace ArtifactListResponse {
  /**
   * A file produced by a run.
   *
   * Intentional subset of the bakery Artifact: `data_format` and `s3_path` are
   * hidden from SDK consumers — internal storage details, not part of the public
   * contract. Use the download-url endpoint to fetch the file. Bakery emits `id` as
   * an int (crawlit native); the SDK contract is a string.
   */
  export interface Item {
    /**
     * Artifact identifier.
     */
    id: string;

    /**
     * When the artifact was created.
     */
    created_at: string;

    description: string;

    /**
     * Artifact type.
     */
    type: string;
  }
}

/**
 * A pre-signed URL for downloading an artifact.
 */
export interface ArtifactDownloadURLResponse {
  /**
   * When the download URL expires.
   */
  expires_at: string;

  /**
   * Pre-signed URL to download the artifact.
   */
  url: string;
}

/**
 * A file produced by a run.
 *
 * Intentional subset of the bakery Artifact: `data_format` and `s3_path` are
 * hidden from SDK consumers — internal storage details, not part of the public
 * contract. Use the download-url endpoint to fetch the file. Bakery emits `id` as
 * an int (crawlit native); the SDK contract is a string.
 */
export interface ArtifactGetResponse {
  /**
   * Artifact identifier.
   */
  id: string;

  /**
   * When the artifact was created.
   */
  created_at: string;

  description: string;

  /**
   * Artifact type.
   */
  type: string;
}

/**
 * A tabular preview of an artifact's contents.
 */
export interface ArtifactPreviewResponse {
  /**
   * Column names in the preview.
   */
  columns: Array<string>;

  /**
   * Total number of rows in the artifact.
   */
  row_count: number;

  /**
   * Sample rows from the artifact.
   */
  rows: Array<{ [key: string]: unknown }>;
}

export interface ArtifactDownloadURLParams {
  run_id: string;
}

export interface ArtifactGetParams {
  run_id: string;
}

export interface ArtifactPreviewParams {
  run_id: string;
}

export declare namespace Artifacts {
  export {
    type ArtifactListResponse as ArtifactListResponse,
    type ArtifactDownloadURLResponse as ArtifactDownloadURLResponse,
    type ArtifactGetResponse as ArtifactGetResponse,
    type ArtifactPreviewResponse as ArtifactPreviewResponse,
    type ArtifactDownloadURLParams as ArtifactDownloadURLParams,
    type ArtifactGetParams as ArtifactGetParams,
    type ArtifactPreviewParams as ArtifactPreviewParams,
  };
}
