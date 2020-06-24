// @ts-ignore
import image from './image.png';
import { GridProps } from '../../Grid';

const loaderSchema: GridProps['loaderSchema'] = [
  {
    name: 'name',
    displayName: 'Name',
    width: 300,
    filters: [],
    cellType: 'AVATAR_WITH_TEXT'
  },
  {
    name: 'email',
    displayName: 'Email',
    width: 350,
    cellType: 'WITH_META_LIST'
  },
  {
    name: 'gender',
    displayName: 'Gender',
    width: 200,
    cellType: 'STATUS_HINT'
  },
  {
    name: 'icon',
    displayName: 'Icon',
    width: 100,
    cellType: 'ICON'
  },
  {
    name: 'customCell',
    displayName: 'Custom Cell',
    width: 200,
    separator: {
      head: true,
      body: true
    },
  },
];

export default loaderSchema;