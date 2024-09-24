import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { DatePicker } from '@/index';
import { DatePickerProps as Props } from '@/index.type';

let dateNowSpy: any;

beforeAll(() => {
  // Lock Time
  dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => 1632314975530);
});

afterAll(() => {
  // Unlock Time
  dateNowSpy.mockRestore();
});

const view = ['year', 'month', 'date'];
const booleanValue = [true, false];
const FunctionValue = jest.fn();
const newDate = new Date(2020, 2, 1);

const testFunc = (props: Record<string, any>): void => {
  const attr = filterUndefined(props) as Props;

  it(testMessageHelper(attr), () => {
    const { baseElement } = render(<DatePicker date={newDate} {...attr} />);
    expect(baseElement).toMatchSnapshot();
  });
};

describe('DatePicker component snapshots', () => {
  describe('renders snapshot for prop:view', () => {
    const mapper: Record<string, any> = {
      view: valueHelper(view, { required: true, iterate: true }),
    };
    testHelper(mapper, testFunc);
  });

  describe('renders snapshot for prop:withInput', () => {
    const mapper: Record<string, any> = {
      withInput: valueHelper(booleanValue, { required: true, iterate: true }),
    };
    testHelper(mapper, testFunc);
  });

  describe('renders snapshot for prop:open', () => {
    const mapper: Record<string, any> = {
      open: valueHelper(booleanValue, { required: true, iterate: true }),
    };
    testHelper(mapper, testFunc);
  });

  describe('renders snapshot for prop:disabledBefore, prop:disabledAfter', () => {
    const mapper: Record<string, any> = {
      disabledBefore: valueHelper('10/10/2020', { required: true }),
      disabledAfter: valueHelper('10/10/2021', { required: true }),
    };
    testHelper(mapper, testFunc);
  });

  describe('renders snapshot for prop:disabledBefore', () => {
    const mapper: Record<string, any> = {
      disabledBefore: valueHelper('10/10/2020', { required: true }),
    };
    testHelper(mapper, testFunc);
  });

  describe('renders snapshot for prop:disabledAfter', () => {
    const mapper: Record<string, any> = {
      disabledAfter: valueHelper('10/10/2021', { required: true }),
    };
    testHelper(mapper, testFunc);
  });
});

describe('DatePicker component today date chip', () => {
  it('renders component with today date chip', () => {
    const { getByTestId } = render(<DatePicker date={newDate} />);
    expect(getByTestId('DesignSystem-Select--TodaysDate-wrapper')).toBeInTheDocument();
  });

  it('calls click handler', () => {
    const { getByTestId } = render(<DatePicker onDateChange={FunctionValue} date={newDate} />);
    const chip = getByTestId('DesignSystem-Chip--GenericChip');
    fireEvent.click(chip);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('disable today chip in case of disabledAfter prop', () => {
    const todayDate = new Date();
    const { getByTestId } = render(<DatePicker disabledAfter={todayDate} view="date" />);
    expect(getByTestId('DesignSystem-Chip--GenericChip')).not.toHaveClass('Chip-action--disabled');
  });
});

describe('renders DatePicker component Event Handlers ', () => {
  it('checks for trigger popover on input field click', () => {
    const { getByTestId } = render(<DatePicker onDateChange={FunctionValue} withInput={true} />);
    const input = getByTestId('DesignSystem-InputWrapper');
    fireEvent.click(input);
    expect(getByTestId('DesignSystem-Popover')).toBeInTheDocument();
  });

  it('checks for input field onChange event', () => {
    const { getByTestId } = render(<DatePicker onDateChange={FunctionValue} withInput={true} />);
    const input = getByTestId('DesignSystem-Input');
    fireEvent.change(input, { target: { value: newDate } });
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('checks onCancel Event', () => {
    const { getByTestId } = render(<DatePicker onDateChange={FunctionValue} withInput={true} date={newDate} />);
    const closeIcon = getByTestId('DesignSystem-Input--closeIcon');
    expect(closeIcon).toBeInTheDocument();
    fireEvent.click(closeIcon);
    expect(getByTestId('DesignSystem-Popover')).toBeInTheDocument();
  });

  it('checks for custom placeholderChar option onClose Event', () => {
    const { getByTestId } = render(
      <DatePicker
        onDateChange={FunctionValue}
        withInput={true}
        date={newDate}
        inputOptions={{
          required: true,
          placeholderChar: '*',
        }}
      />
    );
    const closeIcon = getByTestId('DesignSystem-Input--closeIcon');
    fireEvent.click(closeIcon);
    expect(getByTestId('DesignSystem-Input')).toHaveValue('**/**/****');
  });

  it('checks for input field onChange event with empty date', async () => {
    const { getByTestId } = render(<DatePicker date="" onDateChange={FunctionValue} withInput={true} />);
    const input = getByTestId('DesignSystem-Input');
    fireEvent.change(input, { currentTarget: { value: '' } });
    fireEvent.blur(input);
    expect(input).toHaveValue('__/__/____');
  });

  it('checks onBlur Event', () => {
    const { getByTestId } = render(<DatePicker onDateChange={FunctionValue} withInput={true} />);
    const input = getByTestId('DesignSystem-Input');
    fireEvent.blur(input);
    expect(input).toHaveValue('__/__/____');
  });
  it('checks onFocus Event', () => {
    const { getByTestId } = render(<DatePicker onDateChange={FunctionValue} withInput={true} />);
    const input = getByTestId('DesignSystem-Input');
    fireEvent.focus(input);
    expect(input).toHaveValue('__/__/____');
  });
  it('checks for input field onError event', () => {
    const { getByTestId } = render(
      <DatePicker
        disabledAfter={new Date('2028-01-19T20:00:00.000Z')}
        disabledBefore={new Date('2021-01-19T20:00:00.000Z')}
        onError={FunctionValue}
        withInput={true}
      />
    );
    const input = getByTestId('DesignSystem-Input');
    fireEvent.change(input, { target: { value: newDate } });
    expect(FunctionValue).toHaveBeenCalled();
  });
});
