import * as React from 'react';
import Label from '../../index';

// CSF format story
export const required = () => {
  return (
    <div>
      <div className="mr-5 mb-8">
        <Label>
          Not Required
        </Label>
      </div>
      <div>
        <Label required={true}>
          Required
        </Label>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Label/Variants/Required',
  component: Label,
  parameters: {
    docs: {
      docPage: {
        title: 'Label'
      }
    }
  }
};
