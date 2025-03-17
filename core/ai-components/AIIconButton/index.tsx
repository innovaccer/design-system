import * as React from 'react';
import classNames from 'classnames';
import { TIconPosition, TButtonType, TSize2Hierarchy, TBaseHtmlProps } from '../common.type';
import { Tooltip } from '@/index';
import SaraIcon from './SaraIcon';
import styles from '@css/ai-components/iconButton.module.css';

export interface AIIconButtonProps extends Omit<TBaseHtmlProps<HTMLButtonElement>, 'size'> {
  /**
   * Name of the Icon
   */
  icon?: string;
  /**
   * Defines size of Icon
   */
  size?: TSize2Hierarchy;
  /**
   * Defines position of AI Icon
   */
  position?: TIconPosition;
  /**
   * Type of `IconButton`
   */
  type?: TButtonType;
  /**
   * Add tooltip to the `IconButton`
   */
  tooltip?: string;
  /**
   * Disables the `IconButton`
   */
  disabled?: boolean;
  /**
   * Specifies tab index of `IconButton`
   */
  tabIndex?: number;
  /**
   * Defines stroke color of the `IconButton`
   */
  strokeColor?: string;
  /**
   * Handler to be called when `IconButton` is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Handler to be called when mouse pointer enters `IconButton`.
   */
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Handler to be called when mouse pointer leaves `IconButton`.
   */
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Stores custom testing data private to the component.
   */
  'data-test'?: string;
  /**
   * Adds className to `IconButton`
   */
  className?: string;
}

export const AIIconButton = (props: AIIconButtonProps) => {
  const { icon, position, className, size, strokeColor, tooltip, disabled, ...rest } = props;

  const buttonClassNames = classNames(
    {
      [styles.AIIconButton]: true,
      [styles['AIIconButton--regular']]: size === 'regular',
      [styles['AIIconButton--large']]: size === 'large',
    },
    className
  );

  const IconClassNames = classNames({
    [styles['AIIconButton-icon']]: true,
    ['material-symbols']: true,
    ['material-symbols-rounded']: true,
  });

  const sizeMapping = {
    regular: 16,
    large: 20,
  };

  const iconStyles = {
    fontSize: `${sizeMapping[size!]}px`,
    width: `${sizeMapping[size!]}px`,
    height: `${sizeMapping[size!]}px`,
    color: disabled ? '#A6A6A6' : 'rgb(0, 0, 0)',
  };

  const saraIconProps = {
    disabled,
    size,
    position,
  };

  return (
    <Tooltip tooltip={tooltip} showTooltip={!!tooltip && !disabled}>
      <button
        className={buttonClassNames}
        data-test="DesignSystem-AI-IconButton"
        disabled={disabled}
        {...rest}
        style={{ color: strokeColor }}
      >
        <i data-test="DesignSystem-Icon" className={IconClassNames} style={iconStyles}>
          {icon}
        </i>
        <SaraIcon {...saraIconProps} />
      </button>
    </Tooltip>
  );
};

AIIconButton.defaultProps = {
  size: 'regular',
  position: 'top',
  strokeColor: '#fff',
};

export default AIIconButton;
