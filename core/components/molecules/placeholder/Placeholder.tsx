import * as React from 'react';

import PlaceholderImage, { Size } from '@/components/atoms/placeholderImage';
import { PlaceholderParagraphProps } from '@/components/atoms/placeholderParagraph';
import classNames from 'classnames';

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
  imageSize?: Size;
  /**
   * Adds CSS
   */
  style?: React.CSSProperties;
  /**
   * To be rendered in `Placeholder` wrapper
   */
  children?: React.ReactElement<PlaceholderParagraphProps> | React.ReactElement<PlaceholderParagraphProps>[];
}

export const Placeholder = (props: PlaceholderProps) => {
  const {
    imageSize,
    withImage,
    round,
    children,
  } = props;

  const paragraphClasses = classNames({
    'Placeholder-paragraph': true,
    ['Placeholder-paragraph--withImage']: withImage
  });

  return (
    <div className="Placeholder">
      {withImage && (
        <PlaceholderImage round={round} size={imageSize} />
      )}
      <div className={paragraphClasses}>
        {children}
      </div>
    </div>
  );
};

Placeholder.defaultProps = {
  withImage: true,
  imageSize: 'small',
};

Placeholder.displayName = 'Placeholder';

export default Placeholder;
