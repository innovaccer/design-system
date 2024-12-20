import * as React from 'react';
// import { OutgoingOptionProps } from '../ChatBubble';
// import { Popover, Text, Icon } from '@/index';
import { Text } from '@/index';

// interface OutgoingTriggerProps {
//   children?: React.ReactNode;
// }

// const OutgoingBubbleTrigger = (props: OutgoingTriggerProps) => {
//   const { children } = props;
//   return <div data-test="DesignSystem-OutgoingBubble">{children}</div>;
// };

export const OutgoingBubble = (props: any) => {
  // const { children, actionBar, status, time, metaData, urgentMessage, failedMessage } = props;

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        {/* {time && <Text>{time}</Text>}
        {metaData && <Text>{metaData}</Text>} */}
        {/* <Text>bubble bubble</Text> */}
        <p>ddsv</p>
        {/* {urgentMessage}
        {failedMessage} */}
      </div>
      {/* <Popover position="left" on="hover" trigger={<OutgoingBubbleTrigger>{children}</OutgoingBubbleTrigger>}>
        <>{actionBar}</>
      </Popover> */}
      {/* {status && <Icon appearance="success" name="done" />} */}
    </div>
  );
};

export default OutgoingBubble;
