import * as React from 'react';
import { Text } from '@/index';
import { OptionTypeProps } from './index';

const DefaultOption = (props: OptionTypeProps) => {
  const { className, textClassName, onClickHandler, optionData, appearance, onUpdateActiveOption, dataTest } = props;

  const { label, disabled } = optionData;

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
      </div>
    </div>
  );
};

export default DefaultOption;
