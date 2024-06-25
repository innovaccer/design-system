import * as React from 'react';
import { HorizontalNav, Breadcrumbs, Badge, MetaList, PageHeader, StatusHint, Row, Column } from '@/index';
import { action } from '@/utils/action';

export const withNavigation = () => {
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

  const navigation = <HorizontalNav menus={navigationData} onClick={onClickHandler} active={active} />;
  const actions = <div className="d-flex justify-content-end align-items-center" />;
  const breadcrumbs = (
    <Breadcrumbs
      list={[
        {
          label: 'Outreach',
          link: '/Outreach',
        },
      ]}
      onClick={(link) => action(`on-click: ${link}`)}
    />
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
        <div className="bg-secondary-lightest">
          <PageHeader
            title="Covid-19"
            separator={false}
            navigationPosition="center"
            navigation={navigation}
            actions={actions}
            breadcrumbs={breadcrumbs}
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
    <HorizontalNav
      menus={navigationData}
      onClick={onClickHandler}
      active={active}
    />
  );
  const actions = (
    <div className="d-flex justify-content-end align-items-center"/>
  );
  const breadcrumbs = (
    <Breadcrumbs
      list={[{
        label: 'Outreach',
        link: '/Outreach'
      }]}
      onClick={link => console.log(\`on-click: \${link}\`)}
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
        <div className="bg-secondary-lightest">
          <PageHeader
            title="Covid-19"
            separator={false}
            navigationPosition="center"
            navigation={navigation}
            actions={actions}
            breadcrumbs={breadcrumbs}
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
  title: 'Components/PageHeader/Level 1/With breadcrumb/With Navigation',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
