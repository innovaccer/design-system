import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { Text, Label } from '@/index';
import Handle, { HandleProps } from './Handle';
import {
  approxEqual,
  formatPercentage,
  countDecimalPlaces,
  clamp,
  arraysEqual,
  argMin,
  fillValues,
  isElementOfType,
} from './SliderUtils';
import { NumberRange } from '@/common.type';
import styles from '@css/components/slider.module.css';

export interface MultiSliderProps extends BaseProps {
  /**
   * Determines whether the `Slider` is non-interactive.
   */
  disabled?: boolean;
  /**
   * Indicates increment between successive labels (Must be greater than zero).
   */
  labelStepSize: number;
  /**
   * Number of decimal places to use when rendering label value. <br/>
   * Default value is the number of decimals used in the `stepSize` prop.
   */
  labelPrecision?: number;
  /**
   * Maximum value of the `Slider`.
   */
  max: number;
  /**
   * Minimum value of the `Slider`.
   */
  min: number;
  /**
   * Indicates the amount by which the handle moves (Must be greater than zero).
   */
  stepSize: number;
  /**
   * Label of `Slider`
   */
  label?: string;
  /**
   * Callback to render a custom label.
   * If `true`, labels will use number value formatted to `labelPrecision` decimal places.
   * If `false`, labels will not be shown.
   */
  labelRenderer: boolean | ((value: number) => string);
}

interface SliderBaserProps extends MultiSliderProps {
  onChange?: (values: number) => void;
  onRelease?: (values: number) => void;
}

interface RangeSliderBaseProps extends MultiSliderProps {
  onRangeChange?: (values: NumberRange) => void;
  onRangeRelease?: (values: NumberRange) => void;
}

interface MultiSliderState {
  labelPrecision: number;
  tickSize: number;
  tickSizeRatio: number;
  hoveredLabelValue?: number;
}

type InternalMultiSliderProps = SliderBaserProps & RangeSliderBaseProps & { children?: React.ReactNode };

const MultiSliderHandle: React.FunctionComponent<HandleProps> = () => null;

export class MultiSlider extends React.Component<InternalMultiSliderProps, MultiSliderState> {
  static defaultProps = {
    labelStepSize: 1,
    max: 10,
    min: 0,
    stepSize: 1,
    labelRenderer: true,
  };
  static Handle = MultiSliderHandle;

  handleElements: Handle[] = [];
  trackElement: HTMLElement | null = null;

  constructor(props: InternalMultiSliderProps) {
    super(props);

    this.state = {
      labelPrecision: this.getLabelPrecision(this.props),
      tickSize: 0,
      tickSizeRatio: 0,
    };
  }

  getDerivedStateFromProps(props: InternalMultiSliderProps) {
    return { labelPrecision: this.getLabelPrecision(props) };
  }

  getSnapshotBeforeUpdate(prevProps: InternalMultiSliderProps) {
    const prevHandleProps = this.getHandleValues(prevProps);
    const newHandleProps = this.getHandleValues(this.props);
    if (newHandleProps.length !== prevHandleProps.length) {
      this.handleElements = [];
    }
    return null;
  }

  componentDidMount() {
    this.updateTickSize();
  }

  getLabelPrecision = ({ labelPrecision, stepSize }: InternalMultiSliderProps) => {
    return labelPrecision == null ? countDecimalPlaces(stepSize) : labelPrecision;
  };

  getOffsetRatio = (value: number) => {
    return clamp((value - this.props.min) * this.state.tickSizeRatio, 0, 1);
  };

  addHandleRef = (ref: Handle) => {
    if (ref != null) {
      this.handleElements.push(ref);
    }
  };

  getHandleValues = (props: React.PropsWithChildren<InternalMultiSliderProps>): HandleProps[] => {
    const maybeHandles = React.Children.map(props.children as React.ReactElement, (child) =>
      isElementOfType(child) ? (child.props as HandleProps) : null
    );

    let handles = maybeHandles != null ? maybeHandles : [];
    handles = handles.filter((handle): handle is HandleProps => handle !== null);
    handles.sort((left: HandleProps, right: HandleProps) => left.value - right.value);
    return handles;
  };

  updateTickSize = () => {
    if (this.trackElement != null) {
      const trackSize = this.trackElement.clientWidth;
      const tickSizeRatio = 1 / (this.props.max - this.props.min);
      const tickSize = trackSize * tickSizeRatio;
      this.setState({ tickSize, tickSizeRatio });
    }
  };

  getTrackFill = (start: HandleProps, end?: HandleProps) => {
    if (start.fillAfter !== undefined) {
      return start.fillAfter;
    }

    if (end !== undefined && end.fillBefore !== undefined) {
      return end.fillBefore;
    }
    return false;
  };

  nearestHandleForValue(handles: Handle[], getOffset: (handle: Handle) => number) {
    return argMin(handles, (handle) => {
      const offset = getOffset(handle);
      const offsetValue = handle.clientToValue(offset);
      const handleValue = handle.props.value!;
      return Math.abs(offsetValue - handleValue);
    });
  }

  maybeHandleTrackClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const canHandleTrackEvent = !this.props.disabled && target.closest('.Slider-handle') == null;

    if (canHandleTrackEvent) {
      const foundHandle = this.nearestHandleForValue(this.handleElements, (handle) =>
        handle.mouseEventClientOffset(event)
      );

      if (foundHandle) {
        foundHandle.beginHandleMovement(event);
      }
    }
  };

  getLockedHandleIndex = (startIndex: number, endIndex: number) => {
    const inc = startIndex < endIndex ? 1 : -1;

    for (let index = startIndex + inc; index !== endIndex + inc; index += inc) {
      return index;
    }

    return -1;
  };

  getNewHandleValues = (newValue: number, oldIndex: number) => {
    const handleProps = this.getHandleValues(this.props);
    const oldValues = handleProps.map((handle) => handle.value);
    const newValues = oldValues.slice();
    newValues[oldIndex] = newValue;
    if (newValues.length > 1) newValues.sort((left, right) => left - right);

    const newIndex = newValues.indexOf(newValue);
    const lockIndex = this.getLockedHandleIndex(oldIndex, newIndex);

    if (lockIndex === -1) {
      fillValues(newValues, oldIndex, newIndex, newValue);
    } else {
      const lockValue = oldValues[lockIndex];
      fillValues(oldValues, oldIndex, lockIndex, lockValue);
      return oldValues;
    }
    return newValues;
  };

  onReleaseHandler = (newValue: number, index: number) => {
    const { onRangeRelease } = this.props;

    const handleProps = this.getHandleValues(this.props);
    const newValues = this.getNewHandleValues(newValue, index);

    // Range Slider callback
    if (onRangeRelease) {
      const range = newValues as NumberRange;
      onRangeRelease(range);
    }

    // Slider callback
    handleProps.forEach((handle, i) => {
      if (handle.onRelease) handle.onRelease(newValues[i]);
    });
  };

  onChangeHandler = (newValue: number, index: number) => {
    const { onRangeChange } = this.props;

    const handleProps = this.getHandleValues(this.props);
    const oldValues = handleProps.map((handle) => handle.value);
    const newValues = this.getNewHandleValues(newValue, index);

    if (!arraysEqual(newValues, oldValues)) {
      // Range Slider Callback
      if (onRangeChange) {
        const range = newValues as NumberRange;
        onRangeChange(range);
      }

      // Slider callback
      handleProps.forEach((handle, i) => {
        if (handle.onChange) handle.onChange(newValues[i]);
      });
    }
  };

  formatLabel = (value: number) => {
    const { labelRenderer } = this.props;

    const labelValue = value.toFixed(this.state.labelPrecision);

    if (typeof labelRenderer === 'function') {
      return labelRenderer(Number(labelValue));
    }

    return labelValue;
  };

  renderHandles = () => {
    const { disabled, max, min, stepSize } = this.props;
    const handleProps = this.getHandleValues(this.props);

    if (handleProps.length === 0) {
      return null;
    }

    return handleProps.map(({ value }, index) => {
      const isCurrentLabelHovered = this.state.hoveredLabelValue === Number(value.toFixed(this.state.labelPrecision));

      return (
        <Handle
          disabled={disabled}
          key={`${index}-${handleProps.length}`}
          max={max}
          min={min}
          onRelease={(newValue) => this.onReleaseHandler(newValue, index)}
          onChange={(newValue) => this.onChangeHandler(newValue, index)}
          label={this.formatLabel(value)}
          ref={this.addHandleRef}
          stepSize={stepSize}
          tickSize={this.state.tickSize}
          tickSizeRatio={this.state.tickSizeRatio}
          value={value}
          isCurrentLabelHovered={isCurrentLabelHovered}
        />
      );
    });
  };

  renderLabels = (): React.ReactElement[] => {
    const { labelStepSize, max, min, labelRenderer, disabled } = this.props;

    const labels: React.ReactElement[] = [];
    const stepSizeRatio = this.state.tickSizeRatio * labelStepSize;
    const handles = this.getHandleValues(this.props);
    const activeLabels = handles.map((handle) => handle.value.toFixed(this.state.labelPrecision));

    for (
      let i = min, offsetRatio = 0;
      i < max || approxEqual(i, max);
      i += labelStepSize, offsetRatio += stepSizeRatio
    ) {
      const offsetPercentage = formatPercentage(offsetRatio);
      const style = { left: offsetPercentage };
      const active = !disabled && activeLabels.indexOf(i.toFixed(this.state.labelPrecision)) !== -1;
      const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
        if (!this.props.disabled) {
          const foundHandle = this.nearestHandleForValue(this.handleElements, (handle) =>
            handle.mouseEventClientOffset(event)
          );

          if (foundHandle) {
            foundHandle.changeValue(i);
          }
        }
      };

      const SliderTicksClass = classNames({
        [styles['Slider-ticks']]: true,
        ['bg-dark']: active,
      });

      // TODO(a11y): fix accessibility
      /* eslint-disable */
      labels.push(
        <div
          onClick={onClickHandler}
          className={styles['Slider-label']}
          key={i}
          style={style}
          onMouseOver={() => this.handleLabelMouseOver(i)}
          onMouseLeave={this.handleLabelMouseLeave}
          data-test="DesignSystem-MultiSlider-Label"
        >
          {/* eslint-enable  */}
          <span className={SliderTicksClass} />
          {labelRenderer !== false && (
            <Text size="small" appearance={active ? 'default' : 'disabled'}>
              {this.formatLabel(i)}
            </Text>
          )}
        </div>
      );
    }
    return labels;
  };

  renderTrackFill = (index: number, start: HandleProps, end: HandleProps) => {
    const [startRatio, endRatio] = [this.getOffsetRatio(start.value), this.getOffsetRatio(end.value)].sort(
      (left, right) => left - right
    );
    const startOffset = Number((startRatio * 100).toFixed(2));
    const endOffset = Number(((1 - endRatio) * 100).toFixed(2));

    const width = `${100 - endOffset - startOffset}%`;
    const orientationStyle: React.CSSProperties = { width };
    const style: React.CSSProperties = { ...orientationStyle };
    const fillTrack = this.getTrackFill(start, end);

    const classes = classNames({
      [styles['Slider-progress']]: true,
      [styles['Slider-progress--disabled']]: this.props.disabled,
      [styles['Slider-progress--inRange']]: fillTrack,
      [styles['Slider-progress--inRangeDisabled']]: fillTrack && this.props.disabled,
    });

    return <div key={`track-${index}`} className={classes} style={style} />;
  };

  renderTracks = () => {
    const trackStops = this.getHandleValues(this.props);
    trackStops.push({ value: this.props.max });

    let previous: HandleProps = { value: this.props.min || 0 };
    const handles: React.ReactElement[] = [];

    trackStops.forEach((track, index) => {
      const current = track;
      handles.push(this.renderTrackFill(index, previous, current));
      previous = current;
    });

    return handles;
  };

  handleLabelMouseOver = (value: number) => {
    this.setState({
      hoveredLabelValue: value,
    });
  };

  handleLabelMouseLeave = () => {
    this.setState({
      hoveredLabelValue: undefined,
    });
  };

  render() {
    const { label, className } = this.props;
    const baseProps = extractBaseProps(this.props);

    const SliderClass = classNames(
      {
        [styles['Slider']]: true,
      },
      className
    );

    const WrapperClass = classNames({
      [styles['Slider-wrapper']]: true,
      [styles['Slider-wrapper--disabled']]: this.props.disabled,
    });

    return (
      <div {...baseProps} className={SliderClass} data-test="DesignSystem-MultiSlider">
        {label && <Label withInput={true}>{label}</Label>}
        <div className={WrapperClass}>
          {/* TODO(a11y): fix accessibility  */}
          {/* eslint-disable */}
          <div
            className={styles['Slider-track']}
            ref={(ref) => {
              this.trackElement = ref;
            }}
            onMouseDown={this.maybeHandleTrackClick}
            data-test="DesignSystem-MultiSlider-Slider-Track"
          >
            {/* eslint-enable */}
            {this.renderTracks()}
          </div>
          <div className={styles['Slider-axis']}>{this.renderLabels()}</div>
          {this.renderHandles()}
        </div>
      </div>
    );
  }
}

export default MultiSlider;
