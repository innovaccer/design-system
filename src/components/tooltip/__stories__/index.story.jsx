import * as React from 'react';
import { Tooltip, Button } from '@/index';

export const Basic = () => {
  const options = {
    text: 'An awesome tooltip',
    hoverable: true,
    placement: 'bottom',
  };
  return (
    <Tooltip {...options}>
      <Button>Hover over me</Button>
    </Tooltip>
  );
};

export const Hoverable = () => {
  const options = {
    text: 'An awesome tooltip',
    hoverable: true,
    placement: 'bottom',
  };
  return (
    <div className="d-flex justify-content-between w-25">
      <Tooltip {...options}>
        <Button>Hoverable</Button>
      </Tooltip>
      <Tooltip {...options} hoverable={false}>
        <Button>Click</Button>
      </Tooltip>
    </div>
  );
};

export const Position = () => {
  const positions = [
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'right',
    'left',
    'left-start',
    'right-start',
    'right-end',
    'left-end',
  ];

  return (
    <div className="pb-6 Row">
      {positions.map((pos, ind) => {
        return (
          <div key={ind} className="mr-13 mt-8">
            <Tooltip placement={pos} text="An awesome tooltip" hoverable={true}>
              <Button>{pos}</Button>
            </Tooltip>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
};
