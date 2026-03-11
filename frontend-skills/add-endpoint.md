---
name: add-endpoint
description: Add a server-side endpoint to this DataShop module. Use when adding an API route, backend handler, or data endpoint. Covers all three server patterns: Express Router (CRUD & BFF), Gateway translator, and HTTP Proxy Middleware.
---

Add a server-side endpoint to this DataShop module. First determine the right pattern, then implement it end-to-end including MSW mock and UI API function.

## Choosing the pattern

| Use case | Pattern |
|----------|---------|
| Standard CRUD, custom request logic, BFF aggregation | **Express Router** (route → controller → factory) |
| Simple proxy passthrough or response reshaping | **Gateway** (translator only, no controller/factory) |
| File upload/download, binary streams | **HTTP Proxy Middleware** |

---

## Pattern 1: Express Router (CRUD & BFF)

**Factory** (`server/factory/<sub-app>/<resource>.js`, e.g. `server/factory/admin/items.js`) — pure data access via `datastore.service(serviceName)`:
```javascript
const myFactory = (datastore, serviceName) => {
  const api = datastore.service(serviceName);
  const getItems = ({ token, query }) => api.get('/items', { token, query });
  const createItem = ({ token, body }) => api.post('/items', { token, body });
  return { getItems, createItem };
};
module.exports = myFactory;
```

**Controller** (`server/controllers/<sub-app>/<resource>.js`, e.g. `server/controllers/admin/items.js`) — extract req fields, call factory, send response:
```javascript
module.exports = (Module, app, datastore, serviceName) => {
  const factory = require('../../factory').<myFactory>(datastore, serviceName);
  const getItems = (req, res) => {
    factory.getItems({ token: req.token, query: req.query })
      .then((data) => res.json(data))
      .catch((err) => res.status(400).send({ msg: err }));
  };
  return { getItems };
};
```

**BFF controller** — compose multiple factories with `Promise.all` (parallel) or chained `.then` (sequential):
```javascript
Promise.all([factoryA.getData({ token }), factoryB.getData({ token })])
  .then(([a, b]) => res.json({ a, b }))
  .catch((err) => res.status(400).send({ msg: err }));
```

**Route** (`server/routes/<sub-app>/<resource>.js`, e.g. `server/routes/admin/items.js`):
```javascript
const express = require('express');
const moduleName = require('../../../datashop.json').name;
module.exports = function (Module, app, pages, auth, datastore, serviceName) {
  const controllers = require('../../controllers/admin/<resource>')(Module, app, datastore, serviceName);
  const router = express.Router();
  router.get('/', controllers.getItems);
  router.post('/', controllers.createItem);
  app.use(`/api/${Module.config.gatewayPrefix}/${moduleName}/<resource>`, router);
};
```

Register the factory in `server/factory/index.js`.

---

## Pattern 2: Gateway

Add a translator to `server/gateways/index.js` — no controller or factory needed:
```javascript
Module.addTranslator(service, [
  {
    method: 'GET',
    pattern: ['/my-endpoint'],
    translate: (data) => ({ id: data.id, name: data.full_name })
  }
]);
```

---

## Pattern 3: HTTP Proxy Middleware

```javascript
const { createProxyMiddleware } = require('http-proxy-middleware');
const svc = (services || Module.services || []).find((s) => s.serviceName === serviceName);
const target = svc && svc.basepath;
const proxy = createProxyMiddleware({ target, changeOrigin: true, ws: false });

// MSW fallback: http-proxy-middleware bypasses MSW
const isMockTarget = !target || target.includes('mock-');
if (!isMockTarget) {
  router.post('/upload', proxy);
} else {
  router.post('/upload', controllers.uploadFile);
}
```

---

## Always add

1. **MSW handler** in `mocks/handlers.js` for the new endpoint.
2. **API function** in the sub-app API module (`ui/api/admin.ts` for admin endpoints, `ui/api/docs.ts` for docs endpoints, or `ui/api/index.ts` for shared endpoints) — typed with the response interface.
3. **TypeScript type** in `ui/types.ts` if the response shape is new.
