import * as React from 'react';
import { SelectionCard, Row, Column, Icon, Text } from '@/index';
import { CardItem } from '../CardItem';

// CSF format story
export const cardGroup = () => {
  const [selectedItemList, setSelectedItemList] = React.useState([]);

  const onClickHandler = (e, item) => {
    let resultList = [...selectedItemList];
    if (selectedItemList.includes(item)) {
      resultList = selectedItemList.filter((cardItem) => item !== cardItem);
    } else {
      resultList.push(item);
    }
    setSelectedItemList(resultList);
  };

  return (
    <div>
      <Row className="mb-5">
        <Column>
          <SelectionCard.Item
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
          </SelectionCard.Item>
        </Column>
        <Column>
          <SelectionCard.Item
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
          </SelectionCard.Item>
        </Column>
      </Row>
      <Row>
        <Column>
          <SelectionCard.Item
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
          </SelectionCard.Item>
        </Column>
        <Column>
          <SelectionCard.Item
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
          </SelectionCard.Item>
        </Column>
      </Row>
    </div>
  );
};

const customCode = `() => {
  const [selectedItemList, setSelectedItemList] = React.useState([]);

  const onClickHandler = (e, item) => {
    let resultList = [...selectedItemList];
    if (selectedItemList.includes(item)) {
      resultList = selectedItemList.filter((cardItem) => item !== cardItem);
    } else {
      resultList.push(item);
    }
    setSelectedItemList(resultList);
  };

  return (
    <div>
      <Row className="mb-5">
        <Column>
          <SelectionCard.Item
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
          </SelectionCard.Item>
        </Column>
        <Column>
          <SelectionCard.Item
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
          </SelectionCard.Item>
        </Column>
      </Row>
      <Row>
        <Column>
          <SelectionCard.Item
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
          </SelectionCard.Item>
        </Column>
        <Column>
          <SelectionCard.Item
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
          </SelectionCard.Item>
        </Column>
      </Row>
    </div>
  );
}`;

export default {
  title: 'Card/Selection Card/Card Group',
  component: SelectionCard,
  subcomponents: { CardItem },
  parameters: {
    docs: {
      docPage: {
        title: 'SelectionCard',
        customCode,
      },
    },
  },
};
