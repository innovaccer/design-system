import * as React from 'react';
import { Text, Button, Popover } from '@/index';

// CSF format story
export const disabledTrigger = () => {
  const booleanValues = [false, true];

  return (
    <div className="mb-10 d-flex align-items-center w-100">
      {booleanValues.map((toggleValue) => {
        return (
          <Popover
            position="bottom-start"
            on="hover"
            key={toggleValue}
            disabled={toggleValue}
            trigger={
              <Button appearance="basic" disabled={true}>
                {toggleValue ? 'Disabled Popover' : 'Show Popover'}
              </Button>
            }
            open={false}
            className="w-25"
          >
            <div className="p-6">
              <Text>You have some edits saved in draft state.You can resume editing or discard those changes.</Text>
            </div>
          </Popover>
        );
      })}
    </div>
  );
};

const customCode = `() => {
  const booleanValues = [false, true];

  return (
    <div className="mb-10 d-flex align-items-center w-100">
      {booleanValues.map((toggleValue) => {
        return (
          <Popover
            position="bottom-start"
            on="hover"
            disabled={toggleValue}
            key={toggleValue}
            trigger={
              <Button appearance="basic" disabled={true}>
                {toggleValue ? 'Disabled Popover' : 'Show Popover'}
              </Button>
            }
            open={false}
            className="w-25"
          >
            <div className="p-6">
              <Text>You have some edits saved in draft state.You can resume editing or discard those changes.</Text>
            </div>
          </Popover>
        );
      })}
    </div>
  );
}`;

export default {
  title: 'Components/Popover/Disabled Trigger',
  component: Popover,
  parameters: {
    docs: {
      docPage: {
        noHtml: true,
        customCode,
      },
    },
  },
};
