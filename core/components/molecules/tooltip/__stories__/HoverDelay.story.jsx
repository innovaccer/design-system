import * as React from 'react';
import { Tooltip, Button } from '@/index';

// CSF format story
export const hoverDelay = () => {
  const items = ['First', 'Second', 'Third', 'Fourth'];

  return (
    <div className="pb-6 Row">
      {items.map((item) => (
        <div key={item} className="mr-6 mt-8">
          <Tooltip tooltip={`${item} tooltip`} appendToBody={false}>
            <Button>{item}</Button>
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

const customCode = `() => {
  const items = ['First', 'Second', 'Third', 'Fourth'];

  return (
    <div className="pb-6 Row">
      {items.map((item) => (
        <div key={item} className="mr-6 mt-8">
          <Tooltip tooltip={\`\${item} tooltip\`} appendToBody={false}>
            <Button>{item}</Button>
          </Tooltip>
        </div>
      ))}
    </div>
  );
}`;

export default {
  title: 'Components/Tooltip/Hover Delay',
  component: Tooltip,
  parameters: {
    docs: {
      docPage: {
        title: 'Tooltip',
        description:
          'Tooltips fade in about 400ms after hover. Move the cursor quickly across the buttons: a tooltip must never flash at the top-left of the window, or linger after the cursor has left.',
        customCode,
        noHtml: true,
      },
    },
  },
};
