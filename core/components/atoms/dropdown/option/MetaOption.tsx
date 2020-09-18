import * as React from 'react';
import { OptionTypeProps } from './index';

const MetaOption = (props: OptionTypeProps) => {
  const {
    className,
    textClassName,
    onClickHandler,
    optionData,
    onUpdateActiveOption,
    dataTest,
  } = props;

  const { label, subInfo } = optionData;

  return (
    <div
      className={className}
      onClick={onClickHandler}
      onMouseEnter={onUpdateActiveOption}
      data-test={dataTest}
    >
      <div className={'Option-label'}>
        <div className={textClassName}>{label}</div>
        {subInfo && <div className={'Option-subinfo'}>{subInfo}</div>}
      </div>
    </div>
  );
};

export default MetaOption;
