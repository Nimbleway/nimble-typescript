// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RunsAPI from './runs';
import {
  RunCreateParams,
  RunCreateResponse,
  RunGetParams,
  RunGetResponse,
  RunListParams,
  RunListResponse,
  RunResultParams,
  RunResultResponse,
  RunStreamEventsParams,
  Runs,
} from './runs';
import * as TemplatesAPI from './templates';
import { TemplateGetResponse, TemplateListParams, TemplateListResponse, Templates } from './templates';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Agents extends APIResource {
  templates: TemplatesAPI.Templates = new TemplatesAPI.Templates(this._client);
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);

  /**
   * Create a Web Search Agent. Either pass `template` to materialize a pre-built
   * template (its fields, goals, sources, and suggested questions are copied), or
   * define the agent from scratch with `display_name`, `goals`, `sources`, and an
   * optional `output_schema` for structured results.
   */
  create(body: AgentCreateParams, options?: RequestOptions): APIPromise<AgentCreateResponse> {
    return this._client.post('/v2/agents', { body, ...options });
  }

  /**
   * Update an agent with a
   * [JSON Patch](https://datatracker.ietf.org/doc/html/rfc6902) document — an array
   * of `{op, path, value}` operations applied to the agent, e.g.
   * `[{"op": "replace", "path": "/display_name", "value": "My agent"}]`. Returns the
   * updated agent.
   */
  update(
    agentID: string,
    params: AgentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AgentUpdateResponse> {
    const { body } = params;
    return this._client.patch(path`/v2/agents/${agentID}`, { body: body, ...options });
  }

  /**
   * List the active Web Search Agents in your account. Results are scoped to the
   * workspace resolved from your token (or the optional `workspace_id` query
   * parameter) and paginated with `offset`/`limit`.
   */
  list(
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListResponse> {
    return this._client.get('/v2/agents', { query, ...options });
  }

  /**
   * Deactivate an agent. This is a soft delete: the agent can no longer start new
   * runs, but its existing runs and their results remain retrievable.
   */
  delete(agentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/agents/${agentID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single Web Search Agent by ID.
   */
  get(agentID: string, options?: RequestOptions): APIPromise<AgentGetResponse> {
    return this._client.get(path`/v2/agents/${agentID}`, options);
  }
}

export interface AgentCreateResponse {
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
  goals: Array<AgentCreateResponse.Goal>;

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
  sources: AgentCreateResponse.Sources;

  /**
   * Suggested prompts users can run with this agent.
   */
  suggested_questions: Array<AgentCreateResponse.SuggestedQuestion>;

  /**
   * When the agent was last updated.
   */
  updated_at: string;

  /**
   * Primary use case supported by the agent.
   */
  use_case: 'research' | 'enrichment' | 'dataset_building';

  /**
   * Stable agent name.
   */
  agent_name?: string | null;
}

export namespace AgentCreateResponse {
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

export interface AgentUpdateResponse {
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
  goals: Array<AgentUpdateResponse.Goal>;

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
  sources: AgentUpdateResponse.Sources;

  /**
   * Suggested prompts users can run with this agent.
   */
  suggested_questions: Array<AgentUpdateResponse.SuggestedQuestion>;

  /**
   * When the agent was last updated.
   */
  updated_at: string;

  /**
   * Primary use case supported by the agent.
   */
  use_case: 'research' | 'enrichment' | 'dataset_building';

  /**
   * Stable agent name.
   */
  agent_name?: string | null;
}

export namespace AgentUpdateResponse {
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

export interface AgentListResponse {
  /**
   * Items returned in this page.
   */
  items: Array<AgentListResponse.Item>;

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

export namespace AgentListResponse {
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
     * Stable agent name.
     */
    agent_name?: string | null;
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

export interface AgentGetResponse {
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
  goals: Array<AgentGetResponse.Goal>;

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
  sources: AgentGetResponse.Sources;

  /**
   * Suggested prompts users can run with this agent.
   */
  suggested_questions: Array<AgentGetResponse.SuggestedQuestion>;

  /**
   * When the agent was last updated.
   */
  updated_at: string;

  /**
   * Primary use case supported by the agent.
   */
  use_case: 'research' | 'enrichment' | 'dataset_building';

  /**
   * Stable agent name.
   */
  agent_name?: string | null;
}

export namespace AgentGetResponse {
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

export interface AgentCreateParams {
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
  sources?: AgentCreateParams.Sources;

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
}

export namespace AgentCreateParams {
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

export interface AgentUpdateParams {
  /**
   * A JSON Patch document per RFC 6902 — a JSON array of patch operations.
   */
  body: Array<AgentUpdateParams.Body>;
}

export namespace AgentUpdateParams {
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

export interface AgentListParams {
  limit?: number;

  offset?: number;

  workspace_id?: string | null;
}

Agents.Templates = Templates;
Agents.Runs = Runs;

export declare namespace Agents {
  export {
    type AgentCreateResponse as AgentCreateResponse,
    type AgentUpdateResponse as AgentUpdateResponse,
    type AgentListResponse as AgentListResponse,
    type AgentGetResponse as AgentGetResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
  };

  export {
    Templates as Templates,
    type TemplateListResponse as TemplateListResponse,
    type TemplateGetResponse as TemplateGetResponse,
    type TemplateListParams as TemplateListParams,
  };

  export {
    Runs as Runs,
    type RunCreateResponse as RunCreateResponse,
    type RunListResponse as RunListResponse,
    type RunGetResponse as RunGetResponse,
    type RunResultResponse as RunResultResponse,
    type RunCreateParams as RunCreateParams,
    type RunListParams as RunListParams,
    type RunGetParams as RunGetParams,
    type RunResultParams as RunResultParams,
    type RunStreamEventsParams as RunStreamEventsParams,
  };
}
