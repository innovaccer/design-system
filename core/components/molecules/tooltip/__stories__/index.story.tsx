import * as React from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import { Tooltip, Button } from '@/index';

// CSF format story
export const all = () => {
  const position = select(
    'position',
    ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'right'],
    'bottom'
  );
  const appendToBody = boolean('appendToBody', true);
  const hoverable = boolean('hoverable', false);
  const tooltip = text('tooltip', 'An awesome tooltip');

  const options = {
    tooltip,
    hoverable,
    position,
    appendToBody
  };

  return (
    <div style={{ marginTop: '30px', marginLeft: '150px' }}>
      <Tooltip {...options} >
        <Button>{position}</Button>
      </Tooltip>
    </div>
  );
};

export default {
  title: 'Components/Tooltip',
  component: Tooltip
};
