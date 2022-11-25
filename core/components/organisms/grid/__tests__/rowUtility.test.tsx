import * as rowUtility from '../rowUtility';

const rowData = [
  { name: 'zara', gender: 'f', disabled: true },
  { name: 'sara', gender: 'f' },
  { name: 'sam', gender: 'm' },
];

describe('test updateBatchData', () => {
  it('updates data at provided rowIndexes ', () => {
    const data = [{ name: 'name', gender: 'f' }];
    const rowIndexes = [0];
    const dataUpdate = { age: 25 };
    expect(rowUtility.updateBatchData(data, rowIndexes, dataUpdate)).toEqual([{ age: 25, gender: 'f', name: 'name' }]);
  });

  it('check if it updates disabled rows data when selectDisabledRow set as true', () => {
    const updatedData = [
      { name: 'zara', gender: 'f', disabled: true, _selected: true },
      { name: 'sara', gender: 'f', _selected: true },
      { name: 'sam', gender: 'm', _selected: true },
    ];

    const selectDisabledRow = true;
    const rowIndexes = [0, 1, 2];
    const dataUpdate = { _selected: true };
    expect(rowUtility.updateBatchData(rowData, rowIndexes, dataUpdate, selectDisabledRow)).toEqual(updatedData);
  });

  it('check if disabled rows data remains same when selectDisabledRow set as false', () => {
    const updatedData = [
      { name: 'zara', gender: 'f', disabled: true },
      { name: 'sara', gender: 'f', _selected: true },
      { name: 'sam', gender: 'm', _selected: true },
    ];

    const selectDisabledRow = false;
    const rowIndexes = [0, 1, 2];
    const dataUpdate = { _selected: true };
    expect(rowUtility.updateBatchData(rowData, rowIndexes, dataUpdate, selectDisabledRow)).toEqual(updatedData);
  });
});
describe('test translateData', () => {
  it('translate data with title', () => {
    const schema = {
      name: 'name',
      displayName: 'Name',
    };
    const data = { name: 'zara' };
    expect(rowUtility.translateData(schema, data)).toEqual({ name: { title: 'zara' } });
  });
  it('translate data when schema.translate present ', () => {
    const schema = {
      name: 'name',
      displayName: 'Name',
      translate: jest.fn(),
    };
    const data = { name: 'zara' };
    schema.translate.mockReturnValueOnce('sara');
    expect(rowUtility.translateData(schema, data)).toEqual({ name: { title: 'sara' } });
  });
});
describe('test filterData', () => {
  it(' test filterData  ', () => {
    const schema = [
      {
        name: 'name',
        displayName: 'Name',
        onFilterChange: jest.fn(),
      },
    ];
    const data = [{ name: 'zara', age: 25 }];
    const filterList = { name: ['name'] };
    schema[0].onFilterChange.mockReturnValueOnce({
      age: 1,
    });
    expect(rowUtility.filterData(schema, data, filterList)).toEqual([{ age: 25, name: 'zara' }]);
  });
});
describe('test sortData', () => {
  it(' test sortData  ', () => {
    const schema = [
      {
        name: 'name',
        displayName: 'Name',
      },
    ];
    const data = [{ name: 'sara' }, { name: 'zara' }];
    expect(rowUtility.sortData(schema, data, [{ name: 'name', type: 'desc' }])).toEqual([
      { name: 'zara' },
      { name: 'sara' },
    ]);
  });
});
