import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { Popover } from '@/index';
import { AvatarProps, PopoverProps, AvatarIconProps, AvatarImageProps } from '@/index.type';
import { AvatarSize } from '@/common.type';
import SelectionAvatars from './SelectionAvatars';
import SelectionAvatarCount from './SelectionAvatarCount';
import SelectionAvatarPopover from './SelectionAvatarPopover';

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
   * Callback function to create custom popover content
   */
  popperRenderer?: (list: AvatarData[]) => JSX.Element;
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
  onSelect?: (data: AvatarData) => void;
}

export const SelectionAvatarGroup = (props: SelectionAvatarGroupProps) => {
  const { max, borderColor, tooltipPosition, list, className, size, popperRenderer, avatarRenderer, onSelect } = props;

  const [selectedItems, setSelectedItems] = React.useState<AvatarData>([]);

  React.useEffect(() => {
    const selectedList: AvatarData[] = [];
    list.forEach((avatarItem: AvatarData) => {
      if (avatarItem.selected) {
        selectedList.push(avatarItem);
      }
    });
    setSelectedItems(selectedList);
  }, []);

  const baseProps = extractBaseProps(props);

  const hiddenAvatarCount = list.length - max;

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

  return (
    <div
      data-test="DesignSystem-SelectionAvatarGroup"
      {...baseProps}
      className={`${SelectionAvatarGroupClass} d-inline-flex`}
    >
      <SelectionAvatars
        size={size}
        avatarStyle={style}
        avatarList={list.slice(0, max)}
        avatarRenderer={avatarRenderer}
        tooltipPosition={tooltipPosition}
        onSelect={onSelect}
        setSelectedItems={setSelectedItems}
        selectedItems={selectedItems}
      />
      {hiddenAvatarCount > 0 && (
        <Popover
          on="click"
          trigger={<SelectionAvatarCount size={size} hiddenAvatarCount={hiddenAvatarCount} avatarStyle={style} />}
          // className={popperClass}
          position="bottom-end"
          offset="medium"
        >
          <SelectionAvatarPopover
            hiddenAvatarList={list.slice(max, list.length)}
            popperRenderer={popperRenderer}
            onSelect={onSelect}
            setSelectedItems={setSelectedItems}
            selectedItems={selectedItems}
          />
        </Popover>
      )}
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