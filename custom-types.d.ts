// Override types for @remix-run/router
declare module '@remix-run/router' {
  export interface RouterInit {
    basename?: string;
    window?: Window;
  }

  export interface FutureConfig {
    _dummy?: any;
  }

  export interface RouterState {
    _dummy?: any;
  }

  export interface AgnosticDataRouteObject {
    _dummy?: any;
  }

  export interface Router {
    basename: RouterInit['basename'];
    future: FutureConfig;
    state: RouterState;
    routes: AgnosticDataRouteObject[];
    window: RouterInit['window'];
  }
}

// Override types for react-router's @remix-run/router
declare module 'react-router/node_modules/@remix-run/router' {
  export interface RouterInit {
    basename?: string;
    window?: Window;
  }

  export interface FutureConfig {
    _dummy?: any;
  }

  export interface RouterState {
    _dummy?: any;
  }

  export interface AgnosticDataRouteObject {
    _dummy?: any;
  }

  export interface Router {
    basename: RouterInit['basename'];
    future: FutureConfig;
    state: RouterState;
    routes: AgnosticDataRouteObject[];
    window: RouterInit['window'];
  }
}

// Override types for utils.d.ts
declare module '@remix-run/router/dist/utils' {
  type _PathParam<Path extends string> = string;
  export type PathParam = string;
}

declare module 'react-router/node_modules/@remix-run/router/dist/utils' {
  type _PathParam<Path extends string> = string;
  export type PathParam = string;
}
