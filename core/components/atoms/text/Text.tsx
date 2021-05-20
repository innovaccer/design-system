import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '@/utils/types';

export type Size = 'small' | 'regular' | 'large';
export type Appearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled' | 'success' | 'link';

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
   * Color of `Text`
   */
  appearance: Appearance;
  /**
   * Size of `Text`
   */
  size: Size;
}

export const Text = (props: TextProps) => {
  const {
    appearance,
    size,
    children,
    weight,
    small,
    className,
    ...rest
  } = props;

  const classes = classNames({
    Text: true,
    [`Text--${appearance}`]: appearance,
    [`Text--${weight}`]: weight,
    [`Text--${size}`]: size,
    /* SOON_TO_BE_DEPRECATED */
    ['Text--small']: size === 'small' || small,
  }, className);

  return (
    <GenericText
      data-test="DesignSystem-Text"
      {...rest}
      className={classes}
      componentType="span"
    >
      {children}
    </GenericText>
  );
};

Text.displayName = 'Text';
Text.defaultProps = {
  appearance: 'default',
  size: 'regular'
};

export default Text;
