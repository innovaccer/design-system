import * as React from 'react';
import { Navigation, Button, PageHeader, Row, Column } from '@/index';

export const level0WithNavigation = () => {
  const navigationData = [
    {
      name: 'menu_1',
      label: 'Virtual Visits',
    },
    {
      name: 'menu_2',
      label: 'Assesments',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'menu_1',
  });

  const onClickHandler = (menu) => {
    setActive(menu);
  };

  const navigation = <Navigation menus={navigationData} onClick={onClickHandler} active={active} />;
  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Button className="mr-4">Reorganize</Button>
      <Button icon="get_app">Export to PDF</Button>
    </div>
  );

  return (
    <Row>
      <Column size={11}>
        <div className="py-6 bg-secondary-lightest">
          <PageHeader title="Dashboard" separator={true} navigation={navigation} actions={actions} />
        </div>
      </Column>
    </Row>
  );
};

const customCode = `() => {
  const navigationData = [
    {
      name: 'menu_1',
      label: 'Virtual Visits',
    },
    {
      name: 'menu_2',
      label: 'Assesments'
    }
  ];

  const [active, setActive] = React.useState({
    name: 'menu_1'
  });

  const onClickHandler = (menu) => {
    setActive(menu);
  };

  const navigation = <Navigation menus={navigationData} onClick={onClickHandler} active={active}/>;
  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Button className="mr-4">Reorganize</Button>
      <Button icon="get_app">Export to PDF</Button>
    </div>
  );

  return (
    <Row>
      <Column size={11}>
        <div className="py-6 bg-secondary-lightest">
          <PageHeader
            title="Dashboard"
            separator={true}
            navigation={navigation}
            actions={actions}
          />
        </div>
      </Column>
    </Row>
  );
}`;

export default {
  title: 'Layout/PageHeader/Level 0 With Navigation',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
