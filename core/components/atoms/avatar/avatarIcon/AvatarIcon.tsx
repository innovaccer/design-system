import * as React from 'react';
import { Icon } from '@/index';
import { AvatarContext } from '../AvatarProvider';
import { IconAppearance } from '../../icon';
import { BaseProps } from '@/utils/types';
import classNames from 'classnames';
import styles from '@css/components/avatar.module.css';

export interface AvatarIconProps extends BaseProps {
  /**
   * Material icon name
   */
  name?: string;
  /**
   * Type of material `Icon`
   */
  type?: 'outlined' | 'rounded';
}

const appearanceMapper: Record<string, string> = {
  secondary: 'inverse',
  primary: 'white',
  alert: 'white',
  accent2: 'white',
  accent3: 'white',
  warning: 'warning_darker',
  success: 'success_darker',
  accent1: 'accent1_darker',
  accent4: 'accent4_darker',
};

export const AvatarIcon = (props: AvatarIconProps) => {
  const contextProp = React.useContext(AvatarContext);
  const { size, appearance, darkAppearance = [] } = contextProp;
  const iconSize = size === 'regular' ? 20 : 16;

  const iconAppearance = (appearance && (appearanceMapper[appearance] as IconAppearance)) || 'inverse';

  const IconClassNames = classNames({
    [styles['Avatar-content']]: appearance && darkAppearance.includes(appearance),
  });

  return <Icon {...props} size={iconSize} appearance={iconAppearance} className={IconClassNames} />;
};

export default AvatarIcon;
