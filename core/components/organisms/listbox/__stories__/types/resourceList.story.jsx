import * as React from 'react';
import { Listbox, Card, Text, Icon, MetaList, Badge, CardHeader, Heading, StatusHint } from '@/index';
import { ListboxItem } from '../../listboxItem';

export const resourceList = () => {
  const dataList = [
    {
      title: 'Social Needs Assessment',
      time: '2 days ago',
      sender: 'Dr. John Matthews(your primary care physician)',
      status: 'Due',
      activated: true,
    },
    {
      title: 'Diabetes Self Management Assessment',
      time: '1 week ago',
      sender: 'Dr. John Matthews(your primary care physician)',
      activated: false,
    },
    {
      title: 'Depression Screening',
      time: '2 week ago',
      sender: 'Dr. Nina Locke(Psychologist)',
      activated: false,
    },
    {
      title: 'PHQ-9 ',
      time: '1 mon ago',
      sender: 'Dr. Jimmy',
      activated: false,
    },
  ];

  return (
    <Card shadow="none">
      <CardHeader>
        <Heading size="s">Screenings and assessments</Heading>
      </CardHeader>

      <Listbox type="resource">
        {dataList.map((record, key) => {
          return (
            <Listbox.Item
              activated={record.activated}
              disabled={key === 2}
              id={key}
              key={key}
              className="justify-content-between"
            >
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
              <StatusHint appearance="info">{record.activated ? 'Active' : 'Inactive'}</StatusHint>
            </Listbox.Item>
          );
        })}
      </Listbox>
    </Card>
  );
};

export default {
  title: 'Components/Listbox/Type/Resource List',
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
