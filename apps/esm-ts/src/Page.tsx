import React from 'react';
import { Row, Column, PageHeader, Button, Tabs, Card, Table, ButtonProps } from '@innovaccer/design-system';



// You can now use the Button component and its props in your React components
const MyComponent: React.FC = () => {
  // You can use the ButtonProps type to define the prop structure for custom button components
  const customButtonProps: ButtonProps = {
    appearance: 'primary',
    size: 'large',
    // other props
  };

  return (
    <Button {...customButtonProps}>
      Click Me
    </Button>
  );
};



const UserManagementTable: React.FC = () => {
  const tabs = [
    {
      count: 4,
      label: 'Current',
    },
    {
      count: 4,
      label: 'Invited',
    },
    {
      count: 4,
      label: 'Inactive',
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const tab = <Tabs tabs={tabs} activeIndex={activeIndex} onTabChange={setActiveIndex} />;

  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Button icon="get_app" className="mr-4">
        Download Records
      </Button>
      <Button appearance="primary">Invite users</Button>
    </div>
  );

  const data = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      role: 'Administrator',
      manager: 'Jane Smith',
      last_login: 'October 5, 2023',
      status: 'Active',
    },
    {
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alicejohnson@example.com',
      role: 'Healthcoaches',
      manager: 'Bob Brown',
      last_login: 'October 4, 2023',
      status: 'Inactive',
    },
    // Add more sample data here
  ];

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '30%',
      separator: true,
      translate: (a) => ({
        title: `${a.lastName}, ${a.firstName}`,
        firstName: a.firstName,
        lastName: a.lastName,
      }),
      cellType: 'AVATAR_WITH_TEXT',
      sorting: false,
    },
    {
      name: 'role',
      displayName: 'Role',
      width: 250,
      sorting: false,
    },
    {
      name: 'manager',
      displayName: 'Manager',
      width: 180,
      sorting: false,
    },
    {
      name: 'last_login',
      displayName: 'Last Login',
      width: 100,
      sorting: false,
    },
    {
      name: 'status',
      displayName: 'Status',
      width: 200,
      cellType: 'STATUS_HINT',
      sorting: false,
      translate: (a) => ({
        title: a.status,
        statusAppearance: a.status === 'Inactive' ? 'default' : 'success',
      }),
    },
  ];

  return (
    <Row>
      <Column size={11}>
        <div className="bg-secondary-lightest">
          <PageHeader title="Users" separator={true} tabs={tab} actions={actions} />
        </div>
        <Card>
          <Table
            type="resource"
            data={data}
            schema={schema}
            showMenu={false}
            withHeader={true}
            withCheckbox={true}
            onSelect={(rowIndex, selected, selectedList, selectAll) =>
              console.log(
                `on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(
                  selectedList
                )} selectAll: ${selectAll}`
              )
            }
            headerOptions={{
              withSearch: true,
            }}
            onSearch={(currData, searchTerm) => {
              return currData.filter(
                (d) =>
                  d.firstName.toLowerCase().match(searchTerm.toLowerCase()) ||
                  d.lastName.toLowerCase().match(searchTerm.toLowerCase())
              );
            }}
            withPagination={true}
            pageSize={5}
            onPageChange={(newPage: unknown) => console.log(`on-page-change:- ${newPage}`)}
          />
        </Card>
        <MyComponent />
      </Column>
    </Row>
  );
};

export default UserManagementTable;
