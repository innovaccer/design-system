import * as React from 'react';
import { SelectionAvatarGroup } from '../SelectionAvatarGroup';
import { action } from '@/utils/action';

export const all = () => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
      iconOptions: {
        name: 'places',
        type: 'outlined',
      },
      selected: true,
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
      imgOptions: {
        src: 'https://design.innovaccer.com/images/avatar2.jpeg',
      },
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
      selected: true,
    },
  ];

  // const customRenderer = (item) => {
  //   console.log('my itemmm', item);
  //   return (
  //     <div>
  //       <button>{item.firstName}</button>
  //     </div>
  //   );
  // };

  const onSelectHandler = (props) => {
    action('props', props)();
  };

  return (
    <SelectionAvatarGroup
      withSearch={true}
      list={[...list, ...list, ...list]}
      onSelect={onSelectHandler}
      searchPlaceholder="Search User"
      width={400}
      maxHeight={200}
      // popperRenderer={customRenderer}
      // borderColor="red"
    />
  );
};

export default {
  title: 'Indicators/SelectionAvatarGroup/All',
  component: SelectionAvatarGroup,
  parameters: {
    docs: {
      docPage: {
        // customCode,
      },
    },
  },
};
