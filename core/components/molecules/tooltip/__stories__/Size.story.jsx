import * as React from 'react';
import { Tooltip, Button } from '@/index';

// CSF format story
export const size = () => {
  const position = 'bottom';
  const appendToBody = true;
  const tooltip = 'An awesome tooltip';

  const options = {
    on: 'click',
    tooltip,
    position,
    appendToBody,
  };

  return (
    <div className="mb-8 w-50 d-flex justify-content-between">
      <Tooltip {...options} triggerClass="flex-grow-0">
        <Button>Regular</Button>
      </Tooltip>
      <Tooltip {...options} size="small" triggerClass="flex-grow-0">
        <Button>Small</Button>
      </Tooltip>
    </div>
  );
};

export default {
  title: 'Components/Tooltip/Size',
  component: Tooltip,
};
