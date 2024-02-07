import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { AvatarProps, PopoverProps } from '@/index.type';

interface AvatarData extends Record<string, any> {
  firstName?: string;
  lastName?: string;
  appearance?: AvatarProps['appearance'];
  icon?: React.ReactNode;
  image?: React.ReactNode;
}

export interface SelectionAvatarGroupProps extends BaseProps {
  list: AvatarData[];
}

/**
 * Prop specific to avatarGroup
 * - max
 * - popperRenderer
 *
 * Prop specific to single avatar
 * -
 */
