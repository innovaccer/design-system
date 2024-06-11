import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SaraSparkle } from '../index';

describe('SaraSparkle Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<SaraSparkle />);
    const saraElement = getByTestId('DesignSystem-AI-Sara-Sparkle');
    expect(saraElement).toBeInTheDocument();
  });

  it('calls onClick prop when SaraSparkle is clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<SaraSparkle onClick={handleClick} />);
    const saraElement = getByTestId('DesignSystem-AI-Sara-Sparkle');
    fireEvent.click(saraElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies `data-test` attribute properly', () => {
    const testDataValue = 'sara-component';
    const { getByTestId } = render(<SaraSparkle data-test={testDataValue} />);
    const saraElement = getByTestId('sara-component');
    expect(saraElement.getAttribute('data-test')).toBe(testDataValue);
  });

  it('applies custom className', () => {
    const customClass = 'custom-sara-class';
    const { getByTestId } = render(<SaraSparkle className={customClass} state="listening" />);
    const saraElement = getByTestId('DesignSystem-AI-Sara-Sparkle');
    expect(saraElement).toHaveClass(customClass);
  });
});
