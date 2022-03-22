import * as React from 'react';
import { action } from '@/utils/action';
import { updateKnob } from '@/utils/storybookEventEmitter';
import { Text, Paragraph, Sidesheet, ModalDescription, Button, Badge, Heading, Divider } from '@/index';

export const customHeader = () => {
  const open = true;
  const seperator = false;
  const stickFooter = false;
  const backdropClose = false;

  const onClose = () => {
    updateKnob('open', false);
    action('on close triggered')();
  };

  const options = {
    onClose,
    open,
    seperator,
    stickFooter,
    backdropClose,
    footer: (
      <>
        <Button appearance="primary" className="mr-4">
          Primary
        </Button>
        <Button appearance="basic">Basic</Button>
      </>
    ),
  };

  const modalDescriptionOptions = {
    title: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
    removePadding: true,
  };

  const modalDescriptionOptionsWithoutTitle = {
    description: 'Card Sections include supporting text like an article summary or a restaurant description.',
    removePadding: true,
  };

  return (
    <div>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
        <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br />
      </Paragraph>
      <Sidesheet
        {...options}
        dimension="regular"
        header={
          <div className="pl-7">
            <Heading size="s">Untitled document</Heading>
            <div className="d-flex">
              <div className="mr-3">
                <Badge appearance="primary">User Interface</Badge>
              </div>
              <div className="mr-3">
                <Badge>Design</Badge>
              </div>
              <div className="mr-3">
                <Badge>Development</Badge>
              </div>
            </div>
            <Divider></Divider>
          </div>
        }
      >
        <Text>Modal Body</Text>
        <ModalDescription {...modalDescriptionOptions} />
        <ModalDescription {...modalDescriptionOptionsWithoutTitle} />
      </Sidesheet>
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(true);

  const onClose = () => {
    setOpen(!open);
  };

  const options = {
    onClose,
    open,
    footer: (
      <>
        <Button appearance="primary" className="mr-4">
          Primary
        </Button>
        <Button appearance="basic">Basic</Button>
      </>
    ),
  };

  const modalDescriptionOptions = {
    title: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
    removePadding: true,
  };

  const modalDescriptionOptionsWithoutTitle = {
    description: 'Card Sections include supporting text like an article summary or a restaurant description.',
    removePadding: true,
  };

  return (
    <div>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
        <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{' '}
        <br />
        <Button appearance="primary" onClick={() => setOpen(true)}>
          Open
        </Button>
      </Paragraph>
      <Sidesheet
        {...options}
        dimension="regular"
        header={
          <div className="pl-7">
            <Heading size="s">Untitled document</Heading>
            <div className="d-flex">
              <div className="mr-3">
                <Badge appearance="primary">User Interface</Badge>
              </div>
              <div className="mr-3">
                <Badge>Design</Badge>
              </div>
              <div className="mr-3">
                <Badge>Development</Badge>
              </div>
            </div>
            <Divider></Divider>
          </div>
        }
      >
        <Text>Modal Body</Text>
        <ModalDescription {...modalDescriptionOptions} />
        <ModalDescription {...modalDescriptionOptionsWithoutTitle} />
      </Sidesheet>
    </div>
  );
}`;

export default {
  title: 'Components/Sidesheet/Custom Header',
  component: Sidesheet,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Modal',
        noHtml: true,
      },
    },
  },
};
