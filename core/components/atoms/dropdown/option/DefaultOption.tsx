import * as React from 'react';
import { Text, Icon } from '@/index';
import { OptionTypeProps } from './index';
import styles from '@css/components/dropdown.module.css';

const DefaultOption = (props: OptionTypeProps) => {
  const {
    className,
    textClassName,
    onClickHandler,
    optionData,
    color,
    appearance,
    onUpdateActiveOption,
    dataTest,
    selected,
    menu,
  } = props;

  const { label, disabled } = optionData;
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
      role={menu ? 'menuitem' : 'option'}
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled || undefined}
      aria-selected={!menu ? selected : undefined}
    >
      {/* eslint-enable  */}
      <div className={styles['Option-label']}>
        <Text className={textClassName} color={color} id={optionData.optionID}>
          {label}
        </Text>
      </div>
      {selected && !menu && (
        <Icon
          name="check"
          appearance={appearance}
          className={styles['Option-checkIcon']}
          size={16}
          data-test="DesignSystem-DropdownOption--checkIcon"
        />
      )}
    </div>
  );
};

export default DefaultOption;
