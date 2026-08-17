// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RunsAPI from './runs/runs';
import {
  RunCancelResponse,
  RunCreateResponse,
  RunGetResponse,
  RunListParams,
  RunListResponse,
  Runs,
} from './runs/runs';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Jobs extends APIResource {
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);

  /**
   * Create Job Public V2
   */
  create(body: JobCreateParams, options?: RequestOptions): APIPromise<JobCreateResponse> {
    return this._client.post('/v2/jobs', { body, ...options });
  }

  /**
   * Update Job Public V2
   */
  update(jobID: string, body: JobUpdateParams, options?: RequestOptions): APIPromise<JobUpdateResponse> {
    return this._client.patch(path`/v2/jobs/${jobID}`, { body, ...options });
  }

  /**
   * List Jobs Public V2
   */
  list(query: JobListParams | null | undefined = {}, options?: RequestOptions): APIPromise<JobListResponse> {
    return this._client.get('/v2/jobs', { query, ...options });
  }

  /**
   * Delete Job Public V2
   */
  delete(jobID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/jobs/${jobID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get Job Public V2
   */
  get(jobID: string, options?: RequestOptions): APIPromise<JobGetResponse> {
    return this._client.get(path`/v2/jobs/${jobID}`, options);
  }
}

/**
 * A configured job: an agent plus its schedule, inputs, and destination.
 */
export interface JobCreateResponse {
  /**
   * Unique job identifier (job\_<n>).
   */
  id: string;

  /**
   * Job name.
   */
  name: string;

  /**
   * When the job was created.
   */
  created_at?: string | null;

  /**
   * Free-text description of the job.
   */
  description?: string | null;

  /**
   * Where a job writes its results.
   */
  destination?: JobCreateResponse.Destination | null;

  /**
   * Human-friendly job name shown in the UI.
   */
  display_name?: string | null;

  /**
   * Name of the extract template this job runs.
   */
  extract_template_name?: string | null;

  /**
   * Configuration for the input data a job processes.
   */
  inputs?: JobCreateResponse.Inputs | null;

  /**
   * Timestamp of the most recent run.
   */
  last_run_at?: string | null;

  /**
   * Status of the most recent run.
   */
  last_run_status?: 'PENDING' | 'RUNNING' | 'SUCCESS' | 'FAILED' | 'CANCELLED' | 'TIMEOUT' | 'WARNING' | null;

  /**
   * Cron-based schedule controlling when a job runs automatically.
   */
  schedule?: JobCreateResponse.Schedule | null;

  /**
   * When the job was last updated.
   */
  updated_at?: string | null;
}

export namespace JobCreateResponse {
  /**
   * Where a job writes its results.
   */
  export interface Destination {
    /**
     * Destination path the output is written to.
     */
    path: string;

    /**
     * Destination kind: a local 'file' or an 's3' bucket.
     */
    type: 'file' | 's3';

    /**
     * Output file format.
     */
    format?: 'jsonl' | 'csv' | 'parquet';
  }

  /**
   * Configuration for the input data a job processes.
   */
  export interface Inputs {
    /**
     * How inputs are supplied: an 's3' bucket, 'inline' records, or an uploaded
     * 'file'.
     */
    type: 's3' | 'inline' | 'file';

    /**
     * Inline list of input records. Used when type is 'inline'.
     */
    data?: Array<{ [key: string]: unknown }> | null;

    /**
     * Path to the input file; must start with 's3' or 'file\_'. Used for 's3'/'file'
     * types.
     */
    file_path?: string | null;

    /**
     * Inline input records keyed by source node id, e.g. {'source_a': [{...}]}. Used
     * when type is 'inline' on a dynamic-workflow job, which has one source node per
     * input file. Mutually exclusive with 'data'.
     */
    node_data?: { [key: string]: Array<{ [key: string]: unknown }> } | null;
  }

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
 * A configured job: an agent plus its schedule, inputs, and destination.
 */
export interface JobUpdateResponse {
  /**
   * Unique job identifier (job\_<n>).
   */
  id: string;

  /**
   * Job name.
   */
  name: string;

  /**
   * When the job was created.
   */
  created_at?: string | null;

  /**
   * Free-text description of the job.
   */
  description?: string | null;

  /**
   * Where a job writes its results.
   */
  destination?: JobUpdateResponse.Destination | null;

  /**
   * Human-friendly job name shown in the UI.
   */
  display_name?: string | null;

  /**
   * Name of the extract template this job runs.
   */
  extract_template_name?: string | null;

  /**
   * Configuration for the input data a job processes.
   */
  inputs?: JobUpdateResponse.Inputs | null;

  /**
   * Timestamp of the most recent run.
   */
  last_run_at?: string | null;

  /**
   * Status of the most recent run.
   */
  last_run_status?: 'PENDING' | 'RUNNING' | 'SUCCESS' | 'FAILED' | 'CANCELLED' | 'TIMEOUT' | 'WARNING' | null;

  /**
   * Cron-based schedule controlling when a job runs automatically.
   */
  schedule?: JobUpdateResponse.Schedule | null;

  /**
   * When the job was last updated.
   */
  updated_at?: string | null;
}

export namespace JobUpdateResponse {
  /**
   * Where a job writes its results.
   */
  export interface Destination {
    /**
     * Destination path the output is written to.
     */
    path: string;

    /**
     * Destination kind: a local 'file' or an 's3' bucket.
     */
    type: 'file' | 's3';

    /**
     * Output file format.
     */
    format?: 'jsonl' | 'csv' | 'parquet';
  }

  /**
   * Configuration for the input data a job processes.
   */
  export interface Inputs {
    /**
     * How inputs are supplied: an 's3' bucket, 'inline' records, or an uploaded
     * 'file'.
     */
    type: 's3' | 'inline' | 'file';

    /**
     * Inline list of input records. Used when type is 'inline'.
     */
    data?: Array<{ [key: string]: unknown }> | null;

    /**
     * Path to the input file; must start with 's3' or 'file\_'. Used for 's3'/'file'
     * types.
     */
    file_path?: string | null;

    /**
     * Inline input records keyed by source node id, e.g. {'source_a': [{...}]}. Used
     * when type is 'inline' on a dynamic-workflow job, which has one source node per
     * input file. Mutually exclusive with 'data'.
     */
    node_data?: { [key: string]: Array<{ [key: string]: unknown }> } | null;
  }

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

export interface JobListResponse {
  /**
   * Items returned in this page.
   */
  items: Array<JobListResponse.Item>;

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

export namespace JobListResponse {
  /**
   * A configured job: an agent plus its schedule, inputs, and destination.
   */
  export interface Item {
    /**
     * Unique job identifier (job\_<n>).
     */
    id: string;

    /**
     * Job name.
     */
    name: string;

    /**
     * When the job was created.
     */
    created_at?: string | null;

    /**
     * Free-text description of the job.
     */
    description?: string | null;

    /**
     * Where a job writes its results.
     */
    destination?: Item.Destination | null;

    /**
     * Human-friendly job name shown in the UI.
     */
    display_name?: string | null;

    /**
     * Name of the extract template this job runs.
     */
    extract_template_name?: string | null;

    /**
     * Configuration for the input data a job processes.
     */
    inputs?: Item.Inputs | null;

    /**
     * Timestamp of the most recent run.
     */
    last_run_at?: string | null;

    /**
     * Status of the most recent run.
     */
    last_run_status?:
      | 'PENDING'
      | 'RUNNING'
      | 'SUCCESS'
      | 'FAILED'
      | 'CANCELLED'
      | 'TIMEOUT'
      | 'WARNING'
      | null;

    /**
     * Cron-based schedule controlling when a job runs automatically.
     */
    schedule?: Item.Schedule | null;

    /**
     * When the job was last updated.
     */
    updated_at?: string | null;
  }

  export namespace Item {
    /**
     * Where a job writes its results.
     */
    export interface Destination {
      /**
       * Destination path the output is written to.
       */
      path: string;

      /**
       * Destination kind: a local 'file' or an 's3' bucket.
       */
      type: 'file' | 's3';

      /**
       * Output file format.
       */
      format?: 'jsonl' | 'csv' | 'parquet';
    }

    /**
     * Configuration for the input data a job processes.
     */
    export interface Inputs {
      /**
       * How inputs are supplied: an 's3' bucket, 'inline' records, or an uploaded
       * 'file'.
       */
      type: 's3' | 'inline' | 'file';

      /**
       * Inline list of input records. Used when type is 'inline'.
       */
      data?: Array<{ [key: string]: unknown }> | null;

      /**
       * Path to the input file; must start with 's3' or 'file\_'. Used for 's3'/'file'
       * types.
       */
      file_path?: string | null;

      /**
       * Inline input records keyed by source node id, e.g. {'source_a': [{...}]}. Used
       * when type is 'inline' on a dynamic-workflow job, which has one source node per
       * input file. Mutually exclusive with 'data'.
       */
      node_data?: { [key: string]: Array<{ [key: string]: unknown }> } | null;
    }

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
}

/**
 * A configured job: an agent plus its schedule, inputs, and destination.
 */
export interface JobGetResponse {
  /**
   * Unique job identifier (job\_<n>).
   */
  id: string;

  /**
   * Job name.
   */
  name: string;

  /**
   * When the job was created.
   */
  created_at?: string | null;

  /**
   * Free-text description of the job.
   */
  description?: string | null;

  /**
   * Where a job writes its results.
   */
  destination?: JobGetResponse.Destination | null;

  /**
   * Human-friendly job name shown in the UI.
   */
  display_name?: string | null;

  /**
   * Name of the extract template this job runs.
   */
  extract_template_name?: string | null;

  /**
   * Configuration for the input data a job processes.
   */
  inputs?: JobGetResponse.Inputs | null;

  /**
   * Timestamp of the most recent run.
   */
  last_run_at?: string | null;

  /**
   * Status of the most recent run.
   */
  last_run_status?: 'PENDING' | 'RUNNING' | 'SUCCESS' | 'FAILED' | 'CANCELLED' | 'TIMEOUT' | 'WARNING' | null;

  /**
   * Cron-based schedule controlling when a job runs automatically.
   */
  schedule?: JobGetResponse.Schedule | null;

  /**
   * When the job was last updated.
   */
  updated_at?: string | null;
}

export namespace JobGetResponse {
  /**
   * Where a job writes its results.
   */
  export interface Destination {
    /**
     * Destination path the output is written to.
     */
    path: string;

    /**
     * Destination kind: a local 'file' or an 's3' bucket.
     */
    type: 'file' | 's3';

    /**
     * Output file format.
     */
    format?: 'jsonl' | 'csv' | 'parquet';
  }

  /**
   * Configuration for the input data a job processes.
   */
  export interface Inputs {
    /**
     * How inputs are supplied: an 's3' bucket, 'inline' records, or an uploaded
     * 'file'.
     */
    type: 's3' | 'inline' | 'file';

    /**
     * Inline list of input records. Used when type is 'inline'.
     */
    data?: Array<{ [key: string]: unknown }> | null;

    /**
     * Path to the input file; must start with 's3' or 'file\_'. Used for 's3'/'file'
     * types.
     */
    file_path?: string | null;

    /**
     * Inline input records keyed by source node id, e.g. {'source_a': [{...}]}. Used
     * when type is 'inline' on a dynamic-workflow job, which has one source node per
     * input file. Mutually exclusive with 'data'.
     */
    node_data?: { [key: string]: Array<{ [key: string]: unknown }> } | null;
  }

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

export interface JobCreateParams {
  /**
   * Name of the extract template to run.
   */
  extract_template_name: string;

  /**
   * Job name.
   */
  name: string;

  /**
   * Free-text description of the job.
   */
  description?: string | null;

  /**
   * Where a job writes its results.
   */
  destination?: JobCreateParams.Destination | null;

  /**
   * Human-friendly job name shown in the UI.
   */
  display_name?: string | null;

  /**
   * Configuration for the input data a job processes.
   */
  inputs?: JobCreateParams.Inputs | null;

  /**
   * Cron-based schedule controlling when a job runs automatically.
   */
  schedule?: JobCreateParams.Schedule | null;
}

export namespace JobCreateParams {
  /**
   * Where a job writes its results.
   */
  export interface Destination {
    /**
     * Destination path the output is written to.
     */
    path: string;

    /**
     * Destination kind: a local 'file' or an 's3' bucket.
     */
    type: 'file' | 's3';

    /**
     * Output file format.
     */
    format?: 'jsonl' | 'csv' | 'parquet';
  }

  /**
   * Configuration for the input data a job processes.
   */
  export interface Inputs {
    /**
     * How inputs are supplied: an 's3' bucket, 'inline' records, or an uploaded
     * 'file'.
     */
    type: 's3' | 'inline' | 'file';

    /**
     * Inline list of input records. Used when type is 'inline'.
     */
    data?: Array<{ [key: string]: unknown }> | null;

    /**
     * Path to the input file; must start with 's3' or 'file\_'. Used for 's3'/'file'
     * types.
     */
    file_path?: string | null;

    /**
     * Inline input records keyed by source node id, e.g. {'source_a': [{...}]}. Used
     * when type is 'inline' on a dynamic-workflow job, which has one source node per
     * input file. Mutually exclusive with 'data'.
     */
    node_data?: { [key: string]: Array<{ [key: string]: unknown }> } | null;
  }

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

export interface JobUpdateParams {
  /**
   * New description.
   */
  description?: string | null;

  /**
   * Where a job writes its results.
   */
  destination?: JobUpdateParams.Destination | null;

  /**
   * New display name.
   */
  display_name?: string | null;

  /**
   * Configuration for the input data a job processes.
   */
  inputs?: JobUpdateParams.Inputs | null;

  /**
   * Cron-based schedule controlling when a job runs automatically.
   */
  schedule?: JobUpdateParams.Schedule | null;
}

export namespace JobUpdateParams {
  /**
   * Where a job writes its results.
   */
  export interface Destination {
    /**
     * Destination path the output is written to.
     */
    path: string;

    /**
     * Destination kind: a local 'file' or an 's3' bucket.
     */
    type: 'file' | 's3';

    /**
     * Output file format.
     */
    format?: 'jsonl' | 'csv' | 'parquet';
  }

  /**
   * Configuration for the input data a job processes.
   */
  export interface Inputs {
    /**
     * How inputs are supplied: an 's3' bucket, 'inline' records, or an uploaded
     * 'file'.
     */
    type: 's3' | 'inline' | 'file';

    /**
     * Inline list of input records. Used when type is 'inline'.
     */
    data?: Array<{ [key: string]: unknown }> | null;

    /**
     * Path to the input file; must start with 's3' or 'file\_'. Used for 's3'/'file'
     * types.
     */
    file_path?: string | null;

    /**
     * Inline input records keyed by source node id, e.g. {'source_a': [{...}]}. Used
     * when type is 'inline' on a dynamic-workflow job, which has one source node per
     * input file. Mutually exclusive with 'data'.
     */
    node_data?: { [key: string]: Array<{ [key: string]: unknown }> } | null;
  }

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

export interface JobListParams {
  limit?: number;

  offset?: number;
}

Jobs.Runs = Runs;

export declare namespace Jobs {
  export {
    type JobCreateResponse as JobCreateResponse,
    type JobUpdateResponse as JobUpdateResponse,
    type JobListResponse as JobListResponse,
    type JobGetResponse as JobGetResponse,
    type JobCreateParams as JobCreateParams,
    type JobUpdateParams as JobUpdateParams,
    type JobListParams as JobListParams,
  };

  export {
    Runs as Runs,
    type RunCreateResponse as RunCreateResponse,
    type RunListResponse as RunListResponse,
    type RunCancelResponse as RunCancelResponse,
    type RunGetResponse as RunGetResponse,
    type RunListParams as RunListParams,
  };
}
