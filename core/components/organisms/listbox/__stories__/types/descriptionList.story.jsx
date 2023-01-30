import * as React from 'react';
import {
  Listbox,
  ListboxItem,
  Card,
  Heading,
  CardHeader,
  Input,
  CardBody,
  Text,
  Divider,
  Avatar,
  Button,
} from '@/index';

export const descriptionList = () => {
  const dataList = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
      permission: 'Owner',
    },
    {
      firstName: 'Nina',
      lastName: 'Locke',
      email: 'ninalocke@gmail.com',
      permission: 'Can edit',
    },
    {
      firstName: 'Katty',
      lastName: 'Perry',
      email: 'kattyperry@gmail.com',
      permission: 'Can edit',
    },
    {
      firstName: 'Joy',
      lastName: 'Lawson',
      email: 'joylawson@gmail.com',
      permission: 'Can view',
    },
    {
      firstName: 'Randy',
      lastName: 'Boatwright',
      email: 'rboatwright3@arstechnica.com',
      permission: 'Can edit',
    },
    {
      firstName: 'Rolando',
      lastName: 'Cyples',
      email: 'rcyples4@biglobe.ne.jp',
      permission: 'Can edit',
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
      permission: 'Owner',
    },
    {
      firstName: 'Nina',
      lastName: 'Locke',
      email: 'ninalocke@gmail.com',
      permission: 'Can edit',
    },
    {
      firstName: 'Katty',
      lastName: 'Perry',
      email: 'kattyperry@gmail.com',
      permission: 'Can edit',
    },
    {
      firstName: 'Joy',
      lastName: 'Lawson',
      email: 'joylawson@gmail.com',
      permission: 'Can view',
    },
    {
      firstName: 'Randy',
      lastName: 'Boatwright',
      email: 'rboatwright3@arstechnica.com',
      permission: 'Can edit',
    },
    {
      firstName: 'Rolando',
      lastName: 'Cyples',
      email: 'rcyples4@biglobe.ne.jp',
      permission: 'Can edit',
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-4">
        <Heading size="s">Sharing test manual</Heading>
        <Input className=" mr-4 mt-5 w-25 mb-6" icon="search" name="input" placeholder="Search" />
        <Text size="medium">Showing 10 items</Text>
      </CardHeader>

      <Divider className="mt-3" appearance="header" />
      <CardBody className="p-0">
        <Listbox type="description" className="vh-50 overflow-auto">
          {dataList.map((data, key) => {
            return (
              <ListboxItem
                key={key}
                id={key}
                disabled={key === 2}
                className="d-flex align-items-center justify-content-between"
              >
                <div className="d-flex align-items-center">
                  <Avatar firstName={data.firstName} lastName={data.lastName} />
                  <div className="ml-5">
                    <Text>{data.firstName + ' ' + data.lastName}</Text> <br />
                    <Text size="small" appearance="subtle">
                      {data.email}
                    </Text>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <Button
                    icon="keyboard_arrow_down"
                    iconAlign="right"
                    appearance="transparent"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {data.permission}
                  </Button>
                </div>
              </ListboxItem>
            );
          })}
        </Listbox>
      </CardBody>
    </Card>
  );
};

export default {
  title: 'Components/Listbox/Type/Description List',
  component: Listbox,
  subcomponents: { ListboxItem },
  parameters: {
    docs: {
      docPage: {
        title: 'Listbox',
        props: {
          exclude: ['parentProps'],
        },
      },
    },
  },
};
