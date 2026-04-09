import * as React from 'react';
import { Avatar, Row, Column, Text, Chip, Icon } from '@/index';

export const States = () => {
  const [showSuffix, setShowSuffix] = React.useState(false);
  const [showStatus, setShowStatus] = React.useState(false);
  const [showPresence, setShowPresence] = React.useState(false);

  const handleSuffixToggle = () => setShowSuffix(!showSuffix);
  const handleStatusToggle = () => setShowStatus(!showStatus);
  const handlePresenceToggle = () => setShowPresence(!showPresence);

  const suffix = showSuffix ? '(Deactivated)' : undefined;
  const presence = showPresence ? 'active' : undefined;
  const statusNode = showStatus ? <Icon name="check" appearance="white" size={12} /> : undefined;

  return (
    <div className="d-flex flex-column" style={{ gap: '32px' }}>
      <Row>
        <Column className="d-flex align-items-center flex-column">
          <Avatar
            appearance="primary"
            firstName="John"
            lastName="Doe"
            role="button"
            tabIndex={0}
            aria-label="John Doe"
          />
          <Text appearance="subtle" className="mt-6">
            Default
          </Text>
        </Column>
        <Column className="d-flex align-items-center flex-column">
          <Avatar appearance="primary" firstName="John" lastName="Doe" disabled={true} tooltipSuffix="(Deactivated)" />
          <Text appearance="subtle" className="mt-6">
            Disabled
          </Text>
        </Column>
      </Row>

      <div className="d-flex flex-column" style={{ gap: '16px' }}>
        <Text weight="strong" size="large">
          Disabled with Tooltips
        </Text>

        <div className="d-flex" style={{ gap: '8px', marginBottom: '16px' }}>
          <Chip
            label="Toggle Suffix"
            name="suffix"
            type="selection"
            selected={showSuffix}
            onClick={handleSuffixToggle}
          />
          <Chip
            label="Toggle Status"
            name="status"
            type="selection"
            selected={showStatus}
            onClick={handleStatusToggle}
          />
          <Chip
            label="Toggle Presence"
            name="presence"
            type="selection"
            selected={showPresence}
            onClick={handlePresenceToggle}
          />
        </div>

        <Row>
          <Column className="d-flex align-items-center flex-column">
            <Avatar
              disabled={true}
              firstName="John"
              lastName="Doe"
              tooltipSuffix={suffix}
              presence={presence}
              status={statusNode}
            />
            <Text appearance="subtle" className="mt-6">
              Initials Round
            </Text>
          </Column>
          <Column className="d-flex align-items-center flex-column">
            <Avatar
              disabled={true}
              firstName="John"
              lastName="Doe"
              shape="square"
              tooltipSuffix={suffix}
              presence={presence}
              status={statusNode}
            />
            <Text appearance="subtle" className="mt-6">
              Initials Square
            </Text>
          </Column>
          <Column className="d-flex align-items-center flex-column">
            <Avatar disabled={true} tooltipSuffix={suffix} presence={presence} status={statusNode}>
              <Avatar.Icon name="person" />
            </Avatar>
            <Text appearance="subtle" className="mt-6">
              Icon Round
            </Text>
          </Column>
          <Column className="d-flex align-items-center flex-column">
            <Avatar disabled={true} shape="square" tooltipSuffix={suffix} presence={presence} status={statusNode}>
              <Avatar.Icon name="person" />
            </Avatar>
            <Text appearance="subtle" className="mt-6">
              Icon Square
            </Text>
          </Column>
          <Column className="d-flex align-items-center flex-column">
            <Avatar
              disabled={true}
              size="micro"
              firstName="John"
              lastName="Doe"
              tooltipSuffix={suffix}
              presence={presence}
              status={statusNode}
            />
            <Text appearance="subtle" className="mt-6">
              Micro Round
            </Text>
          </Column>
        </Row>
      </div>
    </div>
  );
};

const customCode = `() => {
  const [showSuffix, setShowSuffix] = React.useState(false);
  const [showStatus, setShowStatus] = React.useState(false);
  const [showPresence, setShowPresence] = React.useState(false);

  const handleSuffixToggle = () => setShowSuffix(!showSuffix);
  const handleStatusToggle = () => setShowStatus(!showStatus);
  const handlePresenceToggle = () => setShowPresence(!showPresence);

  const suffix = showSuffix ? '(Deactivated)' : undefined;
  const presence = showPresence ? 'active' : undefined;
  const statusNode = showStatus ? <Icon name="check" appearance="white" size={12} /> : undefined;

  return (
    <div className="d-flex flex-column" style={{ gap: '32px' }}>
      <Row>
        <Column className="d-flex align-items-center flex-column">
          <Avatar
            appearance="primary"
            firstName="John"
            lastName="Doe"
            role="button"
            tabIndex={0}
            aria-label="John Doe"
          />
          <Text appearance="subtle" className="mt-6">
            Default
          </Text>
        </Column>
        <Column className="d-flex align-items-center flex-column">
          <Avatar appearance="primary" firstName="John" lastName="Doe" disabled={true} tooltipSuffix="(Deactivated)" />
          <Text appearance="subtle" className="mt-6">
            Disabled
          </Text>
        </Column>
      </Row>

      <div className="d-flex flex-column" style={{ gap: '16px' }}>
        <Text weight="strong" size="large">
          Disabled with Tooltips
        </Text>

        <div className="d-flex" style={{ gap: '8px', marginBottom: '16px' }}>
          <Chip
            label="Toggle Suffix"
            name="suffix"
            type="selection"
            selected={showSuffix}
            onClick={handleSuffixToggle}
          />
          <Chip
            label="Toggle Status"
            name="status"
            type="selection"
            selected={showStatus}
            onClick={handleStatusToggle}
          />
          <Chip
            label="Toggle Presence"
            name="presence"
            type="selection"
            selected={showPresence}
            onClick={handlePresenceToggle}
          />
        </div>

        <Row>
          <Column className="d-flex align-items-center flex-column">
            <Avatar
              disabled={true}
              firstName="John"
              lastName="Doe"
              tooltipSuffix={suffix}
              presence={presence}
              status={statusNode}
            />
            <Text appearance="subtle" className="mt-6">
              Initials Round
            </Text>
          </Column>
          <Column className="d-flex align-items-center flex-column">
            <Avatar
              disabled={true}
              firstName="John"
              lastName="Doe"
              shape="square"
              tooltipSuffix={suffix}
              presence={presence}
              status={statusNode}
            />
            <Text appearance="subtle" className="mt-6">
              Initials Square
            </Text>
          </Column>
          <Column className="d-flex align-items-center flex-column">
            <Avatar disabled={true} tooltipSuffix={suffix} presence={presence} status={statusNode}>
              <Avatar.Icon name="person" />
            </Avatar>
            <Text appearance="subtle" className="mt-6">
              Icon Round
            </Text>
          </Column>
          <Column className="d-flex align-items-center flex-column">
            <Avatar disabled={true} shape="square" tooltipSuffix={suffix} presence={presence} status={statusNode}>
              <Avatar.Icon name="person" />
            </Avatar>
            <Text appearance="subtle" className="mt-6">
              Icon Square
            </Text>
          </Column>
          <Column className="d-flex align-items-center flex-column">
            <Avatar
              disabled={true}
              size="micro"
              firstName="John"
              lastName="Doe"
              tooltipSuffix={suffix}
              presence={presence}
              status={statusNode}
            />
            <Text appearance="subtle" className="mt-6">
              Micro Round
            </Text>
          </Column>
        </Row>
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Avatar/Avatar/States',
  component: Avatar,
  parameters: {
    docs: {
      docPage: {
        title: 'Avatar',
        customCode,
      },
    },
  },
};
