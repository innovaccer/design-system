import * as React from 'react';
import {
  Listbox,
  Card,
  Heading,
  CardHeader,
  Input,
  Select,
  CardBody,
  Tabs,
  Tab,
  Text,
  Icon,
  CardFooter,
  StatusHint,
} from '@/index';
import { ListboxItem } from '../../listboxItem';
import '../style.css';

export const optionList = () => {
  const dataList = [
    {
      name: 'ED Discharge care Protocol',
      subInfo: 'Pediatric',
      selected: true,
    },
    {
      name: 'Behavioral Outreach',
      subInfo: 'Remote patient monitoring',
      selected: false,
    },
    {
      name: 'Chronic Care Protocol - Diabetes',
      subInfo: 'Hospice',
      selected: false,
    },
    {
      name: 'TCM Care Protocol',
      subInfo: 'Chronic Care Management',
      selected: false,
    },
    {
      name: 'CAD Outreach',
      subInfo: 'Pharmacy management',
      selected: false,
    },
    {
      name: 'Diabetes care protocol',
      subInfo: 'Remote patient monitoring',
      selected: false,
    },
  ];

  const transitionOptions = [
    { label: 'Todo', value: 'TODO' },
    { label: 'In Progress', value: 'IN PROGRESS' },
    { label: 'Done', value: 'DONE' },
    { label: 'Closed', value: 'CLOSED' },
  ];

  return (
    // style.css
    // .Listbox-wrapper {
    //   height: var(--spacing-640);
    // }

    <Card shadow="none">
      <CardHeader>
        <Heading size="s">Select starting template</Heading>
      </CardHeader>
      <CardBody>
        <div className="d-flex w-50 mb-4">
          <Input className=" mr-4" icon="search" name="input" placeholder="Search" />
          <Select triggerOptions={{ placeholder: 'Transition' }}>
            <Select.List>
              {transitionOptions.map((item, key) => (
                <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                  {item.label}
                </Select.Option>
              ))}
            </Select.List>
          </Select>
        </div>
        <Tabs activeIndex={0}>
          <Tab label="Suggested" count={6} className="Listbox-wrapper overflow-auto">
            <Listbox type="option">
              {dataList.map((data, key) => {
                return (
                  <Listbox.Item selected={data.selected} key={key} id={key} disabled={key === 2}>
                    <div className="d-flex w-100 justify-content-between">
                      <div>
                        <Text>{data.name}</Text>
                        <br />
                        <Text appearance="subtle">{data.subInfo}</Text>
                      </div>
                      <StatusHint appearance="info">{data.selected ? 'Selected' : 'Unselected'}</StatusHint>
                    </div>
                  </Listbox.Item>
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

const customCode = `
() => {
  const dataList = [
    {
      name: 'ED Discharge care Protocol',
      subInfo: 'Pediatric',
      selected: true,
    },
    {
      name: 'Behavioral Outreach',
      subInfo: 'Remote patient monitoring',
      selected: false,
    },
    {
      name: 'Chronic Care Protocol - Diabetes',
      subInfo: 'Hospice',
      selected: false,
    },
    {
      name: 'TCM Care Protocol',
      subInfo: 'Chronic Care Management',
      selected: false,
    },
    {
      name: 'CAD Outreach',
      subInfo: 'Pharmacy management',
      selected: false,
    },
    {
      name: 'Diabetes care protocol',
      subInfo: 'Remote patient monitoring',
      selected: false,
    },
  ];

  const transitionOptions = [
    { label: 'Todo', value: 'TODO' },
    { label: 'In Progress', value: 'IN PROGRESS' },
    { label: 'Done', value: 'DONE' },
    { label: 'Closed', value: 'CLOSED' },
  ];

  return (
    // style.css
    // .Listbox-wrapper {
    //   height: var(--spacing-640);
    // }

    <Card shadow="none">
      <CardHeader>
        <Heading size="s">Select starting template</Heading>
      </CardHeader>
      <CardBody>
        <div className="d-flex w-50 mb-4">
          <Input className=" mr-4" icon="search" name="input" placeholder="Search" />
          <Select triggerOptions={{placeholder: 'Transition'}}>
            <Select.List>
              {transitionOptions.map((item, key) => (
                <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                  {item.label}
                </Select.Option>
              ))}
            </Select.List>
          </Select>
        </div>
        <Tabs activeIndex={0}>
          <Tab label="Suggested" count={6} className="Listbox-wrapper overflow-auto">
            <Listbox type="option">
              {dataList.map((data, key) => {
                return (
                  <Listbox.Item selected={data.selected} key={key} id={key} disabled={key === 2}>
                    <div className="d-flex w-100 justify-content-between">
                      <div>
                        <Text>{data.name}</Text>
                        <br />
                        <Text appearance="subtle">{data.subInfo}</Text>
                      </div>
                      <StatusHint appearance="info">{data.selected ? 'Selected' : 'Unselected'}</StatusHint>
                    </div>
                  </Listbox.Item>
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
`;

export default {
  title: 'Components/Listbox/Type/Option List',
  component: Listbox,
  subcomponents: { Listbox, ListboxItem },
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Listbox',
      },
    },
  },
};
