import * as React from 'react';
import { Icon, Text, Row, Column } from '@/index';
import styles from '@css/components/chatBubble.module.css';
import classNames from 'classnames';
import { BaseProps } from '@/utils/types';

export interface OutgoingOptionProps extends BaseProps {
  metaData?: string;
  status?: boolean;
  failed?: boolean;
  children?: React.ReactNode;
  time?: string | number;
  actionBar?: () => React.ReactElement;
  urgentMessage?: () => React.ReactElement;
  failedMessage?: () => React.ReactElement;
}

const ChatBox = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <div className={styles['ChatBubble-box--outgoing']} data-test="DesignSystem-OutgoingChatBubble-ChatBox">
      {children}
    </div>
  );
};

const MetaSeparator = () => (
  <span className={styles['ChatBubble-separator']} data-test="DesignSystem-OutgoingChatBubble-Separator" />
);

export const OutgoingBubble = (props: OutgoingOptionProps) => {
  const { children, status, actionBar, time, metaData, urgentMessage, failed, failedMessage, className, ...rest } =
    props;

  const [showActionBar, setShowActionBar] = React.useState(false);

  const chatBoxClass = classNames({
    [styles['ChatBubble-box']]: true,
    [styles['ChatBubble-box--noSuccess']]: !status,
  });

  const chatBoxWrapperClass = classNames('d-flex', 'align-items-end', 'w-100', className);

  const showMetaRow = time || metaData || urgentMessage || (failed && failedMessage);

  const metaRowClass = classNames({
    ['d-flex justify-content-end align-items-center mb-3']: showMetaRow,
  });

  return (
    <div
      className={chatBoxWrapperClass}
      data-test="DesignSystem-ChatBubble-OutgoingWrapper"
      {...rest}
      role="group"
      aria-labelledby="chat-bubble-header"
    >
      <div className={chatBoxClass}>
        {showMetaRow && (
          <Row className={metaRowClass}>
            {failed && failedMessage && (
              <div data-test="DesignSystem-OutgoingChatBubble-FailedMessage" role="alert" aria-live="assertive">
                {failedMessage()}
              </div>
            )}
            {!failed && (
              <>
                {[
                  time && (
                    <Text
                      key="time"
                      appearance="subtle"
                      weight="medium"
                      size="small"
                      data-test="DesignSystem-OutgoingChatBubble-Time"
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
                      data-test="DesignSystem-OutgoingChatBubble-Metadata"
                      aria-label={metaData}
                    >
                      {metaData}
                    </Text>
                  ),
                  urgentMessage && (
                    <div
                      key="urgentMessage"
                      data-test="DesignSystem-OutgoingChatBubble-UrgentMessage"
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
              </>
            )}
          </Row>
        )}
        <Row
          className="d-flex justify-content-end"
          onMouseEnter={() => setShowActionBar(true)}
          onMouseLeave={() => setShowActionBar(false)}
          data-test="DesignSystem-OutgoingChatBubble-Wrapper"
        >
          <Column className={styles['ChatBubble-actionBarWrapper']}>
            {actionBar && showActionBar && (
              <div
                className={styles['ChatBubble-actionBar--outgoing']}
                data-test="DesignSystem-OutgoingChatBubble-ActionBar"
                role="toolbar"
                aria-label="Action bar"
              >
                {actionBar()}
              </div>
            )}
          </Column>

          <Column className={styles['ChatBubble-boxWrapper']} data-test="DesignSystem-OutgoingChatBubble-BoxWrapper">
            <ChatBox>{children}</ChatBox>
          </Column>
        </Row>
      </div>

      {status && !failed && (
        <Icon
          name="check_circle"
          appearance="success"
          type="rounded"
          className="ml-3"
          data-test="DesignSystem-OutgoingChatBubble-Status"
          aria-label="Message sent successfully"
        />
      )}
    </div>
  );
};

OutgoingBubble.displayName = 'OutgoingBubble';
export default OutgoingBubble;
