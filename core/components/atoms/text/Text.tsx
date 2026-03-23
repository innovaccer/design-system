import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import { TextColor } from '@/common.type';
import styles from '@css/components/text.module.css';

export type TextSize = 'small' | 'regular' | 'large';
export type TextAppearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled' | 'success' | 'link';

export interface TextProps extends BaseProps, BaseHtmlProps<HTMLSpanElement> {
  /**
   * Accessible role for the text
   */
  role?: string;
  /**
   * Accessible level for headings (e.g. aria-level)
   */
  'aria-level'?: number;
  /**
   * Tab index for the text
   */
  tabIndex?: number;
  /**
   * Text to be rendered
   */
  children: React.ReactText;
  /**
   * Denotes weight of `Text`
   */
  weight?: 'strong' | 'medium';
  /**
   * Changes size of `Text`**[SOON\_TO\_BE\_DEPRECATED]**
   */
  small?: boolean;
  /**
   * State of `Text`
   */
  appearance?: TextAppearance;
  /**
   * Size of `Text`
   */
  size?: TextSize;
  /**
   * Color of `Text`
   */
  color?: TextColor;
}

export const Text = React.forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
  const {
    appearance = 'default',
    size = 'regular',
    children,
    weight,
    small,
    className,
    color,
    role,
    'aria-live': ariaLive,
    ...rest
  } = props;
  const resolvedAriaLive = ariaLive ?? (role === 'alert' ? 'assertive' : role === 'status' ? 'polite' : undefined);

  const classes = classNames(
    {
      [styles.Text]: true,
      [styles[`Text--${appearance}`]]: !color && appearance,
      [styles[`Text--${weight}`]]: weight,
      [styles[`Text--${size}`]]: size,
      [`color-${color}`]: color,
      /* SOON_TO_BE_DEPRECATED */
      [styles['Text--small']]: size === 'small' || small,
    },
    className
  );

  const interactiveProps = rest.onClick
    ? {
        role: role || 'button',
        tabIndex: rest.tabIndex !== undefined ? rest.tabIndex : 0,
        onKeyDown: (e: React.KeyboardEvent<HTMLSpanElement>) => {
          if (rest.onKeyDown) {
            rest.onKeyDown(e);
          } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            rest.onClick?.(e as any);
          }
        },
      }
    : {};

  return (
    <GenericText
      ref={ref}
      data-test="DesignSystem-Text"
      {...rest}
      {...interactiveProps}
      role={interactiveProps.role || role}
      aria-live={resolvedAriaLive}
      className={classes}
      componentType="span"
    >
      {children}
    </GenericText>
  );
});

Text.displayName = 'Text';

Text.defaultProps = {
  appearance: 'default',
  size: 'regular',
};

export default Text;
