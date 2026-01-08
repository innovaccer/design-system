import * as React from 'react';
import { Text, Icon } from '@/index';
import classNames from 'classnames';
import { AvatarContext } from '../AvatarProvider';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { iconAppearanceMapper } from '../constants';
import { IconAppearance } from '@/common.type';

import styles from '@css/components/avatar.module.css';

export type AvatarImageProps = {
  /**
   * Provide svg to be rendered
   */
  children?: React.ReactNode;
  /**
   * Provide src of image
   */
  src?: string;
} & BaseProps;

const sizeMapper: Record<string, number> = {
  regular: 32,
  tiny: 24,
  micro: 20,
};

export const AvatarImage = (props: AvatarImageProps) => {
  const { children, src } = props;
  const [error, setError] = React.useState(false);
  const contextProp = React.useContext(AvatarContext);
  const { size, appearance, firstName, lastName, darkAppearance } = contextProp;

  const baseProps = extractBaseProps(props);

  const initials = `${firstName ? firstName.trim()[0] : ''}${lastName ? lastName.trim()[0] : ''}`;
  const imgSize = size && sizeMapper[size];
  const avatarAppearance = appearance || 'secondary';

  const TextClassNames = classNames({
    [styles[`Avatar-content--${size}`]]: size,
    [styles[`Avatar-content--${avatarAppearance}`]]: avatarAppearance,
  });

  const IconClassNames = classNames({
    [styles['Avatar-content']]: avatarAppearance && darkAppearance.includes(avatarAppearance),
  });

  const iconAppearance = (iconAppearanceMapper[avatarAppearance] as IconAppearance) || 'inverse';

  const onError = () => {
    setError(true);
  };

  if (children) {
    return <>{children}</>;
  }

  if (error) {
    if (initials) {
      return (
        <Text weight="medium" className={TextClassNames} {...baseProps}>
          {initials}
        </Text>
      );
    }

    return (
      <Icon
        data-test="DesignSystem-Avatar--Icon"
        name="person"
        size={size === 'regular' ? 20 : 16}
        appearance={iconAppearance}
        className={IconClassNames}
      />
    );
  }

  return (
    <img
      data-test="DesignSystem-Image"
      src={src}
      alt={firstName}
      {...baseProps}
      height={imgSize}
      width={imgSize}
      onError={onError}
    />
  );
};

export default AvatarImage;
