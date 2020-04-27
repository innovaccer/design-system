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

  const style = {
    display: 'flex',
    'flex-wrap': 'wrap',
  };

  const innerStyle = {
    marginRight: '3%',
    marginBottom: '20px',
  };

  return (
    <div style={style}>
      {
        appearances.map((appearance, ind) => {
          return (
            <div key={ind} style={innerStyle}>
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
  title: 'Atoms|Toast/Variants',
  component: Toast,
  parameters: {
    docs: {
      docPage: {
        title: 'Toast'
      }
    }
  }
};
