import * as React from 'react';
import classNames from 'classnames';
import { Text, Tooltip, Icon } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { TooltipProps } from '@/index.type';
import { AccentAppearance } from '@/common.type';

export type AvatarSize = 'regular' | 'tiny';

export interface AvatarProps extends BaseProps {
  /**
   * Color of the `Avatar`
   */
  appearance?: AccentAppearance;
  /**
   * **Only first 2 characters are rendered (SOON TO BE DEPRECATED)**
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
  /**
   * Determines if tooltip is visible
   */
  withTooltip: boolean;
  /**
   * Position to place the tooltip
   */
  tooltipPosition: TooltipProps['position'];
  /**
   * Determines size of `Avatar`
   */
  size: AvatarSize;
}

const initialsLength = 2;

export const Avatar = (props: AvatarProps) => {
  const { withTooltip, tooltipPosition, size, children, firstName, lastName, className, appearance } = props;

  const baseProps = extractBaseProps(props);

  const initials = children
    ? children.trim().slice(0, initialsLength)
    : `${firstName ? firstName.trim()[0] : ''}${lastName ? lastName.trim()[0] : ''}`;

  const tooltip = children || `${firstName || ''} ${lastName || ''}` || '';
  const DefaultAppearance = 'secondary';

  const colors = ['accent4', 'primary', 'accent3', 'alert', 'accent2', 'warning', 'accent1', 'success'];

  const AvatarAppearance =
    appearance || colors[(initials.charCodeAt(0) + (initials.charCodeAt(1) || 0)) % 8] || DefaultAppearance;

  const classes = classNames(
    {
      Avatar: true,
      [`Avatar--${size}`]: size,
      [`Avatar--${AvatarAppearance}`]: AvatarAppearance,
      ['Avatar--disabled']: !initials || !withTooltip,
    },
    className
  );

  const ContentClass = classNames({
    [`Avatar-content--${size}`]: size,
    [`Avatar-content--${AvatarAppearance}`]: AvatarAppearance,
  });

  const IconClass = classNames({
    [`Avatar-content--${AvatarAppearance}`]: AvatarAppearance,
  });

  const renderAvatar = () => {
    return (
      <span data-test="DesignSystem-Avatar" {...baseProps} className={classes}>
        {initials && (
          <Text weight="medium" appearance={'white'} className={ContentClass}>
            {initials}
          </Text>
        )}
        {!initials && (
          <Icon
            data-test="DesignSystem-Avatar--Icon"
            name="person"
            size={size === 'regular' ? 16 : 12}
            appearance={'white'}
            className={IconClass}
          />
        )}
      </span>
    );
  };

  const renderTooltip = () => {
    if (withTooltip && initials) {
      return (
        <Tooltip tooltip={tooltip} position={tooltipPosition} triggerClass={'flex-grow-0'}>
          {renderAvatar()}
        </Tooltip>
      );
    }

    return renderAvatar();
  };

  return renderTooltip();
};

Avatar.displayName = 'Avatar';
Avatar.defaultProps = {
  tooltipPosition: 'bottom',
  withTooltip: true,
  size: 'regular',
};

export default Avatar;
