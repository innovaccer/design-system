import * as React from 'react';
import { SelectContext } from './SelectContext';
import { Listbox, Checkbox } from '@/index';
import { OptionType } from '@/common.type';
import { BaseProps } from '@/utils/types';
import { handleKeyDown, elementExist, removeOrAddToList } from './utils';
import classNames from 'classnames';
import styles from '@css/components/select.module.css';

type checkedType = 'checked' | 'unchecked' | 'indeterminate';

export interface SelectOptionProps extends BaseProps {
  /**
   * The content of the option, typically rendered as a label.
   */
  children: React.ReactNode;
  /**
   * The data associated with the option.
   */
  option: OptionType;
  /**
   * Callback function triggered when the option is clicked.
   */
  onClick?: (option: OptionType) => void;
  /**
   * The state of the checkbox associated with the option.
   */
  checkedState?: checkedType;
  /**
   * Whether to hide the checkbox associated with the option in case of multiselect.
   */
  withCheckbox?: boolean;
  /**
   * Whether the option is disabled.
   */
  disabled?: boolean;
}

export const SelectOption = (props: SelectOptionProps) => {
  const { children, option, checkedState, onClick, withCheckbox = true, disabled, ...rest } = props;
  const contextProp = React.useContext(SelectContext);
  const {
    onOptionClick,
    selectValue,
    setSelectValue,
    multiSelect,
    setIsOptionSelected,
    focusedOption,
    setFocusedOption,
    setHighlightFirstItem,
    setHighlightLastItem,
    listRef,
    withSearch,
    setOpenPopover,
    triggerRef,
  } = contextProp;

  const onClickHandler = () => {
    if (disabled) return;

    if (onClick) {
      onClick(option);
      return;
    }

    const newList = multiSelect && Array.isArray(selectValue) ? removeOrAddToList(option, selectValue) : option;

    setIsOptionSelected?.(Array.isArray(newList) ? newList.length !== 0 : true);
    setSelectValue?.(newList);
    onOptionClick?.(newList);
  };

  const checked = checkedState === 'checked' || elementExist(option, selectValue) !== -1;

  const indeterminate = checkedState === 'indeterminate';

  const optionItemClass = classNames({
    [styles['Select-option']]: true,
  });

  const textClass = classNames({
    [styles['Select-option--text']]: true,
    'pt-2': multiSelect,
  });

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    handleKeyDown(
      event,
      focusedOption,
      setFocusedOption,
      setHighlightFirstItem,
      setHighlightLastItem,
      listRef,
      withSearch,
      setOpenPopover,
      triggerRef
    );
  };

  return (
    <Listbox.Item
      role="option"
      onClick={onClickHandler}
      aria-selected={checked}
      aria-label="option item"
      onKeyDown={(event) => onKeyDownHandler(event)}
      selected={checked}
      tabIndex={-1}
      disabled={disabled}
      data-test="DesignSystem-Select-Option"
      {...rest}
    >
      <div className={optionItemClass}>
        {multiSelect && withCheckbox && (
          <Checkbox
            tabIndex={-1}
            aria-checked={indeterminate ? 'mixed' : checked}
            checked={checked}
            indeterminate={indeterminate}
          />
        )}
        <div className={textClass}>{children}</div>
      </div>
    </Listbox.Item>
  );
};

SelectOption.defaultProps = {
  withCheckbox: true,
};

export default SelectOption;
