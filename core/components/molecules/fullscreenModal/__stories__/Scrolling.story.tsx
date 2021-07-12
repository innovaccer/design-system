import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Button, Text, Paragraph, FullscreenModal } from '@/index';

export const scrolling = () => {
  const [open, setOpen] = React.useState(true);

  const onClose = () => {
    setOpen(!open);
    action('on close triggered')();
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
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
        Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
      </Paragraph>
      <FullscreenModal
        open={open}
        dimension="large"
        onClose={onClose}
        headerOptions={{
          heading: 'Survey',
        }}
        footer={(
          <>
            <Button  onClick={action('Cancel button click')}>Cancel</Button>
            <Button appearance="primary" className="ml-4" onClick={action('Next button click')}>Next</Button>
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
                    <Text size="small" className="mr-4">
                    {`${index + 1}.`}
                    </Text>
                  </div>
                  <div className="d-inline-block ml-2">
                    <Text size="small">
                      {object.question}
                    </Text>
                    <div className="mb-5 mt-3">
                      {
                        object.options.map((option: string , ind: number) => {
                          return(
                            <Button key={ind} className="mr-4 mt-4 d-inline" size="tiny">
                              {option}
                            </Button>
                          );
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
};

const customCode = `() => {
  const [open, setOpen] = React.useState(true);

  const onClose = () => {
    setOpen(!open);
    console.log('on close triggered')();
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
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
        Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
        <Button appearance="primary" onClick={() => setOpen(true)}>Open</Button>
      </Paragraph>
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
            <Button appearance="primary" className="ml-4" onClick={console.log('Next button click')}>Next</Button>
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
                  <Text size="small" className="mr-4">
                  {\`\${index + 1}.\`}
                  </Text>
                </div>
                <div className="d-inline-block ml-2">
                  <Text size="small">
                    {object.question}
                  </Text>
                  <div className="mb-5 mt-3">
                    {
                      object.options.map((option, ind) => {
                        return(
                          <Button key={ind} className="mr-4 mt-4 d-inline" size="tiny">
                            {option}
                          </Button>
                        );
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
  title: 'Components/FullscreenModal/Scrolling',
  component: FullscreenModal,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'FullscreenModal',
        noHtml: true
      }
    }
  }
};
