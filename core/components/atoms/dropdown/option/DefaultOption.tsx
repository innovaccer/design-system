import * as React from 'react';
import { OptionTypeProps } from './index';

const DefaultOption = (props: OptionTypeProps) => {
  const {
    className,
    textClassName,
    onClick,
    optionData,
  } = props;

  const { label } = optionData;

  const onClickHandler = () => {
    if (onClick) onClick();
  };

  return (
    <div className={className} onClick={onClickHandler}>
      <div className={'Option-label'}>
        <div className={textClassName}>{label}</div>
      </div>
    </div>
  );
};

export default DefaultOption;
