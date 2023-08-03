import * as React from 'react';
import { CardContext } from './cardContext';
import CardItem from './CardItem';
import { BaseHtmlProps, BaseProps } from '@/utils/types';

export interface SelectionCardProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
  /**
   *  Defines if multiple cards can be selected together
   */
  multiSelect?: boolean;
  /**
   * List of IDs of selected card
   */
  selectedList?: string[];
}

export const SelectionCard = (props: SelectionCardProps) => {
  const { children, multiSelect, selectedList = [] } = props;
  const [selectedOptions, setSelectedOptions] = React.useState(selectedList);

  const providerValue = {
    selectedOptions,
    setSelectedOptions,
    multiSelect,
  };

  return (
    <CardContext.Provider value={providerValue}>
      <div data-test="DesignSystem-SelectionCard-OuterWrapper">{children}</div>
    </CardContext.Provider>
  );
};

SelectionCard.displayName = 'SelectionCard';
SelectionCard.Item = CardItem;

export default SelectionCard;
