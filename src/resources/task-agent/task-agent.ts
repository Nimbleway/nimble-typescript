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
   * Create a new workspace-scoped Web Search Agent. Pass `template` to clone from a
   * named template.
   */
  create(body: TaskAgentCreateParams, options?: RequestOptions): APIPromise<TaskAgentCreateResponse> {
    return this._client.post('/v1/task-agents', { body, ...options });
  }

  /**
   * Apply a JSON Patch document (`application/json-patch+json`) to an agent you own.
   * Each operation must be a `replace` with path `/field_name`.
   */
  update(
    agentID: string,
    params: TaskAgentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TaskAgentUpdateResponse> {
    const { body } = params;
    return this._client.patch(path`/v1/task-agents/${agentID}`, {
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/json-patch+json' }, options?.headers]),
    });
  }

  /**
   * List active Web Search Agents visible to the caller. Includes agents scoped to
   * the caller's workspace.
   */
  list(
    query: TaskAgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TaskAgentListResponse> {
    return this._client.get('/v1/task-agents', { query, ...options });
  }

  /**
   * Deactivate an agent you own. The agent is marked inactive but not deleted.
   */
  deactivate(agentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/task-agents/${agentID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetch a single Web Search Agent by id.
   */
  get(agentID: string, options?: RequestOptions): APIPromise<TaskAgentGetResponse> {
    return this._client.get(path`/v1/task-agents/${agentID}`, options);
  }

  /**
   * Create and enqueue a research run for a Web Search Agent.
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

  effort: string;

  goals: Array<TaskAgentCreateResponse.Goal>;

  icon: string;

  is_active: boolean;

  output_schema: { [key: string]: unknown } | null;

  sources: TaskAgentCreateResponse.Sources;

  suggested_questions: Array<TaskAgentCreateResponse.SuggestedQuestion>;

  updated_at: string;

  use_case: 'research' | 'enrichment' | 'dataset_building';

  account_id?: string | null;

  agent_name?: string | null;

  workspace_id?: string | null;

  workspace_name?: string | null;
}

export namespace TaskAgentCreateResponse {
  export interface Goal {
    id: string;

    goal: string;

    order: number;
  }

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

    export interface Block {
      domains: Array<string>;

      title: string;

      order?: number;
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

  effort: string;

  goals: Array<TaskAgentUpdateResponse.Goal>;

  icon: string;

  is_active: boolean;

  output_schema: { [key: string]: unknown } | null;

  sources: TaskAgentUpdateResponse.Sources;

  suggested_questions: Array<TaskAgentUpdateResponse.SuggestedQuestion>;

  updated_at: string;

  use_case: 'research' | 'enrichment' | 'dataset_building';

  account_id?: string | null;

  agent_name?: string | null;

  workspace_id?: string | null;

  workspace_name?: string | null;
}

export namespace TaskAgentUpdateResponse {
  export interface Goal {
    id: string;

    goal: string;

    order: number;
  }

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

    export interface Block {
      domains: Array<string>;

      title: string;

      order?: number;
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

    effort: string;

    goals: Array<TaskAgentListResponseItem.Goal>;

    icon: string;

    is_active: boolean;

    output_schema: { [key: string]: unknown } | null;

    sources: TaskAgentListResponseItem.Sources;

    suggested_questions: Array<TaskAgentListResponseItem.SuggestedQuestion>;

    updated_at: string;

    use_case: 'research' | 'enrichment' | 'dataset_building';

    account_id?: string | null;

    agent_name?: string | null;

    workspace_id?: string | null;

    workspace_name?: string | null;
  }

  export namespace TaskAgentListResponseItem {
    export interface Goal {
      id: string;

      goal: string;

      order: number;
    }

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

      export interface Block {
        domains: Array<string>;

        title: string;

        order?: number;
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

  effort: string;

  goals: Array<TaskAgentGetResponse.Goal>;

  icon: string;

  is_active: boolean;

  output_schema: { [key: string]: unknown } | null;

  sources: TaskAgentGetResponse.Sources;

  suggested_questions: Array<TaskAgentGetResponse.SuggestedQuestion>;

  updated_at: string;

  use_case: 'research' | 'enrichment' | 'dataset_building';

  account_id?: string | null;

  agent_name?: string | null;

  workspace_id?: string | null;

  workspace_name?: string | null;
}

export namespace TaskAgentGetResponse {
  export interface Goal {
    id: string;

    goal: string;

    order: number;
  }

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

    export interface Block {
      domains: Array<string>;

      title: string;

      order?: number;
    }
  }

  export interface SuggestedQuestion {
    id: string;

    order: number;

    question: string;
  }
}

export interface TaskAgentRunResponse {
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

  error?: TaskAgentRunResponse.Error | null;

  prompt?: string | null;

  started_at?: string | null;

  /**
   * Web Search Agent instance this run belongs to.
   */
  web_search_agent_id?: string | null;

  workspace_id?: string | null;
}

export namespace TaskAgentRunResponse {
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

  effort?: string;

  goals?: Array<string>;

  icon?: string | null;

  is_active?: boolean;

  output_schema?: { [key: string]: unknown } | null;

  sources?: TaskAgentCreateParams.Sources;

  suggested_questions?: Array<string>;

  /**
   * Template name to materialise this instance from. When set, scalar fields and
   * child rows are copied from the template.
   */
  template?: string | null;

  use_case?: 'research' | 'enrichment' | 'dataset_building' | null;

  workspace_id?: string | null;
}

export namespace TaskAgentCreateParams {
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
  body: Array<TaskAgentUpdateParams.Body>;
}

export namespace TaskAgentUpdateParams {
  export interface Body {
    op: 'replace';

    path: string;

    value: unknown;
  }
}

export interface TaskAgentListParams {
  effort?: string | null;

  limit?: number;

  offset?: number;

  use_case?: string | null;
}

export interface TaskAgentRunParams {
  input: string;

  enable_events?: boolean;

  output_schema?: { [key: string]: unknown } | null;

  sources?: TaskAgentRunParams.Sources | null;
}

export namespace TaskAgentRunParams {
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
