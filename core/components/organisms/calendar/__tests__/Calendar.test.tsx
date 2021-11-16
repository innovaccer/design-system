import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { Calendar } from '@/index';
import { CalendarProps as Props } from '@/index.type';

const day = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const size = ['small', 'large'];
const view = ['year', 'month', 'date'];
const FunctionValue = jest.fn();

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
