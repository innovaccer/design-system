import * as React from 'react';
import { Tooltip, Button } from '@/index';

// CSF format story
export const position = () => {
  const positions = ['top', 'top-start', 'bottom', 'top-end', 'bottom-start', 'bottom-end', 'right', 'left'];
  const appendToBody = false;
  const tooltip = 'An awesome tooltip';

  const options = {
    tooltip,
    appendToBody,
  };

  return (
    <div className="pb-6 Row">
      {positions.map((pos, ind) => {
        return (
          <div key={ind} className="mr-13 mt-8">
            <Tooltip position={pos} {...options}>
              <Button>{pos}</Button>
            </Tooltip>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Tooltip/Position',
  component: Tooltip,
  parameters: {
    docs: {
      docPage: {
        title: 'Tooltip',
      },
    },
  },
};
