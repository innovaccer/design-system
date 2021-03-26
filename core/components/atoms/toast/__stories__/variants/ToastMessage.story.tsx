import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Toast, { Appearance } from '../../Toast';

// CSF format story
export const toastWithDescription = () => {
  const appearances: Appearance[] = ['default', 'info', 'success', 'alert', 'warning'];

  const message = text(
    'message',
    'Outreach was sent'
  );
  return (
    <div className="d-flex">
      {
        appearances.map((appearance, ind) => {
          return (
            <div key={ind} className="mr-5 mb-8">
              <Toast
                appearance={appearance}
                title={appearance.charAt(0).toUpperCase() + appearance.slice(1)}
                message={message}
              />
            </div>
          );
        })
      }
    </div>

  );
};

export default {
  title: 'Components/Toast/Variants/Toast With Description',
  component: Toast,
  parameters: {
    docs: {
      docPage: {
        title: 'Toast'
      }
    }
  }
};
