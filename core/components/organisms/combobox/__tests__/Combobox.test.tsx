import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { Combobox } from '@/index';
import { ComboboxProps as Props } from '@/index.type';

const BooleanValue = [true, false];
const FunctionValue = jest.fn();
const placeholder = 'select an option';
const defaultValue = { label: 'Option 1', value: 'Option 1' };
const defaultChipValue = [{ label: 'Option 1', value: 'Option 1' }];
const inputSize = ['tiny', 'regular', 'large'];

const children = (
  <Combobox.List>
    <Combobox.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Combobox.Option>
  </Combobox.List>
);

describe('Combobox component snapshots', () => {
  const mapper: Record<string, any> = {
    multiSelect: valueHelper(BooleanValue, { required: true, iterate: true }),
    onChange: valueHelper(FunctionValue, { required: true, iterate: false }),
    onSelect: valueHelper(FunctionValue, { required: true, iterate: false }),
    placeholder: valueHelper(placeholder, { required: false, iterate: false }),
    size: valueHelper(inputSize, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Combobox {...attr}>{children}</Combobox>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Combobox component single input trigger tests', () => {
  it('check for placeholder in single input trigger', () => {
    const { getByTestId } = render(<Combobox placeholder={placeholder}>{children}</Combobox>);
    const inputTrigger = getByTestId('DesignSystem-Combobox-Input');
    expect(inputTrigger).toBeInTheDocument();
    expect(inputTrigger).toHaveAttribute('placeholder', placeholder);
  });

  it('check for default value in single input trigger', () => {
    const { getByTestId } = render(<Combobox value={defaultValue}>{children}</Combobox>);
    const inputTrigger = getByTestId('DesignSystem-Combobox-Input');
    expect(inputTrigger).toBeInTheDocument();
    expect(inputTrigger).toHaveValue(defaultValue.label);
  });

  it('check for onSelect event handler in single input trigger', () => {
    const { getByTestId } = render(<Combobox onChange={FunctionValue}>{children}</Combobox>);
    const inputTrigger = getByTestId('DesignSystem-Combobox-Input');
    expect(inputTrigger).toBeInTheDocument();

    fireEvent.click(inputTrigger);
    const popover = getByTestId('DesignSystem-Popover');
    expect(popover).toBeInTheDocument();

    const optionItem = getByTestId('DesignSystem-Combobox-Option');
    fireEvent.click(optionItem);

    expect(inputTrigger).toHaveValue('Option 1');
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for onChange event handler in single input trigger', () => {
    const { getByTestId } = render(<Combobox onChange={FunctionValue}>{children}</Combobox>);
    const inputTrigger = getByTestId('DesignSystem-Combobox-Input');
    expect(inputTrigger).toBeInTheDocument();

    fireEvent.change(inputTrigger, { target: { value: 'Option 2' } });
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for onClear event handler in single input trigger', () => {
    const { getByTestId } = render(
      <Combobox value={defaultValue} onChange={FunctionValue}>
        {children}
      </Combobox>
    );
    const inputTrigger = getByTestId('DesignSystem-Combobox-Input');
    expect(inputTrigger).toBeInTheDocument();

    const closeIcon = getByTestId('DesignSystem-Input--closeIcon');

    fireEvent.click(closeIcon);
    expect(FunctionValue).toHaveBeenCalled();
    expect(inputTrigger).toHaveValue('');
  });
});

describe('Combobox component multiple select trigger tests', () => {
  it('check for placeholder in multiple select trigger', () => {
    const { getByTestId } = render(
      <Combobox multiSelect={true} placeholder={placeholder}>
        {children}
      </Combobox>
    );
    const inputTrigger = getByTestId('DesignSystem-MultiSelectTrigger--Input');
    expect(inputTrigger).toBeInTheDocument();
    expect(inputTrigger).toHaveAttribute('placeholder', placeholder);
  });

  it('check for default value in multi select trigger', () => {
    const { getAllByTestId } = render(
      <Combobox multiSelect={true} chipValue={defaultChipValue}>
        {children}
      </Combobox>
    );

    const chipList = getAllByTestId('DesignSystem-MultiSelectTrigger--Chip');
    expect(chipList).toHaveLength(1);
    expect(chipList[0].textContent).toMatch('Option 1');
  });

  it('check for onChange event handler in multiselect input trigger', () => {
    const { getByTestId, getAllByTestId } = render(
      <Combobox multiSelect={true} onChange={FunctionValue}>
        {children}
      </Combobox>
    );
    const inputTrigger = getByTestId('DesignSystem-MultiSelectTrigger--Input');
    expect(inputTrigger).toBeInTheDocument();

    fireEvent.click(inputTrigger);
    const popover = getByTestId('DesignSystem-Popover');
    expect(popover).toBeInTheDocument();

    const optionItem = getByTestId('DesignSystem-Combobox-Option');
    fireEvent.click(optionItem);

    const chipList = getAllByTestId('DesignSystem-MultiSelectTrigger--Chip');
    expect(chipList).toHaveLength(1);
    expect(chipList[0].textContent).toMatch('Option 1');
  });

  it('check for onChange event handler in multiselect input trigger', () => {
    const { getByTestId, getAllByTestId } = render(
      <Combobox multiSelect={true} onChange={FunctionValue}>
        {children}
      </Combobox>
    );
    const inputTrigger = getByTestId('DesignSystem-MultiSelectTrigger--Input');
    expect(inputTrigger).toBeInTheDocument();

    fireEvent.change(inputTrigger, { target: { value: 'chip option' } });
    fireEvent.keyDown(inputTrigger, { key: 'Enter' });

    expect(FunctionValue).toHaveBeenCalled();

    const chipList = getAllByTestId('DesignSystem-MultiSelectTrigger--Chip');
    expect(chipList).toHaveLength(1);
    expect(chipList[0].textContent).toMatch('chip option');
  });

  it('check for onSearch event handler in multiselect input trigger', () => {
    const { getByTestId } = render(
      <Combobox multiSelect={true} onChange={FunctionValue}>
        {children}
      </Combobox>
    );
    const inputTrigger = getByTestId('DesignSystem-MultiSelectTrigger--Input');
    expect(inputTrigger).toBeInTheDocument();

    fireEvent.change(inputTrigger, { target: { value: 'chip option' } });

    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for onClear event handler in multiselect input trigger', () => {
    const { getByTestId } = render(
      <Combobox multiSelect={true} chipValue={defaultChipValue} onChange={FunctionValue}>
        {children}
      </Combobox>
    );
    const inputTrigger = getByTestId('DesignSystem-MultiSelectTrigger--Input');
    expect(inputTrigger).toBeInTheDocument();

    const closeIcon = getByTestId('DesignSystem-MultiSelectTrigger--Icon');
    fireEvent.click(closeIcon);

    expect(FunctionValue).toHaveBeenCalled();
  });
});
