import * as React from 'react';
import { OptionTypeProps } from './index';
import { Icon, Text } from '@/index';
import classNames from 'classnames';
import styles from '@css/components/dropdown.module.css';

const IconWithMetaOption = (props: OptionTypeProps) => {
  const {
    className,
    textClassName,
    renderSubInfo,
    onClickHandler,
    optionData,
    onUpdateActiveOption,
    appearance,
    color,
    dataTest,
  } = props;

  const { subInfo, label, icon, disabled } = optionData;

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
      {icon && <Icon data-test={`${dataTest}--Icon`} className={IconClass} name={icon} appearance={appearance} />}
      <div className={styles['Option-label']}>
        <Text className={textClassName} color={color}>
          {label}
        </Text>
        {subInfo && renderSubInfo(subInfo)}
      </div>
    </div>
  );
};

export default IconWithMetaOption;
