import * as React from 'react';
import { ComboboxContext } from './ComboboxProvider';
import { Listbox } from '@/index';
import { ListboxItemProps } from '@/index.type';
// import classNames from 'classnames';
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
  // const focusedLabel = (focusedOption as HTMLElement)?.getAttribute('data-label');

  const onClickHandler = () => {
    if (onClick) {
      return onClick(option);
    }

    return onOptionClick && onOptionClick(option);
  };

  // const classes = classNames({
  //   ['Combobox-Option--focus']: focusedLabel === option.label,
  // });

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    handleKeyDown(event, focusedOption, setFocusedOption);
  };

  return (
    <Listbox.Item
      data-label={option.label}
      data-item="Combobox-Option-item"
      onClick={onClickHandler}
      selected={option.label === inputValue}
      onKeyDown={onKeyDownHandler}
      // className={classes}
      // tabIndex={-1}
      {...rest}
    >
      {children}
    </Listbox.Item>
  );
};

export default ComboboxOption;
