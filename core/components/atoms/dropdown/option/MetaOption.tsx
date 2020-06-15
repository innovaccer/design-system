import * as React from 'react';
import { OptionTypeProps } from './index';

const MetaOption = (props: OptionTypeProps) => {
  const {
    className,
    textClassName,
    onClick,
    optionData,
  } = props;

  const { label, subInfo } = optionData;

  const onClickHandler = () => {
    if (onClick) onClick();
  };

  return (
    <div className={className} onClick={onClickHandler}>
      <div className={'Option-label'}>
        <div className={textClassName}>{label}</div>
        {subInfo && <div className={'Option-subinfo'}>{subInfo}</div>}
      </div>
    </div>
  );
};

export default MetaOption;
