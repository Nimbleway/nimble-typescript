// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ArtifactsAPI from './artifacts';
import {
  ArtifactDownloadURLParams,
  ArtifactDownloadURLResponse,
  ArtifactGetParams,
  ArtifactGetResponse,
  ArtifactListResponse,
  ArtifactPreviewParams,
  ArtifactPreviewResponse,
  Artifacts,
} from './artifacts';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Runs extends APIResource {
  artifacts: ArtifactsAPI.Artifacts = new ArtifactsAPI.Artifacts(this._client);

  /**
   * List Runs for Job
   */
  list(
    jobID: string,
    query: RunListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RunListResponse> {
    return this._client.get(path`/v1/jobs/${jobID}/runs`, { query, ...options });
  }

  /**
   * Cancel Run
   */
  cancel(runID: string, options?: RequestOptions): APIPromise<RunCancelResponse> {
    return this._client.post(path`/v1/jobs/runs/${runID}/cancel`, options);
  }

  /**
   * Get Run
   */
  get(runID: string, options?: RequestOptions): APIPromise<RunGetResponse> {
    return this._client.get(path`/v1/jobs/runs/${runID}`, options);
  }
}

export interface RunListResponse {
  items: Array<RunListResponse.Item>;

  page: number;

  per_page: number;

  total: number;
}

export namespace RunListResponse {
  export interface Item {
    id: string;

    created_at: string;

    job_id: string;

    status: 'PENDING' | 'RUNNING' | 'SUCCESS' | 'FAILED' | 'CANCELLED' | 'TIMEOUT' | 'WARNING';

    triggered_by: 'schedule' | 'manual';

    finished_at?: string | null;

    input_count?: number | null;

    result_count?: number | null;

    started_at?: string | null;
  }
}

export interface RunCancelResponse {
  id: string;

  status: 'PENDING' | 'RUNNING' | 'SUCCESS' | 'FAILED' | 'CANCELLED' | 'TIMEOUT' | 'WARNING';
}

export interface RunGetResponse {
  id: string;

  created_at: string;

  job: RunGetResponse.Job;

  status: 'PENDING' | 'RUNNING' | 'SUCCESS' | 'FAILED' | 'CANCELLED' | 'TIMEOUT' | 'WARNING';

  triggered_by: 'schedule' | 'manual';

  error?: RunGetResponse.Error | null;

  finished_at?: string | null;

  inputs_sample?: Array<unknown> | null;

  started_at?: string | null;

  summary?: RunGetResponse.Summary | null;
}

export namespace RunGetResponse {
  export interface Job {
    id: string;

    name: string;

    agent_name?: string | null;

    display_name?: string | null;

    schedule?: Job.Schedule | null;
  }

  export namespace Job {
    export interface Schedule {
      cron: string;

      enabled: boolean;
    }
  }

  export interface Error {
    errors_sample?: Array<{ [key: string]: unknown }> | null;

    message?: string | null;

    step?: string | null;
  }

  export interface Summary {
    input_count?: number | null;

    match_rate?: number | null;

    result_count?: number | null;
  }
}

export interface RunListParams {
  page?: number;

  per_page?: number;

  /**
   * Filter by status
   */
  status?: string | null;
}

Runs.Artifacts = Artifacts;

export declare namespace Runs {
  export {
    type RunListResponse as RunListResponse,
    type RunCancelResponse as RunCancelResponse,
    type RunGetResponse as RunGetResponse,
    type RunListParams as RunListParams,
  };

  export {
    Artifacts as Artifacts,
    type ArtifactListResponse as ArtifactListResponse,
    type ArtifactDownloadURLResponse as ArtifactDownloadURLResponse,
    type ArtifactGetResponse as ArtifactGetResponse,
    type ArtifactPreviewResponse as ArtifactPreviewResponse,
    type ArtifactDownloadURLParams as ArtifactDownloadURLParams,
    type ArtifactGetParams as ArtifactGetParams,
    type ArtifactPreviewParams as ArtifactPreviewParams,
  };
}
