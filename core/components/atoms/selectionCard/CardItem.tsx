import * as React from 'react';
import classNames from 'classnames';
import { CardContext } from './cardContext';
import { handleMultiSelect, handleSingleSelect } from './utils';
import { BaseHtmlProps, BaseProps } from '@/utils/types';

type ClickEventType = React.MouseEvent<HTMLDivElement> | React.KeyboardEvent;

export interface CardItemProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
  /**
   * Element to be rendered inside card item
   */
  children: React.ReactNode;
  /**
   * Provide unique id to each card when used in group
   */
  id: string;
  /**
   * Disables the Action Card
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
}

export const CardItem = (props: CardItemProps) => {
  const { children, onClick, disabled, id, zIndex, className, ...rest } = props;
  const contextProp = React.useContext(CardContext);
  const { selectedOptions, setSelectedOptions, multiSelect } = contextProp;
  const isItemSelected = selectedOptions?.includes(id);

  const classes = classNames(
    {
      ['Selection-card']: true,
      ['Selection-card--selected']: isItemSelected,
      ['Selection-card--disabled']: disabled && !isItemSelected,
      ['Selection-card--selected-disabled']: disabled && isItemSelected,
    },
    className
  );

  const onClickHandler = (e: ClickEventType) => {
    // if (e.target === e.currentTarget && onClick) {
    //   onClick(e, id);
    //   return;
    // }

    if (onClick) {
      onClick(e, id);
      return;
    }

    if (multiSelect) {
      handleMultiSelect(selectedOptions, isItemSelected, setSelectedOptions, id);
    } else if (!multiSelect || multiSelect === undefined) {
      handleSingleSelect(selectedOptions, isItemSelected, setSelectedOptions, id);
    }
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

CardItem.defaultProps = {
  disabled: false,
  zIndex: 2,
};

export default CardItem;
