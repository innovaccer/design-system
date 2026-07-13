import * as React from 'react';
import { InputMask, Label, Utils } from '@/index';
import { translateToDate, translateToString } from '../calendar/utility';
import { DatePickerProps, DatePickerState } from './DatePicker';
import uidGenerator from '@/utils/uidGenerator';

type TriggerProps = {
  inputFormat: DatePickerProps['inputFormat'];
  inputOptions: DatePickerProps['inputOptions'];
  validators: DatePickerProps['validators'];
  state: DatePickerState;
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
   * Opens the popover as a side effect of typing/pasting, WITHOUT moving focus
   * into the calendar dialog (keeps the caret in the input). Falls back to a
   * plain `open` state update when not provided.
   */
  openViaInput?: () => void;
  /**
   * Called on `mousedown` on the input element (before the wrapper click that
   * opens the popover) so a click INTO the editable field keeps the caret in
   * the input instead of moving focus into the calendar.
   */
  onInputMouseDown?: () => void;
  /**
   * Called on `mousedown` anywhere on the trigger chrome (icon, wrapper, input)
   * so pointer-origin opens are not treated as keyboard focus-origin opens.
   */
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
    inputOptions,
    validators,
    state,
    setState,
    open,
    panelId,
    triggerRef,
    openViaInput,
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

  const openPopoverFromInput = () => {
    if (openViaInput) {
      openViaInput();
    } else {
      setState({ open: true });
    }
  };

  const { init, date, error } = state;

  const { placeholderChar = '_', label, ...inputMaskOptions } = inputOptions;
  const fieldIdRef = React.useRef<string>(`DatePicker-input-${uidGenerator()}`);
  const fieldId = inputOptions.id || fieldIdRef.current;
  const labelId = `${fieldId}-label`;

  const onPasteHandler = (_e: React.ClipboardEvent<HTMLInputElement>, val?: string) => {
    const { onPaste } = inputOptions;
    openPopoverFromInput();

    if (val && !val.includes(placeholderChar)) {
      const d = translateToDate(inputFormat, val, validators);
      setState({ date: d });
    }

    if (onPaste) onPaste(_e, val);
  };

  const onChangeHandler = (_e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
    const { onChange } = inputOptions;
    openPopoverFromInput();

    if (val && !val.includes(placeholderChar)) {
      const d = translateToDate(inputFormat, val, validators);
      setState({ date: d });
    }

    if (onChange) onChange(_e);
  };

  const onBlurHandler = (_e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
    const { onBlur } = inputOptions;
    setState({
      init: true,
    });

    const hasNumber = /\d/;

    if (val && hasNumber.test(val) && val.includes(placeholderChar)) {
      setState({ error: true });
    } else if ((val && !hasNumber.test(val)) || !val) {
      setState({ error: false });
    }

    if (onBlur) onBlur(_e, val || '');
  };

  const onClearHandler = (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
    const { onClear } = inputOptions;
    // Pointer clears bubble to the popover trigger; keyboard clears do not open it.
    if (e.type === 'click' && !inputOptions.readOnly) {
      onInputMouseDown?.();
    }
    setState({
      init: true,
      date: undefined,
    });

    if (onClear) onClear(e);
  };

  const showError = inputOptions.error || (inputOptions.required && error && init);
  const errorMessage = inputOptions.caption === undefined ? 'Invalid value' : inputOptions.caption;
  const inputValidator = (val: string): boolean => {
    return Utils.validators.isValid(validators, val, inputFormat);
  };

  const mask = Utils.masks.date[inputFormat];
  return (
    // Capture pointer on trigger chrome (icon/wrapper) for focus-trap routing.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="w-100" onMouseDown={() => onTriggerPointerDown?.()}>
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
        placeholder={inputFormat}
        {...inputMaskOptions}
        id={fieldId}
        error={showError}
        mask={mask}
        value={date ? translateToString(inputFormat, date) : ''}
        onChange={onChangeHandler}
        onPaste={onPasteHandler}
        onBlur={onBlurHandler}
        onClear={onClearHandler}
        onMouseDown={onMouseDownHandler}
        onKeyDown={onKeyDownHandler}
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
        aria-labelledby={label ? labelId : inputMaskOptions['aria-labelledby']}
      />
    </div>
  );
};
