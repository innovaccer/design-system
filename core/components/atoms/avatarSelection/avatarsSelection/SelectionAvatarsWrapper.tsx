import * as React from 'react';
import classNames from 'classnames';
import { SelectionAvatar } from './SelectionAvatar';
import { AvatarData } from '../AvatarSelection';
import { AvatarSelectionContext } from '../AvatarSelectionContext';
import { AvatarSize } from '@/common.type';
import { TooltipProps } from '@/index.type';
import styles from '@css/components/avatarSelection.module.css';

interface SelectionAvatarsWrapperProps {
  size?: AvatarSize;
  avatarList: AvatarData[];
  avatarRenderer?: (data: AvatarData) => React.JSX.Element;
  tooltipPosition?: TooltipProps['position'];
  avatarStyle?: { backgroundColor?: string; boxShadow?: string };
}

export const SelectionAvatarsWrapper = (props: SelectionAvatarsWrapperProps) => {
  const { avatarList, avatarStyle, tooltipPosition, size, avatarRenderer } = props;

  const contextProp = React.useContext(AvatarSelectionContext);

  const { setSelectedItems, selectedItems, onSelect } = contextProp;

  const onClickHandler = (item: AvatarData) => {
    if (item.disabled) {
      return;
    }

    let list = selectedItems;
    if (selectedItems?.includes(item)) {
      list = selectedItems.filter((selectedItem: AvatarData) => selectedItem !== item);
    } else {
      list?.push(item);
    }
    list && setSelectedItems?.([...list]);

    onSelect && onSelect(list);
  };

  const handleKeyDown = (event: React.KeyboardEvent, item: AvatarData) => {
    if (item.disabled) {
      return;
    }

    switch (event.key) {
      case 'Enter':
        onClickHandler(item);
        break;
      default:
        break;
    }
  };

  return (
    <>
      {avatarList.map((avatarItem: AvatarData, index: any) => {
        const { appearance, firstName, lastName, icon, image, disabled, tooltipSuffix, ...rest } = avatarItem;
        const GroupClass = classNames({
          [styles[`SelectionAvatarGroup-item`]]: true,
          [styles[`SelectionAvatarGroup-item--active`]]: !disabled,
          [styles[`SelectionAvatarGroup-item--selected`]]: selectedItems?.includes(avatarItem),
        });

        const newAvatarStyle = { ...avatarStyle, zIndex: avatarList.length - index };

        if (avatarRenderer) {
          return avatarRenderer(avatarItem);
        }

        return (
          <span key={index} className={styles['SelectionAvatarGroup-wrapper']}>
            <div
              tabIndex={-1}
              role="checkbox"
              style={newAvatarStyle}
              className={GroupClass}
              data-test="DesignSystem-AvatarSelection--Avatar"
              aria-checked={selectedItems && selectedItems.includes(avatarItem)}
              onClick={() => onClickHandler(avatarItem)}
              onKeyDown={(event: React.KeyboardEvent) => handleKeyDown(event, avatarItem)}
            >
              <SelectionAvatar
                size={size}
                appearance={appearance}
                firstName={firstName}
                lastName={lastName}
                withTooltip={true}
                tooltipPosition={tooltipPosition}
                icon={icon}
                image={image}
                disabled={disabled}
                tooltipSuffix={tooltipSuffix}
                {...rest}
              />
            </div>
          </span>
        );
      })}
    </>
  );
};

export default SelectionAvatarsWrapper;
