// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Nimbleway } from '../client';

export abstract class APIResource {
  protected _client: Nimbleway;

  constructor(client: Nimbleway) {
    this._client = client;
  }
}
