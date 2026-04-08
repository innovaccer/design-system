import * as React from 'react';
import { OptionTypeProps } from './index';
import Checkbox from '@/components/atoms/checkbox';
import { Text, MetaList } from '@/index';
import { MetaListProps } from '@/index.type';
import styles from '@css/components/dropdown.module.css';
import classNames from 'classnames';

const CheckboxOption = (props: OptionTypeProps) => {
  const { className, selected, optionData, onChangeHandler, onUpdateActiveOption, dataTest, id = '', menu } = props;
  const { subInfo, label, disabled } = optionData;

  const checkboxClassName = classNames({
    [styles['OptionCheckbox']]: true,
    ['pb-0']: subInfo,
  });

  const renderSubInfo = (subInfo: string | MetaListProps) => {
    const labelAppearance = disabled ? 'disabled' : 'subtle';
    const iconAppearance = selected ? 'white' : 'disabled';

    if (typeof subInfo === 'string') {
      return (
        <Text
          data-test="DesignSystem-DropdownOption--WITH_META--Meta"
          appearance={labelAppearance}
          size="small"
          weight="medium"
        >
          {subInfo}
        </Text>
      );
    }

    const { list = [], seperator } = subInfo;
    return (
      <MetaList
        list={list}
        seperator={seperator}
        iconAppearance={iconAppearance}
        labelAppearance={labelAppearance}
        seperatorAppearance={iconAppearance}
        data-test="DesignSystem-DropdownOption--WITH_META--MetaList"
      />
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const checkboxInput = event.currentTarget.querySelector('input[type="checkbox"]') as HTMLInputElement | null;
      checkboxInput?.click();
    }
  };

  return (
    <div
      className={className}
      onMouseEnter={onUpdateActiveOption}
      onKeyDown={handleKeyDown}
      data-test={dataTest}
      data-disabled={disabled}
      role={menu ? 'menuitemcheckbox' : 'option'}
      aria-checked={menu ? selected : undefined}
      aria-selected={!menu ? selected : undefined}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : 0}
    >
      <Checkbox
        label={label}
        disabled={disabled}
        checked={selected}
        onChange={onChangeHandler}
        tabIndex={-1}
        className={checkboxClassName}
        data-test={`${dataTest}--Checkbox`}
        id={id}
      />
      {subInfo && <div className="pl-8 ml-3">{renderSubInfo(subInfo)}</div>}
    </div>
  );
};

export default CheckboxOption;
