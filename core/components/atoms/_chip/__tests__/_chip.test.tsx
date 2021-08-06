import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { GenericChip, GenericChipProps as Props } from '../../_chip';

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
    expect(getByTestId('DesignSystem-GenericChip--GenericChipWrapper')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-GenericChip--Icon')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-GenericChip--Text')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-GenericChip--clearButton')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-GenericChip--Icon').textContent).toMatch('events_round');
    expect(getByTestId('DesignSystem-GenericChip--Text').textContent).toMatch('ChipLabel');
  });

  it('renders chip component with minimum props', () => {
    const { getByTestId, queryByTestId } = render(<GenericChip label="ChipLabel" name="Chip" />);
    expect(getByTestId('DesignSystem-GenericChip--GenericChipWrapper')).toBeInTheDocument();
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
    const onClick = getByTestId('DesignSystem-GenericChip--GenericChipWrapper');
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
});
