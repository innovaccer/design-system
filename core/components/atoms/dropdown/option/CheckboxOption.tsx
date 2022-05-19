import * as React from 'react';
import { OptionTypeProps } from './index';
import Checkbox from '@/components/atoms/checkbox';
import { Text, MetaList } from '@/index';
import { MetaListProps } from '@/index.type';

const CheckboxOption = (props: OptionTypeProps) => {
  const { className, selected, optionData, onClickHandler, onChangeHandler, onUpdateActiveOption, dataTest } = props;
  const { subInfo, label, disabled } = optionData;

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

  return (
    //eslint-disable-next-line
    <div
      onClick={onClickHandler}
      className={className}
      onMouseEnter={onUpdateActiveOption}
      data-test={dataTest}
      data-disabled={disabled}
    >
      <Checkbox
        onChange={onChangeHandler}
        label={label}
        disabled={disabled}
        checked={selected}
        tabIndex={-1}
        className={`OptionCheckbox ${subInfo ? 'pb-0' : ''}`}
        data-test={`${dataTest}--Checkbox`}
      />
      {subInfo && <div className="pl-8 ml-3">{renderSubInfo(subInfo)}</div>}
    </div>
  );
};

export default CheckboxOption;
