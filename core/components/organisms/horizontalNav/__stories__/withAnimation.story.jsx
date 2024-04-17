import * as React from 'react';
import { Card, Table, List, Text, Button } from '@/index';
import HorizontalNav from '../HorizontalNav';
import { action } from '@/utils/action';
import loaderSchema from '@/components/organisms/grid/__stories__/_common_/loaderSchema';

const getMenu1List = (active, menu, handleAnimationEnd) => {
  const data = [
    {
      name: 'MSSP Track 1 Urban',
      status: 'Active',
      measures: '9',
      current_period: 'March 2017 - Feb 2018',
      added_in: 'March 2014',
    },
    {
      name: 'MSSP Track 1 Rural',
      status: 'Active',
      measures: '9',
      current_period: 'March 2017 - Feb 201',
      added_in: 'March 2015',
    },
    {
      name: 'MSSP Track 2',
      status: 'Inactive',
      measures: '14',
      current_period: 'March 2017 - Feb 201',
      added_in: 'March 2016',
    },
    {
      name: 'Aetna',
      status: 'Active',
      measures: '20',
      current_period: 'March 2017 - Feb 201',
      added_in: 'March 2019',
    },
    {
      name: 'BCBS',
      status: 'Active',
      measures: '16',
      current_period: 'March 2017 - Feb 201',
      added_in: 'March 2017',
    },
  ];

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '20%',
      sorting: false,
    },
    {
      name: 'status',
      displayName: 'Status',
      width: '20%',
      translate: (a) => ({
        title: a.status,
        statusAppearance: a.status === 'Inactive' ? 'default' : 'success',
      }),
      cellType: 'STATUS_HINT',
      sorting: false,
    },
    {
      name: 'measures',
      displayName: 'No. of Measures',
      width: '20%',
      sorting: false,
    },
    {
      name: 'current_period',
      displayName: 'Current Period',
      width: '20%',
      sorting: false,
    },
    {
      name: 'added_in',
      displayName: 'Added in',
      width: '20%',
      sorting: false,
    },
  ];

  return (
    <Card
      onAnimationEnd={handleAnimationEnd}
      className={`${menu.name != active.name ? 'slideOut-left' : 'slideIn-left'} pt-4`}
    >
      <Table
        loaderSchema={loaderSchema}
        size="compressed"
        showMenu={false}
        separator={false}
        data={data}
        schema={schema}
        withHeader={true}
        withPagination={false}
        headerOptions={{ withSearch: true }}
        onSearch={(currData, searchTerm) => {
          return currData.filter((d) => d.name.toLowerCase().match(searchTerm.toLowerCase()));
        }}
      />
    </Card>
  );
};

const getMenu2List = (active, menu, handleAnimationEnd) => {
  const data = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'jonathandoe@gamil.com',
      owner: true,
    },
    {
      firstName: 'Katty',
      lastName: 'Perry',
      email: 'kattyperry21@gamil.com',
      edit: true,
    },
    {
      firstName: 'Daniel',
      lastName: 'Low',
      email: 'daniellow02@yahoo.com',
      view: true,
    },
  ];

  const schema = [
    {
      name: 'info',
      displayName: 'Info',
      width: '80%',
      cellType: 'AVATAR_WITH_META_LIST',
      translate: (a) => ({
        firstName: a.firstName,
        lastName: a.lastName,
        title: `${a.firstName} ${a.lastName}`,
        metaList: [a.email],
      }),
    },
    {
      name: 'rights',
      displayName: 'Rights',
      width: '20%',
      cellRenderer: (props) => {
        const renderRights = () => {
          if (props.data.owner) {
            return (
              <Text appearance="subtle" className="pr-5">
                owner
              </Text>
            );
          }

          if (props.data.edit || props.data.view) {
            const rights = props.data.edit ? 'edit' : 'view';
            return (
              <Button
                icon="keyboard_arrow_down"
                iconAlign="right"
                appearance="transparent"
                onClick={(e) => e.stopPropagation()}
              >
                {`can ${rights}`}
              </Button>
            );
          }

          return null;
        };

        return <div className="d-flex align-items-center justify-content-end flex-grow-1">{renderRights()}</div>;
      },
    },
  ];

  return (
    <Card
      onAnimationEnd={handleAnimationEnd}
      className={`${menu.name != active.name ? 'slideOut-left' : 'slideIn-left'} pt-4`}
    >
      <Text size="large" weight="strong" className="ml-5">
        Sharing Test Manual
      </Text>
      <List
        type="resource"
        withHeader={true}
        headerOptions={{
          withSearch: true,
          dynamicColumn: false,
        }}
        separator={false}
        showMenu={false}
        data={data}
        schema={schema}
        withPagination={false}
        onSearch={(currData, searchTerm) => {
          return currData.filter(
            (d) =>
              d.firstName.toLowerCase().match(searchTerm.toLowerCase()) ||
              d.lastName.toLowerCase().match(searchTerm.toLowerCase())
          );
        }}
        onRowClick={(rowData, rowIndex) =>
          action(`on-row-click:- rowIndex: ${rowIndex} data: ${JSON.stringify(rowData)}`)()
        }
      />
    </Card>
  );
};

export const withAnimation = () => {
  const data = [
    {
      name: 'menu_1',
      label: 'Menu 1',
      count: 20,
    },
    {
      name: 'menu_2',
      label: 'Menu 2',
      count: 10,
    },
    {
      name: 'menu_3',
      label: 'Menu 3',
      disabled: true,
      count: 5,
    },
  ];

  const [menu, setActiveMenu] = React.useState({
    name: 'menu_1',
  });
  const [active, setActive] = React.useState({
    name: 'menu_1',
  });

  const handleAnimationEnd = () => {
    setActive(menu);
  };

  const onClickHandler = (menu) => {
    action(`menu-clicked: ${JSON.stringify(menu)}`)();
    setActiveMenu(menu);
  };

  return (
    <div className="bg-secondary-lightest h-100 p-5 border-top border-bottom">
      <HorizontalNav
        className="w-100 pb-5 mb-5 justify-content-center border-bottom"
        menus={data}
        active={menu}
        onClick={onClickHandler}
      />

      {active.name === 'menu_1'
        ? getMenu1List(active, menu, handleAnimationEnd)
        : getMenu2List(active, menu, handleAnimationEnd)}
    </div>
  );
};

const customCode = `() => {
  const data = [
    {
      name: 'menu_1',
      label: 'Menu 1',
      count: 20,
    },
    {
      name: 'menu_2',
      label: 'Menu 2',
      count: 10
    },
    {
      name: 'menu_3',
      label: 'Menu 3',
      disabled: true,
      count: 5,
    }
  ];

  const [menu, setActiveMenu] = React.useState({
    name: 'menu_1',
  });
  const [active, setActive] = React.useState({
    name: 'menu_1',
  });

  const handleAnimationEnd = () => {
    setActive(menu);
  }

  const onClickHandler = (menu) => {
    console.log('menu-clicked: ', menu);
    setActiveMenu(menu);
  };

  const getMenu1List = (active, menu, handleAnimationEnd) => {

    const data = [
      {
        name: 'MSSP Track 1 Urban',
        status: 'Active',
        measures: '9',
        current_period: 'March 2017 - Feb 2018',
        added_in: 'March 2014',
      },
      {
        name: 'MSSP Track 1 Rural',
        status: 'Active',
        measures: '9',
        current_period: 'March 2017 - Feb 201',
        added_in: 'March 2015',
      },
      {
        name: 'MSSP Track 2',
        status: 'Inactive',
        measures: '14',
        current_period: 'March 2017 - Feb 201',
        added_in: 'March 2016',
      },
      {
        name: 'Aetna',
        status: 'Active',
        measures: '20',
        current_period: 'March 2017 - Feb 201',
        added_in: 'March 2019',
      },
      {
        name: 'BCBS',
        status: 'Active',
        measures: '16',
        current_period: 'March 2017 - Feb 201',
        added_in: 'March 2017',
      },
    ];
  
    const schema = [
      {
        name: 'name',
        displayName: 'Name',
        width: '20%',
        sorting: false,
      },
      {
        name: 'status',
        displayName: 'Status',
        width: '20%',
        translate: (a) => ({
          title: a.status,
          statusAppearance: a.status === 'Inactive' ? 'default' : 'success',
        }),
        cellType: 'STATUS_HINT',
        sorting: false,
      },
      {
        name: 'measures',
        displayName: 'No. of Measures',
        width: '20%',
        sorting: false,
      },
      {
        name: 'current_period',
        displayName: 'Current Period',
        width: '20%',
        sorting: false,
      },
      {
        name: 'added_in',
        displayName: 'Added in',
        width: '20%',
        sorting: false,
      },
    ];
  
    return (
      <Card
        onAnimationEnd={handleAnimationEnd}
        className={\`\${menu.name != active.name ? 'slideOut-left' : 'slideIn-left'} pt-4\`}
      >
        <Table
          size="compressed"
          showMenu={false}
          separator={false}
          data={data}
          schema={schema}
          withHeader={true}
          withPagination={false}
          headerOptions={{ withSearch: true, }}
          onSearch={(currData, searchTerm) => {
            return currData.filter((d) => d.name.toLowerCase().match(searchTerm.toLowerCase()));
          }}
        />
      </Card>
    )
  }

  const getMenu2List = (active, menu, handleAnimationEnd) => {
    const data = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'jonathandoe@gamil.com',
        owner: true
      },
      {
        firstName: 'Katty',
        lastName: 'Perry',
        email: 'kattyperry21@gamil.com',
        edit: true
      },
      {
        firstName: 'Daniel',
        lastName: 'Low',
        email: 'daniellow02@yahoo.com',
        view: true
      },
    ];
  
    const schema = [
      {
        name: 'info',
        displayName: 'Info',
        width: '80%',
        cellType: 'AVATAR_WITH_META_LIST',
        translate: a => ({
          firstName: a.firstName,
          lastName: a.lastName,
          title: \`\${a.firstName} \${a.lastName}\`,
          metaList: [a.email]
        }),
      },
      {
        name: 'rights',
        displayName: 'Rights',
        width: '20%',
        cellRenderer: (props) => {
          const renderRights = () => {
            if (props.data.owner) {
              return <Text appearance="subtle" className="pr-5">owner</Text>;
            }
  
            if (props.data.edit || props.data.view) {
              const rights = props.data.edit ? 'edit' : 'view';
              return (
                <Button
                  icon="keyboard_arrow_down"
                  iconAlign="right"
                  appearance="transparent"
                  onClick={e => e.stopPropagation()}
                >
                  {\`can \${rights}\`}
                </Button>
              );
            }
  
            return null;
          };
  
          return (
            <div className="d-flex align-items-center justify-content-end flex-grow-1">
              {renderRights()}
            </div>
          );
        }
      }
    ];
  
    return (
        <Card 
          onAnimationEnd={handleAnimationEnd}
          className={\`\${menu.name != active.name ? 'slideOut-left' : 'slideIn-left'} pt-4\`}
        >
          <Text size="large" weight="strong" className="ml-5">Sharing Test Manual</Text>
          <List
            type="resource"
            withHeader={true}
            headerOptions={{
              withSearch: true,
              dynamicColumn: false
            }}
            separator={false}
            showMenu={false}
            data={data}
            schema={schema}
            withPagination={false}
            onSearch={(currData, searchTerm) => {
              return currData.filter(d =>
                d.firstName.toLowerCase().match(searchTerm.toLowerCase())
                || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
              );
            }}
            onRowClick={(rowData, rowIndex) =>
              console.log(\`o\n-row-click:- rowIndex: \${rowIndex} data: \${JSON.stringify(rowData)}\`)
            }
          />
        </Card>
    );
  };

  return (
    <div className='bg-secondary-lightest h-100 p-5 border-top border-bottom'>
      <HorizontalNav
        className="w-100 pb-5 mb-5 justify-content-center border-bottom"
        menus={data}
        active={menu}
        onClick={onClickHandler}
      />

      {active.name === 'menu_1' ?
        getMenu1List(active, menu, handleAnimationEnd)
        :
        getMenu2List(active, menu, handleAnimationEnd)
      }
    </div>
  );
}`;

export default {
  title: 'Components/HorizontalNav/With Animation',
  component: HorizontalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
