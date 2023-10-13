import * as React from 'react';
import { render } from '@testing-library/react';
import PageHeader, { PageHeaderProps as Props } from '../PageHeader';
import { Stepper, Button, Tabs, Breadcrumbs, Badge, MetaList, StatusHint, HorizontalNav } from '@/index';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const BooleanValues = [true, false];
const title = 'PageHeader title';
const navPosition = ['center', 'bottom'];

const navigationData = [
  {
    name: 'menu_1',
    label: 'Virtual Visits',
  },
  {
    name: 'menu_2',
    label: 'Assesments',
  },
];

const stepperData = [
  {
    value: 'step_1',
    label: 'Step 1',
  },
  {
    value: 'step_2',
    label: 'Step 2',
  },
  {
    value: 'step_3',
    label: 'Step 3',
  },
];

const tabs = [
  {
    count: 32,
    label: 'New',
  },
  {
    count: 4,
    label: 'Invalid',
  },
  {
    count: 2,
    label: 'Duplicate',
  },
];

const navigation = <HorizontalNav menus={navigationData} />;
const stepper = <Stepper steps={stepperData} />;
const actions = <Button>Action Section</Button>;
const tab = <Tabs tabs={tabs} activeIndex={0} />;
const badge = <Badge>Sent</Badge>;
const meta = <MetaList list={[{ label: 'Text' }, { label: 'Email' }]} />;
const status = <StatusHint>Ongoing</StatusHint>;
const button = <Button icon="arrow_back" size="tiny" />;

const breadcrumbs = (
  <Breadcrumbs
    list={[
      {
        label: 'Senders',
        link: '/Senders',
      },
    ]}
  />
);

describe('Navigation component', () => {
  const mapper = {
    tabs: valueHelper(tab, { required: true }),
    meta: valueHelper(meta, { required: true }),
    badge: valueHelper(badge, { required: true }),
    title: valueHelper(title, { required: true }),
    button: valueHelper(button, { required: true }),
    status: valueHelper(status, { required: true }),
    stepper: valueHelper(stepper, { required: true }),
    actions: valueHelper(actions, { required: true }),
    navigation: valueHelper(navigation, { required: true }),
    breadcrumbs: valueHelper(breadcrumbs, { required: true }),
    separator: valueHelper(BooleanValues, { required: true, iterate: true }),
    navigationPosition: valueHelper(navPosition, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<PageHeader {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('PageHeader Component with tabs', () => {
  const { getByTestId } = render(<PageHeader title={title} tabs={tab} />);
  expect(getByTestId('DesignSystem-PageHeader--Tabs')).toBeInTheDocument();
});

describe('PageHeader Component with nav', () => {
  it('test for center navigation', () => {
    const { getByTestId } = render(<PageHeader title={title} navigation={navigation} />);
    expect(getByTestId('DesignSystem-PageHeader--CenterNav')).toBeInTheDocument();
  });

  it('test for center navigation', () => {
    const { getByTestId } = render(<PageHeader title={title} navigation={navigation} navigationPosition="bottom" />);
    expect(getByTestId('DesignSystem-PageHeader--Nav')).toBeInTheDocument();
  });
});

describe('PageHeader Component with stepper', () => {
  const { getByTestId } = render(<PageHeader title={title} stepper={stepper} />);
  expect(getByTestId('DesignSystem-PageHeader--Nav')).toBeInTheDocument();
});

describe('PageHeader Component with actions', () => {
  const { getAllByTestId } = render(<PageHeader title={title} actions={actions} />);
  expect(getAllByTestId('DesignSystem-PageHeader--Actions')[0]).toBeInTheDocument();
});

describe('PageHeader Component with breadcrumbs', () => {
  const { getByTestId } = render(<PageHeader title={title} breadcrumbs={breadcrumbs} />);
  expect(getByTestId('DesignSystem-PageHeader--Breadcrumbs')).toBeInTheDocument();
});

describe('PageHeader Component with badge', () => {
  const { getByTestId } = render(<PageHeader title={title} badge={badge} />);
  expect(getByTestId('DesignSystem-Badge')).toBeInTheDocument();
});

describe('PageHeader Component with separator', () => {
  const { getAllByTestId } = render(<PageHeader title={title} />);
  expect(getAllByTestId('DesignSystem-Divider')[0]).toBeInTheDocument();
});

describe('PageHeader Component with button', () => {
  const { getByTestId } = render(<PageHeader title={title} button={button} />);
  expect(getByTestId('DesignSystem-PageHeader--Button')).toBeInTheDocument();
});
