import * as React from 'react';
import { render } from '@testing-library/react';
import { CardBody } from '@/index';
import { CardBodyProps as Props } from '@/index.type';
import { testHelper, filterUndefined, testMessageHelper } from '@/utils/testHelper';

describe('CardBody component', () => {
  const mapper = {};
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <CardBody>
          <span>Card Body</span>
        </CardBody>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('CardBody component', () => {
  it('renders children', () => {
    const { getByTestId } = render(
      <CardBody>
        <span data-test="DesignSystem-CardBody--span">Card Body</span>
      </CardBody>
    );
    expect(getByTestId('DesignSystem-CardBody--span')).toBeInTheDocument();
  });

  it('renders className', () => {
    const { getByTestId } = render(
      <CardBody className="CardBodyClass">
        <span data-test="DesignSystem-CardBody--span">Card Body</span>
      </CardBody>
    );
    expect(getByTestId('DesignSystem-CardBody')).toHaveClass('CardBodyClass');
  });
});
