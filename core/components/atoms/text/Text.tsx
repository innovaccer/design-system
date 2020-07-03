import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export type Appearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled';

export interface TextProps extends BaseProps {
  /**
   * Text to be rendered
   * @type {string}
   */
  children: string;
  /**
   * Denotes weight of `Text`
   */
  weight?: 'strong' | 'medium';
  /**
   * Changes size of `Text`
   */
  small?: boolean;
  /**
   * Color of `Text`
   * @default "default"
   */
  appearance?: Appearance;
}

export const Text = (props: TextProps) => {
  const {
    appearance = 'default',
    children,
    weight,
    small,
    className
  } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames({
    Text: true,
    [`Text--${appearance}`]: appearance,
    [`Text--${weight}`]: weight,
    ['Text--small']: small,
  }, className);

  return (
    <GenericText
      {...baseProps}
      className={classes}
      componentType="span"
    >
      {children}
    </GenericText>
  );
};

Text.displayName = 'Text';

export default Text;
