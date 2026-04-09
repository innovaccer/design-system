import * as React from 'react';
import classNames from 'classnames';
import * as Keys from '@/utils/Keys';
import { formatPercentage, clamp } from './SliderUtils';
import sliderStyles from '@css/components/slider.module.css';
import tooltipStyles from '@css/components/tooltip.module.css';

export interface HandleProps {
  value: number;
  fillAfter?: boolean;
  fillBefore?: boolean;
  onChange?: (newValue: number) => void;
  onRelease?: (newValue: number) => void;
}

export interface InternalHandleProps extends HandleProps {
  disabled?: boolean;
  isCurrentLabelHovered?: boolean;
  label: string;
  ariaLabel?: string;
  max: number;
  min: number;
  stepSize: number;
  tickSize: number;
  tickSizeRatio: number;
  zIndex?: number;
}

export interface HandleState {
  isHandleMoving?: boolean;
  isHandleHovered?: boolean;
  isHandleFocused?: boolean;
}

export class Handle extends React.Component<InternalHandleProps, HandleState> {
  state = {
    isHandleMoving: false,
    isHandleHovered: false,
    isHandleFocused: false,
  };

  handleElement: HTMLElement | null = null;
  refHandlers = {
    handle: (el: HTMLDivElement) => (this.handleElement = el),
  };

  componentWillUnmount() {
    this.removeDocumentEventListeners();
  }

  componentDidUpdate(_prevProps: InternalHandleProps, prevState: HandleState) {
    if (prevState.isHandleMoving !== this.state.isHandleMoving) {
      if (this.handleElement) this.handleElement.focus();
    }
  }

  mouseEventClientOffset = (event: MouseEvent | React.MouseEvent<HTMLElement>) => {
    return event.clientX;
  };

  clientToValue = (clientPixel: number) => {
    const { tickSize, value } = this.props;
    if (this.handleElement == null) {
      return value;
    }

    const clientPixelNormalized = clientPixel;
    const { handleMidpoint, handleOffset } = this.getHandleMidpointAndOffset(this.handleElement);
    const handleCenterPixel = handleMidpoint + handleOffset;
    const pixelDelta = clientPixelNormalized - handleCenterPixel;

    if (isNaN(pixelDelta)) {
      return value;
    }

    return value + pixelDelta / tickSize;
  };

  changeValue = (newValue: number, callback = this.props.onChange, isDirectionalUpdate = false) => {
    const { stepSize, min, max, value: currentValue } = this.props;

    // Special case: if requesting exact min or max, allow it
    if (newValue === min || newValue === max) {
      const updatedValue = clamp(newValue, min, max);
      if (!isNaN(updatedValue) && currentValue !== updatedValue) {
        if (callback) callback(updatedValue);
      }
      return updatedValue;
    }

    let snapped: number;

    if (isDirectionalUpdate) {
      // Determine direction of movement
      const isIncrementing = typeof currentValue === 'number' && newValue > currentValue;

      // For directional movement (keyboard arrows), we need to find the next valid step
      // If current value is on-grid, use newValue brackets to find next step
      // If current value is off-grid, use currentValue brackets to snap to nearest in that direction
      const currentStepsFromMin = (currentValue - min) / stepSize;
      const isCurrentOnGrid = Math.abs(currentStepsFromMin - Math.round(currentStepsFromMin)) < 1e-10;

      if (isCurrentOnGrid) {
        // Current is on grid, so find the step in the direction of newValue
        const rawStepsFromMin = (newValue - min) / stepSize;
        const stepsFromMin = Math.round(rawStepsFromMin * 1e10) / 1e10;
        const lowerStep = min + Math.floor(stepsFromMin) * stepSize;
        const upperStep = min + Math.ceil(stepsFromMin) * stepSize;

        const lowerClean = Math.round(lowerStep * 1e10) / 1e10;
        const upperClean = Math.round(upperStep * 1e10) / 1e10;

        // Pick based on direction
        snapped = isIncrementing ? upperClean : lowerClean;
      } else {
        // Current is off-grid, snap to nearest valid step in movement direction
        const rawStepsFromMin = (currentValue - min) / stepSize;
        const stepsFromMin = Math.round(rawStepsFromMin * 1e10) / 1e10;
        const lowerStep = min + Math.floor(stepsFromMin) * stepSize;
        const upperStep = min + Math.ceil(stepsFromMin) * stepSize;

        const lowerClean = Math.round(lowerStep * 1e10) / 1e10;
        const upperClean = Math.round(upperStep * 1e10) / 1e10;

        // Pick the step in the movement direction
        snapped = isIncrementing ? upperClean : lowerClean;
      }
    } else {
      // For non-directional or large movement (mouse, initial value, labels, page up/down), use nearest step to newValue
      // Preserve value as-is when there is no positional change (e.g., click without drag)
      if (newValue === currentValue) return currentValue;
      const rawStepsFromMin = (newValue - min) / stepSize;
      const stepsFromMin = Math.round(rawStepsFromMin * 1e10) / 1e10;
      const lowerStep = min + Math.floor(stepsFromMin) * stepSize;
      const upperStep = min + Math.ceil(stepsFromMin) * stepSize;

      // Clean floating point artifacts and clamp to valid range
      const rawLowerClean = Math.round(lowerStep * 1e10) / 1e10;
      const rawUpperClean = Math.round(upperStep * 1e10) / 1e10;

      const lowerClean = clamp(rawLowerClean, min, max);
      const upperClean = clamp(rawUpperClean, min, max);

      // Pick nearest
      const distToLower = Math.abs(newValue - lowerClean);
      const distToUpper = Math.abs(newValue - upperClean);
      snapped = distToLower <= distToUpper ? lowerClean : upperClean;
    }

    const updatedValue = clamp(snapped, min, max);

    // Use precision-aware comparison to avoid float artifacts
    const hasChanged =
      !isNaN(updatedValue) && (typeof currentValue !== 'number' || Math.abs(updatedValue - currentValue) > 1e-10);

    if (hasChanged) {
      if (callback) callback(updatedValue);
    }
    return updatedValue;
  };

  endHandleMovement = (event: MouseEvent) => {
    const clientPixel = this.mouseEventClientOffset(event);
    const { onRelease } = this.props;

    this.removeDocumentEventListeners();
    this.setState({ isHandleMoving: false });

    const finalValue = this.changeValue(this.clientToValue(clientPixel));
    if (onRelease) onRelease(finalValue);
  };

  continueHandleMovement = (event: MouseEvent) => {
    const clientPixel = this.mouseEventClientOffset(event);
    if (this.state.isHandleMoving && !this.props.disabled) {
      const value = this.clientToValue(clientPixel);
      this.changeValue(value);
    }
  };

  beginHandleMovement = (event: MouseEvent | React.MouseEvent<HTMLElement>) => {
    if (this.props.disabled) return;
    document.addEventListener('mousemove', this.continueHandleMovement);
    document.addEventListener('mouseup', this.endHandleMovement);

    this.setState({ isHandleMoving: true });

    const value = this.clientToValue(event.clientX);
    this.changeValue(value);
  };

  handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (this.props.disabled) return;

    const { stepSize, value, min, max } = this.props;
    const { keyCode } = event;
    const largeStep = stepSize * 10;

    if (keyCode === Keys.ARROW_LEFT || keyCode === Keys.ARROW_DOWN) {
      this.changeValue(value - stepSize, this.props.onChange, true);
      event.preventDefault();
    } else if (keyCode === Keys.ARROW_RIGHT || keyCode === Keys.ARROW_UP) {
      const newValue = value + stepSize;
      // Smart stepping: if next step would overshoot max but we're close, snap to max
      if (newValue > max && max - value < stepSize) {
        this.changeValue(max, this.props.onChange, true);
      } else {
        this.changeValue(newValue, this.props.onChange, true);
      }
      event.preventDefault();
    } else if (keyCode === Keys.HOME) {
      this.changeValue(min, this.props.onChange, false);
      event.preventDefault();
    } else if (keyCode === Keys.END) {
      this.changeValue(max, this.props.onChange, false);
      event.preventDefault();
    } else if (keyCode === Keys.PAGE_DOWN) {
      this.changeValue(value - largeStep, this.props.onChange, false);
      event.preventDefault();
    } else if (keyCode === Keys.PAGE_UP) {
      const newValue = value + largeStep;
      // Smart stepping: if page up would overshoot max but we're close, snap to max
      if (newValue > max && max - value < largeStep) {
        this.changeValue(max, this.props.onChange, false);
      } else {
        this.changeValue(newValue, this.props.onChange, false);
      }
      event.preventDefault();
    }
  };

  handleKeyUp = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (this.props.disabled) return;

    const releaseKeys = [
      Keys.ARROW_LEFT,
      Keys.ARROW_RIGHT,
      Keys.ARROW_UP,
      Keys.ARROW_DOWN,
      Keys.HOME,
      Keys.END,
      Keys.PAGE_UP,
      Keys.PAGE_DOWN,
    ];
    if (releaseKeys.indexOf(event.keyCode) >= 0) {
      const { onRelease } = this.props;
      if (onRelease) onRelease(this.props.value);
    }
  };

  getHandleMidpointAndOffset = (handleElement: HTMLElement | null, useOppositeDimension = false) => {
    if (handleElement == null) {
      return { handleMidpoint: 0, handleOffset: 0 };
    }

    const handleRect = handleElement.getBoundingClientRect();
    const sizeKey = useOppositeDimension ? 'height' : 'width';
    const handleOffset = handleRect.left;

    return { handleOffset, handleMidpoint: handleRect[sizeKey] / 2 };
  };

  handleMouseOver = () => {
    this.setState({
      isHandleHovered: true,
    });
  };

  handleMouseLeave = () => {
    this.setState({
      isHandleHovered: false,
    });
  };

  handleFocus = () => {
    this.setState({
      isHandleFocused: true,
    });
  };

  handleBlur = () => {
    this.setState({
      isHandleFocused: false,
    });
  };

  render() {
    const { min, tickSizeRatio, value, disabled, label, ariaLabel, isCurrentLabelHovered } = this.props;
    const { isHandleMoving, isHandleHovered, isHandleFocused } = this.state;

    const showTootlip = isHandleMoving || isHandleHovered || isHandleFocused || isCurrentLabelHovered;

    const { handleMidpoint } = this.getHandleMidpointAndOffset(this.handleElement, true);
    const offsetRatio = (value - min) * tickSizeRatio;
    const offsetCalc = `calc(${formatPercentage(offsetRatio)} - ${handleMidpoint}px)`;
    const style = { left: offsetCalc };

    const className = classNames({
      [sliderStyles['Slider-handle']]: true,
      [sliderStyles['Slider-handle--disabled']]: disabled,
      [sliderStyles['Slider-handle--active']]: isHandleMoving,
      ['border-0']: disabled,
    });

    const TooltipClass = classNames({
      [sliderStyles['Slider-tooltip']]: true,
      [tooltipStyles['Tooltip']]: true,
      ['d-none']: !showTootlip,
    });

    return (
      <>
        <div
          className={className}
          onMouseOver={this.handleMouseOver}
          onFocus={this.handleFocus}
          onMouseLeave={this.handleMouseLeave}
          onBlur={this.handleBlur}
          onMouseDown={this.beginHandleMovement}
          onKeyDown={this.handleKeyDown}
          onKeyUp={this.handleKeyUp}
          ref={this.refHandlers.handle}
          style={style}
          tabIndex={disabled ? -1 : 0}
          data-test="DesignSystem-MultiSlider-Handle"
          role="slider"
          aria-label={ariaLabel || label}
          aria-valuemin={this.props.min}
          aria-valuemax={this.props.max}
          aria-valuenow={value}
          aria-valuetext={label}
          aria-disabled={disabled || undefined}
        />
        {/* eslint-enable  */}
        <div className={TooltipClass} style={style}>
          {label}
        </div>
      </>
    );
  }

  removeDocumentEventListeners = () => {
    document.removeEventListener('mousemove', this.continueHandleMovement);
    document.removeEventListener('mouseup', this.endHandleMovement);
  };
}

export default Handle;
