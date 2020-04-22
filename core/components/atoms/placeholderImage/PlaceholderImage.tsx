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
  imageSize?: Size;
}

export const PlaceholderImage = (props: PlaceholderImageProps) => {
  const {
    imageSize = 'small',
    round,
  } = props;

  const classes = classNames({
    'Placeholder-image': true,
    'Placeholder--animation': true,
    ['Placeholder-image--round']: round,
    [`Placeholder-image--${imageSize}`]: imageSize
  });

  return (
    <div className={classes} />
  );
};

PlaceholderImage.displayName = 'PlaceholderImage';

export default PlaceholderImage;
