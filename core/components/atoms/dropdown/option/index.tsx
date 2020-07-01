import * as React from 'react';
import classNames from 'classnames';
import CheckboxOption from './CheckboxOption';
import DefaultOption from './DefaultOption';
import MetaOption from './MetaOption';
import IconOption from './IconOption';
import IconWithMetaOption from './IconWithMetaOption';
import { OptionType } from '../DropdownList';

export interface OptionRendererProps {
  /**
   * Adds custom option
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * OptionProps: {
   *   optionData: Option;
   *   selected: boolean;
   *   optionIsTop: boolean;
   *   optionIsBottom: boolean;
   *   active?: boolean;
   *   index: number;
   *   onChange?: (checked: boolean) => void;
   * }
   * </pre>
   */
  optionRenderer?: (props: OptionProps) => React.ReactElement;
  /**
   * Type of option
   */
  optionType?: OptionType;
}

export interface OptionSchema {
  label: string;
  value: any;
  icon?: string;
  subInfo?: string;
  optionType?: OptionType;
  selected?: boolean;
  group?: string;
}

export interface OptionTypeProps {
  className: string;
  textClassName: string;
  optionData: OptionSchema;
  selected: boolean;
  index: number;
  onClick?: () => void;
  onChange?: (checked: boolean) => void;
  updateActiveOption?: (index: number) => void;
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
  onChange?: (checked: boolean) => void;
  updateActiveOption?: (index: number) => void;
}

const OptionTypeMapping: { [key: string]: (props: OptionTypeProps) => JSX.Element } = {
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
  } = props;

  const { optionType = 'DEFAULT' } = optionData.optionType ? optionData : props;

  const className = classNames({
    ['Option']: true,
    ['Option-wrapper']: true,
    ['Option--active']: active,
    ['Option--selected']: selected && !checkboxes && !props.menu,
  });

  const textClassName = classNames({
    ['Option-text']: true,
    ['Option-text--wrap']: !props.truncateOption,
  });

  const onUpdateActiveOption = () => {
    if (updateActiveOption) updateActiveOption(index);
  };

  if (props.optionRenderer) {
    return (
      <div
        className="Option-wrapper"
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
  const type = checkboxes ? 'WITH_CHECKBOX' : optionType;
  const component = OptionTypeMapping[type];

  return component(
    {
      optionData,
      selected,
      onChange,
      onClick,
      updateActiveOption,
      textClassName,
      className,
      index,
    }
  );
};

export default Option;
