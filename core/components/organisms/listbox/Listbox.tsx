import * as React from 'react';
import { BaseProps, extractBaseProps, BaseHtmlProps } from '@/utils/types';
import classNames from 'classnames';
import { DraggableList } from './reorderList';
import { ListboxItem } from './listboxItem';
import { TListboxSize } from '@/common.type';
import styles from '@css/components/listbox.module.css';
import { getAllFocusableElements } from '@/utils/overlayHelper';
import { isListboxOptionDisabled } from './utils';

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
  customFocusManagement?: boolean;
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
  customFocusManagement: false,
  rovingIndex: -1,
  setRovingIndex: () => {},
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
    customFocusManagement = false,
    tagName: Tag = 'ul',
    ...rest
  } = props as ListboxInternalProps;
  const baseProps = extractBaseProps(props);

  const classes = classNames(styles.Listbox, className);
  const listRef = React.useRef<HTMLElement | null>(null);

  const [rovingIndex, setRovingIndex] = React.useState(-1);

  const effectiveCustomFocusManagement = customFocusManagement || type === 'description';

  React.useLayoutEffect(() => {
    if (effectiveCustomFocusManagement || draggable) {
      return;
    }
    const root = listRef.current;
    if (!root) {
      return;
    }

    const options = getAllFocusableElements(root, 'listbox');
    const firstEnabled = options.findIndex((el) => !isListboxOptionDisabled(el));

    let targetIdx = rovingIndex;
    if (options.length === 0) {
      targetIdx = -1;
    } else if (targetIdx < 0 || targetIdx >= options.length || isListboxOptionDisabled(options[targetIdx])) {
      targetIdx = firstEnabled;
    }

    if (targetIdx !== rovingIndex) {
      setRovingIndex(targetIdx);
    }

    options.forEach((el, i) => {
      const dis = isListboxOptionDisabled(el);
      el.tabIndex = dis ? -1 : i === targetIdx ? 0 : -1;
    });
  }, [children, effectiveCustomFocusManagement, draggable, rovingIndex]);

  const sharedProp: ListboxContextValue = {
    size,
    type,
    draggable,
    showDivider,
    customFocusManagement: effectiveCustomFocusManagement,
    rovingIndex,
    setRovingIndex,
  };

  const listRole = effectiveCustomFocusManagement || draggable ? rest.role : rest.role ?? 'listbox';

  return (
    <Provider value={sharedProp}>
      {draggable ? (
        <DraggableList {...props} />
      ) : (
        <Tag
          data-test="DesignSystem-Listbox"
          {...baseProps}
          className={classes}
          {...rest}
          role={listRole}
          ref={listRef as React.RefObject<HTMLUListElement & HTMLOListElement & HTMLDivElement & HTMLElement>}
        >
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
  customFocusManagement: false,
};

Listbox.Item = ListboxItem;

export default Listbox;
