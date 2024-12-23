import * as React from 'react';
import { Text, Avatar } from '@/index';
import classNames from 'classnames';
import { AvatarData } from '../AvatarSelection';
import { AvatarSelectionContext } from '../AvatarSelectionContext';
import { handleKeyDown } from './utils';
import { AvatarSize } from '@/common.type';
import styles from '@css/components/avatarSelection.module.css';
import avatarStyles from '@css/components/avatar.module.css';

interface CountAvatarProp {
  size?: AvatarSize;
  hiddenAvatarCount?: number;
  hiddenAvatarList: AvatarData[];
  avatarStyle?: { backgroundColor?: string; boxShadow?: string };
}

export const AvatarSelectionCount = (props: CountAvatarProp) => {
  const { hiddenAvatarCount, avatarStyle, size, hiddenAvatarList } = props;

  const contextProp = React.useContext(AvatarSelectionContext);
  const {
    selectedItems,
    setHighlightFirstItem,
    setHighlightLastItem,
    triggerRef,
    setOpenPopover,
    openPopover,
    popoverId,
  } = contextProp;

  const [selectedItemCount, setSelectedItemCount] = React.useState(0);

  React.useEffect(() => {
    const selectedList = hiddenAvatarList.filter((data1: AvatarData) =>
      selectedItems?.some((data2: AvatarData) => data2 === data1)
    );
    setSelectedItemCount(selectedList.length);
  }, [selectedItems]);

  const wrapperClassName = classNames({
    [styles['SelectionAvatarCount-wrapper']]: true,
    [styles['SelectionAvatarGroup-item']]: true,
    [styles['SelectionAvatarCount--selected']]: selectedItemCount > 0,
  });

  const avatarClassName = classNames({
    [styles.SelectionAvatarCount]: true,
    'cursor-pointer': true,
  });

  const avatarTextClassName = classNames({
    'overflow-hidden': true,
    [avatarStyles['Avatar-content']]: true,
  });

  return (
    <div
      data-test="DesignSystem-AvatarSelection--TriggerAvatar"
      className={wrapperClassName}
      onKeyDown={(event) => handleKeyDown(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem)}
      style={avatarStyle}
      tabIndex={0}
      role="button"
      aria-haspopup="listbox"
      aria-expanded={openPopover}
      aria-controls={popoverId}
      ref={triggerRef}
    >
      <Avatar tabIndex={-1} size={size} appearance="secondary" className={avatarClassName}>
        <Text className={avatarTextClassName}>{`+${hiddenAvatarCount}`}</Text>
      </Avatar>
    </div>
  );
};

export default AvatarSelectionCount;
