import * as React from 'react';
import { SelectionCard, Row, Column, Icon, Text } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const multiSelect = () => {
  const { selectedItemList = [], updateSelection } = SelectionCard.useMultiSelect();

  const onClickHandler = (e, id) => {
    action('onClick handler', e, id)();
    updateSelection(id);
  };

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
              <Text appearance="subtle">PMS (Practice management system)</Text>
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
  const { selectedItemList = [], updateSelection } = SelectionCard.useMultiSelect();

  const onClickHandler = (e, id) => {
    console.log('onClick handler', e, id);
    updateSelection(id);
  };

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
              <Text appearance="subtle">PMS (Practice management system)</Text>
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
  title: 'Card/Selection Card/MultiSelect',
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
