import * as React from 'react';
import { Listbox, Card, Text, Icon, MetaList, StatusHint, Switch, Menu } from '@/index';
import { ListboxItem } from '../listboxItem';
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
          <Listbox.Item key={key} className="justify-content-between">
            <Text>{note}</Text>
            <Switch defaultChecked={true} size="tiny" />
          </Listbox.Item>
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
    <Card className="w-75" shadow="none">
      <Listbox type="description" className="Listbox-wrapper overflow-auto">
        {dataList.map((record, key) => {
          const expanded = expandList.includes(key);
          return (
            <Listbox.Item key={key} id={key} expanded={expanded} nestedBody={<SubList />}>
              <Icon
                name={'keyboard_arrow_up'}
                size={16}
                onClick={() => onClickHandler(key)}
                appearance="subtle"
                className={`mr-4 cursor-pointer ${expanded ? 'rotate-clockwise' : 'rotate-anticlockwise'}`}
              />

              <div className="d-flex w-100 justify-content-between">
                <div>
                  <Text>{record.title}</Text> <br />
                  <MetaList list={[{ label: `Updated on ${record.date}` }, { label: `Updated by ${record.user}` }]} />
                </div>

                <div className="d-flex align-items-center">
                  <StatusHint appearance="info">{record.status}</StatusHint>
                  <Menu trigger={<Menu.Trigger className="ml-5" appearance="transparent" />}>
                    <Menu.List>
                      <Menu.Item>Edit</Menu.Item>
                      <Menu.Item>Export</Menu.Item>
                      <Menu.Item>Delete</Menu.Item>
                    </Menu.List>
                  </Menu>
                </div>
              </div>
            </Listbox.Item>
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

        .Listbox-wrapper {
          height: var(--spacing-640);
        }
    */

    return (
      <Listbox type="description" className="SubList-wrapper mr-6 mb-5 mt-3">
        {noteList.map((note, key) => {
          return (
            <Listbox.Item key={key} className="justify-content-between">
              <Text>{note}</Text>
              <Switch defaultChecked={true} size="tiny" />
            </Listbox.Item>
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
    <Card className="w-75" shadow="none">
      <Listbox type="description" className="Listbox-wrapper overflow-auto">
        {dataList.map((record, key) => {
          const expanded = expandList.includes(key);

          return (
            <Listbox.Item key={key} id={key} expanded={expanded} nestedBody={<SubList />}>
              <Icon
                name={'keyboard_arrow_up'}
                size={16}
                onClick={() => onClickHandler(key)}
                appearance="subtle"
                className={\`mr-4 cursor-pointer \${expanded ? 'rotate-clockwise' : 'rotate-anticlockwise'}\`}
              />

              <div className="d-flex w-100 justify-content-between">
                <div>
                  <Text>{record.title}</Text> <br />
                  <MetaList list={[{ label: \`Updated on \${record.date}\` }, { label: \`Updated by \${record.user}\` }]} />
                </div>

                <div className="d-flex align-items-center">
                  <StatusHint appearance="info">{record.status}</StatusHint>
                  <Menu trigger={<Menu.Trigger className="ml-5" appearance="transparent" />}>
                    <Menu.List>
                      <Menu.Item>Edit</Menu.Item>
                      <Menu.Item>Export</Menu.Item>
                      <Menu.Item>Delete</Menu.Item>
                    </Menu.List>
                  </Menu>
                </div>
              </div>
            </Listbox.Item>
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
