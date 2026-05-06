import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '@/utils/types';
import { Heading } from '@/index';
import EmptyStateContext from './EmptyStateContext';
import { HeadingSize } from './EmptyState';
import styles from '@css/components/emptyState.module.css';

export interface EmptyDescriptionProps extends BaseProps {
  /**
   * The content to be displayed within the component
   * Can be any renderable React Text.
   */
  children: React.ReactText;
  /**
   * HTML tag to render the heading as.
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const EmptyStateTitle = (props: EmptyDescriptionProps) => {
  const { children, className, as, ...rest } = props;
  const contextProp = React.useContext(EmptyStateContext);

  const { size = 'standard' } = contextProp;

  const headingClass = classNames(
    {
      [styles[`EmptyState-text`]]: true,
      [styles[`EmptyState-title--${size}`]]: true,
    },
    className
  );

  return (
    <Heading
      data-test="DesignSystem-EmptyState--Heading"
      className={headingClass}
      size={HeadingSize[size]}
      as={as}
      {...rest}
    >
      {children}
    </Heading>
  );
};

export default EmptyStateTitle;
