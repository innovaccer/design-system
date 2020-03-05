import * as React from 'react';
import classNames from 'classnames';

import PlaceholderImage, { Size } from '@/components/atoms/placeholderImage';

export interface IPlaceholderProps {
  withImage?: boolean;
  round?: boolean;
  imageSize?:  Size;
  style?: React.CSSProperties;
}

const Placeholder: React.FunctionComponent<IPlaceholderProps> = props => {
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
