import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ActionButton, { ActionButtonProps as Props, ActionButtonType } from '../ActionButton';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const size = 16;

const type: ActionButtonType[] = ['outlined', 'rounded'];
const FunctionValue = jest.fn();
const StringValue = 'events';

describe('ActionButton component', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(StringValue, { required: true }),
    size: valueHelper(size, { required: true }),
    onClick: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<ActionButton {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});

describe('ActionButton component', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(StringValue, { required: true }),
    size: valueHelper(size, { required: true }),
    type: valueHelper(type, { required: true, iterate: true }),
    onClick: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<ActionButton {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});

describe('ActionButton component states', () => {
  it('renders action button with hover state', () => {
    const { getByTestId } = render(<ActionButton name={StringValue} />);
    const iconElement = getByTestId('DesignSystem-Input-ActionButton');
    fireEvent.mouseEnter(iconElement);
    expect(iconElement).toHaveClass('ActionButton');
    expect(iconElement).toHaveStyle(`background-color: var(--secondary);`);
  });

  it('renders action button with active state', () => {
    const { getByTestId } = render(<ActionButton name={StringValue} />);
    const iconElement = getByTestId('DesignSystem-Input-ActionButton');
    fireEvent.pointerDown(iconElement);
    expect(iconElement).toHaveClass('ActionButton');
    expect(iconElement).toHaveStyle(`background-color: var(--secondary-dark);`);
  });
});

describe('ActionButton component', () => {
  it('renders action button with children', () => {
    const { getByTestId } = render(
      <ActionButton name={StringValue}>
        <img
          width="50"
          height="50"
          alt="Innovaccer logo"
          data-test="DesignSystem-Image"
          src="https://design.innovaccer.com/images/withoutType.png"
        />
      </ActionButton>
    );
    expect(getByTestId('DesignSystem-Image')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Input-ActionButton')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Input-ActionButton')).toHaveClass('ActionButton');
  });
});
