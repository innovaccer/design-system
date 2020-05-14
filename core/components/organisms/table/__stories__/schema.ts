import { Data } from '../Table';

export default [
    {
        name: 'name',
        displayName: 'Name',
        width: 400,
        comparator: (a: Data, b: Data) => a.name.localeCompare(b.name)
    },
    {
        name: 'age',
        displayName: 'Age',
        width: 200,
        comparator: (a: Data, b: Data) => a.age - b.age
    },
    {
        name: 'gender',
        displayName: 'Gender',
        width: 150,
    },
]