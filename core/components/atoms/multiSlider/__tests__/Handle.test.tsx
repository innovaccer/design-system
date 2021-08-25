import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Handle from '../Handle';

const min = 0;
const max = 100;
const stepSize = 5;
const label = 'MultiSlider';
const FunctionValue = jest.fn();

describe('renders handle inside multislider component', () => {
  it('renders handle children', () => {
    const { getByTestId } = render(
      <Handle
        value={4}
        label={label}
        max={max}
        min={min}
        stepSize={stepSize}
        tickSize={stepSize}
        tickSizeRatio={stepSize}
      />
    );
    expect(getByTestId('DesignSystem-MultiSlider-Handle')).toBeInTheDocument();
  });

  it('calls mouseOver, mouseLeave, keyUp, keyDown', () => {
    const { getByTestId } = render(
      <Handle
        onRelease={FunctionValue}
        value={4}
        label={label}
        max={max}
        min={min}
        stepSize={stepSize}
        tickSize={stepSize}
        tickSizeRatio={stepSize}
      />
    );
    const elem = getByTestId('DesignSystem-MultiSlider-Handle');
    fireEvent.mouseOver(elem);
    fireEvent.mouseLeave(elem);
    expect(elem).not.toHaveClass('d-none');
    fireEvent.keyUp(elem, { keyCode: 37 });
    fireEvent.keyDown(elem, { keyCode: 37 });
    fireEvent.keyDown(elem, { keyCode: 39 });
    expect(FunctionValue).toBeCalled();
  });

  it('calls mouseDown, mouseMove and mouseDown events', () => {
    const { getByTestId } = render(
      <Handle
        onRelease={FunctionValue}
        value={4}
        label={label}
        max={max}
        min={min}
        stepSize={stepSize}
        tickSize={stepSize}
        tickSizeRatio={stepSize}
        disabled={false}
      />
    );
    const elem = getByTestId('DesignSystem-MultiSlider-Handle');
    fireEvent.mouseDown(elem);
    expect(elem).toHaveClass('Slider-handle--active');
    fireEvent.mouseMove(elem);
    fireEvent.mouseUp(elem);
    expect(FunctionValue).toBeCalled();
  });
});
