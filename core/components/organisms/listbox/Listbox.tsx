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
}

export interface ListboxInternalProps extends ListboxProps {
  /**
   * @internal
   * When `true`, `Listbox.Item` does not attach the default listbox arrow-key handler.
   * Use for lists embedded in Combobox, Menu, or Select where the parent owns keyboard navigation.
   */
  suppressKeyboard?: boolean;
}

export const ListboxContext = React.createContext<Omit<ListboxInternalProps, 'children' | 'tagName'>>({
  size: 'standard',
  type: 'resource',
  draggable: false,
  showDivider: true,
  suppressKeyboard: false,
});

const { Provider } = ListboxContext;

export const Listbox = (props: ListboxInternalProps) => {
  const {
    children,
    className,
    draggable,
    size,
    type,
    showDivider,
    suppressKeyboard = false,
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
  suppressKeyboard: false,
};

Listbox.Item = ListboxItem;

export default Listbox;
