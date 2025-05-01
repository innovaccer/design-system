import * as React from 'react';
import classNames from 'classnames';
import { TButtonAppearance, TButtonType, TBaseHtmlProps } from '../common.type';
import AISparkle from './icons/AISparkle.svg';
import styles from '@css/ai-components/button.module.css';

export interface AIButtonProps extends TBaseHtmlProps<HTMLButtonElement> {
  /**
   * Defines Appearance of the `Button`
   */
  appearance?: TButtonAppearance;
  /**
   * Specifies if the `Button` should have a sparkle icon
   */
  withSparkle?: boolean;
  /**
   * Type of `Button`
   */
  type?: TButtonType;
  /**
   * Disables the `Button`
   */
  disabled?: boolean;
  /**
   * Pass children to `Button`
   */
  children?: string;
  /**
   * Specifies tab index of `Button`
   */
  tabIndex?: number;
  /**
   * Handler to be called when `Button` is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Handler to be called when mouse pointer enters `Button`.
   */
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Handler to be called when mouse pointer leaves `Button`.
   */
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Stores custom testing data private to the component.
   */
  'data-test'?: string;
  /**
   * Adds className to `Button`
   */
  className?: string;
}

export const AIButton = (props: AIButtonProps) => {
  const { appearance, className, children, disabled, withSparkle, ...rest } = props;

  const buttonClassNames = classNames(
    {
      [styles.AIButton]: true,
    },
    className
  );

  const IconClassNames = classNames({
    [styles['AIButton-Icon']]: true,
  });

  return (
    <button className={buttonClassNames} data-test="DesignSystem-AI-Button" disabled={disabled} {...rest}>
      {withSparkle && (
        <img
          src={AISparkle}
          alt="Button Icon"
          width={16}
          height={16}
          className={IconClassNames}
          data-test="DesignSystem-AI-Button-Icon"
        />
      )}
      {children}
    </button>
  );
};

AIButton.defaultProps = {
  type: 'button',
  withSparkle: true,
};

export default AIButton;
