import * as React from 'react';
import { Text, Icon } from '@/index';
import classNames from 'classnames';
import AvatarContext from '../AvatarContext';
import { BaseProps, extractBaseProps } from '@/utils/types';

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

export const AvatarImage = (props: AvatarImageProps) => {
  const { children, src, className } = props;
  const [error, setError] = React.useState(false);
  const contextProp = React.useContext(AvatarContext);
  const { size, appearance, firstName, lastName } = contextProp;

  const baseProps = extractBaseProps(props);

  const initials = `${firstName ? firstName.trim()[0] : ''}${lastName ? lastName.trim()[0] : ''}`;
  const imgSize = size === 'regular' ? 32 : 24;

  const ContentClass = classNames({
    [`Avatar-content--${size}`]: size,
    [`Avatar-content--${appearance}`]: appearance,
  });

  const IconClass = classNames({
    [`Avatar-content--${appearance}`]: appearance,
  });

  const imgClass = classNames(
    {
      ['Avatar-image']: true,
    },
    className
  );

  const onError = () => {
    setError(true);
  };

  if (children) {
    return <>{children}</>;
  }

  if (error) {
    if (initials) {
      return (
        <Text weight="medium" appearance={'white'} className={ContentClass} {...baseProps}>
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
        className={IconClass}
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
      className={imgClass}
    />
  );
};

export default AvatarImage;
