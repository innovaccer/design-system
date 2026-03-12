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
    const dateCell = getAllByTestId('DesignSystem-Calendar--dateValue')[7];
    const textEl = dateCell.querySelector('.Text') || dateCell.querySelector('[data-test="DesignSystem-Text"]');
    expect(textEl).toHaveClass('color-inverse');
  });

  it('should have text color as white when a date is selected', () => {
    const { getAllByTestId } = render(<Calendar date={new Date('2021-01-10T18:30:00.000Z')} />);
    const dateCell = getAllByTestId('DesignSystem-Calendar--dateValue')[14];
    const textEl = dateCell.querySelector('.Text') || dateCell.querySelector('[data-test="DesignSystem-Text"]');
    expect(textEl).toHaveClass('color-white');
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

  it('should have the text color as primary-dark for current date ', () => {
    const { getAllByTestId } = render(<Calendar />);
    const dateCell = getAllByTestId('DesignSystem-Calendar--dateValue')[24];
    const textEl = dateCell.querySelector('.Text') || dateCell.querySelector('[data-test="DesignSystem-Text"]');
    expect(textEl).toHaveClass('color-primary-dark');
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

describe('Calendar keyboard navigation', () => {
  describe('Date view', () => {
    it('selects date with Enter key', () => {
      const onDateChange = jest.fn();
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={onDateChange} view="date" />
      );
      const dateCells = getAllByTestId('DesignSystem-Calendar--dateValue');
      const targetCell = dateCells.find((el) => el.textContent === '20');
      if (targetCell) {
        targetCell.focus();
        fireEvent.keyDown(targetCell, { key: 'Enter' });
        expect(onDateChange).toHaveBeenCalled();
      }
    });

    it('selects date with Space key', () => {
      const onDateChange = jest.fn();
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={onDateChange} view="date" />
      );
      const dateCells = getAllByTestId('DesignSystem-Calendar--dateValue');
      const targetCell = dateCells.find((el) => el.textContent === '16');
      if (targetCell) {
        targetCell.focus();
        fireEvent.keyDown(targetCell, { key: ' ' });
        expect(onDateChange).toHaveBeenCalled();
      }
    });

    it('navigates dates with arrow keys', () => {
      const { getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} view="date" />);
      const dateCells = getAllByTestId('DesignSystem-Calendar--dateValue');
      const focusedCell = dateCells.find((el) => el.tabIndex === 0);
      expect(focusedCell).toBeInTheDocument();
      if (focusedCell) {
        fireEvent.keyDown(focusedCell, { key: 'ArrowRight' });
        const nextFocused = dateCells.find((el) => el.tabIndex === 0);
        expect(nextFocused).toBeInTheDocument();
      }
    });
  });

  describe('Month view', () => {
    it('navigates months with arrow keys', () => {
      const { getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} view="month" />);
      const monthCells = getAllByTestId('DesignSystem-Calendar--monthValue');
      const focusedCell = monthCells.find((el) => el.tabIndex === 0);
      expect(focusedCell).toBeInTheDocument();
      if (focusedCell) {
        fireEvent.keyDown(focusedCell, { key: 'ArrowRight' });
        const nextFocused = monthCells.find((el) => el.tabIndex === 0);
        expect(nextFocused).toBeInTheDocument();
      }
    });

    it('selects month with Enter and navigates to date view', () => {
      const { getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} view="month" />);
      const monthCells = getAllByTestId('DesignSystem-Calendar--monthValue');
      const aprilCell = monthCells.find((el) => el.textContent?.trim() === 'Apr');
      if (aprilCell) {
        aprilCell.focus();
        fireEvent.keyDown(aprilCell, { key: 'Enter' });
        expect(getAllByTestId('DesignSystem-Calendar--dateValue').length).toBeGreaterThan(0);
      }
    });
  });

  describe('Year view', () => {
    it('navigates years with arrow keys', () => {
      const { getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} view="year" />);
      const yearCells = getAllByTestId('DesignSystem-Calendar--yearValue');
      const focusedCell = yearCells.find((el) => el.tabIndex === 0);
      expect(focusedCell).toBeInTheDocument();
      if (focusedCell) {
        fireEvent.keyDown(focusedCell, { key: 'ArrowRight' });
        const nextFocused = yearCells.find((el) => el.tabIndex === 0);
        expect(nextFocused).toBeInTheDocument();
      }
    });

    it('selects year with Enter and navigates to month view', () => {
      const { getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} view="year" />);
      const yearCells = getAllByTestId('DesignSystem-Calendar--yearValue');
      const year2020Cell = yearCells.find((el) => el.textContent?.trim() === '2020');
      if (year2020Cell) {
        year2020Cell.focus();
        fireEvent.keyDown(year2020Cell, { key: 'Enter' });
        expect(getAllByTestId('DesignSystem-Calendar--monthValue').length).toBeGreaterThan(0);
      }
    });
  });
});

describe('Calendar keyboard navigation', () => {
  beforeEach(() => {
    FunctionValue.mockClear();
  });

  describe('Date view', () => {
    it('selects date with Enter key', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="date" />
      );
      const dateCells = getAllByTestId('DesignSystem-Calendar--dateValue');
      const firstDate = dateCells[0];
      firstDate.focus();
      fireEvent.keyDown(firstDate, { key: 'Enter' });
      expect(FunctionValue).toHaveBeenCalled();
    });

    it('selects date with Space key', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="date" />
      );
      const dateCells = getAllByTestId('DesignSystem-Calendar--dateValue');
      const firstDate = dateCells[0];
      firstDate.focus();
      fireEvent.keyDown(firstDate, { key: ' ' });
      expect(FunctionValue).toHaveBeenCalled();
    });

    it('navigates dates with Arrow Right', () => {
      const { getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} view="date" />);
      const dateCells = getAllByTestId('DesignSystem-Calendar--dateValue');
      const firstDate = dateCells[0];
      firstDate.focus();
      fireEvent.keyDown(firstDate, { key: 'ArrowRight' });
      expect(dateCells[1]).toHaveFocus();
    });

    it('navigates to first day of week with Home', () => {
      const { getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} view="date" />);
      const dateCells = getAllByTestId('DesignSystem-Calendar--dateValue');
      const midWeekCell = dateCells[3];
      midWeekCell.focus();
      fireEvent.keyDown(midWeekCell, { key: 'Home' });
      expect(dateCells[0]).toHaveFocus();
    });
  });

  describe('Month view', () => {
    it('navigates months with arrow keys', () => {
      const { getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} view="month" />);
      const monthCells = getAllByTestId('DesignSystem-Calendar--monthValue');
      const firstMonth = monthCells[0];
      firstMonth.focus();
      fireEvent.keyDown(firstMonth, { key: 'ArrowRight' });
      expect(monthCells[1]).toHaveFocus();
    });

    it('jumps to first month with Home', () => {
      const { getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} view="month" />);
      const monthCells = getAllByTestId('DesignSystem-Calendar--monthValue');
      monthCells[5].focus();
      fireEvent.keyDown(monthCells[5], { key: 'Home' });
      expect(monthCells[0]).toHaveFocus();
    });

    it('selects month with Enter and navigates to date view', () => {
      const { getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} view="month" />);
      const monthCells = getAllByTestId('DesignSystem-Calendar--monthValue');
      monthCells[0].focus();
      fireEvent.keyDown(monthCells[0], { key: 'Enter' });
      expect(getAllByTestId('DesignSystem-Calendar--dateValue').length).toBeGreaterThan(0);
    });
  });

  describe('Year view', () => {
    it('navigates years with arrow keys', () => {
      const { getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} view="year" />);
      const yearCells = getAllByTestId('DesignSystem-Calendar--yearValue');
      if (yearCells.length > 1) {
        yearCells[0].focus();
        fireEvent.keyDown(yearCells[0], { key: 'ArrowRight' });
        expect(yearCells[1]).toHaveFocus();
      }
    });

    it('selects year with Enter and navigates to month view', () => {
      const { getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} view="year" />);
      const yearCells = getAllByTestId('DesignSystem-Calendar--yearValue');
      if (yearCells.length > 0) {
        yearCells[0].focus();
        fireEvent.keyDown(yearCells[0], { key: 'Enter' });
        expect(getAllByTestId('DesignSystem-Calendar--monthValue').length).toBeGreaterThan(0);
      }
    });
  });
});

describe('Calendar keyboard navigation', () => {
  beforeEach(() => {
    FunctionValue.mockClear();
  });

  describe('Date view', () => {
    it('navigates dates with arrow keys', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="date" />
      );
      const dateCells = getAllByTestId('DesignSystem-Calendar--dateValue');
      const firstCell = dateCells.find((el) => el.getAttribute('tabindex') === '0') || dateCells[0];
      firstCell.focus();
      fireEvent.keyDown(firstCell, { key: 'ArrowRight' });
      expect(document.activeElement).not.toBe(firstCell);
    });

    it('navigates to first/last day of week with Home/End', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="date" />
      );
      const dateCells = getAllByTestId('DesignSystem-Calendar--dateValue');
      const midCell = dateCells[Math.floor(dateCells.length / 2)];
      midCell.focus();
      fireEvent.keyDown(midCell, { key: 'Home' });
      const focusedRow = (document.activeElement as HTMLElement)?.closest('.Calendar-valueRow');
      expect(focusedRow?.children[0]).toContainElement(document.activeElement as HTMLElement);
    });

    it('selects date with Enter key', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="date" />
      );
      const dateCells = getAllByTestId('DesignSystem-Calendar--dateValue');
      const focusedCell = dateCells.find((el) => el.getAttribute('tabindex') === '0') || dateCells[0];
      focusedCell.focus();
      fireEvent.keyDown(focusedCell, { key: 'Enter' });
      expect(FunctionValue).toHaveBeenCalled();
    });

    it('selects date with Space key and prevents default', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="date" />
      );
      const dateCells = getAllByTestId('DesignSystem-Calendar--dateValue');
      const focusedCell = dateCells.find((el) => el.getAttribute('tabindex') === '0') || dateCells[0];
      focusedCell.focus();
      fireEvent.keyDown(focusedCell, { key: ' ' });
      expect(FunctionValue).toHaveBeenCalled();
    });
  });

  describe('Month view', () => {
    it('navigates months with arrow keys', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="month" />
      );
      const monthCells = getAllByTestId('DesignSystem-Calendar--monthValue');
      const firstMonth = monthCells.find((el) => el.getAttribute('tabindex') === '0') || monthCells[0];
      firstMonth.focus();
      fireEvent.keyDown(firstMonth, { key: 'ArrowRight' });
      expect(document.activeElement).not.toBe(firstMonth);
    });

    it('jumps to first/last month with Home/End', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="month" />
      );
      const monthCells = getAllByTestId('DesignSystem-Calendar--monthValue');
      const midMonth = monthCells[Math.floor(monthCells.length / 2)];
      midMonth.focus();
      fireEvent.keyDown(midMonth, { key: 'Home' });
      const janCell = monthCells.find((el) => el.textContent?.trim() === 'Jan');
      expect(document.activeElement).toBe(janCell);
    });

    it('selects month with Enter and navigates to date view', () => {
      const { getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} view="month" />);
      const monthCells = getAllByTestId('DesignSystem-Calendar--monthValue');
      const marCell = monthCells.find((el) => el.textContent?.trim() === 'Mar') || monthCells[2];
      marCell.focus();
      fireEvent.keyDown(marCell, { key: 'Enter' });
      expect(getAllByTestId('DesignSystem-Calendar--dateValue').length).toBeGreaterThan(0);
    });
  });

  describe('Year view', () => {
    it('navigates years with arrow keys', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="year" />
      );
      const yearCells = getAllByTestId('DesignSystem-Calendar--yearValue');
      const firstYear = yearCells.find((el) => el.getAttribute('tabindex') === '0') || yearCells[0];
      firstYear.focus();
      fireEvent.keyDown(firstYear, { key: 'ArrowRight' });
      expect(document.activeElement).not.toBe(firstYear);
    });

    it('selects year with Enter', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="year" />
      );
      const yearCells = getAllByTestId('DesignSystem-Calendar--yearValue');
      const year2020 = yearCells.find((el) => el.textContent?.trim() === '2020') || yearCells[0];
      year2020.focus();
      fireEvent.keyDown(year2020, { key: 'Enter' });
      expect(FunctionValue).toHaveBeenCalled();
    });
  });
});

describe('Calendar keyboard navigation', () => {
  beforeEach(() => {
    FunctionValue.mockClear();
  });

  describe('Date view', () => {
    it('selects date with Enter key', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="date" />
      );
      const dateCells = getAllByTestId('DesignSystem-Calendar--dateValue');
      const firstFocusable = dateCells.find((el) => el.getAttribute('tabindex') === '0') || dateCells[0];
      firstFocusable.focus();
      fireEvent.keyDown(firstFocusable, { key: 'Enter' });
      expect(FunctionValue).toHaveBeenCalled();
    });

    it('selects date with Space key', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="date" />
      );
      const dateCells = getAllByTestId('DesignSystem-Calendar--dateValue');
      const firstFocusable = dateCells.find((el) => el.getAttribute('tabindex') === '0') || dateCells[0];
      firstFocusable.focus();
      fireEvent.keyDown(firstFocusable, { key: ' ' });
      expect(FunctionValue).toHaveBeenCalled();
    });

    it('navigates dates with Arrow Right', () => {
      const { getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} view="date" />);
      const dateCells = getAllByTestId('DesignSystem-Calendar--dateValue');
      const focused = dateCells.find((el) => el.getAttribute('tabindex') === '0') || dateCells[0];
      focused.focus();
      fireEvent.keyDown(focused, { key: 'ArrowRight' });
      const nextFocused = document.activeElement;
      expect(nextFocused).toBeInTheDocument();
      expect(nextFocused).toHaveAttribute('data-calendar-date-cell');
    });
  });

  describe('Month view', () => {
    it('navigates months with arrow keys', () => {
      const { getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} view="month" />);
      const monthCells = getAllByTestId('DesignSystem-Calendar--monthValue');
      const focused = monthCells.find((el) => el.getAttribute('tabindex') === '0') || monthCells[0];
      focused.focus();
      fireEvent.keyDown(focused, { key: 'ArrowRight' });
      const nextFocused = document.activeElement;
      expect(nextFocused).toHaveAttribute('data-calendar-month-cell');
    });

    it('selects month with Enter key and navigates to date view', () => {
      const { getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} view="month" />);
      const monthCells = getAllByTestId('DesignSystem-Calendar--monthValue');
      const focused = monthCells.find((el) => el.getAttribute('tabindex') === '0') || monthCells[0];
      focused.focus();
      fireEvent.keyDown(focused, { key: 'Enter' });
      expect(getAllByTestId('DesignSystem-Calendar--dateValue').length).toBeGreaterThan(0);
    });

    it('jumps to first month with Home key', () => {
      const { getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} view="month" />);
      const monthCells = getAllByTestId('DesignSystem-Calendar--monthValue');
      const marchIndex = monthCells.findIndex((el) => el.textContent?.trim() === 'Mar');
      if (marchIndex >= 0) monthCells[marchIndex].focus();
      fireEvent.keyDown(document.activeElement as Element, { key: 'Home' });
      const focused = document.activeElement as HTMLElement;
      expect(focused?.textContent?.trim()).toBe('Jan');
    });
  });

  describe('Year view', () => {
    it('navigates years with arrow keys', () => {
      const { getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} view="year" />);
      const yearCells = getAllByTestId('DesignSystem-Calendar--yearValue');
      const focused = yearCells.find((el) => el.getAttribute('tabindex') === '0') || yearCells[0];
      focused.focus();
      fireEvent.keyDown(focused, { key: 'ArrowRight' });
      const nextFocused = document.activeElement;
      expect(nextFocused).toHaveAttribute('data-calendar-year-cell');
    });

    it('selects year with Enter key', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="year" />
      );
      const yearCells = getAllByTestId('DesignSystem-Calendar--yearValue');
      const focused = yearCells.find((el) => el.getAttribute('tabindex') === '0') || yearCells[0];
      if (focused) {
        focused.focus();
        fireEvent.keyDown(focused, { key: 'Enter' });
        expect(FunctionValue).toHaveBeenCalled();
      }
    });
  });
});

describe('Calendar keyboard navigation', () => {
  beforeEach(() => {
    FunctionValue.mockClear();
  });

  describe('Date view', () => {
    it('selects date with Enter key', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="date" />
      );
      const dateCells = getAllByTestId('DesignSystem-Calendar--dateValue');
      const focusedCell = dateCells.find((el) => el.getAttribute('tabindex') === '0') || dateCells[0];
      focusedCell.focus();
      fireEvent.keyDown(focusedCell, { key: 'Enter' });
      expect(FunctionValue).toHaveBeenCalled();
    });

    it('selects date with Space key', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="date" />
      );
      const dateCells = getAllByTestId('DesignSystem-Calendar--dateValue');
      const focusedCell = dateCells.find((el) => el.getAttribute('tabindex') === '0') || dateCells[0];
      focusedCell.focus();
      fireEvent.keyDown(focusedCell, { key: ' ' });
      expect(FunctionValue).toHaveBeenCalled();
    });

    it('navigates dates with arrow keys', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="date" />
      );
      const dateCells = getAllByTestId('DesignSystem-Calendar--dateValue');
      const focusedCell = dateCells.find((el) => el.getAttribute('tabindex') === '0') || dateCells[0];
      focusedCell.focus();
      fireEvent.keyDown(focusedCell, { key: 'ArrowRight' });
      const nextFocused = dateCells.find((el) => el.getAttribute('tabindex') === '0');
      expect(nextFocused).toBeDefined();
      expect(nextFocused).not.toBe(focusedCell);
    });
  });

  describe('Month view', () => {
    it('navigates months with arrow keys', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="month" />
      );
      const monthCells = getAllByTestId('DesignSystem-Calendar--monthValue');
      const focusedCell = monthCells.find((el) => el.getAttribute('tabindex') === '0') || monthCells[0];
      focusedCell.focus();
      fireEvent.keyDown(focusedCell, { key: 'ArrowRight' });
      const nextFocused = monthCells.find((el) => el.getAttribute('tabindex') === '0');
      expect(nextFocused).toBeDefined();
      expect(nextFocused).not.toBe(focusedCell);
    });

    it('selects month with Enter key and navigates to date view', () => {
      const { getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} view="month" />);
      const monthCells = getAllByTestId('DesignSystem-Calendar--monthValue');
      const focusedCell = monthCells.find((el) => el.getAttribute('tabindex') === '0') || monthCells[2];
      focusedCell.focus();
      fireEvent.keyDown(focusedCell, { key: 'Enter' });
      expect(getAllByTestId('DesignSystem-Calendar--dateValue').length).toBeGreaterThan(0);
    });

    it('selects month with Space key', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="month" />
      );
      const monthCells = getAllByTestId('DesignSystem-Calendar--monthValue');
      const focusedCell = monthCells.find((el) => el.getAttribute('tabindex') === '0') || monthCells[2];
      focusedCell.focus();
      fireEvent.keyDown(focusedCell, { key: ' ' });
      expect(FunctionValue).toHaveBeenCalled();
    });
  });

  describe('Year view', () => {
    it('navigates years with arrow keys', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="year" />
      );
      const yearCells = getAllByTestId('DesignSystem-Calendar--yearValue');
      const focusedCell = yearCells.find((el) => el.getAttribute('tabindex') === '0') || yearCells[0];
      focusedCell.focus();
      fireEvent.keyDown(focusedCell, { key: 'ArrowDown' });
      const nextFocused = yearCells.find((el) => el.getAttribute('tabindex') === '0');
      expect(nextFocused).toBeDefined();
      expect(nextFocused).not.toBe(focusedCell);
    });

    it('selects year with Enter key', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="year" />
      );
      const yearCells = getAllByTestId('DesignSystem-Calendar--yearValue');
      const focusedCell = yearCells.find((el) => el.getAttribute('tabindex') === '0') || yearCells[0];
      focusedCell.focus();
      fireEvent.keyDown(focusedCell, { key: 'Enter' });
      expect(FunctionValue).toHaveBeenCalled();
    });

    it('selects year with Space key', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="year" />
      );
      const yearCells = getAllByTestId('DesignSystem-Calendar--yearValue');
      const focusedCell = yearCells.find((el) => el.getAttribute('tabindex') === '0') || yearCells[0];
      focusedCell.focus();
      fireEvent.keyDown(focusedCell, { key: ' ' });
      expect(FunctionValue).toHaveBeenCalled();
    });
  });
});

describe('Calendar keyboard navigation', () => {
  beforeEach(() => {
    FunctionValue.mockClear();
  });

  describe('Date view', () => {
    it('navigates dates with arrow keys', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="date" />
      );
      const dateCells = getAllByTestId('DesignSystem-Calendar--dateValue');
      const firstFocusable = dateCells.find((el) => el.getAttribute('tabindex') === '0');
      expect(firstFocusable).toBeTruthy();
      firstFocusable!.focus();

      fireEvent.keyDown(firstFocusable!, { key: 'ArrowRight' });
      const focusedAfterRight = document.activeElement;
      expect(focusedAfterRight).toBeTruthy();
      expect(focusedAfterRight).toHaveAttribute('data-calendar-date-cell');
    });

    it('selects date with Enter key', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="date" />
      );
      const dateCells = getAllByTestId('DesignSystem-Calendar--dateValue');
      const firstFocusable = dateCells.find((el) => el.getAttribute('tabindex') === '0');
      firstFocusable!.focus();

      fireEvent.keyDown(firstFocusable!, { key: 'Enter' });
      expect(FunctionValue).toHaveBeenCalled();
    });

    it('selects date with Space key', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="date" />
      );
      const dateCells = getAllByTestId('DesignSystem-Calendar--dateValue');
      const firstFocusable = dateCells.find((el) => el.getAttribute('tabindex') === '0');
      firstFocusable!.focus();

      fireEvent.keyDown(firstFocusable!, { key: ' ' });
      expect(FunctionValue).toHaveBeenCalled();
    });
  });

  describe('Month view', () => {
    it('navigates months with arrow keys', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="month" />
      );
      const monthCells = getAllByTestId('DesignSystem-Calendar--monthValue');
      const focusedMonth = monthCells.find((el) => el.getAttribute('tabindex') === '0');
      expect(focusedMonth).toBeTruthy();
      focusedMonth!.focus();

      fireEvent.keyDown(focusedMonth!, { key: 'ArrowRight' });
      const focusedAfter = document.activeElement;
      expect(focusedAfter).toHaveAttribute('data-calendar-month-cell');
    });

    it('selects month with Enter key and navigates to date view', () => {
      const { getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} view="month" />);
      const monthCells = getAllByTestId('DesignSystem-Calendar--monthValue');
      const focusedMonth = monthCells.find((el) => el.getAttribute('tabindex') === '0');
      focusedMonth!.focus();

      fireEvent.keyDown(focusedMonth!, { key: 'Enter' });
      expect(getAllByTestId('DesignSystem-Calendar--dateValue').length).toBeGreaterThan(0);
    });
  });

  describe('Year view', () => {
    it('navigates years with arrow keys', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="year" />
      );
      const yearCells = getAllByTestId('DesignSystem-Calendar--yearValue');
      const focusedYear = yearCells.find((el) => el.getAttribute('tabindex') === '0');
      expect(focusedYear).toBeTruthy();
      if (focusedYear) {
        focusedYear.focus();
        fireEvent.keyDown(focusedYear, { key: 'ArrowRight' });
        const focusedAfter = document.activeElement;
        expect(focusedAfter).toHaveAttribute('data-calendar-year-cell');
      }
    });

    it('selects year with Enter key', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="year" />
      );
      const yearCells = getAllByTestId('DesignSystem-Calendar--yearValue');
      const focusedYear = yearCells.find((el) => el.getAttribute('tabindex') === '0');
      if (focusedYear) {
        focusedYear.focus();
        fireEvent.keyDown(focusedYear, { key: 'Enter' });
        expect(FunctionValue).toHaveBeenCalled();
      }
    });
  });
});

describe('Calendar keyboard navigation', () => {
  beforeEach(() => {
    FunctionValue.mockClear();
  });

  describe('Date view', () => {
    it('selects date with Enter key', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="date" />
      );
      const dateCells = getAllByTestId('DesignSystem-Calendar--dateValue');
      const firstDateCell = dateCells[0];
      firstDateCell.focus();
      fireEvent.keyDown(firstDateCell, { key: 'Enter' });
      expect(FunctionValue).toHaveBeenCalled();
    });

    it('selects date with Space key', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="date" />
      );
      const dateCells = getAllByTestId('DesignSystem-Calendar--dateValue');
      const firstDateCell = dateCells[0];
      firstDateCell.focus();
      fireEvent.keyDown(firstDateCell, { key: ' ' });
      expect(FunctionValue).toHaveBeenCalled();
    });

    it('navigates dates with arrow keys', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="date" />
      );
      const dateCells = getAllByTestId('DesignSystem-Calendar--dateValue');
      const firstDateCell = dateCells[0];
      firstDateCell.focus();
      fireEvent.keyDown(firstDateCell, { key: 'ArrowRight' });
      expect(document.activeElement).not.toBe(firstDateCell);
    });
  });

  describe('Month view', () => {
    it('selects month with Enter key and navigates to date view', () => {
      const { getAllByTestId } = render(<Calendar date={new Date(2020, 2, 15)} view="month" />);
      const monthCells = getAllByTestId('DesignSystem-Calendar--monthValue');
      const marchCell = monthCells[2];
      marchCell.focus();
      fireEvent.keyDown(marchCell, { key: 'Enter' });
      expect(getAllByTestId('DesignSystem-Calendar--dateValue').length).toBeGreaterThan(0);
    });

    it('selects month with Space key', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="month" />
      );
      const monthCells = getAllByTestId('DesignSystem-Calendar--monthValue');
      const aprilCell = monthCells[3];
      aprilCell.focus();
      fireEvent.keyDown(aprilCell, { key: ' ' });
      expect(FunctionValue).toHaveBeenCalled();
    });

    it('navigates months with arrow keys', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="month" />
      );
      const monthCells = getAllByTestId('DesignSystem-Calendar--monthValue');
      const marchCell = monthCells.find((el) => el.textContent?.trim() === 'Mar') || monthCells[2];
      marchCell.focus();
      fireEvent.keyDown(marchCell, { key: 'ArrowRight' });
      // After ArrowRight from March, focus should move to April
      expect(document.activeElement).toHaveAttribute('data-calendar-month-cell');
      expect(document.activeElement).not.toBe(marchCell);
      expect((document.activeElement as HTMLElement)?.textContent?.trim()).toBe('Apr');
    });
  });

  describe('Year view', () => {
    it('selects year with Enter key and navigates to month view', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="year" />
      );
      const yearCells = getAllByTestId('DesignSystem-Calendar--yearValue');
      const year2020Cell = yearCells.find((el) => el.textContent?.trim() === '2020');
      if (year2020Cell) {
        year2020Cell.focus();
        fireEvent.keyDown(year2020Cell, { key: 'Enter' });
        expect(getAllByTestId('DesignSystem-Calendar--monthValue').length).toBeGreaterThan(0);
      }
    });

    it('selects year with Space key and navigates to month view', () => {
      const { getAllByTestId } = render(
        <Calendar date={new Date(2020, 2, 15)} onDateChange={FunctionValue} view="year" />
      );
      const yearCells = getAllByTestId('DesignSystem-Calendar--yearValue');
      const year2021Cell = yearCells.find((el) => el.textContent?.trim() === '2021');
      if (year2021Cell) {
        year2021Cell.focus();
        fireEvent.keyDown(year2021Cell, { key: ' ' });
        expect(getAllByTestId('DesignSystem-Calendar--monthValue').length).toBeGreaterThan(0);
      }
    });
  });
});
