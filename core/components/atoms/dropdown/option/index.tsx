import * as React from 'react';
import classNames from 'classnames';
import CheckboxOption from './CheckboxOption';
import DefaultOption from './DefaultOption';
import MetaOption from './MetaOption';
import IconOption from './IconOption';
import IconWithMetaOption from './IconWithMetaOption';

export interface OptionRendererProps {
  /**
   * Adds custom option
   */
  optionRenderer?: (props: OptionProps) => React.ReactElement;
}

interface OptionData {
  label: string;
  value: any;
  icon?: string;
  subInfo?: string;
}

export interface OptionTypeProps {
  className: string;
  textClassName: string;
  optionData: OptionData;
  selected: boolean;
  onClick?: () => void;
  onChange?: (checked: boolean) => void;
}

interface OptionProps extends OptionRendererProps {
  optionData: OptionData;
  selected: boolean;
  optionIsTop: boolean;
  optionIsBottom: boolean;
  optionsWrap?: boolean;
  index: number;
  optionType: string;
  onClick?: () => void;
  onChange?: (checked: boolean) => void;
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
    optionIsTop,
    optionIsBottom,
    optionsWrap,
    onClick,
    onChange,
    optionType,
  } = props;

  const className = classNames({
    ['Option']: true,
    ['Option-wrapper']: true,
    ['Option--top']: optionIsTop,
    ['Option--bottom']: optionIsBottom,
    ['Option--selected']: selected && optionType !== 'WITH_CHECKBOX',
  });

  const textClassName = classNames({
    ['Option-text']: true,
    ['Option-text--wrap']: optionsWrap,
  });

  if (props.optionRenderer) {
    return (
      <div className="Option-wrapper">
        {props.optionRenderer(props)}
      </div>
    );
  }

  const component = OptionTypeMapping[optionType];

  return component(
    {
      optionData,
      selected,
      onChange,
      onClick,
      textClassName,
      className,
    }
  );
};

export default Option;
