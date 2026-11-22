import { defineConfig } from '@hey-api/openapi-ts';

// Public resource names are independent of the HTTP paths and generated type names.
// Keep every selected operation here so a new operation cannot silently appear
// as a method on the root client.
const methods: Record<string, readonly [string, string]> = {
  deactivateAgent: ['agents', 'deactivate'],
  deleteCrawl: ['crawl', 'delete'],
  deleteExtractTemplate: ['extractTemplates', 'delete'],
  deleteJob: ['jobs', 'delete'],
  listAgents: ['agents', 'list'],
  listAgentTemplates: ['agentTemplates', 'list'],
  getAgentTemplate: ['agentTemplates', 'get'],
  getAgent: ['agents', 'get'],
  listAgentRuns: ['agentRuns', 'list'],
  getAgentRun: ['agentRuns', 'get'],
  streamAgentRunEvents: ['agentRuns', 'events'],
  getAgentRunResult: ['agentRuns', 'result'],
  listBatches: ['batches', 'list'],
  getBatch: ['batches', 'get'],
  getBatchProgress: ['batches', 'progress'],
  listCrawls: ['crawl', 'list'],
  getCrawl: ['crawl', 'get'],
  getDomainKnowledgeDriver: ['domainKnowledge', 'driver'],
  listExtractTemplates: ['extractTemplates', 'list'],
  getExtractTemplateGeneration: ['extractTemplates', 'generation'],
  getExtractTemplate: ['extractTemplates', 'get'],
  listExtractTemplateVersions: ['extractTemplates', 'versions'],
  getExtractTemplateVersion: ['extractTemplates', 'version'],
  listJobs: ['jobs', 'list'],
  getJobRun: ['jobRuns', 'get'],
  listJobRunArtifacts: ['jobRuns', 'artifacts'],
  getJobRunArtifact: ['jobRuns', 'artifact'],
  getJobRunArtifactDownloadUrl: ['jobRuns', 'artifactDownloadUrl'],
  previewJobRunArtifact: ['jobRuns', 'previewArtifact'],
  getJob: ['jobs', 'get'],
  listJobRuns: ['jobRuns', 'list'],
  listTasks: ['tasks', 'list'],
  getTask: ['tasks', 'get'],
  getTaskResults: ['tasks', 'results'],
  updateAgent: ['agents', 'update'],
  updateExtractTemplate: ['extractTemplates', 'update'],
  updateJob: ['jobs', 'update'],
  createAgent: ['agents', 'create'],
  createGeneratedAgentRun: ['agentRuns', 'createGenerated'],
  createAgentRun: ['agentRuns', 'create'],
  createCrawl: ['crawl', 'create'],
  extract: ['extract', 'run'],
  submitAsyncExtract: ['extract', 'runAsync'],
  submitBatchExtract: ['extract', 'runBatch'],
  runExtractTemplateAsync: ['extractTemplates', 'runAsync'],
  runExtractTemplateBatch: ['extractTemplates', 'runBatch'],
  createExtractTemplateGeneration: ['extractTemplates', 'createGeneration'],
  runExtractTemplate: ['extractTemplates', 'run'],
  fastSerp: ['fastSerp', 'run'],
  createJob: ['jobs', 'create'],
  cancelJobRun: ['jobRuns', 'cancel'],
  triggerJobRun: ['jobRuns', 'trigger'],
  mapUrls: ['map', 'run'],
  captureMedia: ['media', 'capture'],
  captureMediaAsync: ['media', 'captureAsync'],
  performSearch: ['search', 'run'],
  serp: ['serp', 'run'],
  submitAsyncSerp: ['serp', 'runAsync'],
  submitBatchSerp: ['serp', 'runBatch'],
};

export default defineConfig({
  input: './contract/openapi.yaml',
  output: './generated',
  plugins: [
    '@hey-api/typescript',
    '@hey-api/client-fetch',
    {
      name: '@hey-api/sdk',
      paramsStructure: 'flat',
      operations: {
        containerName: 'Nimble',
        strategy: 'single',
        nesting(operation) {
          const name = operation.operationId ?? '';
          const method = methods[name];
          if (!method) {
            throw new Error(`No public SDK method defined for operation ${name}`);
          }
          return method;
        },
      },
    },
  ],
});
