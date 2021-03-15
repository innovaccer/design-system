import * as React from 'react';
import { GridCell } from '@/index';
import { select, boolean, number } from '@storybook/addon-knobs';

export const Grid_Cell = () => {
  const schema = {
    name: 'name',
    displayName: 'Name',
  };

  const size = select(
    'size',
    ['comfortable', 'standard', 'compressed', 'tight'],
    'comfortable'
  );

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
    'left'
  );

  const tooltip = boolean(
    'tooltip',
    true
  );

  const loading = boolean(
    'loading',
    false
  );

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
  title: 'Components/Grid',
  component: GridCell,
};
