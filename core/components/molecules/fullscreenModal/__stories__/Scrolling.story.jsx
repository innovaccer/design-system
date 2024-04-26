import * as React from 'react';
import { action } from '@/utils/action';
import { Button, Chip, Text, FullscreenModal } from '@/index';

export const scrolling = () => {
  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(!open);
  };

  const data = [
    {
      question: 'Do you experience any of the following in your current place of residence? [Select all that apply]',
      options: [
        'Deteriorating appearance',
        'Inoperable plumbing',
        'Inadequate wining',
        'Leaking roofs',
        'Crumbling foundations',
        'Unsafe steps',
        'in poor condition',
        'None of the above',
      ],
    },
    {
      question: 'In last 12 months, were you worried that your food would run out before you got money to buy more?',
      options: ['Yes', 'No'],
    },
    {
      question:
        'Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual',
      options: ['Not at all', 'Several Days', 'More than half the days', 'Nearly every day'],
    },
    { question: 'Feeling tired or having little energy?', options: ['Yes', 'No'] },
    {
      question:
        'Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual',
      options: ['Not at all', 'Several Days', 'More than half the days', 'Nearly every day'],
    },
    {
      question:
        'Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual',
      options: ['Not at all', 'Several Days', 'More than half the days', 'Nearly every day'],
    },
    {
      question:
        'Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual',
      options: ['Not at all', 'Several Days', 'More than half the days', 'Nearly every day'],
    },
  ];

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Full screen modal
      </Button>
      <FullscreenModal
        open={open}
        dimension="large"
        onClose={onClose}
        headerOptions={{
          heading: 'Survey',
        }}
        footer={
          <>
            <Button onClick={action('Cancel button click')}>Cancel</Button>
            <Button appearance="primary" className="ml-4" onClick={action('Submit button click')}>
              Submit
            </Button>
          </>
        }
      >
        <div className="mt-5">
          <Text weight="strong">All questions must be answered, unless marked</Text>
          <br />
          {data.map((object, index) => {
            return (
              <div key={index} className="mt-5 d-flex">
                <div>
                  <Text size="regular" className="mr-4">
                    {`${index + 1}.`}
                  </Text>
                </div>
                <div className="d-inline-block ml-2">
                  <Text size="regular">{object.question}</Text>
                  <div className="mb-5 mt-3">
                    {object.options.map((option, ind) => {
                      return <Chip key={ind} type="selection" label={option} className="mr-4 mt-4" />;
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </FullscreenModal>
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(!open);
  };

  const data = [{ question:'Do you experience any of the following in your current place of residence? [Select all that apply]', options:['Deteriorating appearance', 'Inoperable plumbing', 'Inadequate wining', 'Leaking roofs', 'Crumbling foundations', 'Unsafe steps', 'in poor condition', 'None of the above'] },
    { question:'In last 12 months, were you worried that your food would run out before you got money to buy more?',
      options:['Yes', 'No'] },
    { question:'Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual', options:['Not at all', 'Several Days', 'More than half the days', 'Nearly every day'] },
    { question:'Feeling tired or having little energy?', options:['Yes', 'No'] },
    { question:'Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual', options:['Not at all', 'Several Days', 'More than half the days', 'Nearly every day'] },
    { question:'Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual', options:['Not at all', 'Several Days', 'More than half the days', 'Nearly every day'] },
    { question:'Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual', options:['Not at all', 'Several Days', 'More than half the days', 'Nearly every day'] },
  ];

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Full screen modal</Button>
      <FullscreenModal
        open={open}
        dimension="large"
        onClose={onClose}
        headerOptions={{
          heading: 'Survey',
        }}
        footer={(
          <>
            <Button  onClick={console.log('Cancel button click')}>Cancel</Button>
            <Button appearance="primary" className="ml-4" onClick={console.log('Submit button click')}>Submit</Button>
          </>
        )}
      >
      <div className="mt-5">
        <Text weight="strong">All questions must be answered, unless marked</Text><br/>
        {
          data.map((object, index) => {
            return(
              <div key={index} className="mt-5 d-flex">
                <div >
                  <Text size="regular" className="mr-4">
                  {\`\${index + 1}.\`}
                  </Text>
                </div>
                <div className="d-inline-block ml-2">
                  <Text size="regular">
                    {object.question}
                  </Text>
                  <div className="mb-5 mt-3">
                    {
                      object.options.map((option, ind) => {
                        return <Chip key={ind} type="selection" label={option} className="mr-4 mt-4" />;
                      })
                    }
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
      </FullscreenModal>
    </div>
  );
}`;

export default {
  title: 'Components/Modal/FullscreenModal/Scrolling',
  component: FullscreenModal,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'FullscreenModal',
        noHtml: true,
      },
    },
  },
};
