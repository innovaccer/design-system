import * as React from 'react';
import { Input } from '@/index';
import { SelectContext } from './SelectContext';
import { handleInputKeyDown } from './utils';
import { InputProps } from '@/index.type';

export interface SelectInputProps extends InputProps {
  /**
   * Callback function when user clicks the clear button
   */
  onClear?: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
  /**
   * Callback function when `Input` text changes
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = (props: SelectInputProps) => {
  const contextProp = React.useContext(SelectContext);
  const { setWithSearch, maxHeight, listRef, setFocusedOption, setOpenPopover, triggerRef } = contextProp;
  const { onChange, onClear, ...rest } = props;

  React.useEffect(() => {
    setWithSearch?.(true);
  }, [maxHeight]);

  const searchHandler = (event: any) => {
    if (onChange) onChange(event.target.value);
  };

  const searchClearHandler = (event: any) => {
    if (onClear) onClear(event);
  };

  return (
    <div className="Select-inputWrapper">
      <Input
        {...rest}
        icon={'search'}
        onKeyDown={(event) => handleInputKeyDown(event, listRef, setFocusedOption, setOpenPopover, triggerRef)}
        // TODO(a11y): research more on this.
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={true}
        onChange={searchHandler}
        onClear={searchClearHandler}
        autoComplete={'off'}
        aria-label="Search"
        aria-haspopup="listbox"
        className="Select-input"
        data-test="DesignSystem-Select--Input"
      />
    </div>
  );
};

export default SearchInput;
