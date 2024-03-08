import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { Calendar } from '@/index';
import { CalendarProps as Props } from '@/index.type';
import { Day } from '../types';

const day: Day[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const size = ['small', 'large'];
const view = ['year', 'month', 'date'];
const FunctionValue = jest.fn();

let dateNowSpy: any;

beforeAll(() => {
  // Lock Time
  dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => 1632314975530);
});

afterAll(() => {
  // Unlock Time
  dateNowSpy.mockRestore();
});

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

describe('Calendar component', () => {
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

  it('renders events indicator on given date', () => {
    const events = { '09/12/2021': true };
    const { getByTestId, getAllByTestId } = render(
      <Calendar date={new Date('09/12/2021')} events={events} size="small" />
    );

    expect(getByTestId('DesignSystem-Calendar-Event-Indicator')).toBeInTheDocument();
    expect(getAllByTestId('DesignSystem-Calendar-Event-Indicator')[0]).toHaveClass('Calendar-eventsIndicator--small');
  });

  it('renders events indicator on given dummy date', () => {
    const events = { '10/01/2021': true };
    const { getAllByTestId } = render(<Calendar date={new Date('09/12/2021')} events={events} size="small" />);

    expect(getAllByTestId('designSystem-Calendar-WrapperClass')[0]).toHaveClass('Calendar-valueWrapper--dummy');
  });

  it('calls onClick handler when date is selected', () => {
    const { getAllByTestId } = render(
      <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="date" />
    );
    const date = getAllByTestId('DesignSystem-Calendar--dateValue')[0];
    fireEvent.click(date);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('calls onClick handler when date is selected and rangePicker is true', () => {
    const { getAllByTestId } = render(
      <Calendar date={new Date(2020, 2, 15)} rangePicker={true} onDateChange={FunctionValue} view="date" />
    );
    const date = getAllByTestId('DesignSystem-Calendar--dateValue')[0];
    fireEvent.click(date);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('calls onMouseOver handler when rangePicker is true', () => {
    const { getAllByTestId } = render(
      <Calendar date={new Date(2020, 2, 15)} rangePicker={true} onDateChange={FunctionValue} view="date" />
    );
    const date = getAllByTestId('DesignSystem-Calendar--dateValue')[0];
    fireEvent.mouseOver(date);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('calls onClick handler when jumpView is true', () => {
    const { container } = render(
      <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} jumpView={true} view="month" />
    );
    const header = container.querySelectorAll('span')[0];
    fireEvent.click(header);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('calls navIconClick handler when view is month', () => {
    const { container } = render(<Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="month" />);
    const headerIcon = container.querySelectorAll('.Calendar-headerIcon')[0];
    fireEvent.click(headerIcon);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('calls navIconClick handler when view is year', () => {
    const { container } = render(<Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="year" />);
    const headerIcon = container.querySelectorAll('.Calendar-headerIcon')[0];
    fireEvent.click(headerIcon);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('calls navIconClick handler when view is date', () => {
    const { container } = render(<Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="date" />);
    const headerIcon = container.querySelectorAll('.Calendar-headerIcon')[0];
    fireEvent.click(headerIcon);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('calls selectYear function when view is year', () => {
    const { getAllByTestId } = render(
      <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="year" />
    );
    const year = getAllByTestId('DesignSystem-Calendar--yearValue')[0];
    fireEvent.click(year);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('calls selectYear function when view is month', () => {
    const { getAllByTestId } = render(
      <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="month" />
    );
    const month = getAllByTestId('DesignSystem-Calendar--monthValue')[0];
    fireEvent.click(month);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('calls onMouseOver handler when date value is hovered', () => {
    const { getAllByTestId } = render(
      <Calendar date={new Date(2020, 2, 15)} rangePicker={false} onDateHover={FunctionValue} view="date" />
    );
    const date = getAllByTestId('DesignSystem-Calendar--dateValue')[0];
    fireEvent.mouseOver(date);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('calls onMouseOver handler when month value is hovered', () => {
    const { getAllByTestId } = render(
      <Calendar date={new Date(2020, 2, 15)} rangePicker={false} onMonthHover={FunctionValue} view="month" />
    );
    const month = getAllByTestId('DesignSystem-Calendar--monthValue')[0];
    fireEvent.mouseOver(month);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('calls onMouseOver handler when year value is hovered', () => {
    const { getAllByTestId } = render(
      <Calendar date={new Date(2020, 2, 15)} rangePicker={false} onYearHover={FunctionValue} view="year" />
    );
    const year = getAllByTestId('DesignSystem-Calendar--yearValue')[0];
    fireEvent.mouseOver(year);
    expect(FunctionValue).toHaveBeenCalled();
  });
});

describe('text color for different states', () => {
  it('should have the text color as inverse when the state is default', () => {
    const { getAllByTestId } = render(<Calendar date={new Date('2021-01-10T18:30:00.000Z')} />);
    expect(getAllByTestId('DesignSystem-Calendar--dateValue')[7]).toHaveClass('color-inverse');
  });

  it('should have text color as white when a date is selected', () => {
    const { getAllByTestId } = render(<Calendar date={new Date('2021-01-10T18:30:00.000Z')} />);
    expect(getAllByTestId('DesignSystem-Calendar--dateValue')[14]).toHaveClass('color-white');
  });

  it('should have the text color as inverse-lightest when the state is disabled', () => {
    const { getAllByTestId } = render(
      <Calendar
        date={new Date('2020-03-14T18:30:00.000Z')}
        disabledBefore={new Date('2020-03-09T18:30:00.000Z')}
        view="year"
      />
    );
    expect(getAllByTestId('DesignSystem-Text')[3]).toHaveClass('color-inverse-lightest');
  });

  it('should have the text color as primary for current date ', () => {
    const { getAllByTestId } = render(<Calendar />);
    expect(getAllByTestId('DesignSystem-Calendar--dateValue')[24]).toHaveClass('color-primary');
  });

  it('should have the text color as primary-lighter when the state is disabled but with current year', () => {
    const { getAllByTestId } = render(<Calendar disabledBefore={new Date('2022-01-20T18:30:00.000Z')} view="year" />);
    expect(getAllByTestId('DesignSystem-Text')[5]).toHaveClass('color-primary-lighter');
  });
});

describe('Calendar component', () => {
  const testYear = 2021;
  const testMonth = 0;

  const rotateDaysClockwise = (days: any, index: number) => {
    const daysCopy = [...days];
    for (let i = 0; i < index; i++) {
      const lastDay = daysCopy.shift();
      daysCopy.push(lastDay);
    }
    return daysCopy;
  };

  const dayMappings = day.map((value, index) => ({
    key: index,
    val: value,
  }));

  day.forEach((testfirstDayOfWeek: Day) => {
    describe(`when first day of week is ${testfirstDayOfWeek}`, () => {
      it('should render dates in the correct format with respect to the day', () => {
        const testDate = new Date(testYear, testMonth, 1);

        const { container } = render(
          <Calendar date={testDate} yearNav={testYear} monthNav={testMonth} firstDayOfWeek={testfirstDayOfWeek} />
        );

        const indexOfDay = day.indexOf(testfirstDayOfWeek);
        const rotatedDays = rotateDaysClockwise(dayMappings, indexOfDay);

        const firstDayElement = container.querySelector('.Calendar-value--active');
        const weekRow = firstDayElement?.closest('.Calendar-valueRow');
        expect(weekRow).toBeInTheDocument();

        const dateElements = Array.from(weekRow!.children).map((child) => child.textContent?.trim());
        const firstDayIndex = dateElements.indexOf('1');
        expect(firstDayIndex).not.toBe(-1);

        const actualDayIndex = new Date(testYear, testMonth, 1).getDay();
        const actualDayName = day[actualDayIndex];
        expect(actualDayName).toEqual(rotatedDays[firstDayIndex].val);
      });
    });
  });
});
