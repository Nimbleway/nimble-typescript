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
   *
   * @deprecated
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
   *
   * @deprecated
   */
  cancel(runID: string, options?: RequestOptions): APIPromise<RunCancelResponse> {
    return this._client.post(path`/v1/jobs/runs/${runID}/cancel`, options);
  }

  /**
   * Get Run
   *
   * @deprecated
   */
  get(runID: string, options?: RequestOptions): APIPromise<RunGetResponse> {
    return this._client.get(path`/v1/jobs/runs/${runID}`, options);
  }
}

/**
 * A page of job runs.
 */
export interface RunListResponse {
  /**
   * Runs on this page.
   */
  items: Array<RunListResponse.Item>;

  /**
   * Total number of runs matching the query.
   */
  total: number;

  /**
   * Current page number.
   */
  page?: number;

  /**
   * Number of items per page.
   */
  per_page?: number;
}

export namespace RunListResponse {
  /**
   * A single execution of a job.
   */
  export interface Item {
    /**
     * Unique run identifier (run\_<n>).
     */
    id: string;

    /**
     * When the run was created.
     */
    created_at: string;

    /**
     * Identifier of the job this run belongs to.
     */
    job_id: string;

    /**
     * Current run status.
     */
    status: 'PENDING' | 'RUNNING' | 'SUCCESS' | 'FAILED' | 'CANCELLED' | 'TIMEOUT' | 'WARNING';

    /**
     * What triggered the run: 'schedule' or 'manual'.
     */
    triggered_by: 'schedule' | 'manual';

    /**
     * When the run finished.
     */
    finished_at?: string | null;

    /**
     * Number of input records processed.
     */
    input_count?: number | null;

    /**
     * Number of result records produced.
     */
    result_count?: number | null;

    /**
     * When the run started executing.
     */
    started_at?: string | null;
  }
}

/**
 * Result of cancelling a run.
 */
export interface RunCancelResponse {
  /**
   * Identifier of the cancelled run.
   */
  id: string;

  /**
   * Run status after cancellation.
   */
  status: 'PENDING' | 'RUNNING' | 'SUCCESS' | 'FAILED' | 'CANCELLED' | 'TIMEOUT' | 'WARNING';
}

/**
 * Full detail for a single run.
 */
export interface RunGetResponse {
  /**
   * Unique run identifier (run\_<n>).
   */
  id: string;

  /**
   * When the run was created.
   */
  created_at: string;

  /**
   * Context of the job this run belongs to.
   */
  job: RunGetResponse.Job;

  /**
   * Current run status.
   */
  status: 'PENDING' | 'RUNNING' | 'SUCCESS' | 'FAILED' | 'CANCELLED' | 'TIMEOUT' | 'WARNING';

  /**
   * What triggered the run: 'schedule' or 'manual'.
   */
  triggered_by: 'schedule' | 'manual';

  /**
   * Error details for a failed run.
   */
  error?: RunGetResponse.Error | null;

  /**
   * When the run finished.
   */
  finished_at?: string | null;

  /**
   * Sample of the run's input records.
   */
  inputs_sample?: Array<unknown> | null;

  /**
   * When the run started executing.
   */
  started_at?: string | null;

  /**
   * Aggregate metrics for a run.
   */
  summary?: RunGetResponse.Summary | null;
}

export namespace RunGetResponse {
  /**
   * Context of the job this run belongs to.
   */
  export interface Job {
    /**
     * Unique job identifier (job\_<n>).
     */
    id: string;

    /**
     * Internal job name.
     */
    name: string;

    /**
     * Name of the agent this job runs.
     */
    agent_name?: string | null;

    /**
     * Human-friendly job name shown in the UI.
     */
    display_name?: string | null;

    /**
     * Cron-based schedule controlling when a job runs automatically.
     */
    schedule?: Job.Schedule | null;
  }

  export namespace Job {
    /**
     * Cron-based schedule controlling when a job runs automatically.
     */
    export interface Schedule {
      /**
       * Cron expression defining when the job runs.
       */
      cron: string;

      /**
       * Whether the schedule is currently active.
       */
      enabled: boolean;
    }
  }

  /**
   * Error details for a failed run.
   */
  export interface Error {
    /**
     * Sample of individual error records from the run.
     */
    errors_sample?: Array<{ [key: string]: unknown }> | null;

    /**
     * Human-readable error message.
     */
    message?: string | null;

    /**
     * Pipeline step where the error occurred.
     */
    step?: string | null;
  }

  /**
   * Aggregate metrics for a run.
   */
  export interface Summary {
    /**
     * Number of input records processed.
     */
    input_count?: number | null;

    /**
     * Fraction of inputs that produced a result (result_count / input_count), from 0.0
     * to 1.0.
     */
    match_rate?: number | null;

    /**
     * Number of result records produced.
     */
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
