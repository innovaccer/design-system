import * as React from 'react';
import classNames from 'classnames';

export type Size = 'small' | 'medium' | 'large';

export interface IPlaceholderImageProps {
  round?: boolean;
  imageSize?: Size;
}

const Image: React.FunctionComponent<IPlaceholderImageProps> = props => {
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

export default Image;
