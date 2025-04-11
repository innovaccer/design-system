import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import AIButton, { AIButtonProps } from '../index';

describe('AI Button Component', () => {
  const mockOnClick = jest.fn();

  const defaultProps: AIButtonProps = {
    onClick: mockOnClick,
  };

  it('renders with default props', () => {
    const { getByTestId } = render(<AIButton {...defaultProps}>'Click me!'</AIButton>);
    const button = getByTestId('DesignSystem-AI-Button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('data-test', 'DesignSystem-AI-Button');
  });

  it('renders a custom className', () => {
    const customClassName = 'my-custom-class';
    const { getByTestId } = render(
      <AIButton {...defaultProps} className={customClassName}>
        'Click me!'
      </AIButton>
    );
    const button = getByTestId('DesignSystem-AI-Button');
    expect(button).toHaveClass(customClassName);
  });

  it('is disabled when `disabled` prop is true', () => {
    const { getByTestId } = render(
      <AIButton {...defaultProps} disabled>
        'Click me!'
      </AIButton>
    );
    const button = getByTestId('DesignSystem-AI-Button');
    expect(button).toBeDisabled();
  });

  it('does not calls the onClick function when disabled', () => {
    const { getByTestId } = render(
      <AIButton {...defaultProps} disabled>
        'Click me!'
      </AIButton>
    );
    const button = getByTestId('DesignSystem-AI-Button');
    fireEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it('calls the onClick function when clicked', () => {
    const { getByTestId } = render(<AIButton {...defaultProps}>'Click me!'</AIButton>);
    const button = getByTestId('DesignSystem-AI-Button');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('renders the button with an icon', () => {
    const { getByTestId } = render(
      <AIButton {...defaultProps} appearance="primary">
        'Click me!'
      </AIButton>
    );
    const icon = getByTestId('DesignSystem-AI-Button-Icon');
    expect(icon).toBeInTheDocument();
  });

  it('renders button with children', () => {
    const customLabel = 'Test Button Label';
    const { getByTestId } = render(<AIButton>{customLabel}</AIButton>);
    const button = getByTestId('DesignSystem-AI-Button');
    expect(button).toHaveTextContent(customLabel);
  });

  it('renders with sparkle icon when withSparkle is true', () => {
    const { getByTestId } = render(
      <AIButton {...defaultProps} withSparkle>
        'Click me!'
      </AIButton>
    );
    const sparkleIcon = getByTestId('DesignSystem-AI-Button-Icon');
    expect(sparkleIcon).toBeInTheDocument();
  });

  it('renders without sparkle icon when withSparkle is false', () => {
    const { queryByTestId } = render(
      <AIButton {...defaultProps} withSparkle={false}>
        'Click me!'
      </AIButton>
    );
    const sparkleIcon = queryByTestId('DesignSystem-AI-Button-Icon');
    expect(sparkleIcon).not.toBeInTheDocument();
  });
});
