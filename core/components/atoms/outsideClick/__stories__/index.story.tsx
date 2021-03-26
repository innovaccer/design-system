import * as React from 'react';
import { OutsideClick, Card, Heading } from '@/index';
import { action } from '@storybook/addon-actions';

// CSF format story
export const all = () => {
  return (
    <OutsideClick className="d-inline-block" onOutsideClick={action('outside click')}>
      <Card
        className="d-flex align-items-center justify-content-center"
        style={{ height: 200, width: 200 }}
        onClick={action('inside click')}
      >
        <Heading>Card</Heading>
      </Card>
    </OutsideClick>
  );
};

const customCode = `() => {
  const outsideClickHandler = () => console.log('outside click');
  const insideClickHandler = () => console.log('inside click');

  return(
    <OutsideClick className="d-inline-block" onOutsideClick={outsideClickHandler}>
      <Card
        className="d-flex align-items-center justify-content-center"
        style={{ height: 200, width: 200 }}
        onClick={insideClickHandler}
      >
        <Heading>Card</Heading>
      </Card>
    </OutsideClick>
  );
}`;

export default {
  title: 'Components/OutsideClick/All',
  component: OutsideClick,
  parameters: {
    docs: {
      docPage: {
        customCode,
      }
    }
  }
};
