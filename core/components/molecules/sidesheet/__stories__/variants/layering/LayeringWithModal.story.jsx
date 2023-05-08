import * as React from 'react';
import { action } from '@/utils/action';
import { Sidesheet, Button, ModalDescription, Label, Text } from '@/index';
import Modal from '@/components/molecules/modal';

export const layeringWithModal = () => {
  const [open, setOpen] = React.useState(false);
  const [openSecond, setOpenSecond] = React.useState(false);
  const backdropClose = true;

  const onClose = () => {
    setOpen(false);
    action('on close triggered')();
  };

  const onCloseSecond = () => {
    setOpenSecond(false);
    action('on close triggered')();
  };

  const headerOptions = {
    heading: 'Heading',
    subHeading: 'Subheading',
  };

  const options = {
    onClose,
    open,
    headerOptions,
    backdropClose,
    footer: (
      <>
        <Button appearance="primary" className="mr-4" onClick={() => setOpenSecond(true)}>
          Open
        </Button>
        <Button appearance="basic">Cancel</Button>
      </>
    ),
  };

  const SidesheetDescription = (params) => {
    const { label, description } = params;
    return (
      <div className="py-4">
        {label && <Label withInput={!!description}>{label}</Label>}
        {label && description && <br />}
        {description && <Text>{description}</Text>}
      </div>
    );
  };

  const sidesheetDescriptionOptions = {
    label: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
  };

  const optionsWithoutLabel = {
    description: 'Card Sections include supporting text like an article summary or a healthcare service description.',
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Sidesheet
      </Button>
      <Sidesheet {...options} closeOnEscape={true}>
        <SidesheetDescription {...sidesheetDescriptionOptions} />
        <SidesheetDescription {...optionsWithoutLabel} />
      </Sidesheet>

      <Modal
        closeOnEscape={true}
        open={openSecond}
        backdropClose={false}
        onClose={onCloseSecond}
        headerOptions={{
          heading: 'Heading Part Two',
          subHeading: 'Subheading Part Two',
        }}
        footer={
          <>
            <Button appearance="primary" className="ml-4">
              Primary
            </Button>
          </>
        }
      >
        <ModalDescription description="Card Sections include supporting text like an article summary or a healthcare service description." />
      </Modal>
    </div>
  );
};

const customCode = `() =>  {
  const [open, setOpen] = React.useState(false);
  const [openSecond, setOpenSecond] = React.useState(false);
  const backdropClose = true;

  const onClose = () => {
    setOpen(false);
  };

  const onCloseSecond = () => {
    setOpenSecond(false);
  };

  const headerOptions = {
    heading: 'Heading',
    subHeading: 'Subheading',
  };

  const options = {
    onClose,
    open,
    headerOptions,
    backdropClose,
    footer: (
      <>
        <Button appearance="primary" className="mr-4" onClick={() => setOpenSecond(true)}>
          Open
        </Button>
        <Button appearance="basic">Cancel</Button>
      </>
    ),
  };

  const SidesheetDescription = (params) => {
    const { label, description } = params;
    return (
      <div className="py-4">
        {label && <Label withInput={!!description}>{label}</Label>}
        {label && description && <br />}
        {description && <Text>{description}</Text>}
      </div>
    );
  };

  const sidesheetDescriptionOptions = {
    label: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
  };

  const optionsWithoutLabel = {
    description: 'Card Sections include supporting text like an article summary or a healthcare service description.',
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Sidesheet
      </Button>
      <Sidesheet {...options} closeOnEscape={true}>
        <SidesheetDescription {...sidesheetDescriptionOptions} />
        <SidesheetDescription {...optionsWithoutLabel} />
      </Sidesheet>

      <Modal
        closeOnEscape={true}
        open={openSecond}
        backdropClose={false}
        onClose={onCloseSecond}
        headerOptions={{
          heading: 'Heading Part Two',
          subHeading: 'Subheading Part Two',
        }}
        footer={
          <>
            <Button appearance="primary" className="ml-4">
              Primary
            </Button>
          </>
        }
      >
        <ModalDescription description="Card Sections include supporting text like an article summary or a healthcare service description." />
      </Modal>
    </div>
  );
};`;

export default {
  title: 'Components/Sidesheet/Variants/Layering/Layering With Modal',
  component: Sidesheet,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Sidesheet',
        noHtml: true,
      },
    },
  },
};
