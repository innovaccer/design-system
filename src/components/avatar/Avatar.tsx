import * as React from 'react';
import classNames from 'classnames';
import { Text, Icon } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { AccentAppearance } from '@/common.type';
import { checkIfImageExists } from '@/utils/validators';

export type AvatarSize = 'regular' | 'tiny';
export interface AvatarProps extends BaseProps {
  /**
   * Color of the `Avatar`
   */
  appearance?: AccentAppearance;
  /**
   * Text to show in `Avatar`
   */
  text?: string;
  /**
   * Icon to show in `Avatar`
   */
  icon?: string;

  image?: {
    /**
     * Image url to show in `Avatar`
     */
    src: string;
    /**
     * Image alt text to show in `Avatar`
     */
    altText: string;
  };
  /**
   * Tooltip text to show in `Avatar`
   */
  tooltip?: string;
  /**
   * To set size of the `Avatar`
   */
  size: AvatarSize;
}

export const Avatar = (props: AvatarProps) => {
  const { size, className, appearance, icon, text, tooltip, image, ...rest } = props;

  // To check if the image src loads a valid image
  const [isValidImage, setValidImage] = React.useState<boolean>(false);
  React.useEffect(() => checkIfImageExists(image?.src ? image.src : '', setValidImage), [image]);

  const baseProps = extractBaseProps(props);

  const defaultAppearance = 'secondary';

  const colors = ['accent4', 'primary', 'accent3', 'alert', 'accent2', 'warning', 'accent1', 'success'];

  const avatarAppearance =
    appearance || (text && colors[(text.charCodeAt(0) + (text.charCodeAt(1) || 0)) % 8]) || defaultAppearance;

  const classes = classNames(
    {
      Avatar: true,
      [`Avatar--${size}`]: size,
      [`Avatar--${avatarAppearance}`]: avatarAppearance,
      ['Avatar--disabled']: !text || !image?.src || !icon,
      ['overflow-hidden']: !text,
    },
    className
  );

  const contentClass = classNames({
    [`Avatar-content--${size}`]: size,
    [`Avatar-content--${avatarAppearance}`]: avatarAppearance,
  });

  const iconClass = classNames({
    [`Avatar-content--${avatarAppearance}`]: avatarAppearance,
  });

  const imageDimensions = {
    width: `${size === 'regular' ? 32 : 24}px`,
    height: `${size === 'regular' ? 32 : 24}px`,
  };

  return (
    <span title={tooltip} data-test="DesignSystem-Avatar" {...baseProps} {...rest} className={classes}>
      {text && (
        <Text weight="medium" appearance={'white'} className={contentClass}>
          {text}
        </Text>
      )}
      {icon && (
        <Icon
          data-test="DesignSystem-Avatar--Icon"
          name={icon}
          size={size === 'regular' ? 16 : 12}
          appearance={'white'}
          className={iconClass}
        />
      )}
      {image && isValidImage ? (
        <img data-test="DesignSystem-Avatar--Image" src={image?.src} alt={image.altText} {...imageDimensions} />
      ) : (
        image?.altText.charAt(0)
      )}
      {!text && !isValidImage && !image?.altText && !icon && (
        <Icon
          data-test="DesignSystem-Avatar--Icon"
          name="person"
          size={size === 'regular' ? 16 : 12}
          appearance={'white'}
          className={iconClass}
        />
      )}
    </span>
  );
};

Avatar.displayName = 'Avatar';
Avatar.defaultProps = {
  size: 'regular',
};

export default Avatar;