import * as React from 'react';
import { Listbox, Card, Heading, Text, Icon } from '@/index';
import { ListboxItem } from '../../listboxItem';

export const draggableItem = () => {
  const stateExamples = [
    { name: 'Default State', state: 'default' },
    { name: 'Hover Icon State', state: 'hover-icon' },
    { name: 'Focus Icon State', state: 'focus-icon' },
    { name: 'Active Icon State', state: 'active-icon' },
    { name: 'Sticky Picked State', state: 'sticky-picked' },
    { name: 'Drag Picked State', state: 'drag-picked' },
    { name: 'Disabled State', state: 'disabled' },
  ];

  return (
    <div className="w-100">
      <div className="mb-5">
        <Heading>Draggable List Item - Static States</Heading>
        <Text appearance="subtle" className="mt-4">
          All static state of list items for visual testing
        </Text>
      </div>

      <Card shadow="none">
        <div style={{ pointerEvents: 'none', display: 'flex', gap: '24px' }}>
          <div className="flex-grow-1">
            <Listbox type="description" draggable={true} showDivider={true} aria-label="Draggable interaction state examples">
              {stateExamples.map((item, key) => {
                const labelId = `draggable-state-item-${key}`;
                return (
                  <Listbox.Item
                    key={key + 1}
                    id={key + 1}
                    data-force-state={item.state !== 'default' ? item.state : undefined}
                    disabled={item.state === 'disabled'}
                  >
                  <div className="d-flex align-items-center w-100 justify-content-between">
                    <Text id={labelId}>{item.name}</Text>
                  </div>
                  </Listbox.Item>
                );
              })}
            </Listbox>
          </div>

          <div className="flex-grow-1">
            <Listbox type="option" draggable={true} showDivider={true} aria-label="Draggable selected interaction state examples">
              {stateExamples.map((item, key) => {
                const labelId = `draggable-selected-state-item-${key}`;
                return (
                  <Listbox.Item
                    key={key + 1}
                    id={key + 1}
                    data-force-state={item.state !== 'default' ? item.state : undefined}
                    disabled={item.state === 'disabled'}
                    selected={true}
                  >
                  <div className="d-flex align-items-center w-100 justify-content-between">
                    <Text id={labelId}>{item.name}</Text>
                  </div>
                  </Listbox.Item>
                );
              })}
            </Listbox>
          </div>
        </div>
      </Card>
    </div>
  );
};

const customCode = `() => {
  const stateExamples = [
    { name: 'Default State', state: 'default' },
    { name: 'Hover Icon State', state: 'hover-icon' },
    { name: 'Focus Icon State', state: 'focus-icon' },
    { name: 'Active Icon State', state: 'active-icon' },
    { name: 'Sticky Picked State', state: 'sticky-picked' },
    { name: 'Drag Picked State', state: 'drag-picked' },
    { name: 'Disabled State', state: 'disabled' },
  ];

  return (
    <div className="w-100">
      <div className="mb-5">
        <Heading>Draggable List Item - Static States</Heading>
        <Text appearance="subtle" className="mt-4">
          All static state of list items for visual testing
        </Text>
      </div>

      <Card shadow="none">
        <div style={{ pointerEvents: 'none', display: 'flex', gap: '24px' }}>
          <div className="flex-grow-1">
            <Listbox type="description" draggable={true} showDivider={true} aria-label="Draggable interaction state examples">
              {stateExamples.map((item, key) => {
                const labelId = 'draggable-state-item-' + key;
                return (
                  <Listbox.Item
                    key={key + 1}
                    id={key + 1}
                    data-force-state={item.state !== 'default' ? item.state : undefined}
                    disabled={item.state === 'disabled'}
                  >
                  <div className="d-flex align-items-center w-100 justify-content-between">
                    <Text id={labelId}>{item.name}</Text>
                  </div>
                  </Listbox.Item>
                );
              })}
            </Listbox>
          </div>

          <div className="flex-grow-1">
            <Listbox type="option" draggable={true} showDivider={true} aria-label="Draggable selected interaction state examples">
              {stateExamples.map((item, key) => {
                const labelId = 'draggable-selected-state-item-' + key;
                return (
                  <Listbox.Item
                    key={key + 1}
                    id={key + 1}
                    data-force-state={item.state !== 'default' ? item.state : undefined}
                    disabled={item.state === 'disabled'}
                    selected={true}
                  >
                  <div className="d-flex align-items-center w-100 justify-content-between">
                    <Text id={labelId}>{item.name}</Text>
                  </div>
                  </Listbox.Item>
                );
              })}
            </Listbox>
          </div>
        </div>
      </Card>
    </div>
  );
}`;

export default {
  title: 'Components/Listbox/States - List Item/Draggable Item',
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
