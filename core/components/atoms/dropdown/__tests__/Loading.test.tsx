import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Dropdown } from '@/index';

import { storyOptions, iconOptions, subInfoOptions, iconWithSubinfoOptions } from '../__stories__/Options';

const trigger = 'DesignSystem-DropdownTrigger';

describe('renders loading states', () => {
  it('DEFAULT options', () => {
    const { getAllByTestId, getByTestId } = render(<Dropdown options={storyOptions} loading={true} />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);

    expect(getAllByTestId('DesignSystem-Dropdown--PlaceholderParagraph')).toHaveLength(storyOptions.length);
  });

  it('WITH_ICON options', () => {
    const { getAllByTestId, getByTestId } = render(
      <Dropdown options={iconOptions} loading={true} optionType="WITH_ICON" />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);

    expect(getAllByTestId('DesignSystem-Dropdown--Placeholder')).toHaveLength(iconOptions.length);
    expect(getAllByTestId('DesignSystem-Placeholder--Image')).toHaveLength(iconOptions.length);
  });

  it('WITH_META options', () => {
    const { getAllByTestId, queryByTestId, getByTestId } = render(
      <Dropdown options={subInfoOptions} loading={true} optionType="WITH_META" />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);

    expect(getAllByTestId('DesignSystem-Dropdown--Placeholder')).toHaveLength(subInfoOptions.length);
    expect(queryByTestId('DesignSystem-Placeholder--Image')).not.toBeInTheDocument();
    expect(getAllByTestId('DesignSystem-Dropdown--PlaceholderParagraph')).toHaveLength(subInfoOptions.length * 2);
  });

  it('ICON_WITH_META options', () => {
    const { getAllByTestId, getByTestId } = render(
      <Dropdown options={iconWithSubinfoOptions} loading={true} optionType="ICON_WITH_META" />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);

    expect(getAllByTestId('DesignSystem-Dropdown--Placeholder')).toHaveLength(iconWithSubinfoOptions.length);
    expect(getAllByTestId('DesignSystem-Placeholder--Image')).toHaveLength(iconWithSubinfoOptions.length);
    expect(getAllByTestId('DesignSystem-Dropdown--PlaceholderParagraph')).toHaveLength(
      iconWithSubinfoOptions.length * 2
    );
  });

  it('WITH_CHECKBOX options', () => {
    const { getAllByTestId, getByTestId } = render(
      <Dropdown options={storyOptions} loading={true} withCheckbox={true} />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);

    expect(getAllByTestId('DesignSystem-Dropdown--Placeholder')).toHaveLength(storyOptions.length);
    expect(getAllByTestId('DesignSystem-Placeholder--Image')).toHaveLength(storyOptions.length);
  });
});
