---
name: write-tests
description: Write unit tests for this DataShop module. Use when adding tests for components or pages, checking test coverage, or fixing failing tests. Tests use Vitest + React Testing Library + jsdom scoped to ui/ only.
---

Write unit tests for this DataShop module using Vitest + React Testing Library.

## Setup
- Test files go in `ui/__tests__/` mirroring the source structure:
  - `ui/__tests__/components/MyComponent.test.tsx`
  - `ui/__tests__/pages/MyPage.test.tsx`
- Global setup in `ui/__tests__/setup.ts` already provides: jest-dom matchers, Canvas API mock, `datashop` global, and mocks for DatashopProvider services (auth, AlertService, store). Do not duplicate these.

## Commands
```sh
npm test               # single run
npm run test:watch     # watch mode
npm run test:coverage  # with coverage
```

## Patterns

### Simple component
```tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MyComponent from '../../components/MyComponent';

describe('MyComponent', () => {
  it('renders content', () => {
    render(<MyComponent title="Hello" />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

### Component with router (useNavigate, useLocation, etc.)
```tsx
import { MemoryRouter } from 'react-router-dom';
import MyPage from '../../pages/MyPage';

function renderWithRouter(initialPath = '/') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <MyPage />
    </MemoryRouter>,
  );
}
```

### Error boundary
```tsx
import { vi } from 'vitest';

it('shows error UI when child throws', () => {
  vi.spyOn(console, 'error').mockImplementation(() => {});
  render(<ErrorBoundary><ThrowingChild /></ErrorBoundary>);
  expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  vi.restoreAllMocks();
});
```

### Async data fetching
```tsx
import { waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import * as api from '../../api';

it('renders data after fetch', async () => {
  vi.spyOn(api, 'getMyData').mockResolvedValue({ title: 'Test Title' });
  render(<MyPage />);
  await waitFor(() => expect(screen.getByText('Test Title')).toBeInTheDocument());
});

it('shows error on fetch failure', async () => {
  vi.spyOn(api, 'getMyData').mockRejectedValue(new Error('Network error'));
  render(<MyPage />);
  await waitFor(() => expect(screen.getByText('Network error')).toBeInTheDocument());
});
```

### Component using useAuth()
```tsx
import { render, screen } from '@testing-library/react';
import { DatashopProvider } from '../../providers';
import MyPage from '../../pages/MyPage';

it('renders user-specific content', () => {
  // The test setup already mocks datashop.app.module() with auth, AlertService, and store.
  // Wrap in DatashopProvider so useAuth()/useAlertService() resolve.
  render(
    <DatashopProvider>
      <MemoryRouter>
        <MyPage />
      </MemoryRouter>
    </DatashopProvider>,
  );
  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
});
```

## Rules
- Query by visible text, role, or label — not CSS class or test ID.
- Use `screen` queries, not destructured `render()` returns.
- One behavior per `it()` block.
- Wrap router-dependent components in `<MemoryRouter>`.
- Mock API calls with `vi.spyOn` — never make real HTTP calls in tests.
- Restore mocks after each test with `vi.restoreAllMocks()`.
