import * as React from 'react';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { Calendar } from '@/index';
import { CalendarProps as Props } from '@/index.type';

const day = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const size = ['small', 'large'];
const view = ['year', 'month', 'date'];

describe('Calendar component', () => {
  const mapper: Record<string, any> = {
    disabledBefore: valueHelper([Date.UTC(2020, 2, 10)], { iterate: true }),
    disabledAfter: valueHelper([Date.UTC(2020, 2, 20)], { iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Calendar date={new Date(2020, 2, 15)} {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Calendar component', () => {
  const mapper: Record<string, any> = {
    firstDayOfWeek: valueHelper(day, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Calendar date={new Date(2020, 2, 15)} {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Calendar component', () => {
  const mapper: Record<string, any> = {
    size: valueHelper(size, { required: true, iterate: true }),
    view: valueHelper(view, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Calendar date={new Date(2020, 2, 15)} {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Calendar component', () => {
  const mapper: Record<string, any> = {
    size: valueHelper(size, { required: true, iterate: true }),
    monthsInView: valueHelper([1, 2, 3], { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Calendar date={new Date(2020, 2, 15)} {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Calendar compoennt', () => {
  it("with size: 'small', view: 'date'", () => {
    const { getByTestId, getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} size="small" view="date" />);

    expect(getByTestId('DesignSystem-Calendar')).toHaveClass('Calendar--small');
    expect(getAllByTestId('DesignSystem-Calendar--dateValue')[0]).toHaveClass('Calendar-dateValue--small');
  });

  it("with size: 'small', view: 'month'", () => {
    const { getByTestId, getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} size="small" view="month" />);

    expect(getByTestId('DesignSystem-Calendar')).toHaveClass('Calendar--small');
    expect(getAllByTestId('DesignSystem-Calendar--monthValue')[0]).toHaveClass('Calendar-monthValue--small');
  });

  it("with size: 'small', view: 'year'", () => {
    const { getByTestId, getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} size="small" view="year" />);

    expect(getByTestId('DesignSystem-Calendar')).toHaveClass('Calendar--small');
    expect(getAllByTestId('DesignSystem-Calendar--yearValue')[0]).toHaveClass('Calendar-yearValue--small');
  });

  it("with size: 'large', view: 'date'", () => {
    const { getByTestId, getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} size="large" view="date" />);

    expect(getByTestId('DesignSystem-Calendar')).toHaveClass('Calendar--large');
    expect(getAllByTestId('DesignSystem-Calendar--dateValue')[0]).toHaveClass('Calendar-dateValue--large');
  });

  it("with size: 'large', view: 'month'", () => {
    const { getByTestId, getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} size="large" view="month" />);

    expect(getByTestId('DesignSystem-Calendar')).toHaveClass('Calendar--large');
    expect(getAllByTestId('DesignSystem-Calendar--monthValue')[0]).toHaveClass('Calendar-monthValue--large');
  });

  it("with size: 'large', view: 'year'", () => {
    const { getByTestId, getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} size="large" view="year" />);

    expect(getByTestId('DesignSystem-Calendar')).toHaveClass('Calendar--large');
    expect(getAllByTestId('DesignSystem-Calendar--yearValue')[0]).toHaveClass('Calendar-yearValue--large');
  });
});
