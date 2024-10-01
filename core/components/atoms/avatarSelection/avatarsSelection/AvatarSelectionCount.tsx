import * as React from 'react';
import { Text, Avatar } from '@/index';
import classNames from 'classnames';
import { AvatarData } from '../AvatarSelection';
import { AvatarSelectionContext } from '../AvatarSelectionContext';
import { handleKeyDown } from './utils';
import { AvatarSize } from '@/common.type';

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

  const wrapperClassName = classNames({
    ['SelectionAvatarCount-wrapper']: true,
    [`SelectionAvatarGroup-item`]: true,
    ['SelectionAvatarCount--selected']: selectedItemCount > 0,
  });

  React.useEffect(() => {
    const selectedList = hiddenAvatarList.filter((data1: AvatarData) =>
      selectedItems?.some((data2: AvatarData) => data2 === data1)
    );
    setSelectedItemCount(selectedList.length);
  }, [selectedItems]);

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
      <Avatar tabIndex={-1} size={size} appearance="secondary" className="SelectionAvatarCount cursor-pointer">
        <Text className="overflow-hidden Avatar-content">{`+${hiddenAvatarCount}`}</Text>
      </Avatar>
    </div>
  );
};

export default AvatarSelectionCount;
