import * as React from 'react';
import { OptionTypeProps } from './index';

const MetaOption = (props: OptionTypeProps) => {
  const {
    className,
    textClassName,
    onClickHandler,
    optionData,
    onUpdateActiveOption,
    renderSubInfo,
    dataTest,
  } = props;

  const { subInfo, label } = optionData;

  return (
    <div
      className={className}
      onClick={onClickHandler}
      onMouseEnter={onUpdateActiveOption}
      data-test={dataTest}
    >
      <div className={'Option-label'}>
        <div className={textClassName}>{label}</div>
        {subInfo && renderSubInfo(subInfo)}
      </div>
    </div>
  );
};

export default MetaOption;
