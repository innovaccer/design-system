import * as React from 'react';
import { Text } from '@/index';
import { OptionTypeProps } from './index';
import styles from '@css/components/dropdown.module.css';

const MetaOption = (props: OptionTypeProps) => {
  const { className, textClassName, onClickHandler, optionData, onUpdateActiveOption, renderSubInfo, color, dataTest } =
    props;

  const { subInfo, label, disabled } = optionData;
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClickHandler?.(event as unknown as React.MouseEvent<HTMLDivElement>);
    }
  };

  return (
    <div
      className={className}
      onClick={onClickHandler}
      onKeyDown={handleKeyDown}
      onMouseEnter={onUpdateActiveOption}
      data-test={dataTest}
      data-disabled={disabled}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled || undefined}
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
