import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
import styles from '@css/components/flex.module.css';

export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexJustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
export type FlexAlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';
export type FlexGap = 0 | 2 | 4 | 8 | 12 | 16 | 24 | 32 | 48;

export interface FlexProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
  /**
   * Sets the direction of the flex container
   * @default "row"
   */
  direction?: FlexDirection;

  /**
   * Sets how items are aligned along the main axis
   * @default "flex-start"
   */
  justifyContent?: FlexJustifyContent;

  /**
   * Sets how items are aligned along the cross axis
   * @default "stretch"
   */
  alignItems?: FlexAlignItems;

  /**
   * Controls whether items should wrap
   * @default "nowrap"
   */
  wrap?: FlexWrap;

  /**
   * Sets the gap between flex items (in pixels)
   * See FlexGap type for available values and their corresponding CSS variables
   * @default 0
   */
  gap?: FlexGap;

  /**
   * Content to be rendered inside Flex
   */
  children?: React.ReactNode;
}

const directionMap: Record<FlexDirection, string> = {
  row: 'row',
  column: 'column',
  'row-reverse': 'rowReverse',
  'column-reverse': 'columnReverse',
};

const justifyContentMap: Record<FlexJustifyContent, string> = {
  'flex-start': 'justifyStart',
  'flex-end': 'justifyEnd',
  center: 'justifyCenter',
  'space-between': 'justifyBetween',
  'space-around': 'justifyAround',
  'space-evenly': 'justifyEvenly',
};

const alignItemsMap: Record<FlexAlignItems, string> = {
  'flex-start': 'alignStart',
  'flex-end': 'alignEnd',
  center: 'alignCenter',
  baseline: 'alignBaseline',
  stretch: 'alignStretch',
};

const wrapMap: Record<FlexWrap, string> = {
  wrap: 'wrap',
  nowrap: 'nowrap',
  'wrap-reverse': 'wrapReverse',
};

// eslint-disable-next-line react/display-name
export const Flex = React.forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const {
    direction = 'row',
    justifyContent = 'flex-start',
    alignItems = 'stretch',
    wrap = 'nowrap',
    gap = 0,
    className,
    children,
    ...rest
  } = props;

  const flexClass = classNames(
    {
      [styles.Flex]: true,
      [styles[`Flex--${directionMap[direction]}`]]: direction,
      [styles[`Flex--${justifyContentMap[justifyContent]}`]]: justifyContent,
      [styles[`Flex--${alignItemsMap[alignItems]}`]]: alignItems,
      [styles[`Flex--${wrapMap[wrap]}`]]: wrap,
      [styles[`Flex--gap${gap}`]]: gap !== undefined,
    },
    className
  );

  return (
    <div data-test="DesignSystem-Flex" ref={ref} className={flexClass} {...rest}>
      {children}
    </div>
  );
});

Flex.displayName = 'Flex';

export default Flex;
