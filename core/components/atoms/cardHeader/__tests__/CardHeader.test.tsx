import * as React from 'react';
import { render } from '@testing-library/react';
import { CardHeader, Text } from '@/index';
import { CardHeaderProps as Props } from '@/index.type';
import { testHelper, filterUndefined, testMessageHelper } from '@/utils/testHelper';

const children = (
  <Text weight="strong" size="large">
    Card Heading
  </Text>
);

describe('CardHeader component', () => {
  const mapper = {};
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<CardHeader>{children}</CardHeader>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('CardHeader component', () => {
  it('renders children', () => {
    const { getByTestId } = render(<CardHeader>{children}</CardHeader>);
    expect(getByTestId('DesignSystem-CardHeader').textContent).toMatch('Card Heading');
  });

  it('renders className', () => {
    const { getByTestId } = render(<CardHeader className="CardHeaderClass">{children}</CardHeader>);
    expect(getByTestId('DesignSystem-CardHeader')).toHaveClass('CardHeaderClass');
  });
});
