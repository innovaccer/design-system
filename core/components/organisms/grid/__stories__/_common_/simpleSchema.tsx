import { Schema } from '../../Grid';

const simpleSchema:Schema = [
  {
    name: 'name',
    displayName: 'Name',
    width: 300,
    translate: a => ({
      title: `${a.firstName} ${a.lastName}`,
      firstName: a.firstName,
      lastName: a.firstName
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
