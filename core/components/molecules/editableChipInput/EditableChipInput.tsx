import * as React from 'react';
import classNames from 'classnames';
import Editable from '@/components/atoms/editable';
import { ChipInput, Button, Chip, Text } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { ChipInputProps } from '@/index.type';
import styles from '@css/components/editableChipInput.module.css';

export type EditableChipInputSize = 'regular' | 'small';
export interface EditableChipInputProps extends BaseProps {
  /**
   * String to show inside `EditableChipInput` when value is not defined
   */
  placeholder: string;
  /**
   * The chip labels to display.
   */
  value?: string[];
  /**
   * Size of `EditableChipInput`
   */
  size?: 'regular' | 'small';
  /**
   * Callback function that is called when the chips change.  Callback function called on save action click
   */
  onChange?: (chips: string[]) => void;
  /**
   * Determines if save action button is disabled
   */
  disableSaveAction?: boolean;
  /**
   * Props for the inner `ChipInput`. Omits `placeholder`, `value`, and `defaultValue` (set by this component).
   * If `autoFocus` is omitted, it defaults to `true` when edit mode opens so the field can be typed into immediately; pass `false` to opt out.
   */
  chipInputOptions: Omit<ChipInputProps, 'placeholder' | 'value' | 'defaultValue'>;
}

export const EditableChipInput = (props: EditableChipInputProps) => {
  const { placeholder, onChange, className, disableSaveAction, chipInputOptions, size = 'regular' } = props;

  const {
    onChange: onChipInputChange,
    chipOptions = {},
    autoFocus: autoFocusOption,
    disabled: chipInputDisabled,
    ...rest
  } = chipInputOptions;
  const { onClick, ...chipObject } = chipOptions;

  const [inputValue, setInputValue] = React.useState(props.value);
  const [value, setValue] = React.useState(props.value);
  const [showComponent, setShowComponent] = React.useState(false);

  const baseProps = extractBaseProps(props);
  const isWithChips = inputValue && inputValue.length;
  const isControlled = props.value !== undefined;

  React.useEffect(() => {
    if (isControlled) {
      setInputValue(props.value);
      setValue(props.value);
    }
  }, [props.value]);

  const classes = classNames(
    {
      [styles['EditableChipInput']]: true,
    },
    className
  );

  const actionClass = classNames({
    [styles['EditableChipInput-actions']]: true,
  });

  const defaultClasses = classNames({
    [styles['EditableChipInput-default']]: !isWithChips,
    [styles['EditableChipInput-defaultWithChips']]: isWithChips,
    [styles['EditableChipInput-default--small']]: !isWithChips && size === 'small',
    [styles['EditableChipInput-defaultWithChips--small']]: isWithChips && size === 'small',
  });

  const chipMarginClass =
    size === 'small' ? styles['EditableChipInput-chip--small'] : styles['EditableChipInput-chip--regular'];

  const inputClass = classNames({
    [styles['EditableChipInput-chipInput']]: true,
  });

  const onChipInputChangeHandler = (val: string[]) => {
    setInputValue(val);
    if (onChipInputChange) onChipInputChange(val);
  };

  const setDefaultComponent = (updatedValue?: string[]) => {
    setInputValue(updatedValue);
    setShowComponent(false);
  };

  const onSaveChanges = () => {
    if (!isControlled) setValue(inputValue);
    if (onChange && inputValue) onChange(inputValue);
    setDefaultComponent(inputValue);
  };

  const onChangeHandler = (eventType: string) => {
    switch (eventType) {
      case 'edit': {
        setShowComponent(true);
        break;
      }
      case 'hover': {
        break;
      }
      case 'default': {
        setShowComponent(false);
        break;
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (chipInputDisabled) return;
    if (!showComponent && (event.key === 'Enter' || event.key === ' ')) {
      if (event.currentTarget !== event.target) return;
      event.preventDefault();
      if (event.repeat) return;
      onChangeHandler('edit');
    }
  };

  const handleClick = () => {
    if (chipInputDisabled || showComponent) return;
    onChangeHandler('edit');
  };

  const onChipDelete = (index: number) => {
    if (value) {
      const updatedValue = [...value];
      updatedValue.splice(index, 1);
      if (!isControlled) {
        setInputValue(updatedValue);
        setValue(updatedValue);
      }

      if (onChange) onChange(updatedValue);
    }
  };

  const renderDefaultState = () => {
    if (inputValue && inputValue.length) {
      return inputValue.map((val, index) => {
        return (
          <Chip
            data-test="DesignSystem-EditableChipInput--Chip"
            key={index}
            name={val}
            label={val}
            size={size}
            className={chipMarginClass}
            {...chipObject}
            onClose={() => onChipDelete(index)}
            onClick={() => onClick && onClick(val, index)}
          />
        );
      });
    }
    return (
      <Text
        className={size === 'small' ? styles['EditableChipInput-placeholder--small'] : 'pt-1'}
        size={size === 'small' ? 'small' : 'regular'}
      >
        {placeholder}
      </Text>
    );
  };

  const renderChildren = () => {
    if (showComponent) {
      return (
        <div data-test="DesignSystem-EditableChipInput--wrapper">
          <ChipInput
            data-test="DesignSystem-EditableChipInput--ChipInput"
            placeholder={placeholder}
            onChange={onChipInputChangeHandler}
            value={inputValue}
            size={size}
            disabled={chipInputDisabled}
            chipOptions={chipOptions}
            autoFocus={autoFocusOption ?? true}
            {...rest}
            className={inputClass}
          />
        </div>
      );
    }
    return (
      <div className={defaultClasses} data-test="DesignSystem-EditableChipInput--Default">
        {renderDefaultState()}
      </div>
    );
  };

  const ariaLabel = (props as any)['aria-label'];
  const hasChips = inputValue && inputValue.length > 0;
  const computedAriaLabel =
    ariaLabel ||
    (hasChips
      ? `Click to edit. Current chips: ${inputValue!.join(', ')}`
      : `Click to edit. ${placeholder || 'Chip input'}`);

  return (
    <div
      className={classes}
      data-test="DesignSystem-EditableChipInput"
      {...baseProps}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      role={showComponent ? undefined : 'button'}
      tabIndex={chipInputDisabled ? -1 : showComponent ? -1 : 0}
      aria-disabled={chipInputDisabled || undefined}
      aria-label={showComponent ? undefined : computedAriaLabel}
    >
      <Editable onChange={onChangeHandler} editing={showComponent}>
        {renderChildren()}
      </Editable>
      {showComponent && (
        <div className={actionClass} data-test="DesignSystem-EditableChipInput--Actions">
          <Button
            data-test="DesignSystem-EditableChipInput--DiscardButton"
            className="mr-3"
            size="tiny"
            onClick={() => {
              setDefaultComponent(value);
            }}
          >
            Cancel
          </Button>
          <Button
            data-test="DesignSystem-EditableChipInput--SaveButton"
            appearance="primary"
            size="tiny"
            disabled={disableSaveAction}
            onClick={onSaveChanges}
          >
            Save
          </Button>
        </div>
      )}
    </div>
  );
};
EditableChipInput.defaultProps = {
  placeholder: '',
  chipInputOptions: {},
};

export default EditableChipInput;
