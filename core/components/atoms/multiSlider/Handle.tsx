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
}

export class Handle extends React.Component<InternalHandleProps, HandleState> {
  state = {
    isHandleMoving: false,
    isHandleHovered: false,
  };

  handleElement: HTMLElement | null = null;
  refHandlers = {
    handle: (el: HTMLDivElement | null) => {
      this.handleElement = el;
    },
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
    const { stepSize, tickSize, value } = this.props;
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

    return value + Math.round(pixelDelta / (tickSize * stepSize)) * stepSize;
  };

  changeValue = (newValue: number, callback = this.props.onChange) => {
    const updatedValue = clamp(newValue, this.props.min, this.props.max);

    if (!isNaN(updatedValue) && this.props.value !== updatedValue) {
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

    const { stepSize, value } = this.props;
    const { keyCode } = event;

    // TODO(a11y): add ARROW_DOWN & ARROW_UP too
    if (keyCode === Keys.ARROW_LEFT) {
      this.changeValue(value - stepSize);
      event.preventDefault();
    } else if (keyCode === Keys.ARROW_RIGHT) {
      this.changeValue(value + stepSize);
      event.preventDefault();
    }
  };

  handleKeyUp = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (this.props.disabled) return;

    if ([Keys.ARROW_LEFT, Keys.ARROW_RIGHT].indexOf(event.keyCode) >= 0) {
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

  render() {
    const { min, tickSizeRatio, value, disabled, label, isCurrentLabelHovered } = this.props;
    const { isHandleMoving, isHandleHovered } = this.state;

    const showTootlip = isHandleMoving || isHandleHovered || isCurrentLabelHovered;

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
      // TODO(a11y): fix accessibility
      /* eslint-disable */
      <>
        <div
          className={className}
          onMouseOver={this.handleMouseOver}
          onMouseLeave={this.handleMouseLeave}
          onMouseDown={this.beginHandleMovement}
          onKeyDown={this.handleKeyDown}
          onKeyUp={this.handleKeyUp}
          ref={this.refHandlers.handle}
          style={style}
          tabIndex={0}
          data-test="DesignSystem-MultiSlider-Handle"
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
