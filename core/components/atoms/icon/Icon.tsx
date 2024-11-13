import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { useAccessibilityProps } from '@/accessibility/utils';
import iconStyles from '@css/components/icon.module.css';

export type IconAppearance =
  | 'default'
  | 'destructive'
  | 'white'
  | 'subtle'
  | 'disabled'
  | 'info'
  | 'alert'
  | 'warning'
  | 'success'
  | 'primary_lighter'
  | 'primary'
  | 'primary_dark'
  | 'primary_darker'
  | 'alert_lighter'
  | 'alert_dark'
  | 'alert_darker'
  | 'warning_lighter'
  | 'warning_dark'
  | 'warning_darker'
  | 'success_lighter'
  | 'success_dark'
  | 'success_darker'
  | 'accent1'
  | 'accent1_lighter'
  | 'accent1_dark'
  | 'accent1_darker'
  | 'accent2'
  | 'accent2_lighter'
  | 'accent2_dark'
  | 'accent2_darker'
  | 'accent3'
  | 'accent3_lighter'
  | 'accent3_dark'
  | 'accent3_darker'
  | 'accent4'
  | 'accent4_lighter'
  | 'accent4_dark'
  | 'accent4_darker'
  | 'inverse';

export type IconType = 'filled' | 'outlined' | 'outline' | 'rounded' | 'round' | 'two-tone' | 'sharp'; // 'outline', 'rounded' to be deprecated soon.

export interface IconProps extends BaseProps {
  /**
   * Material icon name
   */
  name?: string;
  /**
   * Size of `Icon`
   */
  size: number;
  /**
   * Type of material `Icon`
   *
   * ** ` 'filled' | 'outline' | 'round' | 'two-tone' | 'sharp'` is deprecated**
   */
  type?: IconType;
  /**
   * Color of `Icon`
   *
   * ** 'info' appearance is deprecated. **
   */
  appearance?: IconAppearance;
  /**
   * Handler to be called when icon is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  /**
   * Handler to be called when key is pressed on icon
   */
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
  /**
   * DOM node to be passed as child to the component
   */
  children?: React.ReactNode;
  /**
   * The tabindex global attribute indicates that its element can be focused, and
   * where it participates in sequential keyboard navigation.
   */
  tabIndex?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>['tabIndex'];
}

const iconTypeMapper: Record<string, string> = {
  timelapse: 'outlined',
  content_copy: 'outlined',
  speed: 'outlined',
  add_circle_outline: 'outlined',
  turned_in_not: 'outlined',
  important_devices: 'outlined',
  thumb_down_off_alt: 'outlined',
  alarm_on: 'outlined',
  calendar_view_month: 'outlined',
  aspect_ratio: 'outlined',
  change_history: 'outlined',
  arrow_circle_down: 'outlined',
  card_membership: 'outlined',
  query_builder: 'outlined',
  copyright: 'outlined',
  arrow_circle_up: 'outlined',
  alarm: 'outlined',
  work_outline: 'outlined',
  bookmark_border: 'outlined',
  delete_outline: 'outlined',
  credit_card: 'outlined',
  highlight_of: 'outlined',
  check_circle_outline: 'outlined',
  help_outline: 'outlined',
  schedule: 'outlined',
  radio_button_unchecked: 'outlined',
  radio_button_checked: 'outlined',
  delete: 'outlined',
};

/**
 *
 * <pre class="DocPage-codeBlock mx-6 mb-7">
 *  Following Icons are mapped to **outlined** type by default:
 *  <br />
 *  timelapse,  content_copy,  speed,  add_circle_outline,  turned_in_not,  important_devices,  thumb_down_off_alt,  alarm_on,  calendar_view_month,  aspect_ratio,  change_history,  arrow_circle_down,  card_membership,  query_builder,  copyright,  arrow_circle_up,  alarm,  work_outline,  bookmark_border,  delete_outline,  credit_card,  highlight_of,  check_circle_outline, help_outline,  schedule,  radio_button_unchecked,  radio_button_checked,  delete
 * </pre>
 */

export const Icon = (props: IconProps) => {
  const { appearance, className, name, size, children } = props;
  const accessibilityProps = useAccessibilityProps(props);

  const baseProps = extractBaseProps(props);

  const mapper: Record<string, string> = {
    outline: 'outlined',
    sharp: 'outlined',
    round: 'rounded',
    filled: 'rounded',
    'two-tone': 'rounded',
  };

  const type = (props.type && mapper[props.type]) || props.type || (name && iconTypeMapper[name]) || 'rounded';

  const getIconAppearance = (iconColor: string) => {
    const x = iconColor.indexOf('_');
    return iconColor.slice(0, x) + iconColor.charAt(x + 1).toUpperCase() + iconColor.slice(x + 2);
  };

  const color = appearance && appearance.includes('_') ? getIconAppearance(appearance) : appearance;

  const iconClass = classNames({
    ['material-symbols']: true,
    ['material-symbols-rounded']: type === 'rounded',
    ['material-symbols-outlined']: type === 'outlined',
    [iconStyles['Icon']]: true,
    [iconStyles[`Icon--${color}`]]: appearance,
    [`${className}`]: className,
  });

  const styles = {
    fontSize: `${size}px`,
    width: `${size}px`,
  };

  // change `children` to {name} after migration
  if (children && React.isValidElement(children)) {
    return (
      <span {...baseProps} className={className}>
        {children}
      </span>
    );
  }
  return (
    <i data-test="DesignSystem-Icon" {...baseProps} className={iconClass} style={styles} {...accessibilityProps}>
      {name}
    </i>
  );
};

Icon.displayName = 'Icon';
Icon.defaultProps = {
  size: 16,
};

export default Icon;
