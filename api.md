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

# Agent

Types:

- <code><a href="./src/resources/agent.ts">AgentListResponse</a></code>
- <code><a href="./src/resources/agent.ts">AgentGenerateResponse</a></code>
- <code><a href="./src/resources/agent.ts">AgentGetResponse</a></code>
- <code><a href="./src/resources/agent.ts">AgentGetGenerationResponse</a></code>
- <code><a href="./src/resources/agent.ts">AgentRunResponse</a></code>
- <code><a href="./src/resources/agent.ts">AgentRunAsyncResponse</a></code>
- <code><a href="./src/resources/agent.ts">AgentRunBatchResponse</a></code>

Methods:

- <code title="get /v1/agents">client.agent.<a href="./src/resources/agent.ts">list</a>({ ...params }) -> AgentListResponse</code>
- <code title="post /v1/agents/generations">client.agent.<a href="./src/resources/agent.ts">generate</a>({ ...params }) -> AgentGenerateResponse</code>
- <code title="get /v1/agents/{template_name}">client.agent.<a href="./src/resources/agent.ts">get</a>(templateName) -> AgentGetResponse</code>
- <code title="get /v1/agents/generations/{generation_id}">client.agent.<a href="./src/resources/agent.ts">getGeneration</a>(generationID) -> AgentGetGenerationResponse</code>
- <code title="post /v1/agents/run">client.agent.<a href="./src/resources/agent.ts">run</a>({ ...params }) -> AgentRunResponse</code>
- <code title="post /v1/agents/async">client.agent.<a href="./src/resources/agent.ts">runAsync</a>({ ...params }) -> AgentRunAsyncResponse</code>
- <code title="post /v1/agents/batch">client.agent.<a href="./src/resources/agent.ts">runBatch</a>({ ...params }) -> AgentRunBatchResponse</code>

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

# DomainKnowledge

Types:

- <code><a href="./src/resources/domain-knowledge.ts">DomainKnowledgeGetDriverResponse</a></code>

Methods:

- <code title="get /v1/domain-knowledge/driver">client.domainKnowledge.<a href="./src/resources/domain-knowledge.ts">getDriver</a>({ ...params }) -> DomainKnowledgeGetDriverResponse</code>

# Media

Types:

- <code><a href="./src/resources/media.ts">MediaRunResponse</a></code>
- <code><a href="./src/resources/media.ts">MediaRunAsyncResponse</a></code>

Methods:

- <code title="post /v1/media">client.media.<a href="./src/resources/media.ts">run</a>({ ...params }) -> MediaRunResponse</code>
- <code title="post /v1/media/async">client.media.<a href="./src/resources/media.ts">runAsync</a>({ ...params }) -> MediaRunAsyncResponse</code>

# Serp

Types:

- <code><a href="./src/resources/serp.ts">SerpRunResponse</a></code>
- <code><a href="./src/resources/serp.ts">SerpRunAsyncResponse</a></code>
- <code><a href="./src/resources/serp.ts">SerpRunBatchResponse</a></code>

Methods:

- <code title="post /v1/serp">client.serp.<a href="./src/resources/serp.ts">run</a>({ ...params }) -> SerpRunResponse</code>
- <code title="post /v1/serp/async">client.serp.<a href="./src/resources/serp.ts">runAsync</a>({ ...params }) -> SerpRunAsyncResponse</code>
- <code title="post /v1/serp/batch">client.serp.<a href="./src/resources/serp.ts">runBatch</a>({ ...params }) -> SerpRunBatchResponse</code>

# FastSerp

Types:

- <code><a href="./src/resources/fast-serp.ts">FastSerpRunResponse</a></code>

Methods:

- <code title="post /v1/fast-serp">client.fastSerp.<a href="./src/resources/fast-serp.ts">run</a>({ ...params }) -> FastSerpRunResponse</code>

# TaskAgent

Types:

- <code><a href="./src/resources/task-agent/task-agent.ts">TaskAgentCreateResponse</a></code>
- <code><a href="./src/resources/task-agent/task-agent.ts">TaskAgentUpdateResponse</a></code>
- <code><a href="./src/resources/task-agent/task-agent.ts">TaskAgentListResponse</a></code>
- <code><a href="./src/resources/task-agent/task-agent.ts">TaskAgentGetResponse</a></code>
- <code><a href="./src/resources/task-agent/task-agent.ts">TaskAgentRunResponse</a></code>

Methods:

- <code title="post /v1/task-agents">client.taskAgent.<a href="./src/resources/task-agent/task-agent.ts">create</a>({ ...params }) -> TaskAgentCreateResponse</code>
- <code title="patch /v1/task-agents/{agent_id}">client.taskAgent.<a href="./src/resources/task-agent/task-agent.ts">update</a>(agentID, [ ...body ]) -> TaskAgentUpdateResponse</code>
- <code title="get /v1/task-agents">client.taskAgent.<a href="./src/resources/task-agent/task-agent.ts">list</a>({ ...params }) -> TaskAgentListResponse</code>
- <code title="delete /v1/task-agents/{agent_id}">client.taskAgent.<a href="./src/resources/task-agent/task-agent.ts">deactivate</a>(agentID) -> void</code>
- <code title="get /v1/task-agents/{agent_id}">client.taskAgent.<a href="./src/resources/task-agent/task-agent.ts">get</a>(agentID) -> TaskAgentGetResponse</code>
- <code title="post /v1/task-agents/{agent_id}/runs">client.taskAgent.<a href="./src/resources/task-agent/task-agent.ts">run</a>(agentID, { ...params }) -> TaskAgentRunResponse</code>

## Templates

Types:

- <code><a href="./src/resources/task-agent/templates.ts">TemplateListResponse</a></code>
- <code><a href="./src/resources/task-agent/templates.ts">TemplateGetResponse</a></code>

Methods:

- <code title="get /v1/task-agents/templates">client.taskAgent.templates.<a href="./src/resources/task-agent/templates.ts">list</a>({ ...params }) -> TemplateListResponse</code>
- <code title="get /v1/task-agents/templates/{template_name}">client.taskAgent.templates.<a href="./src/resources/task-agent/templates.ts">get</a>(templateName) -> TemplateGetResponse</code>

## Runs

Types:

- <code><a href="./src/resources/task-agent/runs.ts">RunListResponse</a></code>
- <code><a href="./src/resources/task-agent/runs.ts">RunGetResponse</a></code>
- <code><a href="./src/resources/task-agent/runs.ts">RunGetResultResponse</a></code>
- <code><a href="./src/resources/task-agent/runs.ts">RunStreamEventsResponse</a></code>

Methods:

- <code title="get /v1/task-agents/{agent_id}/runs">client.taskAgent.runs.<a href="./src/resources/task-agent/runs.ts">list</a>(agentID, { ...params }) -> RunListResponse</code>
- <code title="post /v1/task-agents/{agent_id}/runs/{run_id}/cancel">client.taskAgent.runs.<a href="./src/resources/task-agent/runs.ts">cancel</a>(runID, { ...params }) -> void</code>
- <code title="get /v1/task-agents/{agent_id}/runs/{run_id}">client.taskAgent.runs.<a href="./src/resources/task-agent/runs.ts">get</a>(runID, { ...params }) -> RunGetResponse</code>
- <code title="get /v1/task-agents/{agent_id}/runs/{run_id}/result">client.taskAgent.runs.<a href="./src/resources/task-agent/runs.ts">getResult</a>(runID, { ...params }) -> RunGetResultResponse</code>
- <code title="get /v1/task-agents/{agent_id}/runs/{run_id}/events">client.taskAgent.runs.<a href="./src/resources/task-agent/runs.ts">streamEvents</a>(runID, { ...params }) -> unknown</code>

# Jobs

Types:

- <code><a href="./src/resources/jobs/jobs.ts">JobCreateResponse</a></code>
- <code><a href="./src/resources/jobs/jobs.ts">JobUpdateResponse</a></code>
- <code><a href="./src/resources/jobs/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/jobs/jobs.ts">JobGetResponse</a></code>
- <code><a href="./src/resources/jobs/jobs.ts">JobRunResponse</a></code>

Methods:

- <code title="post /v1/jobs">client.jobs.<a href="./src/resources/jobs/jobs.ts">create</a>({ ...params }) -> JobCreateResponse</code>
- <code title="patch /v1/jobs/{job_id}">client.jobs.<a href="./src/resources/jobs/jobs.ts">update</a>(jobID, { ...params }) -> JobUpdateResponse</code>
- <code title="get /v1/jobs">client.jobs.<a href="./src/resources/jobs/jobs.ts">list</a>({ ...params }) -> JobListResponse</code>
- <code title="delete /v1/jobs/{job_id}">client.jobs.<a href="./src/resources/jobs/jobs.ts">delete</a>(jobID) -> void</code>
- <code title="get /v1/jobs/{job_id}">client.jobs.<a href="./src/resources/jobs/jobs.ts">get</a>(jobID) -> JobGetResponse</code>
- <code title="post /v1/jobs/{job_id}/runs">client.jobs.<a href="./src/resources/jobs/jobs.ts">run</a>(jobID) -> JobRunResponse</code>

## Runs

Types:

- <code><a href="./src/resources/jobs/runs/runs.ts">RunListResponse</a></code>
- <code><a href="./src/resources/jobs/runs/runs.ts">RunCancelResponse</a></code>
- <code><a href="./src/resources/jobs/runs/runs.ts">RunGetResponse</a></code>

Methods:

- <code title="get /v1/jobs/{job_id}/runs">client.jobs.runs.<a href="./src/resources/jobs/runs/runs.ts">list</a>(jobID, { ...params }) -> RunListResponse</code>
- <code title="post /v1/jobs/runs/{run_id}/cancel">client.jobs.runs.<a href="./src/resources/jobs/runs/runs.ts">cancel</a>(runID) -> RunCancelResponse</code>
- <code title="get /v1/jobs/runs/{run_id}">client.jobs.runs.<a href="./src/resources/jobs/runs/runs.ts">get</a>(runID) -> RunGetResponse</code>

### Artifacts

Types:

- <code><a href="./src/resources/jobs/runs/artifacts.ts">ArtifactListResponse</a></code>
- <code><a href="./src/resources/jobs/runs/artifacts.ts">ArtifactDownloadURLResponse</a></code>
- <code><a href="./src/resources/jobs/runs/artifacts.ts">ArtifactGetResponse</a></code>
- <code><a href="./src/resources/jobs/runs/artifacts.ts">ArtifactPreviewResponse</a></code>

Methods:

- <code title="get /v1/jobs/runs/{run_id}/artifacts">client.jobs.runs.artifacts.<a href="./src/resources/jobs/runs/artifacts.ts">list</a>(runID) -> ArtifactListResponse</code>
- <code title="get /v1/jobs/runs/{run_id}/artifacts/{artifact_id}/download-url">client.jobs.runs.artifacts.<a href="./src/resources/jobs/runs/artifacts.ts">downloadURL</a>(artifactID, { ...params }) -> ArtifactDownloadURLResponse</code>
- <code title="get /v1/jobs/runs/{run_id}/artifacts/{artifact_id}">client.jobs.runs.artifacts.<a href="./src/resources/jobs/runs/artifacts.ts">get</a>(artifactID, { ...params }) -> ArtifactGetResponse</code>
- <code title="get /v1/jobs/runs/{run_id}/artifacts/{artifact_id}/preview">client.jobs.runs.artifacts.<a href="./src/resources/jobs/runs/artifacts.ts">preview</a>(artifactID, { ...params }) -> ArtifactPreviewResponse</code>
