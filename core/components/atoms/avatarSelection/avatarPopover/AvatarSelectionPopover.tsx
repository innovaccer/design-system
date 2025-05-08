import * as React from 'react';
import { Checkbox, Tooltip, Avatar, Text } from '@/index';
import { AvatarData } from '../AvatarSelection';
import SelectionAvatarInput from './AvatarSelectionInput';
import classNames from 'classnames';
import AvatarSelectionList from './AvatarSelectionList';
import AvatarSelectionOption from './AvatarSelectionOption';
import AvatarSelectionEmptyState from './AvatarSelectionEmptyState';
import { AvatarSelectionContext } from '../AvatarSelectionContext';
import styles from '@css/components/avatarSelection.module.css';

interface AvatarPopoverProps {
  hiddenAvatarList: AvatarData[];
  searchPlaceholder?: string;
  searchComparator?: (searchValue: string, avatarData: AvatarData) => boolean;
  children?: React.ReactNode;
  customStyle: { width?: number; minHeight?: number; maxHeight?: number };
}

interface AvatarSelectionItemProps {
  avatarData: AvatarData;
  isSelected?: boolean;
}

const AvatarSelectionItem = (props: AvatarSelectionItemProps) => {
  const { avatarData, isSelected } = props;
  const [showTooltip, setShowTooltip] = React.useState(false);
  const elementRef = React.useRef<HTMLElement | null>(null);

  const { firstName = '', lastName = '', disabled, tooltipSuffix, image, icon } = avatarData;
  const name = `${firstName || ''} ${lastName || ''} ${tooltipSuffix || ''}` || '';

  const triggerClassName = classNames({
    ['cursor-not-allowed']: disabled,
    ['ellipsis--noWrap']: true,
  });

  return (
    <AvatarSelectionOption
      value={avatarData}
      disabled={disabled}
      onFocus={() => {
        setShowTooltip(true);
      }}
      onBlur={() => {
        setShowTooltip(false);
      }}
    >
      <Checkbox
        defaultChecked={isSelected}
        checked={isSelected}
        size="regular"
        tabIndex={-1}
        data-test="DesignSystem-AvatarSelection--Checkbox"
      />
      <Avatar {...avatarData} className="ml-3" withTooltip={false}>
        {image || icon}
      </Avatar>
      <Tooltip
        showOnTruncation={true}
        tooltip={name}
        elementRef={elementRef}
        open={showTooltip}
        triggerClass={triggerClassName}
      >
        <Text className="ellipsis--noWrap ml-4" ref={elementRef}>
          {name}
        </Text>
      </Tooltip>
    </AvatarSelectionOption>
  );
};

export const AvatarSelectionPopover = (props: AvatarPopoverProps) => {
  const { hiddenAvatarList, customStyle, searchPlaceholder, searchComparator, children } = props;

  const [searchList, setSearchList] = React.useState(hiddenAvatarList);
  const [searchValue, setSearchValue] = React.useState('');

  const contextProp = React.useContext(AvatarSelectionContext);

  const { selectedItems, listRef, withSearch, popoverId } = contextProp;

  if (children) {
    return <>{children}</>;
  }

  const onSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;

    const list = hiddenAvatarList?.filter((avatarData: AvatarData) => {
      const { firstName, lastName } = avatarData;

      if (searchComparator) {
        return searchComparator(searchValue, avatarData);
      }
      return (
        firstName?.toLowerCase()?.startsWith(searchValue.toLowerCase()) ||
        lastName?.toLowerCase()?.startsWith(searchValue.toLowerCase())
      );
    });

    setSearchValue(searchValue);
    setSearchList(list);
  };

  const onClearHandler = () => {
    setSearchValue('');
    setSearchList(hiddenAvatarList);
  };

  const popperClassName = classNames({
    ['py-3']: !withSearch,
    ['pb-3']: withSearch,
    [styles['SelectionAvatarGroup-popper']]: true,
  });

  return (
    <div
      style={{ width: customStyle.width }}
      ref={listRef}
      data-test="DesignSystem-AvatarSelection--Popover"
      id={popoverId}
    >
      {withSearch && (
        <SelectionAvatarInput
          placeholder={searchPlaceholder}
          onChange={onSearchHandler}
          value={searchValue}
          onClear={onClearHandler}
        />
      )}

      <div style={customStyle} className={popperClassName}>
        {searchList.length === 0 && (
          <AvatarSelectionEmptyState
            height={customStyle.maxHeight}
            title="No users found"
            description="Try modifying your search to find what you are looking for."
          />
        )}

        <AvatarSelectionList>
          {searchList.map((avatarData: AvatarData, index: number) => {
            const isSelected = selectedItems?.includes(avatarData);

            return <AvatarSelectionItem key={index} avatarData={avatarData} isSelected={isSelected} />;
          })}
        </AvatarSelectionList>
      </div>
    </div>
  );
};

export default AvatarSelectionPopover;
