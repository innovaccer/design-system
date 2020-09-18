import * as React from 'react';
import { OptionTypeProps } from './index';

const DefaultOption = (props: OptionTypeProps) => {
  const {
    className,
    textClassName,
    onClickHandler,
    optionData,
    onUpdateActiveOption,
    dataTest,
  } = props;

  const { label } = optionData;

  return (
    <div
      className={className}
      onClick={onClickHandler}
      onMouseEnter={onUpdateActiveOption}
      data-test={dataTest}
    >
      <div className={'Option-label'}>
        <div className={textClassName}>{label}</div>
      </div>
    </div>
  );
};

export default DefaultOption;
