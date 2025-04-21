import React from 'react';
import { AIResponse, Text, Menu } from '@/index';
import './style.css';

export const All = () => {
  /**
   *
   *  .AIResponse-menu-button {
   *    opacity: var(--opacity-12);
   *  }
   *
   *  .AIResponse-box:hover .AIResponse-menu-button {
   *    opacity: 1;
   *  }
   *
   *  .AIResponse-box .Menu-Trigger--active {
   *    opacity: 1;
   *  }
   */

  const [selectedList, setSelectedList] = React.useState({
    pin: false,
    like: false,
    dislike: false,
  });

  const metaDataRenderer = () => {
    return (
      <Text appearance="subtle" size="small" weight="medium">
        1:00 PM
      </Text>
    );
  };

  return (
    <AIResponse showAvatar={true} metaData={metaDataRenderer}>
      <AIResponse.Body>
        <Text>Hello, would you like to book an appointment with your cardiologist?</Text>
      </AIResponse.Body>

      <AIResponse.ActionBar>
        <div className="d-flex">
          <AIResponse.Button
            icon="push_pin"
            className="mr-3"
            selected={selectedList.pin}
            onClick={() => setSelectedList({ ...selectedList, pin: !selectedList.pin })}
          >
            Pin
          </AIResponse.Button>
          <AIResponse.Button icon="content_copy" iconType="rounded">
            Copy
          </AIResponse.Button>
        </div>

        <div className="d-flex align-items-center">
          <AIResponse.Button icon="sync" className="mr-3" tooltip="Regenerate" />
          <AIResponse.Button
            icon="thumb_up"
            iconType="outlined"
            className="mr-3"
            tooltip="Good Response"
            selected={selectedList.like && !selectedList.dislike}
            onClick={() => setSelectedList({ ...selectedList, like: !selectedList.like, dislike: false })}
          />
          <AIResponse.Button
            icon="thumb_down"
            iconType="outlined"
            className="mr-3"
            tooltip="Bad Response"
            selected={selectedList.dislike && !selectedList.like}
            onClick={() => setSelectedList({ ...selectedList, dislike: !selectedList.dislike, like: false })}
          />

          <Menu trigger={<Menu.Trigger className="AIResponse-menu-button" appearance="transparent" size="tiny" />}>
            <Menu.List>
              <Menu.Item>Share</Menu.Item>
              <Menu.Item>View source</Menu.Item>
              <Menu.Item>Report a problem</Menu.Item>
            </Menu.List>
          </Menu>
        </div>
      </AIResponse.ActionBar>
    </AIResponse>
  );
};

const customCode = `() => {
/**
   *
   *  .AIResponse-menu-button {
   *    opacity: var(--opacity-12);
   *  }
   *
   *  .AIResponse-box:hover .AIResponse-menu-button {
   *    opacity: 1;
   *  }
   * 
   *  .AIResponse-box .Menu-Trigger--active {
   *    opacity: 1;
   *  }
   */

  const [selectedList, setSelectedList] = React.useState({
    pin: false,
    like: false,
    dislike: false,
  });

  const metaDataRenderer = () => {
    return (
      <Text appearance="subtle" size="small" weight="medium">
        1:00 PM
      </Text>
    );
  };

  return (
    <AIResponse showAvatar={true} metaData={metaDataRenderer}>
      <AIResponse.Body>
        <Text>Hello, would you like to book an appointment with your cardiologist?</Text>
      </AIResponse.Body>

      <AIResponse.ActionBar>
        <div className="d-flex">
          <AIResponse.Button
            icon="push_pin"
            className="mr-3"
            selected={selectedList.pin}
            onClick={() => setSelectedList({ ...selectedList, pin: !selectedList.pin })}
          >
            Pin
          </AIResponse.Button>
          <AIResponse.Button icon="content_copy" iconType="rounded">Copy</AIResponse.Button>
        </div>

        <div className="d-flex align-items-center">
          <AIResponse.Button icon="sync" className="mr-3" tooltip="Regenerate" />
          <AIResponse.Button
            icon="thumb_up"
            iconType="outlined"
            className="mr-3"
            tooltip="Good Response"
            selected={selectedList.like && !selectedList.dislike}
            onClick={() => setSelectedList({ ...selectedList, like: !selectedList.like, dislike: false })}
          />
          <AIResponse.Button
            icon="thumb_down"
            iconType="outlined"
            className="mr-3"
            tooltip="Bad Response"
            selected={selectedList.dislike && !selectedList.like}
            onClick={() => setSelectedList({ ...selectedList, dislike: !selectedList.dislike, like: false })}
          />

          <Menu trigger={<Menu.Trigger className="AIResponse-menu-button" appearance="transparent" size="tiny" />}>
            <Menu.List>
              <Menu.Item>Share</Menu.Item>
              <Menu.Item>View source</Menu.Item>
              <Menu.Item>Report a problem</Menu.Item>
            </Menu.List>
          </Menu>
        </div>
      </AIResponse.ActionBar>
    </AIResponse>
        
  );
}`;

export default {
  title: 'Components/AI/AI Response/All',
  component: AIResponse,
  subcomponents: {
    'AIResponse.Button': AIResponse.Button,
    'AIResponse.ActionBar': AIResponse.ActionBar,
    'AIResponse.Body': AIResponse.Body,
  },
  parameters: {
    docs: {
      docPage: {
        title: 'AIResponse',
        customCode,
      },
    },
  },
};
