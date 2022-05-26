import * as React from 'react';
import { action } from '@/utils/action';
import { Text, Sidesheet, Button, ModalDescription } from '@/index';

export const layering = () => {
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

  const SecondOverlayOptions = {
    dimension,
    seperator,
    headerOptions,
    stickFooter,
    backdropClose,
    onClose: onCloseSecond,
    open: openSecond,
    footer: (
      <>
        <Button appearance="primary" className="mr-4">
          Primary
        </Button>
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
      <Sidesheet {...options} dimension="large" closeOnEscape={true}>
        <Text>Modal Body</Text>
        <ModalDescription {...modalDescriptionOptions} />
        <ModalDescription {...modalDescriptionOptionsWithoutTitle} />
      </Sidesheet>

      <Sidesheet {...SecondOverlayOptions} closeOnEscape={true}>
        <Text>Modal Body Part Two</Text>
        <ModalDescription {...modalDescriptionOptions} />
        <ModalDescription {...modalDescriptionOptionsWithoutTitle} />
      </Sidesheet>
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

  const secondOverlayOptions = {
    onClose: onSecondOverlayClose,
    open: openSecond,
    headerOptions,
    footer: (
      <>
        <Button appearance="primary" className="mr-4">Primary</Button>
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
      <Sidesheet {...options} dimension="large" closeOnEscape={true}>
        <Text>Modal Body</Text>
        <ModalDescription {...modalDescriptionOptions} />
        <ModalDescription {...modalDescriptionOptionsWithoutTitle} />
      </Sidesheet>
      <Sidesheet {...secondOverlayOptions} closeOnEscape={true}>
        <Text>Modal Body Part Two</Text>
        <ModalDescription {...modalDescriptionOptions} />
        <ModalDescription {...modalDescriptionOptionsWithoutTitle} />
      </Sidesheet>
    </div>
  );
}`;

export default {
  title: 'Components/Sidesheet/Layering',
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
