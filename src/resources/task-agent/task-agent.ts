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
   */
  create(body: TaskAgentCreateParams, options?: RequestOptions): APIPromise<TaskAgentCreateResponse> {
    return this._client.post('/v1/task-agents', { body, ...options });
  }

  /**
   * Update Agent
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
   */
  list(
    query: TaskAgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TaskAgentListResponse> {
    return this._client.get('/v1/task-agents', { query, ...options });
  }

  /**
   * Deactivate Agent
   */
  deactivate(agentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/task-agents/${agentID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get Agent
   */
  get(agentID: string, options?: RequestOptions): APIPromise<TaskAgentGetResponse> {
    return this._client.get(path`/v1/task-agents/${agentID}`, options);
  }

  /**
   * Create a research run for a Web Search Agent instance.
   */
  run(agentID: string, body: TaskAgentRunParams, options?: RequestOptions): APIPromise<TaskAgentRunResponse> {
    return this._client.post(path`/v1/task-agents/${agentID}/runs`, { body, ...options });
  }
}

export interface TaskAgentCreateResponse {
  id: string;

  created_at: string;

  description: string;

  display_name: string;

  domain_expertise: string;

  /**
   * Canonical effort tier names for the research graph.
   */
  effort: 'low' | 'medium' | 'high' | 'x-high' | 'max';

  goals: Array<TaskAgentCreateResponse.Goal>;

  icon: string;

  is_active: boolean;

  output_schema: { [key: string]: unknown } | null;

  /**
   * Response variant of AgentSources — preserves per-row id on allow rows.
   */
  sources: TaskAgentCreateResponse.Sources;

  suggested_questions: Array<TaskAgentCreateResponse.SuggestedQuestion>;

  updated_at: string;

  use_case: 'research' | 'enrichment' | 'dataset_building';

  account_id?: string | null;

  agent_name?: string | null;

  workspace_id?: string | null;
}

export namespace TaskAgentCreateResponse {
  export interface Goal {
    id: string;

    goal: string;

    order: number;
  }

  /**
   * Response variant of AgentSources — preserves per-row id on allow rows.
   */
  export interface Sources {
    allow?: Array<Sources.Allow>;

    avoid?: string | null;

    block?: Array<Sources.Block>;

    prioritize?: string | null;
  }

  export namespace Sources {
    export interface Allow {
      id: string;

      domains: Array<string>;

      order: number;

      title: string;
    }

    /**
     * Lenient response shape — domains are plain strings (no re-validation).
     */
    export interface Block {
      domains: Array<string>;

      order: number;

      title: string;
    }
  }

  export interface SuggestedQuestion {
    id: string;

    order: number;

    question: string;
  }
}

export interface TaskAgentUpdateResponse {
  id: string;

  created_at: string;

  description: string;

  display_name: string;

  domain_expertise: string;

  /**
   * Canonical effort tier names for the research graph.
   */
  effort: 'low' | 'medium' | 'high' | 'x-high' | 'max';

  goals: Array<TaskAgentUpdateResponse.Goal>;

  icon: string;

  is_active: boolean;

  output_schema: { [key: string]: unknown } | null;

  /**
   * Response variant of AgentSources — preserves per-row id on allow rows.
   */
  sources: TaskAgentUpdateResponse.Sources;

  suggested_questions: Array<TaskAgentUpdateResponse.SuggestedQuestion>;

  updated_at: string;

  use_case: 'research' | 'enrichment' | 'dataset_building';

  account_id?: string | null;

  agent_name?: string | null;

  workspace_id?: string | null;
}

export namespace TaskAgentUpdateResponse {
  export interface Goal {
    id: string;

    goal: string;

    order: number;
  }

  /**
   * Response variant of AgentSources — preserves per-row id on allow rows.
   */
  export interface Sources {
    allow?: Array<Sources.Allow>;

    avoid?: string | null;

    block?: Array<Sources.Block>;

    prioritize?: string | null;
  }

  export namespace Sources {
    export interface Allow {
      id: string;

      domains: Array<string>;

      order: number;

      title: string;
    }

    /**
     * Lenient response shape — domains are plain strings (no re-validation).
     */
    export interface Block {
      domains: Array<string>;

      order: number;

      title: string;
    }
  }

  export interface SuggestedQuestion {
    id: string;

    order: number;

    question: string;
  }
}

export type TaskAgentListResponse = Array<TaskAgentListResponse.TaskAgentListResponseItem>;

export namespace TaskAgentListResponse {
  export interface TaskAgentListResponseItem {
    id: string;

    created_at: string;

    description: string;

    display_name: string;

    domain_expertise: string;

    /**
     * Canonical effort tier names for the research graph.
     */
    effort: 'low' | 'medium' | 'high' | 'x-high' | 'max';

    goals: Array<TaskAgentListResponseItem.Goal>;

    icon: string;

    is_active: boolean;

    output_schema: { [key: string]: unknown } | null;

    /**
     * Response variant of AgentSources — preserves per-row id on allow rows.
     */
    sources: TaskAgentListResponseItem.Sources;

    suggested_questions: Array<TaskAgentListResponseItem.SuggestedQuestion>;

    updated_at: string;

    use_case: 'research' | 'enrichment' | 'dataset_building';

    account_id?: string | null;

    agent_name?: string | null;

    workspace_id?: string | null;
  }

  export namespace TaskAgentListResponseItem {
    export interface Goal {
      id: string;

      goal: string;

      order: number;
    }

    /**
     * Response variant of AgentSources — preserves per-row id on allow rows.
     */
    export interface Sources {
      allow?: Array<Sources.Allow>;

      avoid?: string | null;

      block?: Array<Sources.Block>;

      prioritize?: string | null;
    }

    export namespace Sources {
      export interface Allow {
        id: string;

        domains: Array<string>;

        order: number;

        title: string;
      }

      /**
       * Lenient response shape — domains are plain strings (no re-validation).
       */
      export interface Block {
        domains: Array<string>;

        order: number;

        title: string;
      }
    }

    export interface SuggestedQuestion {
      id: string;

      order: number;

      question: string;
    }
  }
}

export interface TaskAgentGetResponse {
  id: string;

  created_at: string;

  description: string;

  display_name: string;

  domain_expertise: string;

  /**
   * Canonical effort tier names for the research graph.
   */
  effort: 'low' | 'medium' | 'high' | 'x-high' | 'max';

  goals: Array<TaskAgentGetResponse.Goal>;

  icon: string;

  is_active: boolean;

  output_schema: { [key: string]: unknown } | null;

  /**
   * Response variant of AgentSources — preserves per-row id on allow rows.
   */
  sources: TaskAgentGetResponse.Sources;

  suggested_questions: Array<TaskAgentGetResponse.SuggestedQuestion>;

  updated_at: string;

  use_case: 'research' | 'enrichment' | 'dataset_building';

  account_id?: string | null;

  agent_name?: string | null;

  workspace_id?: string | null;
}

export namespace TaskAgentGetResponse {
  export interface Goal {
    id: string;

    goal: string;

    order: number;
  }

  /**
   * Response variant of AgentSources — preserves per-row id on allow rows.
   */
  export interface Sources {
    allow?: Array<Sources.Allow>;

    avoid?: string | null;

    block?: Array<Sources.Block>;

    prioritize?: string | null;
  }

  export namespace Sources {
    export interface Allow {
      id: string;

      domains: Array<string>;

      order: number;

      title: string;
    }

    /**
     * Lenient response shape — domains are plain strings (no re-validation).
     */
    export interface Block {
      domains: Array<string>;

      order: number;

      title: string;
    }
  }

  export interface SuggestedQuestion {
    id: string;

    order: number;

    question: string;
  }
}

/**
 * Task run status returned by list/create/get endpoints.
 */
export interface TaskAgentRunResponse {
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
  error?: TaskAgentRunResponse.Error | null;

  /**
   * Original user prompt before enrichment. Populated for Web Search Agent runs.
   */
  prompt?: string | null;

  started_at?: string | null;

  workspace_id?: string | null;
}

export namespace TaskAgentRunResponse {
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

export interface TaskAgentCreateParams {
  agent_name?: string | null;

  description?: string | null;

  display_name?: string | null;

  domain_expertise?: string | null;

  /**
   * Canonical effort tier names for the research graph.
   */
  effort?: 'low' | 'medium' | 'high' | 'x-high' | 'max';

  goals?: Array<string>;

  icon?: string | null;

  is_active?: boolean;

  output_schema?: { [key: string]: unknown } | null;

  /**
   * Source preferences for a web search agent instance.
   */
  sources?: TaskAgentCreateParams.Sources;

  suggested_questions?: Array<string>;

  /**
   * Template name to materialize this instance from. When set, the scalar fields and
   * child rows are copied from the template.
   */
  template?: string | null;

  use_case?: 'research' | 'enrichment' | 'dataset_building' | null;

  workspace_id?: string | null;
}

export namespace TaskAgentCreateParams {
  /**
   * Source preferences for a web search agent instance.
   */
  export interface Sources {
    allow?: Array<Sources.Allow>;

    avoid?: string | null;

    block?: Array<Sources.Block>;

    prioritize?: string | null;
  }

  export namespace Sources {
    export interface Allow {
      domains: Array<string>;

      title: string;

      order?: number;
    }

    export interface Block {
      domains: Array<string>;

      title: string;

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
  /**
   * Canonical effort tier names for the research graph.
   */
  filter_effort?: 'low' | 'medium' | 'high' | 'x-high' | 'max' | null;

  filter_use_case?: 'research' | 'enrichment' | 'dataset_building' | null;

  limit?: number;

  offset?: number;

  workspace_id?: string | null;
}

export interface TaskAgentRunParams {
  input: string;

  /**
   * Canonical effort tier names for the research graph.
   */
  effort?: 'low' | 'medium' | 'high' | 'x-high' | 'max' | null;

  enable_events?: boolean;

  output_schema?: { [key: string]: unknown } | null;

  previous_interaction_id?: string | null;

  /**
   * Source preferences for a web search agent instance.
   */
  sources?: TaskAgentRunParams.Sources | null;
}

export namespace TaskAgentRunParams {
  /**
   * Source preferences for a web search agent instance.
   */
  export interface Sources {
    allow?: Array<Sources.Allow>;

    avoid?: string | null;

    block?: Array<Sources.Block>;

    prioritize?: string | null;
  }

  export namespace Sources {
    export interface Allow {
      domains: Array<string>;

      title: string;

      order?: number;
    }

    export interface Block {
      domains: Array<string>;

      title: string;

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
