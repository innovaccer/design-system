import * as React from 'react';
import { Avatar, Row, Column, Text, Icon } from '@/index';

export const states = () => {
  return (
    <Row>
      <Column className="d-flex align-items-center flex-column">
        <Avatar appearance="primary" firstName="John" lastName="Doe" role="button" tabIndex={0} aria-label="John Doe" />
        <Text appearance="subtle" className="mt-6">
          Default
        </Text>
      </Column>
      <Column className="d-flex align-items-center flex-column">
        <Avatar
          appearance="primary"
          firstName="John"
          lastName="Doe"
          disabled={true}
          tooltipSuffix="(Deactivated)"
          status={
            <Icon
              className="cursor-not-allowed"
              name="info_outline"
              type="outlined"
              appearance="subtle"
              size={12}
              aria-hidden="true"
            />
          }
        />
        <Text appearance="subtle" className="mt-6">
          Disabled
        </Text>
      </Column>
    </Row>
  );
};

export default {
  title: 'Components/Avatar/Avatar/States',
  component: Avatar,
  parameters: {
    docs: {
      docPage: {
        title: 'Avatar',
      },
    },
  },
};
