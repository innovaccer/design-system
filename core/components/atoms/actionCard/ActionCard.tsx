import * as React from 'react';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import classNames from 'classnames';
import styles from '@css/components/actionCard.module.css';

export interface ActionCardProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
  /**
   * Element to be rendered inside card
   */
  children: React.ReactNode;
  /**
   * Disables the Action Card
   */
  disabled?: boolean;
  /**
   * Describe z-index for overlay in disabled state
   */
  zIndex?: number;
  /**
   * Handler to be called when Action card is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent) => void;
}

export const ActionCard = (props: ActionCardProps) => {
  const { children, disabled, className, zIndex, onClick, ...rest } = props;

  const classes = classNames(
    {
      [styles['ActionCard']]: true,
      [styles['ActionCard--default']]: !disabled,
      [styles['ActionCard--disabled']]: disabled,
    },
    className
  );

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && onClick && !disabled) {
      onClick(event);
    }
  };

  const onClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  return (
    <div
      tabIndex={disabled ? -1 : 0}
      role="link"
      data-test="DesignSystem-ActionCard"
      className={classes}
      onClick={onClickHandler}
      onKeyDown={onKeyDownHandler}
      {...rest}
    >
      {disabled && (
        <div
          style={{ zIndex }}
          data-test="DesignSystem-ActionCard-Overlay"
          className={styles['ActionCard-overlay--disabled']}
        />
      )}
      {children}
    </div>
  );
};

ActionCard.displayName = 'ActionCard';

export default ActionCard;
