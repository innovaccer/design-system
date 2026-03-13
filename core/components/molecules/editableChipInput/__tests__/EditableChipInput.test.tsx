import * as React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
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
    placeholder: valueHelper(placeholder, { required: true }),
    onChange: valueHelper(onChange, { iterate: true }),
    disableSaveAction: valueHelper(disableSaveAction, { required: true, iterate: true }),
    value: valueHelper(value, { required: true }),
    chipInputOptions: valueHelper(chipInputOptions, { required: true }),
    size: valueHelper(['regular', 'small'], { required: false, iterate: true }),
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
      <EditableChipInput value={value} onChange={onChange} chipInputOptions={chipInputOptions} size="regular" />
    );

    expect(getByTestId(defaultComponentTestId)).toBeInTheDocument();
    expect(queryByTestId(chipInputTestId)).not.toBeInTheDocument();
    expect(queryByTestId('DesignSystem-EditableChipInput--Actions')).not.toBeInTheDocument();
  });

  describe('Should toggle between editableChipInput-default and editableChipInput-defaultwithChips classes ', () => {
    it('should have editableChipInput-default class with no chips ', () => {
      const { getByTestId, queryAllByTestId } = render(
        <EditableChipInput onChange={onChange} value={[]} chipInputOptions={chipInputOptions} size="regular" />
      );
      expect(getByTestId('DesignSystem-EditableChipInput--Default')).toHaveClass('EditableChipInput-default');
      expect(queryAllByTestId('DesignSystem-EditableChipInput--Chip')).toHaveLength(0);
    });

    it('should have editableChipInput-default class with chips present', () => {
      const { getByTestId, getAllByTestId } = render(
        <EditableChipInput onChange={onChange} value={value} chipInputOptions={chipInputOptions} size="regular" />
      );
      expect(getByTestId('DesignSystem-EditableChipInput--Default')).toHaveClass('EditableChipInput-defaultWithChips');
      expect(getAllByTestId('DesignSystem-EditableChipInput--Chip')).toHaveLength(2);
    });
  });
});

describe('EditableChipInput component', () => {
  it('renders ChipInput and action buttons on click', () => {
    const { getByTestId, queryByTestId } = render(
      <EditableChipInput value={value} onChange={onChange} size="regular" chipInputOptions={chipInputOptions} />
    );

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
      <EditableChipInput value={value} onChange={onChange} chipInputOptions={chipInputOptions} size="regular" />
    );

    const editableChipInputChip = getAllByTestId('DesignSystem-EditableChipInput--Chip');
    fireEvent.click(editableChipInputChip[0]);
    expect(onClick).toHaveBeenCalled();
    fireEvent.click(editableChipInputChip[1]);
    expect(onClick).toHaveBeenCalled();
  });
});

describe('EditableChipInput keyboard interactions', () => {
  it('Escape discards changes when editing', () => {
    const { getByTestId, queryByTestId, getAllByTestId } = render(
      <EditableChipInput value={value} onChange={onChange} chipInputOptions={chipInputOptions} size="regular" />
    );

    const editableWrapper = getByTestId(editableWrapperTestId);
    fireEvent.click(editableWrapper);
    expect(queryByTestId(chipInputTestId)).toBeInTheDocument();

    fireEvent.keyDown(editableWrapper, { key: 'Escape' });

    expect(getByTestId(defaultComponentTestId)).toBeInTheDocument();
    expect(queryByTestId(chipInputTestId)).not.toBeInTheDocument();
    expect(getAllByTestId('DesignSystem-EditableChipInput--Chip')[0].textContent).toMatch(`${value[0]}clear`);
  });

  it('Escape restores focus to trigger after canceling', async () => {
    const { getByTestId } = render(
      <EditableChipInput value={value} onChange={onChange} chipInputOptions={chipInputOptions} size="regular" />
    );

    const editableWrapper = getByTestId(editableWrapperTestId);
    fireEvent.click(editableWrapper);
    fireEvent.keyDown(editableWrapper, { key: 'Escape' });

    await waitFor(() => expect(editableWrapper).toHaveFocus());
  });

  it('Enter saves changes when editing and not focused on ChipInput', () => {
    const { getByTestId, queryByTestId } = render(
      <EditableChipInput value={value} onChange={onChange} chipInputOptions={chipInputOptions} size="regular" />
    );

    const editableWrapper = getByTestId(editableWrapperTestId);
    fireEvent.click(editableWrapper);
    fireEvent.keyDown(editableWrapper, { key: 'Enter' });

    expect(onChange).toHaveBeenCalled();
    expect(getByTestId(defaultComponentTestId)).toBeInTheDocument();
    expect(queryByTestId(chipInputTestId)).not.toBeInTheDocument();
  });

  it('Enter in ChipInput field adds chip and does not save', () => {
    const { getByTestId, getAllByTestId } = render(
      <EditableChipInput value={value} onChange={onChange} chipInputOptions={chipInputOptions} size="regular" />
    );

    const editableWrapper = getByTestId(editableWrapperTestId);
    fireEvent.click(editableWrapper);

    const chipInput = getByTestId(chipInputTestId);
    const input = chipInput.querySelector('input');
    if (input) {
      fireEvent.change(input, { target: { value: 'NewChip' } });
      fireEvent.keyDown(input, { key: 'Enter' });
    }

    expect(getAllByTestId('DesignSystem-ChipInput--Chip').length).toBeGreaterThan(value.length);
  });

  it('Enter does not save when disableSaveAction is true', () => {
    const { getByTestId, queryByTestId } = render(
      <EditableChipInput
        value={value}
        onChange={onChange}
        chipInputOptions={chipInputOptions}
        size="regular"
        disableSaveAction={true}
      />
    );

    const editableWrapper = getByTestId(editableWrapperTestId);
    fireEvent.click(editableWrapper);
    const saveCallsBefore = onChange.mock.calls.length;
    fireEvent.keyDown(editableWrapper, { key: 'Enter' });

    expect(onChange.mock.calls.length).toBe(saveCallsBefore);
    expect(queryByTestId(chipInputTestId)).toBeInTheDocument();
  });
});

describe('EditableChipInput component with action buttons and props: value and chipInputOptions', () => {
  it('discard changes', () => {
    const { getByTestId, queryByTestId, getAllByTestId } = render(
      <EditableChipInput value={value} onChange={onChange} chipInputOptions={chipInputOptions} size="regular" />
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
      <EditableChipInput value={value} onChange={onChange} chipInputOptions={chipInputOptions} size="regular" />
    );

    const editableWrapper = getByTestId(editableWrapperTestId);
    fireEvent.click(editableWrapper);
    const saveButton = getByTestId('DesignSystem-EditableChipInput--SaveButton');
    fireEvent.click(saveButton);
    expect(onChange).toHaveBeenCalled();

    rerender(
      <EditableChipInput onChange={onChange} value={newValue} chipInputOptions={chipInputOptions} size="regular" />
    );
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
        size="regular"
      />
    );

    const chips = getAllByTestId('DesignSystem-EditableChipInput--Chip');
    chips.forEach((chip) => {
      expect(chip).toHaveStyle(`max-width: ${chipOptionsWithMaxWidth.maxWidth}`);
    });
  });
});

describe('EditableChipInput component - Size functionality', () => {
  describe('Size prop validation and default behavior for EditableChipInput molecule component', () => {
    it('should render with default size "regular" when size prop is not provided', () => {
      const { getAllByTestId } = render(
        <EditableChipInput
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          chipInputOptions={chipInputOptions}
        />
      );

      const chips = getAllByTestId('DesignSystem-EditableChipInput--Chip');
      chips.forEach((chip) => {
        expect(chip).toHaveClass('Chip-size--regular');
      });
    });

    it('should render with size "regular" when explicitly provided', () => {
      const { getAllByTestId } = render(
        <EditableChipInput
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          chipInputOptions={chipInputOptions}
          size="regular"
        />
      );

      const chips = getAllByTestId('DesignSystem-EditableChipInput--Chip');
      chips.forEach((chip) => {
        expect(chip).toHaveClass('Chip-size--regular');
      });
    });

    it('should render with size "small" when explicitly provided', () => {
      const { getAllByTestId } = render(
        <EditableChipInput
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          chipInputOptions={chipInputOptions}
          size="small"
        />
      );

      const chips = getAllByTestId('DesignSystem-EditableChipInput--Chip');
      chips.forEach((chip) => {
        expect(chip).toHaveClass('Chip-size--small');
      });
    });
  });

  describe('Size prop propagation to child Chip components in default state', () => {
    it('should pass size="regular" to individual Chip components in default view', () => {
      const { getAllByTestId } = render(
        <EditableChipInput
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          chipInputOptions={chipInputOptions}
          size="regular"
        />
      );

      const chips = getAllByTestId('DesignSystem-EditableChipInput--Chip');
      expect(chips).toHaveLength(2);
      chips.forEach((chip) => {
        expect(chip).toHaveClass('Chip-size--regular');
        expect(chip).not.toHaveClass('Chip-size--small');
      });
    });

    it('should pass size="small" to individual Chip components in default view', () => {
      const { getAllByTestId } = render(
        <EditableChipInput
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          chipInputOptions={chipInputOptions}
          size="small"
        />
      );

      const chips = getAllByTestId('DesignSystem-EditableChipInput--Chip');
      expect(chips).toHaveLength(2);
      chips.forEach((chip) => {
        expect(chip).toHaveClass('Chip-size--small');
        expect(chip).not.toHaveClass('Chip-size--regular');
      });
    });
  });

  describe('Size prop propagation to ChipInput component in edit mode', () => {
    it('should pass default size="regular" to ChipInput component when size prop is not provided', () => {
      const { getByTestId } = render(
        <EditableChipInput
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          chipInputOptions={chipInputOptions}
        />
      );

      const editableWrapper = getByTestId(editableWrapperTestId);
      fireEvent.click(editableWrapper);

      const chipInput = getByTestId(chipInputTestId);
      expect(chipInput).toHaveClass('ChipInput--regular');
      expect(chipInput).not.toHaveClass('ChipInput--small');
    });

    it('should pass size="regular" to ChipInput component when in edit mode', () => {
      const { getByTestId } = render(
        <EditableChipInput
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          chipInputOptions={chipInputOptions}
          size="regular"
        />
      );

      const editableWrapper = getByTestId(editableWrapperTestId);
      fireEvent.click(editableWrapper);

      const chipInput = getByTestId(chipInputTestId);
      expect(chipInput).toHaveClass('ChipInput--regular');
      expect(chipInput).not.toHaveClass('ChipInput--small');
    });

    it('should pass size="small" to ChipInput component when in edit mode', () => {
      const { getByTestId } = render(
        <EditableChipInput
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          chipInputOptions={chipInputOptions}
          size="small"
        />
      );

      const editableWrapper = getByTestId(editableWrapperTestId);
      fireEvent.click(editableWrapper);

      const chipInput = getByTestId(chipInputTestId);
      expect(chipInput).toHaveClass('ChipInput--small');
      expect(chipInput).not.toHaveClass('ChipInput--regular');
    });
  });

  describe('Size consistency between default and edit modes', () => {
    it('should maintain consistent size="regular" when switching between default and edit modes', () => {
      const { getByTestId, getAllByTestId, queryByTestId } = render(
        <EditableChipInput
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          chipInputOptions={chipInputOptions}
          size="regular"
        />
      );

      let chips = getAllByTestId('DesignSystem-EditableChipInput--Chip');
      chips.forEach((chip) => {
        expect(chip).toHaveClass('Chip-size--regular');
      });

      const editableWrapper = getByTestId(editableWrapperTestId);
      fireEvent.click(editableWrapper);

      const chipInput = getByTestId(chipInputTestId);
      expect(chipInput).toHaveClass('ChipInput--regular');

      const discardButton = getByTestId('DesignSystem-EditableChipInput--DiscardButton');
      fireEvent.click(discardButton);

      expect(queryByTestId(chipInputTestId)).not.toBeInTheDocument();
      chips = getAllByTestId('DesignSystem-EditableChipInput--Chip');
      chips.forEach((chip) => {
        expect(chip).toHaveClass('Chip-size--regular');
      });
    });

    it('should maintain consistent size="small" when switching between default and edit modes', () => {
      const { getByTestId, getAllByTestId, queryByTestId } = render(
        <EditableChipInput
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          chipInputOptions={chipInputOptions}
          size="small"
        />
      );

      let chips = getAllByTestId('DesignSystem-EditableChipInput--Chip');
      chips.forEach((chip) => {
        expect(chip).toHaveClass('Chip-size--small');
      });

      const editableWrapper = getByTestId(editableWrapperTestId);
      fireEvent.click(editableWrapper);

      const chipInput = getByTestId(chipInputTestId);
      expect(chipInput).toHaveClass('ChipInput--small');

      const discardButton = getByTestId('DesignSystem-EditableChipInput--DiscardButton');
      fireEvent.click(discardButton);

      expect(queryByTestId(chipInputTestId)).not.toBeInTheDocument();
      chips = getAllByTestId('DesignSystem-EditableChipInput--Chip');
      chips.forEach((chip) => {
        expect(chip).toHaveClass('Chip-size--small');
      });
    });
  });

  describe('Size prop with empty value state', () => {
    it('should handle size prop correctly when no chips are present', () => {
      const { getByTestId, queryAllByTestId } = render(
        <EditableChipInput
          placeholder={placeholder}
          onChange={onChange}
          value={[]}
          chipInputOptions={chipInputOptions}
          size="small"
        />
      );

      expect(queryAllByTestId('DesignSystem-EditableChipInput--Chip')).toHaveLength(0);
      expect(getByTestId(defaultComponentTestId)).toBeInTheDocument();

      const editableWrapper = getByTestId(editableWrapperTestId);
      fireEvent.click(editableWrapper);

      const chipInput = getByTestId(chipInputTestId);
      expect(chipInput).toHaveClass('ChipInput--small');
    });
  });
});
