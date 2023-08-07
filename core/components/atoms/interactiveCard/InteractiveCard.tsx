import * as React from 'react';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import { Icon, Text } from '@/index';
import classNames from 'classnames';

interface CardItem {
  icon?: string;
  title?: React.ReactText;
  description?: React.ReactText;
}

export interface InteractiveCardProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
  cardList: CardItem[];
  multiSelect?: boolean;
  selectedList?: string[];
  type?: 'action' | 'selection';
  layout?: 'center' | 'left';
  children?: React.ReactNode;
}

export const InteractiveCard = (props: InteractiveCardProps) => {
  const { cardList } = props;

  const classes = classNames({
    ['d-flex flex-column justify-content-center align-items-center']: true,
    ['Interactive-card']: true,
  });

  return (
    <div>
      {cardList.map((cardItem, key) => {
        const { icon, title, description } = cardItem;
        return (
          <div key={key} className={classes}>
            <Icon name={icon} size={24} />
            {title && <Text weight="strong">{title}</Text>}
            {description && <Text appearance="subtle">{description}</Text>}
          </div>
        );
      })}
    </div>
  );
};

InteractiveCard.defaultProps = {
  layout: 'center',
  type: 'selection',
  multiSelect: false,
};
export default InteractiveCard;
