import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { axe } from '@/utils/testAxe';
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

  it('sets aria-invalid on single-select combobox input when error is true', () => {
    const { getByTestId } = render(
      <Combobox error={true} onChange={FunctionValue}>
        {children}
      </Combobox>
    );
    expect(getByTestId('DesignSystem-Combobox-Input')).toHaveAttribute('aria-invalid', 'true');
  });

  it('forwards aria-describedby and aria-errormessage to combobox input', () => {
    const { getByTestId } = render(
      <Combobox onChange={FunctionValue} aria-describedby="hint-id" aria-errormessage="err-id">
        {children}
      </Combobox>
    );
    const input = getByTestId('DesignSystem-Combobox-Input');
    expect(input).toHaveAttribute('aria-describedby', 'hint-id');
    expect(input).toHaveAttribute('aria-errormessage', 'err-id');
  });

  it('sets aria-invalid on multiselect combobox input when error is true', () => {
    const { getByTestId } = render(
      <Combobox multiSelect={true} error={true} onChange={FunctionValue}>
        {children}
      </Combobox>
    );
    expect(getByTestId('DesignSystem-MultiSelectTrigger--Input')).toHaveAttribute('aria-invalid', 'true');
  });

  it('closes list and returns focus to input when Tab is pressed on inner list row (capture)', async () => {
    const { getByTestId } = render(<Combobox onChange={FunctionValue}>{children}</Combobox>);
    const inputTrigger = getByTestId('DesignSystem-Combobox-Input');
    fireEvent.click(inputTrigger);
    const popover = getByTestId('DesignSystem-Popover');
    expect(popover).toHaveAttribute('data-opened', 'true');

    const innerRow = getByTestId('DesignSystem-Combobox-Option');
    innerRow.focus();
    fireEvent.keyDown(innerRow, { key: 'Tab', shiftKey: true });

    expect(popover).toHaveAttribute('data-opened', 'false');

    // allow async import resolution
    await new Promise(process.nextTick);
    expect(inputTrigger).toHaveFocus();
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

  it('uses distinct accessible names for chip remove and clear-all when clearButton is enabled', () => {
    const { getByTestId } = render(
      <Combobox multiSelect={true} chipValue={defaultChipValue} clearButton={true}>
        {children}
      </Combobox>
    );

    expect(getByTestId('DesignSystem-GenericChip--clearButton')).toHaveAttribute('aria-label', 'Remove Option 1');
    expect(getByTestId('DesignSystem-MultiSelectTrigger--Icon')).toHaveAttribute('aria-label', 'Clear all options');
    expect(getByTestId('DesignSystem-MultiSelectTrigger--Chip')).toHaveAttribute('tabIndex', '-1');
  });
});

describe('Combobox component a11y', () => {
  it('has no detectable a11y violations', async () => {
    const { container } = render(
      <Combobox placeholder="select an option">
        <Combobox.List>
          <Combobox.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Combobox.Option>
        </Combobox.List>
      </Combobox>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
