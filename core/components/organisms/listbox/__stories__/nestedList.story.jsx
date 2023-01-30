import * as React from 'react';
import { Listbox, Card, ListboxItem, Text, Icon, MetaList, StatusHint, Switch } from '@/index';
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
    <Listbox type="description" className="SubList-wrapper mr-6 mb-5 mt-3">
      {noteList.map((note, key) => {
        return (
          <ListboxItem key={key} className="d-flex align-items-center justify-content-between">
            <Text>{note}</Text>
            <Switch defaultChecked={true} size="tiny" />
          </ListboxItem>
        );
      })}
    </Listbox>
  );
};

export const nestedList = () => {
  const [expandList, setExpandList] = React.useState([]);

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
    if (expandList.includes(key)) {
      setExpandList(expandList.filter((id) => id !== key));
    } else {
      let newOpen = [...expandList];
      newOpen.push(key);
      setExpandList(newOpen);
    }
  };

  return (
    <Card className="w-75">
      <Listbox type="description" className="vh-50 overflow-auto">
        {dataList.map((record, key) => {
          const expanded = expandList.includes(key);
          return (
            <ListboxItem
              key={key}
              id={key}
              expanded={expanded}
              nestedRow={<SubList />}
              className="d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center">
                <Icon
                  name={'keyboard_arrow_up'}
                  size={16}
                  onClick={() => onClickHandler(key)}
                  appearance="subtle"
                  className={`mr-4 ${expanded ? 'rotate-clockwise' : 'rotate-anticlockwise'}`}
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
            </ListboxItem>
          );
        })}
      </Listbox>
    </Card>
  );
};

const customCode = `
() => {
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
      <Listbox type="description" className="SubList-wrapper mr-6 mb-5 mt-3">
        {noteList.map((note, key) => {
          return (
            <ListboxItem key={key} className="d-flex align-items-center justify-content-between">
              <Text>{note}</Text>
              <Switch defaultChecked={true} size="tiny" />
            </ListboxItem>
          );
        })}
      </Listbox>
    );
  };

  const [expandList, setExpandList] = React.useState([]);

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
    if (expandList.includes(key)) {
      setExpandList(expandList.filter((sid) => sid !== key));
    } else {
      let newOpen = [...expandList];
      newOpen.push(key);
      setExpandList(newOpen);
    }
  };

  return (
    <Card className="w-75">
      <Listbox type="description" className="vh-50 overflow-auto">
        {dataList.map((record, key) => {
          const expanded = expandList.includes(key);

          return (
            <ListboxItem
              key={key}
              id={key}
              expanded={expanded}
              nestedRow={<SubList />}
              className="d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center">
                <Icon
                  name={'keyboard_arrow_up'}
                  size={16}
                  onClick={() => onClickHandler(key)}
                  appearance="subtle"
                  className={\`mr-4 \${expanded ? 'rotate-clockwise' : 'rotate-anticlockwise'}\`}
                />
                <div>
                  <Text>{record.title}</Text> <br />
                  <MetaList list={[{ label: \`Updated on \${record.date}\` }, { label: \`Updated by \${record.user}\` }]} />
                </div>
              </div>
              <div className="d-flex align-items-center">
                <StatusHint appearance="info">{record.status}</StatusHint>
                <Icon name="more_horiz" size={12} className="ml-5" />
              </div>
            </ListboxItem>
          );
        })}
      </Listbox>
    </Card>
  );
}
`;

export default {
  title: 'Components/Listbox/Nested List',
  component: Listbox,
  subcomponents: { ListboxItem },
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Listbox',
        props: {
          exclude: ['parentProps'],
        },
      },
    },
  },
};
