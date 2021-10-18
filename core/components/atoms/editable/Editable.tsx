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

  return (
    <div data-test="DesignSystem-Editable" {...baseProps} className={EditableClass}>
      {/* TODO(a11y): fix accessibility */}
      {/* eslint-disable  */}
      <div
        data-test="DesignSystem-EditableWrapper"
        onClick={() => onChange('edit')}
        onMouseEnter={() => !editing && onChange('hover')}
        onMouseLeave={() => !editing && onChange('default')}
      >
        {/* eslint-enable  */}
        {children}
      </div>
    </div>
  );
};

Editable.displayName = 'Editable';

export default Editable;
