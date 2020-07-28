import * as React from 'react';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { Icon, Text } from '@/index';

export interface MetaProps extends BaseProps {
  /**
   * Describes label of the `Meta`
   */
  label: string;
  /**
   * Name of icon that is to be added
   */
  icon?: string;
}

export const Meta = (props: MetaProps) => {
  const {
    label,
    icon,
  } = props;

  const baseProps = extractBaseProps(props);
  return (
    <span
      {...baseProps}
      className={'Meta'}
    >
      {icon && (
        <Icon
          name={icon}
          appearance="disabled"
          className={'Meta-icon'}
        />
      )}
      <Text appearance="subtle">{label}</Text>
    </span>
  );
};

Meta.displayName = 'Meta';

export default Meta;
