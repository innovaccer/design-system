import * as React from 'react';
import { Text, Avatar } from '@/index';
import classNames from 'classnames';
import { AvatarData } from '../SelectionAvatarGroup';
import { SelectionAvatarContext } from '../SelectionAvatarProvider';
import { handleKeyDown } from './utils';

export const SelectionAvatarCount = (props: any) => {
  const { hiddenAvatarCount, avatarStyle, size, hiddenAvatarList } = props;

  const contextProp = React.useContext(SelectionAvatarContext);
  const { selectedItems, setHighlightFirstItem, setHighlightLastItem, triggerRef, setOpenPopover } = contextProp;

  const [selectedItemCount, setSelectedItemCount] = React.useState(0);

  const wrapperClassName = classNames({
    ['SelectionAvatarCount-wrapper']: true,
    ['SelectionAvatarCount--selected']: selectedItemCount > 0,
  });

  React.useEffect(() => {
    const selectedList = hiddenAvatarList.filter((data1: AvatarData) =>
      selectedItems.some((data2: AvatarData) => data2 === data1)
    );
    setSelectedItemCount(selectedList.length);
  }, [selectedItems]);

  return (
    <div
      data-test="DesignSystem-AvatarGroup--TriggerAvatar"
      className={wrapperClassName}
      onKeyDown={(event) => handleKeyDown(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem)}
      style={avatarStyle}
      tabIndex={0}
      role="button"
      ref={triggerRef}
    >
      <Avatar size={size} appearance="secondary" className="SelectionAvatarCount">
        <Text className="overflow-hidden">{`+${hiddenAvatarCount}`}</Text>
      </Avatar>
    </div>
  );
};

export default SelectionAvatarCount;
