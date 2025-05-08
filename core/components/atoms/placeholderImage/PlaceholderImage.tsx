import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/placeholder.module.css';

export type PlaceholderImageSize = 'small' | 'medium' | 'large';

export type PlaceholderImageProps = {
  /**
   * Changes shape of `Placeholder` to circle
   */
  round?: boolean;
  /**
   * Specifies dimension of `Placeholder`
   */
  size?: PlaceholderImageSize;
} & BaseProps;

export const PlaceholderImage = (props: PlaceholderImageProps) => {
  const { round, size = 'small', className } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      [styles.PlaceholderImage]: true,
      [styles['Placeholder--animation']]: true,
      [styles['PlaceholderImage--round']]: round,
      [styles[`PlaceholderImage--${size}`]]: size,
    },
    className
  );

  return <span {...baseProps} className={classes} />;
};

PlaceholderImage.displayName = 'PlaceholderImage';

export default PlaceholderImage;
