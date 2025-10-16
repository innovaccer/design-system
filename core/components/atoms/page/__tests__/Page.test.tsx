import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Page } from '../';

describe('Page component', () => {
  it('renders children correctly when provided', () => {
    const testContent = 'Test Page Content';
    render(
      <Page>
        <div>{testContent}</div>
      </Page>
    );

    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('renders without children', () => {
    render(<Page />);

    const pageElement = screen.getByTestId('DesignSystem-Page');
    expect(pageElement).toBeInTheDocument();
    expect(pageElement).toBeEmptyDOMElement();
  });

  it('applies data-test attribute with children', () => {
    render(
      <Page>
        <div>Test Content</div>
      </Page>
    );

    expect(screen.getByTestId('DesignSystem-Page')).toBeInTheDocument();
  });

  it('applies data-test attribute without children', () => {
    render(<Page />);

    expect(screen.getByTestId('DesignSystem-Page')).toBeInTheDocument();
  });

  it('has correct CSS class with children', () => {
    render(
      <Page>
        <div>Content</div>
      </Page>
    );

    expect(screen.getByTestId('DesignSystem-Page')).toHaveClass('Page');
  });

  it('has correct CSS class without children', () => {
    render(<Page />);

    expect(screen.getByTestId('DesignSystem-Page')).toHaveClass('Page');
  });

  it('applies custom className', () => {
    const customClass = 'custom-page-class';
    render(<Page className={customClass} />);

    expect(screen.getByTestId('DesignSystem-Page')).toHaveClass('Page', customClass);
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Page ref={ref} />);

    expect(ref.current).toBe(screen.getByTestId('DesignSystem-Page'));
  });

  it('passes through other props', () => {
    const testId = 'custom-test-id';
    render(<Page aria-label="Test Page" id={testId} />);

    const pageElement = screen.getByTestId('DesignSystem-Page');
    expect(pageElement).toHaveAttribute('aria-label', 'Test Page');
    expect(pageElement).toHaveAttribute('id', testId);
  });
});
