import * as React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Dropdown } from '@/index';

import {
  storyOptions,
  iconOptions,
  subInfoOptions,
  disabledStoryOptions,
  iconWithSubinfoOptions,
  groupedStoryOptions,
  preSelectedOptions,
} from '../__stories__/Options';

const FunctionValue = jest.fn();
const trigger = 'DesignSystem-DropdownTrigger';

describe('renders different options', () => {
  it('renders DEFAULT options', () => {
    const { getAllByTestId, getByTestId } = render(<Dropdown options={storyOptions} />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    expect(getAllByTestId('DesignSystem-DropdownOption--DEFAULT')).toHaveLength(storyOptions.length);
    expect(getAllByTestId('DesignSystem-DropdownOption--DEFAULT')[0].textContent).toMatch(storyOptions[0].label);
    expect(getAllByTestId('DesignSystem-DropdownOption--DEFAULT')[0]).toHaveClass('color-inverse');
  });

  it('renders WITH_ICON options', () => {
    const { getAllByTestId, getByTestId } = render(<Dropdown options={iconOptions} optionType="WITH_ICON" />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    expect(getAllByTestId('DesignSystem-DropdownOption--WITH_ICON')).toHaveLength(iconOptions.length);
    expect(getAllByTestId('DesignSystem-DropdownOption--WITH_ICON')[0].textContent).toMatch(iconOptions[0].label);
    expect(getAllByTestId('DesignSystem-DropdownOption--WITH_ICON--Icon')[0].textContent).toMatch(iconOptions[0].icon);
    expect(getAllByTestId('DesignSystem-DropdownOption--WITH_ICON')[0]).toHaveClass('color-inverse');
  });

  it('renders WITH_META options', () => {
    const { getAllByTestId, getByTestId } = render(<Dropdown options={subInfoOptions} optionType="WITH_META" />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    expect(getAllByTestId('DesignSystem-DropdownOption--WITH_META')).toHaveLength(subInfoOptions.length);
    expect(getAllByTestId('DesignSystem-DropdownOption--WITH_META')[0].textContent).toMatch(subInfoOptions[0].label);
    expect(getAllByTestId('DesignSystem-DropdownOption--WITH_META--Meta')[0].textContent).toMatch(
      subInfoOptions[0].subInfo
    );
    expect(getAllByTestId('DesignSystem-DropdownOption--WITH_META')[0]).toHaveClass('color-inverse');
  });

  it('renders WITH_CHECKBOX options', () => {
    const { getAllByTestId, getByTestId } = render(<Dropdown options={storyOptions} withCheckbox={true} />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    expect(getAllByTestId('DesignSystem-DropdownOption--WITH_CHECKBOX')).toHaveLength(storyOptions.length);
    expect(getAllByTestId('DesignSystem-DropdownOption--WITH_CHECKBOX')[0].textContent).toMatch(storyOptions[0].label);
  });

  it('renders ICON_WITH_META options', () => {
    const { getAllByTestId, getByTestId } = render(
      <Dropdown options={iconWithSubinfoOptions} optionType="ICON_WITH_META" />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    expect(getAllByTestId('DesignSystem-DropdownOption--ICON_WITH_META')).toHaveLength(iconWithSubinfoOptions.length);
    expect(getAllByTestId('DesignSystem-DropdownOption--ICON_WITH_META')[0].textContent).toMatch(
      iconWithSubinfoOptions[0].label
    );
    expect(getAllByTestId('DesignSystem-DropdownOption--ICON_WITH_META--Icon')[0].textContent).toMatch(
      iconWithSubinfoOptions[0].icon
    );
    expect(getAllByTestId('DesignSystem-DropdownOption--ICON_WITH_META')[0].textContent).toMatch(
      iconWithSubinfoOptions[0].subInfo
    );
    expect(getAllByTestId('DesignSystem-DropdownOption--ICON_WITH_META')[0]).toHaveClass('color-inverse');
  });
});

describe('renders custom option', () => {
  it('custom option renderer', () => {
    const { getAllByTestId, getByTestId } = render(<Dropdown options={storyOptions} optionRenderer={FunctionValue} />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    expect(getAllByTestId('DesignSystem-DropdownOption--Custom')).toHaveLength(storyOptions.length);
    expect(getAllByTestId('DesignSystem-DropdownOption--Custom')[0]).toHaveClass('OptionWrapper');
    expect(FunctionValue).toHaveBeenCalled();
  });
});

describe('dropdown with prop: truncateOption', () => {
  it('wraps option', () => {
    const { getAllByTestId, getByTestId } = render(<Dropdown options={storyOptions} truncateOption={false} />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    expect(getAllByTestId('DesignSystem-Text')[0]).toHaveClass('Option-text--wrap');
  });
});

describe('renders option with meta list', () => {
  it('metalist option', () => {
    const { getByTestId } = render(
      <Dropdown
        options={[
          {
            optionType: 'WITH_META',
            label: 'Option',
            value: 'Option',
            subInfo: {
              list: [
                { icon: 'assessment', label: 'Meta data' },
                { icon: 'assessment', label: 'Meta data' },
              ],
              seperator: true,
              iconAppearance: 'default',
              labelAppearance: 'default',
              seperatorAppearance: 'default',
            },
          },
        ]}
      />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);

    expect(getByTestId('DesignSystem-DropdownOption--WITH_META--MetaList')).toBeInTheDocument();
  });
});

describe('renders active option', () => {
  const dropdownOptions = [
    { label: 'Below 18', subInfo: 'People below 18 years old', value: 'below_18' },
    { label: '19 - 35', subInfo: 'People 19-35 years old', value: '19-35' },
    { label: '36 - 55', subInfo: 'People 36-55 years old', value: '36-55' },
    { label: '56 and above', subInfo: 'People above 56 years old', value: '56_above' },
  ];
  it('without checkbox', () => {
    const { getAllByTestId, getByTestId } = render(<Dropdown options={storyOptions} />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);

    const option = getAllByTestId('DesignSystem-DropdownOption--DEFAULT')[0];
    fireEvent.mouseEnter(option);
    expect(option).toHaveClass('Option--active');
    expect(option).toHaveClass('color-inverse');
  });

  it('with checkbox', () => {
    const { getAllByTestId, getByTestId } = render(<Dropdown options={storyOptions} withCheckbox={true} />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);

    const option = getAllByTestId('DesignSystem-DropdownOption--WITH_CHECKBOX')[0];
    fireEvent.mouseEnter(option);
    expect(option).toHaveClass('Option-checkbox--active');
  });

  it('with checkbox and option with subinfo', () => {
    const { getAllByTestId, getByTestId } = render(<Dropdown options={dropdownOptions} withCheckbox={true} />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    expect(getAllByTestId('DesignSystem-DropdownOption--WITH_META--Meta')[0].textContent).toMatch(
      dropdownOptions[0].subInfo
    );
  });
});

describe('renders selected option', () => {
  it('with DEFAULT option', () => {
    const { getAllByTestId, getByTestId } = render(<Dropdown options={storyOptions} />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);

    const selectedOption = getAllByTestId('DesignSystem-DropdownOption--DEFAULT')[0];
    fireEvent.click(selectedOption);
    expect(selectedOption).toHaveClass('Option--selected');
    expect(selectedOption).toHaveClass('color-primary-dark');
  });

  it('WITH_ICON options', () => {
    const { getAllByTestId, getByTestId } = render(<Dropdown options={iconOptions} optionType="WITH_ICON" />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);

    const selectedOption = getAllByTestId('DesignSystem-DropdownOption--WITH_ICON')[0];
    fireEvent.click(selectedOption);
    expect(selectedOption).toHaveClass('Option--selected');
    expect(selectedOption).toHaveClass('color-primary-dark');
  });

  it('WITH_META options', () => {
    const { getAllByTestId, getByTestId } = render(<Dropdown options={disabledStoryOptions} optionType="WITH_META" />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);

    const selectedOption = getAllByTestId('DesignSystem-DropdownOption--WITH_META')[0];
    fireEvent.click(selectedOption);
    expect(selectedOption).toHaveClass('Option--selected');
    expect(selectedOption).toHaveClass('color-primary-dark');
  });

  it('with All Items label', async () => {
    const { getAllByTestId, getByTestId } = render(<Dropdown options={preSelectedOptions} withCheckbox={true} />);

    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);

    await waitFor(() => {
      const labels = getAllByTestId('DesignSystem-Text');
      const count = labels.filter((label) => label.textContent === 'All Items').length;
      expect(count).toBe(1);
    });
  });

  it('without All Items label when options are grouped', async () => {
    const { getAllByTestId, getByTestId } = render(<Dropdown options={groupedStoryOptions} withCheckbox={true} />);

    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);

    await waitFor(() => {
      const labels = getAllByTestId('DesignSystem-Text');
      const count = labels.filter((label) => label.textContent === 'All Items').length;
      expect(count).toBe(0);
    });
  });
});

describe('renders disabled option', () => {
  it('with DEFAULT option', () => {
    const { getAllByTestId, getByTestId } = render(<Dropdown options={disabledStoryOptions} />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    expect(getAllByTestId('DesignSystem-DropdownOption--DEFAULT')[1]).toHaveClass('Option--disabled');
    expect(getAllByTestId('DesignSystem-DropdownOption--DEFAULT')[1]).toHaveClass('color-inverse-lightest');
    expect(getAllByTestId('DesignSystem-Text')[1]).toHaveClass('color-inverse-lightest');
  });

  it('WITH_CHECKBOX option', () => {
    const { getAllByTestId, getByTestId } = render(<Dropdown options={disabledStoryOptions} withCheckbox={true} />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    expect(getAllByTestId('DesignSystem-DropdownOption--WITH_CHECKBOX')[1]).toHaveAttribute('data-disabled');
  });

  it('WITH_ICON options', () => {
    const { getAllByTestId, getByTestId } = render(<Dropdown options={disabledStoryOptions} optionType="WITH_ICON" />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    expect(getAllByTestId('DesignSystem-Text')[1]).toHaveClass('color-inverse-lightest');
    expect(getAllByTestId('DesignSystem-DropdownOption--WITH_ICON--Icon')[1]).toHaveClass('material-symbols-rounded');
    expect(getAllByTestId('DesignSystem-DropdownOption--WITH_ICON--Icon')[1]).toHaveStyle(
      'color: var(--inverse-lightest);'
    );
  });

  it('WITH_META options', () => {
    const { getAllByTestId, getByTestId } = render(<Dropdown options={disabledStoryOptions} optionType="WITH_META" />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    expect(getAllByTestId('DesignSystem-Text')[1]).toHaveClass('color-inverse-lightest');
    expect(getAllByTestId('DesignSystem-DropdownOption--WITH_META--Meta')[1]).toHaveClass('color-inverse-lightest');
  });
});

describe('renders grouped option', () => {
  it('with same groups together', async () => {
    const { getAllByTestId, getByTestId } = render(<Dropdown options={groupedStoryOptions} withCheckbox={true} />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);

    await waitFor(() => {
      const labels = getAllByTestId('DesignSystem-Text');
      const count = labels.filter((label) => label.textContent === 'Group 2').length;
      expect(count).toBe(1);
    });
  });
});
