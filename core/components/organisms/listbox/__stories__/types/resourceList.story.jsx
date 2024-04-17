import * as React from 'react';
import { Listbox, Card, Text, Icon, MetaList, Badge, CardHeader, Heading } from '@/index';
import { ListboxItem } from '../../listboxItem';

export const resourceList = () => {
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

      <Listbox type="resource">
        {dataList.map((record, key) => {
          return (
            <Listbox.Item disabled={key === 2} id={key} key={key} className="justify-content-between">
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
              <Icon name="chevron_right" size={20} appearance="subtle" />
            </Listbox.Item>
          );
        })}
      </Listbox>
    </Card>
  );
};

export default {
  title: 'Components/Layout/Listbox/Type/Resource List',
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
