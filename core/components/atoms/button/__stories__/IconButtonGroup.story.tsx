import * as React from 'react';
import Button from '@/components/atoms/button';

export const iconButtonGroup = () => (
  <div className="d-inline-flex">
    <Button size="tiny" icon="content_copy " className="mr-2" tooltip="Copy" />
    <Button size="tiny" icon="content_paste" className="mr-2" tooltip="Paste" />
    <Button size="tiny" icon="delete" tooltip="Delete" />
  </div>
);

export default {
  title: 'Components/Button/Icon Button Group',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'A pattern using tiny icon buttons in a group.',
      },
    },
  },
};
