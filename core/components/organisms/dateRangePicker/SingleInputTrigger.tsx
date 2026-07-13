import * as React from 'react';
import { InputMask, Row, Column, Label, Utils } from '@/index';
import { compareDate, getDateInfo, translateToDate } from '../calendar/utility';
import { DateRangePickerProps, DateRangePickerState } from './DateRangePicker';
import uidGenerator from '@/utils/uidGenerator';

type TriggerProps = {
  inputFormat: DateRangePickerProps['inputFormat'];
  inputOptions: DateRangePickerProps['startInputOptions'];
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
   * Ref to the underlying `input` element, used to return focus on popover close
   */
  triggerRef?: React.Ref<HTMLInputElement>;
  /**
   * Called when the input receives focus
   */
  onTriggerFocus?: () => void;
  /**
   * Called on `mousedown` on the input element (before the wrapper click that
   * opens the popover) so a click INTO the editable field keeps the caret in
   * the input instead of moving focus into the calendar.
   */
  onInputMouseDown?: () => void;
  onTriggerPointerDown?: () => void;
  /**
   * Called on an explicit keyboard open gesture (ArrowDown / Alt+ArrowDown) to
   * open the calendar AND move focus into the grid.
   */
  onKeyboardOpen?: () => void;
};

export const SingleInputTrigger = (props: TriggerProps) => {
  const {
    inputFormat,
    inputOptions,
    validators,
    state,
    setState,
    open,
    panelId,
    triggerRef,
    onTriggerFocus,
    onInputMouseDown,
    onTriggerPointerDown,
    onKeyboardOpen,
  } = props;

  const onMouseDownHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    inputOptions.onMouseDown?.(e);
    if (!inputOptions.readOnly) {
      onInputMouseDown?.();
    }
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    inputOptions.onKeyDown?.(e);
    if (e.key === 'ArrowDown') {
      // Explicit keyboard open: enter the calendar grid (prevent caret jump).
      e.preventDefault();
      onKeyboardOpen?.();
    }
  };

  const { init, startDate, endDate, startValue, endValue, startError, endError } = state;

  const mask = Utils.masks.rangeDate[inputFormat];
  const showError = inputOptions.error || (inputOptions.required && (startError || endError) && init);
  const errorMessage = inputOptions.caption === undefined ? 'Invalid value' : inputOptions.caption;
  const { label } = inputOptions;
  const { placeholderChar = '_' } = inputOptions;
  const fieldIdRef = React.useRef<string>(`DateRangePicker-singleInput-${uidGenerator()}`);
  const fieldId = inputOptions.id || fieldIdRef.current;
  const labelId = `${fieldId}-label`;
  const defaultValue = InputMask.utils.getDefaultValue(mask, placeholderChar).split(' - ');
  const sValue = startValue || defaultValue[0];
  const eValue = endValue || defaultValue[1];
  const inputValidator = (val: string): boolean => {
    const [startVal, endVal] = val.split(' - ');

    return (
      Utils.validators.isValid(validators, startVal, inputFormat) &&
      Utils.validators.isValid(validators, endVal, inputFormat)
    );
  };

  const onPasteHandler = (_e: React.ClipboardEvent<HTMLInputElement>, val: string) => {
    const { onPaste } = inputOptions;

    const date = val.split(' - ');
    const startVal = date[0];
    const endVal = date[1];

    const endD = translateToDate(inputFormat, endVal, validators);
    const startD = translateToDate(inputFormat, startVal, validators);

    setState({
      startDate: startD,
      endDate: endD,
      startValue: startVal,
      endValue: endVal,
    });

    if (onPaste) onPaste(_e, val);
  };

  const onChangeHandler = (_e: React.ChangeEvent<HTMLInputElement>, val: string) => {
    const date = val.split(' - ');
    const startVal = date[0];
    const endVal = date[1];

    if (startValue !== startVal && startVal && !startVal.includes(placeholderChar)) {
      const startD = translateToDate(inputFormat, startVal, validators);

      if (startD) {
        const isEndDateValid = endValue && !endValue.includes(placeholderChar);

        setState({
          startDate: startD,
          endDate: isEndDateValid ? endDate : undefined,
        });

        if (endDate) {
          const { year: eYear, month: eMonth, date: eDate } = getDateInfo(endDate);
          if (compareDate(startDate, 'more', eYear, eMonth, eDate)) {
            setState({ endDate: undefined });
          }
        }
      }
    }

    if (endValue !== endVal && endVal && !endVal.includes(placeholderChar)) {
      const endD = translateToDate(inputFormat, endVal, validators);
      const isStartDateValid = startValue && !startValue.includes(placeholderChar);

      if (endD) {
        setState({
          endDate: endD,
          startDate: isStartDateValid ? startDate : undefined,
        });
      }
    }

    setState({
      startValue: startVal,
      endValue: endVal,
    });
  };

  const getErrorState = (currentVal: string, siblingVal: string) => {
    const hasNumber = /\d/;

    if (currentVal && siblingVal && !currentVal.includes(placeholderChar) && siblingVal.includes(placeholderChar)) {
      return true;
    } else if (currentVal && hasNumber.test(currentVal) && currentVal.includes(placeholderChar)) {
      return true;
    } else if ((currentVal && !hasNumber.test(currentVal)) || !currentVal) {
      return false;
    }

    return null;
  };

  const onBlurHandler = (_e: React.ChangeEvent<HTMLInputElement>, val: string) => {
    setState({
      init: true,
    });

    const date = val.split(' - ');
    const startVal = date[0];
    const endVal = date[1];

    const startErr = getErrorState(startVal, endVal);
    const endErr = getErrorState(endVal, startVal);

    if (startErr !== null && endErr !== null) {
      setState({ startError: startErr, endError: endErr });
    }

    if (!startVal || startVal.includes(placeholderChar)) setState({ startDate: undefined });
    if (!endVal || endVal.includes(placeholderChar)) setState({ endDate: undefined });
  };

  const onClearHandler = (e?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
    if (e?.type === 'click' && !inputOptions.readOnly) {
      onInputMouseDown?.();
    }
    setState({
      init: true,
      startDate: undefined,
      endDate: undefined,
      yearNav: undefined,
      monthNav: undefined,
    });
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="w-100" onMouseDown={() => onTriggerPointerDown?.()}>
      <Row data-test="DesignSystem-DateRangePicker-SingleInputTrigger">
        <Column>
          {label && (
            <Label
              id={labelId}
              required={inputOptions.required}
              withInput={true}
              htmlFor={fieldId}
              onMouseDown={() => {
                if (!inputOptions.readOnly) onInputMouseDown?.();
              }}
            >
              {label}
            </Label>
          )}
          <InputMask
            icon="events"
            placeholder={`${inputFormat} - ${inputFormat}`}
            {...inputOptions}
            id={fieldId}
            mask={mask}
            value={!startDate && !endDate && !init ? undefined : `${sValue} - ${eValue}`}
            onChange={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
              onChangeHandler(e, val || '');
            }}
            onBlur={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
              onBlurHandler(e, val || '');
            }}
            onPaste={(e: React.ClipboardEvent<HTMLInputElement>, val?: string) => {
              onPasteHandler(e, val || '');
            }}
            onClear={onClearHandler}
            onMouseDown={onMouseDownHandler}
            onKeyDown={onKeyDownHandler}
            onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
              inputOptions.onFocus?.(e);
              onTriggerFocus?.();
            }}
            error={showError}
            caption={showError ? errorMessage : ''}
            validators={[inputValidator]}
            clearOnEmptyBlur={true}
            useDefaultValueOnEmpty={true}
            fillTemplateOnFocus={false}
            ref={triggerRef}
            role="combobox"
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls={panelId}
            aria-labelledby={label ? labelId : inputOptions['aria-labelledby']}
          />
        </Column>
      </Row>
    </div>
  );
};
