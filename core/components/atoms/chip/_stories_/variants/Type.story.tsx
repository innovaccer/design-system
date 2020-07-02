import * as React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import Chip, { Type, Name } from '../../Chip';
import { action } from '@storybook/addon-actions';
import Text from '@/components/atoms/text';
export const Types = () => {

  const types: Type[] = ['action', 'selection', 'input'];
  const icon = text(
    'icon', 'assessment'
  );
  const label = text(
    'label',
    'ChipLabel',
  );
  const clearButton = boolean(
    'clearButton', true
  );
  const disabled = false;
  const selected = false;
  const onCloseHandler = (name: Name) => {
    return action(`onClose: ${name}`)();
  };
  const onClickHandler = (name: Name) => {
    return action(`onClick: ${name}`)();
  };
  const style = {
    display: 'flex',
  };

  const innerStyle = {
    marginRight: '5%',
  };
  return (
    <div style={style}>
      {
        types.map((type, ind) => {
          return (
            <div key={ind} style={innerStyle}>
              <Chip
                icon={icon}
                label={label}
                clearButton={clearButton}
                disabled={disabled}
                type={type}
                onClose={onCloseHandler}
                onClick={onClickHandler}
                selected={selected}
                name={name}
              />
              <br />
              <Text weight="strong">{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
            </div>
          );
        })
      }
    </div>
  );
};
export default {
  title: 'Atoms|Chip/Variants',
  component: Chip,
  parameters: {
    docs: {
      docPage: {
        title: 'Chip'
      }
    }
  }
};
