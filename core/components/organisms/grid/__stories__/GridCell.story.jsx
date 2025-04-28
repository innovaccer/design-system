import * as React from 'react';
import { GridCell, Grid } from '@/index';
import './style.css';

export const Grid_Cell = () => {
  const schema = {
    name: 'name',
    displayName: 'Name',
  };

  const size = 'comfortable';

  const width = 250;

  const cellType = 'STATUS_HINT';

  const align = 'left';

  const tooltip = true;

  const loading = false;

  return (
    <div className="Grid-cell Grid-cell--body border w-25">
      <div className="Grid-cellContent">
        <GridCell
          size={size}
          rowIndex={1}
          colIndex={1}
          loading={loading}
          data={{
            name: {
              title: 'Schreiber Brynn',
              metaList: ['Meta Item 1', 'Meta Item 2'],
              icon: 'event',
            },
          }}
          schema={{
            ...schema,
            width,
            cellType,
            align,
            tooltip,
          }}
        />
      </div>
    </div>
  );
};

export default {
  title: 'Components/Grid/Grid Cell',
  component: Grid,
  subcomponents: { GridCell },
};
