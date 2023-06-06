import * as React from 'react';
import { Icon, Text } from '@/index';
import { IconProps, TextProps } from '@/index.type';
import { MetaSize } from './MetaList';

export interface MetaProps {
  label: string;
  icon?: string;
  iconAppearance?: IconProps['appearance'];
  labelAppearance?: TextProps['appearance'];
  size?: MetaSize;
}

export const Meta = (props: MetaProps) => {
  const { label, icon, iconAppearance, labelAppearance, size } = props;

  return (
    <span data-test="DesignSystem-MetaList--Meta" className={'Meta'}>
      {icon && (
        <Icon
          data-test="DesignSystem-MetaList--MetaIcon"
          name={icon}
          appearance={iconAppearance}
          className={'Meta-icon'}
          size={size === 'regular' ? 16 : 12}
        />
      )}
      <Text size={size} data-test="DesignSystem-MetaList--MetaLabel" appearance={labelAppearance}>
        {label}
      </Text>
    </span>
  );
};

Meta.displayName = 'Meta';

export default Meta;
