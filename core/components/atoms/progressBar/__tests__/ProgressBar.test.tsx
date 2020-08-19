import * as React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import ProgressBar, { ProgressBarProps as Props } from '../ProgressBar';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

describe('ProgressBar component', () => {
  const mapper = {
    value: valueHelper(10, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <ProgressBar
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
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
