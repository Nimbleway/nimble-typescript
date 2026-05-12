import { GenericContainer, type StartedTestContainer } from 'testcontainers';
import http from 'node:http';

const PRISM_PORT = process.env.PRISM_PORT || '4010';
const MOCK_SERVER_IMAGE = process.env.MOCK_SERVER_IMAGE || 'ghcr.io/nimbleway/sdk-mock-server:latest';

function checkPrism(port: string): Promise<boolean> {
  return new Promise((resolve) => {
    const req = http.get(`http://127.0.0.1:${port}/`, (res) => {
      res.resume();
      resolve(true);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(1000, () => {
      req.destroy();
      resolve(false);
    });
    req.end();
  });
}

let container: StartedTestContainer | null = null;

export async function setup() {
  const alreadyRunning = await checkPrism(PRISM_PORT);
  if (alreadyRunning) {
    console.log(`Prism mock server already running on port ${PRISM_PORT} (external)`);
    return;
  }

  console.log(`Starting mock server from ${MOCK_SERVER_IMAGE}...`);
  container = await new GenericContainer(MOCK_SERVER_IMAGE).withExposedPorts(4010).start();

  const mappedPort = container.getMappedPort(4010).toString();
  process.env.PRISM_PORT = mappedPort;
  console.log(`Mock server ready on port ${mappedPort}`);
}

export async function teardown() {
  if (container) {
    await container.stop();
    console.log('Mock server stopped.');
  }
}
