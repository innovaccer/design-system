import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/placeholder.module.css';

export type Length = 'small' | 'medium' | 'large';
export type PlaceholderParagraphSize = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';

export interface PlaceholderParagraphProps extends BaseProps {
  /**
   * Length of `Placeholder`
   */
  length: Length;
  /**
   * Height of `Placeholder`
   *
   * undefined: `Text`
   *
   * xxs: `Text` small: true
   *
   * xs: `Subheading`
   *
   * s: `Label`
   *
   * m: `Heading` size: s
   *
   * l: `Heading` size: m
   *
   * xl: `Heading` size: l
   *
   * xxl: `Heading` size: xl
   *
   * xxxl: `Heading` size: xxl
   */
  size?: PlaceholderParagraphSize;
}

export const PlaceholderParagraph = (props: PlaceholderParagraphProps) => {
  const { length, size, className } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames({
    [styles['Placeholder--animation']]: true,
    [styles.PlaceholderParagraph]: true,
    [styles[`PlaceholderParagraph--${size}`]]: size,
  });

  const wrapperClass = classNames(
    {
      [styles['PlaceholderParagraph-wrapper']]: true,
      [styles[`PlaceholderParagraph-wrapper--length-${length}`]]: length,
      [styles[`PlaceholderParagraph-wrapper--size-${size}`]]: size,
    },
    className
  );

  return (
    <div {...baseProps} className={wrapperClass}>
      <span className={classes} />
    </div>
  );
};

PlaceholderParagraph.displayName = 'PlaceholderParagraph';
PlaceholderParagraph.defaultProps = {
  length: 'medium',
};

export default PlaceholderParagraph;
