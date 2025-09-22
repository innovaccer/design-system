import * as React from 'react';
import { EditableChipInput, Text, Row, Column } from '@/index';

// CSF format story

export const Size = () => {
  const [regularValue, setRegularValue] = React.useState(['Regular size chip']);
  const [smallValue, setSmallValue] = React.useState(['Small size chip']);

  const onRegularChange = (updatedValue) => {
    setRegularValue(updatedValue);
  };

  const onSmallChange = (updatedValue) => {
    setSmallValue(updatedValue);
  };

  const placeholder = 'Add Value';
  const chipInputOptions = {
    chipOptions: {
      clearButton: true,
    },
    allowDuplicates: false,
    autoFocus: false,
  };

  const sizes = ['regular', 'small'];

  return (
    <Row>
      {sizes.map((size, index) => (
        <Column key={size} size={5} className={`${index === 0 ? 'mr-6' : ''}`}>
          <div className="d-flex flex-column">
            <Text size={size} weight="medium" className="mb-3">
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </Text>
            <EditableChipInput
              placeholder={placeholder}
              value={size === 'regular' ? regularValue : smallValue}
              onChange={size === 'regular' ? onRegularChange : onSmallChange}
              size={size}
              chipInputOptions={chipInputOptions}
            />
          </div>
        </Column>
      ))}
    </Row>
  );
};

const customCode = `() => {
  const [regularValue, setRegularValue] = React.useState(['Regular size chip']);
  const [smallValue, setSmallValue] = React.useState(['Small size chip']);

  const onRegularChange = (updatedValue) => {
    setRegularValue(updatedValue);
  };

  const onSmallChange = (updatedValue) => {
    setSmallValue(updatedValue);
  };

  const placeholder = 'Add Value';
  const chipInputOptions = {
    chipOptions: {
      clearButton: true,
    },
    allowDuplicates: false,
    autoFocus: false,
  };

  const sizes = ['regular', 'small'];

  return (
    <Row>
      {sizes.map((size, index) => (
        <Column key={size} size={5} className={\`\${index === 0 ? 'mr-6' : ''}\`}>
          <div className="d-flex flex-column">
            <Text size={size} weight="medium" className="mb-3">
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </Text>
            <EditableChipInput
              placeholder={placeholder}
              value={size === 'regular' ? regularValue : smallValue}
              onChange={size === 'regular' ? onRegularChange : onSmallChange}
              size={size}
              chipInputOptions={chipInputOptions}
            />
          </div>
        </Column>
      ))}
    </Row>
  );
}`;

export default {
  title: 'Components/Inline Editable Fields/EditableChipInput/Size',
  component: EditableChipInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
