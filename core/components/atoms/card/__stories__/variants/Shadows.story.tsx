import * as React from 'react';
import { CardHeader, CardBody, CardFooter, Card } from '@/index';

// CSF format story
export const shadow = () => {

  return (
    <div className="d-flex">
      <div className="w-25 mr-8" style={{ height: '150px' }}>
        <Card shadow="none" className="h-100 w-100">
          None Shadow
        </Card>
      </div>
      <div className="w-25 mr-8" style={{ height: '150px' }}>
        <Card shadow="default" className="h-100 w-100">
          Default Shadow
        </Card>
      </div>
    </div>
  );

};

export default {
  title: 'Components/Card/Shadow',
  component: Card,
  parameters: {
    docs: {
      docPage: {
        props: {
          components: { Card, CardHeader, CardBody, CardFooter },
        }
      }
    }
  }
};
