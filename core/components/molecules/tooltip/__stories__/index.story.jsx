import * as React from 'react';
import { Tooltip, Button } from '@/index';

// CSF format story
export const all = () => {
  const position = 'bottom';
  const appendToBody = true;
  const hoverable = false;
  const tooltip = 'An awesome tooltip';

  const options = {
    tooltip,
    hoverable,
    position,
    appendToBody,
  };

  return (
    <div style={{ marginTop: '30px', marginLeft: '150px' }}>
      <Tooltip {...options}>
        <Button>{position}</Button>
      </Tooltip>
    </div>
  );
};

export default {
  title: 'Components/Tooltip/All',
  component: Tooltip,
};
