import * as React from 'react';
import {
  Stack,
  StackItem,
  Card,
  Heading,
  CardHeader,
  Input,
  Dropdown,
  CardBody,
  Tabs,
  Tab,
  Text,
  Icon,
  CardFooter,
} from '@/index';

export const optionList = () => {
  const dataList = [
    {
      name: 'ED Discharge care Protocol',
      subInfo: 'Pediatric',
    },
    {
      name: 'Behavioral Outreach',
      subInfo: 'Remote patient monitoring',
    },
    {
      name: 'Chronic Care Protocol - Diabetes',
      subInfo: 'Hospice',
    },
    {
      name: 'TCM Care Protocol',
      subInfo: 'Chronic Care Management',
    },
    {
      name: 'CAD Outreach',
      subInfo: 'Pharmacy management',
    },
    {
      name: 'Diabetes care protocol',
      subInfo: 'Remote patient monitoring',
    },
  ];
  return (
    <Card>
      <CardHeader>
        <Heading size="s">Select starting template</Heading>
        <div className="d-flex pt-5 w-50">
          <Input className=" mr-4" icon="search" name="input" placeholder="Search" />
          <Dropdown
            options={[
              { label: 'Todo', value: 'TODO' },
              { label: 'In Progress', value: 'IN PROGRESS' },
              { label: 'Done', value: 'DONE' },
              { label: 'Closed', value: 'CLOSED' },
            ]}
            placeholder="Transition"
            withSearch={true}
          />
        </div>
      </CardHeader>
      <CardBody>
        <Tabs activeIndex={0}>
          <Tab label="Suggested" count={10}>
            <Stack className="vh-50 overflow-auto pb-10">
              {dataList.map((data, key) => {
                return (
                  <StackItem key={key}>
                    <Text>{data.name}</Text> <br />
                    <Text appearance="subtle">{data.subInfo}</Text>
                  </StackItem>
                );
              })}
            </Stack>
          </Tab>
          <Tab label="Your protocols" count={7} disabled={true}>
            <div>Your Protocol</div>
          </Tab>
        </Tabs>
      </CardBody>
      <CardFooter className="bg-light">
        <Icon name="add" size={20} appearance="primary" className="mr-3" />
        <Text appearance="link">Create from scratch</Text>
      </CardFooter>
    </Card>
  );
};

export default {
  title: 'Components/Stack/Option List',
  component: Stack,
  subcomponents: { StackItem },
};
