import * as React from 'react';
import classNames from 'classnames';
import Editable from '@/components/atoms/editable';
import { Dropdown, Icon } from '@/index';
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
   * Props to be used for `Dropdown`. `open` and `onPopperToggle` are managed internally for edit mode;
   * passing them here has no effect. Use `disabled` to block entering edit mode and opening the menu.
   */
  dropdownOptions: Omit<DropdownOptions, 'getLabel' | 'placeholder'>;
  /**
   * Adds custom component
   */
  customTriggerRenderer?: (label: string) => React.ReactNode;
}

export const EditableDropdown = (props: EditableDropdownProps) => {
  const { placeholder, dropdownOptions, className, customTriggerRenderer } = props;

  const {
    onChange: onDropdownChange,
    onClose: onDropdownClose,
    disabled: dropdownDisabled,
    open: _dropdownOpenIgnored,
    onPopperToggle: _onPopperToggleIgnored,
    ...rest
  } = dropdownOptions;

  const [label, setLabel] = React.useState(placeholder);
  const [editing, setEditing] = React.useState(false);
  const [showComponent, setShowComponent] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const focusDropdownTriggerAfterOpenRef = React.useRef(false);

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

  const isDropdownDisabled = !!dropdownDisabled;

  const onChangeHandler = (eventType: string) => {
    if (isDropdownDisabled) return;
    switch (eventType) {
      case 'edit':
        setEditing(true);
        setShowComponent(true);
        setDropdownOpen(true);
        break;
      case 'hover':
        // Do not set showComponent to true on hover to avoid keyboard focus interference
        break;
      case 'default':
        setShowComponent(false);
    }
  };

  const onChange = (value: any) => {
    setEditing(false);
    setShowComponent(false);
    setDropdownOpen(false);
    if (onDropdownChange) onDropdownChange(value);
  };

  const onClose = (selected: any) => {
    setEditing(false);
    setShowComponent(false);
    setDropdownOpen(false);
    if (onDropdownClose) onDropdownClose(selected);
  };

  const onPopperToggle = (open: boolean) => {
    setDropdownOpen(open);
    if (!open) {
      setEditing(false);
      setShowComponent(false);
    }
  };

  const renderComponent = (componentLabel: string) => {
    if (customTriggerRenderer) return customTriggerRenderer(componentLabel);

    return componentLabel;
  };

  React.useEffect(() => {
    if (!editing || !dropdownOpen || isDropdownDisabled || !focusDropdownTriggerAfterOpenRef.current) return;
    const frame = requestAnimationFrame(() => {
      focusDropdownTriggerAfterOpenRef.current = false;
      const trigger = containerRef.current?.querySelector<HTMLElement>('[data-test="DesignSystem-DropdownTrigger"]');
      trigger?.focus();
    });
    return () => cancelAnimationFrame(frame);
  }, [editing, dropdownOpen, isDropdownDisabled]);

  const displayText = label || placeholder;
  const textClass = classNames(styles['EditableDropdown-text'], {
    [styles['EditableDropdown-text--subtle']]: !label,
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (isDropdownDisabled) return;
    if (!editing && (event.key === 'Enter' || event.key === ' ')) {
      if (event.currentTarget !== event.target) return;
      event.preventDefault();
      if (event.repeat) return;
      focusDropdownTriggerAfterOpenRef.current = true;
      onChangeHandler('edit');
    }
  };

  const handleClick = () => {
    if (isDropdownDisabled || editing) return;
    focusDropdownTriggerAfterOpenRef.current = true;
    onChangeHandler('edit');
  };

  const ariaLabel = (props as any)['aria-label'];
  const computedAriaLabel =
    ariaLabel || (label ? `Click to edit. Current selection: ${label}` : `Click to edit. ${placeholder}`);

  const labelContent = renderComponent(displayText);

  return (
    <div
      ref={containerRef}
      data-test="DesignSystem-EditableDropdown"
      {...baseProps}
      className={CompClass}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      role={editing ? undefined : 'button'}
      tabIndex={isDropdownDisabled ? -1 : editing ? -1 : 0}
      aria-disabled={isDropdownDisabled || undefined}
      aria-label={computedAriaLabel}
    >
      <Editable onChange={onChangeHandler} editing={editing}>
        <Dropdown
          {...rest}
          placeholder={placeholder}
          onChange={onChange}
          getLabel={getLabel}
          onClose={onClose}
          aria-hidden={!showComponent ? true : undefined}
          inert={!showComponent ? '' : undefined}
          open={dropdownOpen}
          onPopperToggle={onPopperToggle}
          disabled={isDropdownDisabled}
          className={EditableDropdownClass}
          data-test="DesignSystem-EditableDropdown--Dropdown"
        />
        <div className={DefaultCompClass} data-test="DesignSystem-EditableDropdown--Default">
          {customTriggerRenderer ? (
            labelContent
          ) : (
            <>
              <div className={styles['EditableDropdown-wrapper']}>
                <span className={textClass}>{labelContent}</span>
              </div>
              <Icon appearance="default" name="keyboard_arrow_down" className={styles['EditableDropdown-icon']} />
            </>
          )}
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
