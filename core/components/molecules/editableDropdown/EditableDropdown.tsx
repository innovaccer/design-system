import * as React from 'react';
import classNames from 'classnames';
import Editable from '@/components/atoms/editable';
import { Dropdown } from '@/index';
import { DropdownProps } from '@/index.type';
import { BaseProps, extractBaseProps } from '@/utils/types';

export interface EditableDropdownProps extends BaseProps {
  /**
   * String to show inside `Editable Dropdown` when no options are selected
   */
  placeholder: string;
  /**
   * Props to be used for `Dropdown`
   */
  dropdownOptions: Omit<DropdownProps, 'getLabel' | 'placeholder'>;
}

export const EditableDropdown = (props: EditableDropdownProps) => {
  const {
    placeholder,
    dropdownOptions,
    className
  } = props;

  const { onChange: onDropdownChange, ...rest } = dropdownOptions;

  const [label, setLabel] = React.useState(placeholder);
  const [editing, setEditing] = React.useState(false);
  const [showComponent, setShowComponent] = React.useState(false);

  const CompClass = classNames({
    ['EditableDropdown']: true
  }, className);

  const DefaultCompClass = classNames({
    ['EditableDropdown-default']: true,
    ['d-none']: showComponent
  });

  const EditableDropdownClass = classNames({
    ['d-none']: !showComponent
  });

  const baseProps = extractBaseProps(props);

  const getLabel = (updatedLabel: string) => {
    setLabel(updatedLabel);
  };

  const onChangeHandler = (eventType: string) => {
    switch (eventType) {
      case 'edit':
        setEditing(true);
      case 'hover':
        setShowComponent(true);
        return;
      case 'default':
        setShowComponent(false);
        return;
    }
  };

  const onChange = (value: any) => {
    setEditing(false);
    setShowComponent(false);
    if (onDropdownChange) onDropdownChange(value);
  };

  return (
    <div data-test="DesignSystem-EditableDropdown" {...baseProps} className={CompClass}>
      <Editable
        onChange={onChangeHandler}
        editing={editing}
      >
        <Dropdown
          placeholder={placeholder}
          onChange={onChange}
          getLabel={getLabel}
          className={EditableDropdownClass}
          data-test="DesignSystem-EditableDropdown--Dropdown"
          {...rest}
        />
        <div className={DefaultCompClass} data-test="DesignSystem-EditableDropdown--Default">
          {label || placeholder}
        </div>
      </Editable>
    </div>
  );
};

EditableDropdown.defaultProps = {
  placeholder: '',
  dropdownOptions: {}
};

export default EditableDropdown;
