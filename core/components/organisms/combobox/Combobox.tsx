// import * as React from 'react';
// import { BaseProps } from '@/utils/types';
// import { ChipInput, Dropdown, Input } from '@/index';
// import { EventType, OptionSchema } from 'types';

// export type InputSize = 'tiny' | 'regular' | 'large';

// export interface ComboboxProps extends BaseProps {
//   size?: InputSize;
//   multiSelect?: boolean;
//   options: OptionSchema[];
//   placeholder?: string;
//   // customTrigger?: (label: string) => React.ReactElement;
// }

// type OptionType = {
//   label: string;
//   value: string;
//   selected: boolean;
// };

// const InputBox = (props: any) => {
//   const { placeholder, selectedOption, onChange } = props;
//   console.log('selcted options-> ', selectedOption);

//   const onChangeHandler = (e) => {
//     // e.preventDefault();
//     onChange && onChange();
//   };

//   return <Input placeholder={placeholder} value={selectedOption[0]?.label} onChange={onChange} />;
// };

// export const Combobox = (props: ComboboxProps) => {
//   const { options, multiSelect } = props;
//   const [selectedOption, setSelectedOption] = React.useState([]);
//   const [optionList, setOptionList] = React.useState(options);
//   const [count, setCount] = React.useState(0);
//   const [open, setOpen] = React.useState(false);

//   // React.useEffect(() => {
//   //   setCount(count + 1);
//   // }, [optionList]);

//   const customTriggerFunc = (label: string) => {
//     if (multiSelect) {
//       return <ChipInput />;
//     }
//     return <InputBox {...props} selectedOption={selectedOption} onChange={onInputChange} />;
//   };

//   // const onUpdateHandler = (eventType: EventType, option: OptionType) => {
//   const onUpdateHandler = (eventType, option) => {
//     console.log('update prop', eventType, 'b', option);
//     if (multiSelect) {
//       setSelectedOption([...selectedOption, option]);
//     } else {
//       setSelectedOption([option]);
//     }
//   };

//   const onInputChange = (e) => {
//     const value = e.target.value;
//     const filterList = options.filter((item, key) => {
//       return item.value.toString().toLowerCase() == value.toLowerCase();
//     });
//     console.log('filterList', filterList);
//     setOptionList(filterList);
//     // setCount(count + 1);
//     // setOpen(true);
//   };

//   return (
//     <div>
//       <Dropdown
//         key={count}
//         open={true}
//         options={optionList}
//         selected={selectedOption}
//         onUpdate={onUpdateHandler}
//         triggerOptions={{
//           customTrigger: customTriggerFunc,
//         }}
//       />
//     </div>
//   );
// };

// Combobox.defaultProps = {
//   size: 'regular',
// };
export const Combobox = () => {};

// Combobox.displayName = 'Combobox';
export default Combobox;
