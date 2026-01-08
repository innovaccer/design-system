import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
import styles from '@css/components/mdsGrid.module.css';

export type GridColumnSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type GridRowSpan = 1 | 2 | 3 | 4 | 5 | 6;

export type GridJustifySelf = 'start' | 'end' | 'center' | 'stretch';
export type GridAlignSelf = 'start' | 'end' | 'center' | 'stretch';

export interface GridItemProps extends BaseProps, Omit<BaseHtmlProps<HTMLDivElement>, 'rowSpan'> {
  /**
   * Number of columns this item spans across the grid.
   * Used to control how much horizontal space the item occupies.
   * Based on a 12-column grid system for easy layout creation.
   */
  columnSpan?: GridColumnSpan;

  /**
   * Number of rows this item spans vertically.
   * Controls how much vertical space the item occupies.
   */
  rowSpan?: GridRowSpan;

  /**
   * Specifies the starting column position for this grid item.
   * Controls precise placement within the grid layout.
   */
  columnStart?: number;

  /**
   * Specifies the starting row position for this grid item.
   * Controls precise vertical placement within the grid.
   */
  rowStart?: number;

  /**
   * Controls horizontal alignment of this specific grid item within its cell.
   * Overrides the justifyItems setting from the parent grid.
   */
  justifySelf?: GridJustifySelf;

  /**
   * Controls vertical alignment of this specific grid item within its cell.
   * Overrides the alignItems setting from the parent grid.
   */
  alignSelf?: GridAlignSelf;

  /**
   * Content to be rendered within the grid item.
   * Can be any valid React node.
   */
  children?: React.ReactNode;
}

export const GridItem = (props: GridItemProps) => {
  const { columnSpan, rowSpan, columnStart, rowStart, justifySelf, alignSelf, className, children, ...rest } = props;

  const classes = classNames(
    {
      [styles.MdsGridItem]: true,
      [styles[`MdsGridItem-justifySelf--${justifySelf}`]]: justifySelf,
      [styles[`MdsGridItem-alignSelf--${alignSelf}`]]: alignSelf,
      [styles[`MdsGridItem-columnSpan--${columnSpan}`]]: columnSpan,
      [styles[`MdsGridItem-rowSpan--${rowSpan}`]]: rowSpan,
      [styles[`MdsGridItem-columnStart--${columnStart}`]]: columnStart,
      [styles[`MdsGridItem-rowStart--${rowStart}`]]: rowStart,
    },
    className
  );

  return (
    <div data-test="DesignSystem-MdsGridItem" {...rest} className={classes}>
      {children}
    </div>
  );
};

GridItem.defaultProps = {
  columnSpan: 1,
  rowSpan: 1,
};

export default GridItem;
