import * as React from 'react';
import { VerticalNav, Collapsible, Heading, Card, Table } from '@/index';
import tableData from '@/components/organisms/grid/__stories__/_common_/data';
import schema from './schema';

export const usingHover = () => {
  const data = [
    {
      name: 'clinical_data',
      label: 'Clinical Data',
      icon: 'assignment_ind',
    },
    {
      name: 'care_management',
      label: 'Care Management',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'people',
        },
        {
          name: 'care_management.care_protocol',
          label: 'Care Protocol',
          icon: 'fact_check',
        },
        {
          name: 'care_management.assessments',
          label: 'Assessments',
          icon: 'assessment',
        },
        {
          name: 'care_management.tasks',
          label: 'Tasks',
          icon: 'alarm',
        },
        {
          name: 'care_management.goals',
          label: 'Goals',
          icon: 'golf_course',
        },
        {
          name: 'care_management.care_plans',
          label: 'Care Plans',
          icon: 'accessibility_new',
        },
        {
          name: 'care_management.medical_adherence',
          label: 'Medical Adherence',
          icon: 'local_pharmacy',
        },
        {
          name: 'care_management.community_resources',
          label: 'Community Resources',
          icon: 'businesses',
        },
      ],
    },
    {
      name: 'episodes',
      label: 'Episodes',
      icon: 'airline_seat_flat_angled',
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite',
    },
    {
      name: 'preventive_health',
      label: 'Preventive Health',
      icon: 'beenhere',
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'receipt',
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'account_circle',
    },
    {
      name: 'manual_entry',
      label: 'Manual Entry',
      icon: 'edit',
    },
    {
      name: 'patient_notes',
      label: 'Patient Notes',
      icon: 'note_add',
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment',
    },
  ];

  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState({
    name: 'care_management.timeline',
  });

  return (
    <div className="d-flex bg-secondary-lightest vh-75 w-100 overflow-hidden">
      <Collapsible expanded={expanded} onToggle={setExpanded}>
        <VerticalNav menus={data} active={active} expanded={expanded} onClick={setActive} />
      </Collapsible>
      <div className="ml-8 d-flex flex-column w-75">
        <Heading className="my-5">Assessments</Heading>
        <Card className="h-100 overflow-hidden">
          <Table
            data={tableData}
            schema={schema}
            withHeader={true}
            withCheckbox={true}
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
          />
        </Card>
      </div>
    </div>
  );
};

const customCode = `() => {
  const tableData = ${JSON.stringify(tableData.slice(0, 10), null, 4)};

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '40%',
      resizable: true,
      separator: true,
      tooltip: true,
      translate: a => ({
        title: \`\${a.firstName} \${a.lastName}\`,
        firstName: a.firstName,
        lastName: a.lastName
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
      width: 350,
      resizable: true,
      sorting: false,
      cellType: 'WITH_META_LIST'
    },
    {
      name: 'gender',
      displayName: 'Gender',
      width: 200,
      resizable: true,
      comparator: (a, b) => a.gender.localeCompare(b.gender),
      cellType: 'STATUS_HINT',
      translate: a => ({
        title: a.gender,
        statusAppearance: (a.gender === 'Female') ? 'alert' : 'success'
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
  ];

  const data = [
    {
      name: 'clinical_data',
      label: 'Clinical Data',
      icon: 'assignment_ind'
    },
    {
      name: 'care_management',
      label: 'Care Management Policies',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'people'
        },
        {
          name: 'care_management.care_protocol',
          label: 'Care Protocol',
          icon: 'fact_check'
        },
        {
          name: 'care_management.assessments',
          label: 'Assessments',
          icon: 'assessment'
        },
        {
          name: 'care_management.tasks',
          label: 'Tasks',
          icon: 'alarm'
        },
        {
          name: 'care_management.goals',
          label: 'Goals',
          icon: 'golf_course'
        },
        {
          name: 'care_management.care_plans',
          label: 'Care Plans',
          icon: 'accessibility_new'
        },
        {
          name: 'care_management.medical_adherence',
          label: 'Medical Adherence',
          icon: 'local_pharmacy'
        },
        {
          name: 'care_management.community_resources',
          label: 'Community Resources',
          icon: 'businesses'
        }
      ]
    },
    {
      name: 'episodes',
      label: 'Episodes',
      icon: 'airline_seat_flat_angled'
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite'
    },
    {
      name: 'preventive_health',
      label: 'Preventive Health',
      icon: 'beenhere'
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'receipt'
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'account_circle'
    },
    {
      name: 'manual_entry',
      label: 'Manual Entry',
      icon: 'edit'
    },
    {
      name: 'patient_notes',
      label: 'Patient Notes',
      icon: 'note_add'
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment'
    },
  ];

  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });

  return (
    <div className="d-flex bg-secondary-lightest vh-75 w-100 overflow-hidden">
      <Collapsible expanded={expanded} onToggle={setExpanded}>
        <VerticalNav
          menus={data}
          active={active}
          expanded={expanded}
          onClick={setActive}
        />
      </Collapsible>
      <div className="ml-8 d-flex flex-column w-75">
        <Heading className="my-5">Assessments</Heading>
        <Card className="h-100 overflow-hidden">
          <Table
            data={tableData}
            schema={schema}
            withHeader={true}
            withCheckbox={true}
            headerOptions={{
              withSearch: true
            }}
            onSearch={(currData, searchTerm) => {
              return currData.filter(d =>
                d.firstName.toLowerCase().match(searchTerm.toLowerCase())
                || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
              );
            }}
            withPagination={true}
            pageSize={5}
          />
        </Card>
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/VerticalNav/VerticalNav/Toggle Vertical Nav/Using Hover',
  component: VerticalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
