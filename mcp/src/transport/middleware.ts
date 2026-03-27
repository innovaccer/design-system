import { Router } from 'express';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { createServer } from '../server.js';

interface SessionEntry {
  transport: StreamableHTTPServerTransport;
  lastActivity: number;
}

export interface McpMiddlewareOptions {
  /** Path to the generated manifests directory. Defaults to bundled generated/ folder. */
  manifestPath?: string;
  /** Session TTL in milliseconds. Defaults to 30 minutes. */
  sessionTtlMs?: number;
}

/**
 * Returns an Express Router that handles MCP over Streamable HTTP.
 *
 * Usage:
 *   import express from 'express';
 *   import { createMcpMiddleware } from '@innovaccer/mds-mcp';
 *
 *   const app = express();
 *   app.use(express.json());
 *   app.use('/mcp', createMcpMiddleware());
 *   app.listen(3100);
 *
 * Routes mounted on the returned router:
 *   POST   /   – initialize or continue a session
 *   GET    /   – SSE stream for an active session
 *   DELETE /   – close a session
 *   GET    /health – liveness check
 */
export function createMcpMiddleware(options: McpMiddlewareOptions = {}): Router {
  const { manifestPath, sessionTtlMs = 30 * 60 * 1000 } = options;

  const sessions = new Map<string, SessionEntry>();
  const transportToSession = new WeakMap<StreamableHTTPServerTransport, string>();

  const cleanup = setInterval(() => {
    const now = Date.now();
    for (const [id, entry] of sessions) {
      if (now - entry.lastActivity > sessionTtlMs) {
        entry.transport.close?.();
        sessions.delete(id);
      }
    }
  }, 5 * 60 * 1000);

  // Allow Node.js to exit even if the interval is still active.
  if (cleanup.unref) cleanup.unref();

  function touchSession(sessionId: string) {
    const entry = sessions.get(sessionId);
    if (entry) entry.lastActivity = Date.now();
  }

  const router = Router();

  router.post('/', async (req, res) => {
    const sessionId = req.headers['mcp-session-id'] as string | undefined;

    if (sessionId && sessions.has(sessionId)) {
      touchSession(sessionId);
      const { transport } = sessions.get(sessionId)!;
      await transport.handleRequest(req, res, req.body);
      return;
    }

    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: () => crypto.randomUUID(),
      onsessioninitialized: (id: string) => {
        sessions.set(id, { transport, lastActivity: Date.now() });
        transportToSession.set(transport, id);
      },
    });

    transport.onclose = () => {
      const id = transportToSession.get(transport);
      if (id) sessions.delete(id);
    };

    const server = createServer(manifestPath);
    await server.connect(transport);
    await transport.handleRequest(req, res, req.body);
  });

  router.get('/', async (req, res) => {
    const sessionId = req.headers['mcp-session-id'] as string | undefined;
    if (!sessionId || !sessions.has(sessionId)) {
      res.status(400).json({ error: 'Missing or invalid session. Send an initialize request first via POST.' });
      return;
    }
    touchSession(sessionId);
    const { transport } = sessions.get(sessionId)!;
    await transport.handleRequest(req, res);
  });

  router.delete('/', async (req, res) => {
    const sessionId = req.headers['mcp-session-id'] as string | undefined;
    if (!sessionId || !sessions.has(sessionId)) {
      res.status(400).json({ error: 'Invalid session.' });
      return;
    }
    const { transport } = sessions.get(sessionId)!;
    await transport.handleRequest(req, res);
  });

  router.get('/health', (_req, res) => {
    res.json({
      status: 'ok',
      server: 'Masala Design System MCP',
      tools: [
        'ds_list_tokens', 'ds_get_token', 'ds_search_tokens',
        'ds_list_components', 'ds_get_component', 'ds_search_components',
        'ds_search_examples', 'ds_get_example',
        'ds_list_patterns', 'ds_get_pattern',
        'ds_search_helpers',
        'ds_validate_code',
        'ds_get_usage', 'ds_search_usage',
      ],
      resources: [
        'design-system://tokens',
        'design-system://variables',
        'design-system://helpers',
        'design-system://conventions',
        'design-system://exports',
        'design-system://types',
      ],
    });
  });

  return router;
}
