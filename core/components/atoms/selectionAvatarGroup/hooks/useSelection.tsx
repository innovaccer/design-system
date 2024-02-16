import * as React from 'react';
import { AvatarData } from '../SelectionAvatarGroup';

export function useSelection() {
  const [selectedItems, setSelectedItems] = React.useState<AvatarData>([]);

  const updateSelection = (avatarData: AvatarData) => {
    console.log('avatarData', avatarData);
    let list = selectedItems;

    if (selectedItems.includes(avatarData)) {
      list = selectedItems.filter((selectedItem: AvatarData) => selectedItem !== avatarData);
    } else {
      list.push(avatarData);
    }

    setSelectedItems(list);
  };

  return {
    selectedItems,
    updateSelection,
  };
}
