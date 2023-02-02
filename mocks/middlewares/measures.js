import { data } from '../data/measures';

const schema = [
  {
    name: 'name',
    displayName: 'Name',
    width: '20%',
    sorting: false,
  },
  {
    name: 'status',
    displayName: 'Status',
    width: '20%',
    translate: (a) => ({
      title: a.status,
      statusAppearance: a.status === 'Inactive' ? 'default' : 'success',
    }),
    cellType: 'STATUS_HINT',
    sorting: false,
  },
  {
    name: 'measures',
    displayName: 'No. of Measures',
    width: '20%',
    sorting: false,
  },
  {
    name: 'current_period',
    displayName: 'Current Period',
    width: '20%',
    sorting: false,
  },
  {
    name: 'added_in',
    displayName: 'Added in',
    width: '20%',
    sorting: false,
  },
];

export const measures = (req, res, ctx) => {
  const searchTerm = req.url.searchParams.get('searchTerm');
  const rows = data.filter((row) => {
    if (!searchTerm) {
      return row;
    }
    return JSON.stringify(row).toLowerCase().includes(searchTerm.toLowerCase());
  });

  return res(
    ctx.status(200),
    ctx.json({
      count: rows.length,
      data: rows,
      schema,
    })
  );
};
