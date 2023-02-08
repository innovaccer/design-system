import * as React from 'react';
import { Stack, Card, StackItem, Text, Checkbox, Heading, Divider } from '@/index';

export const reorderList = () => {
  const dataList = [
    {
      name: 'Priority',
      checked: true,
    },
    {
      name: 'Scheduled',
      checked: true,
    },
    {
      name: 'Patient',
      checked: false,
    },
    {
      name: 'Activity details',
      checked: true,
    },
    {
      name: 'Note',
      checked: true,
    },
    {
      name: 'Care gaps',
      checked: false,
    },
    {
      name: 'HHS',
      checked: true,
    },
    {
      name: 'CDPS',
      checked: true,
    },
    {
      name: 'Patient',
      checked: false,
    },
  ];

  return (
    <Card className="w-50">
      <Stack>
        <div className="mt-6 ml-6 mb-5">
          <Heading>Todo’s table columns</Heading>
          <Text appearance="subtle">Select the columns that you want to see in work list</Text>
        </div>
        <Divider />
        {dataList.map((record, key) => {
          return (
            <StackItem
              draggable={true}
              key={key}
              id={key}
              className="d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center">
                <Text>{record.name}</Text>
              </div>
              <div className="d-flex align-items-center">
                <Checkbox defaultChecked={record.checked} />
              </div>
            </StackItem>
          );
        })}
      </Stack>
    </Card>
  );
};

export default {
  title: 'Components/Stack/Reorder List',
  component: Stack,
  subcomponents: { StackItem },
};
