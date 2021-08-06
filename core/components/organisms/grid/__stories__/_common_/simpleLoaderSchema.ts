// @ts-ignore
import image from './image.png';
import { GridProps } from '../../Grid';

const loaderSchema: GridProps['loaderSchema'] = [
  {
    name: 'name',
    displayName: 'Name',
    width: 300,
    cellType: 'AVATAR_WITH_TEXT',
  },
  {
    name: 'email',
    displayName: 'Email',
    width: 350,
  },
];

export default loaderSchema;
