import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ChipInput } from '@/index';
import { ChipInputProps as Props } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const value = ['1020', '80'];
const placeholder = 'Add value';
const BooleanValue = [true, false];
const FunctionValue = jest.fn();
const chipOptions = {
  clearButton: true,
  maxWidth: '256px',
  onClick: FunctionValue,
};

describe('ChipInput component', () => {
  const mapper = {
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    allowDuplicates: valueHelper(true, { required: true }),
    value: valueHelper(value, { required: true }),
    chipOptions: valueHelper(chipOptions, { required: true }),
    placeholder: valueHelper(placeholder, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
    onBlur: valueHelper(FunctionValue, { required: true }),
    onFocus: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<ChipInput {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('ChipInput component', () => {
  const mapper = {
    error: valueHelper(true, { required: true }),
    allowDuplicates: valueHelper(true, { required: true }),
    value: valueHelper(value, { required: true }),
    chipOptions: valueHelper(chipOptions, { required: true }),
    placeholder: valueHelper(placeholder, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
    onBlur: valueHelper(FunctionValue, { required: true }),
    onFocus: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<ChipInput {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('ChipInput component', () => {
  it('renders input and chips', () => {
    const { getByTestId, getAllByTestId } = render(<ChipInput value={value} />);

    expect(getByTestId('DesignSystem-ChipInput--Input')).toBeInTheDocument();
    expect(getAllByTestId('DesignSystem-ChipInput--Chip')).toHaveLength(value.length);
    expect(getAllByTestId('DesignSystem-ChipInput--Chip')[0].textContent).toMatch(value[0]);
    expect(getAllByTestId('DesignSystem-ChipInput--Chip')[1].textContent).toMatch(value[1]);
  });

  it('initially renders input only', () => {
    const { getByTestId, queryAllByTestId } = render(<ChipInput />);

    expect(getByTestId('DesignSystem-ChipInput--Input')).toBeInTheDocument();
    expect(queryAllByTestId('DesignSystem-ChipInput--Chip')).toHaveLength(0);
  });

  it('renders close icon only if length of chips > 0', () => {
    const { getByTestId, queryByTestId, rerender } = render(<ChipInput value={[]} />);

    expect(queryByTestId('DesignSystem-ChipInput--Icon')).not.toBeInTheDocument();
    rerender(<ChipInput value={value} />);
    expect(getByTestId('DesignSystem-ChipInput--Icon')).toBeInTheDocument();
  });

  it('ChipInput with prop: disabled', () => {
    const { getByTestId, getAllByTestId } = render(<ChipInput value={value} disabled={true} />);

    expect(getByTestId('DesignSystem-ChipInput')).toHaveClass('ChipInput--disabled');
    expect(getAllByTestId('DesignSystem-ChipInput--Chip')[0]).toHaveClass('Chip-input--disabled');
  });

  it('ChipInput with prop: placeholder', () => {
    const { getByTestId } = render(<ChipInput placeholder={placeholder} />);

    expect(getByTestId('DesignSystem-ChipInput--Input')).toHaveAttribute('placeholder', placeholder);
  });

  it('ChipInput with prop allowDuplicate: false', () => {
    const { getByTestId, getAllByTestId } = render(<ChipInput defaultValue={value} onChange={FunctionValue} />);

    const inputComponent = getByTestId('DesignSystem-ChipInput--Input');
    fireEvent.change(inputComponent, { target: { value: value[0] } });
    fireEvent.keyDown(inputComponent, { key: 'Enter' });
    expect(getAllByTestId('DesignSystem-ChipInput--Chip')).toHaveLength(value.length);
  });

  it('ChipInput with prop allowDuplicate: true', () => {
    const { getByTestId, getAllByTestId } = render(
      <ChipInput defaultValue={value} onChange={FunctionValue} allowDuplicates={true} />
    );

    const inputComponent = getByTestId('DesignSystem-ChipInput--Input');
    fireEvent.change(inputComponent, { target: { value: value[0] } });
    fireEvent.keyDown(inputComponent, { key: 'Enter' });
    expect(getAllByTestId('DesignSystem-ChipInput--Chip')).toHaveLength(value.length + 1);
  });

  it('ChipInput with prop error: true', () => {
    const { getByTestId } = render(<ChipInput defaultValue={value} onChange={FunctionValue} error={true} />);

    expect(getByTestId('DesignSystem-ChipInput')).toHaveClass('ChipInput--error');
    expect(getByTestId('DesignSystem-ChipInput--Border')).toHaveClass('ChipInput-border--error');
  });
});

describe('Controlled ChipInput component', () => {
  it('Add chip if enter is pressed', () => {
    const newValue = ['1020', '80', '90'];
    const { rerender, getByTestId, getAllByTestId } = render(<ChipInput value={value} onChange={FunctionValue} />);
    expect(getAllByTestId('DesignSystem-ChipInput--Chip')).toHaveLength(value.length);

    const inputComponent = getByTestId('DesignSystem-ChipInput--Input');
    fireEvent.change(inputComponent, { target: { value: '90' } });
    fireEvent.keyDown(inputComponent, { key: 'Enter' });

    expect(FunctionValue).toHaveBeenCalled();
    rerender(<ChipInput value={newValue} onChange={FunctionValue} />);
    expect(getAllByTestId('DesignSystem-ChipInput--Chip')).toHaveLength(newValue.length);
    expect(getAllByTestId('DesignSystem-ChipInput--Chip')[2].textContent).toMatch(newValue[2]);
  });
});

describe('Uncontrolled ChipInput component', () => {
  it('Add chip if enter is pressed', () => {
    const newValue = ['1020', '80', '90'];
    const { getByTestId, getAllByTestId } = render(<ChipInput defaultValue={value} onChange={FunctionValue} />);
    expect(getAllByTestId('DesignSystem-ChipInput--Chip')).toHaveLength(value.length);

    const inputComponent = getByTestId('DesignSystem-ChipInput--Input');
    fireEvent.change(inputComponent, { target: { value: '90' } });
    fireEvent.keyDown(inputComponent, { key: 'Enter' });

    expect(FunctionValue).toHaveBeenCalled();
    expect(getAllByTestId('DesignSystem-ChipInput--Chip')).toHaveLength(newValue.length);
    expect(getAllByTestId('DesignSystem-ChipInput--Chip')[2].textContent).toMatch(newValue[2]);
  });

  it('Delete chip if backspace is pressed', () => {
    const newValue = ['1020'];
    const { getByTestId, getAllByTestId } = render(<ChipInput defaultValue={value} onChange={FunctionValue} />);
    expect(getAllByTestId('DesignSystem-ChipInput--Chip')).toHaveLength(value.length);

    const inputComponent = getByTestId('DesignSystem-ChipInput--Input');
    fireEvent.keyDown(inputComponent, { key: 'Backspace' });

    expect(FunctionValue).toHaveBeenCalled();
    expect(getAllByTestId('DesignSystem-ChipInput--Chip')).toHaveLength(newValue.length);
    expect(getAllByTestId('DesignSystem-ChipInput--Chip')[0].textContent).toMatch(newValue[0]);
  });

  it('Delete all chips if close icon is clicked', () => {
    const newValue: string[] = [];
    const { getByTestId, getAllByTestId, queryAllByTestId } = render(
      <ChipInput defaultValue={value} onChange={FunctionValue} />
    );
    expect(getAllByTestId('DesignSystem-ChipInput--Chip')).toHaveLength(value.length);

    const closeIcon = getByTestId('DesignSystem-ChipInput--Icon');
    fireEvent.click(closeIcon);

    expect(FunctionValue).toHaveBeenCalled();
    expect(queryAllByTestId('DesignSystem-ChipInput--Chip')).toHaveLength(newValue.length);
  });
});

describe('ChipInput component text transform', () => {
  it('check for chip input text transform case', () => {
    const chipValue = ['CHIP', 'xyz', 'Abc'];

    chipValue.forEach((value, key) => {
      const { getAllByTestId } = render(<ChipInput />);

      const inputComponent = getAllByTestId('DesignSystem-ChipInput--Input')[0];
      fireEvent.change(inputComponent, { target: { value: value } });
      fireEvent.keyDown(inputComponent, { key: 'Enter' });

      expect(getAllByTestId('DesignSystem-ChipInput--Chip')[key].textContent).toMatch(value);
    });
  });
});

describe('ChipInput component with chipOptions', () => {
  const chipOptions = {
    clearButton: true,
    maxWidth: '200px',
    onClick: FunctionValue,
  };

  it('applies maxWidth style from chipOptions', () => {
    const { getAllByTestId } = render(
      <ChipInput value={['this is very very very  long text']} chipOptions={chipOptions} />
    );
    expect(getAllByTestId('DesignSystem-ChipInput--Chip')[0]).toHaveStyle({ maxWidth: '200px' });
  });
});

describe('ChipInput component validator function', () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validatorFn = (chipValue: string) => emailRegex.test(chipValue);

  it('chip should not be added if chip validator function fails', () => {
    const onChange = jest.fn();
    const { getByTestId, getAllByTestId } = render(
      <ChipInput chipValidator={validatorFn} defaultValue={value} onChange={onChange} />
    );
    const inputComponent = getByTestId('DesignSystem-ChipInput--Input');
    fireEvent.change(inputComponent, { target: { value: 'test@gmail' } });
    fireEvent.keyDown(inputComponent, { key: 'Enter' });
    expect(getAllByTestId('DesignSystem-ChipInput--Chip')).toHaveLength(value.length);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('chip should be added if chip validator function succeeds', () => {
    const onChange = jest.fn();
    const { getByTestId, getAllByTestId } = render(
      <ChipInput chipValidator={validatorFn} defaultValue={value} onChange={onChange} />
    );
    const inputComponent = getByTestId('DesignSystem-ChipInput--Input');
    fireEvent.change(inputComponent, { target: { value: 'test@gmail.com' } });
    fireEvent.keyDown(inputComponent, { key: 'Enter' });
    expect(getAllByTestId('DesignSystem-ChipInput--Chip')).toHaveLength(value.length + 1);
    expect(onChange).toHaveBeenCalled();
  });
});

describe('ChipInput Component - Size Variants and Icon Alignment', () => {
  const defaultProps = {
    allowDuplicates: false,
    chipOptions: { clearButton: true },
    defaultValue: [] as string[],
    autoFocus: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Small Size Variant - Height and Styling Tests', () => {
    it('should apply correct CSS classes for small size container', () => {
      const { getByTestId } = render(<ChipInput {...defaultProps} size="small" />);

      const container = getByTestId('DesignSystem-ChipInput');
      expect(container).toHaveClass('ChipInput--small');
    });

    it('should apply correct CSS classes for small size input', () => {
      const { getByTestId } = render(<ChipInput {...defaultProps} size="small" />);

      const input = getByTestId('DesignSystem-ChipInput--Input');
      expect(input).toHaveClass('ChipInput-input--small');
    });

    it('should render chips with vertical margins for small size', () => {
      const { getByTestId } = render(<ChipInput {...defaultProps} size="small" defaultValue={['test-chip']} />);

      const chip = getByTestId('DesignSystem-ChipInput--Chip');
      expect(chip).toHaveClass('my-2'); // Small chips have my-2 class
      expect(chip).not.toHaveClass('my-0');
      expect(chip).not.toHaveClass('my-3');
    });

    it('should render clear icon with small size classes and proper dimensions for 24px container', () => {
      const { getByTestId } = render(<ChipInput {...defaultProps} size="small" defaultValue={['chip1', 'chip2']} />);

      const icon = getByTestId('DesignSystem-ChipInput--Icon');
      expect(icon).toHaveClass('ChipInput-icon--small');
      expect(icon).not.toHaveClass('ChipInput-icon--regular');
    });

    it('should maintain consistent height behavior when transitioning from empty to filled state', () => {
      const { rerender, getByTestId } = render(<ChipInput {...defaultProps} size="small" value={[]} />);

      let container = getByTestId('DesignSystem-ChipInput');
      expect(container).toHaveClass('ChipInput--small');
      expect(container).not.toHaveClass('ChipInput--withChips');

      rerender(<ChipInput {...defaultProps} size="small" value={['chip1']} />);

      container = getByTestId('DesignSystem-ChipInput');
      expect(container).toHaveClass('ChipInput--small');
      expect(container).toHaveClass('ChipInput--withChips');
    });
  });

  describe('Regular Size Variant - Height and Styling Tests', () => {
    it('should apply correct CSS classes for regular size container', () => {
      const { getByTestId } = render(<ChipInput {...defaultProps} size="regular" />);

      const container = getByTestId('DesignSystem-ChipInput');
      expect(container).toHaveClass('ChipInput--regular');
    });

    it('should apply correct CSS classes for regular size input', () => {
      const { getByTestId } = render(<ChipInput {...defaultProps} size="regular" />);

      const input = getByTestId('DesignSystem-ChipInput--Input');
      expect(input).toHaveClass('ChipInput-input--regular');
    });

    it('should render chips with larger vertical margins for regular size to maintain proper spacing', () => {
      const { getByTestId } = render(<ChipInput {...defaultProps} size="regular" defaultValue={['test-chip']} />);

      const chip = getByTestId('DesignSystem-ChipInput--Chip');
      expect(chip).toHaveClass('my-3'); // Larger vertical margin for regular chips
      expect(chip).not.toHaveClass('my-0');
      expect(chip).not.toHaveClass('my-2');
    });

    it('should render clear icon with regular size classes and proper dimensions for 32px container', () => {
      const { getByTestId } = render(<ChipInput {...defaultProps} size="regular" defaultValue={['chip1', 'chip2']} />);

      const icon = getByTestId('DesignSystem-ChipInput--Icon');
      expect(icon).toHaveClass('ChipInput-icon--regular');
      expect(icon).not.toHaveClass('ChipInput-icon--small');
    });
  });

  describe('Default Size Behavior and Fallback Tests', () => {
    it('should default to regular size when no size prop is provided', () => {
      const { getByTestId } = render(<ChipInput {...defaultProps} />);

      const container = getByTestId('DesignSystem-ChipInput');
      const input = getByTestId('DesignSystem-ChipInput--Input');

      expect(container).toHaveClass('ChipInput--regular');
      expect(input).toHaveClass('ChipInput-input--regular');
    });

    it('should render chips with regular size margins when no size is specified', () => {
      const { getByTestId } = render(<ChipInput {...defaultProps} defaultValue={['default-chip']} />);

      const chip = getByTestId('DesignSystem-ChipInput--Chip');
      expect(chip).toHaveClass('my-3'); // Default to regular size margins
    });

    it('should render clear icon with regular size classes by default', () => {
      const { getByTestId } = render(<ChipInput {...defaultProps} defaultValue={['chip1']} />);

      const icon = getByTestId('DesignSystem-ChipInput--Icon');
      expect(icon).toHaveClass('ChipInput-icon--regular');
    });
  });

  describe('Icon Size and Alignment - Cross-Size Consistency Tests', () => {
    it('should render appropriate icon container for small ChipInput (12px icon in centered container)', () => {
      const { getByTestId } = render(<ChipInput {...defaultProps} size="small" defaultValue={['test']} />);

      const icon = getByTestId('DesignSystem-ChipInput--Icon');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass('ChipInput-icon--small');
    });

    it('should render appropriate icon container for regular ChipInput (16px icon in centered container)', () => {
      const { getByTestId } = render(<ChipInput {...defaultProps} size="regular" defaultValue={['test']} />);

      const icon = getByTestId('DesignSystem-ChipInput--Icon');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass('ChipInput-icon--regular');
    });

    it('should maintain consistent icon positioning across size changes', () => {
      const { rerender, getByTestId } = render(<ChipInput {...defaultProps} size="small" defaultValue={['test']} />);

      let icon = getByTestId('DesignSystem-ChipInput--Icon');
      expect(icon).toHaveClass('ChipInput-icon--small');

      rerender(<ChipInput {...defaultProps} size="regular" defaultValue={['test']} />);

      icon = getByTestId('DesignSystem-ChipInput--Icon');
      expect(icon).toHaveClass('ChipInput-icon--regular');
    });

    it('should not render clear icon when no chips are present regardless of size', () => {
      const { queryByTestId } = render(<ChipInput {...defaultProps} size="small" />);
      expect(queryByTestId('DesignSystem-ChipInput--Icon')).not.toBeInTheDocument();

      const { queryByTestId: queryByTestId2 } = render(<ChipInput {...defaultProps} size="regular" />);
      expect(queryByTestId2('DesignSystem-ChipInput--Icon')).not.toBeInTheDocument();
    });
  });

  describe('Height Consistency and Border Handling Tests', () => {
    it('should apply withChips class when chips are present regardless of size', () => {
      const { getByTestId } = render(<ChipInput {...defaultProps} size="small" defaultValue={['test']} />);

      const container = getByTestId('DesignSystem-ChipInput');
      expect(container).toHaveClass('ChipInput--withChips');
    });

    it('should handle multiple chips without breaking size constraints for small variant', () => {
      const manyChips = Array.from({ length: 5 }, (_, i) => `chip-${i + 1}`);

      const { getByTestId, getAllByTestId } = render(
        <ChipInput {...defaultProps} size="small" defaultValue={manyChips} />
      );

      const container = getByTestId('DesignSystem-ChipInput');
      const chips = getAllByTestId('DesignSystem-ChipInput--Chip');

      expect(container).toHaveClass('ChipInput--small');
      expect(chips).toHaveLength(5);

      // All chips should have consistent size classes (with my-2 margins)
      chips.forEach((chip) => {
        expect(chip).toHaveClass('my-2');
      });
    });

    it('should handle multiple chips without breaking size constraints for regular variant', () => {
      const manyChips = Array.from({ length: 5 }, (_, i) => `chip-${i + 1}`);

      const { getByTestId, getAllByTestId } = render(
        <ChipInput {...defaultProps} size="regular" defaultValue={manyChips} />
      );

      const container = getByTestId('DesignSystem-ChipInput');
      const chips = getAllByTestId('DesignSystem-ChipInput--Chip');

      expect(container).toHaveClass('ChipInput--regular');
      expect(chips).toHaveLength(5);

      // All chips should have consistent size classes (with larger vertical margins)
      chips.forEach((chip) => {
        expect(chip).toHaveClass('my-3');
      });
    });
  });

  describe('CSS Class Combinations and Specificity Tests', () => {
    it('should apply multiple size-related classes correctly for small variant with error state', () => {
      const { getByTestId } = render(<ChipInput {...defaultProps} size="small" defaultValue={['test']} error={true} />);

      const container = getByTestId('DesignSystem-ChipInput');
      expect(container).toHaveClass('ChipInput');
      expect(container).toHaveClass('ChipInput--small');
      expect(container).toHaveClass('ChipInput--withChips');
      expect(container).toHaveClass('ChipInput--error');
    });

    it('should apply multiple size-related classes correctly for regular variant with disabled state', () => {
      const { getByTestId } = render(
        <ChipInput {...defaultProps} size="regular" defaultValue={['test']} disabled={true} />
      );

      const container = getByTestId('DesignSystem-ChipInput');
      expect(container).toHaveClass('ChipInput');
      expect(container).toHaveClass('ChipInput--regular');
      expect(container).toHaveClass('ChipInput--withChips');
      expect(container).toHaveClass('ChipInput--disabled');
    });

    it('should ensure input classes are properly combined with size classes', () => {
      const { getByTestId } = render(<ChipInput {...defaultProps} size="small" />);

      const input = getByTestId('DesignSystem-ChipInput--Input');
      expect(input).toHaveClass('ChipInput-input');
      expect(input).toHaveClass('ChipInput-input--small');
      expect(input).toHaveClass('p-0');
    });

    it('should ensure icon classes are properly combined with size classes', () => {
      const { getByTestId } = render(<ChipInput {...defaultProps} size="small" defaultValue={['test']} />);

      const icon = getByTestId('DesignSystem-ChipInput--Icon');
      expect(icon).toHaveClass('ChipInput-icon');
      expect(icon).toHaveClass('ChipInput-icon--small');
    });
  });

  describe('Dynamic Size Changes and Edge Cases', () => {
    it('should handle size changes dynamically without breaking functionality', () => {
      const { rerender, getByTestId } = render(<ChipInput {...defaultProps} size="small" defaultValue={['test']} />);

      let container = getByTestId('DesignSystem-ChipInput');
      let input = getByTestId('DesignSystem-ChipInput--Input');
      let icon = getByTestId('DesignSystem-ChipInput--Icon');
      let chip = getByTestId('DesignSystem-ChipInput--Chip');

      expect(container).toHaveClass('ChipInput--small');
      expect(input).toHaveClass('ChipInput-input--small');
      expect(icon).toHaveClass('ChipInput-icon--small');
      expect(chip).toHaveClass('my-2');

      rerender(<ChipInput {...defaultProps} size="regular" defaultValue={['test']} />);

      container = getByTestId('DesignSystem-ChipInput');
      input = getByTestId('DesignSystem-ChipInput--Input');
      icon = getByTestId('DesignSystem-ChipInput--Icon');
      chip = getByTestId('DesignSystem-ChipInput--Chip');

      expect(container).toHaveClass('ChipInput--regular');
      expect(input).toHaveClass('ChipInput-input--regular');
      expect(icon).toHaveClass('ChipInput-icon--regular');
      expect(chip).toHaveClass('my-3');
    });

    it('should maintain size classes when transitioning between empty and filled states', () => {
      const { rerender, getByTestId } = render(<ChipInput {...defaultProps} size="small" value={[]} />);

      let container = getByTestId('DesignSystem-ChipInput');
      expect(container).toHaveClass('ChipInput--small');
      expect(container).not.toHaveClass('ChipInput--withChips');

      rerender(<ChipInput {...defaultProps} size="small" value={['new-chip']} />);

      container = getByTestId('DesignSystem-ChipInput');
      expect(container).toHaveClass('ChipInput--small');
      expect(container).toHaveClass('ChipInput--withChips');

      rerender(<ChipInput {...defaultProps} size="small" value={[]} />);

      container = getByTestId('DesignSystem-ChipInput');
      expect(container).toHaveClass('ChipInput--small');
      expect(container).not.toHaveClass('ChipInput--withChips');
    });
  });

  describe('Focus and Accessibility with Size Variants', () => {
    it('should maintain proper tabIndex for interactive elements across sizes', () => {
      const { getByTestId } = render(<ChipInput {...defaultProps} size="small" defaultValue={['chip1']} />);

      const container = getByTestId('DesignSystem-ChipInput');
      const icon = getByTestId('DesignSystem-ChipInput--Icon');

      expect(container).toHaveAttribute('tabIndex', '0');
      expect(icon).toHaveAttribute('tabIndex', '0');
    });

    it('should set proper tabIndex when disabled regardless of size', () => {
      const { getByTestId } = render(
        <ChipInput {...defaultProps} size="small" defaultValue={['chip1']} disabled={true} />
      );

      const container = getByTestId('DesignSystem-ChipInput');
      const icon = getByTestId('DesignSystem-ChipInput--Icon');

      expect(container).toHaveAttribute('tabIndex', '-1');
      expect(icon).toHaveAttribute('tabIndex', '-1');
    });

    it('should focus input when container is clicked regardless of size', () => {
      const { getByTestId } = render(<ChipInput {...defaultProps} size="small" />);

      const container = getByTestId('DesignSystem-ChipInput');
      const input = getByTestId('DesignSystem-ChipInput--Input');

      fireEvent.click(container);
      expect(input).toHaveFocus();
    });
  });
});
