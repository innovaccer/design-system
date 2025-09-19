import * as React from 'react';
import { ChipInput, Text, Row, Column } from '@/index';

export const Size = () => {
  const allowDuplicates = false;
  const placeholder = 'Add value';
  const disabled = false;
  const sizes = ['small', 'regular'];

  return (
    <Row>
      {sizes.map((size, index) => (
        <Column key={size} size={5} className={`${index === 0 ? 'mr-6' : ''}`}>
          <div className="d-flex flex-column">
            <Text size="small" weight="medium" className="mb-3">
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </Text>
            <ChipInput
              allowDuplicates={allowDuplicates}
              placeholder={placeholder}
              size={size}
              disabled={disabled}
              chipOptions={{ clearButton: true }}
            />
          </div>
        </Column>
      ))}
    </Row>
  );
};

export default {
  title: 'Components/Input/ChipInput/Size',
  component: ChipInput,
};
