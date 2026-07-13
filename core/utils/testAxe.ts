import { configureAxe } from 'jest-axe';

/**
 * Configured axe for isolated component tests:
 * - Disables the `region` rule (components render outside landmarks in RTL)
 * - Switches to real timers before running axe and restores fake timers after,
 *   preventing hangs under Jest's globally-mocked timer environment.
 */
const _axe = configureAxe({
  rules: {
    region: { enabled: false },
  },
});

export async function axe(container: Element | string): Promise<Awaited<ReturnType<typeof _axe>>> {
  jest.useRealTimers();
  try {
    return await _axe(container as Element);
  } finally {
    jest.useFakeTimers();
  }
}
