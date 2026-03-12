import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export interface EditableProps extends BaseProps {
  editing?: boolean;
  children: React.ReactNode;
  onChange: (eventType: string) => void;
  /**
   * Optional keyboard handler for edit mode. Called when edit view is active and user presses a key.
   * Use for Enter to save, Escape to cancel, etc.
   * When not provided, delegation is based on `editing`. Use `keyDownDelegateActive` to override
   * (e.g. EditableDropdown needs Escape in hover mode when editing=false but dropdown is visible).
   */
  onEditModeKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  /**
   * When true, delegate keydown to onEditModeKeyDown. Defaults to `editing` when not provided.
   */
  keyDownDelegateActive?: boolean;
}

export const Editable = (props: EditableProps) => {
  const { className, onChange, editing, children, onEditModeKeyDown, keyDownDelegateActive } = props;

  const baseProps = extractBaseProps(props);

  const delegateActive = keyDownDelegateActive !== undefined ? keyDownDelegateActive : editing;

  const EditableClass = classNames(
    {
      ['Editable']: true,
    },
    className
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // When edit view is active and handler provided, delegate to parent
    if (delegateActive && onEditModeKeyDown) {
      onEditModeKeyDown(event);
      return;
    }

    // When not editing, Enter/Space enters edit mode
    const isWrapperFocused = event.currentTarget === event.target;
    const nativeCode = event?.nativeEvent?.code;
    const isSpaceKey = event.key === ' ' || event.key === 'Spacebar' || nativeCode === 'Space';
    const isEditTriggerKey = event.key === 'Enter' || isSpaceKey;

    if (!isWrapperFocused || !isEditTriggerKey) return;

    event.preventDefault();
    onChange('edit');
  };

  return (
    <div data-test="DesignSystem-Editable" {...baseProps} className={EditableClass}>
      <div
        data-test="DesignSystem-EditableWrapper"
        onClick={() => onChange('edit')}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => !editing && onChange('hover')}
        onMouseLeave={() => !editing && onChange('default')}
        role="button"
        tabIndex={editing ? -1 : 0}
      >
        {/* eslint-enable  */}
        {children}
      </div>
    </div>
  );
};

Editable.displayName = 'Editable';

export default Editable;
