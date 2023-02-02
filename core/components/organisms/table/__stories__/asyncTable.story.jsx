import * as React from 'react';
import { Card, Table, Icon, GridCell } from '@/index';
import { AsyncTable, SyncTable } from './_common_/types';

export const asyncTable = () => {
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

  const loaderSchema = [
    {
      name: 'name',
      displayName: 'Name',

      cellType: 'AVATAR_WITH_TEXT',
    },
    {
      name: 'email',
      displayName: 'Email',
      cellType: 'WITH_META_LIST',
    },
    {
      name: 'gender',
      displayName: 'Gender',

      cellType: 'STATUS_HINT',
    },
    {
      name: 'icon',
      displayName: 'Icon',
      cellType: 'ICON',
    },
    {
      name: 'customCell',
      displayName: 'Custom Cell',
      cellType: 'WITH_META_LIST',
    },
  ];

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

  return (
    <div>
      <Card className="vh-50">
        <Table
          loaderSchema={loaderSchema}
          fetchData={fetchData}
          withPagination={true}
          pageSize={5}
          withHeader={true}
          headerOptions={{
            withSearch: true,
          }}
        />
      </Card>
    </div>
  );
};

export default {
  title: 'Components/Table/Async Table',
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
