import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MultiSlider } from '@/index';
import { MultiSliderProps as Props } from '../index';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const labelStepSize = 10;
const labelPrecision = 5;
const min = 0;
const max = 100;
const stepSize = 5;
const label = 'MultiSlider';
const FunctionValue = jest.fn();

describe('MultiSlider component', () => {
  const mapper: Record<string, any> = {
    labelStepSize: valueHelper(labelStepSize, { required: true }),
    labelPrecision: valueHelper(labelPrecision, { required: true }),
    stepSize: valueHelper(stepSize, { required: true }),
    label: valueHelper(label, { required: true }),
    min: valueHelper(min, { required: true }),
    max: valueHelper(max, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
    onClick: valueHelper(FunctionValue, { required: true }),
    onRelease: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<MultiSlider {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('renders children with prop', () => {
  it('renders children', () => {
    const { getByTestId } = render(<MultiSlider />);
    expect(getByTestId('DesignSystem-MultiSlider')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-MultiSlider-Slider-Track')).toBeInTheDocument();
  });

  it('renders children with label prop', () => {
    const { getByTestId } = render(<MultiSlider label={label} />);
    expect(getByTestId('DesignSystem-MultiSlider')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-MultiSlider-Slider-Track')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Label')).toBeInTheDocument();
  });

  it('renders label with expected label', () => {
    const { getByTestId } = render(<MultiSlider label={label} onChange={FunctionValue} />);
    expect(getByTestId('DesignSystem-Label').textContent).toMatch(label);
  });
});

describe('Calls slider event handlers', () => {
  const value = 5;
  it('calls mouseOver', () => {
    const { getByTestId, container } = render(
      <MultiSlider onRangeChange={FunctionValue} onChange={FunctionValue}>
        <MultiSlider.Handle value={value} onRelease={FunctionValue} fillBefore={true} />
      </MultiSlider>
    );
    const elem = getByTestId('DesignSystem-MultiSlider-Handle');
    fireEvent.mouseDown(elem);
    fireEvent.mouseUp(elem);
    expect(FunctionValue).toBeCalled();
    const labels = container.querySelectorAll('.Slider-label');
    fireEvent.click(labels[0]);
    expect(FunctionValue).toBeCalled();
  });

  it('calls multislider mouseDown', () => {
    const { getByTestId } = render(<MultiSlider onChange={FunctionValue} label={label} />);
    const elem = getByTestId('DesignSystem-MultiSlider-Slider-Track');
    fireEvent.mouseDown(elem);
    expect(FunctionValue).toBeCalled();
  });
});

describe('MultiSlider handle aria-labels', () => {
  it('renders aria-label with value for each handle', () => {
    const { getAllByRole } = render(
      <MultiSlider min={0} max={10} stepSize={1}>
        <MultiSlider.Handle value={2} />
        <MultiSlider.Handle value={8} />
      </MultiSlider>
    );
    const sliders = getAllByRole('slider');
    expect(sliders).toHaveLength(2);
    expect(sliders[0]).toHaveAttribute('aria-label', 'Slider handle 1 on 2');
    expect(sliders[1]).toHaveAttribute('aria-label', 'Slider handle 2 on 8');
  });

  it('renders custom aria-labels when provided', () => {
    const { getAllByRole } = render(
      <MultiSlider min={0} max={10} stepSize={1}>
        <MultiSlider.Handle value={2} aria-label="Start price" />
        <MultiSlider.Handle value={8} aria-label="End price" />
      </MultiSlider>
    );
    const sliders = getAllByRole('slider');
    expect(sliders[0]).toHaveAttribute('aria-label', 'Start price');
    expect(sliders[1]).toHaveAttribute('aria-label', 'End price');
  });

  it('renders aria-label for single handle', () => {
    const { getByRole } = render(
      <MultiSlider min={0} max={10} stepSize={1}>
        <MultiSlider.Handle value={5} />
      </MultiSlider>
    );
    const slider = getByRole('slider');
    expect(slider).toHaveAttribute('aria-label', 'Slider handle 1 on 5');
  });

  it('renders aria-label on label ticks', () => {
    const { getAllByTestId } = render(<MultiSlider min={0} max={2} stepSize={1} labelStepSize={1} />);
    const labels = getAllByTestId('DesignSystem-MultiSlider-Label');
    expect(labels[0]).toHaveAttribute('aria-label', '0');
    expect(labels[1]).toHaveAttribute('aria-label', '1');
    expect(labels[2]).toHaveAttribute('aria-label', '2');
  });
});

describe('Range slider handle collision (snap-to-lock)', () => {
  it('End key on first handle snaps to second handle position when blocked', () => {
    const onRangeChange = jest.fn();
    const { getAllByTestId } = render(
      <MultiSlider min={0} max={10} stepSize={1} onRangeChange={onRangeChange}>
        <MultiSlider.Handle value={2} />
        <MultiSlider.Handle value={8} />
      </MultiSlider>
    );
    const handles = getAllByTestId('DesignSystem-MultiSlider-Handle');
    const firstHandle = handles[0];

    firstHandle.focus();
    fireEvent.keyDown(firstHandle, { keyCode: 35 }); // End key

    // First handle should snap to second handle's position (8), not reach max (10)
    expect(onRangeChange).toHaveBeenCalledWith([8, 8]);
  });

  it('PageUp on first handle crossing second handle snaps to second handle position', () => {
    const onRangeChange = jest.fn();
    const { getAllByTestId } = render(
      <MultiSlider min={0} max={100} stepSize={5} onRangeChange={onRangeChange}>
        <MultiSlider.Handle value={10} />
        <MultiSlider.Handle value={40} />
      </MultiSlider>
    );
    const handles = getAllByTestId('DesignSystem-MultiSlider-Handle');
    const firstHandle = handles[0];

    firstHandle.focus();
    fireEvent.keyDown(firstHandle, { keyCode: 33 }); // Page Up (10 + 50 = 60, but blocked at 40)

    // Should snap to second handle at 40
    expect(onRangeChange).toHaveBeenCalledWith([40, 40]);
  });

  it('Home key on second handle snaps to first handle position when blocked', () => {
    const onRangeChange = jest.fn();
    const { getAllByTestId } = render(
      <MultiSlider min={0} max={10} stepSize={1} onRangeChange={onRangeChange}>
        <MultiSlider.Handle value={3} />
        <MultiSlider.Handle value={7} />
      </MultiSlider>
    );
    const handles = getAllByTestId('DesignSystem-MultiSlider-Handle');
    const secondHandle = handles[1];

    secondHandle.focus();
    fireEvent.keyDown(secondHandle, { keyCode: 36 }); // Home key

    // Second handle should snap to first handle's position (3), not reach min (0)
    expect(onRangeChange).toHaveBeenCalledWith([3, 3]);
  });

  it('Arrow keys snap to adjacent handle when trying to cross', () => {
    const onRangeChange = jest.fn();
    const { getAllByTestId } = render(
      <MultiSlider min={0} max={10} stepSize={1} onRangeChange={onRangeChange}>
        <MultiSlider.Handle value={4} />
        <MultiSlider.Handle value={6} />
      </MultiSlider>
    );
    const handles = getAllByTestId('DesignSystem-MultiSlider-Handle');
    const firstHandle = handles[0];

    firstHandle.focus();
    // Move first handle closer to second
    fireEvent.keyDown(firstHandle, { keyCode: 39 }); // Arrow Right (4 + 1 = 5)
    expect(onRangeChange).toHaveBeenCalledWith([5, 6]);
  });

  it('Multi-handle slider: only snaps to first blocking handle, preserves others', () => {
    const onRangeChange = jest.fn();
    const { getAllByTestId } = render(
      <MultiSlider min={0} max={40} stepSize={1} onRangeChange={onRangeChange}>
        <MultiSlider.Handle value={10} />
        <MultiSlider.Handle value={20} />
        <MultiSlider.Handle value={30} />
      </MultiSlider>
    );
    const handles = getAllByTestId('DesignSystem-MultiSlider-Handle');
    const firstHandle = handles[0];

    firstHandle.focus();
    // Try to move first handle past both others (to 35)
    fireEvent.keyDown(firstHandle, { keyCode: 35 }); // End key (jumps to max=40, but blocked at 20)

    // Should snap to second handle at 20, but keep third handle at 30
    expect(onRangeChange).toHaveBeenCalledWith([20, 20, 30]);
  });
});
