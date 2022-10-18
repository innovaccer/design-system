import { ColumnSchema } from '../../Grid';

const schema: ColumnSchema[] = [
  {
    name: 'name',
    displayName: 'Name',
    width: 300,
    resizable: true,
    translate: (a) => ({
      title: `${a.firstName} ${a.lastName}`,
      firstName: a.firstName,
      lastName: a.lastName,
    }),
    cellType: 'AVATAR_WITH_TEXT',
  },
  {
    name: 'gender',
    displayName: 'Gender',
    width: 200,
    resizable: true,
    cellType: 'STATUS_HINT',
    translate: (a) => ({
      title: a.gender,
      statusAppearance: a.gender === 'Female' ? 'alert' : 'success',
    }),
  },
];

export default schema;
