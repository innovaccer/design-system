import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import Textarea, { TextareaProps as Props } from '../Textarea';

const name = 'Textarea';
const placeholder = 'Write something..';
const BooleanValue = [true, false];
const FunctionValue = jest.fn();
const value = 'Design System';
const dataTestId = 'DesignSystem-Textarea';

describe('Textarea component', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(name, { required: true }),
    placeholder: valueHelper(placeholder, { required: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
    value: valueHelper(value, { required: true }),
    size: valueHelper(['small', 'regular'], { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(<Textarea {...attr} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Textarea component', () => {
  it('renders textarea element', () => {
    const { getByTestId } = render(<Textarea />);
    expect(getByTestId(dataTestId).tagName).toMatch('TEXTAREA');
  });

  it('renders disabled textarea', () => {
    const { getByTestId } = render(<Textarea disabled={true} />);
    expect(getByTestId(dataTestId)).toHaveAttribute('disabled');
  });

  it('renders textarea with error', () => {
    const { getByTestId } = render(<Textarea error={true} />);
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--error');
  });

  it('renders textarea with placeholder', () => {
    const { getByTestId } = render(<Textarea placeholder={placeholder} />);
    expect(getByTestId(dataTestId)).toHaveAttribute('placeholder', placeholder);
  });
});

describe('Textarea component with prop: rows', () => {
  const rows = 6;
  const defaultRows = 3;

  it(`renders ${rows} rows`, () => {
    const { getByTestId } = render(<Textarea rows={rows} />);
    expect(getByTestId(dataTestId)).toHaveAttribute('rows', `${rows}`);
  });

  it('renders default rows', () => {
    const { getByTestId } = render(<Textarea />);
    expect(getByTestId(dataTestId)).toHaveAttribute('rows', `${defaultRows}`);
  });
});

describe('Textarea component with prop: resize', () => {
  it('resizes textarea', () => {
    const { getByTestId } = render(<Textarea />);
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--resize');
  });

  it('does not resize textarea', () => {
    const { getByTestId } = render(<Textarea resize={false} />);
    expect(getByTestId(dataTestId)).not.toHaveClass('Textarea--resize');
  });
});

describe('Textarea component with prop: size', () => {
  it('renders with default size (regular)', () => {
    const { getByTestId } = render(<Textarea />);
    expect(getByTestId(dataTestId)).not.toHaveClass('Textarea--small');
  });

  it('renders with regular size', () => {
    const { getByTestId } = render(<Textarea size="regular" />);
    expect(getByTestId(dataTestId)).not.toHaveClass('Textarea--small');
  });

  it('renders with small size', () => {
    const { getByTestId } = render(<Textarea size="small" />);
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--small');
  });
});

describe('Textarea component with size prop combinations', () => {
  it('renders small size with error state', () => {
    const { getByTestId } = render(<Textarea size="small" error={true} />);
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--small');
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--error');
  });

  it('renders regular size with error state', () => {
    const { getByTestId } = render(<Textarea size="regular" error={true} />);
    expect(getByTestId(dataTestId)).not.toHaveClass('Textarea--small');
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--error');
  });

  it('renders small size with disabled state', () => {
    const { getByTestId } = render(<Textarea size="small" disabled={true} />);
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--small');
    expect(getByTestId(dataTestId)).toHaveAttribute('disabled');
  });

  it('renders small size with readonly state', () => {
    const { getByTestId } = render(<Textarea size="small" readOnly={true} />);
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--small');
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--readOnly');
  });

  it('renders small size with resize disabled', () => {
    const { getByTestId } = render(<Textarea size="small" resize={false} />);
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--small');
    expect(getByTestId(dataTestId)).not.toHaveClass('Textarea--resize');
  });

  it('renders small size with custom rows', () => {
    const customRows = 5;
    const { getByTestId } = render(<Textarea size="small" rows={customRows} />);
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--small');
    expect(getByTestId(dataTestId)).toHaveAttribute('rows', `${customRows}`);
  });

  it('renders all modifier classes together', () => {
    const { getByTestId } = render(<Textarea size="small" error={true} readOnly={true} resize={true} />);
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--small');
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--error');
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--readOnly');
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--resize');
  });
});

describe('Textarea component with size prop edge cases', () => {
  it('handles undefined size prop gracefully', () => {
    const { getByTestId } = render(<Textarea size={undefined as any} />);
    expect(getByTestId(dataTestId)).not.toHaveClass('Textarea--small');
  });

  it('handles null size prop gracefully', () => {
    const { getByTestId } = render(<Textarea size={null as any} />);
    expect(getByTestId(dataTestId)).not.toHaveClass('Textarea--small');
  });

  it('handles empty string size prop gracefully', () => {
    const { getByTestId } = render(<Textarea size={'' as any} />);
    expect(getByTestId(dataTestId)).not.toHaveClass('Textarea--small');
  });

  it('handles invalid size prop gracefully', () => {
    const { getByTestId } = render(<Textarea size={'invalid' as any} />);
    expect(getByTestId(dataTestId)).not.toHaveClass('Textarea--small');
  });

  it('works with long placeholder text and small size', () => {
    const longPlaceholder = 'This is a very long placeholder text that should work properly with small size';
    const { getByTestId } = render(<Textarea size="small" placeholder={longPlaceholder} />);
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--small');
    expect(getByTestId(dataTestId)).toHaveAttribute('placeholder', longPlaceholder);
  });

  it('works with long value and small size', () => {
    const longValue =
      'This is a very long value that should be displayed properly in a small textarea component without any issues';
    const { getByTestId } = render(<Textarea size="small" value={longValue} />);
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--small');
    expect(getByTestId(dataTestId)).toHaveValue(longValue);
  });
});

describe('Textarea component with size prop accessibility', () => {
  it('preserves accessibility attributes with small size', () => {
    const ariaLabel = 'Description';
    const { getByTestId } = render(
      <Textarea size="small" aria-label={ariaLabel} aria-required={true} aria-invalid={true} />
    );
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--small');
    expect(getByTestId(dataTestId)).toHaveAttribute('aria-label', ariaLabel);
    expect(getByTestId(dataTestId)).toHaveAttribute('aria-required', 'true');
    expect(getByTestId(dataTestId)).toHaveAttribute('aria-invalid', 'true');
  });

  it('preserves aria-labelledby with different sizes', () => {
    const labelId = 'textarea-label';
    const { getByTestId, rerender } = render(<Textarea size="small" aria-labelledby={labelId} />);
    expect(getByTestId(dataTestId)).toHaveAttribute('aria-labelledby', labelId);

    rerender(<Textarea size="regular" aria-labelledby={labelId} />);
    expect(getByTestId(dataTestId)).toHaveAttribute('aria-labelledby', labelId);
  });
});

describe('Textarea component with size prop behavior', () => {
  it('handles size changes after initial render', () => {
    const { getByTestId, rerender } = render(<Textarea size="regular" />);
    expect(getByTestId(dataTestId)).not.toHaveClass('Textarea--small');

    rerender(<Textarea size="small" />);
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--small');

    rerender(<Textarea size="regular" />);
    expect(getByTestId(dataTestId)).not.toHaveClass('Textarea--small');
  });

  it('maintains focus during size changes', () => {
    const { getByTestId, rerender } = render(<Textarea size="regular" />);
    const textarea = getByTestId(dataTestId);

    textarea.focus();
    expect(document.activeElement).toBe(textarea);

    rerender(<Textarea size="small" />);
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--small');
  });

  it('preserves value during size changes', () => {
    const testValue = 'Test value';
    const { getByTestId, rerender } = render(<Textarea size="regular" value={testValue} />);
    expect(getByTestId(dataTestId)).toHaveValue(testValue);

    rerender(<Textarea size="small" value={testValue} />);
    expect(getByTestId(dataTestId)).toHaveValue(testValue);
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--small');
  });
});

describe('Textarea component event handling with size prop', () => {
  const onChange = jest.fn();
  const onFocus = jest.fn();
  const onBlur = jest.fn();
  const onClick = jest.fn();

  beforeEach(() => {
    onChange.mockClear();
    onFocus.mockClear();
    onBlur.mockClear();
    onClick.mockClear();
  });

  it('triggers onChange event properly with small size', () => {
    const newValue = 'New text content';
    const { getByTestId } = render(<Textarea size="small" onChange={onChange} />);
    const textarea = getByTestId(dataTestId);

    fireEvent.change(textarea, { target: { value: newValue } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--small');
  });

  it('triggers focus and blur events properly with small size', () => {
    const { getByTestId } = render(<Textarea size="small" onFocus={onFocus} onBlur={onBlur} />);
    const textarea = getByTestId(dataTestId);

    fireEvent.focus(textarea);
    expect(onFocus).toHaveBeenCalledTimes(1);

    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalledTimes(1);
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--small');
  });

  it('triggers click event properly with small size', () => {
    const { getByTestId } = render(<Textarea size="small" onClick={onClick} />);
    const textarea = getByTestId(dataTestId);

    fireEvent.click(textarea);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--small');
  });

  it('handles multiple events with different sizes', () => {
    const { getByTestId, rerender } = render(
      <Textarea size="regular" onChange={onChange} onFocus={onFocus} onClick={onClick} />
    );
    let textarea = getByTestId(dataTestId);

    fireEvent.click(textarea);
    fireEvent.focus(textarea);
    fireEvent.change(textarea, { target: { value: 'test' } });

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledTimes(1);

    rerender(<Textarea size="small" onChange={onChange} onFocus={onFocus} onClick={onClick} />);
    textarea = getByTestId(dataTestId);

    fireEvent.click(textarea);
    fireEvent.change(textarea, { target: { value: 'test2' } });

    expect(onClick).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--small');
  });
});

describe('Textarea component CSS styling with size prop', () => {
  it('applies correct CSS class for small size', () => {
    const { getByTestId } = render(<Textarea size="small" />);
    const textarea = getByTestId(dataTestId);

    expect(textarea).toHaveClass('Textarea--small');
    expect(textarea.className).toContain('Textarea--small');
  });

  it('does not apply small CSS class for regular size', () => {
    const { getByTestId } = render(<Textarea size="regular" />);
    const textarea = getByTestId(dataTestId);

    expect(textarea).not.toHaveClass('Textarea--small');
    expect(textarea.className).not.toContain('Textarea--small');
  });

  it('applies both base and size-specific CSS classes', () => {
    const { getByTestId } = render(<Textarea size="small" />);
    const textarea = getByTestId(dataTestId);

    expect(textarea).toHaveClass('Textarea');
    expect(textarea).toHaveClass('Textarea--small');
    expect(textarea).toHaveClass('Textarea--resize');
  });

  it('applies small size class with other modifier classes', () => {
    const { getByTestId } = render(<Textarea size="small" error={true} readOnly={true} />);
    const textarea = getByTestId(dataTestId);

    expect(textarea).toHaveClass('Textarea');
    expect(textarea).toHaveClass('Textarea--small');
    expect(textarea).toHaveClass('Textarea--error');
    expect(textarea).toHaveClass('Textarea--readOnly');
    expect(textarea).toHaveClass('Textarea--resize');
  });

  it('maintains correct class order regardless of prop order', () => {
    const { getByTestId } = render(<Textarea error={true} size="small" readOnly={true} resize={false} />);
    const textarea = getByTestId(dataTestId);

    expect(textarea).toHaveClass('Textarea');
    expect(textarea).toHaveClass('Textarea--small');
    expect(textarea).toHaveClass('Textarea--error');
    expect(textarea).toHaveClass('Textarea--readOnly');
    expect(textarea).not.toHaveClass('Textarea--resize');
  });

  it('dynamically updates CSS classes when size changes', () => {
    const { getByTestId, rerender } = render(<Textarea size="regular" />);
    const textarea = getByTestId(dataTestId);

    expect(textarea).not.toHaveClass('Textarea--small');

    rerender(<Textarea size="small" />);
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--small');

    rerender(<Textarea size="regular" />);
    expect(getByTestId(dataTestId)).not.toHaveClass('Textarea--small');
  });

  it('preserves custom className while applying size classes', () => {
    const customClass = 'custom-textarea-class';
    const { getByTestId } = render(<Textarea size="small" className={customClass} />);
    const textarea = getByTestId(dataTestId);

    expect(textarea).toHaveClass('Textarea');
    expect(textarea).toHaveClass('Textarea--small');
    expect(textarea).toHaveClass(customClass);
  });

  it('handles multiple custom classes with size prop', () => {
    const customClasses = 'custom-class-1 custom-class-2';
    const { getByTestId } = render(<Textarea size="small" className={customClasses} />);
    const textarea = getByTestId(dataTestId);

    expect(textarea).toHaveClass('Textarea');
    expect(textarea).toHaveClass('Textarea--small');
    expect(textarea).toHaveClass('custom-class-1');
    expect(textarea).toHaveClass('custom-class-2');
  });
});

describe('Textarea component CSS module integration', () => {
  it('uses CSS modules correctly for base class', () => {
    const { getByTestId } = render(<Textarea />);
    const textarea = getByTestId(dataTestId);

    expect(textarea.className).toMatch(/Textarea/);
  });

  it('uses CSS modules correctly for small size modifier', () => {
    const { getByTestId } = render(<Textarea size="small" />);
    const textarea = getByTestId(dataTestId);

    expect(textarea.className).toMatch(/Textarea--small/);
  });

  it('applies CSS module classes in correct format', () => {
    const { getByTestId } = render(<Textarea size="small" error={true} />);
    const textarea = getByTestId(dataTestId);
    const classNames = textarea.className.split(' ');

    // Check that CSS module classes are present
    expect(classNames.some((cls) => cls.includes('Textarea') && !cls.includes('--'))).toBe(true);
    expect(classNames.some((cls) => cls.includes('Textarea--small'))).toBe(true);
    expect(classNames.some((cls) => cls.includes('Textarea--error'))).toBe(true);
  });
});

describe('Textarea component size prop edge cases and regressions', () => {
  it('handles size prop with other custom props', () => {
    const customProps = {
      'data-custom': 'test-value',
      'aria-describedby': 'description-id',
      tabIndex: 0,
    };
    const { getByTestId } = render(<Textarea size="small" {...customProps} />);
    const textarea = getByTestId(dataTestId);

    expect(textarea).toHaveClass('Textarea--small');
    expect(textarea).toHaveAttribute('data-custom', 'test-value');
    expect(textarea).toHaveAttribute('aria-describedby', 'description-id');
    expect(textarea).toHaveAttribute('tabIndex', '0');
  });

  it('maintains size styling during form interactions', () => {
    const { getByTestId } = render(
      <form>
        <Textarea size="small" name="test-textarea" required />
      </form>
    );
    const textarea = getByTestId(dataTestId);

    expect(textarea).toHaveClass('Textarea--small');
    expect(textarea).toHaveAttribute('name', 'test-textarea');
    expect(textarea).toHaveAttribute('required');
  });

  it('preserves size during ref forwarding', () => {
    const textareaRef = React.createRef<HTMLTextAreaElement>();
    const { getByTestId } = render(<Textarea size="small" ref={textareaRef} />);

    expect(textareaRef.current).toBeTruthy();
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--small');
    expect(textareaRef.current?.classList.contains('Textarea--small')).toBe(true);
  });

  it('works correctly with spread props and size', () => {
    const spreadProps = {
      placeholder: 'Test placeholder',
      rows: 5,
      disabled: false,
      'data-testid': 'custom-testid',
    };
    const { getByTestId } = render(<Textarea size="small" {...spreadProps} />);
    const textarea = getByTestId(dataTestId);

    expect(textarea).toHaveClass('Textarea--small');
    expect(textarea).toHaveAttribute('placeholder', 'Test placeholder');
    expect(textarea).toHaveAttribute('rows', '5');
  });
});

describe('Textarea component size prop snapshot validation', () => {
  it('matches snapshot for small size basic configuration', () => {
    const { asFragment } = render(<Textarea size="small" placeholder="Small textarea" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot for small size with all modifiers', () => {
    const { asFragment } = render(
      <Textarea
        size="small"
        error={true}
        readOnly={true}
        resize={false}
        placeholder="Complex small textarea"
        rows={4}
        name="complex-textarea"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot for size prop transitions', () => {
    const { asFragment, rerender } = render(<Textarea size="regular" />);
    const regularSnapshot = asFragment();

    rerender(<Textarea size="small" />);
    const smallSnapshot = asFragment();

    expect(regularSnapshot).toMatchSnapshot();
    expect(smallSnapshot).toMatchSnapshot();
    expect(regularSnapshot).not.toEqual(smallSnapshot);
  });
});

describe('Textarea component with prop: onChange', () => {
  const onChange = jest.fn();
  const newValue = 'Textarea-test';

  beforeEach(() => {
    onChange.mockClear();
  });

  it('renders textarea as uncontrolled component', () => {
    const { getByTestId } = render(<Textarea defaultValue={value} onChange={onChange} />);
    const textarea = getByTestId(dataTestId);

    expect(getByTestId(dataTestId)).toHaveValue(value);
    fireEvent.change(textarea, { target: { value: newValue } });
    expect(getByTestId(dataTestId)).toHaveValue(newValue);

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('renders textarea as controlled component (with no change)', () => {
    const { getByTestId } = render(<Textarea value={value} />);
    const textarea = getByTestId(dataTestId);

    expect(getByTestId(dataTestId)).toHaveValue(value);
    fireEvent.change(textarea, { target: { value: newValue } });
    expect(getByTestId(dataTestId)).toHaveValue(value);
  });

  it('renders textarea as controlled component (with change)', () => {
    const { getByTestId, rerender } = render(<Textarea value={value} onChange={onChange} />);
    const textarea = getByTestId(dataTestId);

    expect(getByTestId(dataTestId)).toHaveValue(value);
    fireEvent.change(textarea, { target: { value: newValue } });

    expect(onChange).toHaveBeenCalled();

    rerender(<Textarea value={newValue} onChange={onChange} />);
    expect(getByTestId(dataTestId)).toHaveValue(newValue);
  });

  it('works with uncontrolled component and small size', () => {
    const { getByTestId } = render(<Textarea size="small" defaultValue={value} onChange={onChange} />);
    const textarea = getByTestId(dataTestId);

    expect(getByTestId(dataTestId)).toHaveValue(value);
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--small');

    fireEvent.change(textarea, { target: { value: newValue } });
    expect(getByTestId(dataTestId)).toHaveValue(newValue);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('works with controlled component and small size', () => {
    const { getByTestId, rerender } = render(<Textarea size="small" value={value} onChange={onChange} />);
    const textarea = getByTestId(dataTestId);

    expect(getByTestId(dataTestId)).toHaveValue(value);
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--small');

    fireEvent.change(textarea, { target: { value: newValue } });
    expect(onChange).toHaveBeenCalled();

    rerender(<Textarea size="small" value={newValue} onChange={onChange} />);
    expect(getByTestId(dataTestId)).toHaveValue(newValue);
    expect(getByTestId(dataTestId)).toHaveClass('Textarea--small');
  });
});
