import * as React from 'react';
import classNames from 'classnames';
import CheckboxOption from './CheckboxOption';
import DefaultOption from './DefaultOption';
import MetaOption from './MetaOption';
import IconOption from './IconOption';
import IconWithMetaOption from './IconWithMetaOption';
import { MetaList, Text } from '@/index';
import { MetaListProps, IconProps, TextProps } from '@/index.type';
import { OptionType } from '../DropdownList';
import { ChangeEvent, IconType } from '@/common.type';
import styles from '@css/components/dropdown.module.css';

export type ClickEvent = React.MouseEvent<HTMLDivElement>;

export interface OptionRendererProps {
  /**
   * Adds custom option
   *
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * OptionProps: {
   *   optionData: Option;
   *   selected: boolean;
   *   active?: boolean;
   *   index: number;
   *   onChange?: (checked: boolean) => void;
   * }
   * </pre>
   */
  optionRenderer?: (props: OptionProps) => React.JSX.Element;
  /**
   * Type of option
   */
  optionType?: OptionType;
}

export interface OptionSchema extends Record<string, any> {
  label: string;
  value: string | number;
  icon?: string;
  subInfo?: string | MetaListProps;
  optionType?: OptionType;
  selected?: boolean;
  disabled?: boolean;
  group?: string;
  iconType?: IconType;
}

export interface OptionTypeProps {
  className: string;
  textClassName: string;
  dataTest?: string;
  optionData: OptionSchema;
  selected: boolean;
  appearance?: IconProps['appearance'];
  color?: TextProps['color'];
  index: number;
  onUpdateActiveOption: () => void;
  onClickHandler?: (event: ClickEvent) => void;
  onChangeHandler?: (event: ChangeEvent) => void;
  renderSubInfo: (subInfo: string | MetaListProps) => React.JSX.Element;
  id?: string;
}

interface OptionProps extends OptionRendererProps {
  optionData: OptionSchema;
  selected: boolean;
  truncateOption?: boolean;
  checkboxes?: boolean;
  index: number;
  active?: boolean;
  menu?: boolean;
  onClick?: () => void;
  onChange?: (event: ChangeEvent) => void;
  updateActiveOption?: (index: number) => void;
  id?: string;
}

const OptionTypeMapping: { [key: string]: (props: OptionTypeProps) => React.JSX.Element } = {
  ['DEFAULT']: DefaultOption,
  ['WITH_ICON']: IconOption,
  ['WITH_META']: MetaOption,
  ['WITH_CHECKBOX']: CheckboxOption,
  ['ICON_WITH_META']: IconWithMetaOption,
};

const Option = (props: OptionProps) => {
  const {
    optionData,
    selected,
    onClick,
    updateActiveOption,
    onChange,
    active,
    index,
    checkboxes,
    menu,
    id = '',
  } = props;

  const { optionType = 'DEFAULT' } = optionData.optionType ? optionData : props;
  const { disabled } = optionData;
  const color = disabled ? 'inverse-lightest' : selected && !menu ? 'primary-dark' : 'inverse';
  const appearance = disabled ? 'disabled' : selected && !menu ? 'primary_dark' : 'default';
  const type = checkboxes ? 'WITH_CHECKBOX' : optionType;
  const component = OptionTypeMapping[type];

  const OptionClassName = classNames({
    [styles['Option']]: true,
    [styles['Option--active']]: active,
    [styles['Option--selected']]: selected && !menu,
    [styles['Option--disabled']]: disabled,
    ['OptionWrapper']: true,
    [`color-${color}`]: true,
  });

  const CheckboxClassName = classNames({
    [styles['Option-checkbox']]: true,
    [styles['Option-checkbox--active']]: active,
    ['OptionWrapper']: true,
  });

  const textClassName = classNames({
    [styles['Option-text']]: true,
    [styles['Option-text--wrap']]: !props.truncateOption,
  });

  const customOptionClass = classNames({
    ['OptionWrapper']: true,
    [styles['OptionWrapper--disabled']]: disabled,
  });

  const onUpdateActiveOption = () => {
    if (disabled) return;

    if (updateActiveOption) updateActiveOption(index);
  };

  const onClickHandler = (e: ClickEvent) => {
    e.stopPropagation();
    if (disabled) return;

    if (onClick) onClick();
  };

  const onChangeHandler = (e: ChangeEvent) => {
    e.stopPropagation();
    if (disabled) return;

    if (onChange) onChange(e);
  };

  if (props.optionRenderer) {
    return (
      <div
        data-test="DesignSystem-DropdownOption--Custom"
        className={customOptionClass}
        data-disabled={disabled}
        onMouseEnter={onUpdateActiveOption}
        {...(!checkboxes && { onClick })}
      >
        {props.optionRenderer({
          optionData,
          selected,
          onChange,
          active,
          index,
        })}
      </div>
    );
  }

  const renderSubInfo = (subInfo: string | MetaListProps) => {
    const labelAppearance = disabled ? 'disabled' : selected && !menu ? 'white' : 'subtle';
    const subInfoColor = disabled ? 'inverse-lightest' : selected && !menu ? 'primary-dark' : 'inverse-lighter';
    const iconAppearance = selected ? 'white' : 'disabled';

    if (typeof subInfo === 'string') {
      return (
        <Text
          data-test="DesignSystem-DropdownOption--WITH_META--Meta"
          color={subInfoColor}
          size="small"
          weight="medium"
          className={styles['Option-subInfo']}
        >
          {subInfo}
        </Text>
      );
    }

    const { list = [], seperator } = subInfo;
    return (
      <MetaList
        list={list}
        seperator={seperator}
        iconAppearance={iconAppearance}
        labelAppearance={labelAppearance}
        seperatorAppearance={iconAppearance}
        data-test="DesignSystem-DropdownOption--WITH_META--MetaList"
      />
    );
  };

  return component({
    selected,
    index,
    renderSubInfo,
    optionData,
    textClassName,
    appearance,
    color,
    onClickHandler,
    onChangeHandler,
    onUpdateActiveOption,
    dataTest: `DesignSystem-DropdownOption--${type}`,
    className: checkboxes ? CheckboxClassName : OptionClassName,
    id,
  });
};

export default Option;
