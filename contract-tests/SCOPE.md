# Contract Test Suite Scope

## What these tests verify

SDK-to-spec conformance: each public method in the `@nimble-way/nimble-js`
SDK maps to the correct API route, sends a spec-valid request, and can
deserialize the response without throwing.

The validation chain relies on **Prism** (started with `--errors`):

1. The SDK serializes the request. Prism validates it against the OpenAPI
   spec (422 on invalid body, 404 on wrong route).
2. Prism generates a mock response from the spec and validates it internally
   (500 on spec-violating response).
3. The SDK deserializes the response into a typed object. A deserialization
   failure throws.
4. Each test also asserts the HTTP method and path via a request-capture
   harness (catches route-mapping bugs).

If the `await` resolves and the route assertion passes, all links held.

A `prism-sentinel.test.ts` file verifies that Prism's `--errors` enforcement
is active. If those sentinel tests fail, nothing else in the suite can be
trusted.

## What these tests do NOT verify

- Field-level response values (Prism generates synthetic data; field values
  are meaningless)
- Negative paths (sending deliberately invalid input to test error handling)
- Spec correctness itself (that is validated upstream during spec authoring)
- Extra fields the SDK might send beyond what the spec documents (Prism is
  permissive on `additionalProperties: true`, which is the default for most
  schemas)

## Coverage guardrail

`coverage-guardrail.test.ts` introspects the SDK client at runtime and fails
if any public method or resource lacks a corresponding test. This ensures new
SDK methods cannot ship without a contract test.
