import type { Preview } from '@storybook/react';
import '../css';
import { DocsContainer } from '@storybook/blocks';
import { docPage } from '../core/utils/docPage';
import { primary } from './themes';
import './docPage.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';


const preview: Preview = {
  
  parameters: {
    docs: {
      container: DocsContainer,
      page: docPage,
      theme: primary,
      // story: { inline: true }, // render the story in an iframe
      // canvas: { sourceState: 'shown' }, // start with the source open
      // source: { type: 'code' }, // forces the raw source code (rather than the rendered JSX).
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    a11y: {
      element: '#root',
      manual: false,
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    options: {
      storySort: {
        order: [],
        locales: 'en-US',
        method: 'alphabetical',
      },
    }
  }
};

export default preview;
