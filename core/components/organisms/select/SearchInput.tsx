import * as React from 'react';
import { Input } from '@/index';
import { SelectContext } from './SelectContext';
import { handleInputKeyDown } from './utils';
import { InputProps } from '@/index.type';
import styles from '@css/components/select.module.css';
import classNames from 'classnames';

export interface SelectInputProps extends Omit<InputProps, 'onChange'> {
  /**
   * Callback function when user clicks the clear button
   */
  onClear?: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
  /**
   * Callback function when `Input` text changes
   */
  onChange?: (value?: string) => void;
}

export const SearchInput = (props: SelectInputProps) => {
  const contextProp = React.useContext(SelectContext);
  const { setWithSearch, maxHeight, listRef, setFocusedOption, setOpenPopover, triggerRef } = contextProp;
  const { onChange, onClear, size = 'regular', ...rest } = props;

  React.useEffect(() => {
    setWithSearch?.(true);
  }, [maxHeight]);

  const searchHandler = (event: any) => {
    if (onChange) onChange(event.target.value);
  };

  const searchClearHandler = (event: any) => {
    if (onClear) onClear(event);
  };

  const inputClass = classNames({
    [styles['Select-input']]: true,
    [styles['Select-input--tiny']]: size === 'tiny',
  });

  return (
    <div className={styles['Select-inputWrapper']}>
      <Input
        {...rest}
        icon={'search'}
        size={size}
        onKeyDown={(event) => handleInputKeyDown(event, listRef, setFocusedOption, setOpenPopover, triggerRef)}
        // TODO(a11y): research more on this.
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={true}
        onChange={searchHandler}
        onClear={searchClearHandler}
        autoComplete={'off'}
        aria-label="Search"
        aria-haspopup="listbox"
        className={inputClass}
        data-test="DesignSystem-Select--Input"
      />
    </div>
  );
};

export default SearchInput;
