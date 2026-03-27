import * as React from 'react';
import classNames from 'classnames';
import Editable from '@/components/atoms/editable';
import { Input, Button, Popover, InlineMessage, Icon } from '@/index';
import { InputProps } from '@/index.type';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/editableInput.module.css';

export interface EditableInputProps extends BaseProps {
  /**
   * Value of the `Editable Input`
   */
  value?: string;
  /**
   * String to show inside `Editable Input` when value is not defined
   */
  placeholder?: string;
  /**
   * Size of `Editable Input`
   */
  size: 'tiny' | 'regular';
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
   * Props to be used for `Input`
   */
  inputOptions: Omit<InputProps, 'error' | 'value' | 'defaultValue' | 'size' | 'placeholder'>;
  /**
   * Callback function called on save action click
   */
  onChange?: (value: string) => void;
}

export const EditableInput = (props: EditableInputProps) => {
  const { error, size, errorMessage, placeholder, inputOptions, disableSaveAction, onChange, className } = props;

  const { onChange: onInputChange, icon: inputIcon, disabled: inputDisabled, ...rest } = inputOptions;

  const [inputValue, setInputValue] = React.useState(props.value);
  const [value, setValue] = React.useState(props.value);
  const [editing, setEditing] = React.useState(false);
  const [showComponent, setShowComponent] = React.useState(false);

  const inputRef = React.createRef<HTMLInputElement>();
  const baseProps = extractBaseProps(props);
  const isControlled = props.value !== undefined;

  React.useEffect(() => {
    if (isControlled) setValue(props.value);
  }, [props.value]);

  React.useEffect(() => {
    if (editing && showComponent) {
      inputRef.current?.focus();
    }
  }, [editing, showComponent]);

  const EditableInputClass = classNames(
    {
      [styles['EditableInput']]: true,
    },
    className
  );

  const EditableDefaultClass = classNames({
    [styles['EditableInput-default']]: true,
    [styles[`EditableInput-default--${size}`]]: size,
  });

  const ErrorIconClass = classNames({
    [styles[`EditableInput-errorIcon--${size}`]]: size,
  });

  const InputClass = classNames({
    [styles['EditableInput-Input--tiny']]: size === 'tiny',
  });

  const ActionClass = classNames({
    [styles['EditableInput-actions']]: true,
    [styles[`EditableInput-actions--${size}`]]: size,
  });

  const setDefaultComponent = (updatedValue?: string) => {
    setInputValue(updatedValue);
    setEditing(false);
    setShowComponent(false);
  };

  const onSaveChanges = () => {
    if (!isControlled) setValue(inputValue);
    if (onChange) onChange(inputValue || '');
    setDefaultComponent(inputValue);
  };

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onInputChange) onInputChange(e);
  };

  const onChangeHandler = (eventType: string) => {
    switch (eventType) {
      case 'edit': {
        setEditing(true);
        setShowComponent(true);
        break;
      }
      case 'hover': {
        // Do not set showComponent to true on hover to avoid keyboard focus interference
        break;
      }
      case 'default': {
        setShowComponent(false);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (inputDisabled) return;
    // When not editing, Enter/Space enters edit mode
    if (!editing && (event.key === 'Enter' || event.key === ' ')) {
      if (event.currentTarget !== event.target) return;
      event.preventDefault();
      if (event.repeat) return;
      onChangeHandler('edit');
      return;
    }

    // When editing and focus is on input, handle save/cancel
    if (editing && document.activeElement === inputRef.current) {
      if (event.key === 'Enter') {
        event.preventDefault();
        onSaveChanges();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        setDefaultComponent(value);
      }
    }
  };

  const handleClick = () => {
    if (inputDisabled || editing) return;
    onChangeHandler('edit');
  };

  const inputComponent = (
    <Input
      defaultValue={inputValue}
      placeholder={placeholder}
      className={InputClass}
      autoFocus={editing}
      size={size}
      onChange={onInputChangeHandler}
      error={error}
      disabled={inputDisabled}
      icon={error ? 'error' : inputIcon}
      ref={inputRef}
      data-test="DesignSystem-EditableInput--Input"
      {...rest}
    />
  );

  const renderChildren = () => {
    if (showComponent) {
      return error && errorMessage ? (
        <Popover trigger={inputComponent} position="right" className="px-6 py-6 d-flex align-items-center" on="hover">
          <InlineMessage appearance="alert" description={errorMessage} />
        </Popover>
      ) : (
        inputComponent
      );
    }

    const iconSize = size === 'tiny' ? 14 : 16;

    return (
      <div className={EditableDefaultClass} data-test="DesignSystem-EditableInput--Default">
        {error && (
          <Icon
            name="error"
            appearance="alert"
            size={iconSize}
            className={classNames('d-flex align-items-center', ErrorIconClass)}
            aria-hidden
          />
        )}
        {value || placeholder}
      </div>
    );
  };

  return (
    <div
      data-test="DesignSystem-EditableInput"
      {...baseProps}
      className={EditableInputClass}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      role={editing ? undefined : 'button'}
      tabIndex={inputDisabled ? -1 : editing ? -1 : 0}
      aria-disabled={inputDisabled || undefined}
    >
      <Editable onChange={onChangeHandler} editing={editing}>
        {renderChildren()}
      </Editable>
      {editing && (
        <div className={ActionClass} data-test="DesignSystem-EditableInput--Actions">
          <Button
            className="mr-3"
            size="tiny"
            onClick={() => {
              setDefaultComponent(value);
            }}
            data-test="DesignSystem-EditableInput--Discard"
          >
            Cancel
          </Button>
          <Button
            appearance="primary"
            size="tiny"
            disabled={disableSaveAction}
            onClick={onSaveChanges}
            data-test="DesignSystem-EditableInput--Save"
          >
            Save
          </Button>
        </div>
      )}
    </div>
  );
};

EditableInput.defaultProps = {
  size: 'regular',
  placeholder: '',
  inputOptions: {},
};

export default EditableInput;
