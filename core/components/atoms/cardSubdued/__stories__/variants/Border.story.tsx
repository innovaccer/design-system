import * as React from 'react';
import { CardSubdued } from '@/index';

// CSF format story
export const border = () => {

  return (
    <div className="d-flex">
      <CardSubdued border="top" className="w-25 mr-3 px-5 py-5" style={{ height: '150px' }}>
        Subdued Card with top border
      </CardSubdued>
      <CardSubdued border="left" className="w-25 mr-3 px-5 py-5" style={{ height: '150px' }}>
        Subdued Card with left border
      </CardSubdued>
      <CardSubdued border="right" className="w-25 mr-3 gpx-5 py-5" style={{ height: '150px' }}>
        Subdued Card with right border
      </CardSubdued>
      <CardSubdued border="bottom" className="w-25 px-5 py-5" style={{ height: '150px' }}>
        Subdued Card with bottom border
      </CardSubdued>
    </div>
  );

};

export default {
  title: 'Components/CardSubdued/Border',
  component: CardSubdued,
  parameters: {
    docs: {
      docPage: {
        title: 'CardSubdued'
      }
    }
  }
};
