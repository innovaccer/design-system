import * as React from 'react';
import classNames from 'classnames';
import { Icon } from '@/index';
import { ListboxItemProps } from './ListboxItem';
import { ListboxContext } from '../Listbox';
import { onKeyDown } from '../utils';
import styles from '@css/components/listbox.module.css';

export const ListBody = (props: ListboxItemProps) => {
  const { children, className, disabled, selected, activated, tabIndex } = props;

  const contextProp = React.useContext(ListboxContext);
  const { size, type, draggable } = contextProp;

  const itemClass = classNames(
    {
      [styles['Listbox-item']]: true,
      [styles[`Listbox-item--${size}`]]: size,
      [styles[`Listbox-item--${type}`]]: type,
      [styles['Listbox-item--disabled']]: disabled,
      [styles['Listbox-item--selected']]: selected && type === 'option',
      [styles['Listbox-item--activated']]: activated && type === 'resource',
    },
    className
  );

  return (
    <div
      data-disabled={disabled}
      data-test="DesignSystem-Listbox-ItemWrapper"
      tabIndex={draggable ? -1 : tabIndex || 0}
      className={itemClass}
      onKeyDown={onKeyDown}
      role="tablist"
    >
      {draggable && (
        <Icon
          size={16}
          appearance="subtle"
          name="drag_indicator"
          className={styles['Listbox-item--drag-icon']}
          data-test="DesignSystem-Listbox-DragIcon"
        />
      )}
      {children}
    </div>
  );
};

ListBody.displayName = 'ListBody';

export default ListBody;
