import * as React from 'react';
import { ActionCard, Icon, Text } from '@/index';

export const cardGroup = () => {
  const cardList = [
    {
      icon: 'api',
      title: 'API portal',
      description: 'Access and test out application APIs',
    },
    {
      icon: 'preview',
      title: 'App simulator',
      description: 'Envision and test the apps that you want to integrate with Innovaccer',
    },
    {
      icon: 'widgets',
      title: 'App distribution',
      description: 'Publish and monetize your apps and add-ons',
    },
    {
      icon: 'store',
      title: 'Marketplace',
      description: 'Explore and purchase apps and add-ons',
    },
  ];

  return (
    <div className="d-flex">
      {cardList.map((cardItem, key) => {
        const { icon, title, description } = cardItem;
        return (
          <ActionCard key={key} className="mr-6">
            <div className="d-flex flex-column align-items-center justify-content-center p-6 text-align-center">
              <Icon name={icon} size={24} className="mb-4" />
              {title && (
                <Text weight="strong" className="mb-2">
                  {title}
                </Text>
              )}
              {description && <Text appearance="subtle">{description}</Text>}
            </div>
          </ActionCard>
        );
      })}
    </div>
  );
};

const customCode = `() => {
  const cardList = [
    {
      icon: 'api',
      title: 'API portal',
      description: 'Access and test out application APIs',
    },
    {
      icon: 'preview',
      title: 'App simulator',
      description: 'Envision and test the apps that you want to integrate with Innovaccer',
    },
    {
      icon: 'widgets',
      title: 'App distribution',
      description: 'Publish and monetize your apps and add-ons',
    },
    {
      icon: 'store',
      title: 'Marketplace',
      description: 'Explore and purchase apps and add-ons',
    },
  ];

  return (
    <div className="d-flex">
      {cardList.map((cardItem, key) => {
        const { icon, title, description } = cardItem;
        return (
          <ActionCard key={key} className="mr-6">
            <div className="d-flex flex-column align-items-center justify-content-center p-6 text-align-center">
              <Icon name={icon} size={24} className="mb-4" />
              {title && <Text weight="strong" className="mb-2">{title}</Text>}
              {description && <Text appearance="subtle">{description}</Text>}
            </div>
          </ActionCard>
        );
      })}
    </div>
  );
}`;

export default {
  title: 'Components/Interactive Card/Action Card/CardGroup',
  component: ActionCard,
  parameters: {
    docs: {
      docPage: {
        title: 'Action Card',
        propDescription: `Note: All the valid properties of HTML DIV elements are acceptable as a prop`,
        customCode,
      },
    },
  },
};
