import { describe, test, expect } from 'vitest';
import { createClient } from '../src/client.js';

const client = createClient();

const linkSchema = expect.objectContaining({
  url: expect.any(String),
});

const mapResponseSchema = {
  task_id: expect.any(String),
  success: expect.any(Boolean),
  links: expect.arrayContaining([linkSchema]),
};

describe('map', () => {
  test('map: required params only', async () => {
    const response = await client.map({ url: 'https://www.example.com' });

    expect(response).toMatchObject(mapResponseSchema);
    for (const link of response.links) {
      expect(link).toEqual(linkSchema);
    }
  });

  test('map: with optional params', async () => {
    const response = await client.map({
      url: 'https://www.example.com',
      country: 'US',
      locale: 'en-US',
    });

    expect(response).toMatchObject(mapResponseSchema);
    for (const link of response.links) {
      expect(link).toEqual(linkSchema);
    }
  });
});
