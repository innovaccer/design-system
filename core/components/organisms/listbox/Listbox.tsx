import * as React from 'react';
import { BaseProps, extractBaseProps, BaseHtmlProps } from '@/utils/types';
import classNames from 'classnames';
import { DraggableList } from './reorderList';
import { ListboxItem } from './listboxItem';
import { TListboxSize } from '@/common.type';
import styles from '@css/components/listbox.module.css';

type ListboxType = 'option' | 'description' | 'resource';
export type TagType = 'ul' | 'ol' | 'div' | 'nav';

/**
 * Keyboard configuration for Listbox when used inside Select, Menu, or Combobox.
 * Popover owns Tab trap/Escape; Listbox owns arrow navigation, Home/End, Enter/Space.
 * This config documents component-specific behavior for future shared handler implementation.
 */
export interface ListboxKeyboardConfig {
  /** ARIA role of the list container: 'listbox' (Select, Combobox) or 'menu' (Menu) */
  role?: 'listbox' | 'menu';
  /** Whether Space activates in addition to Enter (Menu menuitems) */
  spaceActivates?: boolean;
  /** Whether selection keeps popover open (multi-select) */
  selectionKeepsOpen?: boolean;
}

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
  /**
   * Optional keyboard config for future shared Listbox keyboard handler (arrow nav, Home/End, etc.).
   */
  keyboardConfig?: ListboxKeyboardConfig;
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
  const {
    children,
    className,
    draggable,
    size,
    type,
    showDivider,
    suppressKeyboard,
    keyboardConfig,
    tagName: Tag,
    ...rest
  } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames(styles.Listbox, className);

  const sharedProp = {
    size,
    type,
    draggable,
    showDivider,
    suppressKeyboard,
    keyboardConfig,
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
