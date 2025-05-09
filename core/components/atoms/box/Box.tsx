import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
import styles from '@css/components/box.module.css';

export type Display = 'inline' | 'inline-block' | 'block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid';
export type Shadow = 'none' | 's' | 'm' | 'l';
export type BorderRadius = 'none' | '2-5' | '05' | '10' | '15' | '20' | '30' | '40' | 'full';
export type Background =
  | 'transparent'
  | 'light'
  | 'secondary-lightest'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';
export type BorderColor = 'none' | 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
export type HTMLTag = 'div' | 'span' | 'section' | 'legend' | 'ul' | 'li';
export type Gap = 'xs' | 's' | 'm' | 'l';
export type Flex = 1 | 2 | 3 | 4;

export interface BoxProps extends BaseProps, Omit<BaseHtmlProps<HTMLDivElement>, 'as'> {
  /**
   * Sets the HTML element used to render the Box
   * @default 'div'
   */
  as?: HTMLTag | React.ComponentType<any>;
  /**
   * Sets the display CSS property
   * @default 'block'
   */
  display?: Display;
  /**
   * Sets the visual shadow of the Box
   * - none: No shadow
   * - s: Small shadow (0 1px 4px 0 rgba(0, 0, 0, 0.16))
   * - m: Medium shadow (0 2px 8px 0 rgba(0, 0, 0, 0.16))
   * - l: Large shadow (0 4px 16px 0 rgba(0, 0, 0, 0.16))
   * @default 'none'
   */
  shadow?: Shadow;
  /**
   * Sets uniform border radius on all corners
   * - none: No border radius (0px)
   * - 2-5: 1px border radius (--border-radius-2-5)
   * - 05: 2px border radius (--border-radius-05)
   * - 10: 4px border radius (--border-radius-10)
   * - 15: 6px border radius (--border-radius-15)
   * - 20: 8px border radius (--border-radius-20)
   * - 30: 12px border radius (--border-radius-30)
   * - 40: 16px border radius (--border-radius-40)
   * - full: 9999px border radius (creates a circle/oval)
   * @default 'none'
   */
  borderRadius?: BorderRadius;
  /**
   * Sets the background color
   * - transparent: No background color
   * - light: White background (--white)
   * - secondary-lightest: Very light gray background (--secondary-lightest)
   * - primary: Primary brand color (--primary)
   * - secondary: Secondary brand color (--secondary)
   * - success: Green success color (--success)
   * - warning: Yellow warning color (--warning)
   * - danger: Red alert/danger color (--alert)
   * @default 'transparent'
   */
  background?: Background;
  /**
   * Sets the border color and style
   * - none: No border
   * - default: Light gray border (--secondary-light)
   * - primary: Primary brand color border (--primary)
   * - secondary: Secondary brand color border (--secondary)
   * - success: Green success color border (--success)
   * - warning: Yellow warning color border (--warning)
   * - danger: Red alert/danger color border (--alert)
   * All borders use 1px width (--spacing-xs)
   * @default 'none'
   */
  borderColor?: BorderColor;
  /**
   * Sets the position CSS property
   * @default 'static'
   */
  position?: Position;
  /**
   * Sets the width of the Box
   */
  width?: string;
  /**
   * Sets the height of the Box
   */
  height?: string;
  /**
   * Sets gap between grid or flex items
   * - xs: Extra small gap (1px from --spacing-xs)
   * - s: Small gap (2px from --spacing-s)
   * - m: Medium gap (4px from --spacing-m)
   * - l: Large gap (12px from --spacing-l)
   */
  gap?: Gap;
  /**
   * Sets the flex grow value
   * - 1: Flex grow factor of 1
   * - 2: Flex grow factor of 2
   * - 3: Flex grow factor of 3
   * - 4: Flex grow factor of 4
   */
  flex?: Flex;
  /**
   * Children to be rendered inside the Box
   */
  children?: React.ReactNode;
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const {
    as: Component = 'div',
    display = 'block',
    shadow = 'none',
    borderRadius = 'none',
    background = 'transparent',
    borderColor = 'none',
    position = 'static',
    width,
    height,
    gap,
    flex,
    children,
    className,
    ...rest
  } = props;

  const boxClass = classNames(
    {
      [styles.Box]: true,
      [styles[`Box-display--${display}`]]: display,
      [styles[`Box-shadow--${shadow}`]]: shadow,
      [styles[`Box-borderRadius--${borderRadius}`]]: borderRadius,
      [styles[`Box-background--${background}`]]: background,
      [styles[`Box-borderColor--${borderColor}`]]: borderColor,
      [styles[`Box-position--${position}`]]: position,
      [styles[`Box-gap--${gap}`]]: gap,
      [styles[`Box-flex--${flex}`]]: flex,
    },
    className
  );

  const inlineStyle = {
    width,
    height,
  };

  return (
    <Component data-test="DesignSystem-Box" ref={ref} className={boxClass} style={inlineStyle} {...rest}>
      {children}
    </Component>
  );
});

Box.displayName = 'Box';

export default Box;
