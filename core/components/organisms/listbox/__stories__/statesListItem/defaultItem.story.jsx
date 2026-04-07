import * as React from 'react';
import { Listbox, Card, Heading, Text, Icon } from '@/index';
import { ListboxItem } from '../../listboxItem';

export const defaultItem = () => {
  const stateExamples = [
    { name: 'Default State', state: 'default' },
    { name: 'Hover State', state: 'hover' },
    { name: 'Focus State', state: 'focus' },
    { name: 'Active State', state: 'active' },
    { name: 'Selected State', state: 'selected' },
    { name: 'Activated State', state: 'activated' },
    { name: 'Disabled State', state: 'disabled' },
  ];

  return (
    <div className="w-75">
      <div className="mb-5">
        <Heading>Default List Item - Static States</Heading>
        <Text appearance="subtle" className="mt-4">
          All static state of list items for visual testing
        </Text>
      </div>

      <Card shadow="none">
        <div style={{ pointerEvents: 'none' }}>
          <Listbox type="option" draggable={false} showDivider={true} aria-label="Default interaction state examples">
            {stateExamples.map((item, key) => {
              const labelId = `default-state-item-${key}`;
              return (
                <Listbox.Item
                  key={key + 1}
                  id={key + 1}
                  data-force-state={item.state !== 'default' ? item.state : undefined}
                  disabled={item.state === 'disabled'}
                  selected={item.state === 'selected'}
                  type={item.state === 'activated' ? 'resource' : 'option'}
                >
                  <div className="d-flex align-items-center w-100 justify-content-between">
                    <Text id={labelId}>{item.name}</Text>
                  </div>
                </Listbox.Item>
              );
            })}
          </Listbox>
        </div>
      </Card>
    </div>
  );
};

const customCode = `() => {
  const stateExamples = [
    { name: 'Default State', state: 'default' },
    { name: 'Hover State', state: 'hover' },
    { name: 'Focus State', state: 'focus' },
    { name: 'Active State', state: 'active' },
    { name: 'Selected State', state: 'selected' },
    { name: 'Activated State', state: 'activated' },
    { name: 'Disabled State', state: 'disabled' },
  ];

  return (
    <div className="w-75">
      <div className="mb-5">
        <Heading>Default List Item - Static States</Heading>
        <Text appearance="subtle" className="mt-4">
          All static state of list items for visual testing
        </Text>
      </div>

      <Card shadow="none">
        <div style={{ pointerEvents: 'none' }}>
          <Listbox type="option" draggable={false} showDivider={true} aria-label="Default interaction state examples">
            {stateExamples.map((item, key) => {
              const labelId = 'default-state-item-' + key;
              return (
                <Listbox.Item
                  key={key + 1}
                  id={key + 1}
                  data-force-state={item.state !== 'default' ? item.state : undefined}
                  disabled={item.state === 'disabled'}
                  selected={item.state === 'selected'}
                  type={item.state === 'activated' ? 'resource' : 'option'}
                >
                  <div className="d-flex align-items-center w-100 justify-content-between">
                    <Text id={labelId}>{item.name}</Text>
                  </div>
                </Listbox.Item>
              );
            })}
          </Listbox>
        </div>
      </Card>
    </div>
  );
}`;

export default {
  title: 'Components/Listbox/States - List Item/Default Item',
  component: Listbox,
  subcomponents: { Listbox, ListboxItem },
  parameters: {
    docs: {
      docPage: {
        title: 'Listbox',
        customCode,
      },
    },
  },
};
