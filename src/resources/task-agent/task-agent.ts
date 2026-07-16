// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RunsAPI from './runs';
import {
  RunCancelParams,
  RunGetParams,
  RunGetResponse,
  RunGetResultParams,
  RunGetResultResponse,
  RunListParams,
  RunListResponse,
  RunStreamEventsParams,
  RunStreamEventsResponse,
  Runs,
} from './runs';
import * as TemplatesAPI from './templates';
import { TemplateGetResponse, TemplateListParams, TemplateListResponse, Templates } from './templates';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class TaskAgent extends APIResource {
  templates: TemplatesAPI.Templates = new TemplatesAPI.Templates(this._client);
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);

  /**
   * Create a Web Search Agent instance.
   *
   * `account_id` is JWT-derived and never read from the request body.
   *
   * @deprecated
   */
  create(body: TaskAgentCreateParams, options?: RequestOptions): APIPromise<TaskAgentCreateResponse> {
    return this._client.post('/v1/task-agents', { body, ...options });
  }

  /**
   * Update Agent
   *
   * @deprecated
   */
  update(
    agentID: string,
    params: TaskAgentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TaskAgentUpdateResponse> {
    const { body } = params;
    return this._client.patch(path`/v1/task-agents/${agentID}`, { body: body, ...options });
  }

  /**
   * List Web Search Agent instances.
   *
   * Callers are strictly scoped to their (account, workspace). If `workspace_id` is
   * omitted, the user's default workspace is used.
   *
   * @deprecated
   */
  list(
    query: TaskAgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TaskAgentListResponse> {
    return this._client.get('/v1/task-agents', { query, ...options });
  }

  /**
   * Deactivate Agent
   *
   * @deprecated
   */
  deactivate(agentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/task-agents/${agentID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get Agent
   *
   * @deprecated
   */
  get(agentID: string, options?: RequestOptions): APIPromise<TaskAgentGetResponse> {
    return this._client.get(path`/v1/task-agents/${agentID}`, options);
  }

  /**
   * Create a research run for a Web Search Agent instance.
   *
   * @deprecated
   */
  run(agentID: string, body: TaskAgentRunParams, options?: RequestOptions): APIPromise<TaskAgentRunResponse> {
    return this._client.post(path`/v1/task-agents/${agentID}/runs`, { body, ...options });
  }
}

export interface TaskAgentCreateResponse {
  /**
   * Unique web search agent identifier (wsa\_<uuid>).
   */
  id: string;

  /**
   * When the agent was created.
   */
  created_at: string;

  /**
   * Agent description shown to users.
   */
  description: string;

  /**
   * Human-friendly agent name shown to users.
   */
  display_name: string;

  /**
   * Domain expertise or operating context for the agent.
   */
  domain_expertise: string;

  /**
   * Default effort level for this agent's runs.
   */
  effort: 'low' | 'medium' | 'high' | 'x-high' | 'max';

  /**
   * Ordered goals for the agent to follow.
   */
  goals: Array<TaskAgentCreateResponse.Goal>;

  /**
   * Icon identifier used when presenting the agent.
   */
  icon: string;

  /**
   * Whether the agent can be used to start new runs.
   */
  is_active: boolean;

  /**
   * JSON schema describing the structured output the agent should produce.
   */
  output_schema: { [key: string]: unknown } | null;

  /**
   * Source guidance for the agent.
   */
  sources: TaskAgentCreateResponse.Sources;

  /**
   * Suggested prompts users can run with this agent.
   */
  suggested_questions: Array<TaskAgentCreateResponse.SuggestedQuestion>;

  /**
   * When the agent was last updated.
   */
  updated_at: string;

  /**
   * Primary use case supported by the agent.
   */
  use_case: 'research' | 'enrichment' | 'dataset_building';

  /**
   * Account identifier associated with the agent.
   */
  account_id?: string | null;

  /**
   * Stable agent name.
   */
  agent_name?: string | null;

  /**
   * Workspace identifier associated with the agent.
   */
  workspace_id?: string | null;
}

export namespace TaskAgentCreateResponse {
  export interface Goal {
    /**
     * Unique goal identifier (wsag\_<uuid>).
     */
    id: string;

    /**
     * Goal text.
     */
    goal: string;

    /**
     * Zero-based goal position.
     */
    order: number;
  }

  /**
   * Source guidance for the agent.
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
       * Unique source group identifier (wsas\_<uuid>).
       */
      id: string;

      /**
       * Domains included in this source group.
       */
      domains: Array<string>;

      /**
       * Zero-based source group position.
       */
      order: number;

      /**
       * Source group title.
       */
      title: string;
    }

    export interface Block {
      /**
       * Domains included in this source group.
       */
      domains: Array<string>;

      /**
       * Zero-based source group position.
       */
      order: number;

      /**
       * Source group title.
       */
      title: string;
    }
  }

  export interface SuggestedQuestion {
    /**
     * Unique suggested question identifier (wsasq\_<uuid>).
     */
    id: string;

    /**
     * Zero-based suggested question position.
     */
    order: number;

    /**
     * Suggested prompt text.
     */
    question: string;
  }
}

export interface TaskAgentUpdateResponse {
  /**
   * Unique web search agent identifier (wsa\_<uuid>).
   */
  id: string;

  /**
   * When the agent was created.
   */
  created_at: string;

  /**
   * Agent description shown to users.
   */
  description: string;

  /**
   * Human-friendly agent name shown to users.
   */
  display_name: string;

  /**
   * Domain expertise or operating context for the agent.
   */
  domain_expertise: string;

  /**
   * Default effort level for this agent's runs.
   */
  effort: 'low' | 'medium' | 'high' | 'x-high' | 'max';

  /**
   * Ordered goals for the agent to follow.
   */
  goals: Array<TaskAgentUpdateResponse.Goal>;

  /**
   * Icon identifier used when presenting the agent.
   */
  icon: string;

  /**
   * Whether the agent can be used to start new runs.
   */
  is_active: boolean;

  /**
   * JSON schema describing the structured output the agent should produce.
   */
  output_schema: { [key: string]: unknown } | null;

  /**
   * Source guidance for the agent.
   */
  sources: TaskAgentUpdateResponse.Sources;

  /**
   * Suggested prompts users can run with this agent.
   */
  suggested_questions: Array<TaskAgentUpdateResponse.SuggestedQuestion>;

  /**
   * When the agent was last updated.
   */
  updated_at: string;

  /**
   * Primary use case supported by the agent.
   */
  use_case: 'research' | 'enrichment' | 'dataset_building';

  /**
   * Account identifier associated with the agent.
   */
  account_id?: string | null;

  /**
   * Stable agent name.
   */
  agent_name?: string | null;

  /**
   * Workspace identifier associated with the agent.
   */
  workspace_id?: string | null;
}

export namespace TaskAgentUpdateResponse {
  export interface Goal {
    /**
     * Unique goal identifier (wsag\_<uuid>).
     */
    id: string;

    /**
     * Goal text.
     */
    goal: string;

    /**
     * Zero-based goal position.
     */
    order: number;
  }

  /**
   * Source guidance for the agent.
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
       * Unique source group identifier (wsas\_<uuid>).
       */
      id: string;

      /**
       * Domains included in this source group.
       */
      domains: Array<string>;

      /**
       * Zero-based source group position.
       */
      order: number;

      /**
       * Source group title.
       */
      title: string;
    }

    export interface Block {
      /**
       * Domains included in this source group.
       */
      domains: Array<string>;

      /**
       * Zero-based source group position.
       */
      order: number;

      /**
       * Source group title.
       */
      title: string;
    }
  }

  export interface SuggestedQuestion {
    /**
     * Unique suggested question identifier (wsasq\_<uuid>).
     */
    id: string;

    /**
     * Zero-based suggested question position.
     */
    order: number;

    /**
     * Suggested prompt text.
     */
    question: string;
  }
}

export interface TaskAgentListResponse {
  /**
   * Items returned in this page.
   */
  items: Array<TaskAgentListResponse.Item>;

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

export namespace TaskAgentListResponse {
  export interface Item {
    /**
     * Unique web search agent identifier (wsa\_<uuid>).
     */
    id: string;

    /**
     * When the agent was created.
     */
    created_at: string;

    /**
     * Agent description shown to users.
     */
    description: string;

    /**
     * Human-friendly agent name shown to users.
     */
    display_name: string;

    /**
     * Domain expertise or operating context for the agent.
     */
    domain_expertise: string;

    /**
     * Default effort level for this agent's runs.
     */
    effort: 'low' | 'medium' | 'high' | 'x-high' | 'max';

    /**
     * Ordered goals for the agent to follow.
     */
    goals: Array<Item.Goal>;

    /**
     * Icon identifier used when presenting the agent.
     */
    icon: string;

    /**
     * Whether the agent can be used to start new runs.
     */
    is_active: boolean;

    /**
     * JSON schema describing the structured output the agent should produce.
     */
    output_schema: { [key: string]: unknown } | null;

    /**
     * Source guidance for the agent.
     */
    sources: Item.Sources;

    /**
     * Suggested prompts users can run with this agent.
     */
    suggested_questions: Array<Item.SuggestedQuestion>;

    /**
     * When the agent was last updated.
     */
    updated_at: string;

    /**
     * Primary use case supported by the agent.
     */
    use_case: 'research' | 'enrichment' | 'dataset_building';

    /**
     * Account identifier associated with the agent.
     */
    account_id?: string | null;

    /**
     * Stable agent name.
     */
    agent_name?: string | null;

    /**
     * Workspace identifier associated with the agent.
     */
    workspace_id?: string | null;
  }

  export namespace Item {
    export interface Goal {
      /**
       * Unique goal identifier (wsag\_<uuid>).
       */
      id: string;

      /**
       * Goal text.
       */
      goal: string;

      /**
       * Zero-based goal position.
       */
      order: number;
    }

    /**
     * Source guidance for the agent.
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
         * Unique source group identifier (wsas\_<uuid>).
         */
        id: string;

        /**
         * Domains included in this source group.
         */
        domains: Array<string>;

        /**
         * Zero-based source group position.
         */
        order: number;

        /**
         * Source group title.
         */
        title: string;
      }

      export interface Block {
        /**
         * Domains included in this source group.
         */
        domains: Array<string>;

        /**
         * Zero-based source group position.
         */
        order: number;

        /**
         * Source group title.
         */
        title: string;
      }
    }

    export interface SuggestedQuestion {
      /**
       * Unique suggested question identifier (wsasq\_<uuid>).
       */
      id: string;

      /**
       * Zero-based suggested question position.
       */
      order: number;

      /**
       * Suggested prompt text.
       */
      question: string;
    }
  }
}

export interface TaskAgentGetResponse {
  /**
   * Unique web search agent identifier (wsa\_<uuid>).
   */
  id: string;

  /**
   * When the agent was created.
   */
  created_at: string;

  /**
   * Agent description shown to users.
   */
  description: string;

  /**
   * Human-friendly agent name shown to users.
   */
  display_name: string;

  /**
   * Domain expertise or operating context for the agent.
   */
  domain_expertise: string;

  /**
   * Default effort level for this agent's runs.
   */
  effort: 'low' | 'medium' | 'high' | 'x-high' | 'max';

  /**
   * Ordered goals for the agent to follow.
   */
  goals: Array<TaskAgentGetResponse.Goal>;

  /**
   * Icon identifier used when presenting the agent.
   */
  icon: string;

  /**
   * Whether the agent can be used to start new runs.
   */
  is_active: boolean;

  /**
   * JSON schema describing the structured output the agent should produce.
   */
  output_schema: { [key: string]: unknown } | null;

  /**
   * Source guidance for the agent.
   */
  sources: TaskAgentGetResponse.Sources;

  /**
   * Suggested prompts users can run with this agent.
   */
  suggested_questions: Array<TaskAgentGetResponse.SuggestedQuestion>;

  /**
   * When the agent was last updated.
   */
  updated_at: string;

  /**
   * Primary use case supported by the agent.
   */
  use_case: 'research' | 'enrichment' | 'dataset_building';

  /**
   * Account identifier associated with the agent.
   */
  account_id?: string | null;

  /**
   * Stable agent name.
   */
  agent_name?: string | null;

  /**
   * Workspace identifier associated with the agent.
   */
  workspace_id?: string | null;
}

export namespace TaskAgentGetResponse {
  export interface Goal {
    /**
     * Unique goal identifier (wsag\_<uuid>).
     */
    id: string;

    /**
     * Goal text.
     */
    goal: string;

    /**
     * Zero-based goal position.
     */
    order: number;
  }

  /**
   * Source guidance for the agent.
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
       * Unique source group identifier (wsas\_<uuid>).
       */
      id: string;

      /**
       * Domains included in this source group.
       */
      domains: Array<string>;

      /**
       * Zero-based source group position.
       */
      order: number;

      /**
       * Source group title.
       */
      title: string;
    }

    export interface Block {
      /**
       * Domains included in this source group.
       */
      domains: Array<string>;

      /**
       * Zero-based source group position.
       */
      order: number;

      /**
       * Source group title.
       */
      title: string;
    }
  }

  export interface SuggestedQuestion {
    /**
     * Unique suggested question identifier (wsasq\_<uuid>).
     */
    id: string;

    /**
     * Zero-based suggested question position.
     */
    order: number;

    /**
     * Suggested prompt text.
     */
    question: string;
  }
}

export interface TaskAgentRunResponse {
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
  error?: TaskAgentRunResponse.Error | null;

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

export namespace TaskAgentRunResponse {
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

export interface TaskAgentCreateParams {
  /**
   * Stable agent name.
   */
  agent_name?: string | null;

  /**
   * Agent description shown to users.
   */
  description?: string | null;

  /**
   * Human-friendly agent name shown to users.
   */
  display_name?: string | null;

  /**
   * Domain expertise or operating context for the agent.
   */
  domain_expertise?: string | null;

  /**
   * Default effort level for this agent's runs.
   */
  effort?: 'low' | 'medium' | 'high' | 'x-high' | 'max';

  /**
   * Ordered goals for the agent to follow.
   */
  goals?: Array<string>;

  /**
   * Icon identifier used when presenting the agent.
   */
  icon?: string | null;

  /**
   * Whether the agent can be used to start new runs.
   */
  is_active?: boolean;

  /**
   * JSON schema describing the structured output the agent should produce.
   */
  output_schema?: { [key: string]: unknown } | null;

  /**
   * Source guidance for the agent.
   */
  sources?: TaskAgentCreateParams.Sources;

  /**
   * Suggested prompts users can run with this agent.
   */
  suggested_questions?: Array<string>;

  /**
   * Template name to materialize this instance from. When set, the scalar fields and
   * child rows are copied from the template.
   */
  template?: string | null;

  /**
   * Primary use case supported by the agent.
   */
  use_case?: 'research' | 'enrichment' | 'dataset_building' | null;

  /**
   * Workspace identifier to associate with the agent.
   */
  workspace_id?: string | null;
}

export namespace TaskAgentCreateParams {
  /**
   * Source guidance for the agent.
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

export interface TaskAgentUpdateParams {
  /**
   * A JSON Patch document per RFC 6902 — a JSON array of patch operations.
   */
  body: Array<TaskAgentUpdateParams.Body>;
}

export namespace TaskAgentUpdateParams {
  /**
   * A single JSON Patch operation per RFC 6902.
   */
  export interface Body {
    op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test';

    path: string;

    from?: string | null;

    value?: unknown;
  }
}

export interface TaskAgentListParams {
  limit?: number;

  offset?: number;

  workspace_id?: string | null;
}

export interface TaskAgentRunParams {
  /**
   * User prompt or task instructions for the run.
   */
  input: string;

  /**
   * Canonical effort tier names for the research graph.
   */
  effort?: 'low' | 'medium' | 'high' | 'x-high' | 'max' | null;

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
   * JSON schema overriding the agent's default structured output for this run.
   */
  output_schema?: { [key: string]: unknown } | null;

  /**
   * Previous interaction identifier used to continue a conversation.
   */
  previous_interaction_id?: string | null;

  /**
   * Source guidance overriding the agent default.
   */
  sources?: TaskAgentRunParams.Sources | null;
}

export namespace TaskAgentRunParams {
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

TaskAgent.Templates = Templates;
TaskAgent.Runs = Runs;

export declare namespace TaskAgent {
  export {
    type TaskAgentCreateResponse as TaskAgentCreateResponse,
    type TaskAgentUpdateResponse as TaskAgentUpdateResponse,
    type TaskAgentListResponse as TaskAgentListResponse,
    type TaskAgentGetResponse as TaskAgentGetResponse,
    type TaskAgentRunResponse as TaskAgentRunResponse,
    type TaskAgentCreateParams as TaskAgentCreateParams,
    type TaskAgentUpdateParams as TaskAgentUpdateParams,
    type TaskAgentListParams as TaskAgentListParams,
    type TaskAgentRunParams as TaskAgentRunParams,
  };

  export {
    Templates as Templates,
    type TemplateListResponse as TemplateListResponse,
    type TemplateGetResponse as TemplateGetResponse,
    type TemplateListParams as TemplateListParams,
  };

  export {
    Runs as Runs,
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
