import * as React from 'react';
import { Checkbox } from '@/index';
import { AvatarData } from '../SelectionAvatarGroup';
import SelectionAvatarInput from './SelectionAvatarInput';
import classNames from 'classnames';
import SelectionAvatarList from './SelectionAvatarList';
import SelectionAvatarOption from './SelectionAvatarOption';
import SelectionAvatarEmptyState from './SelectionAvatarEmptyState';
import { SelectionAvatarContext } from '../SelectionAvatarProvider';

interface AvatarPopoverProps {
  hiddenAvatarList: AvatarData[];
  searchPlaceholder?: string;
  searchComparator?: (searchValue: string, avatarData: AvatarData) => boolean;
  children?: React.ReactNode;
  customStyle: { width?: number; minHeight?: number; maxHeight?: number };
}

export const SelectionAvatarPopover = (props: AvatarPopoverProps) => {
  const { hiddenAvatarList, customStyle, searchPlaceholder, searchComparator, children } = props;

  const [searchList, setSearchList] = React.useState(hiddenAvatarList);
  const [searchValue, setSearchValue] = React.useState('');

  const contextProp = React.useContext(SelectionAvatarContext);

  const { selectedItems, listRef, withSearch } = contextProp;

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
  });

  return (
    <div
      // className={popperClassName}
      style={{ width: customStyle.width }}
      ref={listRef}
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
          <SelectionAvatarEmptyState
            height={customStyle.maxHeight}
            title="No users found"
            description="Try modifying your search to find what you are looking for."
          />
        )}

        <SelectionAvatarList>
          {searchList.map((avatarData: AvatarData, index: number) => {
            const { firstName = '', lastName = '' } = avatarData;
            const name = `${firstName} ${lastName}`;
            const isSelected = selectedItems?.includes(avatarData);

            return (
              <SelectionAvatarOption key={index} value={avatarData}>
                <Checkbox defaultChecked={isSelected} checked={isSelected} label={name} size="regular" tabIndex={-1} />
              </SelectionAvatarOption>
            );
          })}
        </SelectionAvatarList>
      </div>
    </div>
  );
};

export default SelectionAvatarPopover;
