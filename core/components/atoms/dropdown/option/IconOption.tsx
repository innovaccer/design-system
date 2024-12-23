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

  return (
    // TODO(a11y): fix accessibility
    /* eslint-disable */
    <div
      className={OptionClass}
      onClick={onClickHandler}
      onMouseEnter={onUpdateActiveOption}
      data-test={dataTest}
      data-disabled={disabled}
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
