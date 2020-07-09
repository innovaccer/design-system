import * as React from 'react';
import Popover from '../../Popover';
import Button from '@/components/atoms/button';
import { action } from '@storybook/addon-actions';

// CSF format story
export const theme = () => {

  const appendToBody = false;
  const hoverable = false;
  const closeOnBackdropClick = true;

  const trigger = <div ref={buttonRef => buttonRef?.click()}><Button appearance="basic">Light Theme</Button></div>;
  const triggerDark = <div ref={buttonRef => buttonRef?.click()}><Button appearance="basic">Dark Theme</Button></div>;

  const onToggle = () => null;

  const options = {
    appendToBody,
    closeOnBackdropClick,
    hoverable,
    onToggle,
    customStyle: {
      height: '100px',
      width: '200px',
    },
    open: true
  };

  return (
    <div className="d-flex">
      <div className="mb-11" style={{ marginRight: '40%' }}>
        <Popover trigger={triggerDark} dark={true} {...options}>
          <div className="mx-6 my-6">
            <p>Popup</p>
            <Button appearance="primary" onClick={action('button clicked inside popover')}>Click</Button>
          </div>
        </Popover>
      </div>
      <div>
        <Popover trigger={trigger} dark={false} {...options}>
          <div className="mx-6 my-6">
            <p>Popup</p>
            <Button appearance="primary" onClick={action('button clicked inside popover')}>Click</Button>
          </div>
        </Popover>
      </div>
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
