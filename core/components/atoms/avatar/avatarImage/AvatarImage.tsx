import * as React from 'react';
import { Text, Icon } from '@/index';
import classNames from 'classnames';
import { AvatarContext } from '../AvatarProvider';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/avatar.module.css';

export interface AvatarImageProps extends BaseProps {
  /**
   * Provide svg to be rendered
   */
  children?: React.ReactNode;
  /**
   * Provide src of image
   */
  src?: string;
}

const sizeMapper: Record<string, number> = {
  regular: 32,
  tiny: 24,
};

export const AvatarImage = (props: AvatarImageProps) => {
  const { children, src } = props;
  const [error, setError] = React.useState(false);
  const contextProp = React.useContext(AvatarContext);
  const { size, appearance, firstName, lastName, darkAppearance } = contextProp;

  const baseProps = extractBaseProps(props);

  const initials = `${firstName ? firstName.trim()[0] : ''}${lastName ? lastName.trim()[0] : ''}`;
  const imgSize = size && sizeMapper[size];

  const TextClassNames = classNames({
    [styles[`Avatar-content--${size}`]]: size,
    [styles['Avatar-content']]: appearance && darkAppearance.includes(appearance),
  });

  const IconClassNames = classNames({
    [styles['Avatar-content']]: appearance && darkAppearance.includes(appearance),
  });

  const onError = () => {
    setError(true);
  };

  if (children) {
    return <>{children}</>;
  }

  if (error) {
    if (initials) {
      return (
        <Text weight="medium" appearance={'white'} className={TextClassNames} {...baseProps}>
          {initials}
        </Text>
      );
    }

    return (
      <Icon
        data-test="DesignSystem-Avatar--Icon"
        name="person"
        size={size === 'regular' ? 20 : 16}
        appearance="white"
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
