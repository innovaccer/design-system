import * as React from 'react';
export declare const DATE_CELL_SELECTOR = "[data-calendar-date-cell]";
export declare const MONTH_CELL_SELECTOR = "[data-calendar-month-cell]";
export declare const YEAR_CELL_SELECTOR = "[data-calendar-year-cell]";
export interface FocusedCell {
    row: number;
    col: number;
}
export declare const focusDateCell: (container: HTMLElement, row: number, col: number, monthIndex?: number | undefined) => boolean;
export declare const focusMonthCell: (container: HTMLElement, monthIndex: number) => boolean;
export declare const focusYearCell: (container: HTMLElement, yearIndex: number) => boolean;
export declare const getFocusedDateCell: (container: HTMLElement) => FocusedCell | null;
export declare const navigateDateGrid: (direction: 'up' | 'down' | 'left' | 'right', row: number, col: number, totalRows: number) => {
    row: number;
    col: number;
} | null;
export declare const formatDateAriaLabel: (d: Date) => string;
export interface HandleDateViewKeyDownParams {
    event: React.KeyboardEvent;
    container: HTMLElement;
    focusedDate: Date;
    startOfWeekIndex?: number;
    isDateDisabled?: (d: Date) => boolean;
    onNavigate: (newDate: Date) => void;
    onSelect: () => void;
    onPageUp: () => void;
    onPageDown: () => void;
    onShiftPageUp: () => void;
    onShiftPageDown: () => void;
    onEscape?: () => void;
}
export declare const handleDateViewKeyDown: (params: HandleDateViewKeyDownParams) => boolean;
export interface HandleMonthViewKeyDownParams {
    event: React.KeyboardEvent;
    container: HTMLElement;
    focusedMonth: number;
    isMonthDisabled?: (month: number) => boolean;
    onNavigate: (month: number) => void;
    onSelect: (month: number) => void;
    onEscape?: () => void;
}
export declare const handleMonthViewKeyDown: (params: HandleMonthViewKeyDownParams) => boolean;
export interface HandleYearViewKeyDownParams {
    event: React.KeyboardEvent;
    container: HTMLElement;
    focusedYearIndex: number;
    yearBlockStart: number;
    isYearDisabled?: (year: number) => boolean;
    onNavigate: (yearIndex: number) => void;
    onSelect: (year: number) => void;
    onPageUp: () => void;
    onPageDown: () => void;
    onEscape?: () => void;
}
export declare const handleYearViewKeyDown: (params: HandleYearViewKeyDownParams) => boolean;
