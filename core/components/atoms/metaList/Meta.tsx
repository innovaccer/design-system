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
    <span data-test="DesignSystem-MetaList--Meta" className={'Meta'}>
      {icon && (
        <Icon
          data-test="DesignSystem-MetaList--MetaIcon"
          name={icon}
          appearance={iconAppearance}
          className={'Meta-icon'}
        />
      )}
      <Text data-test="DesignSystem-MetaList--MetaLabel" appearance={labelAppearance}>{label}</Text>
    </span>
  );
};

Meta.displayName = 'Meta';

export default Meta;
