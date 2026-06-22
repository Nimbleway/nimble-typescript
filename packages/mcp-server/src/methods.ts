// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.extract',
    fullyQualifiedName: 'extract',
    httpMethod: 'post',
    httpPath: '/v1/extract',
  },
  {
    clientCallName: 'client.extractAsync',
    fullyQualifiedName: 'extractAsync',
    httpMethod: 'post',
    httpPath: '/v1/extract/async',
  },
  {
    clientCallName: 'client.extractBatch',
    fullyQualifiedName: 'extractBatch',
    httpMethod: 'post',
    httpPath: '/v1/extract/batch',
  },
  {
    clientCallName: 'client.map',
    fullyQualifiedName: 'map',
    httpMethod: 'post',
    httpPath: '/v1/map',
  },
  {
    clientCallName: 'client.search',
    fullyQualifiedName: 'search',
    httpMethod: 'post',
    httpPath: '/v1/search',
  },
  {
    clientCallName: 'client.agent.list',
    fullyQualifiedName: 'agent.list',
    httpMethod: 'get',
    httpPath: '/v1/agents',
  },
  {
    clientCallName: 'client.agent.generate',
    fullyQualifiedName: 'agent.generate',
    httpMethod: 'post',
    httpPath: '/v1/agents/generations',
  },
  {
    clientCallName: 'client.agent.get',
    fullyQualifiedName: 'agent.get',
    httpMethod: 'get',
    httpPath: '/v1/agents/{template_name}',
  },
  {
    clientCallName: 'client.agent.getGeneration',
    fullyQualifiedName: 'agent.getGeneration',
    httpMethod: 'get',
    httpPath: '/v1/agents/generations/{generation_id}',
  },
  {
    clientCallName: 'client.agent.run',
    fullyQualifiedName: 'agent.run',
    httpMethod: 'post',
    httpPath: '/v1/agents/run',
  },
  {
    clientCallName: 'client.agent.runAsync',
    fullyQualifiedName: 'agent.runAsync',
    httpMethod: 'post',
    httpPath: '/v1/agents/async',
  },
  {
    clientCallName: 'client.agent.runBatch',
    fullyQualifiedName: 'agent.runBatch',
    httpMethod: 'post',
    httpPath: '/v1/agents/batch',
  },
  {
    clientCallName: 'client.crawl.list',
    fullyQualifiedName: 'crawl.list',
    httpMethod: 'get',
    httpPath: '/v1/crawl',
  },
  {
    clientCallName: 'client.crawl.run',
    fullyQualifiedName: 'crawl.run',
    httpMethod: 'post',
    httpPath: '/v1/crawl',
  },
  {
    clientCallName: 'client.crawl.status',
    fullyQualifiedName: 'crawl.status',
    httpMethod: 'get',
    httpPath: '/v1/crawl/{id}',
  },
  {
    clientCallName: 'client.crawl.terminate',
    fullyQualifiedName: 'crawl.terminate',
    httpMethod: 'delete',
    httpPath: '/v1/crawl/{id}',
  },
  {
    clientCallName: 'client.tasks.list',
    fullyQualifiedName: 'tasks.list',
    httpMethod: 'get',
    httpPath: '/v1/tasks',
  },
  {
    clientCallName: 'client.tasks.get',
    fullyQualifiedName: 'tasks.get',
    httpMethod: 'get',
    httpPath: '/v1/tasks/{task_id}',
  },
  {
    clientCallName: 'client.tasks.results',
    fullyQualifiedName: 'tasks.results',
    httpMethod: 'get',
    httpPath: '/v1/tasks/{task_id}/results',
  },
  {
    clientCallName: 'client.batches.list',
    fullyQualifiedName: 'batches.list',
    httpMethod: 'get',
    httpPath: '/v1/batches',
  },
  {
    clientCallName: 'client.batches.get',
    fullyQualifiedName: 'batches.get',
    httpMethod: 'get',
    httpPath: '/v1/batches/{batch_id}',
  },
  {
    clientCallName: 'client.batches.progress',
    fullyQualifiedName: 'batches.progress',
    httpMethod: 'get',
    httpPath: '/v1/batches/{batch_id}/progress',
  },
  {
    clientCallName: 'client.domainKnowledge.getDriver',
    fullyQualifiedName: 'domainKnowledge.getDriver',
    httpMethod: 'get',
    httpPath: '/v1/domain-knowledge/driver',
  },
  {
    clientCallName: 'client.media.run',
    fullyQualifiedName: 'media.run',
    httpMethod: 'post',
    httpPath: '/v1/media',
  },
  {
    clientCallName: 'client.media.runAsync',
    fullyQualifiedName: 'media.runAsync',
    httpMethod: 'post',
    httpPath: '/v1/media/async',
  },
  {
    clientCallName: 'client.serp.run',
    fullyQualifiedName: 'serp.run',
    httpMethod: 'post',
    httpPath: '/v1/serp',
  },
  {
    clientCallName: 'client.serp.runAsync',
    fullyQualifiedName: 'serp.runAsync',
    httpMethod: 'post',
    httpPath: '/v1/serp/async',
  },
  {
    clientCallName: 'client.serp.runBatch',
    fullyQualifiedName: 'serp.runBatch',
    httpMethod: 'post',
    httpPath: '/v1/serp/batch',
  },
  {
    clientCallName: 'client.fastSerp.run',
    fullyQualifiedName: 'fastSerp.run',
    httpMethod: 'post',
    httpPath: '/v1/fast-serp',
  },
  {
    clientCallName: 'client.taskAgent.create',
    fullyQualifiedName: 'taskAgent.create',
    httpMethod: 'post',
    httpPath: '/v1/task-agents',
  },
  {
    clientCallName: 'client.taskAgent.update',
    fullyQualifiedName: 'taskAgent.update',
    httpMethod: 'patch',
    httpPath: '/v1/task-agents/{agent_id}',
  },
  {
    clientCallName: 'client.taskAgent.list',
    fullyQualifiedName: 'taskAgent.list',
    httpMethod: 'get',
    httpPath: '/v1/task-agents',
  },
  {
    clientCallName: 'client.taskAgent.deactivate',
    fullyQualifiedName: 'taskAgent.deactivate',
    httpMethod: 'delete',
    httpPath: '/v1/task-agents/{agent_id}',
  },
  {
    clientCallName: 'client.taskAgent.get',
    fullyQualifiedName: 'taskAgent.get',
    httpMethod: 'get',
    httpPath: '/v1/task-agents/{agent_id}',
  },
  {
    clientCallName: 'client.taskAgent.run',
    fullyQualifiedName: 'taskAgent.run',
    httpMethod: 'post',
    httpPath: '/v1/task-agents/{agent_id}/runs',
  },
  {
    clientCallName: 'client.taskAgent.templates.list',
    fullyQualifiedName: 'taskAgent.templates.list',
    httpMethod: 'get',
    httpPath: '/v1/task-agents/templates',
  },
  {
    clientCallName: 'client.taskAgent.templates.get',
    fullyQualifiedName: 'taskAgent.templates.get',
    httpMethod: 'get',
    httpPath: '/v1/task-agents/templates/{template_name}',
  },
  {
    clientCallName: 'client.taskAgent.runs.list',
    fullyQualifiedName: 'taskAgent.runs.list',
    httpMethod: 'get',
    httpPath: '/v1/task-agents/{agent_id}/runs',
  },
  {
    clientCallName: 'client.taskAgent.runs.cancel',
    fullyQualifiedName: 'taskAgent.runs.cancel',
    httpMethod: 'post',
    httpPath: '/v1/task-agents/{agent_id}/runs/{run_id}/cancel',
  },
  {
    clientCallName: 'client.taskAgent.runs.get',
    fullyQualifiedName: 'taskAgent.runs.get',
    httpMethod: 'get',
    httpPath: '/v1/task-agents/{agent_id}/runs/{run_id}',
  },
  {
    clientCallName: 'client.taskAgent.runs.getResult',
    fullyQualifiedName: 'taskAgent.runs.getResult',
    httpMethod: 'get',
    httpPath: '/v1/task-agents/{agent_id}/runs/{run_id}/result',
  },
  {
    clientCallName: 'client.taskAgent.runs.streamEvents',
    fullyQualifiedName: 'taskAgent.runs.streamEvents',
    httpMethod: 'get',
    httpPath: '/v1/task-agents/{agent_id}/runs/{run_id}/events',
  },
  {
    clientCallName: 'client.jobs.create',
    fullyQualifiedName: 'jobs.create',
    httpMethod: 'post',
    httpPath: '/v1/jobs',
  },
  {
    clientCallName: 'client.jobs.update',
    fullyQualifiedName: 'jobs.update',
    httpMethod: 'patch',
    httpPath: '/v1/jobs/{job_id}',
  },
  {
    clientCallName: 'client.jobs.list',
    fullyQualifiedName: 'jobs.list',
    httpMethod: 'get',
    httpPath: '/v1/jobs',
  },
  {
    clientCallName: 'client.jobs.delete',
    fullyQualifiedName: 'jobs.delete',
    httpMethod: 'delete',
    httpPath: '/v1/jobs/{job_id}',
  },
  {
    clientCallName: 'client.jobs.get',
    fullyQualifiedName: 'jobs.get',
    httpMethod: 'get',
    httpPath: '/v1/jobs/{job_id}',
  },
  {
    clientCallName: 'client.jobs.run',
    fullyQualifiedName: 'jobs.run',
    httpMethod: 'post',
    httpPath: '/v1/jobs/{job_id}/runs',
  },
  {
    clientCallName: 'client.jobs.runs.list',
    fullyQualifiedName: 'jobs.runs.list',
    httpMethod: 'get',
    httpPath: '/v1/jobs/{job_id}/runs',
  },
  {
    clientCallName: 'client.jobs.runs.cancel',
    fullyQualifiedName: 'jobs.runs.cancel',
    httpMethod: 'post',
    httpPath: '/v1/jobs/runs/{run_id}/cancel',
  },
  {
    clientCallName: 'client.jobs.runs.get',
    fullyQualifiedName: 'jobs.runs.get',
    httpMethod: 'get',
    httpPath: '/v1/jobs/runs/{run_id}',
  },
  {
    clientCallName: 'client.jobs.runs.artifacts.list',
    fullyQualifiedName: 'jobs.runs.artifacts.list',
    httpMethod: 'get',
    httpPath: '/v1/jobs/runs/{run_id}/artifacts',
  },
  {
    clientCallName: 'client.jobs.runs.artifacts.downloadURL',
    fullyQualifiedName: 'jobs.runs.artifacts.downloadURL',
    httpMethod: 'get',
    httpPath: '/v1/jobs/runs/{run_id}/artifacts/{artifact_id}/download-url',
  },
  {
    clientCallName: 'client.jobs.runs.artifacts.get',
    fullyQualifiedName: 'jobs.runs.artifacts.get',
    httpMethod: 'get',
    httpPath: '/v1/jobs/runs/{run_id}/artifacts/{artifact_id}',
  },
  {
    clientCallName: 'client.jobs.runs.artifacts.preview',
    fullyQualifiedName: 'jobs.runs.artifacts.preview',
    httpMethod: 'get',
    httpPath: '/v1/jobs/runs/{run_id}/artifacts/{artifact_id}/preview',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
