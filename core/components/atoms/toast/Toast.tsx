import * as React from 'react';
import classNames from 'classnames';
import Heading from '@/components/atoms/heading';
import Text from '@/components/atoms/text';
import Icon from '@/components/atoms/icon';
import ActionButton from './ActionButton';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { MessageAppearance } from '@/common.type';

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
}

export const Toast = (props: ToastProps) => {
  const { appearance = 'default', title, message, actions, onClose, className } = props;

  const baseProps = extractBaseProps(props);

  const wrapperClass = classNames(
    {
      ['Toast']: true,
      ['Toast--withMessage']: message,
      [`Toast--${appearance}`]: appearance,
    },
    className
  );

  const IconMapping: Record<string, any> = {
    info: 'info',
    success: 'check_circle',
    alert: 'error',
    warning: 'error',
  };

  const icon = IconMapping[appearance];

  const titleClass = classNames({
    ['Toast-title']: true,
    ['Toast-title--withMessage']: message,
  });

  const iconClass = (align: string) =>
    classNames({
      ['Toast-icon']: true,
      [`Toast-icon--${align}`]: align,
      [`Toast-icon--${appearance}`]: appearance,
    });

  const textClass = classNames({
    ['Toast-text']: true,
    [`Toast-text--${appearance}`]: appearance,
  });

  const headingClass = classNames({
    ['Toast-heading']: true,
    [`Toast-heading--${appearance}`]: appearance,
  });

  const onCloseHandler = () => {
    if (onClose) onClose();
  };

  return (
    <div {...baseProps} className={wrapperClass}>
      {icon && <Icon name={icon} className={iconClass('left')} />}
      <div className="Toast-body">
        <div className={titleClass}>
          <Heading size="s" className={headingClass} appearance={appearance !== 'warning' ? 'white' : 'default'}>
            {title}
          </Heading>
          <Icon
            name={'close'}
            className={iconClass('right')}
            onClick={onCloseHandler}
            appearance={appearance !== 'warning' ? 'white' : 'default'}
          />
        </div>
        {message && (
          <Text appearance={appearance !== 'warning' ? 'white' : 'default'} className={textClass}>
            {message}
          </Text>
        )}
        {!!actions?.length && (
          <div className="Toast-actions">
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

export default Toast;
