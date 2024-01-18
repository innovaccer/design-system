import * as React from 'react';
import { ComboboxContext } from './ComboboxProvider';
import { Listbox } from '@/index';
import { ListboxItemProps } from '@/index.type';
import { OptionType } from '@/common.type';
import { handleKeyDown } from './utils';

export interface ComboboxOptionProps {
  children: React.ReactNode;
  option: OptionType;
  onClick?: (option: OptionType) => void;
}

export const ComboboxOption = (props: ComboboxOptionProps & ListboxItemProps) => {
  const { children, option, onClick, ...rest } = props;

  const contextProp = React.useContext(ComboboxContext);

  const { onOptionClick, inputValue, focusedOption, setFocusedOption } = contextProp;

  const onClickHandler = () => {
    if (onClick) {
      return onClick(option);
    }

    return onOptionClick && onOptionClick(option);
  };

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    handleKeyDown(event, focusedOption, setFocusedOption);
  };

  return (
    <Listbox.Item
      onClick={onClickHandler}
      selected={option.label === inputValue}
      onKeyDown={onKeyDownHandler}
      {...rest}
    >
      {children}
    </Listbox.Item>
  );
};

export default ComboboxOption;
