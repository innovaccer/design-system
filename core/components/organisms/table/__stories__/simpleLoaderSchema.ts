// @ts-ignore
import image from './image.png';
import { TableProps } from '../Table';

const loaderSchema: TableProps['loaderSchema'] = [
  {
    name: 'name',
    displayName: 'Name',
    width: 300,
    filters: [],
    avatar: true
  },
  {
    name: 'email',
    displayName: 'Email',
    width: 350,
    align: 'center',
  },
];

export default loaderSchema;