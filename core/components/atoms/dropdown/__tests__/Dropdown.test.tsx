import * as React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { Dropdown } from '@/index';
import { DropdownProps as Props } from '@/index.type';
import { _isEqual } from '../utility';
import {
  storyOptions,
  storyWrapOptions,
  iconOptions,
  subInfoOptions,
  iconWithSubinfoOptions,
  dropdownOptions,
  fetchOptions,
  preSelectedOptions,
} from '../__stories__/Options';

const size = ['tiny', 'regular'];
const options = [storyOptions, iconOptions, subInfoOptions, iconWithSubinfoOptions];
const loadingType = ['DEFAULT', 'WITH_ICON', 'WITH_META', 'ICON_WITH_META'];
const dropdownAlign = ['left', 'right'];
const BooleanValue = [true, false];

const SectionOptions: any[] = [];
for (let i = 1; i <= 10; i++) {
  SectionOptions.push({
    label: `Option ${i}`,
    value: `Option ${i}`,
    group: 'Group',
  });
}

const FunctionValue = jest.fn();
const trigger = 'DesignSystem-DropdownTrigger';

const keyDownEvents = ['ArrowUp', 'ArrowDown', 'Enter', 'Tab', 'Default'];

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    triggerSize: valueHelper(size, { required: true, iterate: true }),
    options: valueHelper(storyOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Dropdown {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    align: valueHelper(dropdownAlign, { required: true, iterate: true }),
    options: valueHelper(storyOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Dropdown {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    options: valueHelper(storyOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Dropdown {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    options: valueHelper(options, { required: true, iterate: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Dropdown {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    checkboxes: valueHelper(true, { required: true }),
    showApplyButton: valueHelper(BooleanValue, { required: true, iterate: true }),
    options: valueHelper(storyOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Dropdown {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    options: valueHelper(SectionOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Dropdown {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    search: valueHelper(true, { required: true }),
    loading: valueHelper(BooleanValue, { required: true, iterate: true }),
    options: valueHelper(storyOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Dropdown {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    options: valueHelper(storyOptions, { required: true }),
    menu: valueHelper(BooleanValue, { required: true, iterate: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Dropdown {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    icon: valueHelper('events', { required: true }),
    options: valueHelper(storyOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Dropdown {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    inlineLabel: valueHelper('Label', { required: true }),
    options: valueHelper(storyOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Dropdown {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    truncateOptions: valueHelper(BooleanValue, { required: true, iterate: true }),
    options: valueHelper(storyWrapOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Dropdown {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    options: valueHelper(storyOptions, { required: true }),
    optionType: valueHelper(loadingType, { required: true, iterate: true }),
    loading: valueHelper(true, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Dropdown {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('renders dropdown', () => {
  it('renders popover', () => {
    const { getByTestId } = render(<Dropdown options={storyOptions} />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);

    expect(getByTestId('DesignSystem-Popover')).toBeInTheDocument();
  });
});

describe('renders async dropdown', () => {
  it('check prop:fetchOptions', () => {
    const { getByTestId, getAllByTestId } = render(<Dropdown fetchOptions={fetchOptions} />);
    const dropdownTrigger = getByTestId(trigger);

    fireEvent.click(dropdownTrigger);
    const searchInput = getByTestId('DesignSystem-Input');
    expect(searchInput).toBeInTheDocument();

    fireEvent.input(searchInput, { target: { value: 'Option 50' } });
    expect(getAllByTestId('DesignSystem-Dropdown--PlaceholderParagraph')).toHaveLength(10);
  });

  it('renders async search', async () => {
    const { getByTestId, getAllByTestId } = render(<Dropdown fetchOptions={fetchOptions} />);
    const dropdownTrigger = getByTestId(trigger);

    fireEvent.click(dropdownTrigger);
    const searchInput = getByTestId('DesignSystem-Input');
    expect(searchInput).toBeInTheDocument();

    fireEvent.input(searchInput, { target: { value: 'Option 30' } });
    expect(getAllByTestId('DesignSystem-Dropdown--PlaceholderParagraph')).toHaveLength(10);
    await waitFor(() => {
      expect(getAllByTestId('DesignSystem-DropdownOption--DEFAULT')).toHaveLength(50);
      expect(getAllByTestId('DesignSystem-DropdownOption--DEFAULT')[29]).toHaveTextContent('Option 30');
    });
  });

  it('renders async search with default fetchOptions', async () => {
    const { getByTestId, getAllByTestId } = render(<Dropdown fetchOptions={undefined} noResultMessage="No result" />);
    const dropdownTrigger = getByTestId(trigger);

    fireEvent.click(dropdownTrigger);
    const searchInput = getByTestId('DesignSystem-Input');
    expect(searchInput).toBeInTheDocument();
    fireEvent.change(searchInput, { target: { value: 'Option 30' } });

    await waitFor(() => {
      expect(getAllByTestId('DesignSystem-Dropdown--errorWrapper')).toHaveLength(1);
      expect(getByTestId('DesignSystem-Dropdown--errorWrapper')).toHaveTextContent('No result');
    });
  });
});

describe('Dropdown component', () => {
  it('check prop:showApplyButton', () => {
    const { getByTestId } = render(
      <Dropdown
        options={dropdownOptions}
        showApplyButton={true}
        withCheckbox={true}
        withSearch={false}
        totalOptions={dropdownOptions.length}
      />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    expect(getByTestId('DesignSystem-Dropdown-CancelButton')).toHaveTextContent('Cancel');
    expect(getByTestId('DesignSystem-Dropdown-ApplyButton')).toHaveTextContent('Apply');
  });

  it('check checkbox classes with onClick event', () => {
    const { getByTestId, getAllByTestId } = render(
      <Dropdown options={storyOptions} showApplyButton={true} withCheckbox={true} withSearch={false} />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    const optionList = getAllByTestId('DesignSystem-Checkbox-Label');
    fireEvent.click(optionList[1]);
    expect(getAllByTestId('DesignSystem-Checkbox-InputBox')[1]).toHaveClass('Checkbox-input--checked');
  });

  it('check checkbox classes with mouseEnter event', () => {
    const { getByTestId, getAllByTestId } = render(
      <Dropdown options={storyOptions} showApplyButton={true} withCheckbox={true} withSearch={false} />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    const optionList = getAllByTestId('DesignSystem-DropdownOption--WITH_CHECKBOX');
    fireEvent.mouseEnter(optionList[1]);
    expect(optionList[1]).toHaveClass('Option-checkbox--active');
  });
});

describe('renders dropdown component onKeyDown Handler', () => {
  const dropdownListId = 'DesignSystem-DropdownList-Wrapper';
  keyDownEvents.forEach((action) => {
    it(`checks for keyDown ${action} event with dropdownOpen set as true `, () => {
      const { getByTestId } = render(
        <Dropdown
          options={storyOptions}
          showApplyButton={true}
          withCheckbox={true}
          withSearch={false}
          data-test={dropdownListId}
        />
      );
      const dropdownTrigger = getByTestId(trigger);
      fireEvent.click(dropdownTrigger);
      fireEvent.keyDown(getByTestId(dropdownListId), { key: action });
      expect(getByTestId('DesignSystem-Popover')).toBeInTheDocument();
    });

    it(`checks for keyDown ${action} event with dropdownOpen set as false `, () => {
      const { getByTestId } = render(
        <Dropdown options={storyOptions} withCheckbox={true} withSearch={false} data-test={dropdownListId} />
      );
      fireEvent.keyDown(getByTestId(dropdownListId), { key: action });
      expect(getByTestId('DesignSystem-DropdownTrigger')).toBeInTheDocument();
    });
  });

  it('checks for keyDown Tab event with showApplyButton as false', () => {
    const { getByTestId } = render(
      <Dropdown
        options={storyOptions}
        showApplyButton={false}
        withCheckbox={true}
        withSearch={false}
        data-test={dropdownListId}
      />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    fireEvent.keyDown(getByTestId(dropdownListId), { key: 'Tab' });
    expect(screen.queryByText('DesignSystem-Popover')).not.toBeInTheDocument();
  });

  it('checks for keyDown Tab event with showApplyButton as false', () => {
    const { getByTestId } = render(
      <Dropdown
        options={storyOptions}
        showApplyButton={true}
        withCheckbox={true}
        withSearch={false}
        data-test={dropdownListId}
      />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    fireEvent.keyDown(getByTestId(dropdownListId), { key: 'Tab' });
    expect(screen.queryByText('DesignSystem-Popover')).not.toBeInTheDocument();
  });
});

describe('Dropdown component utility function', () => {
  it('checks isEqual utility function', () => {
    expect(_isEqual(storyOptions, iconOptions));
  });

  it('checks isEqual utility function with same label', () => {
    const Options = [
      {
        label: 'Design System Dropdown',
        value: 'Options 1',
      },
      {
        label: 'UI Kit Dropdown',
        value: 'Options 2',
      },
      {
        label: 'Innovaccer Analytics',
        value: 'Options 3',
      },
    ];
    expect(_isEqual(storyWrapOptions, Options));
  });
});

describe('Dropdown component action buttons', () => {
  it('check cancelButton click handler', async () => {
    const { getByTestId, getAllByTestId } = render(
      <Dropdown
        options={preSelectedOptions}
        showApplyButton={true}
        withCheckbox={true}
        withSearch={false}
        onUpdate={FunctionValue}
      />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);

    await waitFor(() => {
      expect(getAllByTestId('DesignSystem-DropdownOption--WITH_CHECKBOX')[1]).toBeInTheDocument();
    });
    expect(getByTestId('DesignSystem-Dropdown-CancelButton')).toHaveTextContent('Cancel');
    fireEvent.click(getAllByTestId('DesignSystem-DropdownOption--WITH_CHECKBOX')[1]);
    fireEvent.click(getByTestId('DesignSystem-Dropdown-CancelButton'));
    expect(screen.queryByText('DesignSystem-Popover')).not.toBeInTheDocument();
  });
});

describe('Dropdown component with search', () => {
  it('check:prop searchPlaceholder', () => {
    const { getByTestId } = render(
      <Dropdown options={dropdownOptions} withSearch={true} searchPlaceholder="Custom search text" />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    expect(screen.getByPlaceholderText('Custom search text')).toBeInTheDocument();
  });
});

describe('Dropdown component', () => {
  const onUpdateCallback = jest.fn();
  const options = [
    {
      label: `Option 1`,
      value: `Option 1`,
      group: 'Group 1',
      icon: 'events',
      subInfo: 'subInfo',
    },
  ];

  it('check for selecting already selected value in menu dropdown', async () => {
    const { getByTestId, getAllByTestId } = render(
      <Dropdown options={dropdownOptions} menu={true} onChange={FunctionValue} />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    let optionList: HTMLElement[] = [];

    await waitFor(() => {
      optionList = getAllByTestId('DesignSystem-DropdownOption--DEFAULT');
    });
    fireEvent.click(optionList[1]);
    fireEvent.click(optionList[1]);
    expect(FunctionValue).toHaveBeenCalledTimes(2);
  });

  it('check for selecting already selected value in dropdown', async () => {
    jest.resetAllMocks();
    const { getByTestId, getAllByTestId } = render(<Dropdown options={dropdownOptions} onChange={FunctionValue} />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    let optionList: HTMLElement[] = [];

    await waitFor(() => {
      optionList = getAllByTestId('DesignSystem-DropdownOption--DEFAULT');
    });
    fireEvent.click(optionList[0]);
    fireEvent.click(optionList[0]);
    expect(FunctionValue).toHaveBeenCalledTimes(1);
  });

  it('check for selecting already selected value in controlled menu dropdown', async () => {
    const { getByTestId, getAllByTestId } = render(
      <Dropdown options={dropdownOptions} menu={true} selected={options} onUpdate={onUpdateCallback} />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    let optionList: HTMLElement[] = [];

    await waitFor(() => {
      optionList = getAllByTestId('DesignSystem-DropdownOption--DEFAULT');
    });
    fireEvent.click(optionList[0]);
    expect(onUpdateCallback).toHaveBeenCalledTimes(1);
  });

  it('check for selecting already selected value in controlled dropdown', async () => {
    jest.resetAllMocks();
    const { getByTestId, getAllByTestId } = render(
      <Dropdown options={dropdownOptions} selected={options} onUpdate={onUpdateCallback} />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    let optionList: HTMLElement[] = [];

    await waitFor(() => {
      optionList = getAllByTestId('DesignSystem-DropdownOption--DEFAULT');
    });
    fireEvent.click(optionList[0]);
    expect(onUpdateCallback).not.toHaveBeenCalled();
  });
});

describe('Dropdown component with actions buttons', () => {
  it('check for apply button state when options are loading', async () => {
    const { getByTestId, getAllByTestId } = render(
      <Dropdown fetchOptions={fetchOptions} withCheckbox={true} showApplyButton={true} />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);

    expect(getByTestId('DesignSystem-Dropdown-ApplyButton')).toHaveAttribute('disabled');
    let optionList: HTMLElement[] = [];

    // wait for options to load
    await waitFor(() => {
      optionList = getAllByTestId('DesignSystem-Checkbox-Label');
    });
    fireEvent.click(optionList[1]);
    const applyButton = getByTestId('DesignSystem-Dropdown-ApplyButton');
    expect(applyButton).not.toHaveAttribute('disabled');
    fireEvent.click(applyButton);

    // reopen the dropdown
    fireEvent.click(dropdownTrigger);
    await waitFor(() => {
      optionList = getAllByTestId('DesignSystem-Checkbox-Label');
    });

    // check for previously selected option is in selected state
    const selectedOption = getAllByTestId('DesignSystem-Checkbox-InputBox')[0];
    expect(selectedOption).toHaveAttribute('checked');

    // unselect the previously selected option
    fireEvent.click(selectedOption);
    const loader = getAllByTestId('DesignSystem-Dropdown--Placeholder')[0];

    // check if applyButton is disabled while options are loading
    expect(loader).toBeInTheDocument();
    expect(applyButton).toHaveAttribute('disabled');
  });

  it('check for apply button state when same options are selected', async () => {
    const { getByTestId, getAllByTestId } = render(
      <Dropdown fetchOptions={fetchOptions} withCheckbox={true} showApplyButton={true} />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);

    expect(getByTestId('DesignSystem-Dropdown-ApplyButton')).toHaveAttribute('disabled');
    let optionList: HTMLElement[] = [];

    // wait for options to load
    await waitFor(() => {
      optionList = getAllByTestId('DesignSystem-Checkbox-Label');
    });

    // select first two options from dropdown list
    fireEvent.click(optionList[1]);
    fireEvent.click(optionList[2]);

    const applyButton = getByTestId('DesignSystem-Dropdown-ApplyButton');
    expect(applyButton).not.toHaveAttribute('disabled');
    fireEvent.click(applyButton);

    // reopen the dropdown
    fireEvent.click(dropdownTrigger);
    await waitFor(() => {
      optionList = getAllByTestId('DesignSystem-Checkbox-Label');
    });

    // check for previously selected option is in selected state
    const selectedOption = getAllByTestId('DesignSystem-Checkbox-InputBox');
    expect(applyButton).toHaveAttribute('disabled');

    // Deselect the previously selected option
    fireEvent.click(selectedOption[0]);
    expect(applyButton).not.toHaveAttribute('disabled');

    // applyButton should be disabled if same options are selected
    fireEvent.click(selectedOption[0]);
    expect(applyButton).toHaveAttribute('disabled');

    // enable apply button when different options are selected
    fireEvent.click(selectedOption[4]);
    expect(applyButton).not.toHaveAttribute('disabled');
  });
});
