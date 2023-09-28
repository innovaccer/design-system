import * as React from 'react';
import classNames from 'classnames';
import Editable from '@/components/atoms/editable';
import { ChipInput, Button, Chip, Text, Popover, InlineMessage } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { ChipInputProps } from '@/index.type';

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
   * Callback function that is called when the chips change.  Callback function called on save action click
   */
  onChange?: (chips: string[]) => void;
  /**
   * Determines if save action button is disabled
   */
  disableSaveAction?: boolean;
  /**
   * Shows error state in case of failed validation
   */
  error?: boolean;
  /**
   * Error message to be shown in case of failed validation
   */
  errorMessage?: string;
  /**
   * Props to be used for `ChipInput`
   */
  chipInputOptions: Omit<ChipInputProps, 'error' | 'placeholder' | 'value' | 'defaultValue'>;
}

export const EditableChipInput = (props: EditableChipInputProps) => {
  const { error, errorMessage, placeholder, onChange, className, disableSaveAction, chipInputOptions } = props;

  const { onChange: onChipInputChange, chipOptions = {}, ...rest } = chipInputOptions;
  const { onClick, ...chipObject } = chipOptions;

  const [inputValue, setInputValue] = React.useState(props.value);
  const [value, setValue] = React.useState(props.value);
  const [showComponent, setShowComponent] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

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
      ['EditableChipInput']: true,
    },
    className
  );

  const actionClass = classNames({
    ['EditableChipInput-actions']: true,
  });

  const defaultClasses = classNames({
    ['EditableChipInput-default']: !isWithChips,
    ['EditableChipInput-defaultWithChips']: isWithChips,
  });

  const inputClass = classNames({
    ['EditableChipInput-chipInput']: true,
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
            className="my-2 mx-2"
            {...chipObject}
            onClose={() => onChipDelete(index)}
            onClick={() => onClick && onClick(val, index)}
          />
        );
      });
    }
    return <Text className="pt-1">{placeholder}</Text>;
  };

  const chipInputComponentWidth = ref.current?.getBoundingClientRect().width;

  const chipInputComponent = (
    <div data-test="DesignSystem-EditableChipInput--wrapper" style={{ width: chipInputComponentWidth }}>
      <ChipInput
        data-test="DesignSystem-EditableChipInput--ChipInput"
        placeholder={placeholder}
        onChange={onChipInputChangeHandler}
        value={inputValue}
        error={error}
        chipOptions={chipOptions}
        {...rest}
        className={inputClass}
      />
    </div>
  );

  const renderChildren = () => {
    if (showComponent) {
      return error && errorMessage ? (
        <Popover
          trigger={chipInputComponent}
          position="right"
          className="px-6 py-6 d-flex align-items-center"
          on="hover"
        >
          <InlineMessage appearance="alert" description={errorMessage} />
        </Popover>
      ) : (
        chipInputComponent
      );
    }

    return (
      <div className={defaultClasses} data-test="DesignSystem-EditableChipInput--Default">
        {renderDefaultState()}
      </div>
    );
  };

  return (
    <div className={classes} data-test="DesignSystem-EditableChipInput" {...baseProps} ref={ref}>
      <Editable onChange={onChangeHandler} editing={showComponent}>
        {renderChildren()}
      </Editable>
      {showComponent && (
        <div className={actionClass} data-test="DesignSystem-EditableChipInput--Actions">
          <Button
            data-test="DesignSystem-EditableChipInput--DiscardButton"
            icon="clear"
            className="mr-3"
            size="tiny"
            onClick={() => {
              setDefaultComponent(value);
            }}
          />
          <Button
            data-test="DesignSystem-EditableChipInput--SaveButton"
            icon="check"
            appearance="primary"
            size="tiny"
            disabled={disableSaveAction}
            onClick={onSaveChanges}
          />
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
