import * as React from 'react';
import { Listbox, Card, Text, Icon, MetaList, StatusHint, Switch, Dropdown, Button } from '@/index';
import { ListboxItem } from '../listboxItem';
import './style.css';

const SubList = React.memo(
  () => {
  const [loading, setLoading] = React.useState(true);
  const noteList = ['Call Note', 'Visit note', 'Generic note', 'Ad-hoc task'];

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <h1>Testing</h1>
  }

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
});

const SubList2 = () => {
  const noteList = ['Call Note', 'Visit note'];

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
  const [expandList2, setExpandList2] = React.useState([]);

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

  const dataList2 = [
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
  ];

  // const onClickHandler = (key) => {
  //   if (expandList.includes(key)) {
  //     setExpandList(expandList.filter((id) => id !== key));
  //   } else {
  //     let newOpen = [...expandList];
  //     newOpen.push(key);
  //     setExpandList(newOpen);
  //   }
  // };

  // const onClickHandler2 = (key) => {
  //   if (expandList2.includes(key)) {
  //     setExpandList2(expandList2.filter((id) => id !== key));
  //   } else {
  //     let newOpen = [...expandList2];
  //     newOpen.push(key);
  //     setExpandList2(newOpen);
  //   }
  // };

  const onClickHandler = (key) => {
    setExpandList(currentExpandList => {
      if (currentExpandList.includes(key)) {
        return currentExpandList.filter((id) => id !== key);
      } else {
        return [...currentExpandList, key];
      }
    });
  };
  
  const onClickHandler2 = (key) => {
    setExpandList2(currentExpandList2 => {
      if (currentExpandList2.includes(key)) {
        return currentExpandList2.filter((id) => id !== key);
      } else {
        return [...currentExpandList2, key];
      }
    });
  };

  return (
    <>
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
                    <Dropdown
                      align="right"
                      className="ml-5"
                      menu={true}
                      customTrigger={() => <Button appearance="transparent" aria-label="Menu" icon="more_horiz" />}
                      options={[
                        { label: 'Edit', value: 'edit' },
                        { label: 'Export', value: 'export' },
                        { label: 'Delete', value: 'delete' },
                      ]}
                    />
                  </div>
                </div>
              </Listbox.Item>
            );
          })}
        </Listbox>
      </Card>

      <Card className="w-75 mt-10" shadow="none">
        <Listbox type="description" className="overflow-auto">
          {dataList2.map((record, key) => {
            const expanded = expandList2.includes(key);
            return (
              <Listbox.Item key={key} id={key} expanded={expanded} nestedBody={<SubList2 />}>
                <Icon
                  name={'keyboard_arrow_up'}
                  size={16}
                  onClick={() => onClickHandler2(key)}
                  appearance="subtle"
                  className={`mr-4 cursor-pointer ${expanded ? 'rotate-clockwise' : 'rotate-anticlockwise'}`}
                />

                <div className="d-flex w-100 justify-content-between">
                  <div>
                    <Text>{record.title}</Text> <br />
                    <MetaList list={[{ label: `Updated on ${record.date}` }, { label: `Updated by ${record.user}` }]} />
                  </div>
                </div>
              </Listbox.Item>
            );
          })}
        </Listbox>
      </Card>
    </>
  );
};

const customCode = `
() => {
  const SubList = React.memo(
  () => {
  const [loading, setLoading] = React.useState(true);
  const noteList = ['Call Note', 'Visit note', 'Generic note', 'Ad-hoc task'];

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Listbox key={loading} type="description" className="SubList-wrapper mr-6 mb-5 mt-3">
    {loading && <h1>test</h1>}  
    
    {!loading && noteList.map((note, key) => {
        return (
          <Listbox.Item key={key} className="justify-content-between">
            <Text>{note}</Text>
            <Switch defaultChecked={true} size="tiny" />
          </Listbox.Item>
        );
      })}
    </Listbox>
  );
});

const SubList2 = () => {
  const noteList = ['Call Note1', 'Visit note1'];

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
          <Listbox.Item key={note} className="justify-content-between">
            <Text>{note}</Text>
            <Switch defaultChecked={true} size="tiny" />
          </Listbox.Item>
        );
      })}
    </Listbox>
  );
};
  const [expandList, setExpandList] = React.useState([]);
  const [expandList2, setExpandList2] = React.useState([]);

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

  const dataList2 = [
    {
      title: 'Provider Chat1',
      date: '09/11/2022',
      user: 'Erin Boor',
      status: 'Active',
    },
    {
      title: 'Healthwise1',
      date: '09/11/2003',
      user: 'Sam',
      status: 'Active',
    },
  ];

  const onClickHandler = (key) => {
    setExpandList(currentExpandList => {
      if (currentExpandList.includes(key)) {
        return currentExpandList.filter((id) => id !== key);
      } else {
        return [...currentExpandList, key];
      }
    });
  };
  
  const onClickHandler2 = (key) => {
    setExpandList2(currentExpandList2 => {
      if (currentExpandList2.includes(key)) {
        return currentExpandList2.filter((id) => id !== key);
      } else {
        return [...currentExpandList2, key];
      }
    });
  };

  return (
    <>
      <Card className="w-75" shadow="none">
        <Listbox type="description" className="Listbox-wrapper overflow-auto">
          {dataList.map((record, key) => {
            const expanded = expandList.includes(key);
            return (
              <Listbox.Item key={record.title} id={key} expanded={expanded} nestedBody={<SubList />}>
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
                    <Dropdown
                      align="right"
                      className="ml-5"
                      menu={true}
                      customTrigger={() => <Button appearance="transparent" aria-label="Menu" icon="more_horiz" />}
                      options={[
                        { label: 'Edit', value: 'edit' },
                        { label: 'Export', value: 'export' },
                        { label: 'Delete', value: 'delete' },
                      ]}
                    />
                  </div>
                </div>
              </Listbox.Item>
            );
          })}
        </Listbox>
      </Card>

      <Card className="w-75 mt-10" shadow="none">
        <Listbox type="description" className="overflow-auto">
          {dataList2.map((record, key) => {
            const expanded = expandList2.includes(key);
            return (
              <Listbox.Item key={record.title} id={key} expanded={expanded} nestedBody={<SubList2 />}>
                <Icon
                  name={'keyboard_arrow_up'}
                  size={16}
                  onClick={() => onClickHandler2(key)}
                  appearance="subtle"
                  className={\`mr-4 cursor-pointer \${expanded ? 'rotate-clockwise' : 'rotate-anticlockwise'}\`}
                />

                <div className="d-flex w-100 justify-content-between">
                  <div>
                    <Text>{record.title}</Text> <br />
                    <MetaList list={[{ label: \`Updated on \${record.date}\` }, { label: \`Updated by \${record.user}\` }]} />
                  </div>
                </div>
              </Listbox.Item>
            );
          })}
        </Listbox>
      </Card>
    </>
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
