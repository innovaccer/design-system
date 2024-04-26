import * as React from 'react';
import { StatusHint } from '@/index';

// CSF format story
export const labelWrap = () => {
  const children = 'Status hint is used to highlight the status of an item.';

  const appearance = 'success';

  const options = {
    appearance,
  };

  return (
    <div className="d-flex">
      <StatusHint {...options} className="w-25" truncateLabel={true}>
        {children}
      </StatusHint>

      <StatusHint {...options} className="w-25 ml-10">
        {children}
      </StatusHint>
    </div>
  );
};

export default {
  title: 'Components/StatusHint/Label Wrap',
  component: StatusHint,
};
