import * as React from 'react';
import { Text } from '@/index';
import { OptionTypeProps } from './index';
import styles from '@css/components/dropdown.module.css';

const MetaOption = (props: OptionTypeProps) => {
  const { className, textClassName, onClickHandler, optionData, onUpdateActiveOption, renderSubInfo, color, dataTest } =
    props;

  const { subInfo, label, disabled } = optionData;

  return (
    // TODO(a11y): fix accessibility
    /* eslint-disable */
    <div
      className={className}
      onClick={onClickHandler}
      onMouseEnter={onUpdateActiveOption}
      data-test={dataTest}
      data-disabled={disabled}
    >
      {/* eslint-enable */}
      <div className={styles['Option-label']}>
        <Text className={textClassName} color={color}>
          {label}
        </Text>
        {subInfo && renderSubInfo(subInfo)}
      </div>
    </div>
  );
};

export default MetaOption;
