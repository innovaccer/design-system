#!/usr/bin/env node

import { startStdio } from './transport/stdio.js';
import { startHttp } from './transport/http.js';

function parseArgs(argv: string[]): {
  http: boolean;
  port: number;
  manifestPath?: string;
} {
  const args = argv.slice(2);
  let http = false;
  let port = 3100;
  let manifestPath: string | undefined;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--http') {
      http = true;
    } else if (args[i] === '--port' && args[i + 1]) {
      port = parseInt(args[i + 1], 10);
      i++;
    } else if (args[i] === '--manifest-path' && args[i + 1]) {
      manifestPath = args[i + 1];
      i++;
    }
  }

  if (process.env.MCP_TRANSPORT === 'http') {
    http = true;
  }
  if (process.env.MCP_PORT) {
    port = parseInt(process.env.MCP_PORT, 10);
  }
  if (process.env.MCP_MANIFEST_PATH) {
    manifestPath = process.env.MCP_MANIFEST_PATH;
  }

  return { http, port, manifestPath };
}

async function main() {
  const { http, port, manifestPath } = parseArgs(process.argv);

  if (http) {
    await startHttp(port, manifestPath);
  } else {
    await startStdio(manifestPath);
  }
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
