import * as React from 'react';
import classNames from 'classnames';
import { Text, Tooltip, Icon } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { TooltipProps } from '@/index.type';
import { AccentAppearance, AvatarSize, AvatarShape } from '@/common.type';
import AvatarIcon from './avatarIcon';
import AvatarImage from './avatarImage';
import AvatarProvider from './AvatarProvider';

export interface AvatarProps extends BaseProps {
  /**
   * Color of the `Avatar`
   */
  appearance?: AccentAppearance;
  /**
   * **Only first 2 characters are rendered (SOON TO BE DEPRECATED)**
   */
  children?: string | React.ReactNode;
  /**
   * First Name
   */
  firstName?: string;
  /**
   * Last Name
   */
  lastName?: string;
  /**
   * Determines if tooltip is visible
   */
  withTooltip: boolean;
  /**
   * Position to place the tooltip
   */
  tooltipPosition: TooltipProps['position'];
  /**
   * Label to be displayed inside tooltip after name
   */
  tooltipSuffix?: string;
  /**
   * Determines size of `Avatar`
   */
  size: AvatarSize;
  /**
   * Determines the shape of `Avatar`
   */
  shape: AvatarShape;
  /**
   * Disables the `Avatar`
   */
  disabled?: boolean;
  /**
   * Describe aria-role for the `Avatar`
   */
  role?: string;
  /**
   * Defines tabIndex of the `Avatar`
   */
  tabIndex?: number;
}

const initialsLength = 2;
const DefaultAppearance = 'secondary';
const colors = ['accent4', 'primary', 'accent3', 'alert', 'accent2', 'warning', 'accent1', 'success'];

export const Avatar = (props: AvatarProps) => {
  const {
    withTooltip,
    tooltipPosition,
    size,
    children,
    firstName,
    lastName,
    className,
    appearance,
    shape,
    disabled,
    tooltipSuffix,
    tabIndex,
    role = 'presentation',
  } = props;

  const baseProps = extractBaseProps(props);

  const initials =
    children && typeof children === 'string'
      ? children.trim().slice(0, initialsLength)
      : `${firstName ? firstName.trim()[0] : ''}${lastName ? lastName.trim()[0] : ''}`;

  const getTooltipName = () => {
    if (children && typeof children === 'string') {
      return `${children} ${tooltipSuffix || ''}`;
    }

    return `${firstName || ''} ${lastName || ''} ${tooltipSuffix || ''}` || '';
  };

  const AvatarAppearance =
    appearance || colors[(initials.charCodeAt(0) + (initials.charCodeAt(1) || 0)) % 8] || DefaultAppearance;

  const AvatarClassNames = classNames(
    {
      Avatar: true,
      ['Avatar--square']: shape === 'square',
      [`Avatar--${size}`]: shape !== 'square',
      [`Avatar--${AvatarAppearance}`]: AvatarAppearance,
      ['Avatar--noInitials']: !initials || !withTooltip,
      ['Avatar--disabled']: disabled,
      ['Avatar--default']: !disabled,
    },
    className
  );

  const AvatarWrapperClassNames = classNames({
    ['Avatar-wrapper--square']: shape === 'square',
    [`Avatar--${size}`]: shape === 'square',
  });

  const TextClassNames = classNames({
    [`Avatar-content--${size}`]: size,
    [`Avatar-content--${AvatarAppearance}`]: AvatarAppearance,
  });

  const IconClassNames = classNames({
    [`Avatar-content--${AvatarAppearance}`]: AvatarAppearance,
  });

  const sharedProp = {
    size,
    firstName,
    lastName,
    appearance: AvatarAppearance,
  };

  const renderAvatar = () => {
    if (children && typeof children !== 'string') {
      return (
        <span data-test="DesignSystem-AvatarWrapper" className={AvatarWrapperClassNames} role={role}>
          <AvatarProvider value={sharedProp}>
            <span
              data-test="DesignSystem-Avatar"
              {...baseProps}
              className={AvatarClassNames}
              tabIndex={tabIndex || disabled ? -1 : 0}
            >
              {children}
            </span>
          </AvatarProvider>
        </span>
      );
    }

    return (
      <span data-test="DesignSystem-AvatarWrapper" className={AvatarWrapperClassNames} role={role}>
        <span
          data-test="DesignSystem-Avatar"
          {...baseProps}
          className={AvatarClassNames}
          tabIndex={tabIndex || disabled ? -1 : 0}
        >
          {initials && (
            <Text weight="medium" appearance={'white'} className={TextClassNames}>
              {initials}
            </Text>
          )}
          {!initials && (
            <Icon
              data-test="DesignSystem-Avatar--Icon"
              name="person"
              size={size === 'regular' ? 20 : 16}
              appearance={'white'}
              className={IconClassNames}
            />
          )}
        </span>
      </span>
    );
  };

  const renderTooltip = () => {
    if (withTooltip && initials) {
      return (
        <Tooltip tooltip={getTooltipName()} position={tooltipPosition} triggerClass={'flex-grow-0'}>
          {renderAvatar()}
        </Tooltip>
      );
    }

    return renderAvatar();
  };

  return renderTooltip();
};

Avatar.displayName = 'Avatar';

Avatar.Icon = AvatarIcon;
Avatar.Image = AvatarImage;

Avatar.defaultProps = {
  tooltipPosition: 'bottom',
  withTooltip: true,
  size: 'regular',
  shape: 'round',
};

export default Avatar;
