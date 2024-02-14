import * as React from 'react';
import { Input } from '@/index';
import { InputProps } from '@/index.type';

// export const SearchInput = (props: InputProps) => {
//   const { onChange, onClear, ...rest } = props;

//   const searchHandler = (event: any) => {
//     if (onChange) onChange(event.target.value);
//   };

//   const searchClearHandler = (event: any) => {
//     if (onClear) onClear(event);
//   };

//   return (
//     <div className="Select-inputWrapper">
//       <Input
//         {...rest}
//         name="Dropdown-search"
//         icon={'search'}
//         // TODO(a11y): research more on this.
//         // eslint-disable-next-line jsx-a11y/no-autofocus
//         autoFocus={true}
//         onChange={searchHandler}
//         onClear={searchClearHandler}
//         autoComplete={'off'}
//         className="Dropdown-input"
//       />
//     </div>
//   );
// };

// export default SearchInput;

export const SelectionAvatarInput = (props: InputProps) => {
  const { onChange, ...rest } = props;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
  };

  return (
    <div className="SelectionAvatar-inputWrapper">
      <Input
        icon="search"
        className="w-100 SelectionAvatar-input"
        minWidth="160px"
        onChange={onChangeHandler}
        data-test="DesignSystem-GenericInput"
        {...rest}
      />
    </div>
  );
};

export default SelectionAvatarInput;
