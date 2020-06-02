import { Data } from '../Table';

export default [
  {
    name: 'name',
    displayName: 'Name',
    width: 300,
    translate: (a: Data) => ({
      title: `${a.firstName} ${a.lastName}`,
      firstName: a.firstName,
      lastName: a.firstName
    }),
    avatar: true
  },
  {
    name: 'email',
    displayName: 'Email',
    width: 350,
  },
];
