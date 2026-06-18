// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RunsAPI from './runs/runs';
import { RunCancelResponse, RunGetResponse, RunListParams, RunListResponse, Runs } from './runs/runs';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Jobs extends APIResource {
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);

  /**
   * Create Job
   */
  create(body: JobCreateParams, options?: RequestOptions): APIPromise<JobCreateResponse> {
    return this._client.post('/v1/jobs', { body, ...options });
  }

  /**
   * Update Job
   */
  update(jobID: string, body: JobUpdateParams, options?: RequestOptions): APIPromise<JobUpdateResponse> {
    return this._client.patch(path`/v1/jobs/${jobID}`, { body, ...options });
  }

  /**
   * List Jobs
   */
  list(query: JobListParams | null | undefined = {}, options?: RequestOptions): APIPromise<JobListResponse> {
    return this._client.get('/v1/jobs', { query, ...options });
  }

  /**
   * Delete Job
   */
  delete(jobID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/jobs/${jobID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get Job
   */
  get(jobID: string, options?: RequestOptions): APIPromise<JobGetResponse> {
    return this._client.get(path`/v1/jobs/${jobID}`, options);
  }

  /**
   * Trigger Run
   */
  run(jobID: string, options?: RequestOptions): APIPromise<JobRunResponse> {
    return this._client.post(path`/v1/jobs/${jobID}/runs`, options);
  }
}

export interface JobCreateResponse {
  id: string;

  name: string;

  agent_name?: string | null;

  created_at?: string | null;

  description?: string | null;

  destination?: JobCreateResponse.Destination | null;

  display_name?: string | null;

  inputs?: JobCreateResponse.Inputs | null;

  last_run_at?: string | null;

  last_run_status?: 'PENDING' | 'RUNNING' | 'SUCCESS' | 'FAILED' | 'CANCELLED' | 'TIMEOUT' | 'WARNING' | null;

  schedule?: JobCreateResponse.Schedule | null;

  updated_at?: string | null;
}

export namespace JobCreateResponse {
  export interface Destination {
    path: string;

    type: 'file' | 's3';

    format?: 'jsonl' | 'csv' | 'parquet';
  }

  export interface Inputs {
    type: 's3' | 'inline' | 'file';

    data?: Array<{ [key: string]: unknown }> | null;

    file_path?: string | null;
  }

  export interface Schedule {
    cron: string;

    enabled: boolean;
  }
}

export interface JobUpdateResponse {
  id: string;

  name: string;

  agent_name?: string | null;

  created_at?: string | null;

  description?: string | null;

  destination?: JobUpdateResponse.Destination | null;

  display_name?: string | null;

  inputs?: JobUpdateResponse.Inputs | null;

  last_run_at?: string | null;

  last_run_status?: 'PENDING' | 'RUNNING' | 'SUCCESS' | 'FAILED' | 'CANCELLED' | 'TIMEOUT' | 'WARNING' | null;

  schedule?: JobUpdateResponse.Schedule | null;

  updated_at?: string | null;
}

export namespace JobUpdateResponse {
  export interface Destination {
    path: string;

    type: 'file' | 's3';

    format?: 'jsonl' | 'csv' | 'parquet';
  }

  export interface Inputs {
    type: 's3' | 'inline' | 'file';

    data?: Array<{ [key: string]: unknown }> | null;

    file_path?: string | null;
  }

  export interface Schedule {
    cron: string;

    enabled: boolean;
  }
}

export interface JobListResponse {
  items: Array<JobListResponse.Item>;

  page: number;

  per_page: number;

  total: number;
}

export namespace JobListResponse {
  export interface Item {
    id: string;

    name: string;

    agent_name?: string | null;

    created_at?: string | null;

    description?: string | null;

    destination?: Item.Destination | null;

    display_name?: string | null;

    inputs?: Item.Inputs | null;

    last_run_at?: string | null;

    last_run_status?:
      | 'PENDING'
      | 'RUNNING'
      | 'SUCCESS'
      | 'FAILED'
      | 'CANCELLED'
      | 'TIMEOUT'
      | 'WARNING'
      | null;

    schedule?: Item.Schedule | null;

    updated_at?: string | null;
  }

  export namespace Item {
    export interface Destination {
      path: string;

      type: 'file' | 's3';

      format?: 'jsonl' | 'csv' | 'parquet';
    }

    export interface Inputs {
      type: 's3' | 'inline' | 'file';

      data?: Array<{ [key: string]: unknown }> | null;

      file_path?: string | null;
    }

    export interface Schedule {
      cron: string;

      enabled: boolean;
    }
  }
}

export interface JobGetResponse {
  id: string;

  name: string;

  agent_name?: string | null;

  created_at?: string | null;

  description?: string | null;

  destination?: JobGetResponse.Destination | null;

  display_name?: string | null;

  inputs?: JobGetResponse.Inputs | null;

  last_run_at?: string | null;

  last_run_status?: 'PENDING' | 'RUNNING' | 'SUCCESS' | 'FAILED' | 'CANCELLED' | 'TIMEOUT' | 'WARNING' | null;

  schedule?: JobGetResponse.Schedule | null;

  updated_at?: string | null;
}

export namespace JobGetResponse {
  export interface Destination {
    path: string;

    type: 'file' | 's3';

    format?: 'jsonl' | 'csv' | 'parquet';
  }

  export interface Inputs {
    type: 's3' | 'inline' | 'file';

    data?: Array<{ [key: string]: unknown }> | null;

    file_path?: string | null;
  }

  export interface Schedule {
    cron: string;

    enabled: boolean;
  }
}

export interface JobRunResponse {
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

export interface JobCreateParams {
  agent_name: string;

  name: string;

  description?: string | null;

  destination?: JobCreateParams.Destination | null;

  display_name?: string | null;

  inputs?: JobCreateParams.Inputs | null;

  schedule?: JobCreateParams.Schedule | null;
}

export namespace JobCreateParams {
  export interface Destination {
    path: string;

    type: 'file' | 's3';

    format?: 'jsonl' | 'csv' | 'parquet';
  }

  export interface Inputs {
    type: 's3' | 'inline' | 'file';

    data?: Array<{ [key: string]: unknown }> | null;

    file_path?: string | null;
  }

  export interface Schedule {
    cron: string;

    enabled: boolean;
  }
}

export interface JobUpdateParams {
  description?: string | null;

  destination?: JobUpdateParams.Destination | null;

  display_name?: string | null;

  inputs?: JobUpdateParams.Inputs | null;

  schedule?: JobUpdateParams.Schedule | null;
}

export namespace JobUpdateParams {
  export interface Destination {
    path: string;

    type: 'file' | 's3';

    format?: 'jsonl' | 'csv' | 'parquet';
  }

  export interface Inputs {
    type: 's3' | 'inline' | 'file';

    data?: Array<{ [key: string]: unknown }> | null;

    file_path?: string | null;
  }

  export interface Schedule {
    cron: string;

    enabled: boolean;
  }
}

export interface JobListParams {
  /**
   * Filter by agent name
   */
  agent_name?: string | null;

  page?: number;

  per_page?: number;

  /**
   * Search by name or display name
   */
  q?: string | null;
}

Jobs.Runs = Runs;

export declare namespace Jobs {
  export {
    type JobCreateResponse as JobCreateResponse,
    type JobUpdateResponse as JobUpdateResponse,
    type JobListResponse as JobListResponse,
    type JobGetResponse as JobGetResponse,
    type JobRunResponse as JobRunResponse,
    type JobCreateParams as JobCreateParams,
    type JobUpdateParams as JobUpdateParams,
    type JobListParams as JobListParams,
  };

  export {
    Runs as Runs,
    type RunListResponse as RunListResponse,
    type RunCancelResponse as RunCancelResponse,
    type RunGetResponse as RunGetResponse,
    type RunListParams as RunListParams,
  };
}
