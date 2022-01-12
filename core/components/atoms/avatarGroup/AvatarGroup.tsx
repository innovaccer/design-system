import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { Popover } from '@/index';
import { AvatarProps, PopoverProps } from '@/index.type';
import AvatarCount from './AvatarCount';
import Avatars from './Avatars';
import AvatarPopperBody from './AvatarPopperBody';

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
   */
  borderColor: string;
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
   * </pre>
   *
   */
  popoverOptions: AvatarPopoverProps;
  /**
   * Position to place the tooltip on `Avatars` shown before +x
   */
  tooltipPosition: PopoverProps['position'];
}

export const AvatarGroup = (props: AvatarGroupProps) => {
  const { max, borderColor, popoverOptions, tooltipPosition, list, className } = props;

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
    border: `var(--spacing-xs) solid ${borderColor}`,
    boxShadow: `0 0 0 var(--spacing-xs) ${borderColor}`,
  };

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
      <Avatars avatarList={list.slice(0, max)} avatarStyle={style} tooltipPosition={tooltipPosition} />
      {list.length - max > 0 && (
        <Popover
          on={on}
          dark={dark}
          trigger={<AvatarCount hiddenAvatarCount={hiddenAvatarCount} avatarStyle={style} />}
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
  borderColor: 'var(--white)',
  tooltipPosition: 'bottom',
  popoverOptions: {},
};

export default AvatarGroup;
