import '@testing-library/jest-dom';
const ReactTestingLibrary = require('@testing-library/react');

// Configure React Testing Library
const { configure } = ReactTestingLibrary;

configure({ testIdAttribute: 'data-test' });

jest.mock('@/utils/uidGenerator', () => () => ('Test-uid'));

document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  createContextualFragment: (str) => {
    var temp = document.createElement('template');
    temp.innerHTML = str;
    return temp.content;
  },
  // @ts-ignore
  commonAncestorContainer: {
    nodeName: "BODY",
    ownerDocument: document,
  },
});
