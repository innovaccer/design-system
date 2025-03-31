import * as React from 'react';
import { Listbox, Card, CardFooter, Button, Text, Checkbox, Heading, Divider } from '@/index';
import { ListboxItem } from '../listboxItem';
import './style.css';

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
    // style.css
    // .Listbox-wrapper {
    //   height: var(--spacing-640);
    // }

    <Card className="w-50" shadow="none">
      <div className="pt-6 ml-6 mb-5">
        <Heading>Todo’s table columns</Heading>
        <Text appearance="subtle">Select the columns that you want to see in work list</Text>
      </div>
      <Divider />
      <Listbox showDivider={true} type="description" draggable={true} className="Listbox-wrapper overflow-auto">
        {dataList.map((record, key) => {
          return (
            <Listbox.Item key={key + 1} id={key + 1}>
              <div className="d-flex align-items-center w-100 justify-content-between">
                <Text>{record.name}</Text>
                <Checkbox defaultChecked={record.checked} />
              </div>
            </Listbox.Item>
          );
        })}
      </Listbox>

      <CardFooter className="bg-light justify-content-end position-relative">
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
  title: 'Components/Listbox/Reorder List',
  component: Listbox,
  subcomponents: { Listbox, ListboxItem },
  parameters: {
    docs: {
      docPage: {
        title: 'Listbox',
      },
    },
  },
};
