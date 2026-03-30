# Nimble

Types:

- <code><a href="./src/resources/top-level.ts">ExtractResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ExtractAsyncResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ExtractBatchResponse</a></code>
- <code><a href="./src/resources/top-level.ts">MapResponse</a></code>
- <code><a href="./src/resources/top-level.ts">SearchResponse</a></code>

Methods:

- <code title="post /v1/extract">client.<a href="./src/index.ts">extract</a>({ ...params }) -> ExtractResponse</code>
- <code title="post /v1/extract/async">client.<a href="./src/index.ts">extractAsync</a>({ ...params }) -> ExtractAsyncResponse</code>
- <code title="post /v1/extract/batch">client.<a href="./src/index.ts">extractBatch</a>({ ...params }) -> ExtractBatchResponse</code>
- <code title="post /v1/map">client.<a href="./src/index.ts">map</a>({ ...params }) -> MapResponse</code>
- <code title="post /v1/search">client.<a href="./src/index.ts">search</a>({ ...params }) -> SearchResponse</code>

# Shared

Types:

- <code><a href="./src/resources/shared.ts">AutoScrollAction</a></code>
- <code><a href="./src/resources/shared.ts">ClickAction</a></code>
- <code><a href="./src/resources/shared.ts">EvalAction</a></code>
- <code><a href="./src/resources/shared.ts">FetchAction</a></code>
- <code><a href="./src/resources/shared.ts">FillAction</a></code>
- <code><a href="./src/resources/shared.ts">GetCookiesAction</a></code>
- <code><a href="./src/resources/shared.ts">GotoAction</a></code>
- <code><a href="./src/resources/shared.ts">PressAction</a></code>
- <code><a href="./src/resources/shared.ts">ScreenshotAction</a></code>
- <code><a href="./src/resources/shared.ts">ScrollAction</a></code>
- <code><a href="./src/resources/shared.ts">WaitAction</a></code>
- <code><a href="./src/resources/shared.ts">WaitForElementAction</a></code>
- <code><a href="./src/resources/shared.ts">WaitForNavigationAction</a></code>

# Agents

Types:

- <code><a href="./src/resources/agents/agents.ts">AgentListResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentGetResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentPublishResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentRunResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentRunAsyncResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentRunBatchResponse</a></code>

Methods:

- <code title="get /v1/agents">client.agents.<a href="./src/resources/agents/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>
- <code title="get /v1/agents/{template_name}">client.agents.<a href="./src/resources/agents/agents.ts">get</a>(templateName) -> AgentGetResponse</code>
- <code title="post /v1/agents/{agent_name}/publish">client.agents.<a href="./src/resources/agents/agents.ts">publish</a>(agentName, { ...params }) -> AgentPublishResponse</code>
- <code title="post /v1/agents/run">client.agents.<a href="./src/resources/agents/agents.ts">run</a>({ ...params }) -> AgentRunResponse</code>
- <code title="post /v1/agents/async">client.agents.<a href="./src/resources/agents/agents.ts">runAsync</a>({ ...params }) -> AgentRunAsyncResponse</code>
- <code title="post /v1/agents/batch">client.agents.<a href="./src/resources/agents/agents.ts">runBatch</a>({ ...params }) -> AgentRunBatchResponse</code>

## Generations

Types:

- <code><a href="./src/resources/agents/generations.ts">GenerationCreateResponse</a></code>
- <code><a href="./src/resources/agents/generations.ts">GenerationGetResponse</a></code>

Methods:

- <code title="post /v1/agents/generations">client.agents.generations.<a href="./src/resources/agents/generations.ts">create</a>({ ...params }) -> GenerationCreateResponse</code>
- <code title="get /v1/agents/generations/{generation_id}">client.agents.generations.<a href="./src/resources/agents/generations.ts">get</a>(generationID) -> GenerationGetResponse</code>

# Crawl

Types:

- <code><a href="./src/resources/crawl.ts">CrawlListResponse</a></code>
- <code><a href="./src/resources/crawl.ts">CrawlRunResponse</a></code>
- <code><a href="./src/resources/crawl.ts">CrawlStatusResponse</a></code>
- <code><a href="./src/resources/crawl.ts">CrawlTerminateResponse</a></code>

Methods:

- <code title="get /v1/crawl">client.crawl.<a href="./src/resources/crawl.ts">list</a>({ ...params }) -> CrawlListResponse</code>
- <code title="post /v1/crawl">client.crawl.<a href="./src/resources/crawl.ts">run</a>({ ...params }) -> CrawlRunResponse</code>
- <code title="get /v1/crawl/{id}">client.crawl.<a href="./src/resources/crawl.ts">status</a>(id) -> CrawlStatusResponse</code>
- <code title="delete /v1/crawl/{id}">client.crawl.<a href="./src/resources/crawl.ts">terminate</a>(id) -> CrawlTerminateResponse</code>

# Tasks

Types:

- <code><a href="./src/resources/tasks.ts">TaskListResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskGetResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskResultsResponse</a></code>

Methods:

- <code title="get /v1/tasks">client.tasks.<a href="./src/resources/tasks.ts">list</a>({ ...params }) -> TaskListResponse</code>
- <code title="get /v1/tasks/{task_id}">client.tasks.<a href="./src/resources/tasks.ts">get</a>(taskID) -> TaskGetResponse</code>
- <code title="get /v1/tasks/{task_id}/results">client.tasks.<a href="./src/resources/tasks.ts">results</a>(taskID) -> TaskResultsResponse</code>

# Batches

Types:

- <code><a href="./src/resources/batches.ts">BatchGetResponse</a></code>
- <code><a href="./src/resources/batches.ts">BatchProgressResponse</a></code>

Methods:

- <code title="get /v1/batches">client.batches.<a href="./src/resources/batches.ts">list</a>() -> void</code>
- <code title="get /v1/batches/{batch_id}">client.batches.<a href="./src/resources/batches.ts">get</a>(batchID) -> BatchGetResponse</code>
- <code title="get /v1/batches/{batch_id}/progress">client.batches.<a href="./src/resources/batches.ts">progress</a>(batchID) -> BatchProgressResponse</code>
