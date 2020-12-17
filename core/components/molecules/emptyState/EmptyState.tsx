import * as React from 'react';
import classNames from 'classnames';
import { HeadingProps, TextProps } from '@/index.type';
import { Heading, Text } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';

type Size = 'large' | 'small';

export interface EmptyStateProps extends BaseProps {
  /**
   *  Illustration to be shown
   */
  imageSrc: string;
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
  size: Size;
  /**
   * Button / ButtonGroups to be added inside `EmptyState`
   */
  children?: React.ReactNode;
}

export const imageHeight = {
  large: '256px',
  small: '128px',
};

export const HeadingSize: Record<Size, HeadingProps['size']> = {
  large: 'l',
  small: 'm',
};

export const textSize: Record<Size, TextProps['size']> = {
  large: 'large',
  small: 'regular',
};

export const EmptyState = (props: EmptyStateProps) => {
  const {
    imageSrc,
    title,
    description,
    size,
    children,
    className,
  } = props;

  const baseProps = extractBaseProps(props);

  const WrapperClass = classNames({
    ['EmptyState']: true,
  }, className);

  const HeadingClass = classNames({
    ['EmptyState-title']: true,
    [`EmptyState-title--${size}`]: true
  });

  const TextClass = classNames({
    ['EmptyState-description']: true,
    [`EmptyState-description--${size}`]: children !== undefined
  });

  return (
    <div {...baseProps} className={WrapperClass}>
      <img
        src={imageSrc}
        height={imageHeight[size]}
      />
      <Heading
        size={HeadingSize[size]}
        className={HeadingClass}
      >
        {title}
      </Heading>
      <Text
        size={textSize[size]}
        className={TextClass}
        appearance="subtle"
      >
        {description}
      </Text>
      {children && children}
    </div>
  );
};

EmptyState.displayName = 'EmptyState';

export default EmptyState;
