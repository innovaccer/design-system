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
export type FlexGap =
  | 'spacing-10'
  | 'spacing-20'
  | 'spacing-30'
  | 'spacing-40'
  | 'spacing-60'
  | 'spacing-80'
  | 'spacing-120'
  | 'spacing-160';

export type ResponsiveValue<T> = T | { xs?: T; sm?: T; md?: T; lg?: T; xl?: T };

const spacingTokenMap: Record<FlexGap, string> = {
  'spacing-10': 'var(--spacing-10)',
  'spacing-20': 'var(--spacing-20)',
  'spacing-30': 'var(--spacing-30)',
  'spacing-40': 'var(--spacing-40)',
  'spacing-60': 'var(--spacing-60)',
  'spacing-80': 'var(--spacing-80)',
  'spacing-120': 'var(--spacing-120)',
  'spacing-160': 'var(--spacing-160)',
};

const getSpacingValue = (spacing: FlexGap | undefined): string | undefined => {
  if (!spacing) return undefined;
  return spacingTokenMap[spacing];
};

const buildResponsiveStyles = (
  value: ResponsiveValue<string | FlexGap | FlexDirection | FlexJustifyContent | FlexAlignItems | FlexWrap> | undefined,
  cssProperty: string
): React.CSSProperties => {
  if (!value) return {};

  if (typeof value === 'string') {
    if (cssProperty.includes('gap')) {
      return { [cssProperty]: getSpacingValue(value as FlexGap) } as React.CSSProperties;
    }
    return { [cssProperty]: value } as React.CSSProperties;
  }

  const styles: React.CSSProperties = {};

  if (value.xs) {
    if (cssProperty.includes('gap')) {
      const spacingValue = getSpacingValue(value.xs as FlexGap);
      if (spacingValue) {
        (styles as any)[cssProperty] = spacingValue;
      }
    } else {
      (styles as any)[cssProperty] = value.xs;
    }
  }

  return styles;
};

export interface FlexProps extends BaseProps, Omit<BaseHtmlProps<HTMLDivElement>, 'wrap'> {
  /**
   * Sets the direction of the flex container.
   * Controls whether flex items are laid out horizontally or vertically.
   * Supports responsive breakpoints: { xs: '...', sm: '...', md: '...', lg: '...', xl: '...' }
   */
  direction?: ResponsiveValue<FlexDirection>;

  /**
   * Sets how items are aligned along the main axis.
   * Controls the distribution of space between and around flex items.
   * Supports responsive breakpoints: { xs: '...', sm: '...', md: '...', lg: '...', xl: '...' }
   */
  justifyContent?: ResponsiveValue<FlexJustifyContent>;

  /**
   * Sets how items are aligned along the cross axis.
   * Controls the alignment of flex items perpendicular to the main axis.
   * Supports responsive breakpoints: { xs: '...', sm: '...', md: '...', lg: '...', xl: '...' }
   */
  alignItems?: ResponsiveValue<FlexAlignItems>;

  /**
   * Controls whether items should wrap to the next line.
   * Determines if flex items are forced onto one line or can wrap onto multiple lines.
   * Supports responsive breakpoints: { xs: '...', sm: '...', md: '...', lg: '...', xl: '...' }
   */
  wrap?: ResponsiveValue<FlexWrap>;

  /**
   * Sets the gap (spacing) between flex items in both directions.
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
  gap?: ResponsiveValue<FlexGap>;

  /**
   * Sets the horizontal gap (spacing) between flex items.
   * Overrides the gap property for horizontal spacing only.
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
  columnGap?: ResponsiveValue<FlexGap>;

  /**
   * Sets the vertical gap (spacing) between flex items.
   * Overrides the gap property for vertical spacing only.
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
  rowGap?: ResponsiveValue<FlexGap>;

  /**
   * Content to be rendered inside Flex.
   * Can be any valid React node.
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

export const Flex = (props: FlexProps) => {
  const {
    direction = 'row',
    justifyContent = 'flex-start',
    alignItems = 'stretch',
    wrap = 'nowrap',
    gap,
    columnGap,
    rowGap,
    className,
    style,
    children,
    ...rest
  } = props;

  const inlineStyles: React.CSSProperties = {
    ...style,
  };

  if (direction) {
    if (typeof direction === 'string') {
      inlineStyles.flexDirection = direction;
    } else if (direction.xs) {
      inlineStyles.flexDirection = direction.xs;
    }
  }

  if (justifyContent) {
    if (typeof justifyContent === 'string') {
      inlineStyles.justifyContent = justifyContent;
    } else if (justifyContent.xs) {
      inlineStyles.justifyContent = justifyContent.xs;
    }
  }

  if (alignItems) {
    if (typeof alignItems === 'string') {
      inlineStyles.alignItems = alignItems;
    } else if (alignItems.xs) {
      inlineStyles.alignItems = alignItems.xs;
    }
  }

  if (wrap) {
    if (typeof wrap === 'string') {
      inlineStyles.flexWrap = wrap;
    } else if (wrap.xs) {
      inlineStyles.flexWrap = wrap.xs;
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
      [styles.Flex]: true,
      [styles[`Flex--${directionMap[direction as FlexDirection]}`]]: typeof direction === 'string' && direction,
      [styles[`Flex--${justifyContentMap[justifyContent as FlexJustifyContent]}`]]:
        typeof justifyContent === 'string' && justifyContent,
      [styles[`Flex--${alignItemsMap[alignItems as FlexAlignItems]}`]]: typeof alignItems === 'string' && alignItems,
      [styles[`Flex--${wrapMap[wrap as FlexWrap]}`]]: typeof wrap === 'string' && wrap,
      [styles[`Flex--gap--${typeof gap === 'string' ? gap : undefined}`]]: typeof gap === 'string' && gap,
      [styles[`Flex--columnGap--${typeof columnGap === 'string' ? columnGap : undefined}`]]:
        typeof columnGap === 'string' && columnGap,
      [styles[`Flex--rowGap--${typeof rowGap === 'string' ? rowGap : undefined}`]]:
        typeof rowGap === 'string' && rowGap,
    },
    className
  );

  return (
    <div data-test="DesignSystem-Flex" {...rest} className={classes} style={mergedStyles}>
      {children}
    </div>
  );
};

Flex.displayName = 'Flex';

Flex.defaultProps = {
  direction: 'row',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  wrap: 'nowrap',
};

export default Flex;
