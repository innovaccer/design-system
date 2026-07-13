import * as React from 'react';
import { InputMask, Row, Column, Label, Utils } from '@/index';
import { compareDate, getDateInfo, translateToDate, translateToString } from '../calendar/utility';
import { DateRangePickerProps, DateRangePickerState } from './DateRangePicker';
import styles from '@css/components/dateRangePicker.module.css';
import classNames from 'classnames';
import uidGenerator from '@/utils/uidGenerator';

type TriggerProps = {
  inputFormat: DateRangePickerProps['inputFormat'];
  startInputOptions: DateRangePickerProps['startInputOptions'];
  endInputOptions: DateRangePickerProps['endInputOptions'];
  validators: DateRangePickerProps['validators'];
  state: DateRangePickerState;
  setState: any;
  /**
   * Whether the calendar popover is currently open (drives `aria-expanded`)
   */
  open?: boolean;
  /**
   * `id` of the calendar dialog panel this trigger controls (drives `aria-controls`)
   */
  panelId?: string;
  /**
   * Ref to the start-date input element, used to return focus on popover close
   */
  startTriggerRef?: React.Ref<HTMLInputElement>;
  /**
   * Ref to the end-date input element, used to return focus on popover close
   */
  endTriggerRef?: React.Ref<HTMLInputElement>;
  /**
   * Called with `'start'` or `'end'` when the corresponding input receives focus,
   * so the parent knows which trigger to return focus to on close
   */
  onTriggerFocus?: (type: 'start' | 'end') => void;
  /**
   * Opens the popover as a side effect of typing/pasting, WITHOUT moving focus
   * into the calendar dialog (keeps the caret in the input). Falls back to a
   * plain `open` state update when not provided.
   */
  openViaInput?: () => void;
  /**
   * Called on `mousedown` on an input element (before the wrapper click that
   * opens the popover) so a click INTO an editable field keeps the caret in
   * that input instead of moving focus into the calendar.
   */
  onInputMouseDown?: () => void;
  /** Pointer on trigger chrome — distinguishes icon clicks from keyboard focus opens. */
  onTriggerPointerDown?: () => void;
  /**
   * Called on an explicit keyboard open gesture (ArrowDown / Alt+ArrowDown) to
   * open the calendar AND move focus into the grid.
   */
  onKeyboardOpen?: () => void;
};

export const Trigger = (props: TriggerProps) => {
  const {
    inputFormat,
    startInputOptions,
    endInputOptions,
    validators,
    state,
    setState,
    open,
    panelId,
    startTriggerRef,
    endTriggerRef,
    onTriggerFocus,
    openViaInput,
    onInputMouseDown,
    onTriggerPointerDown,
    onKeyboardOpen,
  } = props;

  const { init, startDate, endDate, startError, endError } = state;

  const openPopoverFromInput = () => {
    if (openViaInput) {
      openViaInput();
    } else {
      setState({ open: true });
    }
  };

  const onStartMouseDown = (e: React.MouseEvent<HTMLInputElement>) => {
    startInputOptions.onMouseDown?.(e);
    onTriggerFocus?.('start');
    if (!startInputOptions.readOnly) {
      onInputMouseDown?.();
    }
  };

  const onEndMouseDown = (e: React.MouseEvent<HTMLInputElement>) => {
    endInputOptions.onMouseDown?.(e);
    onTriggerFocus?.('end');
    if (!endInputOptions.readOnly) {
      onInputMouseDown?.();
    }
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>, type: 'start' | 'end') => {
    const consumerOnKeyDown = type === 'start' ? startInputOptions.onKeyDown : endInputOptions.onKeyDown;
    consumerOnKeyDown?.(e);
    if (e.key === 'ArrowDown') {
      // Explicit keyboard open: enter the calendar grid (prevent caret jump).
      e.preventDefault();
      // Open the calendar to the month of the field being navigated from.
      if (!open) updateNav(type);
      onKeyboardOpen?.();
    }
  };

  const updateNav = (type: string) => {
    if (type === 'start') {
      const { year, month } = getDateInfo(startDate);
      setState({
        yearNav: year,
        monthNav: month,
      });
    }
    if (type === 'end') {
      const { year, month } = getDateInfo(endDate);

      setState({
        yearNav: year,
        monthNav: month,
      });
    }
  };

  const onPasteHandler = (_e: React.ClipboardEvent<HTMLInputElement>, val: string, type: string) => {
    onTriggerFocus?.(type === 'start' ? 'start' : 'end');
    openPopoverFromInput();

    if (type === 'start') {
      const placeholderChar = startInputOptions.placeholderChar || '_';
      if (val && !val.includes(placeholderChar)) {
        const d = translateToDate(inputFormat, val, validators);
        if (d) {
          setState({ startDate: d });
          if (endDate) {
            const { year: eYear, month: eMonth, date: eDate } = getDateInfo(endDate);
            if (compareDate(startDate, 'more', eYear, eMonth, eDate)) {
              setState({ endDate: undefined });
            }
          }
          if (startInputOptions.onPaste) startInputOptions.onPaste(_e, val);
        }
      }
    }
    if (type === 'end') {
      const placeholderChar = endInputOptions.placeholderChar ? endInputOptions.placeholderChar : '_';
      if (val && !val.includes(placeholderChar)) {
        const d = translateToDate(inputFormat, val, validators);
        if (d) {
          setState({ endDate: d });
          if (endInputOptions.onPaste) endInputOptions.onPaste(_e, val);
        }
      }
    }
  };

  const onChangeHandler = (_e: React.ChangeEvent<HTMLInputElement>, val: string, type: string) => {
    onTriggerFocus?.(type === 'start' ? 'start' : 'end');
    openPopoverFromInput();

    if (type === 'start') {
      const placeholderChar = startInputOptions.placeholderChar || '_';
      if (val && !val.includes(placeholderChar)) {
        const d = translateToDate(inputFormat, val, validators);
        if (d && !isNaN(d.getTime())) {
          setState({ startDate: d });
          if (endDate) {
            const { year: eYear, month: eMonth, date: eDate } = getDateInfo(endDate);
            if (compareDate(startDate, 'more', eYear, eMonth, eDate)) {
              setState({ endDate: undefined });
            }
          }
        }
      }
    }
    if (type === 'end') {
      const placeholderChar = endInputOptions.placeholderChar ? endInputOptions.placeholderChar : '_';
      if (val && !val.includes(placeholderChar)) {
        const d = translateToDate(inputFormat, val, validators);
        if (d && !isNaN(d.getTime())) setState({ endDate: d });
      }
    }
  };

  const onBlurHandler = (_e: React.ChangeEvent<HTMLInputElement>, val: string, type: string) => {
    setState({
      init: true,
    });
    const hasNumber = /\d/;

    if (type === 'start') {
      const { placeholderChar = '_' } = startInputOptions;

      if (val && hasNumber.test(val) && val.includes(placeholderChar)) {
        setState({ startError: true });
      } else if ((val && !hasNumber.test(val)) || !val) {
        setState({ startError: false });
      }

      if (!val || val.includes(placeholderChar)) setState({ startDate: undefined });
    }

    if (type === 'end') {
      const { placeholderChar = '_' } = endInputOptions;

      if (val && hasNumber.test(val) && val.includes(placeholderChar)) {
        setState({ endError: true });
      } else if ((val && !hasNumber.test(val)) || !val) {
        setState({ endError: false });
      }

      if (!val || val.includes(placeholderChar)) setState({ endDate: undefined });
    }
  };

  const onClearHandler = (type: string, e?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
    const readOnly = type === 'start' ? startInputOptions.readOnly : endInputOptions.readOnly;
    if (e?.type === 'click' && !readOnly) {
      onInputMouseDown?.();
    }
    setState({
      init: true,
    });
    if (type === 'start') {
      setState({
        startDate: undefined,
      });
      updateNav('end');
    }
    if (type === 'end') {
      setState({
        endDate: undefined,
      });
      updateNav('start');
    }
  };

  const onClickHandler = (type: string) => {
    const { open } = state;
    if (!open) {
      updateNav(type);
    }
  };

  const mask = Utils.masks.date[inputFormat];
  const startPlaceholderChar = startInputOptions.placeholderChar || '_';
  const endPlaceholderChar = endInputOptions.placeholderChar || '_';
  const showStartError = startInputOptions.error || (startInputOptions.required && startError && init);
  const showEndError = endInputOptions.error || (endInputOptions.required && endError && init);
  const startErrorMessage = startInputOptions.caption === undefined ? 'Invalid value' : startInputOptions.caption;
  const endErrorMessage = endInputOptions.caption === undefined ? 'Invalid value' : endInputOptions.caption;
  const { label: startLabel } = startInputOptions;
  const { label: endLabel } = endInputOptions;
  const startFieldIdRef = React.useRef<string>(`DateRangePicker-startInput-${uidGenerator()}`);
  const endFieldIdRef = React.useRef<string>(`DateRangePicker-endInput-${uidGenerator()}`);
  const startFieldId = startInputOptions.id || startFieldIdRef.current;
  const endFieldId = endInputOptions.id || endFieldIdRef.current;
  const startLabelId = `${startFieldId}-label`;
  const endLabelId = `${endFieldId}-label`;
  const inputValidator = (val: string): boolean => {
    return Utils.validators.isValid(validators, val, inputFormat);
  };

  const StartInputClassName = classNames({
    [styles['DateRangePicker-input']]: true,
    [styles['DateRangePicker-input--startDate']]: true,
  });

  const EndInputClassName = classNames({
    [styles['DateRangePicker-input']]: true,
    [styles['DateRangePicker-input--endDate']]: true,
  });

  const resolvedStartAriaLabelledby =
    [startLabel && startLabelId, startInputOptions['aria-labelledby']].filter(Boolean).join(' ') || undefined;
  const resolvedEndAriaLabelledby =
    [endLabel && endLabelId, endInputOptions['aria-labelledby']].filter(Boolean).join(' ') || undefined;

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="w-100" onMouseDown={() => onTriggerPointerDown?.()}>
      <Row data-test="DesignSystem-DateRangePicker-InputTrigger">
        <Column size={'6'} sizeXS={'12'} className={StartInputClassName}>
          {startLabel && (
            <Label
              id={startLabelId}
              required={startInputOptions.required}
              withInput={true}
              htmlFor={startFieldId}
              onMouseDown={() => {
                onTriggerFocus?.('start');
                if (!startInputOptions.readOnly) onInputMouseDown?.();
              }}
            >
              {startLabel}
            </Label>
          )}
          <InputMask
            icon="events"
            placeholder={inputFormat}
            {...startInputOptions}
            id={startFieldId}
            mask={mask}
            value={
              startDate
                ? translateToString(inputFormat, startDate)
                : init
                ? InputMask.utils.getDefaultValue(mask, startPlaceholderChar)
                : ''
            }
            onChange={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
              onChangeHandler(e, val || '', 'start');
            }}
            onPaste={(e: React.ClipboardEvent<HTMLInputElement>, val?: string) => {
              onPasteHandler(e, val || '', 'start');
            }}
            onBlur={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
              onBlurHandler(e, val || '', 'start');
            }}
            onClear={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) =>
              onClearHandler('start', e)
            }
            onClick={() => onClickHandler('start')}
            onMouseDown={onStartMouseDown}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => onKeyDownHandler(e, 'start')}
            onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
              startInputOptions.onFocus?.(e);
              onTriggerFocus?.('start');
            }}
            error={showStartError}
            caption={showStartError ? startErrorMessage : ''}
            validators={[inputValidator]}
            clearOnEmptyBlur={true}
            useDefaultValueOnEmpty={true}
            fillTemplateOnFocus={false}
            ref={startTriggerRef}
            role="combobox"
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls={panelId}
            aria-labelledby={resolvedStartAriaLabelledby}
          />
        </Column>
        <Column size={'6'} sizeXS={'12'} className={EndInputClassName}>
          {endLabel && (
            <Label
              id={endLabelId}
              required={endInputOptions.required}
              withInput={true}
              htmlFor={endFieldId}
              onMouseDown={() => {
                onTriggerFocus?.('end');
                if (!endInputOptions.readOnly) onInputMouseDown?.();
              }}
            >
              {endLabel}
            </Label>
          )}
          <InputMask
            icon="events"
            placeholder={inputFormat}
            {...endInputOptions}
            id={endFieldId}
            mask={mask}
            value={
              endDate
                ? translateToString(inputFormat, endDate)
                : init
                ? InputMask.utils.getDefaultValue(mask, endPlaceholderChar)
                : ''
            }
            onChange={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
              onChangeHandler(e, val || '', 'end');
            }}
            onPaste={(e: React.ClipboardEvent<HTMLInputElement>, val?: string) => {
              onPasteHandler(e, val || '', 'end');
            }}
            onBlur={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
              onBlurHandler(e, val || '', 'end');
            }}
            onClear={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => onClearHandler('end', e)}
            onClick={() => onClickHandler('end')}
            onMouseDown={onEndMouseDown}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => onKeyDownHandler(e, 'end')}
            onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
              endInputOptions.onFocus?.(e);
              onTriggerFocus?.('end');
            }}
            error={showEndError}
            caption={showEndError ? endErrorMessage : ''}
            validators={[inputValidator]}
            clearOnEmptyBlur={true}
            useDefaultValueOnEmpty={true}
            fillTemplateOnFocus={false}
            ref={endTriggerRef}
            role="combobox"
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls={panelId}
            aria-labelledby={resolvedEndAriaLabelledby}
          />
        </Column>
      </Row>
    </div>
  );
};
