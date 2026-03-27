import * as React from 'react';
import classNames from 'classnames';
import { Icon } from '@/index';
import { ListboxItemProps } from './ListboxItem';
import { ListboxContext } from '../Listbox';
import styles from '@css/components/listbox.module.css';

export const ListBody = (props: ListboxItemProps & React.HTMLAttributes<HTMLDivElement>) => {
  const { children, className, disabled, selected, activated, ...rest } = props;

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

  const role = rest.role ?? 'option';
  const defaultAriaSelected = role === 'option' ? Boolean(selected) : undefined;

  return (
    <div
      data-disabled={disabled}
      data-test="DesignSystem-Listbox-ItemWrapper"
      className={itemClass}
      aria-selected={rest['aria-selected'] ?? defaultAriaSelected}
      {...rest}
      aria-disabled={disabled ? true : undefined}
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
