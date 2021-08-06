import * as React from 'react';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { Tab, Text } from '@/index';
import { TabProps as Props } from '@/index.type';

const BooleanValue = [true, false];
const Label = <Text>Tab(Recommended)</Text>;

describe('Tab component', () => {
  const mapper = {
    label: valueHelper(Label, { required: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(
        <Tab {...attr}>
          <div>Tab</div>
        </Tab>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Tab component', () => {
  it('renders children', () => {
    const { getByTestId } = render(
      <Tab label={Label}>
        <div data-test="DesignSystem-Tab">Tab</div>
      </Tab>
    );

    expect(getByTestId('DesignSystem-Tab')).toBeInTheDocument();
  });

  it('renders without children', () => {
    const { asFragment } = render(<Tab label={Label} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
