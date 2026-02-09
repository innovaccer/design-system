import * as React from 'react';
import { TSaraStates, TBaseHtmlProps } from '../common.type';
import { useAccessibilityProps } from '@/accessibility/utils';
import { Player } from '@lottiefiles/react-lottie-player';
import AIResting from './assets/AI-Resting.json';
import AILogo from './assets/AI-Sara.svg';
import classNames from 'classnames';

export interface SaraProps extends TBaseHtmlProps<HTMLDivElement> {
  /**
   * Defines size of `Sara`
   */
  size?: number;
  /**
   * Defines state of `Sara`
   */
  state?: TSaraStates;
  /**
   * Specify alt text to the `Sara` for `default` state
   */
  alt?: string;
  /**
   * Handler to be called when `Sara` is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /**
   * Adds custom class
   */
  className?: string;
  /**
   * Stores custom testing data private to the component
   */
  'data-test'?: string;
}

export const Sara = (props: SaraProps) => {
  const { size, state, alt, className, onClick, onKeyDown, tabIndex, role, ...rest } = props;
  const isInteractive = typeof onClick === 'function';
  const hasAlt = typeof alt === 'string' && alt.trim().length > 0;
  const ariaLabel = hasAlt ? alt : undefined;
  const fallbackLabel = 'Sara';

  const accessibilityProps = isInteractive
    ? useAccessibilityProps({
        onClick,
        onKeyDown,
        role: role ?? 'button',
        tabIndex,
        'aria-label': ariaLabel ?? fallbackLabel,
      })
    : {
        ...(role ? { role } : ariaLabel ? { role: 'img' } : {}),
        ...(ariaLabel ? { 'aria-label': ariaLabel } : { 'aria-hidden': true }),
        ...(tabIndex !== undefined ? { tabIndex } : {}),
      };

  const SaraClassNames = classNames(
    {
      'align-bottom': state === 'default',
    },
    className
  );

  if (state === 'default') {
    const isDecorativeImage = isInteractive || !!ariaLabel;

    return (
      <div data-test="DesignSystem-AI-Sara" {...rest} {...accessibilityProps}>
        <img
          src={AILogo}
          alt={isDecorativeImage ? '' : ariaLabel}
          aria-hidden={isDecorativeImage}
          width={size}
          height={size}
          className={SaraClassNames}
        />
      </div>
    );
  }

  return (
    <div data-test="DesignSystem-AI-Sara" className={className} {...rest} {...accessibilityProps}>
      <Player autoplay={true} loop src={AIResting} style={{ height: size, width: size }} aria-hidden="true" />
    </div>
  );
};

Sara.defaultProps = {
  size: 32,
  state: 'default',
};

export default Sara;
