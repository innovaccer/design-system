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

export type ResponsiveValue<T> = T | { xs?: T; sm?: T; md?: T; lg?: T; xl?: T };

const spacingTokenMap: Record<GridGap, string> = {
  'spacing-10': 'var(--spacing-10)',
  'spacing-20': 'var(--spacing-20)',
  'spacing-30': 'var(--spacing-30)',
  'spacing-40': 'var(--spacing-40)',
  'spacing-60': 'var(--spacing-60)',
  'spacing-80': 'var(--spacing-80)',
  'spacing-120': 'var(--spacing-120)',
  'spacing-160': 'var(--spacing-160)',
};

const getSpacingValue = (spacing: GridGap | undefined): string | undefined => {
  if (!spacing) return undefined;
  return spacingTokenMap[spacing];
};

const buildResponsiveStyles = (
  value: ResponsiveValue<string | GridGap> | undefined,
  cssProperty: string
): React.CSSProperties => {
  if (!value) return {};

  if (typeof value === 'string') {
    if (cssProperty.includes('gap')) {
      return { [cssProperty]: getSpacingValue(value as GridGap) } as React.CSSProperties;
    }
    return { [cssProperty]: value } as React.CSSProperties;
  }

  const styles: React.CSSProperties = {};

  if (value.xs) {
    if (cssProperty.includes('gap')) {
      const spacingValue = getSpacingValue(value.xs as GridGap);
      if (spacingValue) {
        (styles as any)[cssProperty] = spacingValue;
      }
    } else {
      (styles as any)[cssProperty] = value.xs;
    }
  }

  return styles;
};

export interface MdsGridProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
  /**
   * Defines the columns of the grid with the CSS grid-template-columns property.
   * Use this to create your desired column layout.
   * Supports responsive breakpoints: { xs: '...', sm: '...', md: '...', lg: '...', xl: '...' }
   */
  templateColumns?: ResponsiveValue<GridTemplateColumns>;

  /**
   * Defines the rows of the grid with the CSS grid-template-rows property.
   * Controls the height and behavior of grid rows.
   * Supports responsive breakpoints: { xs: '...', sm: '...', md: '...', lg: '...', xl: '...' }
   */
  templateRows?: ResponsiveValue<GridTemplateRows>;

  /**
   * Defines the gap (spacing) between grid items in both directions.
   * Uses predefined spacing tokens for consistent layout.
   * Supports responsive breakpoints: { xs: '...', sm: '...', md: '...', lg: '...', xl: '...' }
   *
   * Available spacing tokens:
   * - "spacing-10" (4px)
   * - "spacing-20" (8px)
   * - "spacing-30" (12px)
   * - "spacing-40" (16px)
   * - "spacing-60" (24px)
   * - "spacing-80" (32px)
   * - "spacing-120" (48px)
   * - "spacing-160" (64px)
   */
  gap?: ResponsiveValue<GridGap>;

  /**
   * Defines the horizontal gap (spacing) between grid columns.
   * Overrides the gap property for column spacing only.
   * Supports responsive breakpoints: { xs: '...', sm: '...', md: '...', lg: '...', xl: '...' }
   *
   * Available spacing tokens:
   * - "spacing-10" (4px)
   * - "spacing-20" (8px)
   * - "spacing-30" (12px)
   * - "spacing-40" (16px)
   * - "spacing-60" (24px)
   * - "spacing-80" (32px)
   * - "spacing-120" (48px)
   * - "spacing-160" (64px)
   */
  columnGap?: ResponsiveValue<GridGap>;

  /**
   * Defines the vertical gap (spacing) between grid rows.
   * Overrides the gap property for row spacing only.
   * Supports responsive breakpoints: { xs: '...', sm: '...', md: '...', lg: '...', xl: '...' }
   *
   * Available spacing tokens:
   * - "spacing-10" (4px)
   * - "spacing-20" (8px)
   * - "spacing-30" (12px)
   * - "spacing-40" (16px)
   * - "spacing-60" (24px)
   * - "spacing-80" (32px)
   * - "spacing-120" (48px)
   * - "spacing-160" (64px)
   */
  rowGap?: ResponsiveValue<GridGap>;

  /**
   * Controls the flow of grid items (how items are placed in the grid).
   * Useful for controlling the auto-placement algorithm.
   */
  autoFlow?: GridAutoFlow;

  /**
   * Controls horizontal alignment of all grid items within their cells.
   * Applies to all items unless overridden by justifySelf on individual items.
   */
  justifyItems?: GridJustifyItems;

  /**
   * Controls vertical alignment of all grid items within their cells.
   * Applies to all items unless overridden by alignSelf on individual items.
   */
  alignItems?: GridAlignItems;

  /**
   * Content to be rendered within the grid.
   * Can include MdsGrid.GridItem components or any other React elements.
   */
  children?: React.ReactNode;
}

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
    style,
    children,
    ...rest
  } = props;

  const inlineStyles: React.CSSProperties = {
    ...style,
  };

  if (templateColumns) {
    if (typeof templateColumns === 'string') {
      inlineStyles.gridTemplateColumns = templateColumns;
    } else if (templateColumns.xs) {
      inlineStyles.gridTemplateColumns = templateColumns.xs;
    }
  }

  if (templateRows) {
    if (typeof templateRows === 'string') {
      inlineStyles.gridTemplateRows = templateRows;
    } else if (templateRows.xs) {
      inlineStyles.gridTemplateRows = templateRows.xs;
    }
  }

  const gapStyles = buildResponsiveStyles(gap, 'gap');
  const columnGapStyles = buildResponsiveStyles(columnGap, 'columnGap');
  const rowGapStyles = buildResponsiveStyles(rowGap, 'rowGap');

  const mergedStyles = {
    ...inlineStyles,
    ...gapStyles,
    ...columnGapStyles,
    ...rowGapStyles,
  };

  const classes = classNames(
    {
      [styles.MdsGrid]: true,
      [styles[`MdsGrid-gap--${typeof gap === 'string' ? gap : undefined}`]]: typeof gap === 'string' && gap,
      [styles[`MdsGrid-columnGap--${typeof columnGap === 'string' ? columnGap : undefined}`]]:
        typeof columnGap === 'string' && columnGap,
      [styles[`MdsGrid-rowGap--${typeof rowGap === 'string' ? rowGap : undefined}`]]:
        typeof rowGap === 'string' && rowGap,
      [styles[`MdsGrid-justifyItems--${justifyItems}`]]: justifyItems,
      [styles[`MdsGrid-alignItems--${alignItems}`]]: alignItems,
      [styles[`MdsGrid-autoFlow--${autoFlow}`]]: autoFlow,
    },
    className
  );

  return (
    <div data-test="DesignSystem-MdsGrid" {...rest} className={classes} style={mergedStyles}>
      {children}
    </div>
  );
};

MdsGrid.displayName = 'MdsGrid';

MdsGrid.defaultProps = {
  autoFlow: 'row',
  justifyItems: 'stretch',
  alignItems: 'stretch',
};

MdsGrid.GridItem = GridItem;

export default MdsGrid;
