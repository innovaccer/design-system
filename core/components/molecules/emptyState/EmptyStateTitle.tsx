import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '@/utils/types';
import { Heading, Text } from '@/index';
import EmptyStateContext from './EmptyStateContext';
import { textSize } from './EmptyState';
import styles from '@css/components/emptyState.module.css';

export interface EmptyDescriptionProps extends BaseProps {
  /**
   * The content to be displayed within the component
   * Can be any renderable React Text.
   */
  children: string | number;
}

const EmptyStateTitle = (props: EmptyDescriptionProps) => {
  const { children, className, ...rest } = props;
  const contextProp = React.useContext(EmptyStateContext);

  const { size = 'standard' } = contextProp;

  const headingClass = classNames(
    {
      [styles[`EmptyState-text`]]: true,
      [styles[`EmptyState-title--${size}`]]: true,
    },
    className
  );

  if (size === 'standard') {
    return (
      <Heading data-test="DesignSystem-EmptyState--Heading" className={headingClass} {...rest}>
        {children}
      </Heading>
    );
  }

  return (
    <Text
      data-test="DesignSystem-EmptyState--Heading"
      className={headingClass}
      weight="medium"
      size={textSize[size]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default EmptyStateTitle;
