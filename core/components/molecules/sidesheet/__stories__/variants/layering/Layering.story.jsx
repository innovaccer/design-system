import * as React from 'react';
import { action } from '@/utils/action';
import { Sidesheet, Button, Label, Text } from '@/index';

export const layeringWithSidesheet = () => {
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
    backdropClose,
    headerOptions,
    footer: (
      <>
        <Button appearance="primary" className="mr-4" onClick={() => setOpenSecond(true)}>
          Open
        </Button>
        <Button appearance="basic">Cancel</Button>
      </>
    ),
  };

  const SecondOverlayOptions = {
    headerOptions,
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

  const sidesheetDescriptionOptions2 = {
    label: 'Description Title - 2',
    description: 'Adding a subheading clearly indicates the hierarchy of the information. - 2',
  };

  const optionsWithoutLabel2 = {
    description:
      'Card Sections include supporting text like an article summary or a healthcare service description. - 2',
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Sidesheet
      </Button>
      <Sidesheet {...options} dimension="large" closeOnEscape={true}>
        <SidesheetDescription {...sidesheetDescriptionOptions} />
        <SidesheetDescription {...optionsWithoutLabel} />
      </Sidesheet>

      <Sidesheet {...SecondOverlayOptions} closeOnEscape={true}>
        <SidesheetDescription {...sidesheetDescriptionOptions2} />
        <SidesheetDescription {...optionsWithoutLabel2} />
      </Sidesheet>
    </div>
  );
};

const customCode = `() => {
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
    backdropClose,
    headerOptions,
    footer: (
      <>
        <Button appearance="primary" className="mr-4" onClick={() => setOpenSecond(true)}>
          Open
        </Button>
        <Button appearance="basic">Cancel</Button>
      </>
    ),
  };

  const SecondOverlayOptions = {
    headerOptions,
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

  const sidesheetDescriptionOptions2 = {
    label: 'Description Title - 2',
    description: 'Adding a subheading clearly indicates the hierarchy of the information. - 2',
  };

  const optionsWithoutLabel2 = {
    description:
      'Card Sections include supporting text like an article summary or a healthcare service description. - 2',
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Sidesheet
      </Button>
      <Sidesheet {...options} dimension="large" closeOnEscape={true}>
        <SidesheetDescription {...sidesheetDescriptionOptions} />
        <SidesheetDescription {...optionsWithoutLabel} />
      </Sidesheet>

      <Sidesheet {...SecondOverlayOptions} closeOnEscape={true}>
        <SidesheetDescription {...sidesheetDescriptionOptions2} />
        <SidesheetDescription {...optionsWithoutLabel2} />
      </Sidesheet>
    </div>
  );
};`;

export default {
  title: 'Components/Sidesheet/Variants/Layering/Layering With Sidesheet',
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
