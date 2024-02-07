import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { Popover } from '@/index';
import { AvatarProps, PopoverProps } from '@/index.type';
import { AvatarSize } from '@/common.type';
import AvatarCount from './AvatarCount';
import Avatars from './Avatars';
import AvatarPopperBody from './AvatarPopperBody';

interface AvatarData extends Record<string, any> {
  firstName?: string;
  lastName?: string;
  appearance?: AvatarProps['appearance'];
  icon?: React.ReactNode;
  image?: React.ReactNode;
}

interface AvatarPopoverProps {
  popperRenderer?: (names: AvatarData[]) => JSX.Element;
  appendToBody?: PopoverProps['appendToBody'];
  dark?: PopoverProps['dark'];
  position?: PopoverProps['position'];
  on?: PopoverProps['on'];
  maxHeight?: number;
  popperClassName?: string;
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
   * **Popover for +x avatar**
   *
   * <pre className="DocPage-codeBlock">
   * AvatarPopoverProps: {
   *   popperRenderer?: (names: AvatarData[]) => JSX.Element;
   *   appendToBody?: boolean;
   *   dark?: boolean;
   *   position?: Position;
   *   on?: ActionType;
   *   maxHeight?: number;
   *   popperClassName?: string;
   * }
   * </pre>
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | popperRenderer | Callback function to create custom popover content  | |
   * | appendToBody | Appends `Popover` wrapper inside body | true |
   * | dark | Changes background of `Popover` | true |
   * | position | Position to place `Popover` | bottom |
   * | on | Event triggering the `Popover` | hover |
   * | maxHeight | Max height of `Popover Text Wrapper` (does not work in case of custom popperRenderer) | 150 |
   * | popperClassName | Custom className added to `Popover` | |
   *
   */
  popoverOptions: AvatarPopoverProps;
  /**
   * Position to place the tooltip on `Avatars` shown before +x
   */
  tooltipPosition: PopoverProps['position'];
  /**
   * Switch to selection avatar group
   */
  selection?: boolean;
}

export const AvatarGroup = (props: AvatarGroupProps) => {
  const { max, borderColor, popoverOptions, tooltipPosition, list, className, size, selection } = props;

  const {
    popperRenderer,
    maxHeight = 150,
    position = 'bottom',
    on = 'hover',
    dark = true,
    appendToBody = true,
    popperClassName = '',
  } = popoverOptions;

  const baseProps = extractBaseProps(props);

  const maxCount = max ? max : selection ? 5 : 2;
  const hiddenAvatarCount = list.length > maxCount ? Math.min(list.length - maxCount, 99) : 0;

  const style = {
    backgroundColor: `${borderColor}`,
    boxShadow: `0 0 0  calc(var(--spacing-xs) + var(--spacing-s)) ${borderColor}`,
  };

  const tinyAvatarStyle = {
    boxShadow: `0 0 0  var(--spacing-s) ${borderColor}`,
  };

  const avatarStyle = size === 'tiny' ? { ...style, ...tinyAvatarStyle } : style;

  const AvatarGroupClass = classNames(
    {
      ['AvatarGroup']: true,
    },
    className
  );

  const popperClass = classNames(
    {
      ['AvatarGroup-Popper']: true,
    },
    popperClassName
  );

  return (
    <div data-test="DesignSystem-AvatarGroup" {...baseProps} className={`${AvatarGroupClass} d-inline-flex`}>
      <Avatars
        size={size}
        avatarList={list.slice(0, maxCount)}
        avatarStyle={avatarStyle}
        tooltipPosition={tooltipPosition}
      />
      {list.length - maxCount > 0 && (
        <Popover
          on={on}
          dark={dark}
          trigger={<AvatarCount size={size} hiddenAvatarCount={hiddenAvatarCount} avatarStyle={avatarStyle} />}
          position={position}
          appendToBody={appendToBody}
          className={popperClass}
          offset="medium"
        >
          <AvatarPopperBody
            hiddenAvatarList={list.slice(maxCount, list.length)}
            popperRenderer={popperRenderer}
            maxHeight={maxHeight}
            dark={dark}
          />
        </Popover>
      )}
    </div>
  );
};

AvatarGroup.displayName = 'AvatarGroup';
AvatarGroup.defaultProps = {
  tooltipPosition: 'bottom',
  borderColor: 'white',
  popoverOptions: {},
  size: 'regular',
};

export default AvatarGroup;
