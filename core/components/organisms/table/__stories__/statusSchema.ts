import { Data, CellSchema } from '../Table';
// @ts-ignore
import iconImg from './image.png';

const schema: CellSchema[] = [
  {
    name: 'name',
    displayName: 'Name',
    width: 300,
    resize: true,
    translate: (a: Data) => ({
      title: `${a.firstName} ${a.lastName}`,
      firstName: a.firstName,
      lastName: a.firstName
    }),
    avatar: true
  },
  {
    name: 'gender',
    displayName: 'Gender',
    width: 200,
    resize: true,
    status: true
  },
];

export default schema;