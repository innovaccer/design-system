import * as React from 'react';
import classNames from 'classnames';

import PlaceholderImage, { Size } from '@/components/atoms/placeholderImage';

export interface PlaceholderProps {
  /**
   * Shows `Placeholder` along with image
   */
  withImage?: boolean;
  /**
   * Changes shape of `Placeholder` to circle
   */
  round?: boolean;
  /**
   * Specifies dimension of `Placeholder`
   * @default "small"
   */
  imageSize?:  Size;
  /**
   * Adds CSS
   */
  style?: React.CSSProperties;
}

export const Placeholder: React.FunctionComponent<PlaceholderProps> = props => {
  const {
    imageSize = 'small',
    withImage,
    round,
    children,
    ...rest
  } = props;

  const classes = classNames({
    Placeholder: true,
    ['Placeholder--withImage']: withImage,
  });

  return (
    <div className={classes} {...rest}>
      {withImage && (
        <PlaceholderImage round={round} imageSize={imageSize} />
      )}
      <div className="ml-4 w-100">
        {children}
      </div>
    </div>
  );
};

export default Placeholder;
