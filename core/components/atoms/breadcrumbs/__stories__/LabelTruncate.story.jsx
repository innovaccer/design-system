import * as React from 'react';
import { Breadcrumbs, PageHeader } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const labelTruncate = () => {
  const breadcrumbs = (
    <Breadcrumbs
      list={[
        {
          label: 'eCQM Performance year 2022',
          link: '/eCQM',
        },
        {
          label: 'Report 1',
          link: '/report1',
        },
      ]}
      onClick={(link) => action(`on-click: ${link}`)}
      showTooltip={true}
    />
  );

  return (
    <div className="py-6 bg-secondary-lightest">
      <PageHeader title="eCQM Performance year 2022" breadcrumbs={breadcrumbs} />
    </div>
  );
};

const customCode = `() => {
  const breadcrumbs = (
    <Breadcrumbs
      list={[
        {
          label: 'eCQM Performance year 2022',
          link: '/eCQM',
        },
        {
          label: 'Report 1',
          link: '/report1',
        },
      ]}
      onClick={link => console.log(\`on-click: \${link}\`)}
      showTooltip={true}
    />
  );

  return (
    <div className="py-6 bg-secondary-lightest">
      <PageHeader title="eCQM Performance year 2022" breadcrumbs={breadcrumbs} />
    </div>
  );
}`;

export default {
  title: 'Components/Breadcrumbs/Label Truncate',
  component: Breadcrumbs,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
