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
        Feedback_Type_ID: '9282ac39-f587-4ae1-ab0a-0c3d23461b81',
        Selected_Option_ID: 'c6eaad04-8f97-4c7e-89df-73d530db1ce0',
        Comment_Box_ID: '1487fdc5-c078-4461-8506-a8ffcfde32c6',
      };

    case 'No':
      return {
        heading: 'Oh, what went wrong?',
        choiceListOptions: negativeChoices,
        Feedback_Type_ID: '9282ac39-f587-4ae1-ab0a-0c3d23461b81',
        Selected_Option_ID: '70aa236c-2889-436a-a359-0a97c654cb29',
        Comment_Box_ID: '13ed6dde-a0b1-4848-8dba-f36dfee0dc7c',
      };

    default:
      return;
  }
};
