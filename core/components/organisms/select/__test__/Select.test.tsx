import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { Select, AIIconButton } from '@/index';
import { SelectProps as Props } from '@/index.type';

const BooleanValue = [true, false];
const FunctionValue = jest.fn();
const placeholder = 'Select';
const multiSelectValue = [{ label: 'Option 1', value: 'Option 1' }];
const checkedState = ['checked', 'unchecked', 'indeterminate'];
const triggerSize = ['regular', 'small'];
const listBoxSize = ['compressed', 'standard', 'tight'];
const tagName = ['ul', 'ol', 'div', 'nav'];

const children = (
  <Select.List>
    <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
  </Select.List>
);

describe('Select component snapshots', () => {
  const mapper: Record<string, any> = {
    multiSelect: valueHelper(BooleanValue, { required: true, iterate: true }),
    onSelect: valueHelper(FunctionValue, { required: true, iterate: false }),

    triggerOptions: {
      triggerSize: valueHelper(triggerSize, { required: true, iterate: true }),
      placeholder: valueHelper(placeholder, { required: false, iterate: false }),
      inlineLabel: valueHelper('Colour', { required: false, iterate: false }),
      disabled: valueHelper(BooleanValue, { required: false, iterate: true }),
      onClear: valueHelper(FunctionValue, { required: false, iterate: false }),
      icon: valueHelper('location_on', { required: false, iterate: false }),
    },
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Select {...attr}>{children}</Select>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Select List component snapshots', () => {
  const mapper: Record<string, any> = {
    size: valueHelper(listBoxSize, { required: true, iterate: true }),
    tagName: valueHelper(tagName, { required: true, iterate: true }),
    showDivider: valueHelper(BooleanValue, { required: false, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Select onSelect={FunctionValue}>
          <Select.List {...attr}>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
            <Select.Option option={{ label: 'Option 2', value: 'Option 2' }}>Option 2</Select.Option>
            <Select.Option option={{ label: 'Option 3', value: 'Option 3' }}>Option 3</Select.Option>
          </Select.List>
        </Select>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Select Option component snapshots', () => {
  const mapper: Record<string, any> = {
    checkedState: valueHelper(checkedState, { required: false, iterate: true }),
    onClick: valueHelper(FunctionValue, { required: false, iterate: false }),
    withCheckbox: valueHelper(BooleanValue, { required: false, iterate: true }),
    disabled: valueHelper(BooleanValue, { required: false, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Select onSelect={FunctionValue}>
          <Select.List>
            <Select.Option {...attr} option={{ label: 'Option 1', value: 'Option 1' }}>
              Option 1
            </Select.Option>
          </Select.List>
        </Select>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Select component single input trigger tests', () => {
  it('check for placeholder in single input trigger', () => {
    const { getByTestId } = render(
      <Select onSelect={FunctionValue} triggerOptions={{ placeholder: placeholder }}>
        {children}
      </Select>
    );
    const inputTrigger = getByTestId('DesignSystem-Select-trigger');
    expect(inputTrigger).toBeInTheDocument();
    expect(inputTrigger).toHaveTextContent(placeholder);
  });

  it('check for the default width of trigger', () => {
    const { getByTestId } = render(<Select onSelect={FunctionValue}>{children}</Select>);
    const triggerButton = getByTestId('DesignSystem-Select-trigger');
    expect(triggerButton).toBeInTheDocument();
    expect(triggerButton).toHaveStyle('width: 176px');
  });

  it('check for the default width of popover', () => {
    const { getByTestId } = render(<Select onSelect={FunctionValue}>{children}</Select>);
    const triggerButton = getByTestId('DesignSystem-Select-trigger');
    expect(triggerButton).toBeInTheDocument();
    fireEvent.click(triggerButton);
    const popover = getByTestId('DesignSystem-Popover');
    expect(popover).toBeInTheDocument();
    expect(popover).toHaveStyle('width: 176px');
  });

  it('override the default width of trigger', () => {
    const { getByTestId } = render(
      <Select width={200} onSelect={FunctionValue}>
        {children}
      </Select>
    );
    const triggerButton = getByTestId('DesignSystem-Select-trigger');
    expect(triggerButton).toBeInTheDocument();
    expect(triggerButton).toHaveStyle('width: 200px');
  });

  it('override the default width of popover', () => {
    const { getByTestId } = render(
      <Select popoverWidth={200} onSelect={FunctionValue}>
        {children}
      </Select>
    );
    const triggerButton = getByTestId('DesignSystem-Select-trigger');
    expect(triggerButton).toBeInTheDocument();
    fireEvent.click(triggerButton);
    const popover = getByTestId('DesignSystem-Popover');
    expect(popover).toBeInTheDocument();
    expect(popover).toHaveStyle('width: 200px');
  });

  it('check for onToggle event handler in select', () => {
    const onToggleFunctionValue = jest.fn();

    const { getByTestId } = render(
      <Select onSelect={FunctionValue} onToggle={onToggleFunctionValue}>
        {children}
      </Select>
    );
    const inputTrigger = getByTestId('DesignSystem-Select-trigger');
    expect(inputTrigger).toBeInTheDocument();

    fireEvent.click(inputTrigger);
    const popover = getByTestId('DesignSystem-Popover');
    expect(onToggleFunctionValue).toHaveBeenCalledWith(true);
    expect(popover).toBeInTheDocument();

    fireEvent.click(inputTrigger);
    expect(onToggleFunctionValue).toHaveBeenCalledWith(false);
  });

  it('check for onSelect event handler in single input trigger', () => {
    const { getByTestId } = render(<Select onSelect={FunctionValue}>{children}</Select>);
    const inputTrigger = getByTestId('DesignSystem-Select-trigger');
    expect(inputTrigger).toBeInTheDocument();

    fireEvent.click(inputTrigger);
    const popover = getByTestId('DesignSystem-Popover');
    expect(popover).toBeInTheDocument();

    const optionItem = getByTestId('DesignSystem-Select-Option');
    fireEvent.click(optionItem);

    expect(inputTrigger).toHaveTextContent('Option 1');
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for onChange event handler in single input trigger', () => {
    const { getByTestId } = render(<Select onSelect={FunctionValue}>{children}</Select>);
    const inputTrigger = getByTestId('DesignSystem-Select-trigger');
    expect(inputTrigger).toBeInTheDocument();

    fireEvent.change(inputTrigger, { target: { label: 'Option 2', value: 'Option 2' } });
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for onClear event handler in single input trigger', () => {
    const { getByTestId } = render(
      <Select triggerOptions={{ placeholder: placeholder }} onSelect={FunctionValue}>
        {children}
      </Select>
    );
    const inputTrigger = getByTestId('DesignSystem-Select-trigger');
    expect(inputTrigger).toBeInTheDocument();
    expect(inputTrigger).toHaveTextContent(placeholder);
    fireEvent.click(inputTrigger);
    const popover = getByTestId('DesignSystem-Popover');
    expect(popover).toBeInTheDocument();

    const optionItem = getByTestId('DesignSystem-Select-Option');
    fireEvent.click(optionItem);

    expect(inputTrigger).toHaveTextContent('Option 1');
    expect(FunctionValue).toHaveBeenCalled();

    const closeIcon = getByTestId('DesignSystem-Select--closeIcon');

    fireEvent.click(closeIcon);
    expect(FunctionValue).toHaveBeenCalled();
    expect(inputTrigger).toHaveTextContent(placeholder);
  });
});

describe('Select component multiple select trigger tests', () => {
  it('check for placeholder in multiple select trigger', () => {
    const { getByTestId } = render(
      <Select onSelect={FunctionValue} multiSelect={true} triggerOptions={{ placeholder: placeholder }}>
        {children}
      </Select>
    );
    const inputTrigger = getByTestId('DesignSystem-Select-trigger');
    expect(inputTrigger).toBeInTheDocument();
    expect(inputTrigger).toHaveTextContent(placeholder);
  });

  it('check for default value in multi select trigger', () => {
    const { getByTestId } = render(
      <Select onSelect={FunctionValue} multiSelect={true} value={multiSelectValue}>
        {children}
      </Select>
    );
    const inputTrigger = getByTestId('DesignSystem-Select-trigger');
    expect(inputTrigger).toBeInTheDocument();
    expect(inputTrigger).toHaveTextContent('Option 1');
  });

  it('check for onSelect event handler in multiselect', () => {
    const { getByTestId } = render(
      <Select multiSelect={true} onSelect={FunctionValue}>
        {children}
      </Select>
    );
    const inputTrigger = getByTestId('DesignSystem-Select-trigger');
    expect(inputTrigger).toBeInTheDocument();

    fireEvent.click(inputTrigger);
    const popover = getByTestId('DesignSystem-Popover');
    expect(popover).toBeInTheDocument();

    const optionItem = getByTestId('DesignSystem-Select-Option');
    fireEvent.click(optionItem);
    expect(FunctionValue).toHaveBeenCalledWith(multiSelectValue);
  });

  it('check for pre selected with more than 2 option in multiselect', () => {
    const preSelectedValue = [
      { label: 'Option 1', value: 'Option 1' },
      { label: 'Option 2', value: 'Option 2' },
      { label: 'Option 3', value: 'Option 3' },
    ];
    const setLabelHandler = (count: number) => `${count} custom label`;
    const { getByTestId } = render(
      <Select
        triggerOptions={{ setLabel: setLabelHandler }}
        value={preSelectedValue}
        multiSelect={true}
        onSelect={FunctionValue}
      >
        <Select.List>
          <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          <Select.Option option={{ label: 'Option 2', value: 'Option 2' }}>Option 1</Select.Option>
          <Select.Option option={{ label: 'Option 3', value: 'Option 3' }}>Option 1</Select.Option>
          <Select.Option option={{ label: 'Option 4', value: 'Option 4' }}>Option 1</Select.Option>
        </Select.List>
      </Select>
    );
    const inputTrigger = getByTestId('DesignSystem-Select-trigger');
    expect(inputTrigger).toBeInTheDocument();
    expect(inputTrigger).toHaveTextContent('3 custom label');
  });

  it('check for onClear event handler in multiselect input trigger', () => {
    const { getByTestId } = render(
      <Select multiSelect={true} onSelect={FunctionValue}>
        {children}
      </Select>
    );
    const inputTrigger = getByTestId('DesignSystem-Select-trigger');
    expect(inputTrigger).toBeInTheDocument();

    fireEvent.click(inputTrigger);
    const popover = getByTestId('DesignSystem-Popover');
    expect(popover).toBeInTheDocument();

    const optionItem = getByTestId('DesignSystem-Select-Option');
    fireEvent.click(optionItem);
    expect(FunctionValue).toHaveBeenCalledWith(multiSelectValue);

    const closeIcon = getByTestId('DesignSystem-Select--closeIcon');

    fireEvent.click(closeIcon);
    expect(inputTrigger).toHaveTextContent(placeholder);
  });
});

describe('Check for default value in single select', () => {
  const defaultValues = [
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 123 },
    { label: 'Option 3', value: { data: [{ label: 'Option 1', value: 'Option 1' }] } },
  ];

  test.each(defaultValues)('check for default value: %s', (defaultValue) => {
    const { getByTestId } = render(
      <Select onSelect={FunctionValue} value={defaultValue}>
        {children}
      </Select>
    );
    const inputTrigger = getByTestId('DesignSystem-Select-trigger');

    expect(inputTrigger).toBeInTheDocument();
    expect(inputTrigger).toHaveTextContent(defaultValue.label);
  });
});

describe('Pre-selected value shows as selected in option list', () => {
  it('should show pre-selected option as selected in single select', () => {
    const preSelectedValue = { label: 'Option 2', value: 'Option 2' };

    const { getByTestId, getAllByTestId } = render(
      <Select onSelect={FunctionValue} value={preSelectedValue}>
        <Select.List>
          <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          <Select.Option option={{ label: 'Option 2', value: 'Option 2' }}>Option 2</Select.Option>
          <Select.Option option={{ label: 'Option 3', value: 'Option 3' }}>Option 3</Select.Option>
        </Select.List>
      </Select>
    );

    const inputTrigger = getByTestId('DesignSystem-Select-trigger');
    expect(inputTrigger).toBeInTheDocument();
    expect(inputTrigger).toHaveTextContent('Option 2');

    fireEvent.click(inputTrigger);
    const popover = getByTestId('DesignSystem-Popover');
    expect(popover).toBeInTheDocument();

    const optionElements = getAllByTestId('DesignSystem-Select-Option');
    const itemElements = getAllByTestId('DesignSystem-Listbox-ItemWrapper');

    expect(optionElements).toHaveLength(3);

    const selectedOption = optionElements[1];
    expect(selectedOption).toHaveAttribute('aria-selected', 'true');
    expect(itemElements[1]).toHaveClass('Listbox-item--selected');
  });

  it('should show pre-selected options as selected in multi select', () => {
    const preSelectedValues = [
      { label: 'Option 1', value: 'Option 1' },
      { label: 'Option 3', value: 'Option 3' },
    ];

    const { getByTestId, getAllByTestId } = render(
      <Select multiSelect={true} onSelect={FunctionValue} value={preSelectedValues}>
        <Select.List>
          <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          <Select.Option option={{ label: 'Option 2', value: 'Option 2' }}>Option 2</Select.Option>
          <Select.Option option={{ label: 'Option 3', value: 'Option 3' }}>Option 3</Select.Option>
        </Select.List>
      </Select>
    );

    const inputTrigger = getByTestId('DesignSystem-Select-trigger');
    expect(inputTrigger).toBeInTheDocument();
    expect(inputTrigger).toHaveTextContent('Option 1, Option 3');

    fireEvent.click(inputTrigger);
    const popover = getByTestId('DesignSystem-Popover');
    expect(popover).toBeInTheDocument();

    const optionElements = getAllByTestId('DesignSystem-Select-Option');
    const itemElements = getAllByTestId('DesignSystem-Listbox-ItemWrapper');

    expect(optionElements).toHaveLength(3);

    const firstSelectedOption = optionElements[0];
    expect(firstSelectedOption).toHaveAttribute('aria-selected', 'true');
    expect(itemElements[0]).toHaveClass('Listbox-item--selected');

    const unselectedOption = optionElements[1];
    expect(unselectedOption).toHaveAttribute('aria-selected', 'false');
    expect(itemElements[1]).not.toHaveClass('Listbox-item--selected');

    const secondSelectedOption = optionElements[2];
    expect(secondSelectedOption).toHaveAttribute('aria-selected', 'true');
    expect(itemElements[2]).toHaveClass('Listbox-item--selected');
  });

  it('should show pre-selected option with checkbox as checked in multi select', () => {
    const preSelectedValue = [{ label: 'Option 2', value: 'Option 2' }];

    const { getByTestId, getAllByTestId } = render(
      <Select multiSelect={true} onSelect={FunctionValue} value={preSelectedValue}>
        <Select.List>
          <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          <Select.Option option={{ label: 'Option 2', value: 'Option 2' }}>Option 2</Select.Option>
          <Select.Option option={{ label: 'Option 3', value: 'Option 3' }}>Option 3</Select.Option>
        </Select.List>
      </Select>
    );

    const inputTrigger = getByTestId('DesignSystem-Select-trigger');
    expect(inputTrigger).toBeInTheDocument();
    expect(inputTrigger).toHaveTextContent('Option 2');

    fireEvent.click(inputTrigger);
    const popover = getByTestId('DesignSystem-Popover');
    expect(popover).toBeInTheDocument();

    const optionElements = getAllByTestId('DesignSystem-Select-Option');
    const itemElements = getAllByTestId('DesignSystem-Listbox-ItemWrapper');

    expect(optionElements).toHaveLength(3);

    const selectedOption = optionElements[1];
    expect(selectedOption).toHaveAttribute('aria-selected', 'true');
    expect(itemElements[1]).toHaveClass('Listbox-item--selected');

    const checkbox = selectedOption.querySelector('input[type="checkbox"]');
    expect(checkbox).toBeChecked();
  });

  it('should handle pre-selected value with different value types', () => {
    const preSelectedValue = { label: 'Option 2', value: 123 };

    const { getByTestId, getAllByTestId } = render(
      <Select onSelect={FunctionValue} value={preSelectedValue}>
        <Select.List>
          <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          <Select.Option option={{ label: 'Option 2', value: 123 }}>Option 2</Select.Option>
          <Select.Option option={{ label: 'Option 3', value: 'Option 3' }}>Option 3</Select.Option>
        </Select.List>
      </Select>
    );

    const inputTrigger = getByTestId('DesignSystem-Select-trigger');
    expect(inputTrigger).toBeInTheDocument();
    expect(inputTrigger).toHaveTextContent('Option 2');

    fireEvent.click(inputTrigger);
    const popover = getByTestId('DesignSystem-Popover');
    expect(popover).toBeInTheDocument();

    const optionElements = getAllByTestId('DesignSystem-Select-Option');
    const itemElements = getAllByTestId('DesignSystem-Listbox-ItemWrapper');
    expect(optionElements).toHaveLength(3);

    const selectedOption = optionElements[1];
    expect(selectedOption).toHaveAttribute('aria-selected', 'true');
    expect(itemElements[1]).toHaveClass('Listbox-item--selected');
  });
});

describe('Pre-selected value with nested object values', () => {
  it('should show pre-selected option as selected when value is a nested object', () => {
    const preSelectedValue = {
      label: 'Option 1',
      value: { label: '1', value: '1' },
    };

    const { getByTestId, getAllByTestId } = render(
      <Select onSelect={FunctionValue} value={preSelectedValue}>
        <Select.List>
          <Select.Option
            option={{
              label: 'Option 1',
              value: { label: '1', value: '1' },
            }}
          >
            Option 1
          </Select.Option>
          <Select.Option
            option={{
              label: 'Option 2',
              value: { label: '2', value: '2' },
            }}
          >
            Option 2
          </Select.Option>
          <Select.Option
            option={{
              label: 'Option 3',
              value: { label: '3', value: '3' },
            }}
          >
            Option 3
          </Select.Option>
        </Select.List>
      </Select>
    );

    const inputTrigger = getByTestId('DesignSystem-Select-trigger');
    expect(inputTrigger).toBeInTheDocument();
    expect(inputTrigger).toHaveTextContent('Option 1');

    fireEvent.click(inputTrigger);
    const popover = getByTestId('DesignSystem-Popover');
    expect(popover).toBeInTheDocument();

    const optionElements = getAllByTestId('DesignSystem-Select-Option');
    const itemElements = getAllByTestId('DesignSystem-Listbox-ItemWrapper');

    expect(optionElements).toHaveLength(3);

    const selectedOption = optionElements[0];
    expect(selectedOption).toHaveAttribute('aria-selected', 'true');
    expect(itemElements[0]).toHaveClass('Listbox-item--selected');
  });

  it('should show pre-selected options as selected in multi select with nested object values', () => {
    const preSelectedValues = [
      { label: 'Option 1', value: { label: '1', value: '1' } },
      { label: 'Option 3', value: { label: '3', value: '3' } },
    ];

    const { getByTestId, getAllByTestId } = render(
      <Select multiSelect={true} onSelect={FunctionValue} value={preSelectedValues}>
        <Select.List>
          <Select.Option
            option={{
              label: 'Option 1',
              value: { label: '1', value: '1' },
            }}
          >
            Option 1
          </Select.Option>
          <Select.Option
            option={{
              label: 'Option 2',
              value: { label: '2', value: '2' },
            }}
          >
            Option 2
          </Select.Option>
          <Select.Option
            option={{
              label: 'Option 3',
              value: { label: '3', value: '3' },
            }}
          >
            Option 3
          </Select.Option>
        </Select.List>
      </Select>
    );

    const inputTrigger = getByTestId('DesignSystem-Select-trigger');
    expect(inputTrigger).toBeInTheDocument();
    expect(inputTrigger).toHaveTextContent('Option 1, Option 3');

    fireEvent.click(inputTrigger);
    const popover = getByTestId('DesignSystem-Popover');
    expect(popover).toBeInTheDocument();

    const optionElements = getAllByTestId('DesignSystem-Select-Option');
    const itemElements = getAllByTestId('DesignSystem-Listbox-ItemWrapper');

    expect(optionElements).toHaveLength(3);

    const firstSelectedOption = optionElements[0];
    expect(firstSelectedOption).toHaveAttribute('aria-selected', 'true');
    expect(itemElements[0]).toHaveClass('Listbox-item--selected');

    const unselectedOption = optionElements[1];
    expect(unselectedOption).toHaveAttribute('aria-selected', 'false');
    expect(itemElements[1]).not.toHaveClass('Listbox-item--selected');

    const secondSelectedOption = optionElements[2];
    expect(secondSelectedOption).toHaveAttribute('aria-selected', 'true');
    expect(itemElements[2]).toHaveClass('Listbox-item--selected');
  });

  it('should handle mixed value types in the same select', () => {
    const preSelectedValue = {
      label: 'Option 2',
      value: { label: '2', value: '2' },
    };

    const { getByTestId, getAllByTestId } = render(
      <Select onSelect={FunctionValue} value={preSelectedValue}>
        <Select.List>
          <Select.Option option={{ label: 'Option 1', value: 'simple-string' }}>Option 1</Select.Option>
          <Select.Option
            option={{
              label: 'Option 2',
              value: { label: '2', value: '2' },
            }}
          >
            Option 2
          </Select.Option>
          <Select.Option option={{ label: 'Option 3', value: 123 }}>Option 3</Select.Option>
        </Select.List>
      </Select>
    );

    const inputTrigger = getByTestId('DesignSystem-Select-trigger');
    expect(inputTrigger).toBeInTheDocument();
    expect(inputTrigger).toHaveTextContent('Option 2');

    fireEvent.click(inputTrigger);
    const popover = getByTestId('DesignSystem-Popover');
    expect(popover).toBeInTheDocument();

    const optionElements = getAllByTestId('DesignSystem-Select-Option');
    const itemElements = getAllByTestId('DesignSystem-Listbox-ItemWrapper');

    expect(optionElements).toHaveLength(3);

    const selectedOption = optionElements[1];
    expect(selectedOption).toHaveAttribute('aria-selected', 'true');
    expect(itemElements[1]).toHaveClass('Listbox-item--selected');
  });

  it('should handle deeply nested object values', () => {
    const preSelectedValue = {
      label: 'Option 1',
      value: {
        id: 1,
        data: {
          label: '1',
          value: '1',
          metadata: { type: 'user', category: 'admin' },
        },
      },
    };

    const { getByTestId, getAllByTestId } = render(
      <Select onSelect={FunctionValue} value={preSelectedValue}>
        <Select.List>
          <Select.Option
            option={{
              label: 'Option 1',
              value: {
                id: 1,
                data: {
                  label: '1',
                  value: '1',
                  metadata: { type: 'user', category: 'admin' },
                },
              },
            }}
          >
            Option 1
          </Select.Option>
          <Select.Option
            option={{
              label: 'Option 2',
              value: {
                id: 2,
                data: {
                  label: '2',
                  value: '2',
                  metadata: { type: 'user', category: 'user' },
                },
              },
            }}
          >
            Option 2
          </Select.Option>
        </Select.List>
      </Select>
    );

    const inputTrigger = getByTestId('DesignSystem-Select-trigger');
    expect(inputTrigger).toBeInTheDocument();
    expect(inputTrigger).toHaveTextContent('Option 1');

    fireEvent.click(inputTrigger);
    const popover = getByTestId('DesignSystem-Popover');
    expect(popover).toBeInTheDocument();

    const optionElements = getAllByTestId('DesignSystem-Select-Option');
    const itemElements = getAllByTestId('DesignSystem-Listbox-ItemWrapper');

    expect(optionElements).toHaveLength(2);

    const selectedOption = optionElements[0];
    expect(selectedOption).toHaveAttribute('aria-selected', 'true');
    expect(itemElements[0]).toHaveClass('Listbox-item--selected');
  });

  it('should handle array values within nested objects', () => {
    const preSelectedValue = {
      label: 'Option 1',
      value: {
        label: '1',
        value: '1',
        tags: ['tag1', 'tag2', 'tag3'],
      },
    };

    const { getByTestId, getAllByTestId } = render(
      <Select onSelect={FunctionValue} value={preSelectedValue}>
        <Select.List>
          <Select.Option
            option={{
              label: 'Option 1',
              value: {
                label: '1',
                value: '1',
                tags: ['tag1', 'tag2', 'tag3'],
              },
            }}
          >
            Option 1
          </Select.Option>
          <Select.Option
            option={{
              label: 'Option 2',
              value: {
                label: '2',
                value: '2',
                tags: ['tag4', 'tag5'],
              },
            }}
          >
            Option 2
          </Select.Option>
        </Select.List>
      </Select>
    );

    const inputTrigger = getByTestId('DesignSystem-Select-trigger');
    expect(inputTrigger).toBeInTheDocument();
    expect(inputTrigger).toHaveTextContent('Option 1');

    fireEvent.click(inputTrigger);
    const popover = getByTestId('DesignSystem-Popover');
    expect(popover).toBeInTheDocument();

    const optionElements = getAllByTestId('DesignSystem-Select-Option');
    const itemElements = getAllByTestId('DesignSystem-Listbox-ItemWrapper');

    expect(optionElements).toHaveLength(2);

    const selectedOption = optionElements[0];
    expect(selectedOption).toHaveAttribute('aria-selected', 'true');
    expect(itemElements[0]).toHaveClass('Listbox-item--selected');
  });
});

describe('Render custom trigger in select', () => {
  const customTrigger = <AIIconButton data-test="AIIconButton-trigger" icon="import_contacts" type="button" />;

  it('check for custom trigger', () => {
    const { getByTestId } = render(
      <Select onSelect={FunctionValue} trigger={customTrigger}>
        {children}
      </Select>
    );
    const Trigger = getByTestId('AIIconButton-trigger');
    expect(Trigger).toBeInTheDocument();
    fireEvent.click(Trigger);
    const popover = getByTestId('DesignSystem-Popover');
    expect(popover).toBeInTheDocument();
  });
});
