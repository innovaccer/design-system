import * as React from 'react';
import classNames from 'classnames';
import { CardContext } from './cardContext';
import { removeItem } from './utils';
import { BaseHtmlProps, BaseProps } from '@/utils/types';

export interface CardItemProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
  disabled?: boolean;
  id: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;
}

export const CardItem = (props: CardItemProps) => {
  const { children, onClick, disabled, id } = props;
  const contextProp = React.useContext(CardContext);
  const { selectedOptions, setSelectedOptions, multiSelect } = contextProp;
  const isItemSelected = selectedOptions?.includes(id);

  const classes = classNames({
    ['interactive-card']: true,
    ['interactive-card--selected']: isItemSelected,
    ['interactive-card--disabled']: disabled,
  });

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
    // debugger;
    let resultList = [...selectedOptions];
    if (multiSelect) {
      if (isItemSelected) {
        resultList = removeItem(id, selectedOptions);
      } else {
        resultList.push(id);
      }
    } else if (!multiSelect || multiSelect === undefined) {
      if (isItemSelected) {
        resultList = [];
      } else {
        resultList = [id];
      }
    }
    setSelectedOptions(resultList);
    onClick && onClick(e);
  };

  return (
    <div role="button" tabIndex={0} onKeyDown={onClickHandler} onClick={(e) => onClickHandler(e)} className={classes}>
      {children}
    </div>
  );
};

export default CardItem;
