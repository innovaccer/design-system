import * as React from 'react';
import { number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import TabsWrapper from '../TabsWrapper';
import Tab from '../Tab';
import Text from '@/components/atoms/text';
import Badge from '@/components/atoms/badge';
import classNames from 'classnames';
import { updateKnob } from '@/utils/storybookEventEmitter';

// CSF format story
export const all = () => {
  const activeTab = number(
    'activeTab',
    1
  );

  const tabIconClass = (tabIndex: number) => {
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
    <TabsWrapper
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
    </TabsWrapper>
  );
};

export default {
  title: 'Molecules|Tabs',
  component: TabsWrapper,
  subcomponents: { Tab }
};
