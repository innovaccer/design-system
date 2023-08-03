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

describe('EditableInput component with prop: error and errorMessage', () => {
  it('renders error popover on click', () => {
    const { getByTestId, queryByTestId } = render(
      <EditableInput placeholder={StringValue} onChange={onChange} error={true} errorMessage={StringValue} />
    );

    const editableWrapper = getByTestId(editableWrapperTestId);
    fireEvent.click(editableWrapper);
    expect(queryByTestId('DesignSystem-InputWrapper')).toHaveClass('Input--error');

    const inputWrapper = getByTestId(inputTestId);
    fireEvent.mouseEnter(inputWrapper);
    expect(getByTestId('DesignSystem-InlineMessage')).toBeInTheDocument();
    expect(queryByTestId('DesignSystem-InlineMessage--Description')).toHaveClass('InlineMessage-text--alert');
  });
});

describe('EditableInput Component with overwrite class', () => {
  const className = 'DS-EditableInput';

  it('overwrite EditableInput class', () => {
    const { getByTestId } = render(
      <EditableInput placeholder={StringValue} onChange={onChange} className={className} />
    );
    expect(getByTestId('DesignSystem-EditableInput')).toHaveClass(className);
  });
});
