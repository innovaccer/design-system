import * as React from 'react';
import classNames from 'classnames';
import { HeadingProps, TextProps } from '@/index.type';
import { Heading, Text } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import EmptyStateContext from './EmptyStateContext';
import EmptyStateImage from './EmptyStateImage';
import EmptyStateTitle from './EmptyStateTitle';
import EmptyStateDescription from './EmptyStateDescription';
import EmptyStateActions from './EmptyStateActions';
import { TEmptyStateSize } from '@/common.type';
import styles from '@css/components/emptyState.module.css';

export interface EmptyStateProps extends BaseProps {
  /** @ignore */
  imageSrc?: string;
  /** @ignore */
  title?: string;
  /** @ignore */
  description?: string;
  /** @ignore */
  image?: React.ReactNode;
  /**
   * Size of `EmptyState`
   *
   * Size: 'standard' | 'compressed' | 'tight'
   *
   * **['large' and 'small' sizes are deprecated sizes please don't use them]**
   */
  size?: TEmptyStateSize;
  /**
   * Sets the maximum width of the `EmptyState` component.
   * default to the pre-defined size based on the `size` prop.
   */
  maxWidth?: number | string;
  /**
   * Sets the minimum width of the `EmptyState` component.
   */
  minWidth?: number | string;
  /**
   * Sets the width of the `EmptyState` component.
   */
  width?: number | string;
  /**
   * child component to be added inside `EmptyState`
   */
  children?: React.ReactNode;
}

export const imageHeight = {
  large: '256px',
  small: '128px',
  standard: '256px',
  compressed: '256px',
  tight: '256px',
};

export const templateWidth = {
  standard: '480px',
  compressed: '400px',
  tight: '320px',
  large: '480px',
  small: '480px',
};

export const HeadingSize: Record<TEmptyStateSize, HeadingProps['size']> = {
  large: 'l',
  small: 'm',
  standard: 'l',
  compressed: 'l',
  tight: 'l',
};

export const textSize: Record<TEmptyStateSize, TextProps['size']> = {
  large: 'large',
  small: 'regular',
  standard: 'large',
  compressed: 'large',
  tight: 'regular',
};

export const EmptyState = (props: EmptyStateProps) => {
  const {
    imageSrc,
    title,
    description,
    size = 'standard',
    children,
    className,
    image,
    maxWidth,
    minWidth,
    width,
  } = props;

  const baseProps = extractBaseProps(props);

  let templateSize: TEmptyStateSize = 'standard';

  const isValidSize = (size: TEmptyStateSize) => size === 'large' || size === 'small';

  if (title || description) {
    templateSize = isValidSize(size) ? size : 'large';
  } else {
    templateSize = isValidSize(size) ? 'standard' : size;
  }

  const wrapperClasses = classNames(
    {
      [styles['EmptyState']]: true,
    },
    className
  );

  const emptyStateWrapper = classNames({ [styles['EmptyState-Wrapper']]: true }, className);

  const headingClasses = classNames({
    [styles['EmptyState-title']]: true,
    [styles[`EmptyState-title--${templateSize}`]]: true,
  });

  const textClasses = classNames({
    [styles['EmptyState-description']]: true,
    [styles[`EmptyState-description--${templateSize}`]]: children !== undefined,
  });

  if (title || description) {
    return (
      <div data-test="DesignSystem-EmptyState" {...baseProps} className={wrapperClasses}>
        {image && <div style={{ height: imageHeight[templateSize] }}>{image}</div>}
        {imageSrc && !image && (
          //TODO(a11y)
          //eslint-disable-next-line
          <img src={imageSrc} height={imageHeight[templateSize]} data-test="DesignSystem-EmptyState--Img" />
        )}
        {title && (
          <Heading
            data-test="DesignSystem-EmptyState--Heading"
            size={HeadingSize[templateSize]}
            className={headingClasses}
          >
            {title}
          </Heading>
        )}
        {description && (
          <Text
            size={textSize[templateSize]}
            className={textClasses}
            appearance="subtle"
            data-test="DesignSystem-EmptyState--Text"
          >
            {description}
          </Text>
        )}
        {children && children}
      </div>
    );
  }

  const templateMaxWidth = maxWidth ? maxWidth : templateWidth[templateSize];

  const customStyle = {
    maxWidth: templateMaxWidth,
    minWidth: minWidth,
    width: width,
  };

  return (
    <EmptyStateContext.Provider value={{ size: templateSize, maxWidth: templateMaxWidth }}>
      <div className="d-flex justify-content-center align-item-center w-100 h-100">
        <div
          data-test="DesignSystem-EmptyState--Wrapper"
          className={emptyStateWrapper}
          style={customStyle}
          {...baseProps}
        >
          {children}
        </div>
      </div>
    </EmptyStateContext.Provider>
  );
};

EmptyState.displayName = 'EmptyState';
EmptyState.Title = EmptyStateTitle;
EmptyState.Description = EmptyStateDescription;
EmptyState.Image = EmptyStateImage;
EmptyState.Actions = EmptyStateActions;

EmptyState.defaultProps = {
  size: 'standard',
};

export default EmptyState;
