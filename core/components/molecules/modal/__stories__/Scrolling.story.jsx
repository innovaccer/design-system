import * as React from 'react';
import { action } from '@/utils/action';
import { Modal, Chip, Button, Text } from '@/index';

export const scrolling = () => {
  const [open, setOpen] = React.useState(false);
  const backdropClose = false;

  const onClose = () => {
    setOpen(!open);
    action('on close triggered')();
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
        'Porches in poor condition',
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
    {
      question: 'Feeling tired or having little energy?',
      options: ['Yes', 'No'],
    },
    {
      question:
        'Which of the following refers to a programme that aims to enable patients to make better use of information and communication technology for health and health care?',
      options: ['Patient informatics', 'ICT health', 'Health-tech', 'None of these'],
    },
    {
      question:
        'The way messages are framed influences people’s intentions and willingness to change their behaviour. Which of the following refers to the type of message framing that gives information about a health behaviour that emphasizes the costs of failing to take action?',
      options: ['Gain-framed messages', 'Loss-framed messages', 'Neutrally-framed messages', 'None of these'],
    },
    {
      question:
        'Which of the following refers to the capacity to access, understand, appraise and apply health information and services, and to make appropriate health decisions to promote and maintain health?',
      options: ['health accessibility', 'health appraisal', 'health literacy', 'health promotion'],
    },
    {
      question:
        'Frederich Engels’ book entitled The Condition of the Working Class in England in 1844 provided a detailed description of the appalling living and working conditions and the limited health care of working-class residents in which of the following English cities?',
      options: ['London', 'Manchester', 'Liverpool', 'None of these'],
    },
    {
      question:
        'Which of the following explanations for health inequalities focus on the individual as the unit of analysis, emphasizing unthinking, reckless or irresponsible behaviour or incautious lifestyle as the moving determinant?',
      options: [
        'Individualist explanations',
        'Natural and social selection',
        'Materialist and structuralist explanations',
        'Cultural and/or behavioural differences',
      ],
    },
    {
      question:
        'This approach to health promotion is based on the assumption that humans are rational decision-makers, this approach relies heavily upon the provision of information about risks and benefits of certain behaviours.',
      options: ['Behaviour change approach', 'Community development approach', 'Biomedical approach', 'None of these'],
    },
  ];

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        dimension="large"
        backdropClose={backdropClose}
        onClose={onClose}
        headerOptions={{
          heading: 'Survey',
        }}
        footer={
          <>
            <Button onClick={() => action('Cancel button click')}>Cancel</Button>
            <Button appearance="primary" className="ml-4" onClick={() => action('Next button click')}>
              Next
            </Button>
          </>
        }
        seperator={true}
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
      </Modal>
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(false);
  const backdropClose = false;

  const onClose = () => {
    setOpen(!open);
    console.log('on close triggered');
  };

  const data = [{"question":"Do you experience any of the following in your current place of residence? [Select all that apply]", "options":["Deteriorating appearance","Inoperable plumbing","Inadequate wining","Leaking roofs","Crumbling foundations","Unsafe steps","in poor condition","None of the above"]},
    {"question":"In last 12 months, were you worried that your food would run out before you got money to buy more?", "options":["Yes","No"]},
    {"question":"Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual", "options":["Not at all","Several Days","More than half the days","Nearly every day"]},
    {"question":"Feeling tired or having little energy?", "options":["Yes","No"]},
    {"question": "Which of the following refers to a programme that aims to enable patients to make better use of information and communication technology for health and health care?", "options":["patient informatics","ICT health","Health-tech","None of these"]},
    {"question": "The way messages are framed influences people’s intentions and willingness to change their behaviour. Which of the following refers to the type of message framing that gives information about a health behaviour that emphasizes the costs of failing to take action?", "options":["Gain-framed messages","Loss-framed messages","Neutrally-framed messages","None of these"]},
    {"question": "Which of the following refers to the capacity to access, understand, appraise and apply health information and services, and to make appropriate health decisions to promote and maintain health?", "options":["health accessibility","health appraisal","health literacy","health promotion"]},
    {"question": "Frederich Engels’ book entitled The Condition of the Working Class in England in 1844 provided a detailed description of the appalling living and working conditions and the limited health care of working-class residents in which of the following English cities?", "options":["London","Manchester","Liverpool","None of these"]},
    {"question": "Which of the following explanations for health inequalities focus on the individual as the unit of analysis, emphasizing unthinking, reckless or irresponsible behaviour or incautious lifestyle as the moving determinant?", "options":["Individualist explanations","Natural and social selection","Materialist and structuralist explanations","Cultural and/or behavioural differences"]},
    {"question": "This approach to health promotion is based on the assumption that humans are rational decision-makers, this approach relies heavily upon the provision of information about risks and benefits of certain behaviours.", "options":["Behaviour change approach","Community development approach","Biomedical approach","None of these"]},
  ];

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        dimension="large"
        backdropClose={backdropClose}
        onClose={onClose}
        headerOptions={{
          heading: 'Survey',
        }}
        footer={(
          <>
            <Button  onClick={() => console.log('Cancel button click')}>Cancel</Button>
            <Button appearance="primary" className="ml-4" onClick={() => console.log('Next button click')}>Next</Button>
          </>
        )}
        seperator={true}
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
                        object.options.map((option , ind) => {
                          return <Chip key={ind} type="selection" label={option} className="mr-4 mt-4"/>;
                        })
                      }
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </Modal>
    </div>
  );
}`;

export default {
  title: 'Components/Modal/Modal/Scrolling',
  component: Modal,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Modal',
        noHtml: true,
      },
    },
  },
};
