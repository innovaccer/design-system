import * as React from 'react';
import { number } from '@storybook/addon-knobs';
import addons from '@storybook/addons';
import { action } from '@storybook/addon-actions';

import Tabs from './Tabs';
import Tab from './Tab';
import Text from '@/components/atoms/text';
import Badge from '@/components/atoms/badge';
import classNames from 'classnames';

const emitter = (type: any, options: any) => addons.getChannel().emit(type, options);

const updateKnob = (name: any, value: any) => (
  emitter('storybookjs/knobs/change', { name, value })
);

// CSF format story
export const all = () => {
  const activeTab = number(
    'activeTab',
    1
  );

  const tabIconClass = (tabIndex:number) => {
    return classNames({
      ['material-icons']: true,
      ['Tab-icon']: true,
      ['Tab-icon--active']: activeTab === tabIndex
    });
  };

  const onTabChangeHandler = (tabIndex: number) => {
    updateKnob('activeTab', tabIndex);
    return action(`tab-change: ${tabIndex}`)();
  };

  return (
    <Tabs
      activeTab={activeTab}
      onTabChange={onTabChangeHandler}
    >
      <Tab
        label={(
          <>
            <div className="Tab-count">
              <Badge appearance="secondary">2</Badge>
            </div>
            <Text appearance={activeTab !== 0 ? 'subtle' : undefined}>Tab(Recommended)</Text>
          </>
        )}
      >
        <div>
          First Tab
        </div>
      </Tab>
      <Tab
        label={(
          <>
            <i className={tabIconClass(1)}>call_received</i>
            <Text appearance={activeTab !== 1 ? 'subtle' : undefined}>All</Text>
          </>
        )}
      >
        <div>
          Second Tab
        </div>
      </Tab>
      <Tab
        label={(
          <>
            <Text appearance={activeTab !== 2 ? 'subtle' : undefined}>Extras</Text>
          </>
        )}
      >
        <div>
          Third Tab
        </div>
      </Tab>
    </Tabs>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Tabs' };
