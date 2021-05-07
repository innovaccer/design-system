import * as React from 'react';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { DatePicker } from '@/index';
import { DatePickerProps as Props } from '@/index.type';

const view = ['year', 'month', 'date'];
const booleanValue = [true, false];

describe('DatePicker component', () => {
  const mapper: Record<string, any> = {
    view: valueHelper(view, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DatePicker
          date={new Date(2020, 2, 1)}
          {...attr}
        />
      );
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
      const { baseElement } = render(
        <DatePicker
          date={new Date(2020, 2, 1)}
          {...attr}
        />
      );
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
      const { baseElement } = render(
        <DatePicker
          date={new Date(2020, 2, 1)}
          withInput={true}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
