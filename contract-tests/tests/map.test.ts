import { describe, test, expect } from 'vitest';
import { createClient } from '../src/client.js';

const client = createClient();

describe('map', () => {
  test('map: required params only', async () => {
    const response = await client.map({ url: 'https://www.example.com' });
    expect(response).toBeDefined();
  });

  test('map: with optional params', async () => {
    const response = await client.map({
      url: 'https://www.example.com',
      country: 'US',
      locale: 'en-US',
    });
    expect(response).toBeDefined();
  });
});
