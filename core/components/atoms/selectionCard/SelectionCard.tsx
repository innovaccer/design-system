import * as React from 'react';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import { useMultiSelect, useSingleSelect } from './hooks';

type ClickEventType = React.MouseEvent<HTMLDivElement> | React.KeyboardEvent;

export interface SelectionCardProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
  /**
   * Element to be rendered inside card item
   */
  children: React.ReactNode;
  /**
   * Provide unique id to each card when used in group
   */
  id: string;
  /**
   * Disables the Selection Card
   */
  disabled?: boolean;
  /**
   * Handler to be called when Selection card is clicked
   */
  onClick?: (e: ClickEventType, id?: string) => void;
  /**
   * Describe z-index for overlay
   */
  zIndex?: number;
  /**
   * Defines if card is selected
   */
  selected?: boolean;
}

export const SelectionCard = (props: SelectionCardProps) => {
  const { children, onClick, disabled, id, zIndex, selected, className, ...rest } = props;

  const classes = classNames(
    {
      ['Selection-card']: true,
      ['Selection-card--selected']: selected,
      ['Selection-card--disabled']: disabled && !selected,
      ['Selection-card--selected-disabled']: disabled && selected,
    },
    className
  );

  const onClickHandler = (e: ClickEventType) => {
    onClick && onClick(e, id);
  };

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onClickHandler(event);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={onKeyDownHandler}
      onClick={(e) => onClickHandler(e)}
      className={classes}
      data-test="DesignSystem-SelectionCard-Item"
      {...rest}
    >
      <div className="Selection-card-overlay" style={{ zIndex }} data-test="DesignSystem-SelectionCard-Overlay" />
      {children}
    </div>
  );
};

SelectionCard.defaultProps = {
  disabled: false,
  zIndex: 2,
};

SelectionCard.useMultiSelect = useMultiSelect;

SelectionCard.useSingleSelect = useSingleSelect;

export default SelectionCard;
