import * as React from 'react';
import { render } from '@testing-library/react';
import Card, { CardProps as Props, Shadow } from '../Card';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const shadowList: Shadow[] = ['shadow10', 'shadow20', 'shadow30'];
const Style = [
  {
    width: valueHelper('150px', { required: true }),
    height: valueHelper('150px', { required: true }),
  },
];

const Mapper = {
  shadow: valueHelper(shadowList, { required: true, iterate: true }),
  style: valueHelper(Style, { required: true, iterate: true }),
};

describe('Card component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Card {...attr}>
          <span>Hello</span>
        </Card>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(Mapper, testFunc);
});

describe('Card component shadow', () => {
  shadowList.forEach((shadow) => {
    it(`should have the Card--${shadow} class when shadow=${shadow} `, () => {
      const { getByTestId } = render(<Card shadow={shadow}>Card</Card>);
      expect(getByTestId('DesignSystem-Card')).toHaveClass(`Card--${shadow}`);
    });
  });
});
