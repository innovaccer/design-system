import * as React from 'react';
import { SelectionCard, Row, Column, Icon, Text } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const multiSelect = () => {
  const { selectedCardIds, selectedCardValues, isCardSelected, updateCardSelection } = SelectionCard.useMultiSelect();

  const list = [
    {
      id: 'item1',
      iconName: 'transfer_within_a_station',
      title: 'ADT - Admit, Discharge, Transfer',
      description: 'ENS (Encounter notification system) data',
    },
    {
      id: 'item2',
      iconName: 'calendar_month',
      title: 'Appointments',
      description: 'PMS (Practice management system)',
    },
    {
      id: 'item3',
      iconName: 'receipt_long',
      title: 'Billing',
      description: 'Billing and charges',
    },
    {
      id: 'item4',
      iconName: 'account_balance',
      title: 'Claims',
      description: 'Medical, pharmacy, attribution',
    },
  ];

  React.useEffect(() => {
    action(selectedCardIds, selectedCardValues)();
  }, [selectedCardIds]);

  const onClickHandler = (e, id, value) => {
    action('onClick handler', e, id, value)();
    updateCardSelection(id, value);
  };

  return (
    <Row>
      {list.map((cardItem, key) => {
        const { id, iconName, title, description } = cardItem;
        return (
          <Column key={key} size={6} className="mb-6">
            <SelectionCard
              id={id}
              cardValue={cardItem}
              className="p-6 d-flex mr-6"
              onClick={onClickHandler}
              selected={isCardSelected(id)}
            >
              <Icon size={20} name={iconName} />
              <div className="ml-5">
                <Text weight="strong">{title}</Text>
                <br />
                <Text className="pt-2" appearance="subtle">
                  {description}
                </Text>
              </div>
            </SelectionCard>
          </Column>
        );
      })}
    </Row>
  );
};

const customCode = `() => {
  const { selectedCardIds, selectedCardValues, isCardSelected, updateCardSelection } = SelectionCard.useMultiSelect();

  const list = [
    {
      id: 'item1',
      iconName: 'transfer_within_a_station',
      title: 'ADT - Admit, Discharge, Transfer',
      description: 'ENS (Encounter notification system) data',
    },
    {
      id: 'item2',
      iconName: 'calendar_month',
      title: 'Appointments',
      description: 'PMS (Practice management system)',
    },
    {
      id: 'item3',
      iconName: 'receipt_long',
      title: 'Billing',
      description: 'Billing and charges',
    },
    {
      id: 'item4',
      iconName: 'account_balance',
      title: 'Claims',
      description: 'Medical, pharmacy, attribution',
    },
  ];

  React.useEffect(() => {
    console.log(selectedCardIds, selectedCardValues);
  }, [selectedCardIds]);

  const onClickHandler = (e, id, value) => {
    console.log('onClick handler', e, id, value);
    updateCardSelection(id, value);
  };

  return (
    <Row>
      {list.map((cardItem, key) => {
        const { id, iconName, title, description } = cardItem;
        return (
          <Column key={key} size={6} className="mb-6">
            <SelectionCard
              id={id}
              cardValue={cardItem}
              className="p-6 d-flex mr-6"
              onClick={onClickHandler}
              selected={isCardSelected(id)}
            >
              <Icon size={20} name={iconName} />
              <div className="ml-5">
                <Text weight="strong">{title}</Text>
                <br />
                <Text className="pt-2" appearance="subtle">{description}</Text>
              </div>
            </SelectionCard>
          </Column>
        );
      })}
    </Row>
  );
}`;

export default {
  title: 'Components/Interactive Card/Selection Card/MultiSelect',
  component: SelectionCard,
  parameters: {
    docs: {
      docPage: {
        title: 'SelectionCard',
        propDescription: `Note: All the valid properties of HTML DIV elements are acceptable as a prop`,
        customCode,
      },
    },
  },
};
