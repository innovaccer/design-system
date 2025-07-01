import * as React from 'react';
import { IconProps } from '@/index.type';
import { Icon, Text } from '@/index';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

type IconPosition = 'left' | 'right';

export interface KeyElementProps extends BaseProps {
  /**
   * React Element to be added inside `KeyElement`
   */
  children?: React.ReactNode;
  /**
   * Specify label to be displayed in `KeyElement`
   */
  label?: string | number;
  /**
   * Specify Icon name to displayed in `KeyElement`
   */
  icon?: string;
  /**
   * List of icon options
   *
   * <pre className="DocPage-codeBlock">
   *  IconProps: {
   *    name?: string;
   *    size: number;
   *    type?: 'rounded' | 'outlined';
   *    appearance?: IconAppearance;
   *    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
   *    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
   *    children?: React.ReactNode;
   *    tabIndex?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>['tabIndex'];
   *  }
   * </pre>
   */
  iconOptions?: IconProps;
  /**
   * Align icon left or right
   */
  iconAlign?: IconPosition;
}

export const KeyElement = (props: KeyElementProps) => {
  const { children, icon, iconOptions, iconAlign, label, className } = props;

  const baseProps = extractBaseProps(props);

  const iconClassNames = classNames('py-2', {
    'mr-3': iconAlign === 'left',
    'ml-3': iconAlign === 'right',
  });

  const keyClassNames = classNames('d-flex', 'align-items-center', className);

  if (children) {
    return (
      <dt data-test="DesignSystem-KeyValuePair-KeyElement" {...baseProps}>
        {children}
      </dt>
    );
  }

  return (
    <dt data-test="DesignSystem-KeyValuePair-KeyElement" {...baseProps} className={keyClassNames}>
      {icon && iconAlign === 'left' && (
        <Icon
          appearance="subtle"
          name={icon}
          className={iconClassNames}
          data-test="DesignSystem-KeyValuePair-Icon--Left"
          {...iconOptions}
        />
      )}
      {label && (
        <Text weight="medium" appearance="subtle">
          {label}
        </Text>
      )}
      {icon && iconAlign === 'right' && (
        <Icon
          appearance="subtle"
          name={icon}
          className={iconClassNames}
          data-test="DesignSystem-KeyValuePair-Icon--Right"
          {...iconOptions}
        />
      )}
    </dt>
  );
};

KeyElement.defaultProps = {
  iconAlign: 'left',
};

export default KeyElement;
