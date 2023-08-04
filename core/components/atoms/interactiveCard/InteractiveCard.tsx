import * as React from 'react';
import { CardContext } from './cardContext';
import CardItem from './CardItem';
import { BaseHtmlProps, BaseProps } from '@/utils/types';

export interface InteractiveCardProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
  multiSelect?: boolean;
  selectedList?: string[];
}

export const InteractiveCard = (props: InteractiveCardProps) => {
  const { children, multiSelect, selectedList = [] } = props;
  const [selectedOptions, setSelectedOptions] = React.useState(selectedList);

  const providerValue = {
    selectedOptions,
    setSelectedOptions,
    multiSelect,
  };

  return (
    <CardContext.Provider value={providerValue}>
      <div>{children}</div>
    </CardContext.Provider>
  );
};

InteractiveCard.displayName = 'InteractiveCard';
InteractiveCard.Item = CardItem;

export default InteractiveCard;
