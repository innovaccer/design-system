import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { Popover, OutsideClick } from '@/index';
import { AvatarProps, PopoverProps, AvatarIconProps, AvatarImageProps } from '@/index.type';
import { AvatarSize } from '@/common.type';
import { SelectionAvatars, SelectionAvatarCount } from './SelectionAvatars';
import SelectionAvatarProvider from './SelectionAvatarProvider';
import { focusListItem } from './SelectionAvatars/utils';
import {
  SelectionAvatarPopover,
  SelectionAvatarEmptyState,
  SelectionAvatarOption,
  SelectionAvatarList,
  SelectionAvatarInput,
} from './SelectionAvatarPopover';

export interface AvatarData extends Record<string, any> {
  firstName?: string;
  lastName?: string;
  appearance?: AvatarProps['appearance'];
  iconOptions?: AvatarIconProps;
  imgOptions?: AvatarImageProps;
  selected?: boolean;
}

export interface SelectionAvatarGroupProps extends BaseProps {
  /**
   * List of `Avatars`
   *
   * <pre className="DocPage-codeBlock">
   * AvatarData: {
   *  firstName?: string;
   *  lastName?: string;
   *  appearance?: Appearance;
   *  iconOptions?: AvatarIconProps;
   *  imgOptions?: AvatarImageProps;
   * }
   *
   * AvatarIconProps: {
   *  name?: string;
   *  type?: 'outlined' | 'rounded';
   *  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
   *  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
   *  tabIndex?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>['tabIndex'];
   * }
   *
   * AvatarImageProps: {
   *  children?: React.ReactNode;
   *  src?: string;
   * }
   * </pre>
   *
   */
  list: AvatarData[];
  /**
   * Max `Avatars` to show before +x.
   */
  max: number;
  /**
   * Border color of `Avatars`.
   */
  borderColor: string;
  /**
   * Determines size of `Avatar`
   */
  size: AvatarSize;
  /**
   * Position to place the tooltip on `Avatars` shown before +x
   */
  tooltipPosition: PopoverProps['position'];
  /**
   * Callback function to create custom avatar content
   */
  avatarRenderer?: (data: AvatarData) => JSX.Element;
  /**
   * Callback function for avatar selection
   */
  onSelect?: (data?: AvatarData) => void;
  /**
   * Adds custom width to Popper
   */
  width?: number;
  /**
   * Adds maximum height to Popper
   */
  maxHeight?: number;
  /**
   * Adds minimum height to Popper
   */
  minHeight?: number;
  /**
   * Set `true` to show search input inside popper
   */
  withSearch?: boolean;
  /**
   * Describes placeholder for search input inside popper
   */
  searchPlaceholder?: string;
  /**
   * Comparator function to search inside popover
   */
  searchComparator?: (searchValue: string, avatarData: AvatarData) => boolean;
  /**
   * Element to be render inside popover
   */
  children?: React.ReactNode;
}

export const SelectionAvatarGroup = (props: SelectionAvatarGroupProps) => {
  const {
    max,
    borderColor,
    tooltipPosition,
    list,
    className,
    size,
    avatarRenderer,
    onSelect,
    width,
    maxHeight,
    minHeight,
    searchPlaceholder,
    withSearch,
    searchComparator,
    children,
  } = props;

  const [selectedItems, setSelectedItems] = React.useState<AvatarData[]>([]);
  const [openPopover, setOpenPopover] = React.useState(false);
  const [focusedOption, setFocusedOption] = React.useState<Element | undefined>();
  const [highlightFirstItem, setHighlightFirstItem] = React.useState<boolean>(false);
  const [highlightLastItem, setHighlightLastItem] = React.useState<boolean>(false);

  const listRef = React.createRef<HTMLDivElement>();
  const triggerRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    const selectedList: AvatarData[] = [];
    list.forEach((avatarItem: AvatarData) => {
      if (avatarItem.selected) {
        selectedList.push(avatarItem);
      }
    });
    setSelectedItems(selectedList);
  }, []);

  React.useEffect(() => {
    if (!openPopover) {
      setHighlightFirstItem(false);
      setHighlightLastItem(false);
    }
  }, [openPopover]);

  React.useEffect(() => {
    if (highlightFirstItem && openPopover) {
      requestAnimationFrame(() => focusListItem('down', setFocusedOption, listRef, withSearch));
    }
  }, [highlightFirstItem]);

  React.useEffect(() => {
    if (highlightLastItem && openPopover) {
      requestAnimationFrame(() => focusListItem('up', setFocusedOption, listRef, withSearch));
    }
  }, [highlightLastItem]);

  const baseProps = extractBaseProps(props);

  const hiddenAvatarCount = list.length - max;

  const avatarStyle = {
    backgroundColor: `${borderColor}`,
    boxShadow: `0 0 0  calc(var(--spacing-xs) + var(--spacing-s)) ${borderColor}`,
  };

  const SelectionAvatarGroupClass = classNames(
    {
      ['SelectionAvatarGroup']: true,
    },
    className
  );

  const searchInputHeight = 36;
  const searchBorder = 1;

  const customStyle = {
    width,
    minHeight: minHeight,
    maxHeight: withSearch ? maxHeight! - searchInputHeight - searchBorder : maxHeight,
  };

  const hiddenAvatarList = list.slice(max, list.length);

  const popoverProps = {
    hiddenAvatarList,
    customStyle,
    searchPlaceholder,
    searchComparator,
    children,
  };

  const triggerProps = {
    size,
    avatarStyle,
    hiddenAvatarCount,
    hiddenAvatarList,
  };

  const outsideClickHandler = () => {
    setOpenPopover(false);
  };

  const contextProp = {
    listRef,
    onSelect,
    withSearch,
    triggerRef,
    selectedItems,
    focusedOption,
    setSelectedItems,
    setFocusedOption,
    setHighlightFirstItem,
    setHighlightLastItem,
    setOpenPopover,
  };

  return (
    <SelectionAvatarProvider value={contextProp}>
      <div
        data-test="DesignSystem-SelectionAvatarGroup"
        {...baseProps}
        className={`${SelectionAvatarGroupClass} d-inline-flex`}
      >
        <SelectionAvatars
          size={size}
          avatarStyle={avatarStyle}
          avatarList={list.slice(0, max)}
          avatarRenderer={avatarRenderer}
          tooltipPosition={tooltipPosition}
        />
        {(hiddenAvatarCount > 0 || (children && hiddenAvatarCount > 0)) && (
          <OutsideClick onOutsideClick={outsideClickHandler}>
            <Popover open={openPopover} position="bottom-end" trigger={<SelectionAvatarCount {...triggerProps} />}>
              <SelectionAvatarPopover {...popoverProps} />
            </Popover>
          </OutsideClick>
        )}
      </div>
    </SelectionAvatarProvider>
  );
};

SelectionAvatarGroup.displayName = 'SelectionAvatarGroup';
SelectionAvatarGroup.defaultProps = {
  max: 5,
  tooltipPosition: 'bottom',
  borderColor: 'white',
  size: 'regular',
  width: 176,
  maxHeight: 256,
  // minHeight: 24,
};

SelectionAvatarGroup.Input = SelectionAvatarInput;
SelectionAvatarGroup.List = SelectionAvatarList;
SelectionAvatarGroup.Option = SelectionAvatarOption;
SelectionAvatarGroup.EmptyState = SelectionAvatarEmptyState;

export default SelectionAvatarGroup;
