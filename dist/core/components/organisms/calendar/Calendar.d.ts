import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { Day, View } from "./types";
export interface SharedProps extends BaseProps {
    monthsInView?: number;
    jumpView?: boolean;
    firstDayOfWeek?: Day;
    view?: View;
    disabledBefore?: Date;
    disabledAfter?: Date;
    yearNav?: number;
    monthNav?: number;
}
declare type CompProps = {
    onDateChange?: (date: Date) => void;
    onRangeChange?: (startDate: Date | undefined, endDate: Date | undefined) => void;
    date?: Date;
    rangePicker?: boolean;
    startDate?: Date;
    endDate?: Date;
    rangeLimit?: number;
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
}
declare const defaultProps: {
    monthsInView: number;
    view: string;
    firstDayOfWeek: string;
};
declare type DefaultProps = Readonly<typeof defaultProps>;
export declare type CalendarProps = CompProps & DefaultProps;
export declare class Calendar extends React.Component<CalendarProps, CalendarState> {
    static defaultProps: {
        monthsInView: number;
        view: string;
        firstDayOfWeek: string;
    };
    constructor(props: CalendarProps);
    componentDidUpdate(prevProps: CalendarProps, prevState: CalendarState): void;
    updateState: (year: number, month?: number | undefined, date?: number | undefined) => void;
    getDateValue: (year: number, month: number, date: number) => Date | undefined;
    getNavDateInfo: (index: number) => Record<string, any>;
    getInRangeError: () => boolean;
    selectYear: (year: number) => void;
    selectMonth: (month: number) => void;
    selectDate: (index: number, date: number) => void;
    navClickHandler: (type: string) => void;
    renderJumpButton: (type: string) => JSX.Element;
    renderHeaderContent: (index: number) => JSX.Element;
    renderBodyYear: () => JSX.Element[];
    renderBodyMonth: () => JSX.Element[];
    renderBodyDate: (index: number) => JSX.Element;
    renderDateValues: (index: number) => JSX.Element[];
    renderCalendar: (index: number) => JSX.Element;
    render(): JSX.Element;
}
export default Calendar;
