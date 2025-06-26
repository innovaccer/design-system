import * as React from 'react';
import { AccentAppearance } from '@/common.type';
import styles from '@css/components/chatBubble.module.css';
import { Text, Avatar, Row, Column } from '@/index';
import classNames from 'classnames';
import { BaseProps } from '@/utils/types';

export interface ChatAvatarProps {
  appearance?: AccentAppearance;
  firstName?: string;
  lastName?: string;
  role?: string;
  tabIndex?: number;
  icon?: React.ReactNode;
  image?: React.ReactNode;
}

export interface IncomingOptionProps extends BaseProps {
  children?: React.ReactNode;
  time?: string | number;
  metaData?: string;
  actionBar?: () => React.ReactElement;
  urgentMessage?: () => React.ReactElement;
  avatarData?: ChatAvatarProps;
  showAvatar?: boolean;
}

const MetaSeparator = () => (
  <span className={styles['ChatBubble-separator']} data-test="DesignSystem-IncomingChatBubble-Separator" />
);

export const IncomingBubble = (props: IncomingOptionProps) => {
  const { time, metaData, urgentMessage, avatarData = {}, showAvatar, children, actionBar, ...rest } = props;
  const { image, icon, firstName, lastName } = avatarData;
  const fullName = `${firstName ? firstName : ''} ${lastName ? lastName : ''}`;

  const [showActionBar, setShowActionBar] = React.useState(false);

  const showMetaRow = firstName || lastName || time || metaData || urgentMessage;

  const metaDataClass = classNames({
    ['d-flex align-items-center mb-3']: true,
    [styles['ChatBubble-metaData--incoming']]: showAvatar,
  });

  return (
    <div
      data-test="DesignSystem-ChatBubble-IncomingWrapper"
      {...rest}
      role="group"
      aria-labelledby="chat-bubble-header"
    >
      {showMetaRow && (
        <Row className={metaDataClass} data-test="DesignSystem-IncomingChatBubble-MetaDataWrapper">
          {[
            fullName && (firstName || lastName) && (
              <Text key="fullName" weight="medium" size="small" data-test="DesignSystem-IncomingChatBubble-Name">
                {fullName}
              </Text>
            ),
            time && (
              <Text
                key="time"
                appearance="subtle"
                weight="medium"
                size="small"
                data-test="DesignSystem-IncomingChatBubble-Time"
                aria-label={`Time: ${time}`}
              >
                {time}
              </Text>
            ),
            metaData && (
              <Text
                key="metaData"
                appearance="subtle"
                weight="medium"
                size="small"
                data-test="DesignSystem-IncomingChatBubble-MetaData"
                aria-label={metaData}
              >
                {metaData}
              </Text>
            ),
            urgentMessage && (
              <div
                key="urgentMessage"
                data-test="DesignSystem-IncomingChatBubble-UrgentMessage"
                role="alert"
                aria-live="assertive"
              >
                {urgentMessage()}
              </div>
            ),
          ]
            .filter(Boolean)
            .map((element, index, array) => (
              <React.Fragment key={index}>
                {element}
                {index < array.length - 1 && <MetaSeparator key={`separator-${index}`} />}
              </React.Fragment>
            ))}
        </Row>
      )}
      <Row
        onMouseEnter={() => setShowActionBar(true)}
        onMouseLeave={() => setShowActionBar(false)}
        data-test="DesignSystem-IncomingChatBubble-Wrapper"
      >
        <Column className={styles['ChatBubble-boxWrapper']} data-test="DesignSystem-IncomingChatBubble-ChatBoxWrapper">
          {showAvatar && (
            <Avatar
              data-test="DesignSystem-IncomingChatBubble-Avatar"
              className="mr-4"
              {...avatarData}
              withTooltip={false}
              aria-label={`Avatar of ${fullName}`}
            >
              {image || icon}
            </Avatar>
          )}
          <div className={styles['ChatBubble-box--incoming']} data-test="DesignSystem-IncomingChatBubble-ChatBox">
            {children}
          </div>
        </Column>
        <Column className={styles['ChatBubble-actionBarWrapper']}>
          {actionBar && showActionBar && (
            <div
              data-test="DesignSystem-IncomingChatBubble-ActionBar"
              className={styles['ChatBubble-actionBar--incoming']}
              role="toolbar"
              aria-label="Action bar"
            >
              {actionBar()}
            </div>
          )}
        </Column>
      </Row>
    </div>
  );
};

IncomingBubble.displayName = 'IncomingBubble';
export default IncomingBubble;
