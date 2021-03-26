import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Toast, { Appearance } from '../../Toast';

// CSF format story
export const toastWithAction = () => {
  const appearances: Appearance[] = ['default', 'info', 'success', 'alert', 'warning'];

  const message = text(
    'message',
    'Outreach was sent'
  );

  const actionLabel1 = text(
    'actionLabel1',
    'Try Again'
  );
  const actionLabel2 = text(
    'actionLabel2',
    ''
  );

  const props: Record<string, any> = {
    actions: [],
  };

  if (actionLabel1) {
    props.actions.push({
      label: actionLabel1,
      onClick: () => action('action button click: 1')()
    });
  }
  if (actionLabel2) {
    props.actions.push({
      label: actionLabel2,
      onClick: () => action('action button click: 2')()
    });
  }

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
                onClose={action('on-close clicked')}
                {...props}
              />
            </div>
          );
        })
      }
    </div>

  );
};

export default {
  title: 'Components/Toast/Variants/Toast With Action',
  component: Toast,
  parameters: {
    docs: {
      docPage: {
        title: 'Toast'
      }
    }
  }
};
