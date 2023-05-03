import * as React from 'react';
import Badge from '../Badge';

// CSF format story
export const all = () => {
  const appearance = 'primary';
  const subtle = false;
  const children = 'Badge';

  return (
    <Badge appearance={appearance} subtle={subtle}>
      {children}
    </Badge>
  );
};

export default {
  title: 'Indicators/Badge/All',
  component: Badge,
};
