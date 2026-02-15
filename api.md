# Nimble

Types:

- <code><a href="./src/resources/top-level.ts">MapResponse</a></code>

Methods:

- <code title="post /v1/map">client.<a href="./src/index.ts">map</a>({ ...params }) -> MapResponse</code>

# Extract

Types:

- <code><a href="./src/resources/extract.ts">ExtractAsyncResponse</a></code>
- <code><a href="./src/resources/extract.ts">ExtractRunResponse</a></code>

Methods:

- <code title="post /v1/extract/async">client.extract.<a href="./src/resources/extract.ts">async</a>({ ...params }) -> ExtractAsyncResponse</code>
- <code title="post /v1/extract">client.extract.<a href="./src/resources/extract.ts">run</a>({ ...params }) -> ExtractRunResponse</code>

# Agents

Types:

- <code><a href="./src/resources/agents.ts">AgentListResponse</a></code>
- <code><a href="./src/resources/agents.ts">AgentGetResponse</a></code>

Methods:

- <code title="get /v1/agents">client.agents.<a href="./src/resources/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>
- <code title="get /v1/agents/{template_name}">client.agents.<a href="./src/resources/agents.ts">get</a>(templateName) -> AgentGetResponse</code>

# Crawl

Types:

- <code><a href="./src/resources/crawl.ts">CrawlListResponse</a></code>
- <code><a href="./src/resources/crawl.ts">CrawlStatusResponse</a></code>
- <code><a href="./src/resources/crawl.ts">CrawlTerminateResponse</a></code>

Methods:

- <code title="get /v1/crawl">client.crawl.<a href="./src/resources/crawl.ts">list</a>({ ...params }) -> CrawlListResponse</code>
- <code title="get /v1/crawl/{id}">client.crawl.<a href="./src/resources/crawl.ts">status</a>(id) -> CrawlStatusResponse</code>
- <code title="delete /v1/crawl/{id}">client.crawl.<a href="./src/resources/crawl.ts">terminate</a>(id) -> CrawlTerminateResponse</code>
