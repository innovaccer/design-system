import * as React from 'react';
import classNames from 'classnames';
import { HeadingProps, TextProps } from '@/index.type';
import { Heading, Text } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';

type EmptyStateSize = 'large' | 'small';

export interface EmptyStateProps extends BaseProps {
  /**
   *  Illustration to be shown (Either image or imageSrc is mandatory to show image )
   */
  imageSrc?: string;
  /**
   * Heading of `EmptyState`
   */
  title: string;
  /**
   * Description of `EmptyState`
   */
  description: string;
  /**
   * Size of `EmptyState`
   *
   * Size: 'large' | 'small'
   */
  size: EmptyStateSize;
  /**
   * Button / ButtonGroups to be added inside `EmptyState`
   */
  children?: React.ReactNode;
  /**
   * Image to be shown. Image height should be set while providing image. Provide height as 128px when size is  'small'. Provide height as 256px when size is  'large'.
   */
  image?: React.ReactNode;
}

export const imageHeight = {
  large: '256px',
  small: '128px',
};

export const HeadingSize: Record<EmptyStateSize, HeadingProps['size']> = {
  large: 'l',
  small: 'm',
};

export const textSize: Record<EmptyStateSize, TextProps['size']> = {
  large: 'large',
  small: 'regular',
};

export const EmptyState = (props: EmptyStateProps) => {
  const { imageSrc, title, description, size, children, className, image } = props;

  const baseProps = extractBaseProps(props);

  const WrapperClass = classNames(
    {
      ['EmptyState']: true,
    },
    className
  );

  const HeadingClass = classNames({
    ['EmptyState-title']: true,
    [`EmptyState-title--${size}`]: true,
  });

  const TextClass = classNames({
    ['EmptyState-description']: true,
    [`EmptyState-description--${size}`]: children !== undefined,
  });

  return (
    <div data-test="DesignSystem-EmptyState" {...baseProps} className={WrapperClass}>
      {image && <div style={{ height: imageHeight[size] }}>{image}</div>}
      {imageSrc && !image && (
        //TODO(a11y)
        //eslint-disable-next-line
        <img src={imageSrc} height={imageHeight[size]} data-test="DesignSystem-EmptyState--Img" />
      )}
      <Heading data-test="DesignSystem-EmptyState--Heading" size={HeadingSize[size]} className={HeadingClass}>
        {title}
      </Heading>
      <Text size={textSize[size]} className={TextClass} appearance="subtle" data-test="DesignSystem-EmptyState--Text">
        {description}
      </Text>
      {children && children}
    </div>
  );
};

EmptyState.displayName = 'EmptyState';

export default EmptyState;
