import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '@/utils/types';

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
   * Color of `Text`
   */
  appearance: TextAppearance;
  /**
   * Size of `Text`
   */
  size: TextSize;
}

export const Text = (props: TextProps) => {
  const { appearance, size, children, weight, className, ...rest } = props;

  const classes = classNames(
    {
      [`Mds-Text`]: true,
      [`Mds-Text--${appearance}`]: appearance,
      [`Mds-Text--${weight}`]: weight,
      [`Mds-Text--${size}`]: size,
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
