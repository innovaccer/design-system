import * as React from 'react';
import { BaseProps, extractBaseProps } from '@/utils/types';
import classNames from 'classnames';

type StackType = 'option' | 'description' | 'resource';
type StackSize = 'standard' | 'compressed' | 'tight';
type TagType = 'ul' | 'ol' | 'div';

export interface SharedProp {
  /**
   * List size
   */
  size: StackSize;
  /**
   * Type of List
   */
  type: StackType;
  /**
   * Add divider below all list item
   */
  showDivider: boolean;
  /**
   * Allows list item re-ordering
   */
  draggable?: boolean;
}

export interface StackProps extends BaseProps {
  /**
   * React Element to be added inside `list`
   */
  children: React.ReactNode;
  /**
   * List size
   */
  size: StackSize;
  /**
   * Type of List
   */
  type: StackType;
  /**
   * Add divider below all list item
   */
  showDivider: boolean;
  /**
   * Allows list item re-ordering
   */
  draggable?: boolean;
  /**
   * Set a custom element for Stack
   */
  tag: TagType;
}

export const Stack = (props: StackProps) => {
  const { children, className, tag: Tag } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      Stack: true,
    },
    className
  );

  // let elements = React.Children.toArray(children);

  // if (elements.length === 1) {
  //   elements = React.cloneElement(elements[0], { className: 'top bottom' });
  // } else if (elements.length > 0) {
  //   let lastElement = elements[elements.length - 1];
  //   elements = [React.cloneElement(elements[0], { className: 'top' })]
  //     .concat(elements.slice(1, -1))
  //     .concat(React.cloneElement(lastElement, { className: 'bottom' }));
  // }

  // const renderedChildren = React.Children.map(
  //   children,
  //   function (child: React.ReactElement<any, string | JSXElementConstructor<any>>) {
  //     return React.cloneElement(child, { parentValue: props.parentValue });
  //   }
  // );

  const renderedChildren = React.Children.toArray(children).map((child: any) => {
    const element = React.cloneElement(child, { parentValue: props });
    // const element = React.cloneElement(child, { ...props });
    return element;
  });

  return (
    <Tag data-test="DesignSystem-Stack" {...baseProps} className={classes}>
      {renderedChildren}
    </Tag>
  );
};

Stack.displayName = 'Stack';

Stack.defaultProps = {
  size: 'standard',
  showDivider: true,
  type: 'option',
  draggable: false,
  tag: 'ul',
};

export default Stack;
