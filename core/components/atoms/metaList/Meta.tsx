import * as React from 'react';
import { Icon, Text } from '@/index';
import { IconProps, TextProps } from '@/index.type';

export interface MetaProps {
  label: string;
  icon?: string;
  iconAppearance?: IconProps['appearance'];
  labelAppearance?: TextProps['appearance'];
}

export const Meta = (props: MetaProps) => {
  const { label, icon, iconAppearance, labelAppearance } = props;

  return (
    <span className={'Meta'}>
      {icon && <Icon name={icon} appearance={iconAppearance} className={'Meta-icon'} />}
      <Text appearance={labelAppearance}>{label}</Text>
    </span>
  );
};

Meta.displayName = 'Meta';

export default Meta;
