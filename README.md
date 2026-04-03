# Bupa app

Initialised with `npm create vite@latest bupa -- --template react-ts`

How to run
* `npm install`
* `npm run dev`

To run tests
* `npm run test`
  * Running all except for `*spec.ts`
* `npm run test:browser`
  * Running all `*spec.tsx`
* Note that both tests are automatically run as part of CI/CD using GHA

Tests contain:
* Testing the hook
* Testing the parsing function used by the hook select function
* Testing the resultant components (screenshot tests)
  * Viewable from `src/components/OwnerAndBooks/__screenshots__/` and `src/components/Bookshelf/__screenshots__/`
* Testing interactivity from the main component (`OwnerAndBooks`)

Assumptions/Notes:
* Using a proxy provided by the dev server to send requests to the API as we have CORS errors
* Toggling the fixture data and actual network data using `const MOCKED_DATA = false` in `useFetchBooks`