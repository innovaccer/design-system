import * as React from 'react';
import { VerticalNav, Card, Button, Tabs, PageHeader, Table, Navigation } from '@/index';
import { action } from '@/utils/action';

const Item1 = ({ active, activeTabIndex, handleAnimationEnd }) => {
  const tabs = [
    {
      count: 4,
      label: 'Due',
    },
    {
      count: 4,
      label: 'Proceed',
    },
  ];

  const tab = <Tabs tabs={tabs} activeIndex={0} />;

  const data = [
    {
      third_party_payer: 'Aetna',
      payer_state: 'Iowa',
      requested_by: 'Joy Iawson',
      status: 'New',
      mail: 'www.aetna.com',
      id: 'P087636 Requested on 02/12/21',
    },
    {
      third_party_payer: 'Aetna',
      payer_state: 'Iowa',
      requested_by: 'Joy Iawson',
      status: 'New',
      mail: 'www.aetna.com',
      id: 'P087636 Requested on 02/12/21',
    },
    {
      third_party_payer: 'Aetna',
      payer_state: 'Iowa',
      requested_by: 'Joy Iawson',
      status: 'New',
      mail: 'www.aetna.com',
      id: 'P087636 Requested on 02/12/21',
    },
    {
      third_party_payer: 'Aetna',
      payer_state: 'Iowa',
      requested_by: 'Joy Iawson',
      status: 'New',
      mail: 'www.aetna.com',
      id: 'P087636 Requested on 02/12/21',
    },
  ];

  const schema = [
    {
      name: 'third_party_payer',
      displayName: 'Third party payer',
      width: '25%',
      cellType: 'WITH_META_LIST',
      separator: true,
      translate: (a) => ({
        title: a.third_party_payer,
        metaList: [`${a.mail}`],
      }),
    },
    {
      name: 'payer_state',
      displayName: 'Payer state',
      width: '15%',
      separator: true,
      cellType: 'DEFAULT',
    },
    {
      name: 'requested_by',
      displayName: 'Requested by',
      width: '35%',
      cellType: 'WITH_META_LIST',
      separator: true,
      translate: (a) => ({
        title: a.requested_by,
        metaList: [`${a.id}`],
      }),
    },
    {
      name: 'status',
      displayName: 'Status',
      width: '15%',
      separator: true,
      translate: (a) => ({
        title: a.status,
        statusAppearance: a.status === 'Inactive' ? 'default' : 'info',
      }),
      cellType: 'STATUS_HINT',
    },
  ];

  const loaderSchema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '40%',
      resizable: true,
      tooltip: true,
      separator: true,
      filters: [
        {
          label: 'A-G',
          value: 'a-g',
        },
        {
          label: 'H-R',
          value: 'h-r',
        },
        {
          label: 'S-Z',
          value: 's-z',
        },
      ],
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
      cellType: 'STATUS_HINT',
      filters: [
        {
          label: 'Male',
          value: 'male',
        },
        {
          label: 'Female',
          value: 'female',
        },
      ],
    },
    {
      name: 'icon',
      displayName: 'Icon',
      width: 100,
      resizable: true,
      align: 'center',
      cellType: 'ICON',
    },
    {
      name: 'customCell',
      displayName: 'Custom Cell',
      width: 200,
      resizable: true,
      cellType: 'WITH_META_LIST',
    },
  ];
  return (
    <div
      className={`w-100 position-relative ${active.name != activeTabIndex.name ? 'slideOut-up' : 'slideIn-up'}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="w-100 py-6 bg-secondary-lightest">
        <PageHeader
          title="Payer requests"
          separator={true}
          tabs={tab}
          actions={
            <div className="d-flex justify-content-end align-items-center">
              <Button appearance="primary">Add Payer</Button>
            </div>
          }
        />
      </div>
      <Card className="mb-6">
        <Table
          loaderSchema={loaderSchema}
          showMenu={false}
          separator={true}
          data={data}
          schema={schema}
          withCheckbox={true}
          withHeader={true}
          headerOptions={{
            withSearch: true,
            dynamicColumn: false,
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
          onPageChange={(newPage) => action(`on-page-change:- ${newPage}`)()}
        />
      </Card>
    </div>
  );
};

const Item2 = ({ active, activeTabIndex, handleAnimationEnd }) => {
  const tabs = [
    {
      count: 4,
      label: 'New',
    },
    {
      count: 4,
      label: 'Declined',
    },
    {
      count: 15,
      label: 'Under review',
    },
  ];

  const tab = <Tabs tabs={tabs} activeIndex={0} />;

  const data2 = [
    {
      third_party_payer: 'Aetna',
      organization_type: 'Medicaid',
      submitted_on: '3/12/21',
    },
    {
      third_party_payer: 'Aetna',
      organization_type: 'Medicaid',
      submitted_on: '3/12/21',
    },
    {
      third_party_payer: 'Aetna',
      organization_type: 'Medicaid',
      submitted_on: '3/12/21',
    },
    {
      third_party_payer: 'Aetna',
      organization_type: 'Medicaid',
      submitted_on: '3/12/21',
    },
  ];

  const schema2 = [
    {
      name: 'third_party_payer',
      displayName: 'Third party payer',
      width: '50%',
      separator: true,
    },
    {
      name: 'organization_type',
      displayName: 'Organization type',
      width: '15%',
      separator: true,
      cellType: 'DEFAULT',
    },
    {
      name: 'submitted_on',
      displayName: 'Submitted on',
      width: '25%',
      separator: true,
      cellType: 'DEFAULT',
    },
  ];

  const loaderSchema2 = [
    {
      name: 'name',
      displayName: 'Name',
      width: '40%',
      resizable: true,
      tooltip: true,
      separator: true,
      filters: [
        {
          label: 'A-G',
          value: 'a-g',
        },
        {
          label: 'H-R',
          value: 'h-r',
        },
        {
          label: 'S-Z',
          value: 's-z',
        },
      ],
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
      cellType: 'STATUS_HINT',
      filters: [
        {
          label: 'Male',
          value: 'male',
        },
        {
          label: 'Female',
          value: 'female',
        },
      ],
    },
    {
      name: 'icon',
      displayName: 'Icon',
      width: 100,
      resizable: true,
      align: 'center',
      cellType: 'ICON',
    },
    {
      name: 'customCell',
      displayName: 'Custom Cell',
      width: 200,
      resizable: true,
      cellType: 'WITH_META_LIST',
    },
  ];

  return (
    <div
      className={`w-100 position-relative ${active.name != activeTabIndex.name ? 'slideOut-up' : 'slideIn-up'}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="w-100 py-6 bg-secondary-lightest">
        <PageHeader
          title="Payer verification"
          separator={true}
          tabs={tab}
          actions={
            <div className="d-flex justify-content-end align-items-center">
              <Button appearance="primary">Add Payer</Button>
            </div>
          }
        />
      </div>
      <Card className="my-6">
        <Table
          loaderSchema={loaderSchema2}
          showMenu={false}
          separator={true}
          data={data2}
          schema={schema2}
          withHeader={true}
          headerOptions={{
            withSearch: true,
            dynamicColumn: false,
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
          onPageChange={(newPage) => action(`on-page-change:- ${newPage}`)()}
        />
      </Card>
    </div>
  );
};

const Item3 = ({ active, activeTabIndex, handleAnimationEnd }) => {
  const title = 'Payers';

  const navigationData = [
    {
      name: 'my_payers',
      label: 'My payers',
      icon: 'event',
    },
    {
      name: `innovaccer's_payers`,
      label: `Innovaccer's payers`,
    },
  ];

  const options = {
    title,
    navigation: <Navigation menus={navigationData} onClick={(item) => action(item)} active={{ name: 'my_payers' }} />,
    actions: (
      <div className="d-flex justify-content-end align-items-center">
        <Button appearance="primary">Add Payer</Button>
      </div>
    ),
  };

  const data3 = [
    {
      third_party_payer: 'Aetna',
      mail: 'www.aetna.com',
      request_accepted_on: '3/12/21',
    },
    {
      third_party_payer: 'Aetna',
      mail: 'www.aetna.com',
      request_accepted_on: '3/12/21',
    },
    {
      third_party_payer: 'Aetna',
      mail: 'www.aetna.com',
      request_accepted_on: '3/12/21',
    },
    {
      third_party_payer: 'Aetna',
      mail: 'www.aetna.com',
      request_accepted_on: '3/12/21',
    },
  ];

  const schema3 = [
    {
      name: 'third_party_payer',
      displayName: 'Third party payer',
      width: '50%',
      cellType: 'WITH_META_LIST',
      resizable: true,
      translate: (a) => ({
        title: a.third_party_payer,
        metaList: [`${a.mail}`],
      }),
    },
    {
      name: 'request_accepted_on',
      displayName: 'Request accepted on',
      cellType: 'DEFAULT',
    },
  ];

  const loaderSchema3 = [
    {
      name: 'name',
      displayName: 'Name',
      width: '40%',
      resizable: true,
      tooltip: true,
      separator: true,
      filters: [
        {
          label: 'A-G',
          value: 'a-g',
        },
        {
          label: 'H-R',
          value: 'h-r',
        },
        {
          label: 'S-Z',
          value: 's-z',
        },
      ],
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
      cellType: 'STATUS_HINT',
      filters: [
        {
          label: 'Male',
          value: 'male',
        },
        {
          label: 'Female',
          value: 'female',
        },
      ],
    },
    {
      name: 'icon',
      displayName: 'Icon',
      width: 100,
      resizable: true,
      align: 'center',
      cellType: 'ICON',
    },
    {
      name: 'customCell',
      displayName: 'Custom Cell',
      width: 200,
      resizable: true,
      cellType: 'WITH_META_LIST',
    },
  ];
  return (
    <div
      className={`w-100 position-relative ${active.name != activeTabIndex.name ? 'slideOut-up' : 'slideIn-up'}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="w-100 py-6 bg-secondary-lightest">
        <PageHeader {...options} />
      </div>
      <Card className="my-6">
        <Table
          loaderSchema={loaderSchema3}
          showMenu={false}
          separator={false}
          data={data3}
          schema={schema3}
          withHeader={true}
          headerOptions={{
            withSearch: true,
            dynamicColumn: false,
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
          onPageChange={(newPage) => action(`on-page-change:- ${newPage}`)()}
        />
      </Card>
    </div>
  );
};

export const withAnimation = () => {
  const [activeTabIndex, setActiveTabIndex] = React.useState({ name: 'payer_requests' });
  const [active, setActive] = React.useState({ name: 'payer_requests' });

  const menuList = [
    {
      name: 'payer_requests',
      label: 'Payer requests',
      icon: 'assignment_ind',
    },
    {
      name: 'payer_verification',
      label: 'Payer verification',
      icon: 'forum',
    },
    {
      name: 'payers',
      label: 'Payers',
      icon: 'airline_seat_flat_angled',
    },
  ];

  const handleAnimationEnd = () => {
    setActive(activeTabIndex);
  };

  const onClickHandler = (item) => {
    setActiveTabIndex(item);
  };

  return (
    <div className="d-flex bg-secondary-lightest">
      <VerticalNav menus={menuList} active={activeTabIndex} onClick={onClickHandler} />
      <div className="mx-6 d-flex w-100">
        {active.name === 'payer_requests' ? (
          <Item1 active={active} activeTabIndex={activeTabIndex} handleAnimationEnd={handleAnimationEnd} />
        ) : active.name === 'payer_verification' ? (
          <Item2 active={active} activeTabIndex={activeTabIndex} handleAnimationEnd={handleAnimationEnd} />
        ) : (
          <Item3 active={active} activeTabIndex={activeTabIndex} handleAnimationEnd={handleAnimationEnd} />
        )}
      </div>
    </div>
  );
};

const customCode = `() => {

    const Item1 = ({ active, activeTabIndex, handleAnimationEnd }) => {
    const tabs = [
        {
        count: 4,
        label: 'Due',
        },
        {
        count: 4,
        label: 'Proceed',
        },
    ];

    const tab = <Tabs tabs={tabs} activeIndex={0} />;

    const data = [
        {
        third_party_payer: 'Aetna',
        payer_state: 'Iowa',
        requested_by: 'Joy Iawson',
        status: 'New',
        mail: 'www.aetna.com',
        id: 'P087636 Requested on 02/12/21',
        },
        {
        third_party_payer: 'Aetna',
        payer_state: 'Iowa',
        requested_by: 'Joy Iawson',
        status: 'New',
        mail: 'www.aetna.com',
        id: 'P087636 Requested on 02/12/21',
        },
        {
        third_party_payer: 'Aetna',
        payer_state: 'Iowa',
        requested_by: 'Joy Iawson',
        status: 'New',
        mail: 'www.aetna.com',
        id: 'P087636 Requested on 02/12/21',
        },
        {
        third_party_payer: 'Aetna',
        payer_state: 'Iowa',
        requested_by: 'Joy Iawson',
        status: 'New',
        mail: 'www.aetna.com',
        id: 'P087636 Requested on 02/12/21',
        },
    ];

    const schema = [
        {
        name: 'third_party_payer',
        displayName: 'Third party payer',
        width: '25%',
        cellType: 'WITH_META_LIST',
        separator: true,
        translate: (a) => ({
            title: a.third_party_payer,
            metaList: [\`\${a.mail}\`],
        }),
        },
        {
        name: 'payer_state',
        displayName: 'Payer state',
        width: '15%',
        separator: true,
        cellType: 'DEFAULT',
        },
        {
        name: 'requested_by',
        displayName: 'Requested by',
        width: '35%',
        cellType: 'WITH_META_LIST',
        separator: true,
        translate: (a) => ({
            title: a.requested_by,
            metaList: [\`\${a.id}\`],
        }),
        },
        {
        name: 'status',
        displayName: 'Status',
        width: '15%',
        separator: true,
        translate: (a) => ({
            title: a.status,
            statusAppearance: a.status === 'Inactive' ? 'default' : 'info',
        }),
        cellType: 'STATUS_HINT',
        },
    ];

    const loaderSchema = [
        {
        name: 'name',
        displayName: 'Name',
        width: '40%',
        resizable: true,
        tooltip: true,
        separator: true,
        filters: [
            {
            label: 'A-G',
            value: 'a-g',
            },
            {
            label: 'H-R',
            value: 'h-r',
            },
            {
            label: 'S-Z',
            value: 's-z',
            },
        ],
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
        cellType: 'STATUS_HINT',
        filters: [
            {
            label: 'Male',
            value: 'male',
            },
            {
            label: 'Female',
            value: 'female',
            },
        ],
        },
        {
        name: 'icon',
        displayName: 'Icon',
        width: 100,
        resizable: true,
        align: 'center',
        cellType: 'ICON',
        },
        {
        name: 'customCell',
        displayName: 'Custom Cell',
        width: 200,
        resizable: true,
        cellType: 'WITH_META_LIST',
        },
    ];
    return (
        <div
        className={\`w-100 position-relative \${activeTabIndex.name != active.name ? 'slideOut-up' : 'slideIn-up'}\`}
        onAnimationEnd={handleAnimationEnd}
        >
        <div className="w-100 py-6 bg-secondary-lightest">
            <PageHeader
            title="Payer requests"
            separator={true}
            tabs={tab}
            actions={
                <div className="d-flex justify-content-end align-items-center">
                <Button appearance="primary">Add Payer</Button>
                </div>
            }
            />
        </div>
        <Card className="mb-6">
            <Table
            loaderSchema={loaderSchema}
            showMenu={false}
            separator={true}
            data={data}
            schema={schema}
            withCheckbox={true}
            withHeader={true}
            headerOptions={{
                withSearch: true,
                dynamicColumn: false,
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
            onPageChange={(newPage) => console.log(\`on-page-change:- \${newPage}\`)}
            />
        </Card>
        </div>
    );
    };

    const Item2 = ({ active, activeTabIndex, handleAnimationEnd }) => {
    const tabs = [
        {
        count: 4,
        label: 'New',
        },
        {
        count: 4,
        label: 'Declined',
        },
        {
        count: 15,
        label: 'Under review',
        },
    ];

    const tab = <Tabs tabs={tabs} activeIndex={0} />;

    const data2 = [
        {
        third_party_payer: 'Aetna',
        organization_type: 'Medicaid',
        submitted_on: '3/12/21',
        },
        {
        third_party_payer: 'Aetna',
        organization_type: 'Medicaid',
        submitted_on: '3/12/21',
        },
        {
        third_party_payer: 'Aetna',
        organization_type: 'Medicaid',
        submitted_on: '3/12/21',
        },
        {
        third_party_payer: 'Aetna',
        organization_type: 'Medicaid',
        submitted_on: '3/12/21',
        },
    ];

    const schema2 = [
        {
        name: 'third_party_payer',
        displayName: 'Third party payer',
        width: '50%',
        separator: true,
        },
        {
        name: 'organization_type',
        displayName: 'Organization type',
        width: '15%',
        separator: true,
        cellType: 'DEFAULT',
        },
        {
        name: 'submitted_on',
        displayName: 'Submitted on',
        width: '25%',
        separator: true,
        cellType: 'DEFAULT',
        },
    ];

    const loaderSchema2 = [
        {
        name: 'name',
        displayName: 'Name',
        width: '40%',
        resizable: true,
        tooltip: true,
        separator: true,
        filters: [
            {
            label: 'A-G',
            value: 'a-g',
            },
            {
            label: 'H-R',
            value: 'h-r',
            },
            {
            label: 'S-Z',
            value: 's-z',
            },
        ],
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
        cellType: 'STATUS_HINT',
        filters: [
            {
            label: 'Male',
            value: 'male',
            },
            {
            label: 'Female',
            value: 'female',
            },
        ],
        },
        {
        name: 'icon',
        displayName: 'Icon',
        width: 100,
        resizable: true,
        align: 'center',
        cellType: 'ICON',
        },
        {
        name: 'customCell',
        displayName: 'Custom Cell',
        width: 200,
        resizable: true,
        cellType: 'WITH_META_LIST',
        },
    ];

    return (
        <div
        className={\`w-100 position-relative \${activeTabIndex.name != active.name ? 'slideOut-up' : 'slideIn-up'}\`}
        onAnimationEnd={handleAnimationEnd}
        >
        <div className="w-100 py-6 bg-secondary-lightest">
            <PageHeader
            title="Payer verification"
            separator={true}
            tabs={tab}
            actions={
                <div className="d-flex justify-content-end align-items-center">
                <Button appearance="primary">Add Payer</Button>
                </div>
            }
            />
        </div>
        <Card className="my-6">
            <Table
            loaderSchema={loaderSchema2}
            showMenu={false}
            separator={true}
            data={data2}
            schema={schema2}
            withHeader={true}
            headerOptions={{
                withSearch: true,
                dynamicColumn: false,
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
            onPageChange={(newPage) => console.log(\`on-page-change:- \${newPage}\`)}
            />
        </Card>
        </div>
    );
    };

    const Item3 = ({ active, activeTabIndex, handleAnimationEnd }) => {
    const title = 'Payers';

    const navigationData = [
        {
        name: 'my_payers',
        label: 'My payers',
        icon: 'event',
        },
        {
        name: \`innovaccer's_payers\`,
        label: \`Innovaccer's payers\`,
        },
    ];

    const options = {
        title,
        navigation: (
        <Navigation menus={navigationData} onClick={(item) => console.log(item)} active={{ name: 'my_payers' }} />
        ),
        actions: (
        <div className="d-flex justify-content-end align-items-center">
            <Button appearance="primary">Add Payer</Button>
        </div>
        ),
    };

    const data3 = [
        {
        third_party_payer: 'Aetna',
        mail: 'www.aetna.com',
        request_accepted_on: '3/12/21',
        },
        {
        third_party_payer: 'Aetna',
        mail: 'www.aetna.com',
        request_accepted_on: '3/12/21',
        },
        {
        third_party_payer: 'Aetna',
        mail: 'www.aetna.com',
        request_accepted_on: '3/12/21',
        },
        {
        third_party_payer: 'Aetna',
        mail: 'www.aetna.com',
        request_accepted_on: '3/12/21',
        },
    ];

    const schema3 = [
        {
        name: 'third_party_payer',
        displayName: 'Third party payer',
        width: '50%',
        cellType: 'WITH_META_LIST',
        resizable: true,
        translate: (a) => ({
            title: a.third_party_payer,
            metaList: [\`\${a.mail}\`],
        }),
        },
        {
        name: 'request_accepted_on',
        displayName: 'Request accepted on',
        cellType: 'DEFAULT',
        },
    ];

    const loaderSchema3 = [
        {
        name: 'name',
        displayName: 'Name',
        width: '40%',
        resizable: true,
        tooltip: true,
        separator: true,
        filters: [
            {
            label: 'A-G',
            value: 'a-g',
            },
            {
            label: 'H-R',
            value: 'h-r',
            },
            {
            label: 'S-Z',
            value: 's-z',
            },
        ],
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
        cellType: 'STATUS_HINT',
        filters: [
            {
            label: 'Male',
            value: 'male',
            },
            {
            label: 'Female',
            value: 'female',
            },
        ],
        },
        {
        name: 'icon',
        displayName: 'Icon',
        width: 100,
        resizable: true,
        align: 'center',
        cellType: 'ICON',
        },
        {
        name: 'customCell',
        displayName: 'Custom Cell',
        width: 200,
        resizable: true,
        cellType: 'WITH_META_LIST',
        },
    ];
    return (
        <div
        className={\`w-100 position-relative \${activeTabIndex.name != active.name ? 'slideOut-up' : 'slideIn-up'}\`}
        onAnimationEnd={handleAnimationEnd}
        >
        <div className="w-100 py-6 bg-secondary-lightest">
            <PageHeader {...options} />
        </div>
        <Card className="my-6">
            <Table
            loaderSchema={loaderSchema3}
            showMenu={false}
            separator={false}
            data={data3}
            schema={schema3}
            withHeader={true}
            headerOptions={{
                withSearch: true,
                dynamicColumn: false,
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
            onPageChange={(newPage) => console.log(\`on-page-change:- \${newPage}\`)}
            />
        </Card>
        </div>
    );
    };

  const [activeTabIndex, setActiveTabIndex] = React.useState({ name: 'payer_requests' });
  const [active, setActive] = React.useState({ name: 'payer_requests' });

  const menuList = [
    {
      name: 'payer_requests',
      label: 'Payer requests',
      icon: 'assignment_ind',
    },
    {
      name: 'payer_verification',
      label: 'Payer verification',
      icon: 'forum',
    },
    {
      name: 'payers',
      label: 'Payers',
      icon: 'airline_seat_flat_angled',
    },
  ];

  const handleAnimationEnd = () => {
    setActive(activeTabIndex);
  };

  const onClickHandler = (item) => {
    setActiveTabIndex(item);
  };

  return (
    <div className="d-flex bg-secondary-lightest">
      <VerticalNav menus={menuList} active={activeTabIndex} onClick={onClickHandler} />
      <div className="mx-6 d-flex w-100">
        {active.name === 'payer_requests' ? (
          <Item1 active={active} handleAnimationEnd={handleAnimationEnd} activeTabIndex={activeTabIndex} />
        ) : active.name === 'payer_verification' ? (
          <Item2 active={active} handleAnimationEnd={handleAnimationEnd} activeTabIndex={activeTabIndex} />
        ) : (
          <Item3 active={active} handleAnimationEnd={handleAnimationEnd} activeTabIndex={activeTabIndex} />
        )}
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/VerticalNav/With Animation',
  component: VerticalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
