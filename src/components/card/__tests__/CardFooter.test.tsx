import * as React from 'react';
import { render } from '@testing-library/react';
import { CardFooter, Button } from '@/index';
import { CardFooterProps as Props } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const BooleanValue = [true, false];
const children = (
  <div data-test="DesignSystem-CardFooter--actions">
    <Button appearance="basic">Cancel</Button>
    <Button appearance="primary" className="ml-4">
      Submit
    </Button>
  </div>
);

describe('CardFooter component', () => {
  const mapper = {
    withSeperator: valueHelper(BooleanValue, { required: true, iterate: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<CardFooter {...attr}>{children}</CardFooter>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('CardFooter component', () => {
  it('renders actions', () => {
    const { getByTestId } = render(<CardFooter>{children}</CardFooter>);
    expect(getByTestId('DesignSystem-CardFooter--actions')).toBeInTheDocument();
  });

  it('renders className', () => {
    const { getByTestId } = render(<CardFooter className="CardFooterClass">{children}</CardFooter>);
    expect(getByTestId('DesignSystem-CardFooter')).toHaveClass('CardFooterClass');
  });
});

describe('CardFooter component with prop : withSeperator', () => {
  it('renders seperator by default', () => {
    const { getByTestId } = render(<CardFooter>{children}</CardFooter>);
    expect(getByTestId('DesignSystem-CardFooter')).toHaveClass('Card-footer--withSeperator');
  });

  it('does not render seperator if withSeperator = false', () => {
    const { getByTestId } = render(<CardFooter withSeperator={false}>{children}</CardFooter>);
    expect(getByTestId('DesignSystem-CardFooter')).not.toHaveClass('Card-footer--withSeperator');
  });
});
