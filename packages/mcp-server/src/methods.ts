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
    clientCallName: 'client.agents.list',
    fullyQualifiedName: 'agents.list',
    httpMethod: 'get',
    httpPath: '/v1/agents',
  },
  {
    clientCallName: 'client.agents.get',
    fullyQualifiedName: 'agents.get',
    httpMethod: 'get',
    httpPath: '/v1/agents/{template_name}',
  },
  {
    clientCallName: 'client.agents.publish',
    fullyQualifiedName: 'agents.publish',
    httpMethod: 'post',
    httpPath: '/v1/agents/{agent_name}/publish',
  },
  {
    clientCallName: 'client.agents.run',
    fullyQualifiedName: 'agents.run',
    httpMethod: 'post',
    httpPath: '/v1/agents/run',
  },
  {
    clientCallName: 'client.agents.runAsync',
    fullyQualifiedName: 'agents.runAsync',
    httpMethod: 'post',
    httpPath: '/v1/agents/async',
  },
  {
    clientCallName: 'client.agents.runBatch',
    fullyQualifiedName: 'agents.runBatch',
    httpMethod: 'post',
    httpPath: '/v1/agents/batch',
  },
  {
    clientCallName: 'client.agents.generations.create',
    fullyQualifiedName: 'agents.generations.create',
    httpMethod: 'post',
    httpPath: '/v1/agents/generations',
  },
  {
    clientCallName: 'client.agents.generations.get',
    fullyQualifiedName: 'agents.generations.get',
    httpMethod: 'get',
    httpPath: '/v1/agents/generations/{generation_id}',
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
