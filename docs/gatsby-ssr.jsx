import React from 'react';

import { LayoutWrapper } from './src/components/LayoutWrapper';

export const wrapPageElement = ({ element, props }) => {
  return <LayoutWrapper {...props}>{element}</LayoutWrapper>;
};