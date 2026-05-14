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

const ALL_TITLE_WORDS = ['Pac', 'Follow-Up', 'Protocol', 'for', 'Advanced', 'Cardiac', 'Care', 'Management'];
const MIN_TITLE = 1;
const MAX_TITLE = ALL_TITLE_WORDS.length;

const ALL_NAV_DATA = [
  { name: 'overview', label: 'Overview' },
  { name: 'interventions', label: 'Interventions' },
  { name: 'activities', label: 'Activities' },
  { name: 'documents', label: 'Documents' },
  { name: 'reports', label: 'Reports' },
  { name: 'settings', label: 'Settings' },
  { name: 'analytics', label: 'Analytics' },
];
const MIN_NAV = 2;
const MAX_NAV = ALL_NAV_DATA.length;

// Save is always present; these are the optional extras ordered left-to-right
const MIN_ACTIONS = 1; // menu button is always the minimum when actions are on
const MAX_ACTIONS = 5; // 5 optional items on top of Save

export const Responsiveness = () => {
  const [viewportPreset, setViewportPreset] = React.useState('full');
  const [titleWordCount, setTitleWordCount] = React.useState(3);
  const [actionCount, setActionCount] = React.useState(MIN_ACTIONS);
  const [navCount, setNavCount] = React.useState(MIN_NAV);
  const [showBreadcrumb, setShowBreadcrumb] = React.useState(false);
  const [showButton, setShowButton] = React.useState(false);
  const [showBadge, setShowBadge] = React.useState(true);

  const avatarList = [
    { firstName: 'John', lastName: 'Doe', appearance: 'accent2' },
    { firstName: 'Jane', lastName: 'Smith', appearance: 'accent3' },
  ];

  const [active, setActive] = React.useState({ name: 'overview' });

  const navigation =
    navCount > 0 ? (
      <HorizontalNav
        menus={ALL_NAV_DATA.slice(0, navCount)}
        active={active}
        onClick={(menu) => {
          setActive(menu);
          action(`nav-click: ${menu.name}`)();
        }}
        aria-label="Protocol navigation"
      />
    ) : undefined;

  // Optional action items ordered left-to-right; Save is always rendered separately
  const extraActionElements = [
    <Text appearance="subtle" className="mr-4" key="text">
      Updated 1 day ago
    </Text>,
    <AvatarGroup borderColor="var(--secondary-lightest)" className="mr-5" list={avatarList} key="avatars" />,
    <Button className="mr-4" onClick={action('export')} key="export">
      Export
    </Button>,
    <Button className="mr-4" onClick={action('edit')} key="edit">
      Edit
    </Button>,
    <Button
      icon="more_vertical"
      largeIcon={true}
      className="mr-4"
      aria-label="More options"
      onClick={action('menu')}
      key="menu"
    />,
  ];

  const actions =
    actionCount > 0 ? (
      <div className="d-flex align-items-center justify-content-end">
        {extraActionElements.slice(MAX_ACTIONS - actionCount)}
        <Button appearance="primary" onClick={action('save')} key="save">
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

  const button = showButton ? (
    <Button icon="arrow_back" size="tiny" largeIcon={true} aria-label="Go back" onClick={action('back')} />
  ) : undefined;

  const title = ALL_TITLE_WORDS.slice(0, titleWordCount).join(' ');

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
      <Flex direction="column" gap="spacing-20" className="mb-6">
        {/* Viewport */}
        <Flex direction="row" wrap="wrap" gap="spacing-40" className="align-items-center">
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
            name="viewportFull"
            label="Full width"
            selected={viewportPreset === 'full'}
            aria-label="Full width"
            onClick={() => togglePreset('full')}
          />
        </Flex>

        {/* Actions */}
        <Flex direction="row" wrap="wrap" gap="spacing-40" className="align-items-center">
          <Chip
            type="selection"
            name="showActions"
            label="Actions"
            selected={actionCount > 0}
            aria-label="Toggle actions"
            onClick={() => setActionCount((c) => (c > 0 ? 0 : MIN_ACTIONS))}
          />
          <Button
            icon="remove"
            size="tiny"
            aria-label="Remove one action"
            disabled={actionCount <= MIN_ACTIONS}
            onClick={() => setActionCount((c) => Math.max(MIN_ACTIONS, c - 1))}
          />
          <Button
            icon="add"
            size="tiny"
            aria-label="Add one action"
            disabled={actionCount >= MAX_ACTIONS}
            onClick={() => setActionCount((c) => Math.min(MAX_ACTIONS, c + 1))}
          />
          <Chip
            type="selection"
            name="actionsMax"
            label="Max"
            selected={actionCount >= MAX_ACTIONS}
            aria-label="Set actions to max or remove one"
            onClick={() => setActionCount((c) => (c >= MAX_ACTIONS ? MAX_ACTIONS - 1 : MAX_ACTIONS))}
          />
        </Flex>

        {/* Nav */}
        <Flex direction="row" wrap="wrap" gap="spacing-40" className="align-items-center">
          <Chip
            type="selection"
            name="showNav"
            label="Nav"
            selected={navCount > 0}
            aria-label="Toggle navigation"
            onClick={() => setNavCount((c) => (c > 0 ? 0 : MIN_NAV))}
          />
          <Button
            icon="remove"
            size="tiny"
            aria-label="Remove one nav item"
            disabled={navCount <= MIN_NAV}
            onClick={() => setNavCount((c) => Math.max(MIN_NAV, c - 1))}
          />
          <Button
            icon="add"
            size="tiny"
            aria-label="Add one nav item"
            disabled={navCount >= MAX_NAV}
            onClick={() => setNavCount((c) => Math.min(MAX_NAV, c + 1))}
          />
          <Chip
            type="selection"
            name="navMax"
            label="Max"
            selected={navCount >= MAX_NAV}
            aria-label="Set nav to max or remove one"
            onClick={() => setNavCount((c) => (c >= MAX_NAV ? MAX_NAV - 1 : MAX_NAV))}
          />
        </Flex>

        {/* Title length + content toggles */}
        <Flex direction="row" wrap="wrap" gap="spacing-40" className="align-items-center">
          <Text appearance="subtle" weight="medium">
            Title
          </Text>
          <Button
            icon="remove"
            size="tiny"
            aria-label="Shorten title by one word"
            disabled={titleWordCount <= MIN_TITLE}
            onClick={() => setTitleWordCount((c) => Math.max(MIN_TITLE, c - 1))}
          />
          <Button
            icon="add"
            size="tiny"
            aria-label="Lengthen title by one word"
            disabled={titleWordCount >= MAX_TITLE}
            onClick={() => setTitleWordCount((c) => Math.min(MAX_TITLE, c + 1))}
          />
          <Chip
            type="selection"
            name="titleMax"
            label="Max"
            selected={titleWordCount >= MAX_TITLE}
            aria-label="Set title to max length or shorten by one word"
            onClick={() => setTitleWordCount((c) => (c >= MAX_TITLE ? MAX_TITLE - 1 : MAX_TITLE))}
          />
          <Chip
            type="selection"
            name="showBreadcrumb"
            label="Breadcrumb"
            selected={showBreadcrumb}
            aria-label="Toggle breadcrumb (level 1)"
            onClick={() => setShowBreadcrumb((v) => !v)}
          />
          <Chip
            type="selection"
            name="showButton"
            label="Back button"
            selected={showButton}
            aria-label="Toggle back button"
            onClick={() => setShowButton((v) => !v)}
          />
          <Chip
            type="selection"
            name="showBadge"
            label="Badge"
            selected={showBadge}
            aria-label="Toggle badge beside title"
            onClick={() => setShowBadge((v) => !v)}
          />
        </Flex>
      </Flex>

      <div style={containerStyle} className="bg-secondary-lightest">
        <PageHeader
          title={title}
          navigationPosition="center"
          navigation={navigation}
          actions={actions}
          breadcrumbs={breadcrumbs}
          button={button}
          badge={showBadge ? <Badge appearance="secondary">Draft</Badge> : undefined}
          status={<StatusHint appearance="info">Ongoing</StatusHint>}
          separator={false}
          aria-label="Pac follow-up page header"
        />
      </div>
    </div>
  );
};

const customCode = `() => {
  const ALL_TITLE_WORDS = ['Pac', 'Follow-Up', 'Protocol', 'for', 'Advanced', 'Cardiac', 'Care', 'Management'];
  const MIN_TITLE = 1;
  const MAX_TITLE = ALL_TITLE_WORDS.length;

  const ALL_NAV_DATA = [
    { name: 'overview', label: 'Overview' },
    { name: 'interventions', label: 'Interventions' },
    { name: 'activities', label: 'Activities' },
    { name: 'documents', label: 'Documents' },
    { name: 'reports', label: 'Reports' },
    { name: 'settings', label: 'Settings' },
    { name: 'analytics', label: 'Analytics' },
  ];
  const MIN_NAV = 2;
  const MAX_NAV = ALL_NAV_DATA.length;
  const MIN_ACTIONS = 1;
  const MAX_ACTIONS = 5;

  const [viewportPreset, setViewportPreset] = React.useState('full');
  const [titleWordCount, setTitleWordCount] = React.useState(3);
  const [actionCount, setActionCount] = React.useState(MIN_ACTIONS);
  const [navCount, setNavCount] = React.useState(MIN_NAV);
  const [showBreadcrumb, setShowBreadcrumb] = React.useState(false);
  const [showButton, setShowButton] = React.useState(false);
  const [showBadge, setShowBadge] = React.useState(true);

  const avatarList = [
    { firstName: 'John', lastName: 'Doe', appearance: 'accent2' },
    { firstName: 'Jane', lastName: 'Smith', appearance: 'accent3' },
  ];

  const [active, setActive] = React.useState({ name: 'overview' });

  const navigation = navCount > 0 ? (
    <HorizontalNav
      menus={ALL_NAV_DATA.slice(0, navCount)}
      active={active}
      onClick={(menu) => setActive(menu)}
      aria-label="Protocol navigation"
    />
  ) : undefined;

  const extraActionElements = [
    <Text appearance="subtle" className="mr-4" key="text">Updated 1 day ago</Text>,
    <AvatarGroup borderColor="var(--secondary-lightest)" className="mr-5" list={avatarList} key="avatars" />,
    <Button className="mr-4" key="export">Export</Button>,
    <Button className="mr-4" key="edit">Edit</Button>,
    <Button icon="more_vertical" largeIcon={true} className="mr-4" aria-label="More options" key="menu" />,
  ];

  const actions = actionCount > 0 ? (
    <div className="d-flex align-items-center justify-content-end">
      {extraActionElements.slice(MAX_ACTIONS - actionCount)}
      <Button appearance="primary" key="save">Save</Button>
    </div>
  ) : undefined;

  const breadcrumbs = showBreadcrumb ? (
    <Breadcrumbs
      list={[{ label: 'Care potential', link: '/care-potential' }]}
      onClick={(link) => console.log(\`breadcrumb: \${link}\`)}
    />
  ) : undefined;

  const button = showButton ? (
    <Button icon="arrow_back" size="tiny" largeIcon={true} aria-label="Go back" />
  ) : undefined;

  const title = ALL_TITLE_WORDS.slice(0, titleWordCount).join(' ');

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
      <Flex direction="column" gap="spacing-20" className="mb-6">
        <Flex direction="row" wrap="wrap" gap="spacing-40" className="align-items-center">
          <Chip type="selection" name="viewport320" label="320px" selected={viewportPreset === '320'}
            aria-label="Constrain header to 320px width" onClick={() => togglePreset('320')} />
          <Chip type="selection" name="viewport640" label="640px" selected={viewportPreset === '640'}
            aria-label="Constrain header to 640px width" onClick={() => togglePreset('640')} />
          <Chip type="selection" name="viewportFull" label="Full width" selected={viewportPreset === 'full'}
            aria-label="Full width" onClick={() => togglePreset('full')} />
        </Flex>

        <Flex direction="row" wrap="wrap" gap="spacing-40" className="align-items-center">
          <Chip type="selection" name="showActions" label="Actions" selected={actionCount > 0}
            aria-label="Toggle actions" onClick={() => setActionCount((c) => (c > 0 ? 0 : MIN_ACTIONS))} />
          <Button icon="remove" size="tiny" aria-label="Remove one action"
            disabled={actionCount <= MIN_ACTIONS} onClick={() => setActionCount((c) => Math.max(MIN_ACTIONS, c - 1))} />
          <Button icon="add" size="tiny" aria-label="Add one action"
            disabled={actionCount >= MAX_ACTIONS} onClick={() => setActionCount((c) => Math.min(MAX_ACTIONS, c + 1))} />
          <Chip type="selection" name="actionsMax" label="Max" selected={actionCount >= MAX_ACTIONS}
            aria-label="Set actions to max or remove one"
            onClick={() => setActionCount((c) => (c >= MAX_ACTIONS ? MAX_ACTIONS - 1 : MAX_ACTIONS))} />
        </Flex>

        <Flex direction="row" wrap="wrap" gap="spacing-40" className="align-items-center">
          <Chip type="selection" name="showNav" label="Nav" selected={navCount > 0}
            aria-label="Toggle navigation" onClick={() => setNavCount((c) => (c > 0 ? 0 : MIN_NAV))} />
          <Button icon="remove" size="tiny" aria-label="Remove one nav item"
            disabled={navCount <= MIN_NAV} onClick={() => setNavCount((c) => Math.max(MIN_NAV, c - 1))} />
          <Button icon="add" size="tiny" aria-label="Add one nav item"
            disabled={navCount >= MAX_NAV} onClick={() => setNavCount((c) => Math.min(MAX_NAV, c + 1))} />
          <Chip type="selection" name="navMax" label="Max" selected={navCount >= MAX_NAV}
            aria-label="Set nav to max or remove one"
            onClick={() => setNavCount((c) => (c >= MAX_NAV ? MAX_NAV - 1 : MAX_NAV))} />
        </Flex>

        <Flex direction="row" wrap="wrap" gap="spacing-40" className="align-items-center">
          <Text appearance="subtle" weight="medium">Title</Text>
          <Button icon="remove" size="tiny" aria-label="Shorten title by one word"
            disabled={titleWordCount <= MIN_TITLE} onClick={() => setTitleWordCount((c) => Math.max(MIN_TITLE, c - 1))} />
          <Button icon="add" size="tiny" aria-label="Lengthen title by one word"
            disabled={titleWordCount >= MAX_TITLE} onClick={() => setTitleWordCount((c) => Math.min(MAX_TITLE, c + 1))} />
          <Chip type="selection" name="titleMax" label="Max" selected={titleWordCount >= MAX_TITLE}
            aria-label="Set title to max length or shorten by one word"
            onClick={() => setTitleWordCount((c) => (c >= MAX_TITLE ? MAX_TITLE - 1 : MAX_TITLE))} />
          <Chip type="selection" name="showBreadcrumb" label="Breadcrumb" selected={showBreadcrumb}
            aria-label="Toggle breadcrumb (level 1)" onClick={() => setShowBreadcrumb((v) => !v)} />
          <Chip type="selection" name="showButton" label="Back button" selected={showButton}
            aria-label="Toggle back button" onClick={() => setShowButton((v) => !v)} />
          <Chip type="selection" name="showBadge" label="Badge" selected={showBadge}
            aria-label="Toggle badge beside title" onClick={() => setShowBadge((v) => !v)} />
        </Flex>
      </Flex>

      <div style={containerStyle} className="bg-secondary-lightest">
        <PageHeader
          title={title}
          navigationPosition="center"
          navigation={navigation}
          actions={actions}
          breadcrumbs={breadcrumbs}
          button={button}
          badge={showBadge ? <Badge appearance="secondary">Draft</Badge> : undefined}
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
