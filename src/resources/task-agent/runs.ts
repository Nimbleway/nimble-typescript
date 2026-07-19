// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Runs extends APIResource {
  /**
   * List runs for this instance.
   *
   * `status` accepts a lowercase `TaskRunStatusValue` (e.g. "completed") or a
   * comma-separated list of them (e.g. "queued,running").
   *
   * @deprecated
   */
  list(
    agentID: string,
    query: RunListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RunListResponse> {
    return this._client.get(path`/v1/task-agents/${agentID}/runs`, { query, ...options });
  }

  /**
   * Cancel an in-progress or queued run.
   *
   * Verb is POST + `/cancel` action segment per the AGENTS-1666 spec (replaces the
   * old `DELETE …/runs/{run_id}`).
   *
   * @deprecated
   */
  cancel(runID: string, params: RunCancelParams, options?: RequestOptions): APIPromise<void> {
    const { agent_id } = params;
    return this._client.post(path`/v1/task-agents/${agent_id}/runs/${runID}/cancel`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetch a run by id, scoped to the instance.
   *
   * A run resolves only when (run_id, agent_id) match — otherwise 404. This means a
   * stale URL with a swapped agent_id won't leak runs across instances even if the
   * run_id is real.
   *
   * @deprecated
   */
  get(runID: string, params: RunGetParams, options?: RequestOptions): APIPromise<RunGetResponse> {
    const { agent_id } = params;
    return this._client.get(path`/v1/task-agents/${agent_id}/runs/${runID}`, options);
  }

  /**
   * Fetch the result for a terminal run on this instance.
   *
   * Mirrors the previous flat `GET /tasks/runs/:run_id/result` semantics:
   *
   * - 404 when the run doesn't belong to the agent.
   * - 408 when the run is still active.
   * - 422 (with TaskRunFailedResult body) when the run failed or was cancelled.
   * - 200 (with TaskRunResult body) on success.
   *
   * @deprecated
   */
  getResult(
    runID: string,
    params: RunGetResultParams,
    options?: RequestOptions,
  ): APIPromise<RunGetResultResponse> {
    const { agent_id } = params;
    return this._client.get(path`/v1/task-agents/${agent_id}/runs/${runID}/result`, options);
  }

  /**
   * SSE stream of real-time progress events for a run on this instance.
   *
   * @deprecated
   */
  streamEvents(runID: string, params: RunStreamEventsParams, options?: RequestOptions): APIPromise<void> {
    const { agent_id } = params;
    return this._client.get(path`/v1/task-agents/${agent_id}/runs/${runID}/events`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RunListResponse {
  /**
   * Items returned in this page.
   */
  items: Array<RunListResponse.Item>;

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

export namespace RunListResponse {
  export interface Item {
    /**
     * Run identifier, format "task*run*{uuid}".
     */
    id: string;

    /**
     * When the run was created.
     */
    created_at: string;

    /**
     * Effort level used for the run.
     */
    effort: 'low' | 'medium' | 'high' | 'x-high' | 'max';

    /**
     * Interaction ID.
     */
    interaction_id: string;

    /**
     * True while status is 'queued' or 'running'.
     */
    is_active: boolean;

    /**
     * Current run status.
     */
    status: 'queued' | 'running' | 'completed' | 'failed' | 'cancelled';

    /**
     * Web Search Agent instance this run belongs to.
     */
    web_search_agent_id: string;

    /**
     * When the run completed.
     */
    completed_at?: string | null;

    /**
     * Error details when the run failed.
     */
    error?: Item.Error | null;

    /**
     * Prompt submitted for the run.
     */
    prompt?: string | null;

    /**
     * When the run started executing.
     */
    started_at?: string | null;

    /**
     * Workspace identifier associated with the run.
     */
    workspace_id?: string | null;
  }

  export namespace Item {
    /**
     * Error details when the run failed.
     */
    export interface Error {
      /**
       * Human-readable error description.
       */
      message: string;

      /**
       * Reference ID (equals the run id).
       */
      ref_id: string;
    }
  }
}

export interface RunGetResponse {
  /**
   * Run identifier, format "task*run*{uuid}".
   */
  id: string;

  /**
   * When the run was created.
   */
  created_at: string;

  /**
   * Effort level used for the run.
   */
  effort: 'low' | 'medium' | 'high' | 'x-high' | 'max';

  /**
   * Interaction ID.
   */
  interaction_id: string;

  /**
   * True while status is 'queued' or 'running'.
   */
  is_active: boolean;

  /**
   * Current run status.
   */
  status: 'queued' | 'running' | 'completed' | 'failed' | 'cancelled';

  /**
   * Web Search Agent instance this run belongs to.
   */
  web_search_agent_id: string;

  /**
   * When the run completed.
   */
  completed_at?: string | null;

  /**
   * Error details when the run failed.
   */
  error?: RunGetResponse.Error | null;

  /**
   * Prompt submitted for the run.
   */
  prompt?: string | null;

  /**
   * When the run started executing.
   */
  started_at?: string | null;

  /**
   * Workspace identifier associated with the run.
   */
  workspace_id?: string | null;
}

export namespace RunGetResponse {
  /**
   * Error details when the run failed.
   */
  export interface Error {
    /**
     * Human-readable error description.
     */
    message: string;

    /**
     * Reference ID (equals the run id).
     */
    ref_id: string;
  }
}

export type RunGetResultResponse =
  | RunGetResultResponse.TaskRunResultPublicV1
  | RunGetResultResponse.TaskRunFailedResultPublicV1;

export namespace RunGetResultResponse {
  export interface TaskRunResultPublicV1 {
    /**
     * Output from the completed task.
     */
    output: TaskRunResultPublicV1.TaskRunTextOutputPublicV1 | TaskRunResultPublicV1.TaskRunJsonOutputPublicV1;

    /**
     * Task run object with status 'completed'.
     */
    run: TaskRunResultPublicV1.Run;
  }

  export namespace TaskRunResultPublicV1 {
    export interface TaskRunTextOutputPublicV1 {
      /**
       * The final prose answer.
       */
      content: string;

      /**
       * Trust and citation metadata for the output.
       */
      trust: { [key: string]: unknown };

      /**
       * Output content type.
       */
      type?: 'text';
    }

    export interface TaskRunJsonOutputPublicV1 {
      /**
       * The final structured output.
       */
      content: { [key: string]: unknown } | Array<unknown>;

      /**
       * Trust and citation metadata for the output.
       */
      trust: { [key: string]: unknown };

      /**
       * Output content type.
       */
      type?: 'json';
    }

    /**
     * Task run object with status 'completed'.
     */
    export interface Run {
      /**
       * Run identifier, format "task*run*{uuid}".
       */
      id: string;

      /**
       * When the run was created.
       */
      created_at: string;

      /**
       * Effort level used for the run.
       */
      effort: 'low' | 'medium' | 'high' | 'x-high' | 'max';

      /**
       * Interaction ID.
       */
      interaction_id: string;

      /**
       * True while status is 'queued' or 'running'.
       */
      is_active: boolean;

      /**
       * Current run status.
       */
      status: 'queued' | 'running' | 'completed' | 'failed' | 'cancelled';

      /**
       * Web Search Agent instance this run belongs to.
       */
      web_search_agent_id: string;

      /**
       * When the run completed.
       */
      completed_at?: string | null;

      /**
       * Error details when the run failed.
       */
      error?: Run.Error | null;

      /**
       * Prompt submitted for the run.
       */
      prompt?: string | null;

      /**
       * When the run started executing.
       */
      started_at?: string | null;

      /**
       * Workspace identifier associated with the run.
       */
      workspace_id?: string | null;
    }

    export namespace Run {
      /**
       * Error details when the run failed.
       */
      export interface Error {
        /**
         * Human-readable error description.
         */
        message: string;

        /**
         * Reference ID (equals the run id).
         */
        ref_id: string;
      }
    }
  }

  export interface TaskRunFailedResultPublicV1 {
    /**
     * Structured error detail.
     */
    error: TaskRunFailedResultPublicV1.Error;

    /**
     * Task run object with status 'failed'.
     */
    run: TaskRunFailedResultPublicV1.Run;
  }

  export namespace TaskRunFailedResultPublicV1 {
    /**
     * Structured error detail.
     */
    export interface Error {
      /**
       * Human-readable error description.
       */
      message: string;

      /**
       * Reference ID (equals the run id).
       */
      ref_id: string;
    }

    /**
     * Task run object with status 'failed'.
     */
    export interface Run {
      /**
       * Run identifier, format "task*run*{uuid}".
       */
      id: string;

      /**
       * When the run was created.
       */
      created_at: string;

      /**
       * Effort level used for the run.
       */
      effort: 'low' | 'medium' | 'high' | 'x-high' | 'max';

      /**
       * Interaction ID.
       */
      interaction_id: string;

      /**
       * True while status is 'queued' or 'running'.
       */
      is_active: boolean;

      /**
       * Current run status.
       */
      status: 'queued' | 'running' | 'completed' | 'failed' | 'cancelled';

      /**
       * Web Search Agent instance this run belongs to.
       */
      web_search_agent_id: string;

      /**
       * When the run completed.
       */
      completed_at?: string | null;

      /**
       * Error details when the run failed.
       */
      error?: Run.Error | null;

      /**
       * Prompt submitted for the run.
       */
      prompt?: string | null;

      /**
       * When the run started executing.
       */
      started_at?: string | null;

      /**
       * Workspace identifier associated with the run.
       */
      workspace_id?: string | null;
    }

    export namespace Run {
      /**
       * Error details when the run failed.
       */
      export interface Error {
        /**
         * Human-readable error description.
         */
        message: string;

        /**
         * Reference ID (equals the run id).
         */
        ref_id: string;
      }
    }
  }
}

export interface RunListParams {
  limit?: number;

  offset?: number;
}

export interface RunCancelParams {
  agent_id: string;
}

export interface RunGetParams {
  agent_id: string;
}

export interface RunGetResultParams {
  agent_id: string;
}

export interface RunStreamEventsParams {
  agent_id: string;
}

export declare namespace Runs {
  export {
    type RunListResponse as RunListResponse,
    type RunGetResponse as RunGetResponse,
    type RunGetResultResponse as RunGetResultResponse,
    type RunListParams as RunListParams,
    type RunCancelParams as RunCancelParams,
    type RunGetParams as RunGetParams,
    type RunGetResultParams as RunGetResultParams,
    type RunStreamEventsParams as RunStreamEventsParams,
  };
}
