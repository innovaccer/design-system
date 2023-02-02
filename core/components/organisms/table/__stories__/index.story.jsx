import * as React from 'react';
import { Card, Table, Heading, List, Icon, GridCell } from '@/index';
import { AsyncTable, SyncTable } from './_common_/types';

export const all = () => {
  const customSchema = (schema) => {
    const columnMap = {
      name: {
        translate: (a) => ({
          title: `${a.firstName} ${a.lastName}`,
          firstName: a.firstName,
          lastName: a.lastName,
        }),
      },
      gender: {
        comparator: (a, b) => a.gender.localeCompare(b.gender),
        translate: (a) => ({
          title: a.gender,
          statusAppearance: a.gender === 'Female' ? 'alert' : 'success',
        }),
      },
      icon: {
        translate: () => ({
          icon: 'events',
        }),
      },
      customCell: {
        cellRenderer: (props) => {
          return (
            <>
              <Icon className="mr-5" name="events" />
              <GridCell
                {...props}
                schema={{
                  ...props.schema,
                  name: 'email',
                }}
              />
            </>
          );
        },
      },
    };

    return schema.map((columnDefinition) => {
      if (columnDefinition.name in columnMap) {
        return {
          ...columnDefinition,
          ...columnMap[columnDefinition.name],
        };
      }
      return columnDefinition;
    });
  };
  const errorTemplate = () => {
    return <Heading appearance={'disabled'}>We failed as a team</Heading>;
  };

  const nestedRowRenderer = (props) => {
    const { schema, data, loading } = props;

    return <List loading={loading} schema={schema} data={[data]} nestedRows={true} />;
  };

  const fetchData = ({ searchTerm = '', page, pageSize }) => {
    // eslint-disable-next-line no-undef
    const uri = `/patients?${new URLSearchParams({ searchTerm, page, pageSize })}`;
    // eslint-disable-next-line no-undef
    return fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        return {
          ...data,
          schema: customSchema(data.schema),
        };
      });
  };

  const options = {
    type: 'resource',
    size: 'comfortable',
    draggable: true,
    nestedRows: false,
    withHeader: true,
    headerOptions: {
      withSearch: true,
    },
    withCheckbox: false,
    showMenu: true,
    loading: false,
    error: false,
    paginationType: 'jump',
    page: 1,
    pageSize: 5,
    headCellTooltip: true,
    separator: false,
    filterPosition: 'HEADER',
    nestedRowRenderer,
    fetchData,
    errorTemplate,
  };

  return (
    <div className="vh-50">
      <Card className="h-100 overflow-hidden">
        <Table {...options} />
      </Card>
    </div>
  );
};

export default {
  title: 'Components/Table/All',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        props: {
          components: { AsyncTable, SyncTable },
          exclude: ['showHead'],
        },
      },
    },
  },
};
