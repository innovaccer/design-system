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
  onClick: FunctionValue
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
      const { baseElement } = render(
        <ChipInput {...attr} />
      );
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
    const { getByTestId, getAllByTestId } = render(
      <ChipInput
        defaultValue={value}
        onChange={FunctionValue}
      />
    );

    const inputComponent = getByTestId('DesignSystem-ChipInput--Input');
    fireEvent.change(inputComponent, { target: { value: value[0] } });
    fireEvent.keyDown(inputComponent, { key: 'Enter' });
    expect(getAllByTestId('DesignSystem-ChipInput--Chip')).toHaveLength(value.length);
  });

  it('ChipInput with prop allowDuplicate: true', () => {
    const { getByTestId, getAllByTestId } = render(
      <ChipInput
        defaultValue={value}
        onChange={FunctionValue}
        allowDuplicates={true}
      />
    );

    const inputComponent = getByTestId('DesignSystem-ChipInput--Input');
    fireEvent.change(inputComponent, { target: { value: value[0] } });
    fireEvent.keyDown(inputComponent, { key: 'Enter' });
    expect(getAllByTestId('DesignSystem-ChipInput--Chip')).toHaveLength(value.length + 1);
  });

});

describe('Controlled ChipInput component', () => {

  it('Add chip if enter is pressed', () => {
    const newValue = ['1020', '80', '90'];
    const { rerender, getByTestId, getAllByTestId } = render(
      <ChipInput
        value={value}
        onChange={FunctionValue}
      />
    );
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
      <ChipInput
        defaultValue={value}
        onChange={FunctionValue}
      />
    );
    expect(getAllByTestId('DesignSystem-ChipInput--Chip')).toHaveLength(value.length);

    const closeIcon = getByTestId('DesignSystem-ChipInput--Icon');
    fireEvent.click(closeIcon);

    expect(FunctionValue).toHaveBeenCalled();
    expect(queryAllByTestId('DesignSystem-ChipInput--Chip')).toHaveLength(newValue.length);
  });

});
