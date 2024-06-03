import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EditableChipInput } from '@/index';
import { EditableChipInputProps as Props } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const value: string[] = ['Chip1', 'Chip2'];
const newValue: string[] = ['Chip3', 'Chip4'];
const disableSaveAction = [true, false];
const onChange = jest.fn();
const onClick = jest.fn();
const editableWrapperTestId = 'DesignSystem-EditableWrapper';
const defaultComponentTestId = 'DesignSystem-EditableChipInput--Default';
const chipInputTestId = 'DesignSystem-EditableChipInput--ChipInput';
const placeholder = 'Add Value';
const chipOptions = { onClick, maxWidth: '256px', clearButton: true };
const chipInputOptions = {
  chipOptions,
  allowDuplicates: false,
  defaultValue: [],
  autoFocus: true,
};

describe('EditableChipInput component', () => {
  const mapper = {
    placeholer: valueHelper(placeholder, { required: true }),
    onChange: valueHelper(onChange, { iterate: true }),
    disableSaveAction: valueHelper(disableSaveAction, { required: true, iterate: true }),
    value: valueHelper(value, { required: true }),
    chipInputOptions: valueHelper(chipInputOptions, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(<EditableChipInput {...attr} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Default EditableChipInput component', () => {
  it('renders default div initially', () => {
    const { getByTestId, queryByTestId } = render(
      <EditableChipInput value={value} onChange={onChange} chipInputOptions={chipInputOptions} />
    );

    expect(getByTestId(defaultComponentTestId)).toBeInTheDocument();
    expect(queryByTestId(chipInputTestId)).not.toBeInTheDocument();
    expect(queryByTestId('DesignSystem-EditableChipInput--Actions')).not.toBeInTheDocument();
  });

  describe('Should toggle between editableChipInput-default and editableChipInput-defaultwithChips classes ', () => {
    it('should have editableChipInput-default class with no chips ', () => {
      const { getByTestId, queryAllByTestId } = render(
        <EditableChipInput onChange={onChange} value={[]} chipInputOptions={chipInputOptions} />
      );
      expect(getByTestId('DesignSystem-EditableChipInput--Default')).toHaveClass('EditableChipInput-default');
      expect(queryAllByTestId('DesignSystem-EditableChipInput--Chip')).toHaveLength(0);
    });

    it('should have editableChipInput-default class with chips present', () => {
      const { getByTestId, getAllByTestId } = render(
        <EditableChipInput onChange={onChange} value={value} chipInputOptions={chipInputOptions} />
      );
      expect(getByTestId('DesignSystem-EditableChipInput--Default')).toHaveClass('EditableChipInput-defaultWithChips');
      expect(getAllByTestId('DesignSystem-EditableChipInput--Chip')).toHaveLength(2);
    });
  });
});

describe('EditableChipInput component', () => {
  it('renders ChipInput and action buttons on click', () => {
    const { getByTestId, queryByTestId } = render(<EditableChipInput value={value} onChange={onChange} />);

    const editableWrapper = getByTestId(editableWrapperTestId);
    fireEvent.click(editableWrapper);

    expect(queryByTestId(defaultComponentTestId)).not.toBeInTheDocument();
    expect(getByTestId(chipInputTestId)).toBeInTheDocument();
    expect(getByTestId('DesignSystem-EditableChipInput--Actions')).toBeInTheDocument();
  });
});

describe('Chip component', () => {
  it('onClick should have been called', () => {
    const { getAllByTestId } = render(
      <EditableChipInput value={value} onChange={onChange} chipInputOptions={chipInputOptions} />
    );

    const editableChipInputChip = getAllByTestId('DesignSystem-EditableChipInput--Chip');
    fireEvent.click(editableChipInputChip[0]);
    expect(onClick).toHaveBeenCalled();
    fireEvent.click(editableChipInputChip[1]);
    expect(onClick).toHaveBeenCalled();
  });
});

describe('EditableChipInput component with action buttons and props: value and chipInputOptions', () => {
  it('discard changes', () => {
    const { getByTestId, queryByTestId, getAllByTestId } = render(
      <EditableChipInput value={value} onChange={onChange} chipInputOptions={chipInputOptions} />
    );

    const editableWrapper = getByTestId(editableWrapperTestId);
    fireEvent.click(editableWrapper);

    const inputTrigger = getByTestId(chipInputTestId);
    fireEvent.change(inputTrigger, { target: { ...newValue } });

    const discardButton = getByTestId('DesignSystem-EditableChipInput--DiscardButton');
    fireEvent.click(discardButton);

    expect(getByTestId(defaultComponentTestId)).toBeInTheDocument();
    expect(queryByTestId(chipInputTestId)).not.toBeInTheDocument();
    expect(getAllByTestId('DesignSystem-EditableChipInput--Chip')[0].textContent).toMatch(`${value[0]}clear`);
    expect(getAllByTestId('DesignSystem-EditableChipInput--Chip')[1].textContent).toMatch(`${value[1]}clear`);
  });

  it('save changes', () => {
    const { getByTestId, queryByTestId, rerender, getAllByTestId } = render(
      <EditableChipInput value={value} onChange={onChange} chipInputOptions={chipInputOptions} />
    );

    const editableWrapper = getByTestId(editableWrapperTestId);
    fireEvent.click(editableWrapper);
    const saveButton = getByTestId('DesignSystem-EditableChipInput--SaveButton');
    fireEvent.click(saveButton);
    expect(onChange).toHaveBeenCalled();

    rerender(<EditableChipInput onChange={onChange} value={newValue} chipInputOptions={chipInputOptions} />);
    expect(getByTestId(defaultComponentTestId)).toBeInTheDocument();
    expect(queryByTestId(chipInputTestId)).not.toBeInTheDocument();
    expect(getAllByTestId('DesignSystem-EditableChipInput--Chip')[0].textContent).toMatch('Chip3clear');
    expect(getAllByTestId('DesignSystem-EditableChipInput--Chip')[1].textContent).toMatch('Chip4clear');
  });
});

describe('EditableChipInput component with chipOptions maxWidth', () => {
  const chipOptionsWithMaxWidth = {
    clearButton: true,
    maxWidth: '200px',
    onClick: jest.fn(),
  };

  const chipInputOptions = {
    chipOptions: chipOptionsWithMaxWidth,
    allowDuplicates: false,
    defaultValue: [],
    autoFocus: true,
  };

  it('applies maxWidth style to chips from chipOptions', () => {
    const { getAllByTestId } = render(
      <EditableChipInput
        onChange={onChange}
        value={['this is very very very long text']}
        chipInputOptions={chipInputOptions}
      />
    );

    // Assuming the EditableChipInput applies the `chipOptions.maxWidth` to the chip items.
    const chips = getAllByTestId('DesignSystem-EditableChipInput--Chip');
    chips.forEach((chip) => {
      expect(chip).toHaveStyle(`max-width: ${chipOptionsWithMaxWidth.maxWidth}`);
    });
  });
});
