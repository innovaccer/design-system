import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { Text, Icon, MetaList } from '@/index';
import styles from '@css/components/chat.module.css';

export type StatusType = 'failed' | 'sending' | 'sent' | 'read' | 'urgent';

export interface StatusProps extends BaseProps {
  type: StatusType;
  time?: string | number;
  readText?: string;
  failedText?: string;
  sendingText?: string;
}

export const Status = (props: StatusProps) => {
  const { type, time, className, readText = 'Read', failedText = 'Click to retry', sendingText = 'Sending..' } = props;

  const baseProps = extractBaseProps(props);

  const StatusClass = classNames(
    {
      ['d-flex align-items-center mt-3']: true,
    },
    className
  );

  const TextClass = classNames(
    {
      [styles['ChatMessage-status']]: true,
    },
    className
  );

  const getTime = (t: string | number) => {
    if (typeof t === 'number') {
      const d = new Date(t);
      const hours = d.getHours();
      const minutes = d.getMinutes();

      const AMPM = hours < 12 ? 'AM' : 'PM';
      const hrs = hours % 12 || 12;

      return `${hrs}:${minutes} ${AMPM}`;
    }

    return t;
  };

  switch (type) {
    case 'failed':
      return (
        <div {...baseProps} className={StatusClass}>
          <Icon name="error" type="outlined" appearance="destructive" />
          <Text appearance="destructive" size="small" className="ml-1">
            Failed
          </Text>
          <MetaList list={[{ label: failedText }]} seperator={true} />
        </div>
      );

    case 'urgent':
      return (
        <div {...baseProps} className={StatusClass}>
          <Icon name="notification_important" type="outlined" appearance="destructive" />
          <Text appearance="destructive" size="small" className="ml-1">
            Urgent
          </Text>
          {time && <MetaList list={[{ label: getTime(time) }]} seperator={true} />}
        </div>
      );

    case 'read':
      return (
        <div {...baseProps} className={StatusClass}>
          {time && (
            <Text appearance="subtle" size="small">
              {getTime(time)}
            </Text>
          )}
          <MetaList list={[{ label: readText }]} seperator={true} />
        </div>
      );

    case 'sending':
      return (
        <Text {...baseProps} appearance="subtle" size="small" className={TextClass}>
          {sendingText}
        </Text>
      );

    case 'sent':
      return (
        <>
          {time && (
            <Text {...baseProps} appearance="subtle" size="small" className={TextClass}>
              {getTime(time)}
            </Text>
          )}
        </>
      );

    default:
      return null;
  }
};

Status.displayName = 'Status';
export default Status;
