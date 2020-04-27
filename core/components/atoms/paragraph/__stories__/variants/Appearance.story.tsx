import * as React from 'react';
import Paragraph, { Appearance } from '../../index';
import Text from '@/components/atoms/text';

// CSF format story
export const appearance = () => {
  const appearances: Appearance[] = ['default', 'white', 'destructive', 'subtle', 'disabled'];

  const style = {
    display: 'flex',
  };

  const outerStyle = {
    marginRight: '2%',
  };

  return (
    <div style={style}>
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} style={outerStyle}>
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
  title: 'Atoms|Typography/Paragraph/Variants',
  component: Paragraph,
  parameters: {
    docs: {
      docPage: {
        title: 'Paragraph'
      }
    }
  }
};
