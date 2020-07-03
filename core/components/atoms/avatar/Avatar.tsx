import * as React from 'react';
import classNames from 'classnames';
import { Heading } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';

export type Appearance = 'primary' | 'alert' | 'warning' | 'success' | 'accent1' | 'accent2' | 'accent3' | 'accent4';

export interface AvatarProps extends BaseProps {
  /**
   * Color of the `Avatar`
   * @default "primary"
   */
  appearance?: Appearance;
  /**
   * **Only first 2 characters are rendered**
   */
  children?: string;
  /**
   * First Name
   */
  firstName?: string;
  /**
   * Last Name
   */
  lastName?: string;
}

const initialsLength = 2;

/**
 * **NOTE: children will be rendered if both children and (firstName, lastName) are provided as prop.**
 */
export const Avatar = (props: AvatarProps) => {
  const {
    children,
    firstName,
    lastName,
    className,
    appearance,
  } = props;

  const baseProps = extractBaseProps(props);

  const initials = children
    ? children.trim().slice(0, initialsLength)
    : `${firstName ? firstName.trim()[0] : ''}${lastName ? lastName.trim()[0] : ''}`;

  const colors = [
    'accent4',
    'primary',
    'accent3',
    'alert',
    'accent2',
    'warning',
    'accent1',
    'success',
  ];
  const AvatarAppearance = appearance || colors[(initials.charCodeAt(0) + (initials.charCodeAt(1) || 0)) % 8];

  const classes = classNames({
    Avatar: true,
    [`Avatar--${AvatarAppearance}`]: AvatarAppearance
  }, className);

  return (
    <span {...baseProps} className={classes}>
      <Heading size="s" appearance={AvatarAppearance === 'warning' ? 'default' : 'white'}>{initials}</Heading>
    </span>
  );
};

Avatar.displayName = 'Avatar';

export default Avatar;
