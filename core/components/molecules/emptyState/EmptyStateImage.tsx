import React from 'react';
import { BaseProps } from '@/utils/types';
import EmptyStateContext from './EmptyStateContext';
import classNames from 'classnames';
import styles from '@css/components/emptyState.module.css';

export interface EmptyImageProps extends BaseProps, React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * The content to be displayed within the component.
   * Can be any renderable React Node as Image or Icon.
   */
  children?: React.ReactNode;

  /**
   * Source URL of the image to be displayed.
   * This is used as the `src` attribute for an `img` tag when there are no children provided.
   * If `children` are provided, `src` is ignored and the children content is displayed instead.
   */
  src?: string;

  /**
   * Customizable alternative text for the image.
   * The `alt` text describes the image content.
   * It is also displayed in place of an image if the image file is not loaded.
   */
  alt?: string;

  /**
   * The height of the image.
   * It defines the vertical size of the image element and accepts both numeric and string values.
   * If not defined, the image height will be determined by the original image size or by the CSS of the image container.
   */
  height?: string | number;

  /**
   * The minimum height of the image.
   */
  minHeight?: string | number;

  /**
   * The maximum height of the image.
   */
  maxHeight?: string | number;
}

export const imageHeight = {
  standard: '200px',
  compressed: '150px',
  tight: '100px',
  large: '200px',
  small: '200px',
};

const EmptyStateImage = (props: EmptyImageProps) => {
  const { children, maxHeight, height, minHeight, src, alt, className, ...rest } = props;
  const contextProp = React.useContext(EmptyStateContext);

  const imageClasses = classNames(
    {
      [styles['EmptyState-image']]: true,
    },
    className
  );

  const imageWrapperClasses = classNames(
    {
      ['d-flex']: true,
      ['justify-content-center']: true,
    },
    className
  );

  const { size = 'standard' } = contextProp;

  const sizeStyle = {
    maxHeight: maxHeight ?? imageHeight[size],
    height: height,
    minHeight: minHeight,
  };

  if (children) {
    return (
      <div {...rest} className={imageWrapperClasses} style={{ ...sizeStyle }}>
        {children}
      </div>
    );
  }

  return (
    <>
      {src && (
        <div>
          <img
            className={imageClasses}
            src={src}
            alt={alt}
            style={{ ...sizeStyle }}
            data-test="DesignSystem-EmptyState--Img"
            {...rest}
          />
        </div>
      )}
    </>
  );
};

export default EmptyStateImage;
