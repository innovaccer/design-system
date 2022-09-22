import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import { TextColor } from '@/common.type';

export type TextSize = 'small' | 'regular' | 'large';
export type TextAppearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled' | 'success' | 'link';

export interface TextProps extends BaseProps, BaseHtmlProps<HTMLSpanElement> {
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
  appearance: TextAppearance;
  /**
   * Size of `Text`
   */
  size: TextSize;
  /**
   * Color of `Text`
   */
  color?: TextColor;
}

export const Text = (props: TextProps) => {
  const { appearance, size, children, weight, small, className, color, ...rest } = props;

  const classes = classNames(
    {
      Text: true,
      [`Text--${appearance}`]: !color && appearance,
      [`Text--${weight}`]: weight,
      [`Text--${size}`]: size,
      [`color-${color}`]: color,
      /* SOON_TO_BE_DEPRECATED */
      ['Text--small']: size === 'small' || small,
    },
    className
  );

  return (
    <GenericText data-test="DesignSystem-Text" {...rest} className={classes} componentType="span">
      {children}
    </GenericText>
  );
};

Text.displayName = 'Text';
Text.defaultProps = {
  appearance: 'default',
  size: 'regular',
};

export default Text;
