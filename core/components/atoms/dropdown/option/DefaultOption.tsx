import * as React from 'react';
import { OptionTypeProps } from './index';

const DefaultOption = (props: OptionTypeProps) => {
  const {
    className,
    textClassName,
    onClick,
    optionData,
    updateActiveOption,
    index,
  } = props;

  const { label } = optionData;

  const onClickHandler = () => {
    if (onClick) onClick();
  };

  const onUpdateActiveOption = () => {
    if (updateActiveOption) updateActiveOption(index);
  };

  return (
    <div className={className} onClick={onClickHandler} onMouseEnter={onUpdateActiveOption}>
      <div className={'Option-label'}>
        <div className={textClassName}>{label}</div>
      </div>
    </div>
  );
};

export default DefaultOption;
