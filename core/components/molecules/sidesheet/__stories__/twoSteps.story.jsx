import * as React from 'react';
import { action } from '@/utils/action';
import { Heading, Sidesheet, Button, Label, Text } from '@/index';

export const twoSteps = () => {
  const [page, setPage] = React.useState(1);
  const [animate, setAnimate] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setAnimate(true);
    return () => {
      setAnimate(false);
    };
  }, [page]);

  const onClose = () => {
    setOpen(false);
    action('on close triggered')();
  };

  const backIconCallback = () => {
    action('back icon clicked')();
    setPage(1);
  };

  const headerOptions = {
    backIconCallback,
    backIcon: page === 2,
    heading: `Heading ${page}`,
    subHeading: 'Subheading',
  };

  const options = {
    onClose,
    open,
    headerOptions,
    stickFooter: true,
    backdropClose: true,
    footer: (
      <>
        {page === 1 && (
          <>
            <Button appearance="primary" className="mr-4" onClick={() => setPage(2)}>
              Next
            </Button>
            <Button appearance="basic">Cancel</Button>
          </>
        )}
        {page === 2 && (
          <>
            <Button appearance="primary" className="mr-4">
              Submit
            </Button>
            <Button appearance="basic" onClick={() => setPage(1)}>
              Back
            </Button>
          </>
        )}
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
        <div className={animate ? 'fade-in' : ''} onAnimationEnd={() => setAnimate(false)}>
          <Heading size="s">{`Page ${page}`}</Heading>
          <SidesheetDescription {...sidesheetDescriptionOptions} />
          <SidesheetDescription {...optionsWithoutLabel} />
        </div>
      </Sidesheet>
    </div>
  );
};

const customCode = `() => {
  const [page, setPage] = React.useState(1);
  const [animate, setAnimate] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setAnimate(true);
    return () => {
      setAnimate(false);
    };
  }, [page]);

  const onClose = () => {
    setOpen(false);
    action('on close triggered')();
  };

  const backIconCallback = () => {
    action('back icon clicked')();
    setPage(1);
  };

  const headerOptions = {
    backIconCallback,
    backIcon: page === 2,
    heading: \`Heading \${page}\`,
    subHeading: 'Subheading',
  };

  const options = {
    onClose,
    open,
    headerOptions,
    stickFooter: true,
    backdropClose: true,
    footer: (
      <>
        {page === 1 && (
          <>
            <Button appearance="primary" className="mr-4" onClick={() => setPage(2)}>
              Next
            </Button>
            <Button appearance="basic">Cancel</Button>
          </>
        )}
        {page === 2 && (
          <>
            <Button appearance="primary" className="mr-4">
              Submit
            </Button>
            <Button appearance="basic" onClick={() => setPage(1)}>
              Back
            </Button>
          </>
        )}
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
        <div className={animate ? 'fade-in' : ''} onAnimationEnd={() => setAnimate(false)}>
          <Heading size="s">{\`Page \${page}\`}</Heading>
          <SidesheetDescription {...sidesheetDescriptionOptions} />
          <SidesheetDescription {...optionsWithoutLabel} />
        </div>
      </Sidesheet>
    </div>
  );
};`;

export default {
  title: 'Components/Sidesheet/Two Steps',
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
