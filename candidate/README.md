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
CI regenerates the source, compares it with this directory, and compiles the
candidate. Publishing requires a separate package compatibility review.
