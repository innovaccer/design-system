import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { Avatar, Popover, Text } from '@/index';
import { AvatarProps, PopoverProps } from '@/index.type';

interface AvatarData extends Record<string, any> {
  firstName?: string;
  lastName?: string;
  appearance?: AvatarProps['appearance'];
}

interface AvatarPopperProps {
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
   * AvatarPopperProps: {
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
  popoverOptions: AvatarPopperProps;
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

  const extraAvatars = list.length > max ? (list.length - max > 9 ? 9 : list.length - max) : 0;

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

  const trigger = (
    <div data-test="DesignSystem-AvatarGroup--TriggerAvatar" style={style}>
      <Avatar appearance="secondary" firstName="+" lastName={`${extraAvatars}`} withTooltip={false} />
    </div>
  );

  const renderPopper = () => {
    const extraAvatarsList = list.slice(max, list.length);

    if (popperRenderer && typeof renderPopper === 'function') {
      return popperRenderer(extraAvatarsList);
    }

    return (
      <div className="py-6 pr-4 pl-6">
        <div className="AvatarGroup-TextWrapper" style={{ maxHeight }}>
          {extraAvatarsList.map((item, ind) => {
            const { firstName = '', lastName = '' } = item;
            const name = `${firstName} ${lastName}`;

            return (
              <Text
                key={ind}
                appearance={dark ? 'white' : 'default'}
                className={ind < extraAvatars - 1 ? 'mb-5' : ''}
                data-test="DesignSystem-AvatarGroup--Text"
              >
                {name}
              </Text>
            );
          })}
        </div>
      </div>
    );
  };

  const renderAvatars = () => {
    const avatars = list.slice(0, max).map((item, index) => {
      const { appearance, firstName, lastName } = item;
      return (
        <div data-test="DesignSystem-AvatarGroup--Avatar" className="AvatarGroup-item" style={style} key={index}>
          <Avatar
            appearance={appearance}
            firstName={firstName}
            lastName={lastName}
            withTooltip={true}
            tooltipPosition={tooltipPosition}
          />
        </div>
      );
    });
    return avatars;
  };

  return (
    <div data-test="DesignSystem-AvatarGroup" {...baseProps} className={`${AvatarGroupClass} d-inline-flex`}>
      {renderAvatars()}
      {list.length - max > 0 && (
        <Popover
          on={on}
          dark={dark}
          trigger={trigger}
          position={position}
          appendToBody={appendToBody}
          className={popperClass}
          offset="medium"
        >
          {renderPopper()}
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
