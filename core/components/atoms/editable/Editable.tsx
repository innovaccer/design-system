import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export interface EditableProps extends BaseProps {
  editing?: boolean;
  children: React.ReactNode;
  onChange: (eventType: string) => void;
}

export const Editable = (props: EditableProps) => {
  const { className, onChange, editing, children } = props;

  const baseProps = extractBaseProps(props);

  const EditableClass = classNames(
    {
      ['Editable']: true,
    },
    className
  );
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
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
        tabIndex={0}
      >
        {/* eslint-enable  */}
        {children}
      </div>
    </div>
  );
};

Editable.displayName = 'Editable';

export default Editable;
