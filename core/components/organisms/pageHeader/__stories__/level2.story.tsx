import * as React from 'react';
import { Stepper, Button, Breadcrumbs, PageHeader, Dropdown } from '@/index';
import { action } from '@storybook/addon-actions';

export const level2AndBeyond = () => {
  const stepperData = [
    {
      value: 'Upload',
      label: 'Upload',
    },
    {
      value: 'configure',
      label: 'configure'
    },
  ];

  const breadcrumbData = [
    {
      label: 'Care Management',
      link: '/Care Management'
    },
    {
      label: 'Care Potential',
      link: '/Care Potential'
    }
  ];

  const [active, setActive] = React.useState(0);
  const [completed, setCompleted] = React.useState(-1);

  const onChangeHandler = (activeStep: number) => {
    setActive(activeStep);
  };

  const onClickHandler = () => {
    if (active > completed) setCompleted(active);
    active > completed ? setActive(active + 1) : setActive(completed + 1);
  };
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

  const stepper = <Stepper steps={stepperData} onChange={onChangeHandler} active={active} completed={completed} />;
  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <div className="mr-4">
        <Dropdown menu={true} icon="more_horiz" options={options}/>
      </div>
      <Button className="mr-4">Cancel</Button>
      <Button className="mr-4" appearance="primary" onClick={onClickHandler}>Next</Button>
    </div>
  );
  const breadcrumbs = (
    <Breadcrumbs
      list={breadcrumbData}
      onClick={link => action(`on-click: ${link}`)}
    />
  );

  return (
    <div className="w-100 p-6 bg-secondary-lightest">
      <PageHeader
        title="Upload"
        navigationPosition="center"
        separator={false}
        stepper={stepper}
        actions={actions}
        breadcrumbs={breadcrumbs}
      />
    </div>
  );
};

const customCode = `() => {
  const stepperData = [
    {
      value: 'Upload',
      label: 'Upload',
    },
    {
      value: 'configure',
      label: 'configure'
    },
  ];

  const breadcrumbData = [
    {
      label: 'Care Management',
      link: '/Care Management'
    },
    {
      label: 'Care Potential',
      link: '/Care Potential'
    }
  ];

  const [active, setActive] = React.useState(0);
  const [completed, setCompleted] = React.useState(-1);

  const onChangeHandler = (activeStep) => {
    setActive(activeStep);
  };

  const onClickHandler = () => {
    if (active > completed) setCompleted(active);
    active > completed ? setActive(active + 1) : setActive(completed + 1);
  };
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

  const stepper = <Stepper steps={stepperData} onChange={onChangeHandler} active={active} completed={completed} />;
  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <div className="mr-4">
        <Dropdown
          menu={true} icon="more_horiz"
          options={options}
        />
      </div>
      <Button className="mr-4">Cancel</Button>
      <Button className="mr-4" appearance="primary" onClick={onClickHandler}>Next</Button>
    </div>
  );
  const breadcrumbs = (
    <Breadcrumbs
      list={breadcrumbData}
      onClick={link => console.log(\`on-click: \${link}\`)}
    />
  );

  return (
    <div className="w-100 p-6 bg-secondary-lightest">
      <PageHeader
        title="Upload"
        navigationPosition="center"
        separator={false}
        stepper={stepper}
        actions={actions}
        breadcrumbs={breadcrumbs}
      />
    </div>
  );
}`;

export default {
  title: 'Components/PageHeader/Level 2 And Beyond',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
