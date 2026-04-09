import * as React from 'react';
import { Avatar, Row, Column, Text, Chip, Icon, Tooltip } from '@/index';
import StatusImage from './assets/status-image.png';

export const Disabled = () => {
  const [showSuffix, setShowSuffix] = React.useState(false);
  const [showStatus, setShowStatus] = React.useState(false);

  const handleSuffixToggle = () => setShowSuffix(!showSuffix);
  const handleStatusToggle = () => setShowStatus(!showStatus);

  const suffix = showSuffix ? '(Deactivated)' : undefined;
  const statusNode = showStatus ? (
    <Tooltip tooltip="DND" position="top">
      <img width="14px" alt="DND" src={StatusImage} />
    </Tooltip>
  ) : undefined;

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
        </div>

        <Row>
          <Column className="d-flex align-items-center flex-column">
            <Avatar
              disabled={true}
              firstName="John"
              lastName="Doe"
              tooltipSuffix={suffix}
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
              status={statusNode}
            />
            <Text appearance="subtle" className="mt-6">
              Initials Square
            </Text>
          </Column>
          <Column className="d-flex align-items-center flex-column">
            <Avatar disabled={true} tooltipSuffix={suffix} status={statusNode}>
              <Avatar.Icon name="person" />
            </Avatar>
            <Text appearance="subtle" className="mt-6">
              Icon Round
            </Text>
          </Column>
          <Column className="d-flex align-items-center flex-column">
            <Avatar disabled={true} shape="square" tooltipSuffix={suffix} status={statusNode}>
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
              status={statusNode}
            />
            <Text appearance="subtle" className="mt-6">
              Micro Round
            </Text>
          </Column>
          <Column className="d-flex align-items-center flex-column">
            <Avatar
              disabled={true}
              size="micro"
              shape="square"
              firstName="John"
              lastName="Doe"
              tooltipSuffix={suffix}
              status={statusNode}
            />
            <Text appearance="subtle" className="mt-6">
              Micro Square
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

  const handleSuffixToggle = () => setShowSuffix(!showSuffix);
  const handleStatusToggle = () => setShowStatus(!showStatus);

  const suffix = showSuffix ? '(Deactivated)' : undefined;
  const statusNode = showStatus ? (
    <Tooltip tooltip="DND" position="top">
      <img width="14px" alt="DND" src="static/media/core/components/atoms/avatar/__stories__/assets/status-image.png" />
    </Tooltip>
  ) : undefined;

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
        </div>

        <Row>
          <Column className="d-flex align-items-center flex-column">
            <Avatar
              disabled={true}
              firstName="John"
              lastName="Doe"
              tooltipSuffix={suffix}
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
              status={statusNode}
            />
            <Text appearance="subtle" className="mt-6">
              Initials Square
            </Text>
          </Column>
          <Column className="d-flex align-items-center flex-column">
            <Avatar disabled={true} tooltipSuffix={suffix} status={statusNode}>
              <Avatar.Icon name="person" />
            </Avatar>
            <Text appearance="subtle" className="mt-6">
              Icon Round
            </Text>
          </Column>
          <Column className="d-flex align-items-center flex-column">
            <Avatar disabled={true} shape="square" tooltipSuffix={suffix} status={statusNode}>
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
              status={statusNode}
            />
            <Text appearance="subtle" className="mt-6">
              Micro Round
            </Text>
          </Column>
          <Column className="d-flex align-items-center flex-column">
            <Avatar
              disabled={true}
              size="micro"
              shape="square"
              firstName="John"
              lastName="Doe"
              tooltipSuffix={suffix}
              status={statusNode}
            />
            <Text appearance="subtle" className="mt-6">
              Micro Square
            </Text>
          </Column>
        </Row>
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Avatar/Avatar/Disabled',
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
