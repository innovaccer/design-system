import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';

configure({ testIdAttribute: 'data-test' });

// jest.mock('@/utils/uidGenerator', () => () => 'Test-uid');

document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  createContextualFragment: (str) => {
    const temp = document.createElement('template');
    temp.innerHTML = str;
    return temp.content;
  },
  // @ts-ignore
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
});
