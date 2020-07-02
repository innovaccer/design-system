import * as React from 'react';
import { OptionTypeProps } from './index';
import Icon from '@/components/atoms/icon';
import classNames from 'classnames';

const IconWithMetaOption = (props: OptionTypeProps) => {
  const {
    className,
    textClassName,
    selected,
    onClick,
    optionData,
    updateActiveOption,
    index,
  } = props;

  const { label, icon, subInfo } = optionData;

  const OptionClass = classNames({
    [`${className}`]: true,
    ['Option--icon']: icon,
  });

  const onClickHandler = () => {
    if (onClick) onClick();
  };

  const onUpdateActiveOption = () => {
    if (updateActiveOption) updateActiveOption(index);
  };

  return (
    <div className={OptionClass} onClick={onClickHandler} onMouseEnter={onUpdateActiveOption}>
      {icon && (
        <Icon className="Option-icon mr-4" name={icon} appearance={selected ? 'white' : 'default'} />
      )}
      <div className={'Option-label'}>
        <div className={textClassName}>{label}</div>
        {subInfo && <div className={'Option-subinfo'}>{subInfo}</div>}
      </div>
    </div>
  );
};

export default IconWithMetaOption;
