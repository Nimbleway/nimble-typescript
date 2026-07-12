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
   */
  streamEvents(runID: string, params: RunStreamEventsParams, options?: RequestOptions): APIPromise<unknown> {
    const { agent_id } = params;
    return this._client.get(path`/v1/task-agents/${agent_id}/runs/${runID}/events`, options);
  }
}

/**
 * Paginated list of task runs for GET /tasks/runs.
 */
export interface RunListResponse {
  items: Array<RunListResponse.Item>;

  total: number;

  limit?: number;

  offset?: number;
}

export namespace RunListResponse {
  /**
   * Task run status returned by list/create/get endpoints.
   */
  export interface Item {
    /**
     * Run identifier, format "task*run*{uuid}".
     */
    id: string;

    created_at: string;

    /**
     * Canonical effort tier names for the research graph.
     */
    effort: 'low' | 'medium' | 'high' | 'x-high' | 'max';

    /**
     * Interaction ID — pass as previous_interaction_id to reuse context.
     */
    interaction_id: string;

    /**
     * True while status is 'queued' or 'running'.
     */
    is_active: boolean;

    /**
     * Lowercase status values used in API responses (distinct from the DB-level
     * TaskRunStatus enum).
     */
    status: 'queued' | 'running' | 'completed' | 'failed' | 'cancelled';

    /**
     * Web Search Agent instance this run belongs to. Every task run is agent-bound
     * (see AGENTS-1666). Use this to build the nested URL
     * /api/v2/web-search-agents/{web_search_agent_id}/runs/{id}.
     */
    web_search_agent_id: string;

    completed_at?: string | null;

    /**
     * Error detail for a failed run.
     */
    error?: Item.Error | null;

    /**
     * Original user prompt before enrichment. Populated for Web Search Agent runs.
     */
    prompt?: string | null;

    started_at?: string | null;

    workspace_id?: string | null;
  }

  export namespace Item {
    /**
     * Error detail for a failed run.
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

/**
 * Task run status returned by list/create/get endpoints.
 */
export interface RunGetResponse {
  /**
   * Run identifier, format "task*run*{uuid}".
   */
  id: string;

  created_at: string;

  /**
   * Canonical effort tier names for the research graph.
   */
  effort: 'low' | 'medium' | 'high' | 'x-high' | 'max';

  /**
   * Interaction ID — pass as previous_interaction_id to reuse context.
   */
  interaction_id: string;

  /**
   * True while status is 'queued' or 'running'.
   */
  is_active: boolean;

  /**
   * Lowercase status values used in API responses (distinct from the DB-level
   * TaskRunStatus enum).
   */
  status: 'queued' | 'running' | 'completed' | 'failed' | 'cancelled';

  /**
   * Web Search Agent instance this run belongs to. Every task run is agent-bound
   * (see AGENTS-1666). Use this to build the nested URL
   * /api/v2/web-search-agents/{web_search_agent_id}/runs/{id}.
   */
  web_search_agent_id: string;

  completed_at?: string | null;

  /**
   * Error detail for a failed run.
   */
  error?: RunGetResponse.Error | null;

  /**
   * Original user prompt before enrichment. Populated for Web Search Agent runs.
   */
  prompt?: string | null;

  started_at?: string | null;

  workspace_id?: string | null;
}

export namespace RunGetResponse {
  /**
   * Error detail for a failed run.
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

/**
 * Response for GET /tasks/runs/{run_id}/result — status 'completed'.
 */
export type RunGetResultResponse =
  | RunGetResultResponse.TaskRunResult
  | RunGetResultResponse.TaskRunFailedResult;

export namespace RunGetResultResponse {
  /**
   * Response for GET /tasks/runs/{run_id}/result — status 'completed'.
   */
  export interface TaskRunResult {
    /**
     * Output from the completed task.
     */
    output: TaskRunResult.TaskRunTextOutput | TaskRunResult.TaskRunJsonOutput;

    /**
     * Task run object with status 'completed'.
     */
    run: TaskRunResult.Run;
  }

  export namespace TaskRunResult {
    /**
     * Text output from a completed task.
     */
    export interface TaskRunTextOutput {
      /**
       * The final prose answer.
       */
      content: string;

      trust: TaskRunTextOutput.Trust;

      type?: 'text';
    }

    export namespace TaskRunTextOutput {
      export interface Trust {
        claims: Array<Trust.Claim>;

        confidence: 'high' | 'medium' | 'low';

        reasoning: string;

        sources: Array<Trust.Source>;
      }

      export namespace Trust {
        export interface Claim {
          callout: number;

          citations: Array<Claim.Citation>;

          confidence: 'high' | 'medium' | 'low';

          reasoning: string;
        }

        export namespace Claim {
          export interface Citation {
            url: string;

            excerpts?: Array<string> | null;

            extract_template_name?: string | null;

            /**
             * What _kind_ of source this is (classified by the compress LLM), independent of
             * TrustSourceType (how authoritative it is for a specific claim). Deliberately
             * uses "official" rather than "primary" so the two axes can never collide.
             *
             * Also doubles as the sub-question's `source_intent` (what kind of source a
             * question _needs_) — the two concepts overlap enough that a single enum lets
             * `classify_source_importance` compare "what we got" against "what we asked for"
             * directly.
             */
            source_category?: 'official' | 'news' | 'social' | 'academic' | 'aggregator' | 'other' | null;

            /**
             * What _kind_ of source this is (classified by the compress LLM), independent of
             * TrustSourceType (how authoritative it is for a specific claim). Deliberately
             * uses "official" rather than "primary" so the two axes can never collide.
             *
             * Also doubles as the sub-question's `source_intent` (what kind of source a
             * question _needs_) — the two concepts overlap enough that a single enum lets
             * `classify_source_importance` compare "what we got" against "what we asked for"
             * directly.
             */
            source_intent?: 'official' | 'news' | 'social' | 'academic' | 'aggregator' | 'other' | null;

            source_type?: 'primary' | 'secondary' | null;

            title?: string | null;
          }
        }

        export interface Source {
          type: 'primary' | 'secondary';

          url: string;

          extract_template_name?: string | null;

          /**
           * What _kind_ of source this is (classified by the compress LLM), independent of
           * TrustSourceType (how authoritative it is for a specific claim). Deliberately
           * uses "official" rather than "primary" so the two axes can never collide.
           *
           * Also doubles as the sub-question's `source_intent` (what kind of source a
           * question _needs_) — the two concepts overlap enough that a single enum lets
           * `classify_source_importance` compare "what we got" against "what we asked for"
           * directly.
           */
          source_category?: 'official' | 'news' | 'social' | 'academic' | 'aggregator' | 'other' | null;

          /**
           * What _kind_ of source this is (classified by the compress LLM), independent of
           * TrustSourceType (how authoritative it is for a specific claim). Deliberately
           * uses "official" rather than "primary" so the two axes can never collide.
           *
           * Also doubles as the sub-question's `source_intent` (what kind of source a
           * question _needs_) — the two concepts overlap enough that a single enum lets
           * `classify_source_importance` compare "what we got" against "what we asked for"
           * directly.
           */
          source_intent?: 'official' | 'news' | 'social' | 'academic' | 'aggregator' | 'other' | null;

          title?: string | null;
        }
      }
    }

    /**
     * Structured JSON output from a completed task, produced when
     * task_spec.output_schema.type is 'json'.
     */
    export interface TaskRunJsonOutput {
      /**
       * Data conforming to the caller-supplied JSON schema. A dict for object schemas; a
       * list for array schemas.
       */
      content: { [key: string]: unknown } | Array<unknown>;

      trust: TaskRunJsonOutput.Trust;

      type?: 'json';
    }

    export namespace TaskRunJsonOutput {
      export interface Trust {
        claims: Array<Trust.Claim>;

        confidence: 'high' | 'medium' | 'low';

        reasoning: string;

        sources: Array<Trust.Source>;
      }

      export namespace Trust {
        export interface Claim {
          citations: Array<Claim.Citation>;

          confidence: 'high' | 'medium' | 'low';

          path: string;

          reasoning: string;
        }

        export namespace Claim {
          export interface Citation {
            url: string;

            excerpts?: Array<string> | null;

            extract_template_name?: string | null;

            /**
             * What _kind_ of source this is (classified by the compress LLM), independent of
             * TrustSourceType (how authoritative it is for a specific claim). Deliberately
             * uses "official" rather than "primary" so the two axes can never collide.
             *
             * Also doubles as the sub-question's `source_intent` (what kind of source a
             * question _needs_) — the two concepts overlap enough that a single enum lets
             * `classify_source_importance` compare "what we got" against "what we asked for"
             * directly.
             */
            source_category?: 'official' | 'news' | 'social' | 'academic' | 'aggregator' | 'other' | null;

            /**
             * What _kind_ of source this is (classified by the compress LLM), independent of
             * TrustSourceType (how authoritative it is for a specific claim). Deliberately
             * uses "official" rather than "primary" so the two axes can never collide.
             *
             * Also doubles as the sub-question's `source_intent` (what kind of source a
             * question _needs_) — the two concepts overlap enough that a single enum lets
             * `classify_source_importance` compare "what we got" against "what we asked for"
             * directly.
             */
            source_intent?: 'official' | 'news' | 'social' | 'academic' | 'aggregator' | 'other' | null;

            source_type?: 'primary' | 'secondary' | null;

            title?: string | null;
          }
        }

        export interface Source {
          type: 'primary' | 'secondary';

          url: string;

          extract_template_name?: string | null;

          /**
           * What _kind_ of source this is (classified by the compress LLM), independent of
           * TrustSourceType (how authoritative it is for a specific claim). Deliberately
           * uses "official" rather than "primary" so the two axes can never collide.
           *
           * Also doubles as the sub-question's `source_intent` (what kind of source a
           * question _needs_) — the two concepts overlap enough that a single enum lets
           * `classify_source_importance` compare "what we got" against "what we asked for"
           * directly.
           */
          source_category?: 'official' | 'news' | 'social' | 'academic' | 'aggregator' | 'other' | null;

          /**
           * What _kind_ of source this is (classified by the compress LLM), independent of
           * TrustSourceType (how authoritative it is for a specific claim). Deliberately
           * uses "official" rather than "primary" so the two axes can never collide.
           *
           * Also doubles as the sub-question's `source_intent` (what kind of source a
           * question _needs_) — the two concepts overlap enough that a single enum lets
           * `classify_source_importance` compare "what we got" against "what we asked for"
           * directly.
           */
          source_intent?: 'official' | 'news' | 'social' | 'academic' | 'aggregator' | 'other' | null;

          title?: string | null;
        }
      }
    }

    /**
     * Task run object with status 'completed'.
     */
    export interface Run {
      /**
       * Run identifier, format "task*run*{uuid}".
       */
      id: string;

      created_at: string;

      /**
       * Canonical effort tier names for the research graph.
       */
      effort: 'low' | 'medium' | 'high' | 'x-high' | 'max';

      /**
       * Interaction ID — pass as previous_interaction_id to reuse context.
       */
      interaction_id: string;

      /**
       * True while status is 'queued' or 'running'.
       */
      is_active: boolean;

      /**
       * Lowercase status values used in API responses (distinct from the DB-level
       * TaskRunStatus enum).
       */
      status: 'queued' | 'running' | 'completed' | 'failed' | 'cancelled';

      /**
       * Web Search Agent instance this run belongs to. Every task run is agent-bound
       * (see AGENTS-1666). Use this to build the nested URL
       * /api/v2/web-search-agents/{web_search_agent_id}/runs/{id}.
       */
      web_search_agent_id: string;

      completed_at?: string | null;

      /**
       * Error detail for a failed run.
       */
      error?: Run.Error | null;

      /**
       * Original user prompt before enrichment. Populated for Web Search Agent runs.
       */
      prompt?: string | null;

      started_at?: string | null;

      workspace_id?: string | null;
    }

    export namespace Run {
      /**
       * Error detail for a failed run.
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

  /**
   * Response for GET /tasks/runs/{run_id}/result when the run failed.
   *
   * Returned with HTTP 422 so callers can distinguish a failed run from a missing
   * one (404) or an active one (408).
   */
  export interface TaskRunFailedResult {
    /**
     * Structured error detail.
     */
    error: TaskRunFailedResult.Error;

    /**
     * Task run object with status 'failed'.
     */
    run: TaskRunFailedResult.Run;
  }

  export namespace TaskRunFailedResult {
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

      created_at: string;

      /**
       * Canonical effort tier names for the research graph.
       */
      effort: 'low' | 'medium' | 'high' | 'x-high' | 'max';

      /**
       * Interaction ID — pass as previous_interaction_id to reuse context.
       */
      interaction_id: string;

      /**
       * True while status is 'queued' or 'running'.
       */
      is_active: boolean;

      /**
       * Lowercase status values used in API responses (distinct from the DB-level
       * TaskRunStatus enum).
       */
      status: 'queued' | 'running' | 'completed' | 'failed' | 'cancelled';

      /**
       * Web Search Agent instance this run belongs to. Every task run is agent-bound
       * (see AGENTS-1666). Use this to build the nested URL
       * /api/v2/web-search-agents/{web_search_agent_id}/runs/{id}.
       */
      web_search_agent_id: string;

      completed_at?: string | null;

      /**
       * Error detail for a failed run.
       */
      error?: Run.Error | null;

      /**
       * Original user prompt before enrichment. Populated for Web Search Agent runs.
       */
      prompt?: string | null;

      started_at?: string | null;

      workspace_id?: string | null;
    }

    export namespace Run {
      /**
       * Error detail for a failed run.
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

export type RunStreamEventsResponse = unknown;

export interface RunListParams {
  limit?: number;

  offset?: number;

  q?: string | null;

  status?: string | null;
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
    type RunStreamEventsResponse as RunStreamEventsResponse,
    type RunListParams as RunListParams,
    type RunCancelParams as RunCancelParams,
    type RunGetParams as RunGetParams,
    type RunGetResultParams as RunGetResultParams,
    type RunStreamEventsParams as RunStreamEventsParams,
  };
}
