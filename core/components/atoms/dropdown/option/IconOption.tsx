import * as React from 'react';
import { OptionTypeProps } from './index';
import { Text, Icon } from '@/index';
import classNames from 'classnames';
import styles from '@css/components/dropdown.module.css';

const IconOption = (props: OptionTypeProps) => {
  const {
    className,
    textClassName,
    onClickHandler,
    optionData,
    onUpdateActiveOption,
    color,
    dataTest,
    selected,
    menu,
  } = props;

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
      role={menu ? 'menuitem' : 'option'}
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled || undefined}
      aria-selected={!menu ? selected : undefined}
    >
      {/* eslint-enable  */}
      {icon && <Icon className={IconClass} data-test={`${dataTest}--Icon`} name={icon} type={iconType} />}
      <div className={styles['Option-label']}>
        <Text className={textClassName} color={color}>
          {label}
        </Text>
      </div>
      {selected && !menu && (
        <Icon
          name="check"
          appearance={props.appearance}
          className={styles['Option-checkIcon']}
          size={16}
          data-test="DesignSystem-DropdownOption--checkIcon"
        />
      )}
    </div>
  );
};

export default IconOption;
