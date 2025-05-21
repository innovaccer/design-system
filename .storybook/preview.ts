import type { Preview } from '@storybook/react-webpack5';
import '../css';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { docPage } from '../core/utils/docPage';
import { primary } from './themes';
import './docPage.css';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';


const preview: Preview = {
  parameters: {
    docs: {
      container: DocsContainer,
      page: docPage,

      // story: { inline: true }, // render the story in an iframe
      // canvas: { sourceState: 'shown' }, // start with the source open
      // source: { type: 'code' }, // forces the raw source code (rather than the rendered JSX).
      theme: primary,

      codePanel: true
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    a11y: {
      context: '#root',
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
  },

  tags: ['autodocs']
};

export default preview;
