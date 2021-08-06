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

describe('Textarea component with prop: onChange', () => {
  const onChange = jest.fn();
  const newValue = 'Textarea-test';

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
});
