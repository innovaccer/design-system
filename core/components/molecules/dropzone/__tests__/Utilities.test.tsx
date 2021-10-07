import { getFileError } from '../FileErrors';
import { reducer, isIeOrEdge, isKindFile, isPropagationStopped } from '../utils';

const fileData = {
  dataTransfer: {
    files: [new File(['(⌐□_□)'], 'file1.png')],
    types: ['Files'],
  },
  size: 1024,
};

const options = {
  files: [fileData],
  accept: 'images/jpeg',
  minSize: 100,
  maxSize: 200,
  multiple: false,
};

const event = {
  cancelBubble: false,
};

const Actions = ['focus', 'blur', 'closeDialog', 'default'];

test('dropzone component: check for fileError function', () => {
  expect(getFileError(options));
});

test('dropzone component: check for fileError function', () => {
  options.files = [fileData, fileData];
  expect(getFileError(options));
});

describe('dropzone component: check for reducers', () => {
  Actions.forEach((actionItem) => {
    const state = 'state';
    const action = { type: actionItem };
    expect(reducer(state, action));
  });
});

test('dropzone component: check for browser compatibility', () => {
  expect(isIeOrEdge(window.navigator.userAgent));
});

test('dropzone component: checks isKindFile function', () => {
  expect(isKindFile({ options }));
});

test('dropzone component: checks for isPropagationStopped function', () => {
  expect(isPropagationStopped({}));
  expect(isPropagationStopped(event));
});
