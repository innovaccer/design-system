import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EditableInput } from '@/index';
import { EditableInputProps as Props } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const StringValue = 'String Value';
const size = ['tiny', 'regular'];
const onChange = jest.fn();
const onInputChange = jest.fn();

const editableWrapperTestId = 'DesignSystem-EditableWrapper';
const inputTestId = 'DesignSystem-InputWrapper';
const defaultCompTestId = 'DesignSystem-EditableInput--Default';
const inputCompTestId = 'DesignSystem-EditableInput--Input';

describe('EditableInput component', () => {
  const mapper = {
    placeholer: valueHelper(StringValue, { required: true }),
    onChange: valueHelper(onChange, { iterate: true }),
    disableSaveAction: valueHelper(true, { required: true }),
    size: valueHelper(size, { required: true, iterate: true }),
    error: valueHelper(true, { required: true }),
    errorMessage: valueHelper(StringValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(<EditableInput {...attr} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('EditableInput component', () => {
  it('renders children', () => {
    const { getByTestId } = render(<EditableInput placeholder={StringValue} onChange={onChange} />);

    expect(getByTestId('DesignSystem-EditableInput').textContent).toMatch(StringValue);
  });

  it('renders default div initially', () => {
    const { getByTestId, queryByTestId } = render(<EditableInput placeholder={StringValue} onChange={onChange} />);

    expect(getByTestId(defaultCompTestId)).toBeInTheDocument();
    expect(queryByTestId(inputCompTestId)).not.toBeInTheDocument();
    expect(queryByTestId('DesignSystem-EditableInput--Actions')).not.toBeInTheDocument();
  });

  it('renders input on hover', () => {
    const { getByTestId, queryByTestId } = render(<EditableInput placeholder={StringValue} onChange={onChange} />);

    const editableWrapper = getByTestId(editableWrapperTestId);
    fireEvent.mouseEnter(editableWrapper);

    expect(queryByTestId(defaultCompTestId)).not.toBeInTheDocument();
    expect(getByTestId(inputCompTestId)).toBeInTheDocument();
    expect(queryByTestId('DesignSystem-EditableInput--Actions')).not.toBeInTheDocument();
    expect(queryByTestId(inputCompTestId)).toHaveAttribute('placeholder', StringValue);
  });

  it('renders default div on mouseLeave', () => {
    const { getByTestId, queryByTestId } = render(<EditableInput placeholder={StringValue} onChange={onChange} />);

    const editableWrapper = getByTestId(editableWrapperTestId);

    fireEvent.mouseEnter(editableWrapper);
    expect(queryByTestId(defaultCompTestId)).not.toBeInTheDocument();
    expect(getByTestId(inputCompTestId)).toBeInTheDocument();

    fireEvent.mouseLeave(editableWrapper);
    expect(getByTestId(defaultCompTestId)).toBeInTheDocument();
    expect(queryByTestId(inputCompTestId)).not.toBeInTheDocument();
  });

  it('renders input and button on click', () => {
    const { getByTestId, queryByTestId } = render(<EditableInput placeholder={StringValue} onChange={onChange} />);

    const editableWrapper = getByTestId(editableWrapperTestId);
    fireEvent.click(editableWrapper);

    expect(queryByTestId(defaultCompTestId)).not.toBeInTheDocument();
    expect(getByTestId(inputCompTestId)).toBeInTheDocument();
    expect(getByTestId('DesignSystem-EditableInput--Actions')).toBeInTheDocument();

    const inputComp = queryByTestId(inputCompTestId);
    expect(document.activeElement).toEqual(inputComp);
  });
});

describe('EditableInput component with prop: size', () => {
  it('renders default size: regular', () => {
    const { getByTestId } = render(<EditableInput placeholder={StringValue} onChange={onChange} />);

    expect(getByTestId(defaultCompTestId)).toHaveClass('EditableInput-default--regular');
  });

  it('renders size: tiny', () => {
    const { getByTestId } = render(<EditableInput placeholder={StringValue} onChange={onChange} size="tiny" />);

    expect(getByTestId(defaultCompTestId)).toHaveClass('EditableInput-default--tiny');

    const editableWrapper = getByTestId(editableWrapperTestId);
    fireEvent.mouseEnter(editableWrapper);
    expect(getByTestId(inputTestId)).toHaveClass('EditableInput-Input--tiny');
  });
});

describe('EditableInput component with action buttons and props: value and inputOptions', () => {
  it('discard changes', () => {
    const { getByTestId, queryByTestId } = render(
      <EditableInput placeholder={StringValue} onChange={onChange} inputOptions={{ onChange: onInputChange }} />
    );

    const editableWrapper = getByTestId(editableWrapperTestId);
    fireEvent.click(editableWrapper);

    const inputTrigger = getByTestId(inputCompTestId);
    fireEvent.change(inputTrigger, { target: 'Design System' });

    const discardButton = getByTestId('DesignSystem-EditableInput--Discard');
    fireEvent.click(discardButton);

    expect(queryByTestId(inputCompTestId)).not.toBeInTheDocument();
    expect(getByTestId(defaultCompTestId).textContent).toMatch(StringValue);

    fireEvent.click(editableWrapper);
    expect(getByTestId(inputCompTestId)).toHaveValue('');
  });

  it('save changes', () => {
    const updatedValue = 'Design System';

    const { getByTestId, queryByTestId, rerender } = render(
      <EditableInput placeholder={StringValue} onChange={onChange} value={''} />
    );

    const editableWrapper = getByTestId(editableWrapperTestId);
    fireEvent.click(editableWrapper);

    const inputTrigger = getByTestId(inputCompTestId);
    fireEvent.change(inputTrigger, { target: updatedValue });

    const saveButton = getByTestId('DesignSystem-EditableInput--Save');
    fireEvent.click(saveButton);
    expect(onChange).toHaveBeenCalled();

    rerender(<EditableInput placeholder={StringValue} onChange={onChange} value={updatedValue} />);
    expect(queryByTestId(inputCompTestId)).not.toBeInTheDocument();
    expect(getByTestId(defaultCompTestId).textContent).toMatch(updatedValue);
  });

  it('save changes and editable input is uncontrolled', () => {
    const updatedValue = 'Design System';

    const { getByTestId, queryByTestId } = render(<EditableInput placeholder={StringValue} onChange={onChange} />);

    const editableWrapper = getByTestId(editableWrapperTestId);
    fireEvent.click(editableWrapper);

    const inputTrigger = getByTestId(inputCompTestId);
    fireEvent.change(inputTrigger, { target: updatedValue });

    const saveButton = getByTestId('DesignSystem-EditableInput--Save');
    fireEvent.click(saveButton);
    expect(onChange).toHaveBeenCalled();
    expect(queryByTestId(inputCompTestId)).not.toBeInTheDocument();
  });
});

// describe('EditableInput component with prop: error and errorMessage', () => {
//   it('renders error popover on click', () => {
//     const { getByTestId, queryByTestId } = render(
//       <EditableInput placeholder={StringValue} onChange={onChange} error={true} errorMessage={StringValue} />
//     );

//     const editableWrapper = getByTestId(editableWrapperTestId);
//     fireEvent.click(editableWrapper);
//     expect(queryByTestId('DesignSystem-InputWrapper')).toHaveClass('Input--error');

//     const inputWrapper = getByTestId(inputTestId);
//     fireEvent.mouseEnter(inputWrapper);
//     expect(getByTestId('DesignSystem-InlineMessage')).toBeInTheDocument();
//     expect(queryByTestId('DesignSystem-InlineMessage--Description')).toHaveClass('InlineMessage-text--alert');
//   });
// });

describe('EditableInput Component with overwrite class', () => {
  const className = 'DS-EditableInput';

  it('overwrite EditableInput class', () => {
    const { getByTestId } = render(
      <EditableInput placeholder={StringValue} onChange={onChange} className={className} />
    );
    expect(getByTestId('DesignSystem-EditableInput')).toHaveClass(className);
  });
});

describe('EditableInput Component CSS Styling Tests - Size-specific Padding and Styling Changes', () => {
  describe('CSS class application for size-specific styling', () => {
    it('applies correct CSS classes for regular size variant', () => {
      const { getByTestId } = render(<EditableInput placeholder={StringValue} onChange={onChange} size="regular" />);

      const defaultElement = getByTestId(defaultCompTestId);

      expect(defaultElement).toHaveClass('EditableInput-default--regular');
      expect(defaultElement).toHaveClass('EditableInput-default');
      expect(defaultElement.textContent).toBe(StringValue);
    });

    it('applies correct CSS classes for tiny size variant', () => {
      const { getByTestId } = render(<EditableInput placeholder={StringValue} onChange={onChange} size="tiny" />);

      const defaultElement = getByTestId(defaultCompTestId);

      expect(defaultElement).toHaveClass('EditableInput-default--tiny');
      expect(defaultElement).toHaveClass('EditableInput-default');
      expect(defaultElement.textContent).toBe(StringValue);
    });

    it('ensures both size variants have the base EditableInput-default class', () => {
      const { getByTestId, rerender } = render(
        <EditableInput placeholder={StringValue} onChange={onChange} size="regular" />
      );

      let defaultElement = getByTestId(defaultCompTestId);

      expect(defaultElement).toHaveClass('EditableInput-default');
      expect(defaultElement).toHaveClass('EditableInput-default--regular');

      rerender(<EditableInput placeholder={StringValue} onChange={onChange} size="tiny" />);
      defaultElement = getByTestId(defaultCompTestId);

      expect(defaultElement).toHaveClass('EditableInput-default');
      expect(defaultElement).toHaveClass('EditableInput-default--tiny');
    });
  });

  describe('Input component styling consistency across component states', () => {
    it('maintains consistent size prop when transitioning from default to input state for regular size', () => {
      const { getByTestId } = render(<EditableInput placeholder={StringValue} onChange={onChange} size="regular" />);

      const defaultElement = getByTestId(defaultCompTestId);
      expect(defaultElement).toHaveClass('EditableInput-default--regular');

      const editableWrapper = getByTestId(editableWrapperTestId);
      fireEvent.mouseEnter(editableWrapper);

      const inputWrapper = getByTestId(inputTestId);
      expect(inputWrapper).toBeInTheDocument();
      expect(inputWrapper).not.toHaveClass('EditableInput-Input--tiny');
    });

    it('maintains consistent size prop when transitioning from default to input state for tiny size', () => {
      const { getByTestId } = render(<EditableInput placeholder={StringValue} onChange={onChange} size="tiny" />);

      const defaultElement = getByTestId(defaultCompTestId);
      expect(defaultElement).toHaveClass('EditableInput-default--tiny');

      const editableWrapper = getByTestId(editableWrapperTestId);
      fireEvent.mouseEnter(editableWrapper);

      const inputWrapper = getByTestId(inputTestId);
      expect(inputWrapper).toBeInTheDocument();
      expect(inputWrapper).toHaveClass('EditableInput-Input--tiny');
    });

    it('applies correct action button positioning classes for different sizes', () => {
      const { getByTestId, rerender } = render(
        <EditableInput placeholder={StringValue} onChange={onChange} size="regular" />
      );

      const editableWrapper = getByTestId(editableWrapperTestId);
      fireEvent.click(editableWrapper);

      const actionsElement = getByTestId('DesignSystem-EditableInput--Actions');
      expect(actionsElement).toHaveClass('EditableInput-actions');
      expect(actionsElement).toHaveClass('EditableInput-actions--regular');

      rerender(<EditableInput placeholder={StringValue} onChange={onChange} size="tiny" />);

      const editableWrapperTiny = getByTestId(editableWrapperTestId);
      fireEvent.click(editableWrapperTiny);

      const actionsElementTiny = getByTestId('DesignSystem-EditableInput--Actions');
      expect(actionsElementTiny).toHaveClass('EditableInput-actions');
      expect(actionsElementTiny).toHaveClass('EditableInput-actions--tiny');
    });
  });

  describe('Size-specific styling verification for CSS changes', () => {
    it('verifies that tiny size variant has all required CSS classes for the new styling', () => {
      const { getByTestId } = render(
        <EditableInput placeholder="Tiny variant test" onChange={onChange} size="tiny" value="Test Value" />
      );

      const defaultElement = getByTestId(defaultCompTestId);

      expect(defaultElement).toHaveClass('EditableInput-default');
      expect(defaultElement).toHaveClass('EditableInput-default--tiny');
      expect(defaultElement.textContent).toBe('Test Value');

      const editableWrapper = getByTestId(editableWrapperTestId);
      fireEvent.mouseEnter(editableWrapper);

      const inputWrapper = getByTestId(inputTestId);
      expect(inputWrapper).toHaveClass('EditableInput-Input--tiny');
    });

    it('verifies that regular size variant maintains correct CSS classes after the changes', () => {
      const { getByTestId } = render(
        <EditableInput placeholder="Regular variant test" onChange={onChange} size="regular" value="Test Value" />
      );

      const defaultElement = getByTestId(defaultCompTestId);

      expect(defaultElement).toHaveClass('EditableInput-default');
      expect(defaultElement).toHaveClass('EditableInput-default--regular');
      expect(defaultElement.textContent).toBe('Test Value');

      const editableWrapper = getByTestId(editableWrapperTestId);
      fireEvent.mouseEnter(editableWrapper);

      const inputWrapper = getByTestId(inputTestId);
      expect(inputWrapper).toBeInTheDocument();
      expect(inputWrapper).not.toHaveClass('EditableInput-Input--tiny');
    });

    it('ensures size-specific padding changes are reflected in class structure', () => {
      const { getByTestId, rerender } = render(
        <EditableInput placeholder={StringValue} onChange={onChange} size="regular" />
      );

      let defaultElement = getByTestId(defaultCompTestId);
      expect(defaultElement).toHaveClass('EditableInput-default');
      expect(defaultElement).toHaveClass('EditableInput-default--regular');
      expect(defaultElement).not.toHaveClass('EditableInput-default--tiny');

      rerender(<EditableInput placeholder={StringValue} onChange={onChange} size="tiny" />);
      defaultElement = getByTestId(defaultCompTestId);
      expect(defaultElement).toHaveClass('EditableInput-default');
      expect(defaultElement).toHaveClass('EditableInput-default--tiny');
      expect(defaultElement).not.toHaveClass('EditableInput-default--regular');
    });
  });
});
