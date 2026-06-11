// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Runs extends APIResource {
  /**
   * List task runs for the caller's workspace and the given agent, newest first.
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
   */
  cancel(runID: string, params: RunCancelParams, options?: RequestOptions): APIPromise<void> {
    const { agent_id } = params;
    return this._client.post(path`/v1/task-agents/${agent_id}/runs/${runID}/cancel`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Poll run status. Repeat until status is 'completed', 'failed', or 'cancelled'.
   */
  get(runID: string, params: RunGetParams, options?: RequestOptions): APIPromise<RunGetResponse> {
    const { agent_id } = params;
    return this._client.get(path`/v1/task-agents/${agent_id}/runs/${runID}`, options);
  }

  /**
   * Fetch the result for a terminal run. Returns 408 if still active, 422 with
   * `AgentRunFailedResult` if failed.
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
   * Server-Sent Events stream of real-time progress events for a run. The run must
   * have been created with `enable_events=true`.
   */
  streamEvents(runID: string, params: RunStreamEventsParams, options?: RequestOptions): APIPromise<unknown> {
    const { agent_id } = params;
    return this._client.get(path`/v1/task-agents/${agent_id}/runs/${runID}/events`, options);
  }
}

export type RunListResponse = Array<RunListResponse.RunListResponseItem>;

export namespace RunListResponse {
  export interface RunListResponseItem {
    /**
     * Run identifier.
     */
    id: string;

    created_at: string;

    effort: 'quickest' | 'quick' | 'research' | 'pro' | 'max';

    /**
     * Interaction ID — pass as previous_interaction_id to reuse context.
     */
    interaction_id: string;

    /**
     * True while status is 'queued' or 'running'.
     */
    is_active: boolean;

    status: 'queued' | 'running' | 'completed' | 'failed' | 'cancelled';

    completed_at?: string | null;

    error?: RunListResponseItem.Error | null;

    prompt?: string | null;

    started_at?: string | null;

    /**
     * Web Search Agent instance this run belongs to.
     */
    web_search_agent_id?: string | null;

    workspace_id?: string | null;
  }

  export namespace RunListResponseItem {
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
   * Run identifier.
   */
  id: string;

  created_at: string;

  effort: 'quickest' | 'quick' | 'research' | 'pro' | 'max';

  /**
   * Interaction ID — pass as previous_interaction_id to reuse context.
   */
  interaction_id: string;

  /**
   * True while status is 'queued' or 'running'.
   */
  is_active: boolean;

  status: 'queued' | 'running' | 'completed' | 'failed' | 'cancelled';

  completed_at?: string | null;

  error?: RunGetResponse.Error | null;

  prompt?: string | null;

  started_at?: string | null;

  /**
   * Web Search Agent instance this run belongs to.
   */
  web_search_agent_id?: string | null;

  workspace_id?: string | null;
}

export namespace RunGetResponse {
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
  | RunGetResultResponse.AgentRunResult
  | RunGetResultResponse.AgentRunFailedResult;

export namespace RunGetResultResponse {
  export interface AgentRunResult {
    output: AgentRunResult.AgentRunTextOutput | AgentRunResult.AgentRunJsonOutput;

    run: AgentRunResult.Run;
  }

  export namespace AgentRunResult {
    export interface AgentRunTextOutput {
      /**
       * The final prose answer.
       */
      content: string;

      basis?: Array<AgentRunTextOutput.Basi>;

      type?: 'text';
    }

    export namespace AgentRunTextOutput {
      export interface Basi {
        field: string;

        citations?: Array<Basi.Citation>;

        confidence?: 'high' | 'medium' | 'low' | null;

        reasoning?: string;
      }

      export namespace Basi {
        export interface Citation {
          url: string;

          excerpts?: Array<string> | null;

          index?: number | null;

          title?: string | null;

          web_search_agent?: string | null;
        }
      }
    }

    export interface AgentRunJsonOutput {
      content: { [key: string]: unknown } | Array<unknown>;

      basis?: Array<AgentRunJsonOutput.Basi>;

      type?: 'json';
    }

    export namespace AgentRunJsonOutput {
      export interface Basi {
        field: string;

        citations?: Array<Basi.Citation>;

        confidence?: 'high' | 'medium' | 'low' | null;

        reasoning?: string;
      }

      export namespace Basi {
        export interface Citation {
          url: string;

          excerpts?: Array<string> | null;

          index?: number | null;

          title?: string | null;

          web_search_agent?: string | null;
        }
      }
    }

    export interface Run {
      /**
       * Run identifier.
       */
      id: string;

      created_at: string;

      effort: 'quickest' | 'quick' | 'research' | 'pro' | 'max';

      /**
       * Interaction ID — pass as previous_interaction_id to reuse context.
       */
      interaction_id: string;

      /**
       * True while status is 'queued' or 'running'.
       */
      is_active: boolean;

      status: 'queued' | 'running' | 'completed' | 'failed' | 'cancelled';

      completed_at?: string | null;

      error?: Run.Error | null;

      prompt?: string | null;

      started_at?: string | null;

      /**
       * Web Search Agent instance this run belongs to.
       */
      web_search_agent_id?: string | null;

      workspace_id?: string | null;
    }

    export namespace Run {
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

  export interface AgentRunFailedResult {
    error: AgentRunFailedResult.Error;

    run: AgentRunFailedResult.Run;
  }

  export namespace AgentRunFailedResult {
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

    export interface Run {
      /**
       * Run identifier.
       */
      id: string;

      created_at: string;

      effort: 'quickest' | 'quick' | 'research' | 'pro' | 'max';

      /**
       * Interaction ID — pass as previous_interaction_id to reuse context.
       */
      interaction_id: string;

      /**
       * True while status is 'queued' or 'running'.
       */
      is_active: boolean;

      status: 'queued' | 'running' | 'completed' | 'failed' | 'cancelled';

      completed_at?: string | null;

      error?: Run.Error | null;

      prompt?: string | null;

      started_at?: string | null;

      /**
       * Web Search Agent instance this run belongs to.
       */
      web_search_agent_id?: string | null;

      workspace_id?: string | null;
    }

    export namespace Run {
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
