import * as React from 'react';
import { action } from '@/utils/action';
import { Heading, Text, Paragraph, Sidesheet, ModalDescription, Button } from '@/index';

export const twoSteps = () => {
  const [page, setPage] = React.useState(2);
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
  const [page, setPage] = React.useState(2);
  const [animate, setAnimate] = React.useState(true);

  const onClose = () => {
    setOpen(!open);
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
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br />
        <Button appearance="primary" onClick={() => setOpen(true)}>Open</Button>
      </Paragraph>
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
