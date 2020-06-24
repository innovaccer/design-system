import * as React from 'react';
import Text from '@/components/atoms/text';
import Icon from '@/components/atoms/icon';
import classNames from 'classnames';

export interface CaptionProps {
  /**
   * Text to be rendered
   * @type {React.ReactNode}
   */
  children: React.ReactNode;
  /**
   * Shows error state in case of failed validation
   * @default false
   */
  error?: boolean;
  /**
   * Adds classname to `Caption` component
   */
  className?: string;
}

export const Caption = (props: CaptionProps) => {
  const {
    error = false,
    children,
    className,
  } = props;

  const classes = classNames({
    Caption: true,
    [`${className}`]: className
  });

  const errorIconClass = classNames({
    ['Caption-icon']: true,
    ['Caption-icon--error']: true
  });

  return (
    <div className={classes}>
      {error && (
        <div className={errorIconClass}>
          <Icon name={'error'} appearance={'alert'}/>
        </div>
      )}
      <Text appearance={error ? 'destructive' : 'subtle'} small={true} weight="medium">{`${children}`}</Text>
    </div>
  );
};

Caption.displayName = 'Caption';

export default Caption;
