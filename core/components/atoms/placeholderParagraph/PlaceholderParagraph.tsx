import * as React from 'react';
import classNames from 'classnames';

export type Length = 'small' | 'medium' | 'large';
export type Size = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';

export interface PlaceholderParagraphProps {
  /**
   * Length of `Placeholder`
   * @default "medium"
   */
  length?: Length;
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
  size?: Size;
}

export const PlaceholderParagraph = (props: PlaceholderParagraphProps) => {
  const {
    length,
    size
  } = props;

  const classes = classNames({
    'Placeholder--animation': true,
    PlaceholderParagraph: true,
    [`PlaceholderParagraph--${size}`]: size,
  });

  const wrapperClass = classNames({
    'PlaceholderParagraph-wrapper': true,
    [`PlaceholderParagraph-wrapper--length-${length}`]: length,
    [`PlaceholderParagraph-wrapper--size-${size}`]: size,
  });

  return (
    <div className={wrapperClass}>
      <span className={classes} />
    </div>
  );
};

PlaceholderParagraph.defaultProps = {
  length: 'medium'
};

PlaceholderParagraph.displayName = 'PlaceholderParagraph';

export default PlaceholderParagraph;
