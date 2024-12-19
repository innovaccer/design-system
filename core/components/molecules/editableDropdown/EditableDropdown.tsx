import * as React from 'react';
import classNames from 'classnames';
import Editable from '@/components/atoms/editable';
import { Dropdown } from '@/index';
import { DropdownProps } from '@/index.type';
import { BaseProps, extractBaseProps, MakeOptional } from '@/utils/types';
import styles from '@css/components/editableDropdown.module.css';

type DropdownOptions = MakeOptional<DropdownProps, keyof (typeof Dropdown)['defaultProps']>;

export interface EditableDropdownProps extends BaseProps {
  /**
   * String to show inside `Editable Dropdown` when no options are selected
   */
  placeholder: string;
  /**
   * Props to be used for `Dropdown`
   */
  dropdownOptions: Omit<DropdownOptions, 'getLabel' | 'placeholder'>;
  /**
   * Adds custom component
   */
  customTriggerRenderer?: (label: string) => React.ReactNode;
}

export const EditableDropdown = (props: EditableDropdownProps) => {
  const { placeholder, dropdownOptions, className, customTriggerRenderer } = props;

  const { onChange: onDropdownChange, onClose: onDropdownClose, ...rest } = dropdownOptions;

  const [label, setLabel] = React.useState(placeholder);
  const [editing, setEditing] = React.useState(false);
  const [showComponent, setShowComponent] = React.useState(false);

  const CompClass = classNames(
    {
      [styles['EditableDropdown']]: true,
    },
    className
  );

  const DefaultCompClass = classNames({
    [styles['EditableDropdown-default']]: true,
    ['d-none']: showComponent,
  });

  const EditableDropdownClass = classNames({
    ['d-none']: !showComponent,
  });

  const baseProps = extractBaseProps(props);

  const getLabel = (updatedLabel: string) => {
    setLabel(updatedLabel);
  };

  const onChangeHandler = (eventType: string) => {
    switch (eventType) {
      case 'edit':
        setEditing(true);
        setShowComponent(true);
        break;
      case 'hover':
        setShowComponent(true);
        break;
      case 'default':
        setShowComponent(false);
    }
  };

  const onChange = (value: any) => {
    setEditing(false);
    setShowComponent(false);
    if (onDropdownChange) onDropdownChange(value);
  };

  const onClose = (selected: any) => {
    setEditing(false);
    setShowComponent(false);
    if (onDropdownClose) onDropdownClose(selected);
  };

  const renderComponent = (componentLabel: string) => {
    if (customTriggerRenderer) return customTriggerRenderer(componentLabel);

    return componentLabel;
  };

  return (
    <div data-test="DesignSystem-EditableDropdown" {...baseProps} className={CompClass}>
      <Editable onChange={onChangeHandler} editing={editing}>
        <Dropdown
          placeholder={placeholder}
          onChange={onChange}
          getLabel={getLabel}
          onClose={onClose}
          className={EditableDropdownClass}
          data-test="DesignSystem-EditableDropdown--Dropdown"
          {...rest}
        />
        <div className={DefaultCompClass} data-test="DesignSystem-EditableDropdown--Default">
          {renderComponent(label || placeholder)}
        </div>
      </Editable>
    </div>
  );
};

EditableDropdown.defaultProps = {
  placeholder: '',
  dropdownOptions: {},
};

export default EditableDropdown;
