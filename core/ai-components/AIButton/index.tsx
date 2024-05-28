import * as React from 'react';
import classNames from 'classnames';
import { TButtonAppearance, TButtonType, TBaseHtmlProps } from '../common.type';
import BasicIcon from './icons/Basic.svg';
import PrimaryIcon from './icons/Primary.svg';

export interface AIButtonProps extends TBaseHtmlProps<HTMLButtonElement> {
  /**
   * Defines Appearance of the `Button`
   */
  appearance?: TButtonAppearance;
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
  const { appearance, className, children, ...rest } = props;

  const buttonClassNames = classNames(
    {
      AIButton: true,
      'AIButton--primary': appearance === 'primary',
      'AIButton--basic': appearance === 'basic',
    },
    className
  );

  const IconClassNames = classNames({
    'AIButton-Icon': true,
  });

  const buttonIcon = appearance === 'primary' ? PrimaryIcon : BasicIcon;

  return (
    <button className={buttonClassNames} data-test="DesignSystem-AI-Button" {...rest}>
      <img
        src={buttonIcon}
        alt="Button Icon"
        width={16}
        height={16}
        className={IconClassNames}
        data-test="DesignSystem-AI-Button-Icon"
      />
      {children}
    </button>
  );
};

AIButton.defaultProps = {
  appearance: 'basic',
  type: 'button',
};

export default AIButton;
