import React from 'react';
import '../css';
import './docPage.css'
import { addParameters } from '@storybook/react';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { docPage } from '@/utils/docPage';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
  docs: {
    container: DocsContainer,
    page: docPage,
  },
});

export const decorators = [
  (Story) => (
    <>
      <Story />
    </>
  )
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // Storybook a11y addon configuration
  a11y: {
    // the target DOM element
    element: '#root',
    // sets the execution mode for the addon
    manual: false,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  controls: { expanded: true },
  options: {
    /**
     * function to sort stories in the tree view
     * common use is alphabetical `(a, b) => a[1].id.localeCompare(b[1].id)`
     * if left undefined, then the order in which the stories are imported will
     * be the order they display
     * @type {Function}
     */
    storySort: (a, b) => {
      if (a[1].kind === b[1].kind) {
        if (a[1].story === 'All') return 0;
        if (b[1].story === 'All') return 1;
        return 0;
      } else {
        return a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
      }
    },
  }
}

