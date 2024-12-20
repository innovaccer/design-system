import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import PlaceholderImage, { PlaceholderImageSize } from '@/components/atoms/placeholderImage';
import { PlaceholderParagraphProps } from '@/components/atoms/placeholderParagraph';
import styles from '@css/components/placeholder.module.css';

export interface PlaceholderProps extends BaseProps {
  /**
   * Shows `Placeholder` along with image
   */
  withImage: boolean;
  /**
   * Changes shape of `Placeholder` to circle
   */
  round?: boolean;
  /**
   * Specifies dimension of `Placeholder`
   */
  imageSize: PlaceholderImageSize;
  /**
   * To be rendered in `Placeholder` wrapper
   */
  children?: React.ReactElement<PlaceholderParagraphProps> | React.ReactElement<PlaceholderParagraphProps>[];
}

export const Placeholder = (props: PlaceholderProps) => {
  const { imageSize, withImage, round, children, className } = props;

  const baseProps = extractBaseProps(props);

  const paragraphClasses = classNames({
    [styles['Placeholder-paragraph']]: true,
    [styles['Placeholder-paragraph--withImage']]: withImage,
  });

  const classes = classNames(
    {
      [styles['Placeholder']]: true,
    },
    className
  );

  return (
    <div data-test="DesignSystem-Placeholder" {...baseProps} className={classes}>
      {withImage && <PlaceholderImage round={round} size={imageSize} data-test="DesignSystem-Placeholder--Image" />}
      {children && (
        <div className={paragraphClasses} data-test="DesignSystem-Placeholder--Paragraph">
          {children}
        </div>
      )}
    </div>
  );
};

Placeholder.displayName = 'Placeholder';
Placeholder.defaultProps = {
  withImage: true,
  imageSize: 'small',
};

export default Placeholder;
