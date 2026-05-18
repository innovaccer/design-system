import * as React from 'react';
import classNames from 'classnames';
import Heading from '@/components/atoms/heading';
import Text from '@/components/atoms/text';
import Icon from '@/components/atoms/icon';
import Button from '@/components/atoms/button';
import ActionButton from './ActionButton';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { MessageAppearance } from '@/common.type';
import styles from '@css/components/toast.module.css';

export type Action = {
  /**
   * Label of `ActionButton`
   */
  label: string;
  /**
   * Click Handler
   */
  onClick: (e: React.MouseEvent) => void;
};

export interface ToastProps extends BaseProps {
  /**
   * Title of `Toast`
   */
  title: string;
  /**
   * Color of the `Toast`
   *
   * ** `'default'` has been deprecated, backward compatibility supported**
   *
   * @default "info"
   */
  appearance: MessageAppearance;
  /**
   * Message to be rendered inside `Toast`
   */
  message?: string;
  /**
   * Array for `ActionButton`**(maxLen: 2)**
   *
   * <pre className="DocPage-codeBlock">
   * Action: {
   *    label: string,
   *    onClick: (e: React.MouseEvent) => void
   * }
   * </pre>
   */
  actions?: Action[];
  /**
   * Callback for `Toast` close event
   */
  onClose?: () => void;
  /**
   * Accessible label for the toast live region announced by screen readers
   */
  'aria-label'?: string;
  /**
   * Controls whether the entire live region is read as a whole when its content changes
   * @default "true"
   */
  'aria-atomic'?: 'true' | 'false' | boolean;
  /**
   * HTML id for the toast element — use to create stable references from other elements
   */
  id?: string;
}

export const Toast = (props: ToastProps) => {
  const { title, message, actions, onClose, className, 'aria-label': ariaLabel, 'aria-atomic': ariaAtomic, id } = props;
  let { appearance } = props;
  appearance = appearance === 'default' ? 'info' : appearance;

  const baseProps = extractBaseProps(props);

  const wrapperClass = classNames(
    {
      [styles.Toast]: true,
      [styles['Toast--withMessage']]: message,
      [styles[`Toast--${appearance}`]]: appearance,
    },
    className
  );

  const IconMapping: Record<string, any> = {
    info: 'info',
    success: 'check_circle',
    alert: 'error',
    warning: 'warning',
  };

  const icon = IconMapping[appearance];

  const titleClass = classNames({
    [styles['Toast-title']]: true,
    [styles['Toast-title--withMessage']]: message,
  });

  const iconClass = (align: string) =>
    classNames({
      [styles['Toast-icon']]: true,
      [styles[`Toast-icon--${align}`]]: align,
      [styles[`Toast-icon--${appearance}`]]: appearance,
    });

  const closeButtonClass = classNames({
    [styles['Toast-icon--right']]: true,
    [styles['Toast-close-icon']]: true,
    [styles[`Toast-close-icon--${appearance}`]]: appearance,
    [styles[`Toast-icon--${appearance}`]]: appearance,
  });

  const textClass = classNames({
    [styles['Toast-text']]: true,
    [styles[`Toast-text--${appearance}`]]: appearance,
  });

  const headingClass = classNames({
    [styles['Toast-heading']]: true,
    [styles[`Toast-heading--${appearance}`]]: appearance,
  });

  return (
    <div
      {...baseProps}
      id={id}
      className={wrapperClass}
      role={appearance === 'alert' || appearance === 'warning' ? 'alert' : 'status'}
      aria-live={appearance === 'alert' || appearance === 'warning' ? 'assertive' : 'polite'}
      aria-label={ariaLabel}
      aria-atomic={ariaAtomic}
    >
      {icon && <Icon name={icon} className={iconClass('left')} aria-hidden="true" />}
      <div className={styles['Toast-body']}>
        <div className={titleClass}>
          <Heading
            size="s"
            className={headingClass}
            appearance={appearance !== 'warning' ? 'white' : 'default'}
            as="span"
          >
            {title}
          </Heading>
          {onClose && (
            <Button
              appearance="transparent"
              icon="close"
              aria-label="Close"
              onClick={onClose}
              data-test="DesignSystem-Toast--CloseButton"
              className={closeButtonClass}
            />
          )}
        </div>
        {message && (
          <Text appearance={appearance !== 'warning' ? 'white' : 'default'} className={textClass}>
            {message}
          </Text>
        )}
        {!!actions?.length && (
          <div className={styles['Toast-actions']}>
            {actions.slice(0, 2).map((action, index) => (
              <ActionButton key={index} label={action!.label} appearance={appearance} onClick={action!.onClick} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

Toast.displayName = 'Toast';
Toast.defaultProps = {
  appearance: 'info',
};

export default Toast;
