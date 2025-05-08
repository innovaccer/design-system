import * as React from 'react';
import { BaseProps, extractBaseProps, BaseHtmlProps } from '@/utils/types';
import classNames from 'classnames';
import { DraggableList } from './reorderList';
import { ListboxItem } from './listboxItem';
import { TListboxSize } from '@/common.type';
import styles from '@css/components/listbox.module.css';

type ListboxType = 'option' | 'description' | 'resource';
export type TagType = 'ul' | 'ol' | 'div' | 'nav';

export type ListboxProps = {
  /**
   * React Element to be added inside `list`
   */
  children: React.ReactNode;
  /**
   * List size
   */
  size?: TListboxSize;
  /**
   * Type of List
   */
  type?: ListboxType;
  /**
   * Allows list item re-ordering
   */
  draggable?: boolean;
  /**
   * Set a custom element for Listbox
   */
  tagName?: TagType;
  /**
   * Add divider below all list item
   */
  showDivider?: boolean;
} & BaseProps &
  BaseHtmlProps<HTMLUListElement | HTMLDivElement>;

export const ListboxContext = React.createContext<Omit<ListboxProps, 'children' | 'tagName'>>({
  size: 'standard',
  type: 'resource',
  draggable: false,
  showDivider: true,
});

const { Provider } = ListboxContext;

export const Listbox = (props: ListboxProps) => {
  const {
    children,
    size = 'standard',
    type = 'resource',
    draggable = false,
    tagName: Tag = 'ul',
    showDivider = true,
    className,
    ...rest
  } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames(styles.Listbox, className);

  const sharedProp = {
    size,
    type,
    draggable,
    showDivider,
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

Listbox.Item = ListboxItem;

export default Listbox;
