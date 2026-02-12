# Nimble

Types:

- <code><a href="./src/resources/top-level.ts">AgentResponse</a></code>
- <code><a href="./src/resources/top-level.ts">CrawlResponse</a></code>
- <code><a href="./src/resources/top-level.ts">MapResponse</a></code>

Methods:

- <code title="post /v1/agent">client.<a href="./src/index.ts">agent</a>({ ...params }) -> AgentResponse</code>
- <code title="post /v1/crawl">client.<a href="./src/index.ts">crawl</a>({ ...params }) -> CrawlResponse</code>
- <code title="post /v1/map">client.<a href="./src/index.ts">map</a>({ ...params }) -> MapResponse</code>

# Agents

Types:

- <code><a href="./src/resources/agents.ts">AgentListResponse</a></code>
- <code><a href="./src/resources/agents.ts">AgentAsyncResponse</a></code>
- <code><a href="./src/resources/agents.ts">AgentGetResponse</a></code>

Methods:

- <code title="get /v1/agents">client.agents.<a href="./src/resources/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>
- <code title="post /v1/agent/async">client.agents.<a href="./src/resources/agents.ts">async</a>({ ...params }) -> AgentAsyncResponse</code>
- <code title="get /v1/agents/{template_name}">client.agents.<a href="./src/resources/agents.ts">get</a>(templateName) -> AgentGetResponse</code>

# Extract

Types:

- <code><a href="./src/resources/extract.ts">ExtractAsyncResponse</a></code>
- <code><a href="./src/resources/extract.ts">ExtractExtractResponse</a></code>

Methods:

- <code title="post /v1/extract/async">client.extract.<a href="./src/resources/extract.ts">async</a>({ ...params }) -> ExtractAsyncResponse</code>
- <code title="post /v1/extract">client.extract.<a href="./src/resources/extract.ts">extract</a>({ ...params }) -> ExtractExtractResponse</code>

# Crawl

Types:

- <code><a href="./src/resources/crawl.ts">CrawlListResponse</a></code>
- <code><a href="./src/resources/crawl.ts">CrawlStatusResponse</a></code>
- <code><a href="./src/resources/crawl.ts">CrawlTerminateResponse</a></code>

Methods:

- <code title="get /v1/crawl">client.crawl.<a href="./src/resources/crawl.ts">list</a>({ ...params }) -> CrawlListResponsesCrawlPagination</code>
- <code title="get /v1/crawl/{id}">client.crawl.<a href="./src/resources/crawl.ts">status</a>(id) -> CrawlStatusResponse</code>
- <code title="delete /v1/crawl/{id}">client.crawl.<a href="./src/resources/crawl.ts">terminate</a>(id) -> CrawlTerminateResponse</code>

# Tasks

Types:

- <code><a href="./src/resources/tasks.ts">TaskListResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskGetResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskResultsResponse</a></code>

Methods:

- <code title="get /v1/tasks">client.tasks.<a href="./src/resources/tasks.ts">list</a>({ ...params }) -> TaskListResponsesCrawlPagination</code>
- <code title="get /v1/tasks/{task_id}">client.tasks.<a href="./src/resources/tasks.ts">get</a>(taskID) -> TaskGetResponse</code>
- <code title="get /v1/tasks/{task_id}/results">client.tasks.<a href="./src/resources/tasks.ts">results</a>(taskID) -> TaskResultsResponse</code>
