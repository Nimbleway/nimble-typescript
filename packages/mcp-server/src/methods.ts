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
    clientCallName: 'client.map',
    fullyQualifiedName: 'map',
    httpMethod: 'post',
    httpPath: '/v2/map',
  },
  {
    clientCallName: 'client.search',
    fullyQualifiedName: 'search',
    httpMethod: 'post',
    httpPath: '/v2/search',
  },
  {
    clientCallName: 'client.extract.async',
    fullyQualifiedName: 'extract.async',
    httpMethod: 'post',
    httpPath: '/v2/extract/async',
  },
  {
    clientCallName: 'client.extract.batch',
    fullyQualifiedName: 'extract.batch',
    httpMethod: 'post',
    httpPath: '/v2/extract/batch',
  },
  {
    clientCallName: 'client.extract.run',
    fullyQualifiedName: 'extract.run',
    httpMethod: 'post',
    httpPath: '/v2/extract',
  },
  {
    clientCallName: 'client.extract.templates.update',
    fullyQualifiedName: 'extract.templates.update',
    httpMethod: 'patch',
    httpPath: '/v2/extract/templates/{extract_template_name}',
  },
  {
    clientCallName: 'client.extract.templates.list',
    fullyQualifiedName: 'extract.templates.list',
    httpMethod: 'get',
    httpPath: '/v2/extract/templates',
  },
  {
    clientCallName: 'client.extract.templates.delete',
    fullyQualifiedName: 'extract.templates.delete',
    httpMethod: 'delete',
    httpPath: '/v2/extract/templates/{extract_template_name}',
  },
  {
    clientCallName: 'client.extract.templates.async',
    fullyQualifiedName: 'extract.templates.async',
    httpMethod: 'post',
    httpPath: '/v2/extract/templates/async',
  },
  {
    clientCallName: 'client.extract.templates.batch',
    fullyQualifiedName: 'extract.templates.batch',
    httpMethod: 'post',
    httpPath: '/v2/extract/templates/batch',
  },
  {
    clientCallName: 'client.extract.templates.get',
    fullyQualifiedName: 'extract.templates.get',
    httpMethod: 'get',
    httpPath: '/v2/extract/templates/{extract_template_name}',
  },
  {
    clientCallName: 'client.extract.templates.run',
    fullyQualifiedName: 'extract.templates.run',
    httpMethod: 'post',
    httpPath: '/v2/extract/templates/run',
  },
  {
    clientCallName: 'client.extract.templates.generations.create',
    fullyQualifiedName: 'extract.templates.generations.create',
    httpMethod: 'post',
    httpPath: '/v2/extract/templates/generations',
  },
  {
    clientCallName: 'client.extract.templates.generations.get',
    fullyQualifiedName: 'extract.templates.generations.get',
    httpMethod: 'get',
    httpPath: '/v2/extract/templates/generations/{generation_id}',
  },
  {
    clientCallName: 'client.extract.templates.versions.list',
    fullyQualifiedName: 'extract.templates.versions.list',
    httpMethod: 'get',
    httpPath: '/v2/extract/templates/{extract_template_name}/versions',
  },
  {
    clientCallName: 'client.extract.templates.versions.get',
    fullyQualifiedName: 'extract.templates.versions.get',
    httpMethod: 'get',
    httpPath: '/v2/extract/templates/{extract_template_name}/versions/{version_id}',
  },
  {
    clientCallName: 'client.agents.create',
    fullyQualifiedName: 'agents.create',
    httpMethod: 'post',
    httpPath: '/v2/agents',
  },
  {
    clientCallName: 'client.agents.update',
    fullyQualifiedName: 'agents.update',
    httpMethod: 'patch',
    httpPath: '/v2/agents/{agent_id}',
  },
  {
    clientCallName: 'client.agents.list',
    fullyQualifiedName: 'agents.list',
    httpMethod: 'get',
    httpPath: '/v2/agents',
  },
  {
    clientCallName: 'client.agents.delete',
    fullyQualifiedName: 'agents.delete',
    httpMethod: 'delete',
    httpPath: '/v2/agents/{agent_id}',
  },
  {
    clientCallName: 'client.agents.get',
    fullyQualifiedName: 'agents.get',
    httpMethod: 'get',
    httpPath: '/v2/agents/{agent_id}',
  },
  {
    clientCallName: 'client.agents.templates.list',
    fullyQualifiedName: 'agents.templates.list',
    httpMethod: 'get',
    httpPath: '/v2/agents/templates',
  },
  {
    clientCallName: 'client.agents.templates.get',
    fullyQualifiedName: 'agents.templates.get',
    httpMethod: 'get',
    httpPath: '/v2/agents/templates/{template_name}',
  },
  {
    clientCallName: 'client.agents.runs.create',
    fullyQualifiedName: 'agents.runs.create',
    httpMethod: 'post',
    httpPath: '/v2/agents/{agent_id}/runs',
  },
  {
    clientCallName: 'client.agents.runs.list',
    fullyQualifiedName: 'agents.runs.list',
    httpMethod: 'get',
    httpPath: '/v2/agents/{agent_id}/runs',
  },
  {
    clientCallName: 'client.agents.runs.get',
    fullyQualifiedName: 'agents.runs.get',
    httpMethod: 'get',
    httpPath: '/v2/agents/{agent_id}/runs/{run_id}',
  },
  {
    clientCallName: 'client.agents.runs.result',
    fullyQualifiedName: 'agents.runs.result',
    httpMethod: 'get',
    httpPath: '/v2/agents/{agent_id}/runs/{run_id}/result',
  },
  {
    clientCallName: 'client.agents.runs.streamEvents',
    fullyQualifiedName: 'agents.runs.streamEvents',
    httpMethod: 'get',
    httpPath: '/v2/agents/{agent_id}/runs/{run_id}/events',
  },
  {
    clientCallName: 'client.crawl.list',
    fullyQualifiedName: 'crawl.list',
    httpMethod: 'get',
    httpPath: '/v2/crawl',
  },
  {
    clientCallName: 'client.crawl.run',
    fullyQualifiedName: 'crawl.run',
    httpMethod: 'post',
    httpPath: '/v2/crawl',
  },
  {
    clientCallName: 'client.crawl.status',
    fullyQualifiedName: 'crawl.status',
    httpMethod: 'get',
    httpPath: '/v2/crawl/{id}',
  },
  {
    clientCallName: 'client.crawl.terminate',
    fullyQualifiedName: 'crawl.terminate',
    httpMethod: 'delete',
    httpPath: '/v2/crawl/{id}',
  },
  {
    clientCallName: 'client.tasks.list',
    fullyQualifiedName: 'tasks.list',
    httpMethod: 'get',
    httpPath: '/v2/tasks',
  },
  {
    clientCallName: 'client.tasks.get',
    fullyQualifiedName: 'tasks.get',
    httpMethod: 'get',
    httpPath: '/v2/tasks/{task_id}',
  },
  {
    clientCallName: 'client.tasks.results',
    fullyQualifiedName: 'tasks.results',
    httpMethod: 'get',
    httpPath: '/v2/tasks/{task_id}/results',
  },
  {
    clientCallName: 'client.batches.list',
    fullyQualifiedName: 'batches.list',
    httpMethod: 'get',
    httpPath: '/v2/batches',
  },
  {
    clientCallName: 'client.batches.get',
    fullyQualifiedName: 'batches.get',
    httpMethod: 'get',
    httpPath: '/v2/batches/{batch_id}',
  },
  {
    clientCallName: 'client.batches.progress',
    fullyQualifiedName: 'batches.progress',
    httpMethod: 'get',
    httpPath: '/v2/batches/{batch_id}/progress',
  },
  {
    clientCallName: 'client.domainKnowledge.getDriver',
    fullyQualifiedName: 'domainKnowledge.getDriver',
    httpMethod: 'get',
    httpPath: '/v2/domain-knowledge/driver',
  },
  {
    clientCallName: 'client.media.run',
    fullyQualifiedName: 'media.run',
    httpMethod: 'post',
    httpPath: '/v2/media',
  },
  {
    clientCallName: 'client.media.runAsync',
    fullyQualifiedName: 'media.runAsync',
    httpMethod: 'post',
    httpPath: '/v2/media/async',
  },
  {
    clientCallName: 'client.serp.run',
    fullyQualifiedName: 'serp.run',
    httpMethod: 'post',
    httpPath: '/v2/serp',
  },
  {
    clientCallName: 'client.serp.runAsync',
    fullyQualifiedName: 'serp.runAsync',
    httpMethod: 'post',
    httpPath: '/v2/serp/async',
  },
  {
    clientCallName: 'client.serp.runBatch',
    fullyQualifiedName: 'serp.runBatch',
    httpMethod: 'post',
    httpPath: '/v2/serp/batch',
  },
  {
    clientCallName: 'client.fastSerp.run',
    fullyQualifiedName: 'fastSerp.run',
    httpMethod: 'post',
    httpPath: '/v2/fast-serp',
  },
  {
    clientCallName: 'client.jobs.create',
    fullyQualifiedName: 'jobs.create',
    httpMethod: 'post',
    httpPath: '/v2/jobs',
  },
  {
    clientCallName: 'client.jobs.update',
    fullyQualifiedName: 'jobs.update',
    httpMethod: 'patch',
    httpPath: '/v2/jobs/{job_id}',
  },
  {
    clientCallName: 'client.jobs.list',
    fullyQualifiedName: 'jobs.list',
    httpMethod: 'get',
    httpPath: '/v2/jobs',
  },
  {
    clientCallName: 'client.jobs.delete',
    fullyQualifiedName: 'jobs.delete',
    httpMethod: 'delete',
    httpPath: '/v2/jobs/{job_id}',
  },
  {
    clientCallName: 'client.jobs.get',
    fullyQualifiedName: 'jobs.get',
    httpMethod: 'get',
    httpPath: '/v2/jobs/{job_id}',
  },
  {
    clientCallName: 'client.jobs.runs.create',
    fullyQualifiedName: 'jobs.runs.create',
    httpMethod: 'post',
    httpPath: '/v2/jobs/{job_id}/runs',
  },
  {
    clientCallName: 'client.jobs.runs.list',
    fullyQualifiedName: 'jobs.runs.list',
    httpMethod: 'get',
    httpPath: '/v2/jobs/{job_id}/runs',
  },
  {
    clientCallName: 'client.jobs.runs.cancel',
    fullyQualifiedName: 'jobs.runs.cancel',
    httpMethod: 'post',
    httpPath: '/v2/jobs/runs/{run_id}/cancel',
  },
  {
    clientCallName: 'client.jobs.runs.get',
    fullyQualifiedName: 'jobs.runs.get',
    httpMethod: 'get',
    httpPath: '/v2/jobs/runs/{run_id}',
  },
  {
    clientCallName: 'client.jobs.runs.artifacts.list',
    fullyQualifiedName: 'jobs.runs.artifacts.list',
    httpMethod: 'get',
    httpPath: '/v2/jobs/runs/{run_id}/artifacts',
  },
  {
    clientCallName: 'client.jobs.runs.artifacts.downloadURL',
    fullyQualifiedName: 'jobs.runs.artifacts.downloadURL',
    httpMethod: 'get',
    httpPath: '/v2/jobs/runs/{run_id}/artifacts/{artifact_id}/download-url',
  },
  {
    clientCallName: 'client.jobs.runs.artifacts.get',
    fullyQualifiedName: 'jobs.runs.artifacts.get',
    httpMethod: 'get',
    httpPath: '/v2/jobs/runs/{run_id}/artifacts/{artifact_id}',
  },
  {
    clientCallName: 'client.jobs.runs.artifacts.preview',
    fullyQualifiedName: 'jobs.runs.artifacts.preview',
    httpMethod: 'get',
    httpPath: '/v2/jobs/runs/{run_id}/artifacts/{artifact_id}/preview',
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
