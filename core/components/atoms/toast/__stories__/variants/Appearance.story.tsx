import * as React from 'react';
import Toast, { Appearance } from '../../Toast';

// CSF format story
export const appearance = () => {
  const appearances: Appearance[] = ['default', 'info', 'success', 'alert', 'warning'];

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
        appearances.map((appear, ind) => {
          return (
            <div key={ind} style={innerStyle}>
              <Toast
                appearance={appear}
                title={appear.charAt(0).toUpperCase() + appear.slice(1)}
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
