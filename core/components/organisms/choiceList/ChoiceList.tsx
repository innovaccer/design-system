import * as React from 'react';
import classNames from 'classnames';
import { Checkbox, Radio, Label } from '@/index';
import { BaseProps } from '@/utils/types';
import { ChangeEvent } from '@/common.type';
import styles from '@css/components/choiceList.module.css';

export type ChoiceListAlignment = 'horizontal' | 'vertical';
export type ChoiceListSize = 'regular' | 'tiny';
type noop = (ev: ChangeEvent) => void;

export interface Choice {
  /**
   * Value of the choice
   */
  value: string;
  /**
   * Label for the choice
   */
  label?: string;
  /**
   * Disable choice
   */
  disabled?: boolean;
  /**
   * Additional text
   */
  helpText?: string;
  /**
   * Adds name to the choice
   */
  name: string;
}
export interface ChoiceListProps extends BaseProps {
  /**
   * Describes title of the `ChoiceList`
   */
  title?: string;
  /**
   * Describes Collection of choices
   * <pre className="DocPage-codeBlock">
   *  Choice: {
   *   value?: string;
   *   label?: string;
   *   disabled?: boolean;
   *   helpText?: string;
   *   name?: string;
   *  }
   * </pre>
   */
  choices: Choice[];
  /**
   * Alignment in which the choices will be rendered
   * @default "vertical"
   */
  alignment?: ChoiceListAlignment;
  /**
   * Size of the `ChoiceList`
   * @default "regular"
   */
  size?: ChoiceListSize;
  /**
   * renders `checkbox` if `true` and renders `radio` if `false` of the `ChoiceList`
   * @default false
   */
  allowMultiple?: boolean;
  /**
   * Disable the `ChoiceList`
   * @default false
   */
  disabled?: boolean;
  /**
   * Collection of selected choices
   */
  selected?: string[];
  /**
   * Callback when the selected choices change
   */
  onChange?: (event: ChangeEvent, selected: string[]) => void;

  /**
   * Wrap checkbox label to the next line for checkbox
   */
  wrapLabel?: boolean;
}

const renderCheckbox = (
  list: Choice[],
  handleOnChange: noop,
  ChoiceListDisabled: boolean,
  size: ChoiceListSize,
  alignment: ChoiceListAlignment,
  selected: string[],
  wrapLabel: boolean | undefined
) => {
  return list.map((item: Choice, checkboxIndex: number) => {
    const { name, value, helpText, disabled, label } = item;
    return (
      <Checkbox
        key={checkboxIndex}
        label={label}
        onChange={handleOnChange}
        disabled={disabled || ChoiceListDisabled}
        helpText={helpText}
        size={size}
        name={name}
        value={value}
        defaultChecked={selected.length !== 0 && selected.includes(value)}
        className={getCheckboxClassName(alignment, checkboxIndex)}
        wrapLabel={wrapLabel}
      />
    );
  });
};

const renderRadio = (
  list: Choice[],
  handleOnChange: noop,
  ChoiceListDisabled: boolean,
  size: ChoiceListSize,
  alignment: ChoiceListAlignment,
  selected: string[]
) => {
  return list.map((item: Choice, radioIndex: number) => {
    const { name, value, helpText, disabled, label } = item;
    return (
      <Radio
        key={radioIndex}
        label={label}
        onChange={handleOnChange}
        disabled={disabled || ChoiceListDisabled}
        helpText={helpText}
        size={size}
        name={name}
        value={value}
        defaultChecked={selected.length !== 0 && selected.includes(value)}
        className={getRadioClassName(alignment, radioIndex)}
      />
    );
  });
};

const getCheckboxClassName = (alignment: ChoiceListAlignment, index: number) => {
  const ChoiceListCheckboxClass = classNames({
    [styles[`ChoiceList-checkbox--${alignment}`]]: true,
    ['ml-0']: index === 0 && alignment === 'horizontal',
    ['mt-4']: alignment === 'horizontal',
  });
  return ChoiceListCheckboxClass;
};

const getRadioClassName = (alignment: ChoiceListAlignment, index: number) => {
  const ChoiceListRadioClass = classNames({
    [styles[`ChoiceList-radio--${alignment}`]]: true,
    ['ml-0']: index === 0 && alignment === 'horizontal',
    ['mt-4']: alignment === 'horizontal',
  });
  return ChoiceListRadioClass;
};

export const ChoiceList = (props: ChoiceListProps) => {
  const {
    title,
    choices,
    alignment = 'vertical',
    allowMultiple = false,
    onChange,
    disabled = false,
    size = 'regular',
    className,
    wrapLabel,
  } = props;
  const { selected = [] } = props;
  let selectedChoiceValue = (selected && selected) || [];
  const ChoiceListClass = classNames(
    {
      [styles['ChoiceList']]: true,
    },
    className
  );

  const ChoiceListVerticalClass = classNames({
    [styles['ChoiceList--alignVertical']]: true,
  });

  const ChoiceHorizontalClass = classNames({
    [styles['ChoiceList--alignHorizontal']]: true,
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked && allowMultiple) {
      if (!selectedChoiceValue.includes(e.target.value)) {
        selectedChoiceValue = [...selectedChoiceValue, e.target.value];
      }
    } else if (!e.target.checked && allowMultiple) {
      selectedChoiceValue = selectedChoiceValue.filter((el) => el !== e.target.value);
    }
    if (!allowMultiple) {
      if (!selectedChoiceValue.includes(e.target.value)) {
        selectedChoiceValue = [];
        selectedChoiceValue = [...selectedChoiceValue, e.target.value];
      }
    }
    if (onChange) onChange(e, selectedChoiceValue);
  };

  return (
    <>
      <fieldset className={ChoiceListClass} data-test="DesignSystem-ChoiceList-Wrapper">
        {title && title.trim() && <Label withInput={true}>{title.trim()}</Label>}
        {allowMultiple ? (
          <div className={`${alignment === 'horizontal' ? ChoiceHorizontalClass : ChoiceListVerticalClass}`}>
            {renderCheckbox(choices, handleOnChange, disabled, size, alignment, selected, wrapLabel)}
          </div>
        ) : (
          <div className={`${alignment === 'horizontal' ? ChoiceHorizontalClass : ChoiceListVerticalClass}`}>
            {renderRadio(choices, handleOnChange, disabled, size, alignment, selected)}
          </div>
        )}
      </fieldset>
    </>
  );
};

ChoiceList.displayName = 'ChoiceList';
ChoiceList.defaultProps = {
  alignment: 'vertical',
  size: 'regular',
  allowMultiple: false,
  disabled: false,
};

export default ChoiceList;
