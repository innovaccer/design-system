import * as React from 'react';
import { Stack, Card, CardFooter, Button, StackItem, Text, Checkbox, Heading, Divider } from '@/index';

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
      <div className="mt-6 ml-6 mb-5">
        <Heading>Todo’s table columns</Heading>
        <Text appearance="subtle">Select the columns that you want to see in work list</Text>
      </div>
      <Divider />
      <Stack draggable={true} className="vh-50 overflow-auto pb-10">
        {dataList.map((record, key) => {
          return (
            <StackItem key={key} id={key} className="d-flex align-items-center">
              <div className="d-flex align-items-center w-100 justify-content-between ml-4">
                <div className="d-flex justify-content-start">
                  <Text>{record.name}</Text>
                </div>
                <div className="d-flex justify-content-end">
                  <Checkbox defaultChecked={record.checked} />
                </div>
              </div>
            </StackItem>
          );
        })}
      </Stack>

      <CardFooter className="bg-light justify-content-end">
        <>
          <Button appearance="basic">Cancel</Button>
          <Button appearance="primary" className="ml-4">
            Submit
          </Button>
        </>
      </CardFooter>
    </Card>
  );
};

export default {
  title: 'Components/Stack/Reorder List',
  component: Stack,
  subcomponents: { StackItem },
  parameters: {
    docs: {
      docPage: {
        title: 'Stack',
        props: {
          exclude: ['parentProps'],
        },
      },
    },
  },
};
