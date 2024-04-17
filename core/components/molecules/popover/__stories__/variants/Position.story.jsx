import * as React from 'react';
import { Text, Button, Popover } from '@/index';

// CSF format story
export const position = () => {
  const positions = [
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
    'right',
    'right-start',
    'right-end',
    'auto-start',
    'auto',
    'auto-end',
  ];
  const getTrigger = (pos) => <Button appearance="basic">{pos}</Button>;

  return (
    <div className="d-flex flex-wrap">
      {positions.map((pos, ind) => {
        return (
          <div key={ind} className={`mr-13 ml-12 ${ind < 3 ? 'mt-11' : 'mt-5 mb-11'}`}>
            <Popover trigger={getTrigger(pos)} position={pos}>
              <div className="m-6 pr-9">
                <Text>Popup</Text>
                <Button appearance="primary" className="mt-4">
                  Click
                </Button>
              </div>
            </Popover>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Popover/Variants/Position',
  component: Popover,
  parameters: {
    docs: {
      docPage: {
        title: 'Popover',
        noHtml: true,
      },
    },
  },
};
