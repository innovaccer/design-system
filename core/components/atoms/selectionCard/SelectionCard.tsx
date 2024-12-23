import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
import { useMultiSelect, useSingleSelect } from './hooks';
import styles from '@css/components/selectionCard.module.css';

type ClickEventType = React.MouseEvent<HTMLDivElement> | React.KeyboardEvent;

export interface SelectionCardProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
  /**
   * Element to be render inside card
   */
  children: React.ReactNode;
  /**
   * Provide unique id to the card
   */
  id: string;
  /**
   * Provide value to the card
   */
  cardValue?: object;
  /**
   * Disable the Selection Card
   */
  disabled?: boolean;
  /**
   * Handler to be called when Selection card is clicked
   */
  onClick?: (event: ClickEventType, id?: string, cardValue?: object) => void;
  /**
   * Describe z-index for overlay
   */
  overlayZIndex?: number;
  /**
   * Defines if card is selected
   */
  selected?: boolean;
}

export const SelectionCard = (props: SelectionCardProps) => {
  const { children, onClick, disabled, id, cardValue, overlayZIndex, selected, className, ...rest } = props;

  const classes = classNames(
    {
      [styles['Selection-card']]: true,
      [styles['Selection-card--default']]: !disabled,
      [styles['Selection-card--selected']]: selected && !disabled,
      [styles['Selection-card--disabled']]: disabled,
      [styles['Selection-card--default-disabled']]: disabled && !selected,
      [styles['Selection-card--selected-disabled']]: disabled && selected,
    },
    className
  );

  const onClickHandler = (event: ClickEventType) => {
    if (!disabled && onClick) {
      onClick(event, id, cardValue);
    }
  };

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !disabled) {
      onClickHandler(event);
    }
  };

  return (
    <div
      role="checkbox"
      aria-checked={selected}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={onKeyDownHandler}
      onClick={(event) => onClickHandler(event)}
      className={classes}
      data-test="DesignSystem-SelectionCard"
      {...rest}
    >
      <div
        className={styles['Selection-card-overlay']}
        style={{ zIndex: overlayZIndex }}
        data-test="DesignSystem-SelectionCard-Overlay"
      />
      {children}
    </div>
  );
};

SelectionCard.defaultProps = {
  disabled: false,
  overlayZIndex: 2,
};

SelectionCard.useMultiSelect = useMultiSelect;

SelectionCard.useSingleSelect = useSingleSelect;

export default SelectionCard;
