// Type definitions for types x.x
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: SaniyaGupta <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jest" />
/// <reference types="node" />
/// <reference types="prop-types" />
/// <reference types="scheduler" />
/// <reference types="throttle-debounce" />
/// <reference types="webpack-env" />

import * as React from 'react';

export declare type SingleOrArray<T> = T | T[];
export declare type MakeOptional<T extends {}, K extends keyof any> = Omit<T, K> & {
	[OK in keyof T & K]?: T[OK];
};
export declare type ValidatorFn<K extends any[] = any[]> = (...values: K) => boolean;
export declare type Validators = SingleOrArray<ValidatorFn>;
export declare type Mask = (string | RegExp)[];
export declare type BaseProps = {
	className?: string;
	"data-test"?: string;
};
export declare type BaseHtmlProps<T> = Omit<React.HTMLProps<T>, "ref" | "size" | "className">;
export declare type OmitNativeProps<T, K extends keyof any> = Omit<BaseHtmlProps<T>, K>;
export interface OverlayFooterProps extends BaseProps {
	open?: boolean;
	children?: React.ReactNode;
	actions?: ButtonProps[];
}
export declare type AccentAppearance = "primary" | "secondary" | "alert" | "warning" | "success" | "accent1" | "accent2" | "accent3" | "accent4";
export declare type HeadingAppearance = "default" | "subtle" | "disabled" | "white";
export declare type MessageAppearance = "default" | "alert" | "info" | "success" | "warning";
export declare type FileStatus = "uploading" | "completed" | "error";
export declare type FooterOptions = {
	actions: OverlayFooterProps["actions"];
};
export declare type AutoComplete = "on" | "off";
export declare type NumberRange = [number, number];
export declare type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export declare type AvatarSize = "regular" | "tiny";
export interface AvatarProps extends BaseProps {
	appearance?: AccentAppearance;
	children?: string;
	firstName?: string;
	lastName?: string;
	withTooltip: boolean;
	tooltipPosition: TooltipProps["position"];
	size: AvatarSize;
}
export declare const Avatar: {
	(props: AvatarProps): JSX.Element;
	displayName: string;
	defaultProps: {
		tooltipPosition: string;
		withTooltip: boolean;
		size: string;
	};
};
export interface AvatarData extends Record<string, any> {
	firstName?: string;
	lastName?: string;
	appearance?: AvatarProps["appearance"];
}
export interface AvatarPopperProps {
	popperRenderer?: (names: AvatarData[]) => JSX.Element;
	appendToBody?: PopoverProps["appendToBody"];
	dark?: PopoverProps["dark"];
	position?: PopoverProps["position"];
	on?: PopoverProps["on"];
	maxHeight?: number;
	popperClassName?: string;
}
export interface AvatarGroupProps extends BaseProps {
	list: AvatarData[];
	max: number;
	borderColor: string;
	popoverOptions: AvatarPopperProps;
	tooltipPosition: PopoverProps["position"];
}
export declare const AvatarGroup: {
	(props: AvatarGroupProps): JSX.Element;
	displayName: string;
	defaultProps: {
		max: number;
		borderColor: string;
		tooltipPosition: string;
		popoverOptions: {};
	};
};
export interface BackdropProps extends BaseProps {
	open: boolean;
	zIndex?: number;
}
export declare const Backdrop: React.FC<BackdropProps>;
export interface BadgeProps extends BaseProps {
	appearance: AccentAppearance;
	subtle?: boolean;
	children: React.ReactText;
}
export declare const Badge: {
	(props: BadgeProps): JSX.Element;
	displayName: string;
	defaultProps: {
		appearance: string;
	};
};
export interface Breadcrumb {
	label: string;
	link: string;
}
export interface BreadcrumbsProps extends BaseProps {
	list: Breadcrumb[];
	onClick?: (link: string) => void;
}
export declare const Breadcrumbs: (props: BreadcrumbsProps) => JSX.Element;
export declare type ButtonType = "button" | "submit" | "reset";
export declare type ButtonAppearance = "basic" | "primary" | "success" | "alert" | "transparent";
export declare type ButtonSize = "tiny" | "regular" | "large";
export declare type ButtonAlignment = "left" | "right";
export interface ButtonProps extends BaseProps, BaseHtmlProps<HTMLButtonElement> {
	type?: ButtonType;
	size?: ButtonSize;
	appearance?: ButtonAppearance;
	disabled?: boolean;
	expanded?: boolean;
	selected?: boolean;
	loading?: boolean;
	icon?: string;
	tooltip?: string;
	iconAlign?: ButtonAlignment;
	largeIcon?: boolean;
	children?: React.ReactText;
	tabIndex?: number;
	autoFocus?: boolean;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export declare type Size = "small" | "large";
export declare type View = "date" | "month" | "year";
export declare type Day = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
export declare type DateFormat = "mm/dd/yyyy" | "dd/mm/yyyy" | "yyyy/mm/dd" | "mm-dd-yyyy" | "dd-mm-yyyy" | "yyyy-mm-dd";
export declare type DateType = number | Date | string;
export declare type Events = {
	[key: string]: boolean;
};
export declare type OnHover = React.MouseEvent<HTMLSpanElement> | React.MouseEvent<HTMLDivElement>;
export interface hoveredDateProps {
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
export interface hoveredMonthProps {
	value: string;
	month: string;
	year?: number;
	isCurrentMonth: boolean;
	isDisabled: boolean;
}
export interface hoveredYearProps {
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
export interface CalendarState {
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
export declare type Shadow = "none" | "default" | "light" | "medium" | "dark";
export interface CardProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
	shadow?: Shadow;
}
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export declare type Border = "top" | "left" | "right" | "bottom";
export interface CardSubduedProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
	border?: Border;
}
export declare const CardSubdued: React.ForwardRefExoticComponent<CardSubduedProps & React.RefAttributes<HTMLDivElement>>;
export interface CardHeaderProps extends BaseProps {
	children: React.ReactNode;
}
export declare const CardHeader: {
	(props: CardHeaderProps): JSX.Element;
	displayName: string;
};
export interface CardBodyProps extends BaseProps {
	children: React.ReactNode;
}
export declare const CardBody: {
	(props: CardBodyProps): JSX.Element;
	displayName: string;
};
export interface CardFooterProps extends BaseProps {
	children: React.ReactNode;
	withSeperator: boolean;
}
export declare const CardFooter: {
	(props: CardFooterProps): JSX.Element;
	displayName: string;
	defaultProps: {
		withSeperator: boolean;
	};
};
export declare type ChipType = "action" | "selection" | "input";
export declare type Name = number | string;
export interface ChipProps extends BaseProps {
	label: string;
	icon?: string;
	clearButton?: boolean;
	disabled?: boolean;
	selected?: boolean;
	type: ChipType;
	onClose?: (name: Name) => void;
	onClick?: (name: Name) => void;
	name: Name;
}
export declare const Chip: {
	(props: ChipProps): JSX.Element;
	displayName: string;
	defaultProps: {
		type: string;
	};
};
export interface ChipGroupProps extends BaseProps {
	onClose?: (item: ChipProps) => void;
	onClick?: (item: ChipProps) => void;
	list: ChipProps[];
}
export declare const ChipGroup: {
	(props: ChipGroupProps): JSX.Element;
	displayName: string;
};
export declare type CheckBoxSize = "regular" | "tiny";
export interface CheckboxProps extends BaseProps, OmitNativeProps<HTMLInputElement, "onChange"> {
	size?: CheckBoxSize;
	defaultChecked?: boolean;
	checked?: boolean;
	indeterminate?: boolean;
	disabled?: boolean;
	label?: string;
	helpText?: string;
	name?: string;
	value?: string | number;
	tabIndex?: number;
	onChange?: (event: ChangeEvent) => void;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export declare type Columns = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export interface ColumnProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
	size?: Columns;
	sizeXS?: Columns;
	sizeS?: Columns;
	sizeM?: Columns;
	sizeL?: Columns;
	sizeXL?: Columns;
}
export declare const Column: React.ForwardRefExoticComponent<ColumnProps & React.RefAttributes<HTMLDivElement>>;
export declare type DatePickerProps = SharedProps & {
	onDateChange?: (date: Date | undefined, dateVal?: string) => void;
	date?: DateType;
	withInput?: boolean;
	open?: boolean;
	position: PopoverProps["position"];
	inputFormat: DateFormat;
	outputFormat: DateFormat;
	inputOptions: Omit<InputMaskProps, "mask" | "value" | "onChange" | "onBlur" | "onClear">;
	validators: Validators;
	closeOnSelect: boolean;
};
export interface DatePickerState {
	init: boolean;
	date?: Date;
	error: boolean;
	open: boolean;
}
export declare class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
	static defaultProps: {
		position: string;
		inputFormat: string;
		outputFormat: string;
		validators: ((val: string, format: string) => boolean)[];
		inputOptions: {};
		closeOnSelect: boolean;
		size: string;
		monthsInView: number;
		view: string;
		firstDayOfWeek: string;
		jumpView: boolean;
	};
	constructor(props: DatePickerProps);
	componentDidUpdate(prevProps: DatePickerProps, prevState: DatePickerState): void;
	getError: (date?: Date | undefined) => boolean;
	onDateChangeHandler: (d?: Date | undefined) => void;
	onToggleHandler: (o: boolean, type?: string | undefined) => void;
	renderCalendar(): JSX.Element;
	render(): JSX.Element;
}
export declare type TimeFormat = "hh:mm AM" | "hh:mm";
export declare type TimeType = number | string;
export interface TimePickerProps {
	time?: TimeType;
	inputOptions: Omit<InputMaskProps, "mask" | "value" | "validators">;
	inputFormat: TimeFormat;
	outputFormat: TimeFormat;
	validators: Validators;
	onTimeChange?: (timeVal?: string) => void;
}
export declare const TimePicker: {
	(props: TimePickerProps): JSX.Element;
	defaultProps: {
		inputFormat: string;
		outputFormat: string;
		inputOptions: {};
		validators: ((val: string, format: string) => boolean)[];
	};
	displayName: string;
};
export declare type DropDownButtonSize = "tiny" | "regular";
export interface TriggerProps {
	triggerSize?: DropDownButtonSize;
	icon?: string;
	placeholder?: string;
	inlineLabel?: string;
	disabled?: boolean;
	menu?: boolean;
	error?: boolean;
}
export interface OptionRendererProps {
	optionRenderer?: (props: OptionProps) => React.ReactElement;
	optionType?: OptionType;
}
export interface OptionSchema extends Record<string, any> {
	label: string;
	value: React.ReactText;
	icon?: string;
	subInfo?: string | MetaListProps;
	optionType?: OptionType;
	selected?: boolean;
	disabled?: boolean;
	group?: string;
}
export interface OptionProps extends OptionRendererProps {
	optionData: OptionSchema;
	selected: boolean;
	truncateOption?: boolean;
	checkboxes?: boolean;
	index: number;
	active?: boolean;
	menu?: boolean;
	onClick?: () => void;
	onChange?: (event: ChangeEvent) => void;
	updateActiveOption?: (index: number) => void;
}
export declare type DropdownAlign = "left" | "right";
export declare type OptionType = "DEFAULT" | "WITH_ICON" | "WITH_META" | "ICON_WITH_META";
export interface Selected {
	label: OptionSchema["label"];
	value: OptionSchema["value"];
}
export interface SelectAll {
	indeterminate: boolean;
	checked: boolean;
}
export interface PopoverOptions {
	appendToBody?: PopoverProps["appendToBody"];
	hideOnReferenceEscape?: PopoverProps["hideOnReferenceEscape"];
	boundaryElement?: PopoverProps["boundaryElement"];
}
export declare type TriggerAndOptionProps = TriggerProps & OptionRendererProps;
export interface DropdownListProps extends TriggerAndOptionProps {
	align?: DropdownAlign;
	noResultMessage?: string;
	selectAllLabel?: string;
	footerLabel?: string;
	selectedSectionLabel?: string;
	applyButtonLabel?: string;
	cancelButtonLabel?: string;
	withSearch?: boolean;
	withCheckbox?: boolean;
	withSelectAll?: boolean;
	showApplyButton?: boolean;
	truncateOption?: boolean;
	totalOptions?: number;
	maxHeight?: number;
	width?: number;
	maxWidth?: number;
	minWidth?: number;
	loadersCount?: number;
	popoverOptions?: PopoverOptions;
}
export declare type fetchOptionsFunction = (searchTerm: string) => Promise<{
	searchTerm?: string;
	count: number;
	options: OptionSchema[];
}>;
export declare type EventType = "select-option" | "deselect-option" | "select-all" | "deselect-all" | "clear-all" | "apply-selected" | "cancel-selected";
export interface ControlledProps {
	selected?: OptionSchema[];
	onUpdate?: (type: EventType, options?: OptionSchema | OptionSchema[], recentSelected?: OptionSchema[]) => void;
}
export interface SyncProps {
	options: OptionSchema[];
	loading?: boolean;
}
export interface AsyncProps {
	fetchOptions?: fetchOptionsFunction;
}
export interface TriggerProps {
	labelLimit?: number;
	customLabel?: (selected: number, totalOptions?: number, selectedOptions?: OptionSchema[]) => string;
	customTrigger?: (label: string) => React.ReactElement;
}
export interface SharedDropdownProps extends DropdownListProps, BaseProps {
	name?: string | number;
	totalOptions?: number;
	closeOnSelect: boolean;
	triggerOptions: TriggerProps;
	open?: boolean;
	staticLimit: number;
	searchDebounceDuration: number;
	onPopperToggle?: (open: boolean, type?: string) => void;
	getLabel?: (label: string) => void;
	onChange?: (selected: any[] | any, name?: string | number) => void;
	onClose?: (selected: any[], name?: string | number) => void;
}
export declare type SyncDropdownProps = SyncProps & SharedDropdownProps;
export declare type AsyncDropdownProps = AsyncProps & SharedDropdownProps;
export declare type UncontrolledDropdownProps = SyncDropdownProps & AsyncDropdownProps;
export declare type ControlledDropdownProps = ControlledProps & SyncDropdownProps & AsyncDropdownProps;
export declare type DropdownProps = ControlledDropdownProps & UncontrolledDropdownProps;
export interface DropdownState {
	async: boolean;
	searchInit: boolean;
	options: OptionSchema[];
	loading?: boolean;
	optionsApplied: boolean;
	open?: boolean;
	searchTerm: string;
	optionsLength: number;
	searchedOptionsLength: number;
	triggerLabel: string;
	selectAll: SelectAll;
	selected: OptionSchema[];
	tempSelected: OptionSchema[];
	previousSelected: OptionSchema[];
}
export declare class Dropdown extends React.Component<DropdownProps, DropdownState> {
	staticLimit: number;
	static defaultProps: {
		triggerOptions: {};
		options: never[];
		closeOnSelect: boolean;
		staticLimit: number;
		searchDebounceDuration: number;
	};
	constructor(props: DropdownProps);
	componentDidMount(): void;
	componentDidUpdate(prevProps: DropdownProps, prevState: DropdownState): void;
	getDisabledOptions: (options?: OptionSchema[]) => OptionSchema[];
	fetchOptionsFunction: (searchTerm: string) => Promise<any>;
	getUnSelectedOptions: (options: OptionSchema[], init: boolean) => OptionSchema[];
	getSelectedOptions: (options: OptionSchema[], init: boolean) => OptionSchema[];
	updateOptions: (init: boolean, async?: boolean | undefined) => void;
	updateSearchTerm: (search: string) => void;
	updateOnPopperToggle: () => void;
	updateTriggerLabel: (selectedArray?: Selected[], totalOptions?: number | undefined) => string;
	updateSelectedOptions: (selectedArray: OptionSchema[], isSingleSelect: boolean, isControlled?: boolean | undefined) => void;
	onOptionSelect: (option: OptionSchema) => void;
	onSelect: (option: OptionSchema, checked: boolean) => void;
	onSelectAll: (event: ChangeEvent) => void;
	debounceSearch: import("throttle-debounce").throttle<() => void>;
	debounceClear: import("throttle-debounce").throttle<() => void>;
	onClearOptions: () => void;
	onTogglePopper: (type: string) => void;
	onCancelOptions: () => void;
	onApplyOptions: () => void;
	onToggleDropdown: (updatedOpen: boolean, type?: string | undefined) => void;
	render(): JSX.Element;
}
export declare type HeadingSize = "s" | "m" | "l" | "xl" | "xxl";
export interface HeadingProps extends BaseProps, BaseHtmlProps<HTMLHeadingElement> {
	children: React.ReactText;
	appearance: HeadingAppearance;
	size: HeadingSize;
}
export declare const Heading: {
	(props: HeadingProps): JSX.Element;
	displayName: string;
	defaultProps: {
		appearance: string;
		size: string;
	};
};
export declare type IconAppearance = "default" | "destructive" | "white" | "subtle" | "disabled" | "info" | "alert" | "warning" | "success" | "primary_lighter" | "primary" | "primary_dark" | "alert_lighter" | "alert_dark" | "warning_lighter" | "warning_dark" | "success_lighter" | "success_dark" | "accent1" | "accent1_lighter" | "accent1_dark" | "accent2" | "accent2_lighter" | "accent2_dark" | "accent3" | "accent3_lighter" | "accent3_dark" | "accent4" | "accent4_lighter" | "accent4_dark" | "inverse";
export declare type IconType = "filled" | "outlined" | "outline" | "rounded" | "round" | "two-tone" | "sharp";
export interface IconProps extends BaseProps {
	name?: string;
	size: number;
	type?: IconType;
	appearance?: IconAppearance;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
	children?: React.ReactNode;
	tabIndex?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>["tabIndex"];
}
export declare const Icon: {
	(props: IconProps): JSX.Element;
	displayName: string;
	defaultProps: {
		size: number;
		type: string;
	};
};
export declare type InputType = "text" | "password" | "number" | "email" | "tel" | "url";
export declare type InputSize = "tiny" | "regular" | "large";
export interface InputProps extends BaseProps, BaseHtmlProps<HTMLInputElement> {
	name?: string;
	type?: InputType;
	value?: string;
	defaultValue?: string;
	placeholder?: string;
	size?: InputSize;
	icon?: string;
	inlineLabel?: string;
	disabled?: boolean;
	required?: boolean;
	autoFocus?: boolean;
	autoComplete?: AutoComplete;
	readOnly?: boolean;
	min?: number;
	max?: number;
	minLength?: number;
	maxLength?: number;
	pattern?: string;
	error?: boolean;
	info?: string;
	minWidth?: string;
	onClear?: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
	actionIcon?: React.ReactElement<IconProps>;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export declare type MetricInputSize = "regular" | "large";
export interface MetricInputProps extends BaseProps, BaseHtmlProps<HTMLInputElement> {
	name?: string;
	value?: React.ReactText;
	defaultValue?: React.ReactText;
	placeholder?: string;
	size?: MetricInputSize;
	icon?: string;
	prefix?: string;
	suffix?: string;
	disabled?: boolean;
	autoFocus?: boolean;
	autoComplete?: AutoComplete;
	readOnly?: boolean;
	min?: number;
	max?: number;
	error?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
export declare const MetricInput: React.ForwardRefExoticComponent<MetricInputProps & React.RefAttributes<HTMLInputElement>>;
export interface MaskProps extends BaseProps {
	mask: Mask;
	placeholderChar?: string;
	caption?: string;
	validators?: Validators;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>, maskedVal: string) => void;
	onBlur?: (e: React.ChangeEvent<HTMLInputElement>, maskedVal: string) => void;
	onClear?: (e: React.MouseEvent<HTMLElement>) => void;
	clearOnEmptyBlur?: boolean;
}
export declare type InputMaskProps = InputProps & MaskProps;
export declare const InputMask: React.ForwardRefExoticComponent<InputProps & MaskProps & React.RefAttributes<HTMLInputElement>>;
export interface LabelProps extends BaseProps, BaseHtmlProps<HTMLLabelElement> {
	children: React.ReactNode;
	disabled?: boolean;
	required?: boolean;
	optional?: boolean;
	withInput?: boolean;
}
export declare const Label: {
	(props: LabelProps): JSX.Element;
	displayName: string;
};
export interface CaptionProps extends BaseProps {
	children: React.ReactNode;
	error?: boolean;
	hide?: boolean;
	withInput?: boolean;
}
export declare const Caption: {
	(props: CaptionProps): JSX.Element;
	displayName: string;
};
export declare type TextSize = "small" | "regular" | "large";
export declare type TextAppearance = "default" | "white" | "destructive" | "subtle" | "disabled" | "success" | "link";
export interface TextProps extends BaseProps, BaseHtmlProps<HTMLSpanElement> {
	children: React.ReactText;
	weight?: "strong" | "medium";
	small?: boolean;
	appearance: TextAppearance;
	size: TextSize;
}
export declare const Text: {
	(props: TextProps): JSX.Element;
	displayName: string;
	defaultProps: {
		appearance: string;
		size: string;
	};
};
export interface LegendProps extends BaseProps {
	children: React.ReactText;
	iconAppearance: string;
	labelAppearance?: TextAppearance;
	iconSize: number;
	labelWeight?: "strong" | "medium";
	onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
	onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
	onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export declare const Legend: {
	(props: LegendProps): JSX.Element;
	displayName: string;
	defaultProps: {
		iconAppearance: string;
		iconSize: number;
	};
};
export declare type DropdownOptions = MakeOptional<DropdownProps, keyof typeof Dropdown["defaultProps"]>;
export interface EditableDropdownProps extends BaseProps {
	placeholder: string;
	dropdownOptions: Omit<DropdownOptions, "getLabel" | "placeholder">;
	customTriggerRenderer?: (label: string) => React.ReactNode;
}
export declare const EditableDropdown: {
	(props: EditableDropdownProps): JSX.Element;
	defaultProps: {
		placeholder: string;
		dropdownOptions: {};
	};
};
export declare type LinkTarget = "_blank" | "_self" | "_parent" | "_top";
export declare type LinkAppearance = "default" | "subtle";
export declare type LinkSize = "regular" | "tiny";
export interface LinkProps extends BaseProps, OmitNativeProps<HTMLLinkElement, "onClick"> {
	id?: string;
	appearance: LinkAppearance;
	size: LinkSize;
	disabled: boolean;
	href?: string;
	target?: LinkTarget;
	rel?: string;
	download?: string;
	hreflang?: string;
	onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
	children: React.ReactNode;
}
export declare const Link: {
	(props: LinkProps): JSX.Element;
	displayName: string;
	defaultProps: {
		appearance: string;
		size: string;
		disabled: boolean;
	};
};
export interface MessageProps extends BaseProps {
	appearance: MessageAppearance;
	title?: string;
	children?: React.ReactNode;
	description: string;
	actions?: React.ReactNode;
}
export declare const Message: {
	(props: MessageProps): JSX.Element;
	displayName: string;
	defaultProps: {
		appearance: string;
		description: string;
	};
};
export interface MetaProps {
	label: string;
	icon?: string;
	iconAppearance?: IconProps["appearance"];
	labelAppearance?: TextProps["appearance"];
}
export interface MetaListProps extends BaseProps {
	list: MetaProps[];
	seperator?: boolean;
	seperatorAppearance: IconProps["appearance"];
	iconAppearance: IconProps["appearance"];
	labelAppearance: TextProps["appearance"];
}
export declare const MetaList: {
	(props: MetaListProps): JSX.Element;
	displayName: string;
	defaultProps: {
		seperatorAppearance: string;
		iconAppearance: string;
		labelAppearance: string;
	};
};
export interface HandleProps {
	value: number;
	fillAfter?: boolean;
	fillBefore?: boolean;
	onChange?: (newValue: number) => void;
	onRelease?: (newValue: number) => void;
}
export interface InternalHandleProps extends HandleProps {
	disabled?: boolean;
	isCurrentLabelHovered?: boolean;
	label: string;
	max: number;
	min: number;
	stepSize: number;
	tickSize: number;
	tickSizeRatio: number;
	zIndex?: number;
}
export interface HandleState {
	isHandleMoving?: boolean;
	isHandleHovered?: boolean;
}
declare class Handle extends React.Component<InternalHandleProps, HandleState> {
	state: {
		isHandleMoving: boolean;
		isHandleHovered: boolean;
	};
	handleElement: HTMLElement | null;
	refHandlers: {
		handle: (el: HTMLDivElement) => HTMLDivElement;
	};
	componentWillUnmount(): void;
	componentDidUpdate(_prevProps: InternalHandleProps, prevState: HandleState): void;
	mouseEventClientOffset: (event: MouseEvent | React.MouseEvent<HTMLElement>) => number;
	clientToValue: (clientPixel: number) => number;
	changeValue: (newValue: number, callback?: ((newValue: number) => void) | undefined) => number;
	endHandleMovement: (event: MouseEvent) => void;
	continueHandleMovement: (event: MouseEvent) => void;
	beginHandleMovement: (event: MouseEvent | React.MouseEvent<HTMLElement>) => void;
	handleKeyDown: (event: React.KeyboardEvent<HTMLSpanElement>) => void;
	handleKeyUp: (event: React.KeyboardEvent<HTMLSpanElement>) => void;
	getHandleMidpointAndOffset: (handleElement: HTMLElement | null, useOppositeDimension?: boolean) => {
		handleMidpoint: number;
		handleOffset: number;
	};
	handleMouseOver: () => void;
	handleMouseLeave: () => void;
	render(): JSX.Element;
	removeDocumentEventListeners: () => void;
}
export interface MultiSliderProps extends BaseProps {
	disabled?: boolean;
	labelStepSize: number;
	labelPrecision?: number;
	max: number;
	min: number;
	stepSize: number;
	label?: string;
	labelRenderer: boolean | ((value: number) => string);
}
export interface SliderBaserProps extends MultiSliderProps {
	onChange?: (values: number) => void;
	onRelease?: (values: number) => void;
}
export interface RangeSliderBaseProps extends MultiSliderProps {
	onRangeChange?: (values: NumberRange) => void;
	onRangeRelease?: (values: NumberRange) => void;
}
export interface MultiSliderState {
	labelPrecision: number;
	tickSize: number;
	tickSizeRatio: number;
	hoveredLabelValue?: number;
}
export declare type InternalMultiSliderProps = SliderBaserProps & RangeSliderBaseProps;
export declare class MultiSlider extends React.Component<InternalMultiSliderProps, MultiSliderState> {
	static defaultProps: {
		labelStepSize: number;
		max: number;
		min: number;
		stepSize: number;
		labelRenderer: boolean;
	};
	static Handle: React.FunctionComponent<HandleProps>;
	handleElements: Handle[];
	trackElement: HTMLElement | null;
	constructor(props: InternalMultiSliderProps);
	getDerivedStateFromProps(props: InternalMultiSliderProps): {
		labelPrecision: number;
	};
	getSnapshotBeforeUpdate(prevProps: InternalMultiSliderProps): null;
	componentDidMount(): void;
	getLabelPrecision: ({ labelPrecision, stepSize }: InternalMultiSliderProps) => number;
	getOffsetRatio: (value: number) => number;
	addHandleRef: (ref: Handle) => void;
	getHandleValues: (props: React.PropsWithChildren<InternalMultiSliderProps>) => HandleProps[];
	updateTickSize: () => void;
	getTrackFill: (start: HandleProps, end?: HandleProps | undefined) => boolean;
	nearestHandleForValue(handles: Handle[], getOffset: (handle: Handle) => number): Handle | undefined;
	maybeHandleTrackClick: (event: React.MouseEvent<HTMLDivElement>) => void;
	getLockedHandleIndex: (startIndex: number, endIndex: number) => number;
	getNewHandleValues: (newValue: number, oldIndex: number) => number[];
	onReleaseHandler: (newValue: number, index: number) => void;
	onChangeHandler: (newValue: number, index: number) => void;
	formatLabel: (value: number) => string;
	renderHandles: () => JSX.Element[] | null;
	renderLabels: () => JSX.Element[];
	renderTrackFill: (index: number, start: HandleProps, end: HandleProps) => JSX.Element;
	renderTracks: () => JSX.Element[];
	handleLabelMouseOver: (value: number) => void;
	handleLabelMouseLeave: () => void;
	render(): JSX.Element;
}
export interface OutsideClickProps extends BaseHtmlProps<HTMLDivElement>, BaseProps {
	onOutsideClick: (event: Event) => void;
	children: React.ReactElement<any>;
}
export declare const OutsideClick: React.ForwardRefExoticComponent<OutsideClickProps & React.RefAttributes<HTMLDivElement>>;
export declare type ParagraphAppearance = "default" | "white" | "destructive" | "subtle" | "disabled";
export interface ParagraphProps extends BaseProps, BaseHtmlProps<HTMLParagraphElement> {
	children: React.ReactNode;
	appearance: ParagraphAppearance;
}
export declare const Paragraph: {
	(props: ParagraphProps): JSX.Element;
	displayName: string;
	defaultProps: {
		appearance: string;
	};
};
export interface ProgressBarProps extends BaseProps {
	value: number;
	max: number;
}
export declare const ProgressBar: {
	(props: ProgressBarProps): JSX.Element;
	displayName: string;
	defaultProps: {
		max: number;
	};
};
export declare type RadioSize = "regular" | "tiny";
export interface RadioProps extends BaseProps, OmitNativeProps<HTMLInputElement, "onChange"> {
	size?: RadioSize;
	disabled?: boolean;
	label?: string;
	helpText?: string;
	name: string;
	value: string;
	defaultChecked?: boolean;
	checked?: boolean;
	onChange?: (event: ChangeEvent) => void;
}
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export declare type RowProps = BaseProps & BaseHtmlProps<HTMLDivElement>;
export declare const Row: React.ForwardRefExoticComponent<BaseProps & Pick<React.HTMLProps<HTMLDivElement>, "accept" | "acceptCharset" | "action" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "async" | "autoComplete" | "autoFocus" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "cite" | "classID" | "cols" | "colSpan" | "content" | "controls" | "coords" | "crossOrigin" | "data" | "dateTime" | "default" | "defer" | "disabled" | "download" | "encType" | "form" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "height" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "label" | "list" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "multiple" | "muted" | "name" | "nonce" | "noValidate" | "open" | "optimum" | "pattern" | "placeholder" | "playsInline" | "poster" | "preload" | "readOnly" | "rel" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "selected" | "shape" | "sizes" | "span" | "src" | "srcDoc" | "srcLang" | "srcSet" | "start" | "step" | "summary" | "target" | "type" | "useMap" | "value" | "width" | "wmode" | "wrap" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "slot" | "spellCheck" | "style" | "tabIndex" | "title" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key"> & React.RefAttributes<HTMLDivElement>>;
export interface StatusHintProps extends BaseProps {
	children: React.ReactText;
	appearance: MessageAppearance;
	onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
	onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
	onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export declare const StatusHint: {
	(props: StatusHintProps): JSX.Element;
	displayName: string;
	defaultProps: {
		appearance: string;
	};
};
export interface PillsProps extends BaseProps {
	appearance: AccentAppearance;
	subtle?: boolean;
	children: React.ReactText;
}
export declare const Pills: {
	(props: PillsProps): JSX.Element;
	displayName: string;
	defaultProps: {
		appearance: string;
	};
};
export declare type SpinnerAppearance = "primary" | "secondary" | "white";
export declare type SpinnerSize = "small" | "medium" | "large";
export interface SpinnerProps extends BaseProps {
	appearance: SpinnerAppearance;
	size: SpinnerSize;
}
export declare const Spinner: {
	(props: SpinnerProps): JSX.Element;
	displayName: string;
	defaultProps: {
		appearance: string;
		size: string;
	};
};
export interface SliderProps extends MultiSliderProps {
	defaultValue: number;
	value?: number;
	onChange?: (value: number) => void;
	onRelease?: (value: number) => void;
}
export declare const Slider: {
	(props: SliderProps): JSX.Element;
	displayName: string;
	defaultProps: {
		defaultValue: number;
		labelStepSize: number;
		max: number;
		min: number;
		stepSize: number;
		labelRenderer: boolean;
	};
};
export interface RangeSliderProps extends MultiSliderProps {
	defaultValue: NumberRange;
	value?: NumberRange;
	onChange?: (value: NumberRange) => void;
	onRelease?: (value: NumberRange) => void;
}
export declare const RangeSlider: {
	(props: RangeSliderProps): JSX.Element;
	displayName: string;
	defaultProps: {
		defaultValue: number[];
		labelStepSize: number;
		max: number;
		min: number;
		stepSize: number;
		labelRenderer: boolean;
	};
};
export interface SubheadingProps extends BaseProps, BaseHtmlProps<HTMLHeadingElement> {
	children: React.ReactText;
	appearance: HeadingAppearance;
}
export declare const Subheading: {
	(props: SubheadingProps): JSX.Element;
	displayName: string;
	defaultProps: {
		appearance: string;
	};
};
export declare type SwitchSize = "regular" | "tiny" | "large";
export declare type SwitchAppearance = "primary" | "alert" | "success" | "warning";
export declare type KeyboardEvent = React.KeyboardEvent<HTMLInputElement>;
export interface SwitchProps extends BaseProps, OmitNativeProps<HTMLInputElement, "onChange"> {
	size?: SwitchSize;
	appearance?: SwitchAppearance;
	defaultChecked?: boolean;
	checked?: boolean;
	disabled?: boolean;
	name?: string;
	value?: string;
	onChange?: (event: ChangeEvent | KeyboardEvent, selected: boolean) => void;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
export interface TextareaProps extends BaseProps, BaseHtmlProps<HTMLTextAreaElement> {
	name?: string;
	value?: string;
	defaultValue?: string;
	placeholder?: string;
	rows?: number;
	disabled?: boolean;
	required?: boolean;
	error?: boolean;
	resize?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onClick?: (e: React.MouseEvent<HTMLTextAreaElement>) => void;
	onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
	onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}
export declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export declare type Action = {
	label: string;
	onClick: (e: React.MouseEvent) => void;
};
export interface ToastProps extends BaseProps {
	title: string;
	appearance: MessageAppearance;
	message?: string;
	actions?: Action[];
	onClose?: () => void;
}
export declare const Toast: {
	(props: ToastProps): JSX.Element;
	displayName: string;
	defaultProps: {
		appearance: string;
	};
};
export declare type PositionType = "auto-start" | "auto" | "auto-end" | "top-start" | "top" | "top-end" | "right-start" | "right" | "right-end" | "bottom-end" | "bottom" | "bottom-start" | "left-end" | "left" | "left-start";
export declare type ActionType = "click" | "hover";
export declare type Offset = "small" | "medium" | "large";
export interface PopperWrapperProps {
	init?: boolean;
	trigger: React.ReactElement<any>;
	boundaryElement?: Element | null;
	triggerClass?: string;
	placement: PositionType;
	children: React.ReactElement<any>;
	style: React.CSSProperties;
	appendToBody: boolean;
	on: ActionType;
	hoverable: boolean;
	offset: Offset;
	closeOnBackdropClick: boolean;
	closeOnScroll?: boolean;
	open?: boolean;
	hide?: boolean;
	onToggle: (open: boolean, type?: string) => void;
}
export declare type Position = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "right";
export interface CustomStyle {
	height?: number | string;
	minHeight?: number | string;
	maxHeight?: number | string;
	width?: number | string;
	minWidth?: number | string;
	maxWidth?: number | string;
}
declare const propsList: readonly ["appendToBody", "trigger", "hoverable", "on", "open", "closeOnBackdropClick", "offset", "closeOnScroll"];
export declare type PopperProps = typeof propsList[number];
export interface PopoverProps extends Pick<PopperWrapperProps, PopperProps>, BaseProps {
	children: React.ReactNode;
	position: Position;
	onToggle?: (open: boolean, type?: string) => void;
	dark?: boolean;
	customStyle: CustomStyle;
	triggerClass?: string;
	hideOnReferenceEscape?: boolean;
	boundaryElement: React.RefObject<HTMLElement> | Element;
}
export declare const Popover: {
	(props: PopoverProps): JSX.Element;
	displayName: string;
	defaultProps: Record<string, any> & {
		offset: string;
		position: string;
		hideOnReferenceEscape: boolean;
		customStyle: {};
		boundaryElement: HTMLElement;
	};
};
export declare type ChipOptions = {
	icon?: ChipProps["icon"];
	type?: ChipProps["type"];
	clearButton?: ChipProps["clearButton"];
	onClick?: (value: string, index: number) => void;
};
export interface ChipInputProps extends BaseProps {
	allowDuplicates: boolean;
	chipOptions: ChipOptions;
	disabled?: boolean;
	placeholder?: string;
	value?: string[];
	defaultValue: string[];
	autoFocus: boolean;
	onChange?: (chips: string[]) => void;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
export declare const ChipInput: {
	(props: ChipInputProps): JSX.Element;
	displayName: string;
	defaultProps: {
		chipOptions: {};
		defaultValue: never[];
		allowDuplicates: boolean;
		autoFocus: boolean;
	};
};
export declare type Menu = {
	name: string;
	label: string;
	link?: string;
	icon?: string;
	group?: string;
	count?: number;
	disabled?: boolean;
	subMenu?: Menu[];
};
export declare type ActiveMenu = ({
	name: string;
} | {
	link: string;
}) & Partial<Menu>;
export interface VerticalNavProps extends BaseProps {
	menus: Menu[];
	active?: ActiveMenu;
	onClick?: (menu: Menu) => void;
	rounded: boolean;
	expanded: boolean;
	autoCollapse: boolean;
}
export declare const VerticalNav: {
	(props: VerticalNavProps): JSX.Element;
	defaultProps: {
		expanded: boolean;
		autoCollapse: boolean;
		rounded: boolean;
	};
};
export declare type HorizontalNavProps = BaseProps & Pick<VerticalNavProps, "menus" | "active" | "onClick">;
export declare const HorizontalNav: (props: HorizontalNavProps) => JSX.Element;
declare const tooltipPropsList: readonly ["trigger", "on", "open", "offset", "onToggle", "dark", "customStyle", "closeOnBackdropClick", "hideOnReferenceEscape", "closeOnScroll"];
export declare type TooltipPopperProps = typeof tooltipPropsList[number];
export interface TooltipProps extends Omit<PopoverProps, TooltipPopperProps>, BaseProps {
	tooltip: string;
	children: PopoverProps["trigger"];
}
export declare const Tooltip: {
	(props: TooltipProps): JSX.Element;
	defaultProps: Record<string, any> & {
		hoverable: boolean;
	};
};
export interface DialogProps extends BaseProps {
	onClose: (event?: Event | React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
	dimension: ModalProps["dimension"];
	open: boolean;
	heading: ModalHeaderProps["heading"];
	title?: string;
	description?: string;
	primaryButtonLabel: string;
	primaryButtonAppearance: ButtonProps["appearance"];
	primaryButtonCallback: () => void;
	secondaryButtonLabel: string;
	secondaryButtonAppearance: ButtonProps["appearance"];
	secondaryButtonCallback: () => void;
}
export declare const Dialog: {
	(props: DialogProps): JSX.Element;
	displayName: string;
	defaultProps: {
		dimension: string;
		primaryButtonAppearance: string;
		secondaryButtonAppearance: string;
	};
};
export interface OverlayHeaderProps extends BaseProps {
	heading?: string;
	onClose?: (event: React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
	subHeading?: string;
	backButton?: boolean;
	backButtonCallback?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	backIcon?: boolean;
	backIconCallback?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
export declare type ModalDimension = "small" | "medium" | "large";
export interface ModalProps extends BaseProps {
	backdropClose?: boolean | ((event?: Event, reason?: string) => void);
	dimension: ModalDimension;
	open: boolean;
	onClose?: (event?: Event | React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
	headerOptions?: OverlayHeaderProps;
	header?: React.ReactNode;
	footer?: React.ReactNode;
	footerOptions?: FooterOptions;
	children?: React.ReactNode;
	seperator?: boolean;
	closeOnEscape?: boolean;
}
export interface ModalState {
	open: boolean;
	animate: boolean;
	zIndex?: number;
}
export declare class Modal extends React.Component<ModalProps, ModalState> {
	modalRef: React.RefObject<HTMLDivElement>;
	element: Element;
	static defaultProps: {
		dimension: string;
	};
	constructor(props: ModalProps);
	onCloseHandler: (event: KeyboardEvent) => void;
	componentDidMount(): void;
	componentWillUnmount(): void;
	componentDidUpdate(prevProps: ModalProps): void;
	onOutsideClickHandler(event: Event): void;
	render(): JSX.Element;
}
export interface ModalHeaderProps extends BaseProps {
	heading?: string;
	onClose?: (event: React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
	subHeading?: string;
	seperator?: boolean;
	backIcon?: boolean;
	backIconCallback?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
export declare const ModalHeader: {
	(props: ModalHeaderProps): JSX.Element;
	displayName: string;
};
export interface ModalBodyProps extends BaseProps {
	children: React.ReactNode;
	stickFooter: boolean;
	withFooter: boolean;
}
export declare const ModalBody: {
	(props: ModalBodyProps): JSX.Element;
	defaultProps: {
		stickFooter: boolean;
		withFooter: boolean;
	};
	displayName: string;
};
export interface ModalFooterProps extends BaseProps {
	open?: boolean;
	children: React.ReactNode;
	stickToBottom?: boolean;
	seperator?: boolean;
	inSidesheet?: boolean;
}
export declare const ModalFooter: {
	(props: ModalFooterProps): JSX.Element;
	displayName: string;
};
export declare type FullScreenDimension = "medium" | "large";
export interface FullscreenModalProps extends BaseProps {
	dimension: FullScreenDimension;
	open: boolean;
	onClose?: (event?: Event | React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
	headerOptions?: OverlayHeaderProps;
	header?: React.ReactNode;
	footerOptions?: FooterOptions;
	footer?: React.ReactNode;
	children?: React.ReactNode;
	closeOnEscape?: boolean;
}
export interface ModalState {
	open: boolean;
	animate: boolean;
	zIndex?: number;
}
export declare class FullscreenModal extends React.Component<FullscreenModalProps, ModalState> {
	modalRef: React.RefObject<HTMLDivElement>;
	element: Element;
	static defaultProps: {
		dimension: string;
	};
	constructor(props: FullscreenModalProps);
	onOutsideClickHandler: (event: KeyboardEvent) => void;
	onCloseHandler: (event: KeyboardEvent) => void;
	componentDidMount(): void;
	componentWillUnmount(): void;
	componentDidUpdate(prevProps: FullscreenModalProps): void;
	render(): JSX.Element;
}
export declare type SidesheetDimension = "regular" | "large";
export interface SidesheetProps extends BaseProps {
	headerOptions: Omit<OverlayHeaderProps, "onClose">;
	header?: React.ReactNode;
	dimension: SidesheetDimension;
	open: boolean;
	stickFooter?: boolean;
	seperator?: boolean;
	children?: React.ReactNode;
	footer?: React.ReactNode;
	footerOptions?: FooterOptions;
	backdropClose?: boolean;
	closeOnEscape?: boolean;
	onClose?: (event?: Event | React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
}
export interface SidesheetState {
	open: boolean;
	animate: boolean;
	zIndex?: number;
}
export declare class Sidesheet extends React.Component<SidesheetProps, SidesheetState> {
	sidesheetRef: React.RefObject<HTMLDivElement>;
	element: Element;
	static defaultProps: {
		dimension: string;
		stickFooter: boolean;
		headerOptions: {};
	};
	constructor(props: SidesheetProps);
	onCloseHandler: (event: KeyboardEvent) => void;
	componentDidMount(): void;
	componentWillUnmount(): void;
	componentDidUpdate(prevProps: SidesheetProps): void;
	onOutsideClickHandler(event: Event): void;
	render(): JSX.Element;
}
export interface CollapsibleProps extends BaseProps {
	expanded: boolean;
	hoverable: boolean;
	height: React.ReactText;
	expandedWidth: number;
	onToggle?: (expanded: boolean) => void;
	children: React.ReactChild;
}
export declare const Collapsible: {
	(props: CollapsibleProps): JSX.Element;
	displayName: string;
	defaultProps: {
		expanded: boolean;
		hoverable: boolean;
		height: string;
		expandedWidth: string;
	};
};
export declare type StatusType = "failed" | "sending" | "sent" | "read" | "urgent";
export interface StatusProps extends BaseProps {
	type: StatusType;
	time?: string | number;
	readText?: string;
	failedText?: string;
	sendingText?: string;
}
export interface BoxProps extends BaseProps {
	onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export interface MessageTextProps extends BaseProps {
	text: string;
	typingText: string;
}
export declare type MessageType = "incoming" | "outgoing";
export interface ChatMessageBaseProps extends BaseProps {
	type: MessageType;
	isTyping?: boolean;
	statusOptions?: StatusProps;
}
export declare type ChatMessageProps = ChatMessageBaseProps & BoxProps & MessageTextProps;
export declare const ChatMessage: {
	(props: ChatMessageProps): JSX.Element;
	displayName: string;
};
export declare type EmptyStateSize = "large" | "small";
export interface EmptyStateProps extends BaseProps {
	imageSrc?: string;
	title: string;
	description: string;
	size: EmptyStateSize;
	children?: React.ReactNode;
	image?: React.ReactNode;
}
export declare const EmptyState: {
	(props: EmptyStateProps): JSX.Element;
	displayName: string;
};
export interface ModalDescriptionProps extends BaseProps {
	title?: string;
	description?: string;
}
export declare const ModalDescription: {
	(props: ModalDescriptionProps): JSX.Element;
	displayName: string;
};
export declare type PaginationType = "basic" | "jump";
export interface PaginationProps extends BaseProps {
	type: PaginationType;
	totalPages: number;
	page: number;
	onPageChange: (page: number) => void;
}
export declare const Pagination: {
	(props: PaginationProps): JSX.Element;
	displayName: string;
	defaultProps: {
		type: string;
		page: number;
		totalPages: number;
	};
};
export declare type PlaceholderImageSize = "small" | "medium" | "large";
export declare type Length = "small" | "medium" | "large";
export declare type PlaceholderParagraphSize = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
export interface PlaceholderParagraphProps extends BaseProps {
	length: Length;
	size?: PlaceholderParagraphSize;
}
export declare const PlaceholderParagraph: {
	(props: PlaceholderParagraphProps): JSX.Element;
	displayName: string;
	defaultProps: {
		length: string;
	};
};
export interface PlaceholderProps extends BaseProps {
	withImage: boolean;
	round?: boolean;
	imageSize: PlaceholderImageSize;
	children?: React.ReactElement<PlaceholderParagraphProps> | React.ReactElement<PlaceholderParagraphProps>[];
}
export declare const Placeholder: {
	(props: PlaceholderProps): JSX.Element;
	displayName: string;
	defaultProps: {
		withImage: boolean;
		imageSize: string;
	};
};
export interface EditableInputProps extends BaseProps {
	value?: string;
	placeholder?: string;
	size: "tiny" | "regular";
	disableSaveAction?: boolean;
	error?: boolean;
	errorMessage?: string;
	inputOptions: Omit<InputProps, "error" | "value" | "defaultValue" | "size" | "placeholder">;
	onChange?: (value: string) => void;
}
export declare const EditableInput: {
	(props: EditableInputProps): JSX.Element;
	defaultProps: {
		size: string;
		placeholder: string;
		inputOptions: {};
	};
};
export interface EditableChipInputProps extends BaseProps {
	placeholder: string;
	value?: string[];
	onChange?: (chips: string[]) => void;
	disableSaveAction?: boolean;
	chipInputOptions: Omit<ChipInputProps, "placeholder" | "value" | "defaultValue">;
}
export declare const EditableChipInput: {
	(props: EditableChipInputProps): JSX.Element;
	defaultProps: {
		placeholder: string;
		chipInputOptions: {};
	};
};
export declare type ProgressRingSize = "small" | "regular";
export interface ProgressRingProps extends BaseProps {
	size: ProgressRingSize;
	value: number;
	max: number;
}
export declare const ProgressRing: {
	(props: ProgressRingProps): JSX.Element;
	displayName: string;
	defaultProps: {
		size: string;
		max: number;
	};
};
export interface StepProp {
	label: string;
	value?: React.ReactText;
}
export interface StepperProps extends BaseProps {
	active: number;
	completed: number;
	steps: StepProp[];
	onChange?: (active: number, completed: number, label?: string, value?: React.ReactText) => void;
	skipIndexes: number[];
}
export declare const Stepper: {
	(props: StepperProps): JSX.Element;
	displayName: string;
	defaultProps: {
		completed: number;
		active: number;
		skipIndexes: never[];
	};
};
export declare type InputOptions = Omit<InputMaskProps, "mask" | "value" | "onChange" | "onBlur" | "onClick" | "onClear"> & {
	label?: string;
};
export declare type DateRangePickerProps = SharedProps & {
	onRangeChange?: (startDate?: Date, endDate?: Date, startValue?: string, endValue?: string) => void;
	children: React.ReactNode;
	contentAlign?: "left" | "right";
	startDate?: DateType;
	endDate?: DateType;
	rangeLimit?: number;
	withInput?: boolean;
	singleInput?: boolean;
	open?: boolean;
	position: PopoverProps["position"];
	inputFormat: DateFormat;
	outputFormat: DateFormat;
	inputOptions: InputOptions;
	startInputOptions: InputOptions;
	endInputOptions: InputOptions;
	validators: Validators;
	monthsInView?: CalendarProps["monthsInView"];
};
export interface DateRangePickerState {
	init: boolean;
	startDate?: Date;
	endDate?: Date;
	startValue: string;
	endValue: string;
	startError: boolean;
	endError: boolean;
	yearNav?: number;
	monthNav?: number;
	open: boolean;
}
export declare class DateRangePicker extends React.Component<DateRangePickerProps, DateRangePickerState> {
	static defaultProps: {
		children: JSX.Element;
		contentAlign: string;
		monthsInView: undefined;
		position: string;
		inputFormat: string;
		outputFormat: string;
		validators: ((val: string, format: string) => boolean)[];
		inputOptions: {
			label: string;
		};
		startInputOptions: {
			label: string;
		};
		endInputOptions: {
			label: string;
		};
		size: string;
		view: string;
		firstDayOfWeek: string;
		jumpView: boolean;
	};
	monthsInView: number;
	constructor(props: DateRangePickerProps);
	componentDidUpdate(prevProps: DateRangePickerProps, prevState: DateRangePickerState): void;
	getDate: (startDate?: Date | undefined, endDate?: Date | undefined) => {
		startValue: string;
		endValue: string;
	};
	getErrors: (startDate?: Date | undefined, endDate?: Date | undefined) => {
		startError: boolean;
		endError: boolean;
	};
	getInRangeError: () => boolean;
	onRangeChangeHandler: (sDate?: Date | undefined, eDate?: Date | undefined) => void;
	onToggleHandler: (o: boolean, type?: string | undefined) => void;
	renderCalendar(): JSX.Element;
	render(): JSX.Element;
}
export interface TabsWrapperProps extends BaseProps {
	active?: number;
	children: SingleOrArray<React.ReactElement>;
	onTabChange?: (tabIndex: number) => void;
}
export declare const TabsWrapper: {
	(props: TabsWrapperProps): JSX.Element;
	displayName: string;
};
export interface TabProps {
	label: React.ReactNode | string;
	disabled?: boolean;
	icon?: string;
	count?: number;
	children?: React.ReactNode;
}
export declare const Tab: {
	(props: TabProps): JSX.Element;
	displayName: string;
};
export interface TabConfig {
	label: string;
	count?: number;
	icon?: string;
	disabled?: boolean;
}
export interface TabsProps extends BaseProps {
	activeIndex?: number;
	withSeparator?: boolean;
	tabs: TabConfig[];
	children?: SingleOrArray<React.ReactElement>;
	onTabChange?: (tabIndex: number) => void;
}
export declare const Tabs: {
	(props: TabsProps): JSX.Element;
	displayName: string;
	defaultProps: {
		withSeparator: boolean;
		tabs: never[];
	};
};
export declare type FileErrorTypes = "FILE_INVALID_TYPE" | "FILE_TOO_LARGE" | "FILE_TOO_SMALL" | "TOO_MANY_FILES";
export interface DOMFile extends Blob {
	readonly lastModified: number;
	readonly name: string;
}
export interface FileWithPath extends DOMFile {
	readonly path?: string;
}
declare function fromEvent(evt: Event): Promise<(FileWithPath | DataTransferItem)[]>;
export interface FileError {
	type: FileErrorTypes;
	message: string;
}
export interface FileRejection {
	file: File;
	errors: FileError[];
}
export interface DropzoneBaseProps extends BaseProps {
	accept?: string | string[];
	multiple?: boolean;
	preventDropOnDocument?: boolean;
	minSize: number;
	maxSize: number;
	disabled: boolean;
	getFilesFromEvent: (event: DragEvent | Event) => any;
	onFileDialogCancel?: () => void;
	onDragEnter?: (event: DragEvent) => void;
	onDragLeave?: (event: DragEvent) => void;
	onDragOver?: (event: DragEvent) => void;
	onDrop?: (event: DragEvent | Event, acceptedFiles: File[], rejectedFiles: FileRejection[]) => void;
	onDropAccepted?: (event: DragEvent | Event, files: File[]) => void;
	onDropRejected?: (event: DragEvent | Event, rejectedFiles: FileRejection[]) => any;
	validator?: (file: File) => FileError | FileError[];
}
export declare type DropZoneType = "standard" | "compressed" | "tight";
export interface DropzoneProps extends BaseProps, DropzoneBaseProps {
	formatLabel?: string;
	type: DropZoneType;
	sizeLabel?: string;
	sampleFileLink?: React.ReactNode;
}
export declare const Dropzone: {
	(props: DropzoneProps): JSX.Element;
	displayName: string;
	defaultProps: {
		type: string;
		disabled: boolean;
		getFilesFromEvent: typeof fromEvent;
		maxSize: number;
		minSize: number;
		multiple: boolean;
		preventDropOnDocument: boolean;
		validator: () => null;
	};
};
export interface FileUploaderFormatProps {
	formatLabel?: string;
}
export interface FileUploaderButtonProps extends BaseProps {
	name?: string;
	id?: string;
	accept?: string[];
	multiple: boolean;
	uploadButtonLabel: string;
	disabled: boolean;
	onChange?: (fileList: File[], event: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface FileUploaderProps extends FileUploaderButtonProps, FileUploaderFormatProps, BaseProps {
	title: string;
	sizeLabel: string;
	sampleFileLink?: JSX.Element;
}
export declare const FileUploader: {
	(props: FileUploaderProps): JSX.Element;
	defaultProps: {
		uploadButtonLabel: string;
		disabled: boolean;
		multiple: boolean;
	} & {
		title: string;
		sizeLabel: string;
	};
	displayName: string;
};
export interface FileItem {
	file: File;
	id?: any;
	status?: FileStatus;
	progress?: number;
	errorMessage?: string;
}
export interface FileUploaderListProps extends BaseProps {
	fileList: FileItem[];
	onClick?: (file: File, id?: any) => void;
	onDelete?: (file: File, id?: any) => void;
	onRetry?: (file: File, id?: any) => void;
}
export declare const FileUploaderList: {
	(props: FileUploaderListProps): JSX.Element | null;
	defaultProps: {
		fileList: never[];
	};
	displayName: string;
};
export interface NestedRowProps {
	rowIndex: number;
	data: RowData;
	schema: GridProps["schema"];
	loading: GridProps["loading"];
}
export declare type SortType = "asc" | "desc" | "unsort";
export declare type Pinned = "left" | "right" | "unpin";
export declare type Alignment = "left" | "right" | "center";
export declare type Comparator = (a: RowData, b: RowData) => -1 | 0 | 1;
export declare type Filter = any[];
export declare type GridRef = HTMLDivElement | null;
export declare type PageInfo = {
	page: number;
	scrollTop: number;
};
export interface FetchDataOptions {
	page?: number;
	pageSize?: number;
	filterList?: GridProps["filterList"];
	sortingList?: GridProps["sortingList"];
	searchTerm?: string;
}
export declare type fetchDataFunction = (options: FetchDataOptions) => Promise<{
	searchTerm?: string;
	count: number;
	data: Data;
	schema: Schema;
}>;
export declare type updateSortingListFunction = (newSortingList: GridProps["sortingList"]) => void;
export declare type updateFilterListFunction = (newFilterList: GridProps["filterList"]) => void;
export declare type updateSchemaFunction = (newSchema: Schema) => void;
export declare type updateColumnSchemaFunction = (name: ColumnSchema["name"], schemaUpdate: Partial<ColumnSchema>) => void;
export declare type reorderColumnFunction = (from: string, to: string) => void;
export declare type onSelectFn = (rowIndex: number, selected: boolean) => void;
export declare type onFilterChangeFn = (name: ColumnSchema["name"], selected: any) => void;
export declare type onSelectAllFunction = (selected: boolean, selectAll?: boolean) => void;
export declare type onFilterChangeFunction = (data: RowData, filters: Filter) => boolean;
export declare type onRowClickFunction = (data: RowData, rowIndex?: number) => void;
export declare type onMenuChangeFn = (name: ColumnSchema["name"], selected: any) => void;
export declare type updatePrevPageInfoFunction = (value: PageInfo) => void;
export declare type CellType = "DEFAULT" | "WITH_META_LIST" | "AVATAR" | "AVATAR_WITH_TEXT" | "AVATAR_WITH_META_LIST" | "STATUS_HINT" | "ICON";
export declare type ColumnSchema = {
	name: string;
	displayName: string;
	width?: React.ReactText;
	minWidth?: React.ReactText;
	maxWidth?: React.ReactText;
	resizable?: boolean;
	sorting?: boolean;
	comparator?: Comparator;
	separator?: boolean;
	pinned?: Pinned;
	hidden?: boolean;
	filters?: DropdownProps["options"];
	onFilterChange?: onFilterChangeFunction;
	translate?: (data: RowData) => RowData;
	cellType?: CellType;
	cellRenderer?: React.FC<GridCellProps>;
	align?: Alignment;
	tooltip?: boolean;
};
export declare type RowData = Record<string, any> & {
	_selected?: boolean;
};
export declare type GridSize = "comfortable" | "standard" | "compressed" | "tight";
export declare type GridType = "resource" | "data";
export declare type Data = RowData[];
export declare type Schema = ColumnSchema[];
export interface GridProps extends BaseProps {
	size: GridSize;
	type: GridType;
	onRowClick?: onRowClickFunction;
	loaderSchema: Schema;
	schema: Schema;
	data: Data;
	totalRecords: number;
	loading: boolean;
	error: boolean;
	updateData?: () => void;
	updateSchema?: updateSchemaFunction;
	showHead?: boolean;
	showMenu?: boolean;
	draggable?: boolean;
	nestedRows?: boolean;
	nestedRowRenderer?: React.FC<NestedRowProps>;
	withPagination?: boolean;
	page: number;
	pageSize: number;
	withCheckbox?: boolean;
	onSelect?: onSelectFn;
	onSelectAll?: onSelectAllFunction;
	errorTemplate?: React.FunctionComponent | React.ReactNode;
	sortingList: {
		name: ColumnSchema["name"];
		type: SortType;
	}[];
	updateSortingList?: updateSortingListFunction;
	filterList: Record<ColumnSchema["name"], Filter>;
	updateFilterList?: updateFilterListFunction;
	selectAll?: {
		checked: boolean;
		indeterminate: boolean;
	};
	headCellTooltip?: boolean;
	separator?: boolean;
	showFilters: boolean;
}
export interface GridState {
	init: boolean;
	prevPageInfo: PageInfo;
}
export declare class Grid extends React.Component<GridProps, GridState> {
	static defaultProps: GridProps;
	constructor(props: GridProps);
	componentDidMount(): void;
	forceRerender(): void;
	componentWillUnmount(): void;
	componentDidUpdate(prevProps: GridProps, prevState: GridState): void;
	gridRef: GridRef;
	isHeadSyncing: boolean;
	isBodySyncing: boolean;
	addScrollListeners(): void;
	removeScrollListeners(): void;
	syncScroll: (type: string) => () => void;
	updateRenderedSchema: (newSchema: Schema) => void;
	updateColumnSchema: updateColumnSchemaFunction;
	reorderColumn: reorderColumnFunction;
	updateSortingList: (sortingList: GridProps["sortingList"]) => void;
	updateFilterList: (filterList: GridProps["filterList"]) => void;
	onMenuChange: onMenuChangeFn;
	onFilterChange: onFilterChangeFn;
	onSelect: onSelectFn;
	onSelectAll: CheckboxProps["onChange"];
	updatePrevPageInfo: updatePrevPageInfoFunction;
	render(): JSX.Element;
}
export interface PartialCellProps {
	data: RowData;
	schema: ColumnSchema;
	loading?: boolean;
	expanded?: boolean;
}
export interface GridCellProps extends PartialCellProps {
	size?: GridSize;
	rowIndex?: number;
	colIndex?: number;
}
export declare const GridCell: {
	(props: GridCellProps): JSX.Element | null;
	displayName: string;
};
export interface ExternalHeaderProps {
	children?: React.ReactNode;
	withSearch?: boolean;
	searchPlaceholder?: string;
	dynamicColumn?: boolean;
	allowSelectAll?: boolean;
}
export declare type updateSearchTermFunction = (newSearchTerm: string) => void;
export interface HeaderProps extends ExternalHeaderProps {
	loading?: boolean;
	error?: boolean;
	data: Data;
	schema: Schema;
	selectAll?: GridProps["selectAll"];
	totalRecords: number;
	withPagination?: boolean;
	page: number;
	pageSize: number;
	withCheckbox?: boolean;
	showHead?: boolean;
	updateSchema?: updateSchemaFunction;
	filterList?: GridProps["filterList"];
	showFilters: boolean;
	updateFilterList?: updateFilterListFunction;
	onSelectAll?: onSelectAllFunction;
	searchTerm?: string;
	updateSearchTerm?: updateSearchTermFunction;
}
export interface ErrorTemplateProps {
	errorType?: TableProps["errorType"];
}
export declare type FilterPosition = "GRID" | "HEADER";
export interface TableSyncProps {
	data: GridProps["data"];
	schema: GridProps["schema"];
	loading: GridProps["loading"];
	error: GridProps["error"];
	errorType?: string;
	onSearch?: (data: Data, searchTerm: string) => Data;
}
export interface AsyncProps {
	fetchData?: fetchDataFunction;
}
export interface SharedTableProps extends BaseProps {
	showHead: GridProps["showHead"];
	type: GridProps["type"];
	size: GridProps["size"];
	draggable: GridProps["draggable"];
	nestedRows?: GridProps["nestedRows"];
	nestedRowRenderer?: GridProps["nestedRowRenderer"];
	withHeader?: boolean;
	headerOptions?: ExternalHeaderProps;
	withCheckbox?: GridProps["withCheckbox"];
	showMenu?: GridProps["showMenu"];
	withPagination: GridProps["withPagination"];
	page: GridProps["page"];
	paginationType: PaginationProps["type"];
	pageSize: GridProps["pageSize"];
	loaderSchema: GridProps["loaderSchema"];
	multipleSorting: boolean;
	sortingList: GridProps["sortingList"];
	filterList: GridProps["filterList"];
	errorTemplate?: React.FunctionComponent<ErrorTemplateProps>;
	searchDebounceDuration: number;
	onRowClick?: GridProps["onRowClick"];
	onSelect?: (rowIndexes: number[], selected: boolean, allSelected: RowData[], selectAll?: boolean) => void;
	onPageChange?: PaginationProps["onPageChange"];
	headCellTooltip?: GridProps["headCellTooltip"];
	separator?: GridProps["headCellTooltip"];
	filterPosition: FilterPosition;
}
export declare type SyncTableProps = SharedTableProps & TableSyncProps;
export declare type AsyncTableProps = SharedTableProps & AsyncProps;
export declare type TableProps = AsyncTableProps & SyncTableProps;
export interface TableState {
	async: boolean;
	data: TableProps["data"];
	schema: TableProps["schema"];
	sortingList: TableProps["sortingList"];
	filterList: TableProps["filterList"];
	page: TableProps["page"];
	totalRecords: GridProps["totalRecords"];
	selectAll: GridProps["selectAll"];
	searchTerm: HeaderProps["searchTerm"];
	loading: TableProps["loading"];
	error: TableProps["error"];
	errorType?: TableProps["errorType"];
}
export declare class Table extends React.Component<TableProps, TableState> {
	static defaultProps: {
		type: string;
		size: string;
		showHead: boolean;
		showMenu: boolean;
		multipleSorting: boolean;
		headerOptions: {};
		withPagination: boolean;
		paginationType: string;
		page: number;
		pageSize: number;
		draggable: boolean;
		data: never[];
		schema: never[];
		loading: boolean;
		error: boolean;
		loaderSchema: never[];
		sortingList: never[];
		filterList: {};
		filterPosition: string;
		searchDebounceDuration: number;
		errorTemplate: (props: ErrorTemplateProps) => JSX.Element;
	};
	debounceUpdate: () => void;
	constructor(props: TableProps);
	componentDidMount(): void;
	componentDidUpdate(prevProps: TableProps, prevState: TableState): void;
	updateData: (searchUpdate?: boolean | undefined) => void;
	updateDataFn: () => void;
	onSelect: onSelectFn;
	onSelectAll: onSelectAllFunction;
	onPageChange: PaginationProps["onPageChange"];
	updateSchema: updateSchemaFunction;
	updateSortingList: updateSortingListFunction;
	updateFilterList: updateFilterListFunction;
	updateSearchTerm: updateSearchTermFunction;
	render(): JSX.Element;
}
export declare type ExcludeTypes = "showHead" | "draggable" | "showMenu" | "headCellTooltip" | "filterPosition";
export declare type ListProps = Omit<TableProps, ExcludeTypes>;
export declare const List: {
	(props: ListProps): JSX.Element;
	defaultProps: {
		type: string;
		size: string;
		showHead: boolean;
		showMenu: boolean;
		multipleSorting: boolean;
		headerOptions: {};
		withPagination: boolean;
		paginationType: string;
		page: number;
		pageSize: number;
		draggable: boolean;
		data: never[];
		schema: never[];
		loading: boolean;
		error: boolean;
		loaderSchema: never[];
		sortingList: never[];
		filterList: {};
		filterPosition: string;
		searchDebounceDuration: number;
		errorTemplate: (props: ErrorTemplateProps) => JSX.Element;
	};
};
export interface VerticalNavigationProps {
	menus: Menu[];
	active?: ActiveMenu;
	onClick?: (menu: Menu) => void;
	rounded: boolean;
	expanded: boolean;
	footer?: boolean;
	onToggle?: (expanded: boolean) => void;
	autoCollapse: boolean;
}
export declare type LayoutType = "vertical" | "horizontal";
export declare type Align = "left" | "center";
export interface NavigationProps extends BaseProps, VerticalNavigationProps {
	type: LayoutType;
	align: Align;
}
export declare const Navigation: {
	(props: NavigationProps): JSX.Element;
	defaultProps: {
		type: string;
		align: string;
		expanded: boolean;
		autoCollapse: boolean;
		rounded: boolean;
	};
};
export declare type navigationPositionType = "center" | "bottom";
export interface PageHeaderProps extends BaseProps {
	title: string;
	navigation?: React.ReactNode;
	stepper?: React.ReactNode;
	actions?: React.ReactNode;
	tabs?: React.ReactNode;
	breadcrumbs?: React.ReactNode;
	badge?: React.ReactNode;
	status?: React.ReactNode;
	meta?: React.ReactNode;
	navigationPosition: navigationPositionType;
	separator: boolean;
}
export declare const PageHeader: {
	(props: PageHeaderProps): JSX.Element;
	defaultProps: {
		navigationPosition: string;
		separator: boolean;
	};
};
export interface FileObject extends BaseProps, Record<string, any> {
	name: string;
	size: string;
	type: string;
}
export interface FileListItemProps extends BaseProps, Record<string, any> {
	file: File | FileObject;
	status: FileStatus;
	progress?: number;
	errorMessage?: string;
	actions?: React.ReactNode;
	fileItem?: any;
	fileSize?: string;
	onClick?: (file: FileListItemProps) => void;
}
export interface FileListProps extends BaseProps {
	fileList: Omit<FileListItemProps[], "onClick">;
	onClick?: FileListItemProps["onClick"];
	actionRenderer?: React.FC<FileListItemProps>;
}
export declare const FileList: {
	(props: FileListProps): JSX.Element | null;
	defaultProps: {
		fileList: never[];
	};
	displayName: string;
};
export interface VerificationProps extends BaseProps {
	fields?: number;
	type?: "text" | "number" | "password";
	onComplete?: (value: string) => void;
}
export declare type VerificationCodeInputProps = VerificationProps & Omit<InputProps, "name" | "type" | "defaultValue" | "size" | "icon" | "inlineLabel" | "autoComplete" | "onChange" | "onClear" | "info" | "min" | "max" | "minLength" | "maxLength" | "actionIcon">;
export declare const VerificationCodeInput: {
	(props: VerificationCodeInputProps): JSX.Element;
	displayName: string;
};
export interface InlineMessageProps extends BaseProps {
	appearance: MessageAppearance;
	description: string;
}
export declare const InlineMessage: {
	(props: InlineMessageProps): JSX.Element;
	displayName: string;
	defaultProps: {
		appearance: string;
		description: string;
	};
};
export declare type ChoiceListAlignment = "horizontal" | "vertical";
export declare type ChoiceListSize = "regular" | "tiny";
export interface Choice {
	value: string;
	label?: string;
	disabled?: boolean;
	helpText?: string;
	name: string;
}
export interface ChoiceListProps extends BaseProps {
	title?: string;
	choices: Choice[];
	alignment?: ChoiceListAlignment;
	size?: ChoiceListSize;
	allowMultiple?: boolean;
	disabled?: boolean;
	selected?: string[];
	onChange?(event: ChangeEvent, selected: string[]): void;
}
export declare const ChoiceList: {
	(props: ChoiceListProps): JSX.Element;
	displayName: string;
	defaultProps: {
		alignment: string;
		size: string;
		allowMultiple: boolean;
		disabled: boolean;
	};
};
export declare type DividerType = "basic" | "header";
export interface DividerProps extends BaseProps {
	vertical: boolean;
	appearance: DividerType;
}
export declare const Divider: {
	(props: DividerProps): JSX.Element;
	displayName: string;
	defaultProps: {
		appearance: string;
		vertical: boolean;
	};
};

export {};
