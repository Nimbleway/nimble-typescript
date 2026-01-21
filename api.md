# Nimbleway

Types:

- <code><a href="./src/resources/top-level.ts">ExtractResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ExtractTemplateResponse</a></code>

Methods:

- <code title="post /v1/extract">client.<a href="./src/index.ts">extract</a>({ ...params }) -> ExtractResponse</code>
- <code title="post /v1/extract-template">client.<a href="./src/index.ts">extractTemplate</a>({ ...params }) -> ExtractTemplateResponse</code>

# Crawl

Types:

- <code><a href="./src/resources/crawl.ts">CrawlListResponse</a></code>
- <code><a href="./src/resources/crawl.ts">CrawlRootResponse</a></code>
- <code><a href="./src/resources/crawl.ts">CrawlStatusResponse</a></code>
- <code><a href="./src/resources/crawl.ts">CrawlTerminateResponse</a></code>

Methods:

- <code title="get /v1/crawl?status={status}">client.crawl.<a href="./src/resources/crawl.ts">list</a>(pathStatus, { ...params }) -> CrawlListResponse</code>
- <code title="post /v1/crawl">client.crawl.<a href="./src/resources/crawl.ts">root</a>({ ...params }) -> CrawlRootResponse</code>
- <code title="get /v1/crawl/{id}">client.crawl.<a href="./src/resources/crawl.ts">status</a>(id) -> CrawlStatusResponse</code>
- <code title="delete /v1/crawl/{id}">client.crawl.<a href="./src/resources/crawl.ts">terminate</a>(id) -> CrawlTerminateResponse</code>
