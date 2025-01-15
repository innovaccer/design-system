#!/bin/bash

# Function to safely use sed with a temporary file
safe_sed() {
  local file=$1
  local sed_script=$2
  local tmp_file=$(mktemp)
  sed "$sed_script" "$file" > "$tmp_file" && mv "$tmp_file" "$file"
}

# Debugging: List files in the directories
echo "Listing files in node_modules/@remix-run/router/dist/"
ls -l node_modules/@remix-run/router/dist/

echo "Listing files in node_modules/react-router/node_modules/@remix-run/router/dist/"
ls -l node_modules/react-router/node_modules/@remix-run/router/dist/

# Fix syntax issues in @remix-run/router utils.d.ts file
if [ -f node_modules/@remix-run/router/dist/utils.d.ts ]; then
  echo "Fixing node_modules/@remix-run/router/dist/utils.d.ts"
  safe_sed node_modules/@remix-run/router/dist/utils.d.ts 's/type _PathParam<Path extends string> = .*/type _PathParam<Path extends string> = string;/g'
  safe_sed node_modules/@remix-run/router/dist/utils.d.ts 's/export type PathParam<Path extends string> = .*/export type PathParam<Path extends string> = string;/g'
fi

# Fix syntax issues in @remix-run/router utils.d.ts file within react-router
if [ -f node_modules/react-router/node_modules/@remix-run/router/dist/utils.d.ts ]; then
  echo "Fixing node_modules/react-router/node_modules/@remix-run/router/dist/utils.d.ts"
  safe_sed node_modules/react-router/node_modules/@remix-run/router/dist/utils.d.ts 's/type _PathParam<Path extends string> = .*/type _PathParam<Path extends string> = string;/g'
  safe_sed node_modules/react-router/node_modules/@remix-run/router/dist/utils.d.ts 's/export type PathParam<Path extends string> = .*/export type PathParam<Path extends string> = string;/g'
fi

# Fix syntax issues in @remix-run/router router.d.ts file
if [ -f node_modules/@remix-run/router/dist/router.d.ts ]; then
  echo "Fixing node_modules/@remix-run/router/dist/router.d.ts"
  safe_sed node_modules/@remix-run/router/dist/router.d.ts 's/get basename(): RouterInit\["basename"\];/basename: RouterInit["basename"];/g'
  safe_sed node_modules/@remix-run/router/dist/router.d.ts 's/get future(): FutureConfig;/future: FutureConfig;/g'
  safe_sed node_modules/@remix-run/router/dist/router.d.ts 's/get state(): RouterState;/state: RouterState;/g'
  safe_sed node_modules/@remix-run/router/dist/router.d.ts 's/get routes(): AgnosticDataRouteObject\[\];/routes: AgnosticDataRouteObject[];/g'
  safe_sed node_modules/@remix-run/router/dist/router.d.ts 's/get window(): RouterInit\["window"\];/window: RouterInit["window"];/g'
fi