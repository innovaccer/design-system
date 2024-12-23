import * as React from 'react';
import classNames from 'classnames';
import Editable from '@/components/atoms/editable';
import { ChipInput, Button, Chip, Text } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { ChipInputProps } from '@/index.type';
import styles from '@css/components/editableChipInput.module.css';

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
   * Props to be used for `ChipInput`
   */
  chipInputOptions: Omit<ChipInputProps, 'placeholder' | 'value' | 'defaultValue'>;
}

export const EditableChipInput = (props: EditableChipInputProps) => {
  const { placeholder, onChange, className, disableSaveAction, chipInputOptions } = props;

  const { onChange: onChipInputChange, chipOptions = {}, ...rest } = chipInputOptions;
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
  });

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

  const renderChildren = () => {
    if (showComponent) {
      return (
        <div data-test="DesignSystem-EditableChipInput--wrapper">
          <ChipInput
            data-test="DesignSystem-EditableChipInput--ChipInput"
            placeholder={placeholder}
            onChange={onChipInputChangeHandler}
            value={inputValue}
            chipOptions={chipOptions}
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

  return (
    <div className={classes} data-test="DesignSystem-EditableChipInput" {...baseProps}>
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
