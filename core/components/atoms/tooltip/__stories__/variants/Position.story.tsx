import * as React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import Tooltip, { PositionType } from '../../Tooltip';
import Button from '../../../button';

// CSF format story
export const position = () => {
  const positions: PositionType[] = ['top', 'bottom', 'left', 'right'];
  const appendToBody = boolean('appendToBody', false);
  const tooltip = text('tooltip', 'An awesome tooltip');

  const options = {
    tooltip,
    appendToBody
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {
        positions.map((pos, ind) => {
          return (
            <div key={ind} style={{ marginTop: '30px', marginRight: '180px' }}>
              <Tooltip position={pos} {...options} >
                <div
                  ref={buttonRef => {
                    const event = new MouseEvent('mouseover', {
                      view: window,
                      bubbles: true,
                      cancelable: true
                    });
                    if (buttonRef) buttonRef.dispatchEvent(event);
                  }}
                >
                  <Button>{pos}</Button>
                </div>
              </Tooltip>
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Atoms|Tooltip/Variants',
  component: Tooltip,
  parameters: {
    docs: {
      docPage: {
        title: 'Tooltip'
      }
    }
  }
};
