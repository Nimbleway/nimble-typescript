// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { Stream } from '../../core/streaming';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Runs extends APIResource {
  /**
   * Start an agent run. The run executes asynchronously: the response returns
   * immediately with status `queued`, then poll `GET .../runs/{run_id}` until
   * `completed` and fetch the output from `GET .../runs/{run_id}/result` — or set
   * `enable_events: true` and follow `GET .../runs/{run_id}/events` for live
   * progress.
   *
   * To enrich existing records instead of researching from scratch, pass them in
   * `input_data`; this requires an `output_schema` (on the request or the agent).
   */
  create(agentID: string, body: RunCreateParams, options?: RequestOptions): APIPromise<RunCreateResponse> {
    return this._client.post(path`/v2/agents/${agentID}/runs`, { body, ...options });
  }

  /**
   * List the runs of an agent, newest first, paginated with `offset`/`limit`.
   */
  list(
    agentID: string,
    query: RunListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RunListResponse> {
    return this._client.get(path`/v2/agents/${agentID}/runs`, { query, ...options });
  }

  /**
   * Retrieve a run's current state. Poll this endpoint after creating a run: the run
   * is finished once `status` is `completed`, `failed`, or `cancelled`.
   */
  get(runID: string, params: RunGetParams, options?: RequestOptions): APIPromise<RunGetResponse> {
    const { agent_id } = params;
    return this._client.get(path`/v2/agents/${agent_id}/runs/${runID}`, options);
  }

  /**
   * Fetch the output of a completed run. The `output` is `type: "text"` (a prose
   * answer) or `type: "json"` (structured data matching the output schema), plus
   * `trust` metadata with per-claim citations for the answer.
   *
   * While the run is still `queued` or `running` this endpoint returns `409`; if the
   * run `failed` or was `cancelled` it returns `422` with the run and error details.
   */
  result(runID: string, params: RunResultParams, options?: RequestOptions): APIPromise<RunResultResponse> {
    const { agent_id } = params;
    return this._client.get(path`/v2/agents/${agent_id}/runs/${runID}/result`, options);
  }

  /**
   * Stream a run's progress as
   * [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
   * (`text/event-stream`). Create the run with `enable_events: true` to have events
   * published. A keep-alive comment is sent every 15 seconds.
   */
  streamEvents(
    runID: string,
    params: RunStreamEventsParams,
    options?: RequestOptions,
  ): APIPromise<Stream<RunStreamEventsResponse>> {
    const { agent_id } = params;
    return this._client.get(path`/v2/agents/${agent_id}/runs/${runID}/events`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    }) as APIPromise<Stream<RunStreamEventsResponse>>;
  }
}

export interface RunCreateResponse {
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
  effort: 'low' | 'medium' | 'high' | 'x-high' | '5x-high' | 'max';

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
  error?: RunCreateResponse.Error | null;

  /**
   * Prompt submitted for the run.
   */
  prompt?: string | null;

  /**
   * When the run started executing.
   */
  started_at?: string | null;
}

export namespace RunCreateResponse {
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
    effort: 'low' | 'medium' | 'high' | 'x-high' | '5x-high' | 'max';

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
  effort: 'low' | 'medium' | 'high' | 'x-high' | '5x-high' | 'max';

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

export type RunResultResponse =
  | RunResultResponse.TaskRunResultPublicV2
  | RunResultResponse.TaskRunFailedResultPublicV2;

export namespace RunResultResponse {
  export interface TaskRunResultPublicV2 {
    /**
     * Output from the completed task.
     */
    output: TaskRunResultPublicV2.TaskRunTextOutputPublicV2 | TaskRunResultPublicV2.TaskRunJsonOutputPublicV2;

    /**
     * Task run object with status 'completed'.
     */
    run: TaskRunResultPublicV2.Run;
  }

  export namespace TaskRunResultPublicV2 {
    export interface TaskRunTextOutputPublicV2 {
      /**
       * The final prose answer.
       */
      content: string;

      /**
       * Trust and citation metadata for the output.
       */
      trust: TaskRunTextOutputPublicV2.Trust;

      /**
       * Output content type.
       */
      type?: 'text';
    }

    export namespace TaskRunTextOutputPublicV2 {
      /**
       * Trust and citation metadata for the output.
       */
      export interface Trust {
        /**
         * Per-claim trust, keyed by callout markers in the answer text.
         */
        claims: Array<Trust.Claim>;

        /**
         * Overall confidence in the answer.
         */
        confidence: 'high' | 'medium' | 'low' | 'pre_existing';

        /**
         * Why this confidence level was assigned.
         */
        reasoning: string;

        /**
         * Sources consulted while producing the answer.
         */
        sources: Array<Trust.Source>;
      }

      export namespace Trust {
        /**
         * Trust metadata for one claim in a prose answer, keyed by callout marker.
         */
        export interface Claim {
          /**
           * Callout marker number referencing this claim in the answer text.
           */
          callout: number;

          /**
           * Citations backing this claim.
           */
          citations: Array<Claim.Citation>;

          /**
           * Confidence in this claim.
           */
          confidence: 'high' | 'medium' | 'low' | 'pre_existing';

          /**
           * Why this confidence level was assigned.
           */
          reasoning: string;
        }

        export namespace Claim {
          /**
           * A citation backing a specific claim in the answer.
           */
          export interface Citation {
            /**
             * URL of the cited page.
             */
            url: string;

            /**
             * Verbatim excerpts supporting the claim.
             */
            excerpts?: Array<string> | null;

            /**
             * Extract template used to read the source, when one was used.
             */
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

            /**
             * How authoritative the source is: 'primary' or 'secondary'.
             */
            source_type?: 'primary' | 'secondary' | null;

            /**
             * Title of the cited page.
             */
            title?: string | null;
          }
        }

        /**
         * A source consulted while producing the answer.
         */
        export interface Source {
          /**
           * How authoritative the source is: 'primary' or 'secondary'.
           */
          type: 'primary' | 'secondary';

          /**
           * URL of the source page.
           */
          url: string;

          /**
           * Extract template used to read the source, when one was used.
           */
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

          /**
           * Title of the source page.
           */
          title?: string | null;
        }
      }
    }

    export interface TaskRunJsonOutputPublicV2 {
      /**
       * The final structured output.
       */
      content: { [key: string]: unknown } | Array<unknown>;

      /**
       * Trust and citation metadata for the output.
       */
      trust: TaskRunJsonOutputPublicV2.Trust;

      /**
       * Output content type.
       */
      type?: 'json';
    }

    export namespace TaskRunJsonOutputPublicV2 {
      /**
       * Trust and citation metadata for the output.
       */
      export interface Trust {
        /**
         * Per-value trust, keyed by JSON path in the structured output.
         */
        claims: Array<Trust.Claim>;

        /**
         * Overall confidence in the answer.
         */
        confidence: 'high' | 'medium' | 'low' | 'pre_existing';

        /**
         * Why this confidence level was assigned.
         */
        reasoning: string;

        /**
         * Sources consulted while producing the answer.
         */
        sources: Array<Trust.Source>;
      }

      export namespace Trust {
        /**
         * Trust metadata for one value in a structured (JSON) answer, keyed by JSON path.
         */
        export interface Claim {
          /**
           * Citations backing this value.
           */
          citations: Array<Claim.Citation>;

          /**
           * Confidence in this value.
           */
          confidence: 'high' | 'medium' | 'low' | 'pre_existing';

          /**
           * JSON path of the value in the structured output this claim refers to.
           */
          path: string;

          /**
           * Why this confidence level was assigned.
           */
          reasoning: string;
        }

        export namespace Claim {
          /**
           * A citation backing a specific claim in the answer.
           */
          export interface Citation {
            /**
             * URL of the cited page.
             */
            url: string;

            /**
             * Verbatim excerpts supporting the claim.
             */
            excerpts?: Array<string> | null;

            /**
             * Extract template used to read the source, when one was used.
             */
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

            /**
             * How authoritative the source is: 'primary' or 'secondary'.
             */
            source_type?: 'primary' | 'secondary' | null;

            /**
             * Title of the cited page.
             */
            title?: string | null;
          }
        }

        /**
         * A source consulted while producing the answer.
         */
        export interface Source {
          /**
           * How authoritative the source is: 'primary' or 'secondary'.
           */
          type: 'primary' | 'secondary';

          /**
           * URL of the source page.
           */
          url: string;

          /**
           * Extract template used to read the source, when one was used.
           */
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

          /**
           * Title of the source page.
           */
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

      /**
       * When the run was created.
       */
      created_at: string;

      /**
       * Effort level used for the run.
       */
      effort: 'low' | 'medium' | 'high' | 'x-high' | '5x-high' | 'max';

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

  export interface TaskRunFailedResultPublicV2 {
    /**
     * Structured error detail.
     */
    error: TaskRunFailedResultPublicV2.Error;

    /**
     * Task run object with status 'failed'.
     */
    run: TaskRunFailedResultPublicV2.Run;
  }

  export namespace TaskRunFailedResultPublicV2 {
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
      effort: 'low' | 'medium' | 'high' | 'x-high' | '5x-high' | 'max';

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

export type RunStreamEventsResponse = unknown;

export interface RunCreateParams {
  /**
   * User prompt or task instructions for the run.
   */
  input: string;

  /**
   * Stable agent name. On this no-agent-id route, an unseen name creates a new
   * agent; an existing name reuses it. Ignored on the /{agent_id}/runs route.
   */
  agent_name?: string | null;

  /**
   * Canonical effort tier names for the research graph.
   */
  effort?: 'low' | 'medium' | 'high' | 'x-high' | '5x-high' | 'max' | null;

  /**
   * Whether to stream run events when supported.
   */
  enable_events?: boolean;

  /**
   * Existing records to ENRICH: a list of partial rows, or a single object,
   * mirroring output_schema's shape.
   */
  input_data?: Array<{ [key: string]: unknown }> | { [key: string]: unknown } | null;

  /**
   * Origin of public API runs. Public requests are always API-originated.
   */
  origin?: 'api';

  /**
   * JSON schema overriding the agent's default structured output for this run.
   */
  output_schema?: { [key: string]: unknown } | null;

  /**
   * Previous interaction identifier used to continue a conversation.
   */
  previous_interaction_id?: string | null;

  /**
   * Skill override for this run. One-time only, except when this run creates a new
   * agent via agent_name, in which case it becomes the new agent's stored skill.
   */
  skill?: string | null;

  /**
   * Source guidance overriding the agent default.
   */
  sources?: RunCreateParams.Sources | null;

  /**
   * Only settable when this run creates a new agent (via agent_name, or when no
   * agent is resolved), in which case it becomes the new agent's stored use_case.
   * For a run against an existing agent, this must match the agent's own use_case —
   * passing the same value is accepted as a no-op, a different value is rejected.
   */
  use_case?: 'research' | 'enrichment' | 'dataset_building' | null;
}

export namespace RunCreateParams {
  /**
   * Source guidance overriding the agent default.
   */
  export interface Sources {
    /**
     * Source groups the agent is allowed to use.
     */
    allow?: Array<Sources.Allow>;

    /**
     * Free-text guidance describing sources or domains to avoid.
     */
    avoid?: string | null;

    /**
     * Source groups the agent should not use.
     */
    block?: Array<Sources.Block>;

    /**
     * Free-text guidance describing sources or domains to prioritize.
     */
    prioritize?: string | null;
  }

  export namespace Sources {
    export interface Allow {
      /**
       * Domains included in this source group.
       */
      domains: Array<string>;

      /**
       * Source group title.
       */
      title: string;

      /**
       * Zero-based source group position.
       */
      order?: number;
    }

    export interface Block {
      /**
       * Domains included in this source group.
       */
      domains: Array<string>;

      /**
       * Source group title.
       */
      title: string;

      /**
       * Zero-based source group position.
       */
      order?: number;
    }
  }
}

export interface RunListParams {
  limit?: number;

  offset?: number;
}

export interface RunGetParams {
  agent_id: string;
}

export interface RunResultParams {
  agent_id: string;
}

export interface RunStreamEventsParams {
  agent_id: string;
}

export declare namespace Runs {
  export {
    type RunCreateResponse as RunCreateResponse,
    type RunListResponse as RunListResponse,
    type RunGetResponse as RunGetResponse,
    type RunResultResponse as RunResultResponse,
    type RunStreamEventsResponse as RunStreamEventsResponse,
    type RunCreateParams as RunCreateParams,
    type RunListParams as RunListParams,
    type RunGetParams as RunGetParams,
    type RunResultParams as RunResultParams,
    type RunStreamEventsParams as RunStreamEventsParams,
  };
}
