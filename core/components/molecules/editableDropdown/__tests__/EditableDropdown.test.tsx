import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EditableDropdown } from '@/index';
import { DropdownProps, EditableDropdownProps as Props } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const options: any = [];
for (let i = 1; i <= 10; i++) {
  options.push({
    label: `Option ${i}`,
    value: `Option ${i}`,
  });
}

const placeholder = 'Select Option';
const optionType: DropdownProps['optionType'] = 'DEFAULT';
const onChange = jest.fn();
const dropdownOptions = {
  options,
  optionType,
  onChange,
};

const dropdownOptionTestId = `DesignSystem-DropdownOption--${optionType}`;
const dropdownTriggerTestId = 'DesignSystem-DropdownTrigger';
const editableWrapperTestId = 'DesignSystem-EditableWrapper';

describe('EditableDropdown component', () => {
  const mapper = {
    placeholer: valueHelper(placeholder, { required: true }),
    dropdownOptions: valueHelper(dropdownOptions, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(<EditableDropdown {...attr} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('EditableDropdown component', () => {
  it('renders children', () => {
    const { getByTestId } = render(<EditableDropdown placeholder={placeholder} dropdownOptions={dropdownOptions} />);

    expect(getByTestId('DesignSystem-Editable')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-EditableDropdown').textContent).toMatch(placeholder);
  });

  it('renders default div initially', () => {
    const { getByTestId } = render(<EditableDropdown placeholder={placeholder} dropdownOptions={dropdownOptions} />);

    expect(getByTestId('DesignSystem-EditableDropdown--Default')).not.toHaveClass('d-none');
    expect(getByTestId('DesignSystem-EditableDropdown--Dropdown')).toHaveClass('d-none');
  });

  it('renders dropdown on hover', () => {
    const { getByTestId } = render(<EditableDropdown placeholder={placeholder} dropdownOptions={dropdownOptions} />);

    const editableWrapper = getByTestId(editableWrapperTestId);
    fireEvent.mouseEnter(editableWrapper);

    expect(getByTestId('DesignSystem-EditableDropdown--Default')).toHaveClass('d-none');
    expect(getByTestId('DesignSystem-EditableDropdown--Dropdown')).not.toHaveClass('d-none');
  });

  it('renders default div on mouseLeave', () => {
    const { getByTestId } = render(<EditableDropdown placeholder={placeholder} dropdownOptions={dropdownOptions} />);

    const editableWrapper = getByTestId(editableWrapperTestId);

    fireEvent.mouseEnter(editableWrapper);
    expect(getByTestId('DesignSystem-EditableDropdown--Dropdown')).not.toHaveClass('d-none');

    fireEvent.mouseLeave(editableWrapper);
    expect(getByTestId('DesignSystem-EditableDropdown--Dropdown')).toHaveClass('d-none');
  });

  it('updates label and renders default div on selecting an option', () => {
    const clickedOption = 0;
    const { label } = options[clickedOption];

    const { getByTestId, getAllByTestId } = render(
      <EditableDropdown placeholder={placeholder} dropdownOptions={dropdownOptions} />
    );

    const editableWrapper = getByTestId(editableWrapperTestId);
    fireEvent.mouseEnter(editableWrapper);

    const dropdownTrigger = getByTestId(dropdownTriggerTestId);
    fireEvent.click(dropdownTrigger);

    const option = getAllByTestId(dropdownOptionTestId);
    fireEvent.click(option[clickedOption]);

    expect(getByTestId('DesignSystem-EditableDropdown--Dropdown')).toHaveClass('d-none');
    expect(getByTestId('DesignSystem-EditableDropdown--Default').textContent).toMatch(label);
    expect(onChange).toHaveBeenCalled();

    fireEvent.mouseEnter(editableWrapper);
    expect(getByTestId('DesignSystem-EditableDropdown--Dropdown')).not.toHaveClass('d-none');
    expect(getByTestId('DesignSystem-EditableDropdown--Dropdown').textContent).toMatch(label);
  });
});

describe('EditableDropdown Component with overwrite class', () => {
  const className = 'DS-EditableDropdown';

  it('overwrite EditableDropdown class', () => {
    const { getByTestId } = render(
      <EditableDropdown placeholder={placeholder} dropdownOptions={dropdownOptions} className={className} />
    );
    expect(getByTestId('DesignSystem-EditableDropdown')).toHaveClass(className);
  });
});
