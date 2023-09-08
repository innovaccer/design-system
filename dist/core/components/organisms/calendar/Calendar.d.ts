import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { Size, Day, View, Events } from "./types";
declare type OnHover = React.MouseEvent<HTMLSpanElement> | React.MouseEvent<HTMLDivElement>;
interface hoveredDateProps {
    value: number;
    isToday: boolean;
    isDisabled: boolean;
    todayDate?: Date;
    fullDate: Date;
    date: number;
    month: string;
    year: number;
    dayName: string;
}
interface hoveredMonthProps {
    value: string;
    month: string;
    year?: number;
    isCurrentMonth: boolean;
    isDisabled: boolean;
}
interface hoveredYearProps {
    value: number;
    year: number;
    isCurrentYear: boolean;
    isDisabled: boolean;
}
export interface SharedProps extends BaseProps {
    size: Size;
    monthsInView: number;
    jumpView?: boolean;
    firstDayOfWeek: Day;
    view: View;
    disabledBefore?: Date;
    disabledAfter?: Date;
    yearNav?: number;
    monthNav?: number;
}
export declare type CalendarProps = {
    onDateChange?: (date: Date) => void;
    onRangeChange?: (startDate: Date | undefined, endDate: Date | undefined) => void;
    onDateHover?: (dateData: hoveredDateProps, evnt: OnHover) => void;
    onMonthHover?: (monthData: hoveredMonthProps, evnt: OnHover) => void;
    onYearHover?: (yearData: hoveredYearProps, evnt: OnHover) => void;
    date?: Date;
    rangePicker?: boolean;
    startDate?: Date;
    endDate?: Date;
    rangeLimit?: number;
    events?: Events;
} & SharedProps;
interface CalendarState {
    view: View;
    year?: number;
    month?: number;
    date?: number;
    currDate?: Date;
    hoverDate?: Date;
    startDate?: Date;
    endDate?: Date;
    yearBlockNav: number;
    yearNav: number;
    monthNav: number;
    todayDate: number;
    currMonth: number;
    currYear: number;
}
export declare class Calendar extends React.Component<CalendarProps, CalendarState> {
    static defaultProps: {
        size: string;
        monthsInView: number;
        view: string;
        firstDayOfWeek: string;
        jumpView: boolean;
    };
    constructor(props: CalendarProps);
    componentDidUpdate(prevProps: CalendarProps, prevState: CalendarState): void;
    updateState: (year: number, month?: number | undefined, date?: number | undefined) => void;
    getDateValue: (year: number, month: number, date: number) => Date | undefined;
    getNavDateInfo: (index: number) => Record<string, any>;
    getInRangeError: () => boolean;
    selectYear: (year: number) => () => void;
    yearMouseOverHandler: (year: number, isCurrentYear: boolean, isDisabled: boolean, ev: React.MouseEvent<HTMLDivElement>) => void;
    selectMonth: (month: number) => () => void;
    monthMouseOverHandler: (month: number, isCurrentMonth: boolean, isDisabled: boolean, ev: React.MouseEvent<HTMLDivElement>) => void;
    selectDate: (index: number, date: number, prevMonthDayRange: number, dayRange: number) => void;
    calculateDate: (index: number, date: number, prevMonthDayRange: number, dayRange: number, isDateHovered: boolean) => Date | undefined;
    onNavIconClickHandler: (type: string) => () => void;
    renderJumpButton: (type: string) => JSX.Element;
    onNavHeadingClickHandler: (currView: View) => () => void;
    renderHeaderContent: (index: number) => JSX.Element;
    renderBodyYear: () => JSX.Element[];
    renderBodyMonth: () => JSX.Element[];
    onDateRowMouseLeaveHandler: () => void;
    renderBodyDate: (index: number) => JSX.Element;
    renderEventsIndicator(size: string, active: boolean): JSX.Element;
    renderDateValues: (index: number) => JSX.Element[];
    renderCalendar: (index: number) => JSX.Element;
    render(): JSX.Element;
}
export default Calendar;
