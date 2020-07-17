import * as React from 'react';
import Button from '@/components/atoms/button';

export const iconButtonGroup = () => (
  <div className="d-flex">
    <Button
      appearance="basic"
      size="tiny"
      icon="content_copy"
      className="mr-2"
    />
    <Button
      appearance="basic"
      size="tiny"
      icon="content_paste"
      className="mr-2"
    />
    <Button
      appearance="basic"
      size="tiny"
      icon="delete"
    />
  </div>
);

export default {
  title: 'Molecules|ButtonGroup',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button'
      }
    }
  }
};
