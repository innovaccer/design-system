import * as React from 'react';
import { action } from '@/utils/action';
import { Heading, Text, Sidesheet, ModalDescription, Button } from '@/index';

export const twoSteps = () => {
  const [page, setPage] = React.useState(1);
  const [animate, setAnimate] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const seperator = false;
  const stickFooter = false;
  const backdropClose = false;
  const dimension = 'regular';

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
    dimension,
    seperator,
    headerOptions,
    stickFooter,
    backdropClose,
    footer: (
      <>
        {page === 1 && (
          <Button appearance="primary" className="mr-4" onClick={() => setPage(2)}>
            Next
          </Button>
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
      <Sidesheet {...options}>
        <div className={animate ? 'fade-in' : ''} onAnimationEnd={() => setAnimate(false)}>
          <Heading size="s">{`Page ${page}`}</Heading>
          <Text>Modal Body</Text>
          <ModalDescription {...modalDescriptionOptions} />
          <ModalDescription {...modalDescriptionOptionsWithoutTitle} />
        </div>
      </Sidesheet>
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [animate, setAnimate] = React.useState(true);

  const onClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setAnimate(true);
    return () => {
      setAnimate(false);
    }
  }, [page])

  const backIconCallback = (e) => {
    console.log('back icon clicked');
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
          <Button
            appearance="primary"
            className="mr-4"
            onClick={() => setPage(2)}
          >
            Next
          </Button>
        )}
        {page === 2 && (
          <>
            <Button
              appearance="primary"
              onClick={() => console.log('Submit button click')}
              className="mr-4"
            >
              Submit
            </Button>
            <Button
              appearance="basic"
              onClick={() => setPage(1)}
            >
              Back
            </Button>
          </>
        )}
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
      <Sidesheet {...options} >
        <div 
          className={ animate ? 'fade-in' : ''} 
          onAnimationEnd={() => setAnimate(false)}
        >
          <Heading size="s">{\`Page \${page}\`}</Heading>
          <Text>Modal Body</Text>
          <ModalDescription {...modalDescriptionOptions} />
          <ModalDescription {...modalDescriptionOptionsWithoutTitle} />
        </div>
      </Sidesheet>
    </div>
  );
}`;

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
