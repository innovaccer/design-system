import * as React from 'react';
import { action } from '@/utils/action';
import { Sidesheet, Button, Badge, Heading, Divider, Label, Text } from '@/index';

export const customHeader = () => {
  const [open, setOpen] = React.useState(false);
  const backdropClose = true;

  const onClose = () => {
    setOpen(false);
    action('on close triggered')();
  };

  const options = {
    onClose,
    open,
    backdropClose,
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
      <Sidesheet
        {...options}
        header={
          <div className="pl-7">
            <Heading size="m">Untitled document</Heading>
            <div className="d-flex mt-2">
              <div className="mr-3">
                <Badge>User Interface</Badge>
              </div>
              <div className="mr-3">
                <Badge>Design</Badge>
              </div>
              <div className="mr-3">
                <Badge>Development</Badge>
              </div>
            </div>
            <Divider />
          </div>
        }
      >
        <SidesheetDescription {...sidesheetDescriptionOptions} />
        <SidesheetDescription {...optionsWithoutLabel} />
      </Sidesheet>
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(false);
  const backdropClose = true;

  const onClose = () => {
    setOpen(false);
  };

  const options = {
    onClose,
    open,
    backdropClose,
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
      <Sidesheet
        {...options}
        header={
          <div className="pl-7">
          <Heading size="m">Untitled document</Heading>
          <div className="d-flex mt-2">
            <div className="mr-3">
              <Badge>User Interface</Badge>
            </div>
            <div className="mr-3">
              <Badge>Design</Badge>
            </div>
            <div className="mr-3">
              <Badge>Development</Badge>
            </div>
          </div>
          <Divider />
        </div>
        }
      >
        <SidesheetDescription {...sidesheetDescriptionOptions} />
        <SidesheetDescription {...optionsWithoutLabel} />
      </Sidesheet>
    </div>
  );
};`;

export default {
  title: 'Components/Sidesheet/Custom Header',
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
