import * as React from 'react';
import { Checkbox } from '@/index';
import { AvatarData } from '../AvatarSelection';
import SelectionAvatarInput from './AvatarSelectionInput';
import classNames from 'classnames';
import AvatarSelectionList from './AvatarSelectionList';
import AvatarSelectionOption from './AvatarSelectionOption';
import AvatarSelectionEmptyState from './AvatarSelectionEmptyState';
import { AvatarSelectionContext } from '../AvatarSelectionContext';

interface AvatarPopoverProps {
  hiddenAvatarList: AvatarData[];
  searchPlaceholder?: string;
  searchComparator?: (searchValue: string, avatarData: AvatarData) => boolean;
  children?: React.ReactNode;
  customStyle: { width?: number; minHeight?: number; maxHeight?: number };
}

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
    ['SelectionAvatarGroup-popper']: true,
    ['overflow-hidden']: true,
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
            const { firstName = '', lastName = '' } = avatarData;
            const name = `${firstName} ${lastName}`;
            const isSelected = selectedItems?.includes(avatarData);

            return (
              <AvatarSelectionOption key={index} value={avatarData}>
                <Checkbox
                  defaultChecked={isSelected}
                  checked={isSelected}
                  label={name}
                  size="regular"
                  tabIndex={-1}
                  className="ellipsis--noWrap"
                  data-test="DesignSystem-AvatarSelection--Checkbox"
                />
              </AvatarSelectionOption>
            );
          })}
        </AvatarSelectionList>
      </div>
    </div>
  );
};

export default AvatarSelectionPopover;
