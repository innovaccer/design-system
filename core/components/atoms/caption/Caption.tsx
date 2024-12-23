import * as React from 'react';
import Text from '@/components/atoms/text';
import Icon from '@/components/atoms/icon';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/caption.module.css';

export interface CaptionProps extends BaseProps {
  /**
   * Text to be rendered
   */
  children: React.ReactNode;
  /**
   * Shows error state in case of failed validation
   */
  error?: boolean;
  /**
   * Makes `Caption` component invisible
   */
  hide?: boolean;
  /**
   * Adds default top margin of 4px
   */
  withInput?: boolean;
}

export const Caption = (props: CaptionProps) => {
  const { error, hide, withInput, children, className } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      [styles.Caption]: true,
      [styles['Caption--hidden']]: hide,
      [styles['Caption--withInput']]: withInput,
    },
    className
  );

  const errorIconClass = classNames({
    [styles['Caption-icon']]: true,
  });

  return (
    <div {...baseProps} className={classes} data-test="DesignSystem-Caption">
      {error && (
        <div className={errorIconClass}>
          <Icon size={14} name={'error'} appearance={'alert'} />
        </div>
      )}
      <Text appearance={error ? 'destructive' : 'subtle'} size="small" weight="medium">{`${children}`}</Text>
    </div>
  );
};

Caption.displayName = 'Caption';

export default Caption;
