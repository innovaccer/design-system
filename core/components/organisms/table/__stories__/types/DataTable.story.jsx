import * as React from 'react';
import { Card, Table } from '@/index';
import { AsyncTable, SyncTable } from '../_common_/types';
import loaderSchema from '@/components/organisms/grid/__stories__/_common_/loaderSchema';

export const dataTable = () => {
  const data = [
    {
      claim_id: 'Q10000101',
      claim_type: 'Professional',
      plan_name: 'MSSP Track 3',
      insurance_name: 'Medicare',
      first_dos: '03/27/2020',
      last_dos: '03/30/2020',
      firstName: 'Brooke',
      lastName: 'Heeran',
    },
    {
      claim_id: 'Q10000102',
      claim_type: 'Professional',
      plan_name: 'MSSP Track 1',
      insurance_name: 'Medicare',
      first_dos: '03/24/2020',
      last_dos: '04/30/2020',
      firstName: 'Frazer',
      lastName: 'Cathro',
    },
    {
      claim_id: 'Q10000103',
      claim_type: 'Professional',
      plan_name: 'MSSP Track 3',
      insurance_name: 'Medicare',
      first_dos: '05/16/2020',
      last_dos: '05/30/2020',
      firstName: 'Lemmie',
      lastName: 'Ciric',
    },
    {
      claim_id: 'Q10000104',
      claim_type: 'Institutional',
      plan_name: 'MSSP Track 3',
      insurance_name: 'Medicare',
      first_dos: '12/27/2020',
      last_dos: '12/30/2020',
      firstName: 'Randy',
      lastName: 'Boatwright',
    },
    {
      claim_id: 'Q10000105',
      claim_type: 'Professional',
      plan_name: 'MSSP Track 3',
      insurance_name: 'Medicare',
      first_dos: '05/04/2020',
      last_dos: '05/28/2020',
      firstName: 'Rolando',
      lastName: 'Cyples',
    },
    {
      claim_id: 'Q10000106',
      claim_type: 'Institutional',
      plan_name: 'MSSP Track 3',
      insurance_name: 'Medicare',
      first_dos: '01/27/2020',
      last_dos: '03/30/2020',
      firstName: 'Lem',
      lastName: 'Males',
    },
    {
      claim_id: 'Q10000107',
      claim_type: 'Professional',
      plan_name: 'MSSP Track 3',
      insurance_name: 'Medicare',
      first_dos: '03/30/2020',
      last_dos: '04/30/2020',
      firstName: 'Sayres',
      lastName: 'Adelberg',
    },
    {
      claim_id: 'Q10000108',
      claim_type: 'Professional',
      plan_name: 'MSSP Track 3',
      insurance_name: 'Medicare',
      first_dos: '02/27/2020',
      last_dos: '03/30/2020',
      firstName: 'Murray',
      lastName: 'Bravington',
    },
    {
      claim_id: 'Q10000109',
      claim_type: 'Institutional',
      plan_name: 'MSSP Track 5',
      insurance_name: 'Medicare',
      first_dos: '03/17/2020',
      last_dos: '03/30/2020',
      firstName: 'Carin',
      lastName: 'Robiou',
    },
    {
      claim_id: 'Q100001010',
      claim_type: 'Institutional',
      plan_name: 'MSSP Track 6',
      insurance_name: 'Medicare',
      first_dos: '09/27/2020',
      last_dos: '12/27/2020',
      firstName: 'Brina',
      lastName: 'Pirie',
    },
  ];

  const schema = [
    {
      name: 'claim_id',
      displayName: 'Claim Id',
      width: '12%',
      separator: true,
    },
    {
      name: 'claim_type',
      displayName: 'Claim Type',
      width: '15%',
      separator: true,
      cellType: 'DEFAULT',
    },
    {
      name: 'insurance_name',
      displayName: 'Insurance Name',
      width: '15%',
      separator: true,
    },
    {
      name: 'plan_name',
      displayName: 'Plan Name',
      width: '15%',
      separator: true,
    },
    {
      name: 'first_dos',
      displayName: 'First Date of Service',
      width: '18%',
      separator: true,
    },
    {
      name: 'last_dos',
      displayName: 'Last Date of Service',
      width: '18%',
      separator: true,
    },
    {
      name: 'provider_name',
      displayName: 'Provider Name',
      separator: true,
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
      translate: (a) => ({
        title: `${a.firstName} ${a.lastName}`,
        firstName: a.firstName,
        lastName: a.lastName,
      }),
    },
  ];

  return (
    <Card className="overflow-hidden">
      <Table
        loaderSchema={loaderSchema}
        showMenu={false}
        separator={true}
        data={data}
        schema={schema}
        withHeader={true}
        headerOptions={{
          withSearch: true,
        }}
        onSearch={(currData, searchTerm) => {
          return currData.filter(
            (d) =>
              d.firstName.toLowerCase().match(searchTerm.toLowerCase()) ||
              d.lastName.toLowerCase().match(searchTerm.toLowerCase()) ||
              d.claim_id.toLowerCase().match(searchTerm.toLowerCase())
          );
        }}
        withPagination={true}
        pageSize={5}
      />
    </Card>
  );
};

const customCode = `() => {
  const data = [
    {
      claim_id: 'Q10000101',
      claim_type: 'Professional',
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "03/27/2020",
      last_dos: "03/30/2020",
      firstName: 'Brooke',
      lastName: 'Heeran',
    },
    {
      claim_id: 'Q10000102',
      claim_type: "Professional",
      plan_name: "MSSP Track 1",
      insurance_name: "Medicare",
      first_dos: "03/24/2020",
      last_dos: "04/30/2020",
      firstName: 'Frazer',
      lastName: 'Cathro',
    },
    {
      claim_id: 'Q10000103',
      claim_type: "Professional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "05/16/2020",
      last_dos: "05/30/2020",
      firstName: 'Lemmie',
      lastName: 'Ciric',
    },
    {
      claim_id: 'Q10000104',
      claim_type: "Institutional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "12/27/2020",
      last_dos: "12/30/2020",
      firstName: 'Randy',
      lastName: 'Boatwright',
    },
    {
      claim_id: 'Q10000105',
      claim_type: "Professional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "05/04/2020",
      last_dos: "05/28/2020",
      firstName: 'Rolando',
      lastName: 'Cyples',
    },
    {
      claim_id: 'Q10000106',
      claim_type: "Institutional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "01/27/2020",
      last_dos: "03/30/2020",
      firstName: 'Lem',
      lastName: 'Males',
    },
    {
      claim_id: 'Q10000107',
      claim_type: "Professional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "03/30/2020",
      last_dos: "04/30/2020",
      firstName: 'Sayres',
      lastName: 'Adelberg',
    },
    {
      claim_id: 'Q10000108',
      claim_type: "Professional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "02/27/2020",
      last_dos: "03/30/2020",
      firstName: 'Murray',
      lastName: 'Bravington',
    },
    {
      claim_id: 'Q10000109',
      claim_type: "Institutional",
      plan_name: "MSSP Track 5",
      insurance_name: "Medicare",
      first_dos: "03/17/2020",
      last_dos: "03/30/2020",
      firstName: 'Carin',
      lastName: 'Robiou',
    },
    {
      claim_id: 'Q100001010',
      claim_type: "Institutional",
      plan_name: "MSSP Track 6",
      insurance_name: "Medicare",
      first_dos: "09/27/2020",
      last_dos: "12/27/2020",
      firstName: 'Brina',
      lastName: 'Pirie',
    }
  ];

  const schema = [
    {
      name: 'claim_id',
      displayName: 'Claim Id',
      width: '12%',
      separator: true,
    },
    {
      name: 'claim_type',
      displayName: 'Claim Type',
      width: '15%',
      separator: true,
      cellType: "DEFAULT"
    },
    {
      name: 'insurance_name',
      displayName: 'Insurance Name',
      width: '15%',
      separator: true,
    },
    {
      name: 'plan_name',
      displayName: 'Plan Name',
      width: '15%',
      separator: true,
    },
    {
      name: 'first_dos',
      displayName: 'First Date of Service',
      width: '18%',
      separator: true,
    },
    {
      name: 'last_dos',
      displayName: 'Last Date of Service',
      width: '18%',
      separator: true,
    },
    {
      name: 'provider_name',
      displayName: 'Provider Name',
      separator: true,
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
      translate: (a) => ({
        title: \`\${a.firstName} \${a.lastName}\`,
        firstName: a.firstName,
        lastName: a.lastName
      }),
    },
  ];

  const loaderSchema = ${JSON.stringify(loaderSchema, null, 4)};

  return (
      <Card className="overflow-hidden">
        <Table
          loaderSchema={loaderSchema}
          showMenu={false}
          separator={true}
          data={data}
          schema={schema}
          withHeader={true}
          headerOptions={{
            withSearch: true
          }}
          onSearch={(currData, searchTerm) => {
            return currData.filter(d =>
              d.firstName.toLowerCase().match(searchTerm.toLowerCase())
              || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
              || d.claim_id.toLowerCase().match(searchTerm.toLowerCase())
            );
          }}
          withPagination={true}
          pageSize={5}
          onPageChange={newPage => console.log(\`on-page-change:- \${newPage}\`)}
        />
      </Card>
  );
}`;

export default {
  title: 'Components/Table/Types/Data Table',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Data table',
        props: {
          components: { AsyncTable, SyncTable },
        },
      },
    },
  },
};
