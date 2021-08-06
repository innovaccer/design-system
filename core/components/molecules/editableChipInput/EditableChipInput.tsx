import * as React from 'react';
import classNames from 'classnames';
import Editable from '@/components/atoms/editable';
import { ChipInput, Button, Chip, Text } from '@/index';
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
   * Props to be used for `ChipInput`
   */
  chipInputOptions: Omit<ChipInputProps, 'placeholder' | 'value' | 'defaultValue'>;
}

export const EditableChipInput = (props: EditableChipInputProps) => {
  const { placeholder, value, onChange, className, disableSaveAction, chipInputOptions } = props;

  const { onChange: onChipInputChange, chipOptions = {}, ...rest } = chipInputOptions;
  const { onClick, ...chipObject } = chipOptions;

  const [inputValue, setInputValue] = React.useState(value);
  const [showComponent, setShowComponent] = React.useState(false);

  const baseProps = extractBaseProps(props);
  const isWithChips = inputValue && inputValue.length;

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

  React.useEffect(() => {
    setDefaultComponent();
  }, [value]);

  const onChipInputChangeHandler = (val: string[]) => {
    setInputValue(val);
    if (onChipInputChange) onChipInputChange(val);
  };

  const setDefaultComponent = () => {
    setInputValue(value);
    setShowComponent(false);
  };

  const onSaveChanges = () => {
    if (onChange && inputValue) onChange(inputValue);
  };

  const onChangeHandler = (eventType: string) => {
    switch (eventType) {
      case 'edit':
        setShowComponent(true);
      case 'hover':
        return;
      case 'default':
        setShowComponent(false);
        return;
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
            onClick={() => onClick && onClick(val, index)}
          />
        );
      });
    }
    return <Text className="EditableChipInput--Text">{placeholder}</Text>;
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
            onClick={setDefaultComponent}
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
