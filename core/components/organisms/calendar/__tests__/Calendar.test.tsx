import * as React from 'react';
import { shallow } from 'enzyme';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import Calendar, { ICalendarProps as IProps } from '../Calendar';

const day = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

describe('Calendar component', () => {
  const mapper: Record<string, any> = {
    disabledBefore: valueHelper([(new Date(2020, 2, 10)).getTime()], { iterate: true }),
    disabledAfter: valueHelper([(new Date(2020, 2, 20)).getTime()], { iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Calendar
          date={new Date(2020, 2, 15)}
          {...attr}
        >
          Calendar
        </Calendar >
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Calendar component', () => {
  const mapper: Record<string, any> = {
    firstDayOfWeek: valueHelper(day, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Calendar
          date={new Date(2020, 2, 15)}
          {...attr}
        >
          Calendar
        </Calendar >
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
