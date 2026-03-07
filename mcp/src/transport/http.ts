import express from 'express';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { createServer } from '../server.js';

interface SessionEntry {
  transport: StreamableHTTPServerTransport;
  lastActivity: number;
}

const SESSION_TTL_MS = 30 * 60 * 1000;

export async function startHttp(port: number, manifestPath?: string): Promise<void> {
  const app = express();
  app.use(express.json());

  const sessions = new Map<string, SessionEntry>();
  const transportToSession = new WeakMap<StreamableHTTPServerTransport, string>();

  setInterval(() => {
    const now = Date.now();
    for (const [id, entry] of sessions) {
      if (now - entry.lastActivity > SESSION_TTL_MS) {
        entry.transport.close?.();
        sessions.delete(id);
      }
    }
  }, 5 * 60 * 1000);

  function touchSession(sessionId: string) {
    const entry = sessions.get(sessionId);
    if (entry) entry.lastActivity = Date.now();
  }

  app.post('/mcp', async (req, res) => {
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

  app.get('/mcp', async (req, res) => {
    const sessionId = req.headers['mcp-session-id'] as string | undefined;
    if (!sessionId || !sessions.has(sessionId)) {
      res.status(400).json({ error: 'Missing or invalid session. Send an initialize request first via POST /mcp.' });
      return;
    }
    touchSession(sessionId);
    const { transport } = sessions.get(sessionId)!;
    await transport.handleRequest(req, res);
  });

  app.delete('/mcp', async (req, res) => {
    const sessionId = req.headers['mcp-session-id'] as string | undefined;
    if (!sessionId || !sessions.has(sessionId)) {
      res.status(400).json({ error: 'Invalid session.' });
      return;
    }
    const { transport } = sessions.get(sessionId)!;
    await transport.handleRequest(req, res);
  });

  app.get('/health', (_req, res) => {
    res.json({
      status: 'ok',
      server: 'Masala Design System MCP',
      tools: [
        'ds_list_tokens', 'ds_get_token', 'ds_search_tokens',
        'ds_list_components', 'ds_get_component', 'ds_search_components',
        'ds_search_examples', 'ds_get_example',
        'ds_list_patterns', 'ds_get_pattern',
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

  app.listen(port, () => {
    console.log(`Masala Design System MCP server running at http://localhost:${port}/mcp`);
    console.log(`Health check: http://localhost:${port}/health`);
  });
}
