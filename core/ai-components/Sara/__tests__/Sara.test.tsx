import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Sara } from '../index';

describe('Sara Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<Sara />);
    const saraElement = getByTestId('DesignSystem-AI-Sara');
    expect(saraElement).toBeInTheDocument();
  });

  it('calls onClick prop when Sara is clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<Sara onClick={handleClick} />);
    const saraElement = getByTestId('DesignSystem-AI-Sara');
    fireEvent.click(saraElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies `data-test` attribute properly', () => {
    const testDataValue = 'sara-component';
    const { getByTestId } = render(<Sara data-test={testDataValue} />);
    const saraElement = getByTestId('sara-component');
    expect(saraElement.getAttribute('data-test')).toBe(testDataValue);
  });

  it('applies custom className', () => {
    const customClass = 'custom-sara-class';
    const { getByTestId } = render(<Sara className={customClass} state="resting" />);
    const saraElement = getByTestId('DesignSystem-AI-Sara');
    expect(saraElement).toHaveClass(customClass);
  });
});
