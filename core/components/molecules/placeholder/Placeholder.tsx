import * as React from 'react';

import PlaceholderImage, { Size } from '@/components/atoms/placeholderImage';
import { PlaceholderParagraphProps } from '@/components/atoms/placeholderParagraph';

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

  return (
    <div className="Placeholder">
      {withImage && (
        <div className="Placeholder-image">
          <PlaceholderImage round={round} size={imageSize} />
        </div>
      )}
      <div className="Placeholder-paragraph">
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
