import * as React from 'react';
import classNames from 'classnames';
import { Text, Tooltip, Icon } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { TooltipProps } from '@/index.type';
import { AccentAppearance, AvatarSize, AvatarShape } from '@/common.type';
import AvatarIcon from './avatarIcon';
import AvatarImage from './avatarImage';
import AvatarProvider from './AvatarProvider';
import styles from '@css/components/avatar.module.css';

type TPresence = 'active' | 'away';

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
  /**
   * Show presence indicator for the `Avatar`
   */
  presence?: TPresence;
  /**
   * Show status indicator for the `Avatar`
   */
  status?: React.ReactNode;
  /**
   * Stroke color of `Presence indicator` & `Status indicator` in `Avatar`
   */
  strokeColor?: string;
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
    presence,
    status,
    strokeColor,
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

  const darkAppearance = ['secondary', 'success', 'warning', 'accent1', 'accent4'];
  const showPresence = presence && !disabled && shape === 'round' && (presence === 'active' || presence === 'away');
  const showStatus = status && size === 'regular' && shape === 'round';

  const AvatarClassNames = classNames(
    {
      [styles.Avatar]: true,
      [styles['Avatar--square']]: shape === 'square',
      [styles[`Avatar--${size}`]]: shape !== 'square',
      [styles[`Avatar--${AvatarAppearance}`]]: AvatarAppearance,
      [styles['Avatar--noInitials']]: !initials || !withTooltip,
      [styles['Avatar--disabled']]: disabled,
      [styles['Avatar--default']]: !disabled,
    },
    className
  );

  const AvatarWrapperClassNames = classNames({
    [styles['Avatar-wrapper--square']]: shape === 'square',
    [styles[`Avatar--${size}`]]: shape === 'square',
  });

  const TextClassNames = classNames({
    [styles[`Avatar-content--${size}`]]: size,
    [styles['Avatar-content']]: darkAppearance.includes(AvatarAppearance),
  });

  const IconClassNames = classNames({
    [styles['Avatar-content']]: darkAppearance.includes(AvatarAppearance),
  });

  const presenceClassNames = classNames({
    [styles['Avatar-presence']]: presence,
    [styles['Avatar-presence--active']]: presence === 'active',
    [styles['Avatar-presence--away']]: presence === 'away',
  });

  const borderStyle = {
    boxShadow: `0 0 0 var(--spacing-05) ${strokeColor}`,
  };

  const sharedProp = {
    size,
    firstName,
    lastName,
    appearance: AvatarAppearance,
    darkAppearance,
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

  const renderTooltip = () => (
    <span className="position-relative d-inline-flex">
      {withTooltip && initials ? (
        <Tooltip tooltip={getTooltipName()} position={tooltipPosition} triggerClass="flex-grow-0">
          {renderAvatar()}
        </Tooltip>
      ) : (
        renderAvatar()
      )}
      {showPresence && (
        <span data-test="DesignSystem-Avatar--Presence" className={presenceClassNames} style={borderStyle} />
      )}
      {showStatus && (
        <span data-test="DesignSystem-Avatar--Status" className={styles['Avatar-status']} style={borderStyle}>
          {status}
        </span>
      )}
    </span>
  );

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
  strokeColor: 'var(--white)',
};

export default Avatar;
