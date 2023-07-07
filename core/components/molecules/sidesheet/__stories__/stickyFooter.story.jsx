import * as React from 'react';
import { action } from '@/utils/action';
import { Sidesheet, Button, Paragraph, Label, Text } from '@/index';

export const stickyFooter = () => {
  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(false);
    action('on close triggered')();
  };

  const backIconCallback = () => {
    action('back icon clicked')();
  };

  const headerOptions = {
    backIconCallback,
    backIcon: true,
    heading: 'Heading',
    subHeading: 'Subheading',
  };

  const options = {
    onClose,
    open,
    headerOptions,
    stickFooter: true,
    footer: (
      <>
        <Button appearance="primary" className="mr-4">
          Primary
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
      <Sidesheet {...options}>
        <SidesheetDescription {...sidesheetDescriptionOptions} />
        <SidesheetDescription {...optionsWithoutLabel} />
        <Paragraph>
          The action buttons appear in the left side of the sheet and follows the reverse order as the modals to keep
          the position of primary action predictable. Also, if the content covers &gt;= 75% of the side sheet measured
          vertically, then the actions appear in the bottom, i.e, margin-bottom for the footer is 0px.
        </Paragraph>
      </Sidesheet>
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const backIconCallback = () => {
    console.log('back icon clicked');
  };

  const headerOptions = {
    backIconCallback,
    backIcon: true,
    heading: 'Heading',
    subHeading: 'Subheading',
  };

  const options = {
    onClose,
    open,
    headerOptions,
    stickFooter: true,
    footer: (
      <>
        <Button appearance="primary" className="mr-4">
          Primary
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
      <Sidesheet {...options}>
        <SidesheetDescription {...sidesheetDescriptionOptions} />
        <SidesheetDescription {...optionsWithoutLabel} />
        <Paragraph>
          The action buttons appear in the left side of the sheet and follows the reverse order as the modals to keep
          the position of primary action predictable. Also, if the content covers &gt;= 75% of the side sheet measured
          vertically, then the actions appear in the bottom, i.e, margin-bottom for the footer is 0px.
        </Paragraph>
      </Sidesheet>
    </div>
  );
};`;

export default {
  title: 'Components/Sidesheet/Sticky Footer',
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
