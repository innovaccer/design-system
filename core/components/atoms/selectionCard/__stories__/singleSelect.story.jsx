import * as React from 'react';
import { SelectionCard, Row, Column, Icon, Text } from '@/index';

// CSF format story
export const singleSelect = () => {
  return (
    <div>
      <Row>
        <Column>
          <SelectionCard id="item1" className="pl-5 py-6 pr-6 d-flex m-5">
            <Icon size={20} name="transfer_within_a_station" />
            <div className="ml-5">
              <Text weight="strong">ADT - Admit, Discharge, Transfer</Text>
              <br />
              <Text appearance="subtle">ENS (Encounter notification system) data</Text>
            </div>
          </SelectionCard>
        </Column>
        <Column>
          <SelectionCard id="item2" className="pl-5 py-6 pr-6 d-flex m-5">
            <Icon size={20} name="calendar_month" />
            <div className="ml-5">
              <Text weight="strong">Appointments</Text>
              <br />
              <Text appearance="subtle">PMS (Practice management system)</Text>
            </div>
          </SelectionCard>
        </Column>
      </Row>
      <Row>
        <Column>
          <SelectionCard id="item3" className="pl-5 py-6 pr-6 d-flex m-5">
            <Icon size={20} name="receipt_long" />
            <div className="ml-5">
              <Text weight="strong">Billing</Text>
              <br />
              <Text appearance="subtle">Billing and charges</Text>
            </div>
          </SelectionCard>
        </Column>
        <Column>
          <SelectionCard id="item4" className="pl-5 py-6 pr-6 d-flex m-5">
            <Icon size={20} name="account_balance" />
            <div className="ml-5">
              <Text weight="strong">Claims</Text>
              <br />
              <Text appearance="subtle">Medical, pharmacy, attribution</Text>
            </div>
          </SelectionCard>
        </Column>
      </Row>
    </div>
  );
};

export default {
  title: 'Card/Selection Card/Single Select',
  component: SelectionCard,
  parameters: {
    docs: {
      docPage: {
        title: 'SelectionCard',
      },
    },
  },
};
