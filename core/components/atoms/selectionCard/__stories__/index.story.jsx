import * as React from 'react';
import { SelectionCard, Row, Column, Icon, Text } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const all = () => {
  const { selectedCardIds, selectedCardValues, isCardSelected, updateCardSelection } = SelectionCard.useMultiSelect();

  const list = [
    {
      id: 'item1',
      iconName: 'key',
      title: 'Manual drop w/ SFTP user',
      description: 'Give access to data asset using SSH keys',
    },
    {
      id: 'item2',
      iconName: 'adjust',
      title: 'Manual drop on SFTP disk',
      description: 'Give access to a separate SFTP disk image',
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
          <Column key={key} size={6}>
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
      iconName: 'key',
      title: 'Manual drop w/ SFTP user',
      description: 'Give access to data asset using SSH keys',
    },
    {
      id: 'item2',
      iconName: 'adjust',
      title: 'Manual drop on SFTP disk',
      description: 'Give access to a separate SFTP disk image',
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
          <Column key={key} size={6}>
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
  title: 'Components/Interactive Card/Selection Card/All',
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
