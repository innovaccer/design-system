import * as React from 'react';
import GridCell from '@/components/organisms/grid/GridCell';
import { select, boolean, number } from '@storybook/addon-knobs';

export const CellType = () => {
  const schema = {
    name: 'name',
    displayName: 'Name',
  };

  const width = number(
    'width',
    250
  );

  const cellType = select(
    'cellType',
    ['DEFAULT', 'WITH_META_LIST', 'AVATAR', 'AVATAR_WITH_TEXT', 'AVATAR_WITH_META_LIST', 'STATUS_HINT', 'ICON'],
    undefined
  );

  const align = select(
    'align',
    ['left', 'center', 'right'],
    'right'
  );

  const tooltip = boolean(
    'tooltip',
    false
  );

  const loading = boolean(
    'loading',
    true
  );

  const size = 'comfortable';

  return (
    <div className="Grid-cell Grid-cell--body" style={{ width, border: 'var(--border)' }}>
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
              icon: 'events'
            }
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
  title: 'Organisms|Grid',
  component: GridCell,
};
