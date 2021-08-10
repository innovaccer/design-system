import * as React from 'react';
import { Text } from '@/index';
import { OptionTypeProps } from './index';

const MetaOption = (props: OptionTypeProps) => {
  const {
    className,
    textClassName,
    onClickHandler,
    optionData,
    onUpdateActiveOption,
    renderSubInfo,
    appearance,
    dataTest,
  } = props;

  const { subInfo, label, disabled } = optionData;

  return (
    <div
      className={className}
      onClick={onClickHandler}
      onMouseEnter={onUpdateActiveOption}
      data-test={dataTest}
      data-disabled={disabled}
    >
      <div className={'Option-label'}>
        <Text className={textClassName} appearance={appearance}>
          {label}
        </Text>
        {subInfo && renderSubInfo(subInfo)}
      </div>
    </div>
  );
};

export default MetaOption;
