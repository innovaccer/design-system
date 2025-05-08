import React from 'react';
import {
  Popover,
  Message,
  Menu,
  InlineMessage,
  Chip,
  ChipGroup,
  Avatar,
  AvatarGroup,
  Backdrop,
  Badge,
  Breadcrumbs,
  Button,
  Calendar,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardSubdued,
  Text,
  LinkButton,
  Heading,
} from '@innovaccer/design-system';
import '@innovaccer/design-system/css';

import Test from './Test';
import Components from './Components';

function App() {
  const [open, setOpen] = React.useState(false);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
      icon: <Avatar.Icon name="person" />,
    },
    {
      firstName: 'Anuradha',
      lastName: 'Aggarwal',
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
  ];

  const list1 = [
    {
      label: 'Level 0',
      link: '/level0',
    },
    {
      label: 'Level 1',
      link: '/level1',
    },
    {
      label: 'Level 2',
      link: '/level2',
    },
    {
      label: 'Level 3',
      link: '/level3',
    },
  ];

  return (
    <div className="p-8 w-100 bg-secondary-lighter">
      <Message
        appearance="alert"
        className="w-50"
        data-test="message"
        description="Could not start verification. Please try again later."
      />
      <Menu trigger={<Menu.Trigger />}>
        <Menu.List>
          <Menu.Item>Edit</Menu.Item>
          <Menu.Item>Export</Menu.Item>
          <Menu.Item>Copy</Menu.Item>
        </Menu.List>
      </Menu>
      <InlineMessage className="mb-6" appearance="alert" description="There are two new referral requests." />
      <Chip
        clearButton={true}
        icon="assessment"
        label="Chip Label"
        name="chip"
        onClick={function () {}}
        onClose={function () {}}
        type="selection"
        className="mb-6"
      />

      <Chip
        className="mb-6"
        clearButton={true}
        label="60yrs"
        labelPrefix="Age="
        name="Age="
        selected={true}
        type="selection"
      />

      <ChipGroup
        className="mb-6"
        list={[
          {
            icon: 'assessment',
            label: 'Letter.pdf',
            name: '1',
            type: 'action',
          },
          {
            clearButton: true,
            icon: 'assessment',
            label: 'Mail.pdf',
            name: '2',
            type: 'action',
          },
          {
            clearButton: true,
            icon: 'assessment',
            label: 'Draft.pdf',
            name: '3',
            selected: true,
            type: 'action',
          },
        ]}
        onClick={function () {
          console.log('clicked');
        }}
      />

      <Avatar appearance="primary" firstName="John" lastName="Doe" size="tiny" />
      <AvatarGroup
        list={list}
        popoverOptions={{ position: 'bottom', withSearch: true, on: 'click', searchPlaceholder: 'Search User' }}
      />

      <div onKeyDown={onKeyDown}>
        <Button onClick={() => setOpen(true)} appearance="primary">
          Trigger Backdrop
        </Button>
        <div onClick={() => setOpen(false)}>
          <Backdrop open={open} />
        </div>
      </div>

      <Badge>Approved</Badge>

      <div className="bg-secondary-lightest">
        <Breadcrumbs list={list1} onClick={(link: string) => console.log(`on-click: ${link}`)} />
      </div>
      <Button aria-label="Open" onClick={function () {}} type="button">
        Open
      </Button>

      <LinkButton aria-label="Open" icon="keyboard_arrow_down_round" iconAlign="right" onClick={function () {}}>
        more details
      </LinkButton>
      <Calendar
        date={new Date('2023-01-10T18:30:00.000Z')}
        disabledAfter={new Date('2028-01-19T18:30:00.000Z')}
        disabledBefore={new Date('2015-01-19T18:30:00.000Z')}
        events={{
          '01/12/2023': true,
        }}
        firstDayOfWeek="saturday"
        onDateChange={function () {}}
        onRangeChange={function () {}}
      />

      <Card className="w-50 Card-wrapper">
        <CardHeader>
          <Text weight="strong" size="large">
            Card Heading
          </Text>
        </CardHeader>
        <CardBody>
          <div>Card Body</div>
        </CardBody>
        <CardFooter className="justify-content-end" withSeperator={false}>
          <>
            <Button appearance="basic">Cancel</Button>
            <Button appearance="primary" className="ml-4">
              Submit
            </Button>
          </>
        </CardFooter>
      </Card>
      <Card className="mt-5 w-50">
        <CardHeader>
          <Text weight="strong" size="large">
            Card Heading
          </Text>
        </CardHeader>
        <CardBody>
          <div>Card Body</div>
        </CardBody>
        <CardSubdued className="mt-5">Subdued section.</CardSubdued>
      </Card>

      <div className="mb-11">
        <Popover position="bottom-start" on="click" trigger={<Button appearance="basic">Open Popover</Button>}>
          <div className="p-5">
            <Text>
              I am a popover, you can use me to display links,
              <br />
              interactive elements, avatars, text formatting, meta data etc.
            </Text>
          </div>
        </Popover>
      </div>

      <Test />

      <Heading size="l">Components</Heading>
      <Components />
    </div>
  );
}

export default App;
