import * as React from 'react';
import { action } from '@/utils/action';
import { Button, Row, Column } from '@/index';

// CSF format story
export const all = () => {
  const appearances = ['basic', 'primary', 'alert'];
  const styleTypes = ['filled', 'outlined'];

  return (
    <Column>
      {styleTypes.map((styleType) => (
        <Row key={styleType} className="mb-8">
          <Column size={1} className="d-flex align-items-center">
            <span className="text-muted">{styleType === 'filled' ? 'Fill' : 'Outline'}</span>
          </Column>
          <Column size={4} className="d-flex justify-content-between">
            {appearances.map((appear) => (
              <Button
                key={`${styleType}-${appear}`}
                onClick={action('button-clicked')}
                appearance={appear}
                styleType={styleType}
                aria-label={`${styleType} ${appear}`}
              >
                {appear.charAt(0).toUpperCase() + appear.slice(1)}
              </Button>
            ))}
          </Column>
        </Row>
      ))}
    </Column>
  );
};

export default {
  title: 'Components/Button/Button/StyleType/All',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        a11yProps: ` **aria-label:** name accordingly which describe the action of button `,
      },
    },
  },
};
