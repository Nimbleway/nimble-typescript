# OpenAPI generator candidate

This directory is a reviewable generator output, not the published SDK. It does
not change the root package exports or version.

- Platform source commit: `61ad0c8b85a98b48d73a0370d022dd26a14831f5`
- SDK input: `candidate/contract/openapi.yaml`
- SDK input SHA-256: `283b1079b67453be6e8f06ccd3bf9955fedd553a9ab881e3f1f3904467d87cca`
- Generator: `@hey-api/openapi-ts@0.99.0`
- Selected operations: 59

The input is a frozen copy of Platform's proposed `sdk/openapi.yaml` in
Nimbleway/platform#3592. Its names and operation selection remain under review.
`openapi-ts.config.ts` maps all 59 selected operation IDs to resource methods.
CI regenerates the source, compares it with this directory, compiles the
candidate and its examples, then checks the packed package. Publishing requires
a separate package compatibility review.

## TypeScript customer migration preview

The current Stainless SDK accepts an API key in the constructor and returns
the response body directly:

```ts
import Nimble from '@nimble-way/nimble-js';

const client = new Nimble({ apiKey: 'your-api-key' });
const page = await client.tasks.list({ limit: 1 });
const task = await client.tasks.get('task-id');
const extraction = await client.extract.run({ url: 'https://example.com' });
```

The generated candidate keeps the resource-style calls, but client setup,
path parameters, request bodies, and return values differ:

```ts
import { createClient, Nimble } from '@nimble-way/nimble-js-candidate';

const client = new Nimble({
  client: createClient({
    baseUrl: 'https://sdk.nimbleway.com',
    auth: 'your-api-key',
  }),
});

const page = await client.tasks.list({ limit: 1 });
const task = await client.tasks.get({ task_id: 'task-id' });
const extraction = await client.extract.run({
  extractPayload: { url: 'https://example.com' },
});

const tasks = page.data?.data;
const taskBody = task.data;
const extractionBody = extraction.data;
```

The generated calls return a result containing `data`, `error`, and `response`.
The client factory accepts an injected `fetch` implementation, so E2E tests can
observe the SDK's actual transport. The candidate remains private and has no
approved package version. This preview does not establish parity for retries,
timeouts, pagination, errors, or the other public operations.
