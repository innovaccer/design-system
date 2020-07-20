import * as React from 'react';
import { Appearance } from '../../avatar/Avatar';
import { AvatarGroup } from '../AvatarGroup';
import { number } from '@storybook/addon-knobs';
export const all = () => {
  const appearance: Appearance[] = ['primary', 'alert', 'warning', 'success',
    'accent1', 'accent2', 'accent3', 'accent4'];

  const list =
    [
      {
        appearance: appearance[6], firstName: 'John', lastName: 'Doe',
      },
      {
        appearance: appearance[6], firstName: 'Steven', lastName: 'Packton',
      },
      {
        appearance: appearance[2], firstName: 'Nancy', lastName: 'Wheeler'
      },
      {
        appearance: appearance[3], firstName: 'Monica', lastName: 'Geller'
      }

    ];
  const max = number('max', 2);
  return (
    <AvatarGroup
      list={list}
      max={max}
    />
  );
};
export default {
  title: 'Atoms|AvatarGroup',
  component: AvatarGroup
};
