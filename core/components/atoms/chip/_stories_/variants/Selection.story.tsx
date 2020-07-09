import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { Text } from '@/index';
import Chip, { Name } from '../../Chip';
import { action } from '@storybook/addon-actions';
const BooleanValue = [true, false];
export const Selection = () => {

  const icon = text(
    'icon', 'assessment'
  );
  const label = text(
    'label',
    'Selection'
  );
  const onCloseHandler = (name: Name) => {
    return action(`onClose: ${name}`)();
  };
  const onClickHandler = (name: Name) => {
    return action(`onClick: ${name}`)();
  };
  return (
    <div className="d-flex">
      {BooleanValue.map((booleanvalue, ind) => {
        return (
          <div key={ind} className="mr-9">
            <Chip
              icon={icon}
              label={label}
              clearButton={true}
              disabled={booleanvalue}
              type="selection"
              onClose={onCloseHandler}
              onClick={onClickHandler}
              selected={false}
              name={name}
            />
            <br />
            <Text weight="strong">{`Disabled: ${booleanvalue}`}</Text>
          </div>
        );
      })}
      <div className="mr-9">
        <Chip
          icon={icon}
          label={label}
          clearButton={true}
          type="selection"
          onClose={onCloseHandler}
          onClick={onClickHandler}
          selected={true}
          name={name}
        />
        <br />
        <Text weight="strong">Selected: true</Text>
      </div>
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
