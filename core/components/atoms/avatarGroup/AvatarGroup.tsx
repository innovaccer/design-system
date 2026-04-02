import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { Popover } from '@/index';
import { AvatarProps, PopoverProps } from '@/index.type';
import { AvatarSize, AvatarShape } from '@/common.type';
import AvatarCount from './AvatarCount';
import Avatars from './Avatars';
import AvatarPopperBody from './AvatarPopperBody';
import styles from '@css/components/avatarGroup.module.css';
import { getNextFocusableAfterTrigger } from '@/components/organisms/select/utils';

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
  shape?: AvatarShape;
}

interface AvatarPopoverProps {
  popperRenderer?: (names: AvatarData[]) => JSX.Element;
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
   * Accessible label for the avatar group container.
   */
  'aria-label'?: string;
  /**
   * Points to element(s) that label the avatar group container.
   */
  'aria-labelledby'?: string;
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
   *  shape?: 'round' | 'square';
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
   * | presence | Presence of Avatar | |
   * | shape | Shape of Avatar ('square' renders square, otherwise round) | 'round' |
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
   * | on | Event triggering the `Popover` | click |
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
  const [openPopover, setOpenPopover] = React.useState(false);
  const [rovingIndex, setRovingIndex] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const triggerRef = React.useRef<HTMLDivElement>(null);

  const {
    max,
    borderColor,
    popoverOptions,
    tooltipPosition,
    list,
    className,
    size,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
  } = props;

  const {
    popperRenderer,
    maxHeight = 256,
    width = 176,
    minHeight,
    position = 'bottom',
    on = 'click',
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

  const avatarStyle = size !== 'regular' ? { ...style, ...tinyAvatarStyle } : style;

  const avatarList = list.length === 3 ? list : list.slice(0, max);

  const hasCounter = list.length - max > 0 && list.length !== 3;

  React.useEffect(() => {
    const items = hasCounter ? [...avatarList, { disabled: false }] : avatarList;
    if (items[rovingIndex]?.disabled) {
      const firstEnabled = items.findIndex((item) => !item.disabled);
      if (firstEnabled !== -1) setRovingIndex(firstEnabled);
    }
  }, [avatarList, rovingIndex, hasCounter]);

  const avatarsWithTabIndex = avatarList.map((item, index) => ({
    ...item,
    tabIndex: index === rovingIndex ? 0 : -1,
  }));

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
    onClose: () => {
      setOpenPopover(false);
      triggerRef.current?.focus({ preventScroll: true });
    },
    onTabOut: (e: React.KeyboardEvent, container: HTMLElement) => {
      setOpenPopover(false);
      if (e.shiftKey) {
        // Shift+Tab: focus the counter trigger
        triggerRef.current?.focus({ preventScroll: true });
      } else {
        // Tab: focus next focusable after the trigger, excluding the popover
        const next = getNextFocusableAfterTrigger(triggerRef.current, false, container);
        if (next) {
          next.focus({ preventScroll: true });
        } else {
          triggerRef.current?.focus({ preventScroll: true });
        }
      }
    },
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // If the event comes from inside the popover, ignore it here
    if ((e.target as HTMLElement).closest('[data-test="DesignSystem-Popover"]')) return;

    const items = hasCounter ? [...avatarList, { disabled: false }] : avatarList;
    const validIndices = items.map((item, i) => (item.disabled ? -1 : i)).filter((i) => i !== -1);

    if (validIndices.length === 0) return;

    const currentValidPos = validIndices.indexOf(rovingIndex);
    if (currentValidPos === -1) return;

    let nextValidPos = currentValidPos;

    const isCounterFocused = hasCounter && currentValidPos === validIndices.length - 1;

    if (e.key === 'ArrowRight' || (!isCounterFocused && e.key === 'ArrowDown')) {
      e.preventDefault();
      nextValidPos = currentValidPos === validIndices.length - 1 ? 0 : currentValidPos + 1;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextValidPos = currentValidPos === 0 ? validIndices.length - 1 : currentValidPos - 1;
    }

    if (nextValidPos !== currentValidPos) {
      const newRovingIndex = validIndices[nextValidPos];
      setRovingIndex(newRovingIndex);

      requestAnimationFrame(() => {
        const els = containerRef.current?.querySelectorAll<HTMLElement>(
          ':scope > [data-test="DesignSystem-AvatarGroup--Avatar"] [data-test="DesignSystem-Avatar"], :scope > * > [data-test="DesignSystem-AvatarGroup--TriggerAvatar"]'
        );
        if (els && els[newRovingIndex]) {
          els[newRovingIndex].focus();
        }
      });
    }
  };

  return (
    <div
      data-test="DesignSystem-AvatarGroup"
      {...baseProps}
      className={AvatarGroupClass}
      role="group"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      ref={containerRef}
      onKeyDown={handleKeyDown}
    >
      <Avatars
        size={size}
        avatarList={avatarsWithTabIndex}
        avatarStyle={avatarStyle}
        tooltipPosition={tooltipPosition}
      />
      {hasCounter && (
        <Popover
          on={on}
          open={openPopover}
          onToggle={(newOpen) => setOpenPopover(newOpen)}
          trigger={
            <AvatarCount
              ref={triggerRef}
              on={on}
              size={size}
              hiddenAvatarCount={hiddenAvatarCount}
              avatarStyle={avatarStyle}
              isOpen={openPopover}
              tabIndex={avatarList.length === rovingIndex ? 0 : -1}
            />
          }
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
