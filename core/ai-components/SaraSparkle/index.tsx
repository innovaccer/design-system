import * as React from 'react';
import { TSaraSparkleStates, TBaseHtmlProps } from '../common.type';
import { useAccessibilityProps } from '@/accessibility/utils';
import { Player } from '@lottiefiles/react-lottie-player';
import AIIcon from './assets/AI-Icon.svg';
import Listening from './assets/AI-Listening.json';
import AIProcessingLong from './assets/AI-Processing-Long.json';
import AIProcessingShort from './assets/AI-Processing.json';
import classNames from 'classnames';

export interface SaraSparkleProps extends TBaseHtmlProps<HTMLDivElement> {
  /**
   * Defines size of `SaraSparkle`
   */
  size?: number;
  /**
   * Defines state for the `SaraSparkle`
   */
  state?: TSaraSparkleStates;
  /**
   * Specify alt text to the `SaraSparkle` for `default` state
   */
  alt?: string;
  /**
   * Handler to be called when `SaraSparkle` is clicked
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

export const SaraSparkle = (props: SaraSparkleProps) => {
  const { size, state, alt, className, onClick, onKeyDown, tabIndex, role, ...rest } = props;
  const isInteractive = typeof onClick === 'function';
  const hasAlt = typeof alt === 'string' && alt.trim().length > 0;
  const ariaLabel = hasAlt ? alt : undefined;
  const fallbackLabel = 'Sara Sparkle';

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

  const stateMapping: Record<string, TSaraSparkleStates> = {
    listening: Listening,
    'short-processing': AIProcessingShort,
    'long-processing': AIProcessingLong,
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
      <div data-test="DesignSystem-AI-Sara-Sparkle" {...rest} {...accessibilityProps}>
        <img
          src={AIIcon}
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
    <div data-test="DesignSystem-AI-Sara-Sparkle" className={className} {...rest} {...accessibilityProps}>
      <Player
        autoplay
        loop
        src={(state && stateMapping[state]) || Listening}
        style={{ height: size, width: size }}
        aria-hidden="true"
      />
    </div>
  );
};

SaraSparkle.defaultProps = {
  size: 24,
  state: 'default',
};

export default SaraSparkle;
