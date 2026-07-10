import * as React from 'react';
import { Calendar, SharedProps } from '../calendar/Calendar';
import { DateType, DateFormat } from '../calendar/types';
import { Popover, Utils, Chip } from '@/index';
import { PopoverProps, InputMaskProps } from '@/index.type';
import { Validators } from '@/utils/types';
import { convertToDate, translateToString, compareDate, getDateInfo } from '../calendar/utility';
import { getInitialFocusCell } from '../calendar/utils';
import { Trigger } from './Trigger';
import config from '../calendar/config';
import classNames from 'classnames';
import styles from '@css/components/datePicker.module.css';
import uidGenerator from '@/utils/uidGenerator';
import { getFocusableElements, handleFocusTrapKeyDown, restoreFocusToElementIfConnected } from '@/utils/overlayHelper';

export type DatePickerProps = SharedProps & {
  /**
   * Callback function called when date is changed
   * @argument date Date object
   * @argument dateVal Date string value as per `outputFormat`
   */
  onDateChange?: (date: Date | undefined, dateVal?: string) => void;
  /**
   * Selected date
   *
   * `number` - number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC
   *
   * `string` - Date string value as per `inputFormat`
   */
  date?: DateType;
  /**
   * Set if `InputMask` should be used as trigger
   */
  withInput?: boolean;
  /**
   * Sets open state of `Popover`
   * @default false
   */
  open?: boolean;
  /**
   * Position of `DatePicker` with respect to `InputMask`
   */
  position: PopoverProps['position'];
  /**
   * Should be used if `date` is of type `string`
   */
  inputFormat: DateFormat;
  /**
   * Should be used to translate `date` to desired format for `onDateChange` callback
   */
  outputFormat: DateFormat;
  /**
   * Props to be used for `InputMask`
   */
  inputOptions: Omit<InputMaskProps, 'mask' | 'value'>;
  /**
   * custom Validator for `DatePicker`
   *
   * `ValidatorFn = (val: string, format: string) => boolean`
   */
  validators: Validators;
  /**
   * Close Popover on date selection
   */
  closeOnSelect: boolean;
  /**
   * Add or remove the select today's date chip from DatePicker Footer
   */
  showTodayDate?: boolean;
  /**
   * Element to be rendered inside Popover
   */
  children?: React.ReactNode;
  /**
   * Callback function called when date is invalid
   * @argument date Date object
   * @argument dateVal Date string value as per `outputFormat`
   */
  onError?: (date: Date | undefined, dateVal?: string) => void;
  /**
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * PopoverOptions:
   * {
   *    appendToBody?: boolean;
   *    hideOnReferenceEscape?: boolean;
   *    boundaryElement?: Element;
   * }
   * </pre>
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | appendToBody | Appends `Datepicker` inside body element | true |
   * | hideOnReferenceEscape | Hides the `Datepicker` when its reference element is outside the boundaries | true |
   * | boundaryElement | Boundary of Popover | |
   *
   */
  popoverOptions?: PopoverOptions;
  /**
   * Accessible label for date input trigger
   */
  'aria-label'?: string;
  /**
   * Associates date input trigger with an external label
   */
  'aria-labelledby'?: string;
};

export interface DatePickerState {
  init: boolean;
  date?: Date;
  error: boolean;
  open: boolean;
}

interface PopoverOptions {
  appendToBody?: PopoverProps['appendToBody'];
  hideOnReferenceEscape?: PopoverProps['hideOnReferenceEscape'];
  boundaryElement?: PopoverProps['boundaryElement'];
}

export class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
  static defaultProps = {
    ...Calendar.defaultProps,
    position: 'bottom-start',
    inputFormat: 'mm/dd/yyyy',
    outputFormat: 'mm/dd/yyyy',
    validators: [Utils.validators.date],
    inputOptions: {},
    closeOnSelect: true,
  };

  dialogRef = React.createRef<HTMLDivElement>();
  triggerRef = React.createRef<HTMLInputElement>();
  panelId: string;
  /**
   * `true` when the popover opened as a side effect of typing/pasting into the
   * editable input. In that case focus must stay in the input (caret preserved)
   * and must NOT be moved into the calendar dialog.
   */
  openedViaInput = false;
  /**
   * `true` when the popover is closing as a result of a click outside the
   * dialog. In that case the user has already moved focus/interaction
   * elsewhere, so `deactivateFocusTrap` must NOT steal focus back to the
   * trigger. Reset immediately after being consumed.
   */
  closedViaOutsideClick = false;
  /** When true, the active trigger input is included in Tab trapping (input-originated open). */
  focusTrapIncludesTrigger = false;
  /** Pointer on trigger chrome (icon/wrapper) — not a keyboard focus-origin open. */
  triggerHadPointerDown = false;

  isFocusOnTrigger = () => {
    const trigger = this.triggerRef.current;
    const active = document.activeElement;
    return !!(trigger && active && (trigger === active || trigger.contains(active)));
  };

  /** Controlled opens that happen while a trigger input already has focus (Tab/onFocus). */
  flagOpenFromFocusedTrigger = () => {
    if (this.isFocusOnTrigger() && !this.triggerHadPointerDown) {
      this.openedViaInput = true;
      this.focusTrapIncludesTrigger = true;
    }
  };

  flagTriggerPointerDown = () => {
    this.triggerHadPointerDown = true;
  };

  constructor(props: DatePickerProps) {
    super(props);

    const { inputFormat, validators } = props;

    const date = convertToDate(props.date, inputFormat, validators);
    const error = this.getError(date);

    this.panelId = `DatePicker-dialog-${uidGenerator()}`;

    this.state = {
      date,
      error,
      init: false,
      open: props.open || false,
    };
  }

  componentDidMount() {
    if (this.state.open) {
      this.activateFocusTrap();
    }
  }

  componentWillUnmount() {
    if (this.state.open) {
      window.removeEventListener('keydown', this.onFocusTrapKeyDown, true);
    }
  }

  onFocusTrapKeyDown = (event: KeyboardEvent) => {
    const container = this.dialogRef.current;
    if (!container) return;
    const externalTargets = this.focusTrapIncludesTrigger ? [this.triggerRef.current] : undefined;
    if (handleFocusTrapKeyDown(event, container, undefined, externalTargets)) {
      // Window capture runs before parent Modal/Sidesheet document traps so Tab
      // from an external trigger is handled before an outer dialog can steal it.
      event.stopImmediatePropagation();
    }
  };

  focusInitialElement = () => {
    const container = this.dialogRef.current;
    if (!container) return;
    const target = getInitialFocusCell(container) || getFocusableElements(container)[0];
    target?.focus({ preventScroll: true });
  };

  /**
   * `Popover` mounts its portal (and therefore `dialogRef`) in a passive
   * `useEffect`, which can run after the `requestAnimationFrame` scheduled
   * below. Poll across a bounded number of animation frames until the dialog
   * node exists before moving focus into it, so focus isn't silently dropped
   * back on the input (leaving Tab free to escape the `aria-modal` dialog).
   */
  waitForDialogAndFocus = (retriesLeft = 10) => {
    window.requestAnimationFrame(() => {
      if (!this.state.open) return;
      if (this.dialogRef.current) {
        this.focusInitialElement();
      } else if (retriesLeft > 0) {
        this.waitForDialogAndFocus(retriesLeft - 1);
      }
    });
  };

  activateFocusTrap = (moveFocus = true) => {
    // Always arm the focus trap (Tab handling) while the dialog is open.
    // Only move focus into the calendar for explicit opens; when the popover
    // opened because the user is typing/pasting, leave the caret in the input
    // and include that trigger in the trap cycle.
    this.focusTrapIncludesTrigger = !moveFocus;
    if (moveFocus) {
      this.waitForDialogAndFocus();
    }
    window.addEventListener('keydown', this.onFocusTrapKeyDown, true);
  };

  /**
   * When the popover is already open, re-include the trigger in Tab trapping
   * after the user refocuses the editable input (click/label/type path).
   */
  includeTriggerInFocusTrapWhenOpen = () => {
    if (this.state.open) {
      this.focusTrapIncludesTrigger = true;
    }
  };

  /**
   * Opens the popover as a result of typing/pasting in the editable input.
   * Flags the open so focus is not pulled into the calendar dialog.
   */
  openViaInput = () => {
    this.openedViaInput = true;
    if (this.state.open) {
      this.focusTrapIncludesTrigger = true;
    } else {
      this.setState({ open: true });
    }
  };

  /**
   * Flags that the popover open about to be triggered originates from a pointer
   * press on the input itself (mouse click into the editable field). Fires on
   * `mousedown`, before the wrapper click that opens the popover, so focus stays
   * in the input (caret preserved). Pressing the calendar icon does NOT hit the
   * input element, so this does not fire and the calendar still receives focus.
   */
  flagOpenFromInput = () => {
    this.triggerHadPointerDown = true;
    this.openedViaInput = true;
    this.includeTriggerInFocusTrapWhenOpen();
  };

  /**
   * Explicit keyboard open (ArrowDown / Alt+ArrowDown on the input). Unlike
   * typing, this is an intentional request to enter the calendar, so focus IS
   * moved into the grid: opening goes through the explicit path
   * (`openedViaInput` stays false → `activateFocusTrap(true)`), and when the
   * popover is already open focus is moved into the grid directly.
   */
  openViaKeyboard = () => {
    if (this.state.open) {
      this.waitForDialogAndFocus();
    } else {
      this.setState({ open: true });
    }
  };

  deactivateFocusTrap = () => {
    window.removeEventListener('keydown', this.onFocusTrapKeyDown, true);
    this.focusTrapIncludesTrigger = false;
    if (this.closedViaOutsideClick) {
      // The user's click already moved focus/interaction elsewhere; don't pull
      // it back to the trigger.
      this.closedViaOutsideClick = false;
      return;
    }
    restoreFocusToElementIfConnected(this.triggerRef.current, this.dialogRef.current);
  };

  componentDidUpdate(prevProps: DatePickerProps, prevState: DatePickerState) {
    if (prevProps.date !== this.props.date) {
      const { inputFormat, validators } = this.props;

      const d = convertToDate(this.props.date, inputFormat, validators);
      this.setState({
        date: d,
      });
    }

    if (prevProps.open !== this.props.open) {
      this.setState({
        open: this.props.open || false,
      });
    }

    if (prevState.date !== this.state.date) {
      const { onDateChange, outputFormat } = this.props;

      const { date } = this.state;

      const newError = this.getError(date);

      this.setState({ error: newError });

      if (onDateChange) {
        if (!newError) {
          const dVal = translateToString(outputFormat, date);
          onDateChange(date, dVal);
        } else {
          onDateChange(undefined, '');
        }
      }
    }

    if (prevState.open !== this.state.open) {
      if (this.state.open) {
        const openedFromControlledProp = prevProps.open !== this.props.open && this.props.open === true;
        if (openedFromControlledProp) {
          this.flagOpenFromFocusedTrigger();
        }
        this.activateFocusTrap(!this.openedViaInput);
      } else {
        this.deactivateFocusTrap();
      }
      this.openedViaInput = false;
      this.triggerHadPointerDown = false;
    }
  }

  getError = (date?: Date) => {
    const { disabledBefore, disabledAfter, outputFormat, onError } = this.props;

    if (!date) return false;

    const { year: dbYear, month: dbMonth, date: dbDate } = getDateInfo(disabledBefore);
    const { year: daYear, month: daMonth, date: daDate } = getDateInfo(disabledAfter);

    if (compareDate(date, 'less', dbYear, dbMonth, dbDate) || compareDate(date, 'more', daYear, daMonth, daDate)) {
      if (onError) {
        const dVal = translateToString(outputFormat, date);
        onError(date, dVal);
      }
      return true;
    }
    return false;
  };

  onDateChangeHandler = (d?: Date) => {
    this.setState({
      init: true,
      date: d,
    });

    const { closeOnSelect } = this.props;

    if (closeOnSelect) this.setState({ open: false });
  };

  onToggleHandler = (o: boolean, type?: string) => {
    const { disabled } = this.props.inputOptions;
    if (disabled) return;

    switch (type) {
      case 'outsideClick':
        if (!o) this.closedViaOutsideClick = true;
        this.setState({ open: o });
        break;
      case 'escapeKeypress':
        this.setState({ open: o });
        break;
      case 'onClick':
        this.setState({ open: true });
        break;
    }
  };

  renderCalendar() {
    const {
      date: dateProp,
      open,
      position,
      inputFormat,
      outputFormat,
      inputOptions,
      validators,
      withInput,
      disabledBefore,
      disabledAfter,
      onDateChange,
      closeOnSelect,
      size,
      showTodayDate = true,
      children = <></>,
      view,
      ...rest
    } = this.props;

    const { date } = this.state;
    const { months } = config;
    const todayDate = new Date(Date.now());
    const todayMonthAndDate = `${months[todayDate.getMonth()]} ${todayDate.getDate()}`;
    const currDate = convertToDate(date, inputFormat, validators);
    const dateDisabledBefore = convertToDate(disabledBefore, inputFormat, validators);
    const dateDisabledAfter = convertToDate(disabledAfter, inputFormat, validators);

    const isSameDay = (date1: Date, date2: Date) => {
      return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
      );
    };

    const isTodayDisabled = () => {
      const isSameAsDisabledBefore = dateDisabledBefore && isSameDay(todayDate, dateDisabledBefore);
      const isSameAsDisabledAfter = dateDisabledAfter && isSameDay(todayDate, dateDisabledAfter);

      return (
        (!isSameAsDisabledBefore &&
          compareDate(
            dateDisabledBefore,
            'more',
            todayDate.getFullYear(),
            todayDate.getMonth(),
            todayDate.getDate()
          )) ||
        (!isSameAsDisabledAfter &&
          compareDate(dateDisabledAfter, 'less', todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate()))
      );
    };

    const todayChipClass = classNames({
      'd-flex justify-content-center': true,
      'pb-5': size === 'small',
      'pb-6': size === 'large',
      'pt-3': size === 'large' && view === 'year',
    });

    return (
      <div>
        <div className={styles['DatePicker-content']}>
          {children}
          <Calendar
            {...rest}
            size={size}
            date={currDate}
            view={view}
            disabledBefore={dateDisabledBefore}
            disabledAfter={dateDisabledAfter}
            onDateChange={this.onDateChangeHandler}
          />
        </div>
        {showTodayDate && (
          <div className={todayChipClass} data-test="DesignSystem-Select--TodaysDate-wrapper">
            <Chip
              label={`Today, ${todayMonthAndDate}`}
              name="chip"
              type="action"
              disabled={isTodayDisabled()}
              onClick={() => this.onDateChangeHandler(new Date())}
            />
          </div>
        )}
      </div>
    );
  }

  render() {
    const { position, withInput, inputFormat, inputOptions, validators, popoverOptions } = this.props;

    const { open } = this.state;

    if (withInput) {
      const resolvedAriaLabel = inputOptions['aria-label'] || this.props['aria-label'];
      const resolvedAriaLabelledby = inputOptions['aria-labelledby'] || this.props['aria-labelledby'];
      const triggerInputOptions = {
        ...inputOptions,
        ...(resolvedAriaLabel ? { 'aria-label': resolvedAriaLabel } : {}),
        ...(resolvedAriaLabelledby ? { 'aria-labelledby': resolvedAriaLabelledby } : {}),
      };
      return (
        <Popover
          trigger={
            <Trigger
              inputFormat={inputFormat}
              inputOptions={triggerInputOptions}
              validators={validators}
              state={this.state}
              setState={this.setState.bind(this)}
              open={open}
              panelId={this.panelId}
              triggerRef={this.triggerRef}
              openViaInput={this.openViaInput}
              onInputMouseDown={this.flagOpenFromInput}
              onTriggerPointerDown={this.flagTriggerPointerDown}
              onKeyboardOpen={this.openViaKeyboard}
            />
          }
          triggerClass="w-100"
          position={position}
          appendToBody={true}
          open={open}
          onToggle={this.onToggleHandler}
          {...popoverOptions}
        >
          <div role="dialog" aria-modal="true" aria-label="Choose date" id={this.panelId} ref={this.dialogRef}>
            {this.renderCalendar()}
          </div>
        </Popover>
      );
    }

    return this.renderCalendar();
  }
}

export default DatePicker;
