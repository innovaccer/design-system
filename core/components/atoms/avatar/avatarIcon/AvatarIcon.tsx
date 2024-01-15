import * as React from 'react';
import { Icon } from '@/index';
import { AvatarContext } from '../AvatarProvider';
import { IconAppearance } from '../../icon';
import { BaseProps } from '@/utils/types';

export interface AvatarIconProps extends BaseProps {
  /**
   * Material icon name
   */
  name?: string;
  /**
   * Type of material `Icon`
   */
  type?: 'outlined' | 'rounded';
  /**
   * Handler to be called when icon is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  /**
   * Handler to be called when key is pressed on icon
   */
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
  /**
   * The tabindex global attribute indicates that its element can be focused, and
   * where it participates in sequential keyboard navigation.
   */
  tabIndex?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>['tabIndex'];
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
  const { size, appearance } = contextProp;
  const iconSize = size === 'regular' ? 20 : 16;

  const iconAppearance = (appearance && (appearanceMapper[appearance] as IconAppearance)) || 'inverse';

  return <Icon {...props} size={iconSize} appearance={iconAppearance} />;
};

export default AvatarIcon;
