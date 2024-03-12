import React from 'react';
import { Button, Popover, Text, Listbox } from '@/index';

export const all = () => {
  // const triggerRef = React.useRef();

  // const Trigger = () => {
  //   return <Button icon="places" ref={triggerRef}></Button>;
  // };

  return (
    <div>
      <Popover position="bottom-start" on="click" trigger={<Button icon="places" />}>
        <div className="p-5 bg-secondary-lighter">
          <Text appearance="subtle">Actions</Text>
          <Listbox>
            <Popover position="right" on="hover" trigger={<Listbox.Item>Edit</Listbox.Item>}>
              <div className="p-5">
                <Listbox>
                  <Listbox.Item>Slack</Listbox.Item>
                  <Listbox.Item>Alexa</Listbox.Item>
                  <Listbox.Item>Google</Listbox.Item>
                </Listbox>
              </div>
            </Popover>

            <Listbox.Item>Copy</Listbox.Item>
            <Listbox.Item>Share</Listbox.Item>
          </Listbox>
          <Text appearance="subtle">Bots</Text>
          <Listbox>
            <Listbox.Item>Slack</Listbox.Item>
            <Listbox.Item>Alexa</Listbox.Item>
            <Listbox.Item>Google</Listbox.Item>
          </Listbox>
        </div>
      </Popover>
    </div>
  );
};

export default {
  title: 'Components/Menu/All',
  // component: Menu,
  parameters: {
    docs: {
      docPage: {
        title: 'Menu',
      },
    },
  },
};
