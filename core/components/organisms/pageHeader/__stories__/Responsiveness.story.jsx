import * as React from 'react';
import {
  Breadcrumbs,
  Text,
  StatusHint,
  HorizontalNav,
  AvatarGroup,
  PageHeader,
  Button,
  Chip,
  Flex,
  Badge,
} from '@/index';
import { action } from '@/utils/action';

export const Responsiveness = () => {
  const [viewportPreset, setViewportPreset] = React.useState('full');
  const [showActions, setShowActions] = React.useState(true);
  const [showBreadcrumb, setShowBreadcrumb] = React.useState(false);

  const navigationData = [
    { name: 'overview', label: 'Overview' },
    { name: 'interventions', label: 'Interventions' },
    { name: 'activities', label: 'Activities' },
    { name: 'documents', label: 'Documents' },
  ];

  const avatarList = [
    { firstName: 'John', lastName: 'Doe', appearance: 'accent2' },
    { firstName: 'Jane', lastName: 'Smith', appearance: 'accent3' },
  ];

  const [active, setActive] = React.useState({ name: 'overview' });

  const navigation = (
    <HorizontalNav
      menus={navigationData}
      active={active}
      onClick={(menu) => {
        setActive(menu);
        action(`nav-click: ${menu.name}`)();
      }}
      aria-label="Protocol navigation"
    />
  );

  const actions = showActions ? (
    <div className="d-flex align-items-center justify-content-end">
      <Text appearance="subtle" className="mr-4">
        Updated 1 day ago
      </Text>
      <AvatarGroup borderColor="var(--secondary-lightest)" className="mr-5" list={avatarList} />
      <Button className="mr-4" onClick={action('edit')}>
        Edit
      </Button>
      <Button appearance="primary" onClick={action('save')}>
        Save
      </Button>
    </div>
  ) : undefined;

  const breadcrumbs = showBreadcrumb ? (
    <Breadcrumbs
      list={[{ label: 'Care potential', link: '/care-potential' }]}
      onClick={(link) => action(`breadcrumb: ${link}`)()}
    />
  ) : undefined;

  const containerStyle = {
    width: viewportPreset === '320' ? 320 : viewportPreset === '640' ? 640 : '100%',
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxSizing: 'border-box',
  };

  function togglePreset(preset) {
    setViewportPreset((p) => (p === preset ? 'full' : preset));
  }

  return (
    <div>
      <Flex direction="row" wrap="wrap" gap="spacing-40" className="mb-6 align-items-center">
        <Chip
          type="selection"
          name="viewport320"
          label="320px"
          selected={viewportPreset === '320'}
          aria-label="Constrain header to 320px width"
          onClick={() => togglePreset('320')}
        />
        <Chip
          type="selection"
          name="viewport640"
          label="640px"
          selected={viewportPreset === '640'}
          aria-label="Constrain header to 640px width"
          onClick={() => togglePreset('640')}
        />
        <Chip
          type="selection"
          name="showActions"
          label="Actions"
          selected={showActions}
          aria-label="Toggle action buttons"
          onClick={() => setShowActions((v) => !v)}
        />
        <Chip
          type="selection"
          name="showBreadcrumb"
          label="Breadcrumb"
          selected={showBreadcrumb}
          aria-label="Toggle breadcrumb (level 1)"
          onClick={() => setShowBreadcrumb((v) => !v)}
        />
      </Flex>

      <div style={containerStyle} className="bg-secondary-lightest">
        <PageHeader
          title="Pac Follow-Up Protocol"
          navigationPosition="center"
          navigation={navigation}
          actions={actions}
          breadcrumbs={breadcrumbs}
          badge={<Badge appearance="secondary">Draft</Badge>}
          status={<StatusHint appearance="info">Ongoing</StatusHint>}
          separator={false}
          aria-label="Pac follow-up page header"
        />
      </div>
    </div>
  );
};

const customCode = `() => {
  const [viewportPreset, setViewportPreset] = React.useState('full');
  const [showActions, setShowActions] = React.useState(true);
  const [showBreadcrumb, setShowBreadcrumb] = React.useState(false);

  const navigationData = [
    { name: 'overview', label: 'Overview' },
    { name: 'interventions', label: 'Interventions' },
    { name: 'activities', label: 'Activities' },
    { name: 'documents', label: 'Documents' },
  ];

  const avatarList = [
    { firstName: 'John', lastName: 'Doe', appearance: 'accent2' },
    { firstName: 'Jane', lastName: 'Smith', appearance: 'accent3' },
  ];

  const [active, setActive] = React.useState({ name: 'overview' });

  const navigation = (
    <HorizontalNav
      menus={navigationData}
      active={active}
      onClick={(menu) => setActive(menu)}
      aria-label="Protocol navigation"
    />
  );

  const actions = showActions ? (
    <div className="d-flex align-items-center justify-content-end">
      <Text appearance="subtle" className="mr-4">Updated 1 day ago</Text>
      <AvatarGroup borderColor="var(--secondary-lightest)" className="mr-5" list={avatarList} />
      <Button className="mr-4">Edit</Button>
      <Button appearance="primary">Save</Button>
    </div>
  ) : undefined;

  const breadcrumbs = showBreadcrumb ? (
    <Breadcrumbs
      list={[{ label: 'Care potential', link: '/care-potential' }]}
      onClick={(link) => console.log(\`breadcrumb: \${link}\`)}
    />
  ) : undefined;

  const containerStyle = {
    width: viewportPreset === '320' ? 320 : viewportPreset === '640' ? 640 : '100%',
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxSizing: 'border-box',
  };

  function togglePreset(preset) {
    setViewportPreset((p) => (p === preset ? 'full' : preset));
  }

  return (
    <div>
      <Flex direction="row" wrap="wrap" gap="spacing-40" className="mb-6 align-items-center">
        <Chip type="selection" name="viewport320" label="320px" selected={viewportPreset === '320'}
          aria-label="Constrain header to 320px width" onClick={() => togglePreset('320')} />
        <Chip type="selection" name="viewport640" label="640px" selected={viewportPreset === '640'}
          aria-label="Constrain header to 640px width" onClick={() => togglePreset('640')} />
        <Chip type="selection" name="showActions" label="Actions" selected={showActions}
          aria-label="Toggle action buttons" onClick={() => setShowActions((v) => !v)} />
        <Chip type="selection" name="showBreadcrumb" label="Breadcrumb" selected={showBreadcrumb}
          aria-label="Toggle breadcrumb (level 1)" onClick={() => setShowBreadcrumb((v) => !v)} />
      </Flex>

      <div style={containerStyle} className="bg-secondary-lightest">
        <PageHeader
          title="Pac Follow-Up Protocol"
          navigationPosition="center"
          navigation={navigation}
          actions={actions}
          breadcrumbs={breadcrumbs}
          badge={<Badge appearance="secondary">Draft</Badge>}
          status={<StatusHint appearance="info">Ongoing</StatusHint>}
          separator={false}
          aria-label="Pac follow-up page header"
        />
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/PageHeader/Responsiveness',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
