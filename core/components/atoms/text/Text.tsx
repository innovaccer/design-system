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
   * Text to be rendered
   */
  children: string | number;
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
   * @default default
   */
  appearance?: TextAppearance;
  /**
   * Size of `Text`
   * @default regular
   */
  size?: TextSize;
  /**
   * Color of `Text`
   */
  color?: TextColor;
}

export const Text = React.forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
  const { appearance = 'default', size = 'regular', children, weight, small, className, color, ...rest } = props;

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

  return (
    <GenericText ref={ref} data-test="DesignSystem-Text" {...rest} className={classes} componentType="span">
      {children}
    </GenericText>
  );
});

Text.displayName = 'Text';

export default Text;
