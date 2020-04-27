import * as React from 'react';
import Popover, { Position } from '../../Popover';
import Button from '@/components/atoms/button';
import { action } from '@storybook/addon-actions';

// CSF format story
export const position = () => {
  const positions: Position[] = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'];
  const appendToBody = false;
  const hoverable = false;
  const closeOnBackdropClick = true;
  const dark = false;

  const trigger: React.ReactElement[] = [];
  positions.forEach(pos => {
    trigger.push(
      <div ref={buttonRef => buttonRef?.click()}>
        <Button appearance="basic">{pos}</Button>
      </div>
    );
  });

  const onToggle = () => null;

  const options = {
    appendToBody,
    dark,
    closeOnBackdropClick,
    hoverable,
    onToggle,
    style: {
      height: '50px',
      width: '150px',
      padding: '16px'
    },
    open: true
  };

  const style = {
    display: 'flex',
    'flex-wrap': 'wrap',
  };

  return (
    <div style={style}>
      {
        positions.map((pos, ind) => {
          return (
            <div key={ind} style={{ marginTop: '80px', marginRight: '20%', marginBottom: ind >= 3 ? '55px' : '0px' }} >
              <Popover trigger={trigger[ind]} position={pos} {...options}>
                <p>Popup</p>
                <Button appearance="primary" onClick={action('button clicked inside popover')}>Click</Button>
              </Popover>
            </div>
          );
        })
      }
    </div>

  );
};

export default {
  title: 'Molecules|Popover/Variants',
  component: Popover,
  parameters: {
    docs: {
      docPage: {
        title: 'Popover'
      }
    }
  }
};
