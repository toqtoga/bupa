# Bupa app

* Initialised with `npm create vite@latest bupa -- --template react-ts`
* Libraries used: `react-query`, `vitest`

How to run
* `npm install`
* `npm run dev`

To run tests
* `npm run test`
  * Running all except for `*spec.ts`
* `npm run test:browser`
  * Running all `*spec.tsx`

Tests contain:
* Testing the hook
* Testing the parsing function used by the hook select function
* Testing the resultant components (screenshot tests)
* Testing interactivity from the main component (`OwnerAndBooks`)