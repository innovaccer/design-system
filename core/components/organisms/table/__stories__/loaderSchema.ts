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
    image: image,
  },
  {
    name: 'gender',
    displayName: 'Gender',
    width: 200,
    status: true
  },
  {
    name: 'icon',
    displayName: 'Icon',
    width: 100,
    icon: "events",
  },
  {
    name: 'customCell',
    displayName: 'Custom Cell',
    width: 200,
    separator: true,
  },
];

export default loaderSchema;