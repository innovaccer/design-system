import { addParameters, configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { primary } from './themes';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { withHTML } from '@whitespace/storybook-addon-html/react';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { jsxDecorator } from 'storybook-addon-jsx';
import { docPage } from '@/utils/docPage';
import '../css';

// Option defaults:
addParameters({
  options: {
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    isFullscreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,
    /**
     * where to show the addon panel
     * @type {('bottom'|'right')}
     */
    panelPosition: 'bottom',
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\/|\./,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: /\|/,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: true,
    /**
     * show/hide tool bar
     * @type {Boolean}
     */
    isToolshown: true,
    /**
     * theme storybook, see link below
     */
    theme: primary,
    /**
     * function to sort stories in the tree view
     * common use is alphabetical `(a, b) => a[1].id.localeCompare(b[1].id)`
     * if left undefined, then the order in which the stories are imported will
     * be the order they display
     * @type {Function}
     */
    storySort: (a, b) => {
      if(a[1].kind === b[1].kind) {
        if(a[1].story === 'All') return 0;
        if(b[1].story === 'All') return 1;
        return 0;
      } else {
        return a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
      }
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  docs: {
    container: DocsContainer,
    page: docPage,
    docPage: {}
  },
});

const infoOptions = {
  inline: true,
  header: false,
  source: false,
  propTables: false,
  styles: {
    infoStory: {
      padding: '20px 40px'
    },
    jsxInfoContent: {
      borderTop: '1px solid #eee',
      margin: '20px 0 0 0'
    },
    source: {
      h1: {
        margin: '20px 0 0 0',
        padding: '0 0 5px 0',
        fontSize: '16px',
        borderBottom: 'none',
        color: 'silver',
        fontWeight: 'normal',
        display: 'none'
      }
    }
  }
};

addDecorator(jsxDecorator);

addDecorator(withKnobs);

const CenterDecorator = storyFn => {
  const Com = storyFn();
  return Com;
};
addDecorator(withHTML);
addDecorator(withA11y);
addDecorator(CenterDecorator);
addDecorator(withInfo(infoOptions));

configure(require.context('../core/components', true, /\.story\.(js|tsx)$/), module);
