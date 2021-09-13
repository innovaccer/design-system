import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { DatePicker } from '@/index';
import { DatePickerProps as Props } from '@/index.type';

const view = ['year', 'month', 'date'];
const booleanValue = [true, false];
const FunctionValue = jest.fn();

describe('DatePicker component', () => {
  const mapper: Record<string, any> = {
    view: valueHelper(view, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<DatePicker date={new Date(2020, 2, 1)} {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DatePicker component', () => {
  const mapper: Record<string, any> = {
    withInput: valueHelper(booleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<DatePicker date={new Date(2020, 2, 1)} {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DatePicker component', () => {
  const mapper: Record<string, any> = {
    open: valueHelper(booleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<DatePicker date={new Date(2020, 2, 1)} withInput={true} {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DatePicker component', () => {
  it('renders component with today date chip', () => {
    const { getByTestId } = render(<DatePicker date={new Date(2021, 9, 8)} />);
    expect(getByTestId('DesignSystem-Select--TodaysDate-wrapper')).toBeInTheDocument();
  });

  it('calls click handler', () => {
    const { getByTestId } = render(<DatePicker onDateChange={FunctionValue} />);
    const chip = getByTestId('DesignSystem-Chip--GenericChip');
    fireEvent.click(chip);
    expect(FunctionValue).toHaveBeenCalled();
  });
});
