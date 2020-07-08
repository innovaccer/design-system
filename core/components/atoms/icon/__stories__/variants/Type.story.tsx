import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Icon, { IconType } from '../../index';
import Text from '@/components/atoms/text';

// CSF format story
export const type = () => {
  const types: IconType[] = ['filled', 'outline', 'rounded', 'sharp'];

  const name = text('Name', 'info');
  return (
    <div className="d-flex">
      {
        types.map((IconShape, ind) => {
          return (
            <div key={ind} className="mr-9">
              <div>
                <Icon
                  type={IconShape}
                  size={50}
                  name={name}
                />
              </div >
              <br />
              <Text weight="strong">{IconShape.charAt(0).toUpperCase() + IconShape.slice(1)}</Text>
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Atoms|Icon/Variants',
  component: Icon,
  parameters: {
    docs: {
      docPage: {
        title: 'Icon'
      }
    }
  }
};
