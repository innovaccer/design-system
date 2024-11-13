import * as React from 'react';
import { Stepper, Button, Breadcrumbs, Badge, Text, MetaList, AvatarGroup, PageHeader, Menu } from '@/index';
import { action } from '@/utils/action';
import '../../style.css';

export const withStepper = () => {
  const stepperData = [
    {
      value: 'step_1',
      label: 'Recipients',
    },
    {
      value: 'step_2',
      label: 'Message',
    },
    {
      value: 'step_3',
      label: 'Schedule',
    },
  ];

  const options = [
    {
      label: 'Option 1',
      value: 'Option 1',
    },
    {
      label: 'Option 2',
      value: 'Option 2',
    },
    {
      label: 'Option 3',
      value: 'Option 3',
    },
  ];

  const avatarList = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
    },
  ];

  const [active, setActive] = React.useState(2);

  const onChangeHandler = (activeStep) => {
    setActive(activeStep);
  };

  const stepper = <Stepper steps={stepperData} onChange={onChangeHandler} active={active} completed={1} />;
  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Text appearance="subtle" className="mr-4">
        Few minutes ago
      </Text>
      <AvatarGroup
        className="mr-4"
        list={avatarList}
        borderColor="var(--secondary-lightest)"
        popoverOptions={{ dark: true, on: 'hover', position: 'bottom' }}
      />

      <div className="mr-4">
        <Menu trigger={<Menu.Trigger />}>
          <Menu.List>
            {options.map((item, key) => {
              const { label } = item;
              return <Menu.Item key={key}>{label}</Menu.Item>;
            })}
          </Menu.List>
        </Menu>
      </div>
      <Button className="mr-4">Finish later</Button>
    </div>
  );
  const breadcrumbs = (
    <Breadcrumbs
      list={[
        {
          label: 'Campaigns',
          link: '/Campaigns',
        },
      ]}
      onClick={(link) => action(`on-click: ${link}`)}
    />
  );
  const badge = <Badge appearance="secondary">Message</Badge>;
  const meta = <MetaList list={[{ label: 'Draft' }]} seperator={false} />;

  return (
    <div className="w-100 bg-secondary-lightest">
      <PageHeader
        title="Annual Wellness Visit"
        separator={false}
        navigationPosition="center"
        stepper={stepper}
        actions={actions}
        breadcrumbs={breadcrumbs}
        badge={badge}
        meta={meta}
      />
    </div>
  );
};

const customCode = `/*
// style.css
.Pageheader-longWrapper {
    width: 1200px;
}

*/

() => {
  const stepperData = [
    {
      value: 'step_1',
      label: 'Recipients',
    },
    {
      value: 'step_2',
      label: 'Message'
    },
    {
      value: 'step_3',
      label: 'Schedule',
    }
  ];

  const options = [
    {
      label: 'Option 1',
      value: 'Option 1',
    },
    {
      label: 'Option 2',
      value: 'Option 2',
    },
    {
      label: 'Option 3',
      value: 'Option 3',
    }
  ];

  const avatarList = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
    },
  ];

  const [active, setActive] = React.useState(2);

  const onChangeHandler = (activeStep) => {
    setActive(activeStep);
  };

  const stepper = <Stepper steps={stepperData} onChange={onChangeHandler} active={active} completed={1} />;
  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Text appearance="subtle" className="mr-4">Few minutes ago</Text>
      <AvatarGroup
        className="mr-4"
        list={avatarList}
        borderColor="var(--secondary-lightest)"
        popoverOptions={{ dark: true, on: 'hover', position: 'bottom' }}
      />
      <div className="mr-4">
       <Menu trigger={<Menu.Trigger />}>
        <Menu.List>
          {
            options.map((item, key) => {
              const { label } = item;
              return (
                <Menu.Item key={key}>
                  {label}
                </Menu.Item>
              );
            })
          }
        </Menu.List>
      </Menu>
      </div>
      <Button className="mr-4">Finish later</Button>
    </div>
  );
  const breadcrumbs = (
    <Breadcrumbs
      list={[{
        label: 'Campaigns',
        link: '/Campaigns'
      }]}
      onClick={link => console.log(\`on-click: \${link}\`)}
    />
  );
  const badge = (
    <Badge appearance="secondary">Message</Badge>
  );
  const meta = (
    <MetaList
      list={[{ label: 'Draft' }]}
      seperator={false}
    />
  );

  return (
    <div className="bg-secondary-lightest Pageheader-longWrapper">
      <PageHeader
        title="Annual Wellness Visit"
        separator={false}
        navigationPosition="center"
        stepper={stepper}
        actions={actions}
        breadcrumbs={breadcrumbs}
        badge={badge}
        meta={meta}
      />
    </div>
  );
}`;

export default {
  title: 'Components/PageHeader/Level 1/With breadcrumb/With Stepper',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
