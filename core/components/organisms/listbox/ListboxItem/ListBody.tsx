import * as React from 'react';
import classNames from 'classnames';
import { Icon } from '@/index';
import { ListboxItemProps } from './ListboxItem';

export const ListBody = (props: ListboxItemProps) => {
  const defaultProps = {
    size: 'standard',
    showDivider: true,
    type: 'resource',
    draggable: false,
    uniqueID: '',
  };

  const { children, className, disabled, selected, activated, parentProps = defaultProps } = props;

  const { size, type, draggable, uniqueID } = parentProps;

  const itemClass = classNames(
    {
      'Listbox-item': true,
      [`Listbox-item--${size}`]: size,
      [`Listbox-item--${type}`]: type,
      'Listbox-item--disabled': disabled,
      'Listbox-item--selected': selected && type === 'option',
      'Listbox-item--activated': activated && type === 'resource',
    },
    className
  );

  return (
    <div
      data-list-item-index={uniqueID}
      data-disabled={disabled}
      data-test="DesignSystem-Listbox-ItemWrapper"
      className={itemClass}
      tabIndex={draggable ? -1 : 0}
    >
      {draggable && (
        <Icon
          size={16}
          appearance="subtle"
          name="drag_indicator"
          className="Listbox-item--drag-icon"
          data-test="DesignSystem-Listbox-DragIcon"
        />
      )}
      {children}
    </div>
  );
};

export default ListBody;
