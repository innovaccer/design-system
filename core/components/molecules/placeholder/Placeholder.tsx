import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import PlaceholderImage, { Size } from '@/components/atoms/placeholderImage';
import { PlaceholderParagraphProps } from '@/components/atoms/placeholderParagraph';

export interface PlaceholderProps extends BaseProps {
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
    className
  } = props;

  const baseProps = extractBaseProps(props);

  const paragraphClasses = classNames({
    'Placeholder-paragraph': true,
    ['Placeholder-paragraph--withImage']: withImage
  });

  const classes = classNames({
    ['Placeholder']: true,
  }, className);

  return (
    <div data-test="DesignSystem-Placeholder" {...baseProps} className={classes}>
      {withImage && (
        <PlaceholderImage round={round} size={imageSize} data-test="DesignSystem-Placeholder--Image"/>
      )}
      {children && (
        <div className={paragraphClasses} data-test="DesignSystem-Placeholder--Paragraph">
          {children}
        </div>
      )}
    </div>
  );
};

Placeholder.defaultProps = {
  withImage: true,
  imageSize: 'small',
};

Placeholder.displayName = 'Placeholder';

export default Placeholder;
