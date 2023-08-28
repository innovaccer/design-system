import * as React from 'react';
import { Navigation, Button, Badge, MetaList, PageHeader, StatusHint, Row, Column } from '@/index';
import { action } from '@/utils/action';

export const withBackButton = () => {
  const navigationData = [
    {
      name: 'menu_1',
      label: 'Performance',
    },
    {
      name: 'menu_2',
      label: 'Recipients',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'menu_1',
  });

  const onClickHandler = (menu) => {
    setActive(menu);
  };

  const navigation = <Navigation menus={navigationData} onClick={onClickHandler} active={active} />;
  const actions = <div className="d-flex justify-content-end align-items-center" />;
  const backButton = (
    <Button size="tiny" icon="arrow_back" largeIcon={true} appearance="basic" onClick={() => action(`on-click`)} />
  );
  const badge = (
    <Badge subtle={true} appearance="success">
      Sent
    </Badge>
  );
  const meta = <MetaList list={[{ label: 'Text' }, { label: 'Email' }]} />;

  const status = <StatusHint appearance="info">Ongoing</StatusHint>;

  return (
    <Row>
      <Column size={11}>
        <div className="py-5 bg-secondary-lightest">
          <PageHeader
            title="Covid-19"
            separator={true}
            navigationPosition="center"
            navigation={navigation}
            actions={actions}
            backButton={backButton}
            badge={badge}
            status={status}
            meta={meta}
          />
        </div>
      </Column>
    </Row>
  );
};

const customCode = `() => {
  const navigationData = [
    {
      name: 'menu_1',
      label: 'Performance',
    },
    {
      name: 'menu_2',
      label: 'Recipients'
    }
  ];

  const [active, setActive] = React.useState({
    name: 'menu_1'
  });

  const onClickHandler = (menu) => {
    setActive(menu);
  };

  const navigation = (
    <Navigation
      menus={navigationData}
      onClick={onClickHandler}
      active={active}
      align="center"
    />
  );
  const actions = (
    <div className="d-flex justify-content-end align-items-center"/>
  );
  const backButton = (
    <Button
      size="tiny"
      icon="arrow_back"
      largeIcon={true}
      appearance="basic"
      onClick={() => console.log(\`on-click\`)}
    />
  );
  const badge = (
    <Badge subtle={true} appearance="success">Sent</Badge>
  );
  const meta = (
    <MetaList
      list={[{ label: 'Text' }, { label: 'Email' }]}
    />
  );

  const status = <StatusHint appearance="info">Ongoing</StatusHint>;

  return (
    <Row>
      <Column size={11}>
        <div className="py-5 bg-secondary-lightest">
          <PageHeader
            title="Covid-19"
            separator={true}
            navigationPosition="center"
            navigation={navigation}
            actions={actions}
            backButton={backButton}
            badge={badge}
            status={status}
            meta={meta}
          />
        </div>
      </Column>
    </Row>
  );
}`;

export default {
  title: 'Layout/PageHeader/With Back Button',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
