import { ColumnSchema } from '../../Grid';

const simpleSchema: ColumnSchema[] = [
  {
    name: 'name',
    displayName: 'Name',
    width: 300,
    translate: (a) => ({
      title: `${a.firstName} ${a.lastName}`,
      firstName: a.firstName,
      lastName: a.lastName,
    }),
    cellType: 'AVATAR_WITH_TEXT',
  },
  {
    name: 'email',
    displayName: 'Email',
    width: 350,
  },
];

export default simpleSchema;
