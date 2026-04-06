import * as React from 'react';
import { Listbox } from '@/index';
import classNames from 'classnames';
import { AvatarData } from './AvatarGroup';
import styles from '@css/components/avatarGroup.module.css';
import AvatarGroupEmptyState from './AvatarGroupEmptyState';
import AvatarInput from './AvatarInput';
import AvatarOptionItem from './AvatarOptionItem';

interface AvatarPopperProps {
  id?: string;
  popperRenderer?: (names: AvatarData[]) => JSX.Element;
  maxHeight?: number | string;
  minHeight?: number | string;
  width?: number | string;
  popperClassName?: string;
  hiddenAvatarList: AvatarData[];
  withSearch?: boolean;
  searchPlaceholder?: string;
  searchComparator?: (searchValue: string, avatarData: AvatarData) => boolean;
  size?: AvatarData['size'];
  onClose?: () => void;
  onTabOut?: (e: React.KeyboardEvent, container: HTMLElement) => void;
}

const AvatarPopperBody = (props: AvatarPopperProps) => {
  const {
    id,
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
    onClose,
    onTabOut,
  } = props;

  const [searchValue, setSearchValue] = React.useState<string>('');
  const [searchList, setSearchList] = React.useState<AvatarData[]>(hiddenAvatarList);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [rovingIndex, setRovingIndex] = React.useState<number>(0);

  React.useLayoutEffect(() => {
    if (!containerRef.current) return;
    const items = Array.from(
      containerRef.current.querySelectorAll<HTMLElement>('[data-test="DesignSystem-AvatarGroup--Item"]')
    );
    items.forEach((item, index) => {
      if (item.getAttribute('data-disabled') !== 'true') {
        item.tabIndex = index === rovingIndex ? 0 : -1;
      }
    });
  }, [rovingIndex, searchList]);

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
    setRovingIndex(0); // Reset roving index on search
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    // Get all interactive elements inside the popover for arrow navigation
    const focusables = Array.from(
      containerRef.current.querySelectorAll<HTMLElement>(
        'input:not([disabled]), button:not([disabled]), [data-test="DesignSystem-AvatarGroup--Item"]:not([data-disabled="true"])'
      )
    );

    const currentIndex = focusables.indexOf(document.activeElement as HTMLElement);

    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = currentIndex === focusables.length - 1 ? 0 : currentIndex + 1;
      const nextEl = focusables[nextIndex];
      if (nextEl?.hasAttribute('data-test') && nextEl.getAttribute('data-test') === 'DesignSystem-AvatarGroup--Item') {
        const itemWrappers = Array.from(
          containerRef.current.querySelectorAll<HTMLElement>(
            '[data-test="DesignSystem-AvatarGroup--Item"]:not([data-disabled="true"])'
          )
        );
        setRovingIndex(itemWrappers.indexOf(nextEl));
      }
      nextEl?.focus();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = currentIndex <= 0 ? focusables.length - 1 : currentIndex - 1;
      const prevEl = focusables[prevIndex];
      if (prevEl?.hasAttribute('data-test') && prevEl.getAttribute('data-test') === 'DesignSystem-AvatarGroup--Item') {
        const itemWrappers = Array.from(
          containerRef.current.querySelectorAll<HTMLElement>(
            '[data-test="DesignSystem-AvatarGroup--Item"]:not([data-disabled="true"])'
          )
        );
        setRovingIndex(itemWrappers.indexOf(prevEl));
      }
      prevEl?.focus();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose?.();
    } else if (e.key === 'Tab') {
      // Tab only cycles between natively tabbable elements (input, button) — not roving list items
      const tabbables = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>('input:not([disabled]), button:not([disabled])')
      );
      const currentTabIdx = tabbables.indexOf(document.activeElement as HTMLElement);

      if (currentTabIdx === -1) {
        if (e.shiftKey && tabbables.length > 0) {
          e.preventDefault();
          tabbables[tabbables.length - 1]?.focus();
          return;
        }

        // Focus is on a list item — exit per spec
        e.preventDefault();
        if (onTabOut) onTabOut(e, containerRef.current);
        else onClose?.();
        return;
      }

      const nextTabIdx = e.shiftKey ? currentTabIdx - 1 : currentTabIdx + 1;

      if (nextTabIdx < 0 || nextTabIdx >= tabbables.length) {
        if (onTabOut) {
          e.preventDefault();
          onTabOut(e, containerRef.current);
        } else {
          onClose?.();
        }
      } else {
        e.preventDefault();
        tabbables[nextTabIdx]?.focus();
      }
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
      id={id}
      style={{ width: customStyle.width }}
      data-test="DesignSystem-AvatarGroup--Popover"
      ref={containerRef}
      onKeyDown={handleKeyDown}
    >
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
          <>
            {/* @ts-expect-error customFocusManagement is intentionally not exported in ListboxProps */}
            <Listbox
              tagName="ul"
              showDivider={false}
              type="option"
              role="listbox"
              customFocusManagement
              size={size === 'micro' ? 'tight' : 'compressed'}
              data-test="DesignSystem-AvatarGroup--List"
            >
              {searchList.map((item: AvatarData, index: number) => {
                return <AvatarOptionItem key={index} avatarData={{ ...item, size }} />;
              })}
            </Listbox>
          </>
        )}
      </div>
    </div>
  );
};

export default AvatarPopperBody;
