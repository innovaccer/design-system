import * as React from 'react';
import Paragraph, { Appearance } from '../../index';
import Text from '@/components/atoms/text';

// CSF format story
export const appearance = () => {
  const appearances: Appearance[] = ['default', 'white', 'destructive', 'subtle', 'disabled'];
  return (
    <div className="d-flex">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className="mr-6">
            <div style={{ background: appear === 'white' ? 'black' : 'transparent' }}>
              <Paragraph appearance={appear}>
                Paragraph
              </Paragraph>
            </div>
            <br />
            <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Paragraph/Variants/Appearance',
  component: Paragraph,
  parameters: {
    docs: {
      docPage: {
        title: 'Paragraph'
      }
    }
  }
};
