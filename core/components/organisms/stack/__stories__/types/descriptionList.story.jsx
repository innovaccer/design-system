import * as React from 'react';
import { Stack, StackItem, Card, Heading, CardHeader, Input, CardBody, Text, Divider, Avatar, Button } from '@/index';

export const descriptionList = () => {
  const dataList = [
    {
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      permission: 'Owner',
    },
    {
      name: 'Nina Locke',
      email: 'ninalocke@gmail.com',
      permission: 'Can edit',
    },
    {
      name: 'Katty Perry',
      email: 'kattyperry@gmail.com',
      permission: 'Can edit',
    },
    {
      name: 'Joy Lawson',
      email: 'joylawson@gmail.com',
      permission: 'Can view',
    },
    {
      name: 'Randy Boatwright',
      email: 'rboatwright3@arstechnica.com',
      permission: 'Can edit',
    },
    {
      name: 'Rolando Cyples',
      email: 'rcyples4@biglobe.ne.jp',
      permission: 'Can edit',
    },
    {
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      permission: 'Owner',
    },
    {
      name: 'Nina Locke',
      email: 'ninalocke@gmail.com',
      permission: 'Can edit',
    },
    {
      name: 'Katty Perry',
      email: 'kattyperry@gmail.com',
      permission: 'Can edit',
    },
    {
      name: 'Joy Lawson',
      email: 'joylawson@gmail.com',
      permission: 'Can view',
    },
    {
      name: 'Randy Boatwright',
      email: 'rboatwright3@arstechnica.com',
      permission: 'Can edit',
    },
    {
      name: 'Rolando Cyples',
      email: 'rcyples4@biglobe.ne.jp',
      permission: 'Can edit',
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-4">
        <Heading size="s">Sharing test manual</Heading>
        <Input className=" mr-4 mt-5 w-25 mb-4" icon="search" name="input" placeholder="Search" />
        <Text size="medium">Showing 10 items</Text>
      </CardHeader>

      <CardBody className="p-0">
        <Divider />
        <Stack type="description" className="vh-50 overflow-auto">
          {dataList.map((data, key) => {
            return (
              <StackItem key={key} id={key} className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <Avatar>{data.name}</Avatar>
                  <div className="ml-5">
                    <Text>{data.name}</Text> <br />
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
              </StackItem>
            );
          })}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default {
  title: 'Components/Stack/Type/Description List',
  component: Stack,
  subcomponents: { StackItem },
  parameters: {
    docs: {
      docPage: {
        title: 'Stack',
        props: {
          exclude: ['parentValue'],
        },
      },
    },
  },
};
