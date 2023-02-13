import * as React from 'react';
import { Stack, Card, StackItem, Text, Icon, MetaList, StatusHint, Switch } from '@/index';
import './style.css';

const SubList = () => {
  const noteList = ['Call Note', 'Visit note', 'Generic note', 'Ad-hoc task'];

  /*
    // style.css
      .SubList-wrapper {
        margin-left: 40px;
        background-color: #fcfafa;
      }
  */

  return (
    <Stack className="SubList-wrapper mr-6 mb-5 mt-3">
      {noteList.map((note, key) => {
        return (
          <StackItem key={key} className="d-flex align-items-center justify-content-between">
            <Text>{note}</Text>
            <Switch defaultChecked={true} size="tiny" />
          </StackItem>
        );
      })}
    </Stack>
  );
};

export const nestedList = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [listKey, setListKey] = React.useState('');

  const dataList = [
    {
      title: 'Provider Chat',
      date: '09/11/2022',
      user: 'Erin Boor',
      status: 'Active',
    },
    {
      title: 'Healthwise',
      date: '09/11/2003',
      user: 'Sam',
      status: 'Active',
    },
    {
      title: 'Productivity Metrics',
      date: '09/11/2003',
      user: 'Eric Sam',
      status: 'Active',
    },
    {
      title: 'New button',
      date: '09/11/2003',
      user: 'Ashley Conner',
      status: 'Active',
    },
    {
      title: 'Timer',
      date: '09/11/2003',
      user: 'John Doe',
      status: 'Active',
    },
  ];

  const onClickHandler = (key) => {
    setListKey(key);
    setExpanded(!expanded);
  };

  return (
    <Card className="w-50">
      <Stack>
        {dataList.map((record, key) => {
          return (
            <StackItem
              key={key}
              id={key}
              expanded={expanded && key === listKey}
              nestedRow={<SubList />}
              className="d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center">
                <Icon
                  name={expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                  size={16}
                  onClick={() => onClickHandler(key)}
                  appearance="subtle"
                  className="mr-4"
                />
                <div>
                  <Text>{record.title}</Text> <br />
                  <MetaList list={[{ label: `Updated on ${record.date}` }, { label: `Updated by ${record.user}` }]} />
                </div>
              </div>
              <div className="d-flex align-items-center">
                <StatusHint appearance="info">{record.status}</StatusHint>
                <Icon name="more_horiz" size={12} className="ml-5" />
              </div>
            </StackItem>
          );
        })}
      </Stack>
    </Card>
  );
};

export default {
  title: 'Components/Stack/Nested List',
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
