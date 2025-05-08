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

  // it('check for onToggle event handler in select', () => {
  //   const onToggleFunctionValue = jest.fn();

  //   const { getByTestId } = render(
  //     <Select onSelect={FunctionValue} onToggle={onToggleFunctionValue}>
  //       {children}
  //     </Select>
  //   );
  //   const inputTrigger = getByTestId('DesignSystem-Select-trigger');
  //   expect(inputTrigger).toBeInTheDocument();

  //   fireEvent.click(inputTrigger);
  //   const popover = getByTestId('DesignSystem-Popover');
  //   expect(onToggleFunctionValue).toHaveBeenCalledWith(true);
  //   expect(popover).toBeInTheDocument();

  //   fireEvent.click(inputTrigger);
  //   expect(onToggleFunctionValue).toHaveBeenCalledWith(false);
  // });

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

describe('Select component size functionality tests', () => {
  describe('SelectList size prop integration with Listbox component', () => {
    it('should pass size prop to Listbox component and apply correct CSS classes for tight size', () => {
      const { getByTestId, getAllByTestId } = render(
        <Select onSelect={FunctionValue}>
          <Select.List size="tight">
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
            <Select.Option option={{ label: 'Option 2', value: 'Option 2' }}>Option 2</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      fireEvent.click(triggerButton);

      const listboxItems = getAllByTestId('DesignSystem-Listbox-ItemWrapper');
      expect(listboxItems).toHaveLength(2);

      listboxItems.forEach((item) => {
        expect(item).toHaveClass('Listbox-item--tight');
      });
    });

    it('should pass size prop to Listbox component and apply correct CSS classes for compressed size', () => {
      const { getByTestId, getAllByTestId } = render(
        <Select onSelect={FunctionValue}>
          <Select.List size="compressed">
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
            <Select.Option option={{ label: 'Option 2', value: 'Option 2' }}>Option 2</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      fireEvent.click(triggerButton);

      const listboxItems = getAllByTestId('DesignSystem-Listbox-ItemWrapper');
      expect(listboxItems).toHaveLength(2);

      listboxItems.forEach((item) => {
        expect(item).toHaveClass('Listbox-item--compressed');
      });
    });

    it('should pass size prop to Listbox component and apply correct CSS classes for standard size', () => {
      const { getByTestId, getAllByTestId } = render(
        <Select onSelect={FunctionValue}>
          <Select.List size="standard">
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
            <Select.Option option={{ label: 'Option 2', value: 'Option 2' }}>Option 2</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      fireEvent.click(triggerButton);

      const listboxItems = getAllByTestId('DesignSystem-Listbox-ItemWrapper');
      expect(listboxItems).toHaveLength(2);

      listboxItems.forEach((item) => {
        expect(item).toHaveClass('Listbox-item--standard');
      });
    });

    it('should use default compressed size when no size prop is provided to SelectList', () => {
      const { getByTestId, getAllByTestId } = render(
        <Select onSelect={FunctionValue}>
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      fireEvent.click(triggerButton);

      const listboxItems = getAllByTestId('DesignSystem-Listbox-ItemWrapper');
      expect(listboxItems).toHaveLength(1);

      expect(listboxItems[0]).toHaveClass('Listbox-item--compressed');
    });
  });

  describe('SelectOption size inheritance from ListboxContext', () => {
    it('should inherit size from parent SelectList through ListboxContext', () => {
      const { getByTestId, getAllByTestId } = render(
        <Select onSelect={FunctionValue}>
          <Select.List size="tight">
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
            <Select.Option option={{ label: 'Option 2', value: 'Option 2' }}>Option 2</Select.Option>
            <Select.Option option={{ label: 'Option 3', value: 'Option 3' }}>Option 3</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      fireEvent.click(triggerButton);

      const optionElements = getAllByTestId('DesignSystem-Select-Option');
      const listboxItems = getAllByTestId('DesignSystem-Listbox-ItemWrapper');

      expect(optionElements).toHaveLength(3);
      expect(listboxItems).toHaveLength(3);

      listboxItems.forEach((item) => {
        expect(item).toHaveClass('Listbox-item--tight');
      });
    });

    it('should maintain size consistency across all SelectOptions in a SelectList', () => {
      const { getByTestId, getAllByTestId } = render(
        <Select onSelect={FunctionValue}>
          <Select.List size="standard">
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
            <Select.Option option={{ label: 'Option 2', value: 'Option 2' }}>Option 2</Select.Option>
            <Select.Option option={{ label: 'Option 3', value: 'Option 3' }}>Option 3</Select.Option>
            <Select.Option option={{ label: 'Option 4', value: 'Option 4' }}>Option 4</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      fireEvent.click(triggerButton);

      const listboxItems = getAllByTestId('DesignSystem-Listbox-ItemWrapper');
      expect(listboxItems).toHaveLength(4);

      listboxItems.forEach((item) => {
        expect(item).toHaveClass('Listbox-item--standard');
        expect(item).not.toHaveClass('Listbox-item--tight');
        expect(item).not.toHaveClass('Listbox-item--compressed');
      });
    });
  });

  describe('SearchInput size prop integration', () => {
    it('should accept size prop and pass it to Input component for tiny size', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue}>
          <Select.SearchInput size="tiny" placeholder="Search options" />
          <Select.List size="tight">
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      fireEvent.click(triggerButton);

      const searchInput = getByTestId('DesignSystem-Select--Input');
      expect(searchInput).toBeInTheDocument();

      // Check that the Input wrapper has the tiny size class
      const inputWrapper = getByTestId('DesignSystem-InputWrapper');
      expect(inputWrapper).toHaveClass('Input--tiny');
    });

    it('should accept size prop and pass it to Input component for regular size', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue}>
          <Select.SearchInput size="regular" placeholder="Search options" />
          <Select.List size="standard">
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      fireEvent.click(triggerButton);

      const searchInput = getByTestId('DesignSystem-Select--Input');
      expect(searchInput).toBeInTheDocument();

      // Check that the Input wrapper has the regular size class
      const inputWrapper = getByTestId('DesignSystem-InputWrapper');
      expect(inputWrapper).toHaveClass('Input--regular');
    });

    it('should work without size prop when not provided to SearchInput', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue}>
          <Select.SearchInput placeholder="Search options" />
          <Select.List size="compressed">
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      fireEvent.click(triggerButton);

      const searchInput = getByTestId('DesignSystem-Select--Input');
      expect(searchInput).toBeInTheDocument();

      // Should use default regular size when no size prop provided
      const inputWrapper = getByTestId('DesignSystem-InputWrapper');
      expect(inputWrapper).toHaveClass('Input--regular');
    });
  });

  describe('Integrated size scenarios with trigger, list, and search input', () => {
    it('should handle small trigger with tight list and tiny search input', () => {
      const { getByTestId, getAllByTestId } = render(
        <Select onSelect={FunctionValue} triggerOptions={{ triggerSize: 'small' }}>
          <Select.SearchInput size="tiny" placeholder="Search medicines..." />
          <Select.List size="tight">
            <Select.Option option={{ label: 'Aspirin', value: 'Aspirin' }}>Aspirin</Select.Option>
            <Select.Option option={{ label: 'Paracetamol', value: 'Paracetamol' }}>Paracetamol</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).toHaveClass('Select-trigger--small');

      fireEvent.click(triggerButton);

      const inputWrapper = getByTestId('DesignSystem-InputWrapper');
      expect(inputWrapper).toHaveClass('Input--tiny');

      const listboxItems = getAllByTestId('DesignSystem-Listbox-ItemWrapper');
      expect(listboxItems).toHaveLength(2);
      listboxItems.forEach((item) => {
        expect(item).toHaveClass('Listbox-item--tight');
      });
    });

    it('should handle regular trigger with compressed list and regular search input', () => {
      const { getByTestId, getAllByTestId } = render(
        <Select onSelect={FunctionValue} triggerOptions={{ triggerSize: 'regular' }}>
          <Select.SearchInput size="regular" placeholder="Search medicines..." />
          <Select.List size="compressed">
            <Select.Option option={{ label: 'Aspirin', value: 'Aspirin' }}>Aspirin</Select.Option>
            <Select.Option option={{ label: 'Paracetamol', value: 'Paracetamol' }}>Paracetamol</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).toHaveClass('Select-trigger--regular');

      fireEvent.click(triggerButton);

      const inputWrapper = getByTestId('DesignSystem-InputWrapper');
      expect(inputWrapper).toHaveClass('Input--regular');

      const listboxItems = getAllByTestId('DesignSystem-Listbox-ItemWrapper');
      expect(listboxItems).toHaveLength(2);
      listboxItems.forEach((item) => {
        expect(item).toHaveClass('Listbox-item--compressed');
      });
    });

    it('should handle mixed sizes independently without conflicts', () => {
      const { getByTestId, getAllByTestId } = render(
        <Select onSelect={FunctionValue} triggerOptions={{ triggerSize: 'small' }}>
          <Select.SearchInput size="regular" placeholder="Search..." />
          <Select.List size="standard">
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
            <Select.Option option={{ label: 'Option 2', value: 'Option 2' }}>Option 2</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).toHaveClass('Select-trigger--small');

      fireEvent.click(triggerButton);

      const inputWrapper = getByTestId('DesignSystem-InputWrapper');
      expect(inputWrapper).toHaveClass('Input--regular');

      const listboxItems = getAllByTestId('DesignSystem-Listbox-ItemWrapper');
      expect(listboxItems).toHaveLength(2);
      listboxItems.forEach((item) => {
        expect(item).toHaveClass('Listbox-item--standard');
      });
    });
  });

  describe('Size functionality with multiselect scenarios', () => {
    it('should maintain size consistency in multiselect with tight list options', () => {
      const { getByTestId, getAllByTestId } = render(
        <Select multiSelect={true} onSelect={FunctionValue}>
          <Select.List size="tight">
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
            <Select.Option option={{ label: 'Option 2', value: 'Option 2' }}>Option 2</Select.Option>
            <Select.Option option={{ label: 'Option 3', value: 'Option 3' }}>Option 3</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      fireEvent.click(triggerButton);

      const listboxItems = getAllByTestId('DesignSystem-Listbox-ItemWrapper');
      const checkboxes = getAllByTestId('DesignSystem-Checkbox');

      expect(listboxItems).toHaveLength(3);
      expect(checkboxes).toHaveLength(3);

      listboxItems.forEach((item) => {
        expect(item).toHaveClass('Listbox-item--tight');
      });
    });

    it('should handle multiselect with search input and compressed list size', () => {
      const { getByTestId, getAllByTestId } = render(
        <Select multiSelect={true} onSelect={FunctionValue}>
          <Select.SearchInput size="tiny" placeholder="Search options..." />
          <Select.List size="compressed">
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
            <Select.Option option={{ label: 'Option 2', value: 'Option 2' }}>Option 2</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      fireEvent.click(triggerButton);

      const inputWrapper = getByTestId('DesignSystem-InputWrapper');
      expect(inputWrapper).toHaveClass('Input--tiny');

      const listboxItems = getAllByTestId('DesignSystem-Listbox-ItemWrapper');
      const checkboxes = getAllByTestId('DesignSystem-Checkbox');

      expect(listboxItems).toHaveLength(2);
      expect(checkboxes).toHaveLength(2);

      listboxItems.forEach((item) => {
        expect(item).toHaveClass('Listbox-item--compressed');
      });
    });
  });

  describe('Size functionality edge cases and error handling', () => {
    it('should handle invalid size prop gracefully and fallback to defaults', () => {
      const { getByTestId, getAllByTestId } = render(
        <Select onSelect={FunctionValue}>
          <Select.List size={'invalid-size' as any}>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      fireEvent.click(triggerButton);

      const listboxItems = getAllByTestId('DesignSystem-Listbox-ItemWrapper');
      expect(listboxItems).toHaveLength(1);

      expect(listboxItems[0]).toBeInTheDocument();
    });

    it('should handle SearchInput with invalid size prop gracefully', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue}>
          <Select.SearchInput size={'invalid-size' as any} placeholder="Search..." />
          <Select.List size="standard">
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      fireEvent.click(triggerButton);

      const searchInput = getByTestId('DesignSystem-Select--Input');
      expect(searchInput).toBeInTheDocument();

      // Should still render with invalid size, but may not apply expected classes
      expect(searchInput).toBeInTheDocument();
    });

    it('should handle empty SelectList with size prop', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue}>
          <Select.List size="tight">{<></>}</Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      fireEvent.click(triggerButton);

      const popover = getByTestId('DesignSystem-Popover');
      expect(popover).toBeInTheDocument();

      const listbox = getByTestId('DesignSystem-Listbox');
      expect(listbox).toBeInTheDocument();
    });
  });

  describe('Select component with styleType prop - Tests for filled and outlined variants', () => {
    it('should render Select with default styleType as "filled" and apply correct CSS class to trigger', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue}>
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).toHaveClass('Select-trigger--filled');
    });

    it('should render Select with styleType="filled" and apply Select-trigger--filled class', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue} styleType="filled">
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).toHaveClass('Select-trigger--filled');
    });

    it('should render Select with styleType="outlined" and apply Select-trigger--outlined class', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue} styleType="outlined">
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).toHaveClass('Select-trigger--outlined');
    });

    it('should apply Select-trigger--filledPlaceholder class when no option is selected in filled variant', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue} styleType="filled">
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).toHaveClass('Select-trigger--filledPlaceholder');
    });

    it('should apply Select-trigger--outlinedPlaceholder class when no option is selected in outlined variant', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue} styleType="outlined">
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).toHaveClass('Select-trigger--outlinedPlaceholder');
    });

    it('should apply Select-trigger--filledOpen class when filled Select is opened', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue} styleType="filled">
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      fireEvent.click(triggerButton);

      expect(triggerButton).toHaveClass('Select-trigger--filledOpen');
    });

    it('should apply Select-trigger--outlinedOpen class when outlined Select is opened', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue} styleType="outlined">
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      fireEvent.click(triggerButton);

      expect(triggerButton).toHaveClass('Select-trigger--outlinedOpen');
    });

    it('should work correctly with styleType="outlined" and different trigger sizes', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue} styleType="outlined" triggerOptions={{ triggerSize: 'small' }}>
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).toHaveClass('Select-trigger--outlined');
      expect(triggerButton).toHaveClass('Select-trigger--small');
    });

    it('should work correctly with styleType="filled" and different trigger sizes', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue} styleType="filled" triggerOptions={{ triggerSize: 'regular' }}>
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).toHaveClass('Select-trigger--filled');
      expect(triggerButton).toHaveClass('Select-trigger--regular');
    });

    it('should maintain styleType classes after selecting an option', () => {
      const { getByTestId, getAllByTestId } = render(
        <Select onSelect={FunctionValue} styleType="outlined">
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
            <Select.Option option={{ label: 'Option 2', value: 'Option 2' }}>Option 2</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      fireEvent.click(triggerButton);

      const options = getAllByTestId('DesignSystem-Listbox-ItemWrapper');
      fireEvent.click(options[0]);

      expect(triggerButton).toHaveClass('Select-trigger--outlined');
      expect(triggerButton).not.toHaveClass('Select-trigger--outlinedPlaceholder');
    });

    it('should work with multiSelect and styleType="outlined"', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue} multiSelect={true} styleType="outlined">
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
            <Select.Option option={{ label: 'Option 2', value: 'Option 2' }}>Option 2</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).toHaveClass('Select-trigger--outlined');
    });
  });

  describe('Select component with error prop - Tests for error state styling', () => {
    it('should not apply error class by default when error prop is not provided', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue}>
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).not.toHaveClass('Select-trigger--error');
    });

    it('should not apply error class when error={false}', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue} error={false}>
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).not.toHaveClass('Select-trigger--error');
    });

    it('should apply Select-trigger--error class when error={true}', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue} error={true}>
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).toHaveClass('Select-trigger--error');
    });

    it('should apply error class along with styleType="filled" class', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue} error={true} styleType="filled">
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).toHaveClass('Select-trigger--error');
      expect(triggerButton).toHaveClass('Select-trigger--filled');
    });

    it('should apply error class along with styleType="outlined" class', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue} error={true} styleType="outlined">
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).toHaveClass('Select-trigger--error');
      expect(triggerButton).toHaveClass('Select-trigger--outlined');
    });

    it('should maintain error class when Select is opened', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue} error={true}>
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      fireEvent.click(triggerButton);

      expect(triggerButton).toHaveClass('Select-trigger--error');
    });

    it('should maintain error class after selecting an option', () => {
      const { getByTestId, getAllByTestId } = render(
        <Select onSelect={FunctionValue} error={true}>
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
            <Select.Option option={{ label: 'Option 2', value: 'Option 2' }}>Option 2</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      fireEvent.click(triggerButton);

      const options = getAllByTestId('DesignSystem-Listbox-ItemWrapper');
      fireEvent.click(options[0]);

      expect(triggerButton).toHaveClass('Select-trigger--error');
    });

    it('should work with error prop, multiSelect, and styleType together', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue} error={true} multiSelect={true} styleType="outlined">
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
            <Select.Option option={{ label: 'Option 2', value: 'Option 2' }}>Option 2</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).toHaveClass('Select-trigger--error');
      expect(triggerButton).toHaveClass('Select-trigger--outlined');
    });

    it('should work with error prop and different trigger sizes', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue} error={true} triggerOptions={{ triggerSize: 'small' }}>
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).toHaveClass('Select-trigger--error');
      expect(triggerButton).toHaveClass('Select-trigger--small');
    });

    it('should apply error class along with placeholder class when no option is selected', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue} error={true}>
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).toHaveClass('Select-trigger--error');
      expect(triggerButton).toHaveClass('Select-trigger--filledPlaceholder');
    });
  });

  describe('Select component integration tests - styleType and error prop combinations', () => {
    it('should correctly apply all classes when using filled styleType with error and small size', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue} styleType="filled" error={true} triggerOptions={{ triggerSize: 'small' }}>
          <Select.List size="tight">
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).toHaveClass('Select-trigger--filled');
      expect(triggerButton).toHaveClass('Select-trigger--error');
      expect(triggerButton).toHaveClass('Select-trigger--small');
      expect(triggerButton).toHaveClass('Select-trigger--filledPlaceholder');
    });

    it('should correctly apply all classes when using outlined styleType with error and regular size', () => {
      const { getByTestId } = render(
        <Select onSelect={FunctionValue} styleType="outlined" error={true} triggerOptions={{ triggerSize: 'regular' }}>
          <Select.List size="compressed">
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).toHaveClass('Select-trigger--outlined');
      expect(triggerButton).toHaveClass('Select-trigger--error');
      expect(triggerButton).toHaveClass('Select-trigger--regular');
      expect(triggerButton).toHaveClass('Select-trigger--outlinedPlaceholder');
    });

    it('should handle dynamic changes to error prop correctly', () => {
      const { getByTestId, rerender } = render(
        <Select onSelect={FunctionValue} error={false}>
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).not.toHaveClass('Select-trigger--error');

      rerender(
        <Select onSelect={FunctionValue} error={true}>
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      expect(triggerButton).toHaveClass('Select-trigger--error');
    });

    it('should handle styleType change from filled to outlined correctly', () => {
      const { getByTestId, rerender } = render(
        <Select onSelect={FunctionValue} styleType="filled">
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).toHaveClass('Select-trigger--filled');

      rerender(
        <Select onSelect={FunctionValue} styleType="outlined">
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
          </Select.List>
        </Select>
      );

      expect(triggerButton).toHaveClass('Select-trigger--outlined');
      expect(triggerButton).not.toHaveClass('Select-trigger--filled');
    });

    it('should work correctly with pre-selected value, styleType, and error prop', () => {
      const { getByTestId } = render(
        <Select
          onSelect={FunctionValue}
          styleType="outlined"
          error={true}
          value={{ label: 'Option 1', value: 'Option 1' }}
        >
          <Select.List>
            <Select.Option option={{ label: 'Option 1', value: 'Option 1' }}>Option 1</Select.Option>
            <Select.Option option={{ label: 'Option 2', value: 'Option 2' }}>Option 2</Select.Option>
          </Select.List>
        </Select>
      );

      const triggerButton = getByTestId('DesignSystem-Select-trigger');
      expect(triggerButton).toHaveClass('Select-trigger--outlined');
      expect(triggerButton).toHaveClass('Select-trigger--error');
      expect(triggerButton).not.toHaveClass('Select-trigger--outlinedPlaceholder');
    });
  });
});
