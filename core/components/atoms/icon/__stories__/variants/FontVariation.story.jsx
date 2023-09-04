import * as React from 'react';
import { Icon } from '@/index';

// CSF format story
export const fontVariation = () => {
  return <Icon size={48} name="place" variations={{ fill: 1, weight: 400, grade: 0, opticalSize: 48 }} />;
};

export default {
  title: 'Icon/Icon/Font Variation',
  component: Icon,
};
