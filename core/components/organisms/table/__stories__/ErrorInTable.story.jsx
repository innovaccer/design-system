import * as React from 'react';
import { Card, Table, EmptyState, Button } from '@/index';
import schema from '@/components/organisms/grid/__stories__/_common_/schema';
import { AsyncTable, SyncTable } from '@/components/organisms/table/__stories__/_common_/types';
import noContent from '@innovaccer/mds-images/ui-states/404-nothing-here-3.svg';

// CSF format story
export const errorInTable = () => {
  const errorTemplate = () => {
    return (
      <EmptyState>
        <EmptyState.Image src={noContent}></EmptyState.Image>
        <EmptyState.Title>Failed to load data</EmptyState.Title>
        <EmptyState.Description>
          We are unable to fetch the data. Try again. If the issue persists, contact Innovaccer support.
        </EmptyState.Description>
        <EmptyState.Actions>
          <Button icon="refresh">Try again</Button>
        </EmptyState.Actions>
      </EmptyState>
    );
  };

  return (
    <div className="vh-75">
      <Card className="h-100 overflow-hidden">
        <Table schema={schema} data={[]} error={true} errorTemplate={errorTemplate} />
      </Card>
    </div>
  );
};

const ImagePath = JSON.stringify(noContent);

const customCode = `() => {
  // import noContent from '@innovaccer/mds-images/ui-states/404-nothing-here-3.svg';

  const schema = [
  {
    name: 'name',
    displayName: 'Name',
    width: '40%',
    resizable: true,
    tooltip: true,
    separator: true,
    translate: (a) => ({
      title: \`\${a.firstName} \${a.lastName}\`,
      firstName: a.firstName,
      lastName: a.lastName,
    }),
    filters: [
      { label: 'A-G', value: 'a-g' },
      { label: 'H-R', value: 'h-r' },
      { label: 'S-Z', value: 's-z' },
    ],
    onFilterChange: (a, filters) => {
      for (const filter of filters) {
        switch (filter) {
          case 'a-g':
            if (a.firstName[0].toLowerCase() >= 'a' && a.firstName[0].toLowerCase() <= 'g') return true;
            break;
          case 'h-r':
            if (a.firstName[0].toLowerCase() >= 'h' && a.firstName[0].toLowerCase() <= 'r') return true;
            break;
          case 's-z':
            if (a.firstName[0].toLowerCase() >= 's' && a.firstName[0].toLowerCase() <= 'z') return true;
            break;
        }
      }
      return false;
    },
    cellType: 'AVATAR_WITH_TEXT',
  },
  {
    name: 'email',
    displayName: 'Email',
    width: 250,
    resizable: true,
    sorting: false,
    cellType: 'WITH_META_LIST',
  },
  {
    name: 'gender',
    displayName: 'Gender',
    width: 180,
    resizable: true,
    comparator: (a, b) => a.gender.localeCompare(b.gender),
    cellType: 'STATUS_HINT',
    translate: (a) => ({
      title: a.gender,
      statusAppearance: a.gender === 'Female' ? 'alert' : 'success',
    }),
    filters: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
    ],
    onFilterChange: (a, filters) => {
      for (const filter of filters) {
        if (a.gender.toLowerCase() === filter) return true;
      }
      return false;
    },
  },
  {
    name: 'icon',
    displayName: 'Icon',
    width: 100,
    resizable: true,
    align: 'center',
    cellType: 'ICON',
    translate: () => ({
      icon: 'event',
    }),
  }
];

  const errorTemplate = () => {
    return (
      <EmptyState>
        <EmptyState.Image src={${ImagePath}}></EmptyState.Image>
        <EmptyState.Title>Failed to load data</EmptyState.Title>
        <EmptyState.Description>
          We are unable to fetch the data. Try again. If the issue persists, contact Innovaccer support.
        </EmptyState.Description>
        <EmptyState.Actions>
          <Button icon="refresh">Try again</Button>
        </EmptyState.Actions>
      </EmptyState>
    );
  };

  return (
    <div className="vh-75">
      <Card className="h-100 overflow-hidden">
        <Table data={[]} schema={schema} error={true} errorTemplate={errorTemplate} />
      </Card>
    </div>
  );
}`;

export default {
  title: 'Components/Table/Error In Table',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Error State In Table',
        props: {
          components: { AsyncTable, SyncTable },
        },
      },
    },
  },
};
