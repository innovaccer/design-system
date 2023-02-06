import * as React from 'react';
import { Stack, Card, StackItem, Text, Icon, MetaList, Badge } from '@/index';

export const compressedList = () => {
  const dataList = [
    {
      title: 'Social Needs Assessment',
      time: '2 days ago',
      sender: 'Dr. John Matthews(your primary care physician)',
      status: 'Due',
    },
    {
      title: 'Diabetes Self Management Assessment',
      time: '1 week ago',
      sender: 'Dr. John Matthews(your primary care physician)',
    },
    {
      title: 'Depression Screening',
      time: '2 week ago',
      sender: 'Sent by Dr. Nina Locke(Psychologist)',
    },
    {
      title: 'PHQ-9 ',
      time: '1 mon ago',
      sender: 'Dr. Jimmy',
    },
  ];

  return (
    <Card>
      <Stack>
        {dataList.map((record, key) => {
          return (
            <StackItem size="compressed" key={key} className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Icon name="assignment" size={20} appearance="primary" className="mr-4" />
                <div>
                  <div className="d-flex align-items-center">
                    <Text>{record.title}</Text>
                    {record.status && (
                      <Badge appearance="alert" subtle={true} className="ml-4">
                        {record.status}
                      </Badge>
                    )}
                  </div>
                  <MetaList list={[{ label: `Sent by ${record.sender}` }, { label: `${record.time}` }]} />
                </div>
              </div>
              <div className="d-flex align-items-center">
                <Icon name="chevron_right" size={20} appearance="subtle" />
              </div>
            </StackItem>
          );
        })}
      </Stack>
    </Card>
  );
};

export default {
  title: 'Components/Stack/Size/Compressed List',
  component: Stack,
  subcomponents: { StackItem },
};
