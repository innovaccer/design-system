import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
// import { Popover } from '@/index';
import { AvatarProps, PopoverProps, AvatarIconProps, AvatarImageProps } from '@/index.type';
import { AvatarSize } from '@/common.type';
// import AvatarCount from './AvatarCount';
// import Avatars from './Avatars';
// import AvatarPopperBody from './AvatarPopperBody';
import { SelectionAvatars } from './SelectionAvatars';

interface AvatarData extends Record<string, any> {
  firstName?: string;
  lastName?: string;
  appearance?: AvatarProps['appearance'];
  iconOptions?: AvatarIconProps;
  imgOptions?: AvatarImageProps;
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
   *  icon?: AvatarIconProps;
   *  image?: AvatarImageProps;
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
   * Callback function to create custom popover content
   */
  popperRenderer?: (names: AvatarData[]) => JSX.Element;
  /**
   * Position to place the tooltip on `Avatars` shown before +x
   */
  tooltipPosition: PopoverProps['position'];
  /**
   *  Callback function to create custom avatar content
   */
  avatarRenderer?: (name: AvatarData) => JSX.Element;
}

export const SelectionAvatarGroup = (props: SelectionAvatarGroupProps) => {
  const { max, borderColor, tooltipPosition, list, className, size } = props;

  const baseProps = extractBaseProps(props);

  // const hiddenAvatarCount = list.length - max;

  const style = {
    backgroundColor: `${borderColor}`,
    boxShadow: `0 0 0  calc(var(--spacing-xs) + var(--spacing-s)) ${borderColor}`,
  };

  const SelectionAvatarGroupClass = classNames(
    {
      ['SelectionAvatarGroup']: true,
    },
    className
  );

  // const popperClass = classNames({
  //   ['SelectionAvatarGroup-Popper']: true,
  // });

  return (
    <div
      data-test="DesignSystem-SelectionAvatarGroup"
      {...baseProps}
      className={`${SelectionAvatarGroupClass} d-inline-flex`}
    >
      <SelectionAvatars
        size={size}
        avatarList={list.slice(0, max)}
        avatarStyle={style}
        tooltipPosition={tooltipPosition}
      />
      {/* {hiddenAvatarCount > 0 && (
        <Popover
          on="click"
          trigger={<AvatarCount size={size} hiddenAvatarCount={hiddenAvatarCount} avatarStyle={style} />}
          className={popperClass}
          offset="medium"
        >
          <AvatarPopperBody
            hiddenAvatarList={list.slice(max, list.length)}
            // popperRenderer={popperRenderer}
            // maxHeight={maxHeight}
            // dark={dark}
          />
        </Popover>
      )} */}
    </div>
  );
};

SelectionAvatarGroup.displayName = 'SelectionAvatarGroup';
SelectionAvatarGroup.defaultProps = {
  max: 5,
  tooltipPosition: 'bottom',
  borderColor: 'white',
  popoverOptions: {},
  size: 'regular',
};

export default SelectionAvatarGroup;
