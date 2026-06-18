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

export interface ArtifactListResponse {
  items: Array<ArtifactListResponse.Item>;
}

export namespace ArtifactListResponse {
  export interface Item {
    id: string;

    created_at: string;

    description: string;

    type: string;
  }
}

export interface ArtifactDownloadURLResponse {
  expires_at: string;

  url: string;
}

export interface ArtifactGetResponse {
  id: string;

  created_at: string;

  description: string;

  type: string;
}

export interface ArtifactPreviewResponse {
  columns: Array<string>;

  row_count: number;

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
