import { createClient, Nimble } from '../index';

const client = new Nimble({
  client: createClient({
    baseUrl: 'https://sdk.nimbleway.com',
    auth: 'example-token',
  }),
});

export async function readTasksAndExtract(): Promise<void> {
  const page = await client.tasks.list({ limit: 1 });
  const task = page.data?.data[0];

  if (task) {
    const result = await client.tasks.get({ task_id: task.id });
    void result.data;
  }

  const extraction = await client.extract.run({
    extractPayload: { url: 'https://example.com' },
  });
  void extraction.data;
}
