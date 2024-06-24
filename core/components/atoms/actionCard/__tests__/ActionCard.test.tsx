import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ActionCard } from '@/index';
import { ActionCardProps as Props } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const text = 'action card content';
const FunctionValue = jest.fn();
const children = <p>{text}</p>;
const BooleanValue = [true, false];

describe('Action Card component snapshots', () => {
  const mapper: Record<string, any> = {
    disabled: valueHelper(BooleanValue, { required: false, iterate: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<ActionCard {...attr}>{children}</ActionCard>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Action Card component event handlers', () => {
  it('check for onClick handler with disabled', () => {
    const { getByTestId } = render(
      <ActionCard onClick={FunctionValue} disabled={true}>
        {children}
      </ActionCard>
    );
    const cardElement = getByTestId('DesignSystem-ActionCard');

    fireEvent.click(cardElement);
    expect(FunctionValue).not.toHaveBeenCalled();
  });

  it('check for onClick handler with non disabled', () => {
    const { getByTestId } = render(<ActionCard onClick={FunctionValue}>{children}</ActionCard>);
    const cardElement = getByTestId('DesignSystem-ActionCard');
    expect(cardElement).toHaveTextContent(text);

    fireEvent.click(cardElement);
    expect(FunctionValue).toHaveBeenCalled();
  });
});

describe('Action Card component custom classes', () => {
  it('check for custom class', () => {
    const { getByTestId } = render(<ActionCard className="custom-class">{children}</ActionCard>);
    const cardElement = getByTestId('DesignSystem-ActionCard');
    expect(cardElement).toHaveClass('custom-class');
  });
});

describe('Action Card component default classes', () => {
  it('check for default classes', () => {
    const { getByTestId } = render(<ActionCard>{children}</ActionCard>);
    const cardElement = getByTestId('DesignSystem-ActionCard');
    expect(cardElement).toHaveClass('ActionCard');
    expect(cardElement).toHaveClass('ActionCard--default');
  });
});

describe('Action Card component disabled state', () => {
  it('check for disabled class', () => {
    const { getByTestId } = render(<ActionCard disabled={true}>{children}</ActionCard>);
    const cardElement = getByTestId('DesignSystem-ActionCard');
    expect(cardElement).toHaveClass('ActionCard');
    expect(cardElement).toHaveClass('ActionCard--disabled');
  });

  it('check for disabled overlay', () => {
    const { getByTestId } = render(<ActionCard disabled={true}>{children}</ActionCard>);
    const overlayElement = getByTestId('DesignSystem-ActionCard-Overlay');
    expect(overlayElement).toBeInTheDocument();
  });
});
