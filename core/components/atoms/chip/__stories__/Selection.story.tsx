import * as React from 'react';
import Chip from '../Chip';

export const selection = () => {
  const [selected, setSelected] = React.useState(false);

  return (
    <Chip
      label="Yes"
      clearButton={false}
      type="selection"
      selected={selected}
      name={'chip'}
      onClick={() => setSelected(!selected)}
    />
  );
};

export default {
  title: 'Atoms|Chip',
  component: Chip,
  parameters: {
    docs: {
      docPage: {
        title: 'Chip'
      }
    }
  }
};
