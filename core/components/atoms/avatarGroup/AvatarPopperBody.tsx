import * as React from 'react';
import { Listbox } from '@/index';
import classNames from 'classnames';
import { AvatarData } from './AvatarGroup';
import styles from '@css/components/avatarGroup.module.css';
import AvatarGroupEmptyState from './AvatarGroupEmptyState';
import AvatarInput from './AvatarInput';
import AvatarOptionItem from './AvatarOptionItem';

interface AvatarPopperProps {
  popperRenderer?: (names: AvatarData[]) => React.JSX.Element;
  maxHeight?: number | string;
  minHeight?: number | string;
  width?: number | string;
  popperClassName?: string;
  hiddenAvatarList: AvatarData[];
  withSearch?: boolean;
  searchPlaceholder?: string;
  searchComparator?: (searchValue: string, avatarData: AvatarData) => boolean;
  size?: AvatarData['size'];
}

const AvatarPopperBody = (props: AvatarPopperProps) => {
  const {
    hiddenAvatarList,
    popperRenderer,
    maxHeight,
    minHeight,
    width,
    popperClassName,
    withSearch,
    searchPlaceholder,
    searchComparator,
    size,
  } = props;

  const [searchValue, setSearchValue] = React.useState<string>('');
  const [searchList, setSearchList] = React.useState<AvatarData[]>(hiddenAvatarList);

  const onSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);
    const list = hiddenAvatarList.filter((avatarData: AvatarData) => {
      const { firstName, lastName } = avatarData;

      if (searchComparator) {
        return searchComparator(inputValue, avatarData);
      }
      return (
        firstName?.toLowerCase()?.startsWith(inputValue.toLowerCase()) ||
        lastName?.toLowerCase()?.startsWith(inputValue.toLowerCase())
      );
    });

    setSearchList(list);
  };

  const onClearHandler = () => {
    setSearchValue('');
    setSearchList(hiddenAvatarList);
  };

  const popperClass = classNames(
    {
      [styles['AvatarGroup-Popper']]: true,
      ['py-3']: !withSearch,
      ['pb-3']: withSearch,
    },
    popperClassName
  );

  const searchInputHeight = 36;
  const searchBorder = 1;

  const customStyle = {
    width,
    minHeight: minHeight,
    maxHeight: withSearch ? (maxHeight as number)! - searchInputHeight - searchBorder : maxHeight,
  };

  if (popperRenderer) {
    return popperRenderer(hiddenAvatarList);
  }

  return (
    <div style={{ width: customStyle.width }} data-test="DesignSystem-AvatarGroup--Popover">
      {withSearch && (
        <AvatarInput
          value={searchValue}
          placeholder={searchPlaceholder}
          onChange={onSearchHandler}
          onClear={onClearHandler}
        />
      )}
      <div style={customStyle} className={popperClass}>
        {searchList.length === 0 && (
          <AvatarGroupEmptyState
            height={customStyle.maxHeight}
            title="No users found"
            description="Try modifying your search to find what you are looking for."
          />
        )}
        {!!searchList.length && (
          <Listbox
            tagName="ul"
            showDivider={false}
            type="description"
            size="compressed"
            data-test="DesignSystem-AvatarGroup--List"
          >
            {searchList.map((item: AvatarData, index: number) => {
              return <AvatarOptionItem key={index} avatarData={{ ...item, size }} />;
            })}
          </Listbox>
        )}
      </div>
    </div>
  );
};

export default AvatarPopperBody;
