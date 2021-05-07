import * as React from 'react';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { DateRangePicker } from '@/index';
import { DateRangePickerProps as Props } from '@/index.type';

const view = ['year', 'month', 'date'];
const booleanValue = [true, false];

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    view: valueHelper(view, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          startDate={new Date(2020, 2, 3)}
          endDate={new Date(2020, 2, 11)}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    monthsInView: valueHelper([1, 2, 3], { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          startDate={new Date(2020, 2, 3)}
          endDate={new Date(2020, 2, 11)}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    monthsInView: valueHelper([1, 2, 3], { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          startDate={new Date(2020, 2, 3)}
          endDate={new Date(2020, 2, 11)}
          yearNav={2019}
          monthNav={11}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    rangeLimit: valueHelper(7, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          startDate={new Date(2020, 2, 3)}
          endDate={new Date(2020, 2, 11)}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    withInput: valueHelper(booleanValue, { required: true, iterate: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          startDate={new Date(2020, 2, 3)}
          endDate={new Date(2020, 2, 11)}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    open: valueHelper(booleanValue, { required: true, iterate: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          startDate={new Date(2020, 2, 3)}
          endDate={new Date(2020, 2, 11)}
          withInput={true}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
