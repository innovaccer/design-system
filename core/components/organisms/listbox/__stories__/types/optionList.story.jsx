import * as React from 'react';
import {
  Listbox,
  ListboxItem,
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
import '../style.css';

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
    // style.css
    // .Listbox-wrapper {
    //   height: var(--spacing-9);
    // }

    <Card>
      <CardHeader>
        <Heading size="s">Select starting template</Heading>
      </CardHeader>
      <CardBody>
        <div className="d-flex w-50 mb-4">
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
        <Tabs activeIndex={0}>
          <Tab label="Suggested" count={6} className="Listbox-wrapper overflow-auto">
            <Listbox type="option">
              {dataList.map((data, key) => {
                return (
                  <ListboxItem key={key} id={key} disabled={key === 2}>
                    <Text>{data.name}</Text> <br />
                    <Text appearance="subtle">{data.subInfo}</Text>
                  </ListboxItem>
                );
              })}
            </Listbox>
          </Tab>
          <Tab label="Your protocols" count={7} disabled={true}>
            <div>Your Protocol</div>
          </Tab>
        </Tabs>
      </CardBody>
      <CardFooter className="bg-light position-relative">
        <Icon name="add" size={20} appearance="primary" className="mr-3" />
        <Text appearance="link" weight="medium">
          Create from scratch
        </Text>
      </CardFooter>
    </Card>
  );
};

export default {
  title: 'Components/Listbox/Type/Option List',
  component: Listbox,
  subcomponents: { ListboxItem },
  parameters: {
    docs: {
      docPage: {
        title: 'Listbox',
      },
    },
  },
};
