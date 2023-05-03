import * as React from 'react';
import { action } from '@/utils/action';
import { Text, Sidesheet, ModalDescription, Button, Badge, Heading, Divider } from '@/index';

export const customHeader = () => {
  const [open, setOpen] = React.useState(false);
  const seperator = false;
  const stickFooter = false;
  const backdropClose = false;

  const onClose = () => {
    setOpen(false);
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
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Sidesheet
      </Button>
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
  const [open, setOpen] = React.useState(false);

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
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Sidesheet</Button>
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
  title: 'Overlays/Sidesheet/Custom Header',
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
