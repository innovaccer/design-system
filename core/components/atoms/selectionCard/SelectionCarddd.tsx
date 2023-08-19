// import * as React from 'react';
// import { CardContext } from './cardContext';
// import CardItem from './CardItem';
// import { BaseHtmlProps, BaseProps } from '@/utils/types';
// import { useMultiSelect } from './hooks/useMultiSelect';
// export interface SelectionCardProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
//   /**
//    *  Defines if multiple cards can be selected together
//    */
//   multiSelect?: boolean;
//   /**
//    * List of IDs of selected card
//    */
//   selectedList?: string[];
//   /**
//    * Element to be rendered inside card
//    */
//   children: React.ReactNode;
// }

// export const SelectionCard = (props: SelectionCardProps) => {
//   const { children, multiSelect, selectedList = [], ...rest } = props;
//   const [selectedOptions, setSelectedOptions] = React.useState(selectedList);

//   const providerValue = {
//     selectedOptions,
//     setSelectedOptions,
//     multiSelect,
//   };

//   return (
//     <CardContext.Provider value={providerValue}>
//       <div data-test="DesignSystem-SelectionCard-OuterWrapper" {...rest}>
//         {children}
//       </div>
//     </CardContext.Provider>
//   );
// };

// SelectionCard.displayName = 'SelectionCard';

// SelectionCard.Item = CardItem;

// SelectionCard.useMultiSelect = useMultiSelect;

// SelectionCard.defaultProps = {
//   multiSelect: false,
// };

// export default SelectionCard;
