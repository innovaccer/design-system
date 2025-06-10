import { Children, cloneElement, useState } from 'react';
import { extractBaseProps } from '@/utils/types';
import Draggable from './Draggable';
import { arrayMove } from './utils';
import { ListboxProps } from '@/index.type';
import classNames from 'classnames';
import styles from '@css/components/listbox.module.css';

export const DraggableList = (props: ListboxProps) => {
  const { children, className, tagName: Tag } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames(styles.Listbox, className);

  const renderChildren = Children.toArray(children).map((child: any) => {
    const element = cloneElement(child, { parentProps: { ...props } });
    return element;
  });

  const [childList, setChildList] = useState(renderChildren);

  const onChangeHandler = (props: any) => {
    const { oldIndex, newIndex } = props;
    const updatedList = arrayMove(childList, oldIndex, newIndex);

    setChildList(updatedList);
  };

  return (
    <Draggable
      values={childList}
      onChange={onChangeHandler}
      renderItem={({ value, props }) => {
        return (
          <div {...props} className={styles['Listbox-item--draggable']}>
            {value}
          </div>
        );
      }}
      renderList={({ children, props }) => (
        <Tag data-test="DesignSystem-Listbox" {...baseProps} className={classes} {...props}>
          {children}
        </Tag>
      )}
    />
  );
};
