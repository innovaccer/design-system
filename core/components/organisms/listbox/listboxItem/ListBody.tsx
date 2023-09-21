import * as React from 'react';
import classNames from 'classnames';
import { Icon } from '@/index';
import { ListboxItemProps } from './ListboxItem';
import { ListboxContext } from '../Listbox';
import { onKeyDown } from '../utils';

export const ListBody = (props: ListboxItemProps) => {
  const { children, className, disabled, selected, activated, tabIndex } = props;

  const contextProp = React.useContext(ListboxContext);
  const { size, type, draggable } = contextProp;

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

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLLIElement | HTMLDivElement>) => {
    if (props.onKeyDown) {
      return props.onKeyDown(event);
    }
    return onKeyDown(event);
  };

  return (
    <div
      data-disabled={disabled}
      data-test="DesignSystem-Listbox-ItemWrapper"
      tabIndex={draggable ? -1 : tabIndex || 0}
      className={itemClass}
      onKeyDown={onKeyDownHandler}
      role="tablist"
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
