import * as React from 'react';
import { action } from '@/utils/action';
import { Text, Sidesheet, Button, ModalDescription } from '@/index';
import Modal from '@/components/molecules/modal';

export const layeringWithModal = () => {
  const [open, setOpen] = React.useState(false);
  const [openSecond, setOpenSecond] = React.useState(false);
  const seperator = false;
  const backIcon = false;
  const stickFooter = false;
  const backdropClose = false;
  const dimension = 'regular';

  const onClose = () => {
    setOpen(false);
    action('on close triggered')();
  };

  const onCloseSecond = () => {
    setOpenSecond(false);
    action('on close triggered')();
  };

  const backIconCallback = () => {
    action('back icon clicked')();
  };

  const headerOptions = {
    backIcon,
    backIconCallback: backIcon ? backIconCallback : undefined,
    heading: 'Heading',
    subHeading: 'Subheading',
  };

  const options = {
    onClose,
    open,
    dimension,
    seperator,
    headerOptions,
    stickFooter,
    backdropClose,
    footer: (
      <>
        <Button appearance="primary" className="mr-4" onClick={() => setOpenSecond(true)}>
          Open
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
      <Sidesheet {...options} closeOnEscape={true}>
        <Text>Modal Body</Text>
        <ModalDescription {...modalDescriptionOptions} />
        <ModalDescription {...modalDescriptionOptionsWithoutTitle} />
      </Sidesheet>

      <Modal
        closeOnEscape={true}
        open={openSecond}
        dimension="medium"
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
        <Text>Modal Part Two Body</Text>
        <ModalDescription description="Card Sections include supporting text like an article summary or a restaurant description." />
      </Modal>
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(false);
  const [openSecond, setOpenSecond] = React.useState(false);

  const onClose = () => {
    setOpen(!open);
  };

  const onSecondOverlayClose = () => {
    setOpenSecond(!openSecond);
  }

  const headerOptions = {
    heading: 'Heading',
    subHeading: 'Subheading'
  };

  const options = {
    onClose,
    open,
    headerOptions,
    footer: (
      <>
        <Button appearance="primary" className="mr-4" onClick={() => setOpenSecond(true)}>Open</Button>
        <Button appearance="basic">Basic</Button>
      </>
    )
  };

  const modalDescriptionOptions = {
    title: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
    removePadding: true
  };

  const modalDescriptionOptionsWithoutTitle = {
    description: 'Card Sections include supporting text like an article summary or a restaurant description.',
    removePadding: true
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Sidesheet</Button>
      <Sidesheet {...options} closeOnEscape={true}>
        <Text>Modal Body</Text>
        <ModalDescription {...modalDescriptionOptions} />
        <ModalDescription {...modalDescriptionOptionsWithoutTitle} />
      </Sidesheet>
      <Modal
        closeOnEscape={true}
        open={openSecond}
        dimension='medium'
        backdropClose={false}
        onClose={onSecondOverlayClose}
        headerOptions={{
          heading: 'Heading Part Two',
          subHeading: 'Subheading Part Two',
        }}
        footer={
          <>
            <Button appearance="primary" className="ml-4" onClick={() => console.log('Primary button click')}>
              Primary
            </Button>
          </>
        }
      >
        <Text>Modal Part Two Body</Text>
        <ModalDescription description="Card Sections include supporting text like an article summary or a restaurant description." />
      </Modal>
    </div>
  );
}`;

export default {
  title: 'Components/Sidesheet/Layering With Modal',
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
