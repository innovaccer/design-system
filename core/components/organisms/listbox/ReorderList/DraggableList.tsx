import React from 'react';
import { extractBaseProps } from '@/utils/types';
import Draggable from './Draggable';
import { arrayMove } from './utils';
import { ListboxProps } from '@/index.type';
import classNames from 'classnames';

export const DraggableList = (props: ListboxProps) => {
  const { children, className, tag: Tag } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      Listbox: true,
    },
    className
  );

  const renderChildren = React.Children.toArray(children).map((child: any) => {
    const element = React.cloneElement(child, { parentProps: { ...props, isLastItem: false } });
    return element;
  });

  renderChildren[renderChildren.length - 1].props.parentProps.isLastItem = true;

  const [childList, setChildList] = React.useState(renderChildren);

  const onChangeHandler = (props: any) => {
    const { oldIndex, newIndex } = props;
    const maxlength = childList.length - 1;
    const updatedList = arrayMove(childList, oldIndex, newIndex);

    const draggedList = updatedList.map((listItem, index) => {
      if (index !== maxlength) {
        listItem.props.parentProps.isLastItem = false;
      } else {
        listItem.props.parentProps.isLastItem = true;
      }

      return listItem;
    });
    setChildList(draggedList);
  };

  return (
    <Draggable
      values={childList}
      onChange={onChangeHandler}
      renderItem={({ value, props }) => {
        return (
          <div {...props} className="Listbox-item--draggable">
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
