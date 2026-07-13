import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { axe } from '@/utils/testAxe';
import { RangeSlider } from '@/index';

describe('RangeSlider keyboard smoke tests', () => {
  it('Home/End work on first handle', () => {
    const onChange = jest.fn();
    const { getAllByTestId } = render(
      <RangeSlider defaultValue={[25, 75]} label="Range" min={0} max={100} stepSize={5} onChange={onChange} />
    );
    const handles = getAllByTestId('DesignSystem-MultiSlider-Handle');
    const firstHandle = handles[0];
    firstHandle.focus();
    fireEvent.keyDown(firstHandle, { keyCode: 36 }); // Home
    expect(onChange).toHaveBeenCalledWith([0, 75]);
  });

  it('End jumps second handle to max', () => {
    const onChange = jest.fn();
    const { getAllByTestId } = render(
      <RangeSlider defaultValue={[25, 75]} label="Range" min={0} max={100} stepSize={5} onChange={onChange} />
    );
    const handles = getAllByTestId('DesignSystem-MultiSlider-Handle');
    handles[1].focus();
    fireEvent.keyDown(handles[1], { keyCode: 35 }); // End
    expect(onChange).toHaveBeenCalledWith([25, 100]);
  });

  it('Page Up/Page Down move handle', () => {
    const onChange = jest.fn();
    const { getAllByTestId } = render(
      <RangeSlider defaultValue={[20, 80]} label="Range" min={0} max={100} stepSize={5} onChange={onChange} />
    );
    const handles = getAllByTestId('DesignSystem-MultiSlider-Handle');
    handles[0].focus();
    fireEvent.keyDown(handles[0], { keyCode: 33 }); // Page Up
    expect(onChange).toHaveBeenCalledWith([70, 80]);
  });

  it('prevents first handle from crossing second handle by snapping to it', () => {
    const onChange = jest.fn();
    const { getAllByTestId } = render(
      <RangeSlider defaultValue={[0, 4]} label="Range" min={0} max={10} stepSize={1} onChange={onChange} />
    );
    const firstHandle = getAllByTestId('DesignSystem-MultiSlider-Handle')[0];
    firstHandle.focus();
    fireEvent.keyDown(firstHandle, { keyCode: 35 }); // End - would move first handle to 10, but snaps to second at 4
    expect(onChange).toHaveBeenCalledWith([4, 4]);
  });
});

describe('RangeSlider component a11y', () => {
  it('has no detectable a11y violations', async () => {
    const { container } = render(<RangeSlider defaultValue={[25, 75]} label="Range" min={0} max={100} stepSize={5} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
