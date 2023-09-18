import * as React from 'react';
import { Icon, Text } from '@/index';
import { MetaSize } from './MetaList';
import { FontVariationType } from '@/common.type';

export interface MetaProps {
  label: string;
  icon?: string;
  size?: MetaSize;
  iconVariations?: FontVariationType;
}

export const Meta = (props: MetaProps) => {
  const { label, icon, size, iconVariations } = props;

  return (
    <span data-test="DesignSystem-MetaList--Meta" className={'Meta'}>
      {icon && (
        <Icon
          data-test="DesignSystem-MetaList--MetaIcon"
          name={icon}
          appearance="subtle"
          className={'Meta-icon'}
          variations={iconVariations}
          size={size === 'regular' ? 16 : 12}
        />
      )}
      <Text size={size} data-test="DesignSystem-MetaList--MetaLabel" appearance="subtle">
        {label}
      </Text>
    </span>
  );
};

Meta.displayName = 'Meta';

export default Meta;
