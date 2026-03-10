import * as React from 'react';
import { BaseProps, extractBaseProps, BaseHtmlProps } from '@/utils/types';
import classNames from 'classnames';
import { DraggableList } from './reorderList';
import { ListboxItem } from './listboxItem';
import { TListboxSize } from '@/common.type';
import styles from '@css/components/listbox.module.css';

type ListboxType = 'option' | 'description' | 'resource';
export type TagType = 'ul' | 'ol' | 'div' | 'nav';

export interface ListboxProps extends BaseProps, BaseHtmlProps<HTMLUListElement | HTMLDivElement> {
  /**
   * React Element to be added inside `list`
   */
  children: React.ReactNode;
  /**
   * List size
   */
  size: TListboxSize;
  /**
   * Type of List
   */
  type: ListboxType;
  /**
   * Allows list item re-ordering
   */
  draggable?: boolean;
  /**
   * Set a custom element for Listbox
   */
  tagName: TagType;
  /**
   * Add divider below all list item
   */
  showDivider: boolean;
  /**
   * When true, suppresses ListBody's built-in keyboard handler so a parent component
   * (e.g. Select, Menu) can own all keyboard handling without double-firing.
   */
  suppressKeyboard?: boolean;
}

export const ListboxContext = React.createContext<Omit<ListboxProps, 'children' | 'tagName'>>({
  size: 'standard',
  type: 'resource',
  draggable: false,
  showDivider: true,
  suppressKeyboard: false,
});

const { Provider } = ListboxContext;

export const Listbox = (props: ListboxProps) => {
  const { children, className, draggable, size, type, showDivider, suppressKeyboard, tagName: Tag, ...rest } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames(styles.Listbox, className);

  const sharedProp = {
    size,
    type,
    draggable,
    showDivider,
    suppressKeyboard,
  };

  return (
    <Provider value={sharedProp}>
      {draggable ? (
        <DraggableList {...props} />
      ) : (
        <Tag data-test="DesignSystem-Listbox" {...baseProps} className={classes} {...rest}>
          {children}
        </Tag>
      )}
    </Provider>
  );
};

Listbox.displayName = 'Listbox';

Listbox.defaultProps = {
  tagName: 'ul',
  size: 'standard',
  type: 'resource',
  draggable: false,
  showDivider: true,
};

Listbox.Item = ListboxItem;

export default Listbox;
