import * as React from 'react';
import { BaseProps, extractBaseProps, BaseHtmlProps } from '@/utils/types';
import classNames from 'classnames';
import { DraggableList } from './reorderList';
import { ListboxItem } from './listboxItem';
import { TListboxSize } from '@/common.type';
import styles from '@css/components/listbox.module.css';

function findFirstEnabledItemIndex(children: React.ReactNode): number {
  let idx = 0;
  let result = -1;
  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child) || child.type !== ListboxItem) {
      return;
    }
    if (result === -1 && !child.props.disabled) {
      result = idx;
    }
    idx += 1;
  });
  return result;
}

function mapItemsWithRoving(children: React.ReactNode, suppressKeyboard: boolean, draggable: boolean): React.ReactNode {
  if (suppressKeyboard || draggable) {
    return children;
  }
  let serial = 0;
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child) || child.type !== ListboxItem) {
      return child;
    }
    const listboxRovingSerial = serial++;
    return React.cloneElement(child, { listboxRovingSerial });
  });
}

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
   * When `true`, `Listbox.Item` does not use default arrow-key handling or default roving `tabIndex`.
   * Use for Combobox, Menu, Select, etc., where the parent owns keyboard focus and `tabIndex`.
   */
  suppressKeyboard?: boolean;
}

export type ListboxContextValue = Omit<ListboxInternalProps, 'children' | 'tagName'> & {
  rovingIndex: number;
  setRovingIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const ListboxContext = React.createContext<ListboxContextValue>({
  size: 'standard',
  type: 'resource',
  draggable: false,
  showDivider: true,
  suppressKeyboard: false,
  rovingIndex: -1,
  setRovingIndex: () => {},
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

  const [rovingIndex, setRovingIndex] = React.useState(() => findFirstEnabledItemIndex(children));

  React.useLayoutEffect(() => {
    if (suppressKeyboard || draggable) {
      return;
    }
    const first = findFirstEnabledItemIndex(children);
    setRovingIndex(first >= 0 ? first : -1);
  }, [children, suppressKeyboard, draggable]);

  const mappedChildren = mapItemsWithRoving(children, suppressKeyboard, draggable);

  const sharedProp: ListboxContextValue = {
    size,
    type,
    draggable,
    showDivider,
    suppressKeyboard,
    rovingIndex,
    setRovingIndex,
  };

  return (
    <Provider value={sharedProp}>
      {draggable ? (
        <DraggableList {...props} />
      ) : (
        <Tag data-test="DesignSystem-Listbox" {...baseProps} className={classes} {...rest}>
          {mappedChildren}
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
