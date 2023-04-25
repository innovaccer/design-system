import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { Popover } from '@/index';
import { AvatarProps, PopoverProps } from '@/index.type';
import AvatarCount from './AvatarCount';
import Avatars from './Avatars';
import AvatarPopperBody from './AvatarPopperBody';
import { AvatarSize } from 'types';

interface AvatarData extends Record<string, any> {
  firstName?: string;
  lastName?: string;
  appearance?: AvatarProps['appearance'];
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
   * For Avatar group to inherit border color from parents background please add color property to parent same as background
   * You also have to set borderColor as ''
   */
  borderColor: string;
  /**
   * Size regular | tiny
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
   * | popperClassName | Custom classname added to `Popover` | |
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
    maxHeight = 150,
    position = 'bottom',
    on = 'hover',
    dark = true,
    appendToBody = true,
    popperClassName = '',
  } = popoverOptions;

  const baseProps = extractBaseProps(props);

  const hiddenAvatarCount = list.length > max ? Math.min(list.length - max, 99) : 0;

  const style = {
    borderRadius: '50%',
    backgroundColor: `${borderColor}`,
    boxShadow: `0 0 0  calc(var(--spacing-xs) + var(--spacing-s)) ${borderColor ? borderColor : ''}`,
  };

  const tinySize = {
    height: 'var(--spacing-xl)',
    width: 'var(--spacing-xl)',
    boxShadow: `0 0 0  var(--spacing-s) ${borderColor ? borderColor : ''}`,
  };

  const avatarStyle = size === 'tiny' ? { ...style, ...tinySize } : style;

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
    <div
      data-test="DesignSystem-AvatarGroup"
      style={{ color: 'inherit' }}
      {...baseProps}
      className={`${AvatarGroupClass} d-inline-flex`}
    >
      <Avatars
        size={size}
        avatarList={list.slice(0, max)}
        avatarStyle={avatarStyle}
        tooltipPosition={tooltipPosition}
      />
      {list.length - max > 0 && (
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
            hiddenAvatarList={list.slice(max, list.length)}
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
  max: 2,
  tooltipPosition: 'bottom',
  borderColor: 'white',
  popoverOptions: {},
  size: 'regular',
};

export default AvatarGroup;
