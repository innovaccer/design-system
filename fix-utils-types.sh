#!/bin/bash

# Fix syntax issues in @remix-run/router utils.d.ts file
if [ -f node_modules/@remix-run/router/dist/utils.d.ts ]; then
  sed -i '' 's/type _PathParam<Path extends string> = .*/type _PathParam<Path extends string> = string;/g' node_modules/@remix-run/router/dist/utils.d.ts
  sed -i '' 's/export type PathParam<Path extends string> = .*/export type PathParam<Path extends string> = string;/g' node_modules/@remix-run/router/dist/utils.d.ts
fi

# Fix syntax issues in @remix-run/router utils.d.ts file within react-router
if [ -f node_modules/react-router/node_modules/@remix-run/router/dist/utils.d.ts ]; then
  sed -i '' 's/type _PathParam<Path extends string> = .*/type _PathParam<Path extends string> = string;/g' node_modules/react-router/node_modules/@remix-run/router/dist/utils.d.ts
  sed -i '' 's/export type PathParam<Path extends string> = .*/export type PathParam<Path extends string> = string;/g' node_modules/react-router/node_modules/@remix-run/router/dist/utils.d.ts
fi

# Fix syntax issues in @remix-run/router router.d.ts file
if [ -f node_modules/@remix-run/router/dist/router.d.ts ]; then
  sed -i '' 's/get basename(): RouterInit\["basename"\];/basename: RouterInit["basename"];/g' node_modules/@remix-run/router/dist/router.d.ts
  sed -i '' 's/get future(): FutureConfig;/future: FutureConfig;/g' node_modules/@remix-run/router/dist/router.d.ts
  sed -i '' 's/get state(): RouterState;/state: RouterState;/g' node_modules/@remix-run/router/dist/router.d.ts
  sed -i '' 's/get routes(): AgnosticDataRouteObject\[\];/routes: AgnosticDataRouteObject[];/g' node_modules/@remix-run/router/dist/router.d.ts
  sed -i '' 's/get window(): RouterInit\["window"\];/window: RouterInit["window"];/g' node_modules/@remix-run/router/dist/router.d.ts
fi