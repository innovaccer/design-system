import * as React from 'react';
import { SelectionCard, Row, Column, Icon, Text } from '@/index';

// CSF format story
export const singleSelect = () => {
  return (
    <SelectionCard multiSelect={false} selectedList={['item1']}>
      <Row>
        <Column>
          <SelectionCard.Item id="item1" className="pl-5 py-6 pr-6 d-flex m-5">
            <Icon size={20} name="transfer_within_a_station" />
            <div className="ml-5">
              <Text weight="strong">ADT - Admit, Discharge, Transfer</Text>
              <br />
              <Text appearance="subtle">ENS (Encounter notification system) data</Text>
            </div>
          </SelectionCard.Item>
        </Column>
        <Column>
          <SelectionCard.Item id="item2" className="pl-5 py-6 pr-6 d-flex m-5">
            <Icon size={20} name="calendar_month" />
            <div className="ml-5">
              <Text weight="strong">Appointments</Text>
              <br />
              <Text appearance="subtle">PMS (Practise management system)</Text>
            </div>
          </SelectionCard.Item>
        </Column>
      </Row>
      <Row>
        <Column>
          <SelectionCard.Item id="item3" className="pl-5 py-6 pr-6 d-flex m-5">
            <Icon size={20} name="receipt_long" />
            <div className="ml-5">
              <Text weight="strong">Billing</Text>
              <br />
              <Text appearance="subtle">Billing and charges</Text>
            </div>
          </SelectionCard.Item>
        </Column>
        <Column>
          <SelectionCard.Item id="item4" className="pl-5 py-6 pr-6 d-flex m-5">
            <Icon size={20} name="account_balance" />
            <div className="ml-5">
              <Text weight="strong">Claims</Text>
              <br />
              <Text appearance="subtle">Medical, pharmacy, attribution</Text>
            </div>
          </SelectionCard.Item>
        </Column>
      </Row>
    </SelectionCard>
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
