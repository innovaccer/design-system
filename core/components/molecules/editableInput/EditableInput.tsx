import * as React from 'react';
import classNames from 'classnames';
import Editable from '@/components/atoms/editable';
import { Input, Button, Popover, InlineMessage } from '@/index';
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

  const { onChange: onInputChange, ...rest } = inputOptions;

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
        inputRef.current?.focus();
        setEditing(true);
        setShowComponent(true);
        break;
      }
      case 'hover': {
        setShowComponent(true);
        break;
      }
      case 'default': {
        setShowComponent(false);
      }
    }
  };

  const inputComponent = (
    <Input
      defaultValue={inputValue}
      placeholder={placeholder}
      className={InputClass}
      // TODO(a11y)
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus={editing}
      size={size}
      onChange={onInputChangeHandler}
      error={error && editing}
      ref={inputRef}
      data-test="DesignSystem-EditableInput--Input"
      {...rest}
    />
  );

  const onKeyDown = (event: any) => {
    if (document.activeElement === inputRef.current) {
      switch (event.key) {
        case 'Enter':
          onSaveChanges();
          break;
        case 'Escape':
          setDefaultComponent(value);
          break;
      }
    }
  };

  const renderChildren = () => {
    if (showComponent) {
      return error && errorMessage && editing ? (
        <Popover trigger={inputComponent} position="right" className="px-6 py-6 d-flex align-items-center" on="hover">
          <InlineMessage appearance="alert" description={errorMessage} />
        </Popover>
      ) : (
        inputComponent
      );
    }

    return (
      <div className={EditableDefaultClass} data-test="DesignSystem-EditableInput--Default">
        {value || placeholder}
      </div>
    );
  };

  return (
    // TODO(a11y)
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div data-test="DesignSystem-EditableInput" {...baseProps} className={EditableInputClass} onKeyDown={onKeyDown}>
      <Editable onChange={onChangeHandler} editing={editing}>
        {renderChildren()}
      </Editable>
      {editing && (
        <div className={ActionClass} data-test="DesignSystem-EditableInput--Actions">
          <Button
            icon="clear"
            className="mr-3"
            largeIcon={true}
            size="tiny"
            onClick={() => {
              setDefaultComponent(value);
            }}
            data-test="DesignSystem-EditableInput--Discard"
          />
          <Button
            icon="check"
            appearance="primary"
            largeIcon={true}
            size="tiny"
            disabled={disableSaveAction}
            onClick={onSaveChanges}
            data-test="DesignSystem-EditableInput--Save"
          />
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
