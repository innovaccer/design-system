import * as React from 'react';
import { Listbox, Card, ListboxItem, Text, Icon, MetaList, Badge, CardHeader, Heading } from '@/index';

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
      sender: 'Dr. Nina Locke(Psychologist)',
    },
    {
      title: 'PHQ-9 ',
      time: '1 mon ago',
      sender: 'Dr. Jimmy',
    },
  ];

  return (
    <Card>
      <CardHeader>
        <Heading size="s">Screenings and assessments</Heading>
      </CardHeader>
      <Listbox size="compressed">
        {dataList.map((record, key) => {
          return (
            <ListboxItem key={key} className="d-flex align-items-center justify-content-between">
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
            </ListboxItem>
          );
        })}
      </Listbox>
    </Card>
  );
};

export default {
  title: 'Components/Listbox/Size/Compressed List',
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
