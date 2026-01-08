import * as React from 'react';
import { Icon } from '@/index';
import { AvatarContext } from '../AvatarProvider';
import { IconAppearance } from '../../icon';
import { BaseProps } from '@/utils/types';
import classNames from 'classnames';
import { iconAppearanceMapper } from '../constants';
import styles from '@css/components/avatar.module.css';

export type AvatarIconProps = {
  /**
   * Material icon name
   */
  name?: string;
  /**
   * Type of material `Icon`
   */
  type?: 'outlined' | 'rounded';
} & BaseProps;

export const AvatarIcon = (props: AvatarIconProps) => {
  const contextProp = React.useContext(AvatarContext);
  const { size, appearance, darkAppearance = [] } = contextProp;
  const iconSize = size === 'regular' ? 20 : 16;

  const iconAppearance = (appearance && (iconAppearanceMapper[appearance] as IconAppearance)) || 'inverse';

  const IconClassNames = classNames({
    [styles['Avatar-content']]: appearance && darkAppearance.includes(appearance),
  });

  return <Icon {...props} size={iconSize} appearance={iconAppearance} className={IconClassNames} />;
};

export default AvatarIcon;
