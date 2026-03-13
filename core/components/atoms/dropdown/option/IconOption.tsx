import * as React from 'react';
import { OptionTypeProps } from './index';
import { Text, Icon } from '@/index';
import classNames from 'classnames';
import styles from '@css/components/dropdown.module.css';

const IconOption = (props: OptionTypeProps) => {
  const { className, textClassName, onClickHandler, optionData, onUpdateActiveOption, color, dataTest } = props;

  const { label, icon, disabled, iconType } = optionData;

  const OptionClass = classNames({
    [`${className}`]: true,
    [styles['Option--icon']]: icon,
  });

  const IconClass = classNames({
    [styles['Option-icon']]: true,
    ['mr-4']: true,
  });
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClickHandler?.(event as unknown as React.MouseEvent<HTMLDivElement>);
    }
  };

  return (
    <div
      className={OptionClass}
      onClick={onClickHandler}
      onKeyDown={handleKeyDown}
      onMouseEnter={onUpdateActiveOption}
      data-test={dataTest}
      data-disabled={disabled}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled || undefined}
    >
      {/* eslint-enable  */}
      {icon && <Icon className={IconClass} data-test={`${dataTest}--Icon`} name={icon} type={iconType} />}
      <div className={styles['Option-label']}>
        <Text className={textClassName} color={color}>
          {label}
        </Text>
      </div>
    </div>
  );
};

export default IconOption;
