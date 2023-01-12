const positiveChoices = [
  {
    label: 'Easy to understand',
    name: 'positiveChoices',
    value: 'Easy to understand',
  },
  {
    label: 'Solved my use-case',
    name: 'positiveChoices',
    value: 'Solved my use-case',
  },
  {
    label: 'Easy to implement',
    name: 'positiveChoices',
    value: 'Easy to implement',
  },
  {
    label: 'Other',
    name: 'positiveChoices',
    value: 'Other',
  },
];

const negativeChoices = [
  {
    label: 'Too complex to understand',
    name: 'negativeChoices',
    value: 'Too complex to understand',
  },
  {
    label: 'Missing information',
    name: 'negativeChoices',
    value: 'Missing information',
  },
  {
    label: 'Did not solve my use-case',
    name: 'negativeChoices',
    value: 'Did not solve my use-case',
  },
  {
    label: 'Issue with sample code',
    name: 'negativeChoices',
    value: 'Issue with sample code',
  },
];

export const getFeedbackOptions = (selectedOption) => {
  switch (selectedOption) {
    case 'Yes':
      return {
        heading: 'What did you like?',
        choiceListOptions: positiveChoices,
        Feedback_Type_ID: '1abd2340-9897-11ed-be33-0b714d6d3ec3',
        Selected_Option_ID: '43e51150-9898-11ed-be33-0b714d6d3ec3',
        Comment_Box_ID: '71e075e0-9898-11ed-be33-0b714d6d3ec3',
      };

    case 'No':
      return {
        heading: 'Oh, what went wrong?',
        choiceListOptions: negativeChoices,
        Feedback_Type_ID: '1abd2340-9897-11ed-be33-0b714d6d3ec3',
        Selected_Option_ID: 'ce1b9070-9897-11ed-be33-0b714d6d3ec3',
        Comment_Box_ID: 'f5852220-9897-11ed-be33-0b714d6d3ec3',
      };

    default:
      return;
  }
};
