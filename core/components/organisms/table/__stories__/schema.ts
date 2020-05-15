import { Data } from '../Table';

export default [
    {
        name: 'name',
        displayName: 'Name',
        width: 400,
        comparator: (a: Data, b: Data) => a.name.localeCompare(b.name),
        filterList: [
            {label: 'Filter 1', value: 'Filter 1'},
            {label: 'Filter 2', value: 'Filter 2', selected: true},
            {label: 'Filter 3', value: 'Filter 3'},
        ]
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