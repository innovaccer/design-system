import * as React from 'react';
import { SelectionCard, Row, Column, Icon, Text } from '@/index';

// CSF format story
export const cardGroupHook = () => {
  const { selectedItemList = [], onClickHandler } = SelectionCard.useMultiSelect();

  return (
    <div>
      <Row className="mb-5">
        <Column>
          <SelectionCard
            id="item1"
            className="pl-5 py-6 pr-6 d-flex mr-5"
            onClick={onClickHandler}
            selected={selectedItemList?.includes('item1')}
          >
            <Icon size={20} name="transfer_within_a_station" />
            <div className="ml-5">
              <Text weight="strong">ADT - Admit, Discharge, Transfer</Text>
              <br />
              <Text appearance="subtle">ENS (Encounter notification system) data</Text>
            </div>
          </SelectionCard>
        </Column>
        <Column>
          <SelectionCard
            id="item2"
            className="pl-5 py-6 pr-6 d-flex"
            onClick={onClickHandler}
            selected={selectedItemList?.includes('item2')}
          >
            <Icon size={20} name="calendar_month" />
            <div className="ml-5">
              <Text weight="strong">Appointments</Text>
              <br />
              <Text appearance="subtle">PMS (Practise management system)</Text>
            </div>
          </SelectionCard>
        </Column>
      </Row>
      <Row>
        <Column>
          <SelectionCard
            id="item3"
            className="pl-5 py-6 pr-6 d-flex mr-5"
            onClick={onClickHandler}
            selected={selectedItemList.includes('item3')}
          >
            <Icon size={20} name="receipt_long" />
            <div className="ml-5">
              <Text weight="strong">Billing</Text>
              <br />
              <Text appearance="subtle">Billing and charges</Text>
            </div>
          </SelectionCard>
        </Column>
        <Column>
          <SelectionCard
            id="item4"
            className="pl-5 py-6 pr-6 d-flex"
            onClick={onClickHandler}
            selected={selectedItemList.includes('item4')}
          >
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

const customCode = `() => {
  const { selectedItemList = [], onClickHandler } = SelectionCard.useMultiSelect();

  return (
    <div>
      <Row className="mb-5">
        <Column>
          <SelectionCard
            id="item1"
            className="pl-5 py-6 pr-6 d-flex mr-5"
            onClick={onClickHandler}
            selected={selectedItemList.includes('item1')}
          >
            <Icon size={20} name="transfer_within_a_station" />
            <div className="ml-5">
              <Text weight="strong">ADT - Admit, Discharge, Transfer</Text>
              <br />
              <Text appearance="subtle">ENS (Encounter notification system) data</Text>
            </div>
          </SelectionCard>
        </Column>
        <Column>
          <SelectionCard
            id="item2"
            className="pl-5 py-6 pr-6 d-flex"
            onClick={onClickHandler}
            selected={selectedItemList.includes('item2')}
          >
            <Icon size={20} name="calendar_month" />
            <div className="ml-5">
              <Text weight="strong">Appointments</Text>
              <br />
              <Text appearance="subtle">PMS (Practise management system)</Text>
            </div>
          </SelectionCard>
        </Column>
      </Row>
      <Row>
        <Column>
          <SelectionCard
            id="item3"
            className="pl-5 py-6 pr-6 d-flex mr-5"
            onClick={onClickHandler}
            selected={selectedItemList.includes('item3')}
          >
            <Icon size={20} name="receipt_long" />
            <div className="ml-5">
              <Text weight="strong">Billing</Text>
              <br />
              <Text appearance="subtle">Billing and charges</Text>
            </div>
          </SelectionCard>
        </Column>
        <Column>
          <SelectionCard
            id="item4"
            className="pl-5 py-6 pr-6 d-flex"
            onClick={onClickHandler}
            selected={selectedItemList.includes('item4')}
          >
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
}`;

export default {
  title: 'Card/Selection Card/Card Group Hook',
  component: SelectionCard,
  parameters: {
    docs: {
      docPage: {
        title: 'SelectionCard',
        customCode,
      },
    },
  },
};
