import * as React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { Tooltip, Button } from '@/index';
import { TooltipProps } from '@/index.type';

// CSF format story
export const position = () => {
  const positions: TooltipProps['position'][] = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'right'];
  const appendToBody = boolean('appendToBody', false);
  const tooltip = text('tooltip', 'An awesome tooltip');

  const options = {
    tooltip,
    appendToBody
  };

  return (
    <div className="pb-6 Row">
      {
        positions.map((pos, ind) => {
          return (
            <div key={ind} className="mr-13 mt-8">
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
  title: 'Components/Tooltip/Variants/Position',
  component: Tooltip,
  parameters: {
    docs: {
      docPage: {
        title: 'Tooltip'
      }
    }
  }
};
