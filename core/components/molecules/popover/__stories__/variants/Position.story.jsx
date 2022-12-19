import * as React from 'react';
import { Text, Button, Popover } from '@/index';

// CSF format story
export const position = () => {
  const positions = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'right'];
  const getTrigger = (pos) => <Button appearance="basic">{pos}</Button>;

  return (
    <div className="d-flex flex-wrap">
      {positions.map((pos, ind) => {
        return (
          <div key={ind} className={`mr-13 ml-12 ${ind < 3 ? 'mt-11' : 'mt-5 mb-11'}`}>
            <Popover trigger={getTrigger(pos)} position={pos} open={true}>
              <div style={{ width: 100 }} className="mx-6 my-6">
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
