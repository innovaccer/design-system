import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { GenericChip, GenericChipProps as Props } from '@/components/atoms/_chip';

const BooleanValue = [true, false];
const FunctionValue = jest.fn();
const onClose = jest.fn();

describe('Chip component', () => {
  const mapper: Record<string, any> = {
    label: valueHelper('ChipLabel', { required: true }),
    icon: valueHelper('events', { required: true }),
    clearButton: valueHelper(BooleanValue, { required: true, iterate: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    selected: valueHelper(BooleanValue, { required: true, iterate: true }),
    name: valueHelper('Chip', { required: true }),
    onclose: valueHelper(FunctionValue, { required: true }),
    onClick: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<GenericChip {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Chip component', () => {
  it('renders chip component', () => {
    const { getByTestId } = render(<GenericChip label="ChipLabel" name="Chip" icon="events" clearButton={true} />);
    expect(getByTestId('DesignSystem-GenericChip--Wrapper')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-GenericChip--Icon')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-GenericChip--Text')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-GenericChip--clearButton')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-GenericChip--Icon').textContent).toMatch('events');
    expect(getByTestId('DesignSystem-GenericChip--Text').textContent).toMatch('ChipLabel');
  });

  it('renders chip component with minimum props', () => {
    const { getByTestId, queryByTestId } = render(<GenericChip label="ChipLabel" name="Chip" />);
    expect(getByTestId('DesignSystem-GenericChip--Wrapper')).toBeInTheDocument();
    expect(queryByTestId('DesignSystem-GenericChip--Icon')).not.toBeInTheDocument();
    expect(getByTestId('DesignSystem-GenericChip--Text')).toBeInTheDocument();
    expect(queryByTestId('DesignSystem-GenericChip--clearButton')).not.toBeInTheDocument();
  });

  it('renders chip component with classes', () => {
    const { getByTestId } = render(<GenericChip label="ChipLabel" name="Chip" icon="events" clearButton={true} />);
    expect(getByTestId('DesignSystem-GenericChip--Icon')).toHaveClass('Chip-icon--left');
    expect(getByTestId('DesignSystem-GenericChip--clearButton')).toHaveClass('Chip-icon--right cursor-pointer');
  });

  it('renders chip component with prop onClick', () => {
    const { getByTestId } = render(<GenericChip label="ChipLabel" name="Chip" onClick={FunctionValue} />);
    const onClick = getByTestId('DesignSystem-GenericChip--Wrapper');
    fireEvent.click(onClick);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('renders chip component with prop onClose', () => {
    const { getByTestId } = render(
      <GenericChip label="ChipLabel" name="Chip" onClick={FunctionValue} clearButton={true} onClose={onClose} />
    );
    const onCloseButton = getByTestId('DesignSystem-GenericChip--clearButton');
    fireEvent.click(onCloseButton);
    expect(FunctionValue).toHaveBeenCalled();
    expect(onClose).toHaveBeenCalled();
  });

  it('renders selected chip component with prop clearButton', () => {
    const { getByTestId } = render(
      <GenericChip label="ChipLabel" selected={true} name="Chip" icon="events" clearButton={true} />
    );
    expect(getByTestId('DesignSystem-GenericChip--clearButton')).toHaveClass('Chip-icon--selected');
  });

  it('renders disabled chip component with prop clearButton', () => {
    const { getByTestId } = render(
      <GenericChip label="ChipLabel" name="Chip" icon="events" clearButton={true} disabled={true} />
    );
    expect(getByTestId('DesignSystem-GenericChip--clearButton')).toHaveClass('Chip-icon-disabled--right');
  });
});

describe('Chip component label prefix test', () => {
  it('renders label prefix text with prop:labelPrefix', () => {
    const { getByTestId } = render(<GenericChip label="ChipLabel" labelPrefix="ChipLabelPrefix" name="Chip" />);
    const labelPrefixElement = getByTestId('DesignSystem-GenericChip--LabelPrefix');
    expect(labelPrefixElement).toBeInTheDocument();
    expect(labelPrefixElement).toHaveTextContent('ChipLabelPrefix');
    expect(labelPrefixElement).toHaveClass('Text--medium');
  });
});

describe('Chip component with keyboard interaction', () => {
  it('calls onClick when Enter key is pressed', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<GenericChip name="Chip" label="Test Chip" onClick={onClick} />);

    const chipWrapper = getByTestId('DesignSystem-GenericChip--Wrapper');
    fireEvent.keyDown(chipWrapper, { key: 'Enter', code: 'Enter' });

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
