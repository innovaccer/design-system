import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { Popover } from '@/index';
import { AvatarProps, TooltipProps } from '@/index.type';
import { AvatarSize } from '@/common.type';
import { SelectionAvatarsWrapper, AvatarSelectionCount } from './avatarsSelection';
import AvatarSelectionContext from './AvatarSelectionContext';
import { focusListItem } from './avatarsSelection/utils';
import uidGenerator from '@/utils/uidGenerator';
import {
  AvatarSelectionPopover,
  AvatarSelectionEmptyState,
  AvatarSelectionOption,
  AvatarSelectionList,
  AvatarSelectionInput,
} from './avatarPopover';
import styles from '@css/components/avatarSelection.module.css';

export interface AvatarData extends Record<string, any> {
  firstName?: string;
  lastName?: string;
  appearance?: AvatarProps['appearance'];
  icon?: React.ReactNode;
  image?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  tooltipSuffix?: string;
  status?: React.ReactNode;
  presence?: AvatarProps['presence'];
}

export interface AvatarSelectionProps extends BaseProps {
  /**
   * List of `Avatars`
   *
   * <pre className="DocPage-codeBlock">
   * AvatarData: {
   *  firstName?: string;
   *  lastName?: string;
   *  appearance?: Appearance;
   *  icon?: React.ReactNode;
   *  image?: React.ReactNode;
   *  selected?: boolean;
   *  disabled?: boolean;
   *  tooltipSuffix?: string;
   *  status?: React.ReactNode;
   *  presence?: 'active' | 'away';
   * }
   * </pre>
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | `firstName` | First name of the user | - |
   * | `lastName` | Last name of the user | - |
   * | `appearance` | Appearance of the avatar | - |
   * | `icon` | Icon to be rendered | - |
   * | `image` | Image to be rendered | - |
   * | `selected` | Determines if the avatar is selected | - |
   * | `disabled` | Determines if the avatar is disabled | - |
   * | `tooltipSuffix` | Text to be shown in the tooltip | - |
   * | `status` | Status to be shown in Regular Round Avatar | - |
   * | `presence` | Presence of the user | - |
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
  tooltipPosition: TooltipProps['position'];
  /**
   * Callback function to create custom avatar content
   */
  avatarRenderer?: (data: AvatarData) => React.JSX.Element;
  /**
   * Callback function for avatar selection
   */
  onSelect?: (data?: AvatarData) => void;
  /**
   * Adds custom width to popover
   */
  width?: number;
  /**
   * Adds maximum height to popover
   */
  maxHeight?: number;
  /**
   * Adds minimum height to popover
   */
  minHeight?: number;
  /**
   * Set `true` to show search input inside popover
   */
  withSearch?: boolean;
  /**
   * Describes placeholder for search input inside popover
   */
  searchPlaceholder?: string;
  /**
   * Comparator function to search inside popover
   */
  searchComparator?: (searchValue: string, avatarData: AvatarData) => boolean;
  /**
   * Element to be render inside popover
   */
  children?: React.JSX.Element;
  /**
   * Adds custom class to avatar wrapper
   */
  className?: string;
}

export const AvatarSelection = (props: AvatarSelectionProps) => {
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
  const [focusedOption, setFocusedOption] = React.useState<HTMLElement | undefined>();
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
    } else {
      setHighlightFirstItem(true);
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
    boxShadow: `0 0 0  calc(var(--spacing-2-5) + var(--spacing-05)) ${borderColor}`,
  };

  const AvatarSelectionClass = classNames(
    {
      [styles['SelectionAvatarGroup']]: true,
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
  const popoverId = `DesignSystem-AvatarSelection-Popover-${uidGenerator()}`;

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

  const onToggleHandler = (open: boolean) => {
    open ? setOpenPopover(true) : setOpenPopover(false);
  };

  const contextProp = {
    listRef,
    onSelect,
    withSearch,
    triggerRef,
    selectedItems,
    focusedOption,
    openPopover,
    setSelectedItems,
    setFocusedOption,
    setHighlightFirstItem,
    setHighlightLastItem,
    setOpenPopover,
    popoverId,
  };

  return (
    <AvatarSelectionContext.Provider value={contextProp}>
      <div data-test="DesignSystem-AvatarSelection" {...baseProps} className={AvatarSelectionClass}>
        <SelectionAvatarsWrapper
          size={size}
          avatarStyle={avatarStyle}
          avatarList={list.slice(0, max)}
          avatarRenderer={avatarRenderer}
          tooltipPosition={tooltipPosition}
        />
        {(hiddenAvatarCount > 0 || (children && hiddenAvatarCount > 0)) && (
          <Popover
            open={openPopover}
            position="bottom-end"
            trigger={<AvatarSelectionCount {...triggerProps} />}
            triggerClass="flex-grow-0"
            onToggle={onToggleHandler}
          >
            <AvatarSelectionPopover {...popoverProps} />
          </Popover>
        )}
      </div>
    </AvatarSelectionContext.Provider>
  );
};

AvatarSelection.displayName = 'AvatarSelection';
AvatarSelection.defaultProps = {
  max: 5,
  tooltipPosition: 'bottom',
  borderColor: 'white',
  size: 'regular',
  width: 256,
  maxHeight: 256,
};

AvatarSelection.Input = AvatarSelectionInput;
AvatarSelection.List = AvatarSelectionList;
AvatarSelection.Option = AvatarSelectionOption;
AvatarSelection.EmptyState = AvatarSelectionEmptyState;

export default AvatarSelection;
