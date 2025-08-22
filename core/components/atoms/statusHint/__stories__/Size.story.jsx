import * as React from 'react';
import { StatusHint } from '@/index';

// CSF format story
export const size = () => {
  const appearance = 'success';
  const options = {
    appearance,
  };

  return (
    <>
      <StatusHint {...options} className="w-25">
        Regular Size of Status Hint
      </StatusHint>

      <StatusHint {...options} className="w-25 mt-10" size="small">
        Small Size of Status Hint
      </StatusHint>
    </>
  );
};

export default {
  title: 'Components/StatusHint/Size',
  component: StatusHint,
};
