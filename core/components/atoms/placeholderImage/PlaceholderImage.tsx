import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export type Size = 'small' | 'medium' | 'large';

export interface PlaceholderImageProps extends BaseProps {
  /**
   * Changes shape of `Placeholder` to circle
   */
  round?: boolean;
  /**
   * Specifies dimension of `Placeholder`
   */
  size: Size;
}

export const PlaceholderImage = (props: PlaceholderImageProps) => {
  const {
    size = 'small',
    round,
    className
  } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames({
    PlaceholderImage: true,
    'Placeholder--animation': true,
    ['PlaceholderImage--round']: round,
    [`PlaceholderImage--${size}`]: size
  }, className);

  return (
    <span {...baseProps} className={classes} />
  );
};

PlaceholderImage.displayName = 'PlaceholderImage';
PlaceholderImage.defaultProps = {
  size: 'small'
};

export default PlaceholderImage;
