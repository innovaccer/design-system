import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '@/utils/types';
import { Text } from '@/index';
import { TextSize } from 'types';
import EmptyStateContext from './EmptyStateContext';
import styles from '@css/components/emptyState.module.css';

export interface EmptyDescriptionProps extends BaseProps {
  /**
   * The content to be displayed within the component
   * Can be any renderable React Text.
   */
  children: string | number;
}

const EmptyStateDescription = (props: EmptyDescriptionProps) => {
  const { children, className, ...rest } = props;
  const contextProp = React.useContext(EmptyStateContext);

  const { size = 'standard' } = contextProp;

  const textSize: Record<string, TextSize> = {
    standard: 'regular',
    compressed: 'regular',
    tight: 'small',
  };

  const descriptionClasses = classNames(
    {
      [styles[`EmptyState-text`]]: true,
      ['mt-3']: true,
    },
    className
  );

  return (
    <Text
      size={textSize[size]}
      appearance="subtle"
      className={descriptionClasses}
      data-test="DesignSystem-EmptyState--Text"
      {...rest}
    >
      {children}
    </Text>
  );
};

export default EmptyStateDescription;
