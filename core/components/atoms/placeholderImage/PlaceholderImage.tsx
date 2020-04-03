import * as React from 'react';
import classNames from 'classnames';

export type Size = 'small' | 'medium' | 'large';

export interface IPlaceholderImageProps {
  /**
   * changes shape of `placeholder` to circle
   */
  round?: boolean;
  /**
   * Specifies dimension of `placeholder`
   * @default "small"
   */
  imageSize?: Size;
}

const PlaceholderImage: React.FunctionComponent<IPlaceholderImageProps> = props => {
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

export default PlaceholderImage;
