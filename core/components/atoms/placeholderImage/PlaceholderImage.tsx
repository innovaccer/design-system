import * as React from 'react';
import classNames from 'classnames';

export type Size = 'small' | 'medium' | 'large';

export interface PlaceholderImageProps {
  /**
   * Changes shape of `Placeholder` to circle
   */
  round?: boolean;
  /**
   * Specifies dimension of `Placeholder`
   * @default "small"
   */
  size?: Size;
}

export const PlaceholderImage = (props: PlaceholderImageProps) => {
  const {
    size = 'small',
    round,
  } = props;

  const classes = classNames({
    PlaceholderImage: true,
    'Placeholder--animation': true,
    ['PlaceholderImage--round']: round,
    [`PlaceholderImage--${size}`]: size
  });

  return (
    <span className={classes} />
  );
};

PlaceholderImage.displayName = 'PlaceholderImage';

export default PlaceholderImage;
