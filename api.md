# Nimble

Types:

- <code><a href="./src/resources/top-level.ts">MapResponse</a></code>
- <code><a href="./src/resources/top-level.ts">SearchResponse</a></code>

Methods:

- <code title="post /v2/map">client.<a href="./src/index.ts">map</a>({ ...params }) -> MapResponse</code>
- <code title="post /v2/search">client.<a href="./src/index.ts">search</a>({ ...params }) -> SearchResponse</code>

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

# Extract

Types:

- <code><a href="./src/resources/extract/extract.ts">ExtractAsyncResponse</a></code>
- <code><a href="./src/resources/extract/extract.ts">ExtractBatchResponse</a></code>
- <code><a href="./src/resources/extract/extract.ts">ExtractRunResponse</a></code>

Methods:

- <code title="post /v2/extract/async">client.extract.<a href="./src/resources/extract/extract.ts">async</a>({ ...params }) -> ExtractAsyncResponse</code>
- <code title="post /v2/extract/batch">client.extract.<a href="./src/resources/extract/extract.ts">batch</a>({ ...params }) -> ExtractBatchResponse</code>
- <code title="post /v2/extract">client.extract.<a href="./src/resources/extract/extract.ts">run</a>({ ...params }) -> ExtractRunResponse</code>

## Templates

Types:

- <code><a href="./src/resources/extract/templates/templates.ts">TemplateUpdateResponse</a></code>
- <code><a href="./src/resources/extract/templates/templates.ts">TemplateListResponse</a></code>
- <code><a href="./src/resources/extract/templates/templates.ts">TemplateAsyncResponse</a></code>
- <code><a href="./src/resources/extract/templates/templates.ts">TemplateBatchResponse</a></code>
- <code><a href="./src/resources/extract/templates/templates.ts">TemplateGetResponse</a></code>
- <code><a href="./src/resources/extract/templates/templates.ts">TemplateRunResponse</a></code>

Methods:

- <code title="patch /v2/extract/templates/{extract_template_name}">client.extract.templates.<a href="./src/resources/extract/templates/templates.ts">update</a>(extractTemplateName, [ ...body ]) -> TemplateUpdateResponse</code>
- <code title="get /v2/extract/templates">client.extract.templates.<a href="./src/resources/extract/templates/templates.ts">list</a>({ ...params }) -> TemplateListResponse</code>
- <code title="delete /v2/extract/templates/{extract_template_name}">client.extract.templates.<a href="./src/resources/extract/templates/templates.ts">delete</a>(extractTemplateName) -> void</code>
- <code title="post /v2/extract/templates/async">client.extract.templates.<a href="./src/resources/extract/templates/templates.ts">async</a>({ ...params }) -> TemplateAsyncResponse</code>
- <code title="post /v2/extract/templates/batch">client.extract.templates.<a href="./src/resources/extract/templates/templates.ts">batch</a>({ ...params }) -> TemplateBatchResponse</code>
- <code title="get /v2/extract/templates/{extract_template_name}">client.extract.templates.<a href="./src/resources/extract/templates/templates.ts">get</a>(extractTemplateName) -> TemplateGetResponse</code>
- <code title="post /v2/extract/templates/run">client.extract.templates.<a href="./src/resources/extract/templates/templates.ts">run</a>({ ...params }) -> TemplateRunResponse</code>

### Generations

Types:

- <code><a href="./src/resources/extract/templates/generations.ts">GenerationCreateResponse</a></code>
- <code><a href="./src/resources/extract/templates/generations.ts">GenerationGetResponse</a></code>

Methods:

- <code title="post /v2/extract/templates/generations">client.extract.templates.generations.<a href="./src/resources/extract/templates/generations.ts">create</a>({ ...params }) -> GenerationCreateResponse</code>
- <code title="get /v2/extract/templates/generations/{generation_id}">client.extract.templates.generations.<a href="./src/resources/extract/templates/generations.ts">get</a>(generationID) -> GenerationGetResponse</code>

### Versions

Types:

- <code><a href="./src/resources/extract/templates/versions.ts">VersionListResponse</a></code>
- <code><a href="./src/resources/extract/templates/versions.ts">VersionGetResponse</a></code>

Methods:

- <code title="get /v2/extract/templates/{extract_template_name}/versions">client.extract.templates.versions.<a href="./src/resources/extract/templates/versions.ts">list</a>(extractTemplateName, { ...params }) -> VersionListResponse</code>
- <code title="get /v2/extract/templates/{extract_template_name}/versions/{version_id}">client.extract.templates.versions.<a href="./src/resources/extract/templates/versions.ts">get</a>(versionID, { ...params }) -> VersionGetResponse</code>

# Agents

Types:

- <code><a href="./src/resources/agents/agents.ts">AgentCreateResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentUpdateResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentListResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentGetResponse</a></code>

Methods:

- <code title="post /v2/agents">client.agents.<a href="./src/resources/agents/agents.ts">create</a>({ ...params }) -> AgentCreateResponse</code>
- <code title="patch /v2/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">update</a>(agentID, [ ...body ]) -> AgentUpdateResponse</code>
- <code title="get /v2/agents">client.agents.<a href="./src/resources/agents/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>
- <code title="delete /v2/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">delete</a>(agentID) -> void</code>
- <code title="get /v2/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">get</a>(agentID) -> AgentGetResponse</code>

## Templates

Types:

- <code><a href="./src/resources/agents/templates.ts">TemplateListResponse</a></code>
- <code><a href="./src/resources/agents/templates.ts">TemplateGetResponse</a></code>

Methods:

- <code title="get /v2/agents/templates">client.agents.templates.<a href="./src/resources/agents/templates.ts">list</a>({ ...params }) -> TemplateListResponse</code>
- <code title="get /v2/agents/templates/{template_name}">client.agents.templates.<a href="./src/resources/agents/templates.ts">get</a>(templateName) -> TemplateGetResponse</code>

## Runs

Types:

- <code><a href="./src/resources/agents/runs.ts">RunCreateResponse</a></code>
- <code><a href="./src/resources/agents/runs.ts">RunListResponse</a></code>
- <code><a href="./src/resources/agents/runs.ts">RunGetResponse</a></code>
- <code><a href="./src/resources/agents/runs.ts">RunResultResponse</a></code>

Methods:

- <code title="post /v2/agents/{agent_id}/runs">client.agents.runs.<a href="./src/resources/agents/runs.ts">create</a>(agentID, { ...params }) -> RunCreateResponse</code>
- <code title="get /v2/agents/{agent_id}/runs">client.agents.runs.<a href="./src/resources/agents/runs.ts">list</a>(agentID, { ...params }) -> RunListResponse</code>
- <code title="get /v2/agents/{agent_id}/runs/{run_id}">client.agents.runs.<a href="./src/resources/agents/runs.ts">get</a>(runID, { ...params }) -> RunGetResponse</code>
- <code title="get /v2/agents/{agent_id}/runs/{run_id}/result">client.agents.runs.<a href="./src/resources/agents/runs.ts">result</a>(runID, { ...params }) -> RunResultResponse</code>
- <code title="get /v2/agents/{agent_id}/runs/{run_id}/events">client.agents.runs.<a href="./src/resources/agents/runs.ts">streamEvents</a>(runID, { ...params }) -> void</code>

# Crawl

Types:

- <code><a href="./src/resources/crawl.ts">CrawlListResponse</a></code>
- <code><a href="./src/resources/crawl.ts">CrawlRunResponse</a></code>
- <code><a href="./src/resources/crawl.ts">CrawlStatusResponse</a></code>
- <code><a href="./src/resources/crawl.ts">CrawlTerminateResponse</a></code>

Methods:

- <code title="get /v2/crawl">client.crawl.<a href="./src/resources/crawl.ts">list</a>({ ...params }) -> CrawlListResponse</code>
- <code title="post /v2/crawl">client.crawl.<a href="./src/resources/crawl.ts">run</a>({ ...params }) -> CrawlRunResponse</code>
- <code title="get /v2/crawl/{id}">client.crawl.<a href="./src/resources/crawl.ts">status</a>(id) -> CrawlStatusResponse</code>
- <code title="delete /v2/crawl/{id}">client.crawl.<a href="./src/resources/crawl.ts">terminate</a>(id) -> CrawlTerminateResponse</code>

# Tasks

Types:

- <code><a href="./src/resources/tasks.ts">TaskListResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskGetResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskResultsResponse</a></code>

Methods:

- <code title="get /v2/tasks">client.tasks.<a href="./src/resources/tasks.ts">list</a>({ ...params }) -> TaskListResponse</code>
- <code title="get /v2/tasks/{task_id}">client.tasks.<a href="./src/resources/tasks.ts">get</a>(taskID) -> TaskGetResponse</code>
- <code title="get /v2/tasks/{task_id}/results">client.tasks.<a href="./src/resources/tasks.ts">results</a>(taskID) -> TaskResultsResponse</code>

# Batches

Types:

- <code><a href="./src/resources/batches.ts">BatchGetResponse</a></code>
- <code><a href="./src/resources/batches.ts">BatchProgressResponse</a></code>

Methods:

- <code title="get /v2/batches">client.batches.<a href="./src/resources/batches.ts">list</a>() -> void</code>
- <code title="get /v2/batches/{batch_id}">client.batches.<a href="./src/resources/batches.ts">get</a>(batchID) -> BatchGetResponse</code>
- <code title="get /v2/batches/{batch_id}/progress">client.batches.<a href="./src/resources/batches.ts">progress</a>(batchID) -> BatchProgressResponse</code>

# DomainKnowledge

Types:

- <code><a href="./src/resources/domain-knowledge.ts">DomainKnowledgeGetDriverResponse</a></code>

Methods:

- <code title="get /v2/domain-knowledge/driver">client.domainKnowledge.<a href="./src/resources/domain-knowledge.ts">getDriver</a>({ ...params }) -> DomainKnowledgeGetDriverResponse</code>

# Media

Types:

- <code><a href="./src/resources/media.ts">MediaRunResponse</a></code>
- <code><a href="./src/resources/media.ts">MediaRunAsyncResponse</a></code>

Methods:

- <code title="post /v2/media">client.media.<a href="./src/resources/media.ts">run</a>({ ...params }) -> MediaRunResponse</code>
- <code title="post /v2/media/async">client.media.<a href="./src/resources/media.ts">runAsync</a>({ ...params }) -> MediaRunAsyncResponse</code>

# Serp

Types:

- <code><a href="./src/resources/serp.ts">SerpRunResponse</a></code>
- <code><a href="./src/resources/serp.ts">SerpRunAsyncResponse</a></code>
- <code><a href="./src/resources/serp.ts">SerpRunBatchResponse</a></code>

Methods:

- <code title="post /v2/serp">client.serp.<a href="./src/resources/serp.ts">run</a>({ ...params }) -> SerpRunResponse</code>
- <code title="post /v2/serp/async">client.serp.<a href="./src/resources/serp.ts">runAsync</a>({ ...params }) -> SerpRunAsyncResponse</code>
- <code title="post /v2/serp/batch">client.serp.<a href="./src/resources/serp.ts">runBatch</a>({ ...params }) -> SerpRunBatchResponse</code>

# FastSerp

Types:

- <code><a href="./src/resources/fast-serp.ts">FastSerpRunResponse</a></code>

Methods:

- <code title="post /v2/fast-serp">client.fastSerp.<a href="./src/resources/fast-serp.ts">run</a>({ ...params }) -> FastSerpRunResponse</code>

# Jobs

Types:

- <code><a href="./src/resources/jobs/jobs.ts">JobCreateResponse</a></code>
- <code><a href="./src/resources/jobs/jobs.ts">JobUpdateResponse</a></code>
- <code><a href="./src/resources/jobs/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/jobs/jobs.ts">JobGetResponse</a></code>

Methods:

- <code title="post /v2/jobs">client.jobs.<a href="./src/resources/jobs/jobs.ts">create</a>({ ...params }) -> JobCreateResponse</code>
- <code title="patch /v2/jobs/{job_id}">client.jobs.<a href="./src/resources/jobs/jobs.ts">update</a>(jobID, { ...params }) -> JobUpdateResponse</code>
- <code title="get /v2/jobs">client.jobs.<a href="./src/resources/jobs/jobs.ts">list</a>({ ...params }) -> JobListResponse</code>
- <code title="delete /v2/jobs/{job_id}">client.jobs.<a href="./src/resources/jobs/jobs.ts">delete</a>(jobID) -> void</code>
- <code title="get /v2/jobs/{job_id}">client.jobs.<a href="./src/resources/jobs/jobs.ts">get</a>(jobID) -> JobGetResponse</code>

## Runs

Types:

- <code><a href="./src/resources/jobs/runs/runs.ts">RunCreateResponse</a></code>
- <code><a href="./src/resources/jobs/runs/runs.ts">RunListResponse</a></code>
- <code><a href="./src/resources/jobs/runs/runs.ts">RunCancelResponse</a></code>
- <code><a href="./src/resources/jobs/runs/runs.ts">RunGetResponse</a></code>

Methods:

- <code title="post /v2/jobs/{job_id}/runs">client.jobs.runs.<a href="./src/resources/jobs/runs/runs.ts">create</a>(jobID) -> RunCreateResponse</code>
- <code title="get /v2/jobs/{job_id}/runs">client.jobs.runs.<a href="./src/resources/jobs/runs/runs.ts">list</a>(jobID, { ...params }) -> RunListResponse</code>
- <code title="post /v2/jobs/runs/{run_id}/cancel">client.jobs.runs.<a href="./src/resources/jobs/runs/runs.ts">cancel</a>(runID) -> RunCancelResponse</code>
- <code title="get /v2/jobs/runs/{run_id}">client.jobs.runs.<a href="./src/resources/jobs/runs/runs.ts">get</a>(runID) -> RunGetResponse</code>

### Artifacts

Types:

- <code><a href="./src/resources/jobs/runs/artifacts.ts">ArtifactListResponse</a></code>
- <code><a href="./src/resources/jobs/runs/artifacts.ts">ArtifactDownloadURLResponse</a></code>
- <code><a href="./src/resources/jobs/runs/artifacts.ts">ArtifactGetResponse</a></code>
- <code><a href="./src/resources/jobs/runs/artifacts.ts">ArtifactPreviewResponse</a></code>

Methods:

- <code title="get /v2/jobs/runs/{run_id}/artifacts">client.jobs.runs.artifacts.<a href="./src/resources/jobs/runs/artifacts.ts">list</a>(runID) -> ArtifactListResponse</code>
- <code title="get /v2/jobs/runs/{run_id}/artifacts/{artifact_id}/download-url">client.jobs.runs.artifacts.<a href="./src/resources/jobs/runs/artifacts.ts">downloadURL</a>(artifactID, { ...params }) -> ArtifactDownloadURLResponse</code>
- <code title="get /v2/jobs/runs/{run_id}/artifacts/{artifact_id}">client.jobs.runs.artifacts.<a href="./src/resources/jobs/runs/artifacts.ts">get</a>(artifactID, { ...params }) -> ArtifactGetResponse</code>
- <code title="get /v2/jobs/runs/{run_id}/artifacts/{artifact_id}/preview">client.jobs.runs.artifacts.<a href="./src/resources/jobs/runs/artifacts.ts">preview</a>(artifactID, { ...params }) -> ArtifactPreviewResponse</code>
