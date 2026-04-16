import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { axe } from '@/utils/testAxe';
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

describe('Handle keyboard interactions (WAI-ARIA Slider)', () => {
  it('Home jumps to minimum value', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Handle
        onChange={onChange}
        value={50}
        label={label}
        max={max}
        min={min}
        stepSize={stepSize}
        tickSize={stepSize}
        tickSizeRatio={stepSize}
      />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');
    handle.focus();
    fireEvent.keyDown(handle, { keyCode: 36 });
    expect(onChange).toHaveBeenCalledWith(min);
  });

  it('End jumps to maximum value', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Handle
        onChange={onChange}
        value={50}
        label={label}
        max={max}
        min={min}
        stepSize={stepSize}
        tickSize={stepSize}
        tickSizeRatio={stepSize}
      />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');
    handle.focus();
    fireEvent.keyDown(handle, { keyCode: 35 });
    expect(onChange).toHaveBeenCalledWith(max);
  });

  it('Page Up increases by 10× step size', () => {
    const onChange = jest.fn();
    const value = 20;
    const { getByTestId } = render(
      <Handle
        onChange={onChange}
        value={value}
        label={label}
        max={max}
        min={min}
        stepSize={stepSize}
        tickSize={stepSize}
        tickSizeRatio={stepSize}
      />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');
    handle.focus();
    fireEvent.keyDown(handle, { keyCode: 33 });
    expect(onChange).toHaveBeenCalledWith(value + stepSize * 10);
  });

  it('Page Down decreases by 10× step size', () => {
    const onChange = jest.fn();
    const value = 60;
    const { getByTestId } = render(
      <Handle
        onChange={onChange}
        value={value}
        label={label}
        max={max}
        min={min}
        stepSize={stepSize}
        tickSize={stepSize}
        tickSizeRatio={stepSize}
      />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');
    handle.focus();
    fireEvent.keyDown(handle, { keyCode: 34 });
    expect(onChange).toHaveBeenCalledWith(value - stepSize * 10);
  });

  it('calls onRelease on Home, End, Page Up, Page Down keyUp', () => {
    const onRelease = jest.fn();
    const { getByTestId } = render(
      <Handle
        onRelease={onRelease}
        value={50}
        label={label}
        max={max}
        min={min}
        stepSize={stepSize}
        tickSize={stepSize}
        tickSizeRatio={stepSize}
      />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');
    handle.focus();
    fireEvent.keyDown(handle, { keyCode: 36 });
    fireEvent.keyUp(handle, { keyCode: 36 });
    expect(onRelease).toHaveBeenCalled();
  });

  it('does nothing on keyboard when disabled', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Handle
        onChange={onChange}
        value={50}
        label={label}
        max={max}
        min={min}
        stepSize={stepSize}
        tickSize={stepSize}
        tickSizeRatio={stepSize}
        disabled={true}
      />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');
    handle.focus();
    fireEvent.keyDown(handle, { keyCode: 36 });
    fireEvent.keyDown(handle, { keyCode: 35 });
    fireEvent.keyDown(handle, { keyCode: 33 });
    fireEvent.keyDown(handle, { keyCode: 34 });
    expect(onChange).not.toHaveBeenCalled();
  });
});

describe('Handle quantization (non-zero min, fractional step)', () => {
  it('min=1 stepSize=2: Arrow Right from min goes to 3 (not 2 or 4)', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Handle onChange={onChange} value={1} label="q1" min={1} max={10} stepSize={2} tickSize={1} tickSizeRatio={0.1} />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');
    handle.focus();
    fireEvent.keyDown(handle, { keyCode: 39 });
    expect(onChange).toHaveBeenCalledWith(3);
  });

  it('min=1 stepSize=2: Home reaches min=1 (not 0 or 2)', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Handle onChange={onChange} value={5} label="q2" min={1} max={10} stepSize={2} tickSize={1} tickSizeRatio={0.1} />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');
    handle.focus();
    fireEvent.keyDown(handle, { keyCode: 36 });
    expect(onChange).toHaveBeenCalledWith(1);
  });

  it('min=0.5 stepSize=0.2: Arrow Right from 0.5 goes to 0.7', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Handle
        onChange={onChange}
        value={0.5}
        label="q3"
        min={0.5}
        max={2}
        stepSize={0.2}
        tickSize={1}
        tickSizeRatio={0.5}
      />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');
    handle.focus();
    fireEvent.keyDown(handle, { keyCode: 39 });
    expect(onChange).toHaveBeenCalledWith(0.7);
  });

  it('min=0 stepSize=0.1: values are exact (no 0.0999999)', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Handle onChange={onChange} value={0} label="q4" min={0} max={1} stepSize={0.1} tickSize={1} tickSizeRatio={1} />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');
    handle.focus();
    fireEvent.keyDown(handle, { keyCode: 39 });
    const received = onChange.mock.calls[0][0];
    expect(received).toBe(0.1);
  });
});

describe('Handle boundary snapping (non-aligned max)', () => {
  it('min=0 max=10 stepSize=3: End key reaches exact max (10)', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Handle
        onChange={onChange}
        value={6}
        label="boundary1"
        min={0}
        max={10}
        stepSize={3}
        tickSize={1}
        tickSizeRatio={0.1}
      />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');
    handle.focus();
    fireEvent.keyDown(handle, { keyCode: 35 }); // End key
    expect(onChange).toHaveBeenCalledWith(10);
  });

  it('min=0 max=10 stepSize=3: Arrow Right from 9 reaches max (10)', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Handle
        onChange={onChange}
        value={9}
        label="boundary2"
        min={0}
        max={10}
        stepSize={3}
        tickSize={1}
        tickSizeRatio={0.1}
      />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');
    handle.focus();
    fireEvent.keyDown(handle, { keyCode: 39 }); // Arrow Right
    expect(onChange).toHaveBeenCalledWith(10);
  });

  it('min=1 max=7 stepSize=2: End key reaches exact max (7)', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Handle
        onChange={onChange}
        value={3}
        label="boundary3"
        min={1}
        max={7}
        stepSize={2}
        tickSize={1}
        tickSizeRatio={0.1}
      />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');
    handle.focus();
    fireEvent.keyDown(handle, { keyCode: 35 }); // End key
    expect(onChange).toHaveBeenCalledWith(7);
  });

  it('min=0 max=10 stepSize=3: PageUp from 6 reaches max (10)', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Handle
        onChange={onChange}
        value={6}
        label="boundary4"
        min={0}
        max={10}
        stepSize={3}
        tickSize={1}
        tickSizeRatio={0.1}
      />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');
    handle.focus();
    fireEvent.keyDown(handle, { keyCode: 33 }); // Page Up (6 + 30 = 36, but should snap to 10)
    expect(onChange).toHaveBeenCalledWith(10);
  });

  it('min=0 max=10 stepSize=3: Arrow Right from 6 goes to 9 (normal step)', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Handle
        onChange={onChange}
        value={6}
        label="boundary5"
        min={0}
        max={10}
        stepSize={3}
        tickSize={1}
        tickSizeRatio={0.1}
      />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');
    handle.focus();
    fireEvent.keyDown(handle, { keyCode: 39 }); // Arrow Right
    expect(onChange).toHaveBeenCalledWith(9);
  });

  it('min=0 max=10 stepSize=3: Arrow Left from max(10) goes to 9, not 6', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Handle
        onChange={onChange}
        value={10}
        label="boundary6"
        min={0}
        max={10}
        stepSize={3}
        tickSize={1}
        tickSizeRatio={0.1}
      />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');
    handle.focus();
    fireEvent.keyDown(handle, { keyCode: 37 }); // Arrow Left (10 - 3 = 7, should snap to 9)
    expect(onChange).toHaveBeenCalledWith(9);
  });
});

describe('Handle off-grid navigation (keyboard from non-step-aligned values)', () => {
  it('min=0 max=20 stepSize=3: ArrowRight from off-grid value 10 goes to 12 (not 15)', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Handle
        onChange={onChange}
        value={10}
        label="offgrid1"
        min={0}
        max={20}
        stepSize={3}
        tickSize={1}
        tickSizeRatio={0.05}
      />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');
    handle.focus();
    fireEvent.keyDown(handle, { keyCode: 39 }); // Arrow Right
    expect(onChange).toHaveBeenCalledWith(12); // Next valid step above 10, not 15
  });

  it('min=0 max=20 stepSize=3: ArrowLeft from off-grid value 10 goes to 9 (not 6)', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Handle
        onChange={onChange}
        value={10}
        label="offgrid2"
        min={0}
        max={20}
        stepSize={3}
        tickSize={1}
        tickSizeRatio={0.05}
      />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');
    handle.focus();
    fireEvent.keyDown(handle, { keyCode: 37 }); // Arrow Left
    expect(onChange).toHaveBeenCalledWith(9); // Next valid step below 10, not 6
  });

  it('min=0 max=20 stepSize=3: multiple ArrowRight from 10 follows grid correctly', () => {
    const onChange = jest.fn();
    const { getByTestId, rerender } = render(
      <Handle
        onChange={onChange}
        value={10}
        label="offgrid3"
        min={0}
        max={20}
        stepSize={3}
        tickSize={1}
        tickSizeRatio={0.05}
      />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');

    handle.focus();
    // First press: 10 → 12
    fireEvent.keyDown(handle, { keyCode: 39 });
    expect(onChange).toHaveBeenCalledWith(12);

    // Rerender with new value
    rerender(
      <Handle
        onChange={onChange}
        value={12}
        label="offgrid3"
        min={0}
        max={20}
        stepSize={3}
        tickSize={1}
        tickSizeRatio={0.05}
      />
    );

    // Second press: 12 → 15
    fireEvent.keyDown(handle, { keyCode: 39 });
    expect(onChange).toHaveBeenCalledWith(15);
  });

  it('min=0 max=10 stepSize=3: sequence from max works correctly (10→9→6→3→0)', () => {
    const onChange = jest.fn();
    let currentValue = 10;

    const { getByTestId, rerender } = render(
      <Handle
        onChange={onChange}
        value={currentValue}
        label="sequence"
        min={0}
        max={10}
        stepSize={3}
        tickSize={1}
        tickSizeRatio={0.1}
      />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');
    handle.focus();

    const expectedSequence = [9, 6, 3, 0];

    expectedSequence.forEach((expected) => {
      fireEvent.keyDown(handle, { keyCode: 37 }); // Arrow Left
      expect(onChange).toHaveBeenCalledWith(expected);

      currentValue = expected;
      rerender(
        <Handle
          onChange={onChange}
          value={currentValue}
          label="sequence"
          min={0}
          max={10}
          stepSize={3}
          tickSize={1}
          tickSizeRatio={0.1}
        />
      );
    });
  });
});

describe('Handle component a11y', () => {
  it('has no detectable a11y violations', async () => {
    const { container } = render(
      <Handle value={50} label="Slider handle" min={0} max={100} stepSize={5} tickSize={5} tickSizeRatio={0.05} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
