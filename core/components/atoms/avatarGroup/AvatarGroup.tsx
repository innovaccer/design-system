import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { Popover } from '@/index';
import { AvatarProps, PopoverProps } from '@/index.type';
import { AvatarSize } from '@/common.type';
import AvatarCount from './AvatarCount';
import Avatars from './Avatars';
import AvatarPopperBody from './AvatarPopperBody';
import styles from '@css/components/avatarGroup.module.css';

export interface AvatarData extends Record<string, any> {
  firstName?: string;
  lastName?: string;
  appearance?: AvatarProps['appearance'];
  icon?: React.ReactNode;
  image?: React.ReactNode;
  disabled?: boolean;
  tooltipSuffix?: string;
  status?: React.ReactNode;
  presence?: AvatarProps['presence'];
}

interface AvatarPopoverProps {
  popperRenderer?: (names: AvatarData[]) => React.JSX.Element;
  appendToBody?: PopoverProps['appendToBody'];
  dark?: PopoverProps['dark'];
  position?: PopoverProps['position'];
  popperClassName?: string;
  on?: PopoverProps['on'];
  maxHeight?: number | string;
  minHeight?: number | string;
  width?: number | string;
  withSearch?: boolean;
  searchPlaceholder?: string;
  searchComparator?: (searchValue: string, avatarData: AvatarData) => boolean;
}

export interface AvatarGroupProps extends BaseProps {
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
   *  disabled?: boolean;
   *  tooltipSuffix?: string;
   *  status?: React.ReactNode;
   *  presence?: 'active' | 'away';
   * }
   * </pre>
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | firstName | First Name of Avatar | |
   * | lastName | Last Name of Avatar | |
   * | appearance | Appearance of Avatar | |
   * | icon | Icon to be rendered inside Avatar | |
   * | image | Image to be rendered inside Avatar | |
   * | disabled | Disables the Avatar | false |
   * | tooltipSuffix | Suffix to be shown in tooltip | |
   * | status | Status to be shown in only Regular Round Avatar | |
   * | presence | Presence of Avatar |
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
   * **Popover for +x avatar**
   *
   * <pre className="DocPage-codeBlock">
   * AvatarPopoverProps: {
   *   popperRenderer?: (names: AvatarData[]) => JSX.Element;
   *   appendToBody?: boolean;
   *   position?: Position;
   *   on?: ActionType;
   *   maxHeight?: number;
   *   minHeight?: number | string;
   *   width?: number | string;
   *   popperClassName?: string;
   *   withSearch?: boolean;
   *   searchPlaceholder?: string;
   *   searchComparator?: (searchValue: string, avatarData: AvatarData) => boolean;
   * }
   * </pre>
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | popperRenderer | Callback function to create custom popover content  | |
   * | appendToBody | Appends `Popover` wrapper inside body | true |
   * | position | Position to place `Popover` | bottom |
   * | on | Event triggering the `Popover` | hover |
   * | maxHeight | Max height of `Popover Text Wrapper` (does not work in case of custom popperRenderer) | 256 |
   * | minHeight | Min height of `Popover Text Wrapper` (does not work in case of custom popperRenderer) |  |
   * | width | width of `Popover Text Wrapper` (does not work in case of custom popperRenderer) | 176 |
   * | popperClassName | Custom className added to `Popover` | |
   * | withSearch | Adds search input in `Popover` | false | |
   * | searchPlaceholder | Placeholder for search input |  | |
   * | searchComparator | Comparator function to search inside popover |  |
   *
   */
  popoverOptions: AvatarPopoverProps;
  /**
   * Position to place the tooltip on `Avatars` shown before +x
   */
  tooltipPosition: PopoverProps['position'];
}

export const AvatarGroup = (props: AvatarGroupProps) => {
  const { max, borderColor, popoverOptions, tooltipPosition, list, className, size } = props;

  const {
    popperRenderer,
    maxHeight = 256,
    width = 176,
    minHeight,
    position = 'bottom',
    on = 'hover',
    appendToBody = true,
    withSearch,
    searchPlaceholder,
    searchComparator,
    popperClassName = '',
  } = popoverOptions;

  const baseProps = extractBaseProps(props);

  const hiddenAvatarCount = list.length > max ? Math.min(list.length - max, 99) : 0;

  const style = {
    backgroundColor: `${borderColor}`,
    boxShadow: `0 0 0  calc(var(--spacing-2-5) + var(--spacing-05)) ${borderColor}`,
  };

  const tinyAvatarStyle = {
    boxShadow: `0 0 0  var(--spacing-05) ${borderColor}`,
  };

  const avatarStyle = size === 'tiny' ? { ...style, ...tinyAvatarStyle } : style;

  const avatarList = list.length === 3 ? list : list.slice(0, max);

  const AvatarGroupClass = classNames(
    {
      [styles['AvatarGroup']]: true,
      'd-inline-flex': true,
    },
    className
  );

  const avatarPopperBodyProps = {
    hiddenAvatarList: [...list].slice(max, list.length),
    popperRenderer,
    maxHeight,
    minHeight,
    width,
    popperClassName,
    withSearch,
    searchPlaceholder,
    searchComparator,
    size,
  };

  return (
    <div data-test="DesignSystem-AvatarGroup" {...baseProps} className={AvatarGroupClass}>
      <Avatars size={size} avatarList={avatarList} avatarStyle={avatarStyle} tooltipPosition={tooltipPosition} />
      {list.length - max > 0 && list.length !== 3 && (
        <Popover
          on={on}
          trigger={<AvatarCount on={on} size={size} hiddenAvatarCount={hiddenAvatarCount} avatarStyle={avatarStyle} />}
          position={position}
          appendToBody={appendToBody}
          offset="medium"
        >
          <AvatarPopperBody {...avatarPopperBodyProps} />
        </Popover>
      )}
    </div>
  );
};

AvatarGroup.displayName = 'AvatarGroup';
AvatarGroup.defaultProps = {
  max: 2,
  tooltipPosition: 'bottom',
  borderColor: 'white',
  popoverOptions: {},
  size: 'regular',
};

export default AvatarGroup;
