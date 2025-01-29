import * as React from 'react';
import { render } from '@testing-library/react';
import ProgressBar, { ProgressBarProps as Props, ProgressBarSize } from '../ProgressBar';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const sizeList: ProgressBarSize[] = ['regular', 'small'];
const stateList = ['default', 'indeterminate'];

describe('ProgressBar component', () => {
  const mapper = {
    value: valueHelper(10, { required: true }),
    size: valueHelper(sizeList, { required: true, iterate: true }),
    state: valueHelper(stateList, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<ProgressBar {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('ProgressBar component', () => {
  it('renders style when value>0', () => {
    const { getByTestId } = render(<ProgressBar value={50} max={100} />);
    expect(getByTestId('DesignSystem-ProgressBar').firstChild).toHaveStyle({ width: '50%' });
  });

  it('renders style when value<0', () => {
    const { getByTestId } = render(<ProgressBar value={-4} max={100} />);
    expect(getByTestId('DesignSystem-ProgressBar').firstChild).toHaveStyle({ width: '0' });
  });

  it('renders style when value>max', () => {
    const { getByTestId } = render(<ProgressBar value={200} max={100} />);
    expect(getByTestId('DesignSystem-ProgressBar').firstChild).toHaveStyle({ width: '100%' });
  });

  describe('ProgressBar Component with overwrite class', () => {
    it('overwrite ProgressBar class', () => {
      const { getByTestId } = render(<ProgressBar className="ProgressBarClass" value={50} />);
      expect(getByTestId('DesignSystem-ProgressBar')).toHaveClass('ProgressBarClass');
    });
  });
});

describe('ProgressBar component size variant', () => {
  sizeList.forEach((size) => {
    it(`check for ${size} size of progress bar`, () => {
      const { getByTestId } = render(<ProgressBar size={size} value={50} />);
      expect(getByTestId('DesignSystem-ProgressBar')).toHaveClass(`ProgressBar-indicator--${size}`);
    });
  });
});

describe('ProgressBar component state variant', () => {
  it('check for indeterminate state of progress bar', () => {
    const { getByTestId } = render(<ProgressBar state="indeterminate" value={50} />);
    expect(getByTestId('DesignSystem-ProgressBar-Indicator')).toHaveClass('ProgressBar-indicator--indeterminate');
  });
});
