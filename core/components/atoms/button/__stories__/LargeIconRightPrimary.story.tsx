import * as React from 'react';
import Button from '../Button';

export const LargeIconRightPrimary = () =>  (
    <Button
      appearance="primary"
      size="large"
      expanded={false}
      disabled={false}
      loading={false}
      icon={'refresh'}
      iconAlign={'right'}
    >
      {'Button'}
    </Button>
  );

export default {
  title: 'Atoms|Button',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button'
      }
    }
  }
};
