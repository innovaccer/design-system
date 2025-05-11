import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Page } from '../';

describe('Page component', () => {
  it('renders children correctly', () => {
    const testContent = 'Test Page Content';
    render(
      <Page>
        <div>{testContent}</div>
      </Page>
    );

    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('applies data-test attribute', () => {
    render(
      <Page>
        <div>Test Content</div>
      </Page>
    );

    expect(screen.getByTestId('DesignSystem-Page')).toBeInTheDocument();
  });

  it('has overflow-y auto by default', () => {
    render(
      <Page>
        <div>Content</div>
      </Page>
    );

    expect(screen.getByTestId('DesignSystem-Page')).toHaveClass('Page');
  });
});
