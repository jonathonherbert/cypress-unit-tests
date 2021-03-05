# cypress-unit-tests

Testing Cypress's ability to run unit tests. Useful when we'd like to have access to a real DOM (and devtools) when testing.

## Install

`yarn`

## Run tests

`yarn test` for an interactive test runner. Some tests will fail by design, to prove that assertions are working correctly.

`yarn test-ci` to run headlessly for CI.

## Todo

- ✅ Unit tests running in a real DOM
- ✅ Can examine in devtools
- ✅ Extend assertions lib (chai-as-promised) 
- ⏳ Typescript
