import * as React from 'react';
import Toast from '../../Toast';
import { MessageAppearance } from '../../../../../commonTypes';

// CSF format story
export const appearance = () => {
  const appearances: MessageAppearance[] = ['default', 'info', 'success', 'alert', 'warning'];
  return (
    <div className="d-flex">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className="mr-5 mb-8">
            <Toast appearance={appear} title={appear.charAt(0).toUpperCase() + appear.slice(1)} />
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Toast/Variants/Appearance',
  component: Toast,
  parameters: {
    docs: {
      docPage: {
        title: 'Toast',
      },
    },
  },
};
