import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
import styles from '@css/components/mdsGrid.module.css';
import { GridItem } from './GridItem';

export type GridTemplateColumns = string;
export type GridTemplateRows = string;
export type GridGap =
  | 'spacing-10'
  | 'spacing-20'
  | 'spacing-30'
  | 'spacing-40'
  | 'spacing-60'
  | 'spacing-80'
  | 'spacing-120'
  | 'spacing-160';
export type GridAutoFlow = 'row' | 'column' | 'row dense' | 'column dense';
export type GridJustifyItems = 'start' | 'end' | 'center' | 'stretch';
export type GridAlignItems = 'start' | 'end' | 'center' | 'stretch';

/**
 * MdsGrid component provides a flexible grid layout system for organizing content.
 * It uses CSS Grid properties for modern layout control.
 */
export interface MdsGridProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
  /**
   * Defines the columns of the grid with the CSS grid-template-columns property.
   * Use this to create your desired column layout.
   *
   * @example "1fr 1fr 1fr" (three equal columns)
   * @example "repeat(3, 1fr)" (three equal columns using repeat syntax)
   * @example "repeat(12, 1fr)" (12-column grid for complex layouts)
   * @example "200px 1fr 2fr" (fixed first column, proportional other columns)
   * @example "minmax(200px, 1fr) 2fr" (responsive column with min width)
   */
  templateColumns?: GridTemplateColumns;

  /**
   * Defines the rows of the grid with the CSS grid-template-rows property.
   * Controls the height and behavior of grid rows.
   *
   * @example "auto auto auto" (three rows with height determined by content)
   * @example "100px 200px" (fixed height rows)
   * @example "1fr 2fr" (proportional row heights)
   * @example "repeat(3, minmax(100px, auto))" (responsive rows with min height)
   */
  templateRows?: GridTemplateRows;

  /**
   * Defines the gap (spacing) between grid items in both directions.
   * Uses predefined spacing tokens for consistent layout.
   *
   * @example "spacing-20" (8px spacing)
   * @example "spacing-40" (16px spacing)
   */
  gap?: GridGap;

  /**
   * Defines the horizontal gap (spacing) between grid columns.
   * Overrides the gap property for column spacing only.
   *
   * @example "spacing-20" (8px column spacing)
   * @example "spacing-40" (16px column spacing)
   */
  columnGap?: GridGap;

  /**
   * Defines the vertical gap (spacing) between grid rows.
   * Overrides the gap property for row spacing only.
   *
   * @example "spacing-20" (8px row spacing)
   * @example "spacing-40" (16px row spacing)
   */
  rowGap?: GridGap;

  /**
   * Controls the flow of grid items (how items are placed in the grid).
   * Useful for controlling the auto-placement algorithm.
   *
   * @example "row" (default, fills by row)
   * @example "column" (fills by column)
   * @example "row dense" (fills gaps by moving items out of order if necessary)
   * @example "column dense" (column-first with dense packing)
   */
  autoFlow?: GridAutoFlow;

  /**
   * Controls horizontal alignment of all grid items within their cells.
   * Applies to all items unless overridden by justifySelf on individual items.
   *
   * @example "start" (items aligned to the left)
   * @example "center" (items horizontally centered)
   * @example "end" (items aligned to the right)
   * @example "stretch" (items stretch to fill the width)
   */
  justifyItems?: GridJustifyItems;

  /**
   * Controls vertical alignment of all grid items within their cells.
   * Applies to all items unless overridden by alignSelf on individual items.
   *
   * @example "start" (items aligned to the top)
   * @example "center" (items vertically centered)
   * @example "end" (items aligned to the bottom)
   * @example "stretch" (items stretch to fill the height)
   */
  alignItems?: GridAlignItems;

  /**
   * Content to be rendered within the grid.
   * Can include MdsGrid.GridItem components or any other React elements.
   */
  children: React.ReactNode;
}

/**
 * MdsGrid provides a flexible grid layout system using CSS Grid.
 * It supports configurable columns, rows, gaps, and alignment.
 */
export const MdsGrid = (props: MdsGridProps) => {
  const {
    templateColumns,
    templateRows,
    gap,
    columnGap,
    rowGap,
    autoFlow,
    justifyItems,
    alignItems,
    className,
    children,
    ...rest
  } = props;

  const classes = classNames(
    {
      [styles.MdsGrid]: true,
      [styles[`MdsGrid-gap--${gap}`]]: gap,
      [styles[`MdsGrid-columnGap--${columnGap}`]]: columnGap,
      [styles[`MdsGrid-rowGap--${rowGap}`]]: rowGap,
      [styles[`MdsGrid-justifyItems--${justifyItems}`]]: justifyItems,
      [styles[`MdsGrid-alignItems--${alignItems}`]]: alignItems,
      [styles[`MdsGrid-autoFlow--${autoFlow}`]]: autoFlow,
      [styles[`MdsGrid-templateColumns--${templateColumns}`]]: templateColumns,
      [styles[`MdsGrid-templateRows--${templateRows}`]]: templateRows,
    },
    className
  );

  return (
    <div data-test="DesignSystem-MdsGrid" {...rest} className={classes}>
      {children}
    </div>
  );
};

MdsGrid.defaultProps = {
  autoFlow: 'row',
  justifyItems: 'stretch',
  alignItems: 'stretch',
};

// Add GridItem as a subcomponent
MdsGrid.GridItem = GridItem;

export default MdsGrid;
