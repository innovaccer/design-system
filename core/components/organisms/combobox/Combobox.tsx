import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { ChipInput, Dropdown, Input } from '@/index';
import { OptionSchema } from 'types';

export type InputSize = 'tiny' | 'regular' | 'large';

export interface ComboboxProps extends BaseProps {
  size?: InputSize;
  multiSelect?: boolean;
  options: OptionSchema[];
  placeholder?: string;
  // customTrigger?: (label: string) => React.ReactElement;
}

export const Combobox = (props: ComboboxProps) => {
  const { options, multiSelect } = props;

  const customTriggerFunc = () => {
    if (multiSelect) {
      return <ChipInput />;
    }
    return <Input />;
  };

  return (
    <div>
      <Dropdown
        options={options}
        triggerOptions={{
          customTrigger: customTriggerFunc,
        }}
      />
    </div>
  );
};

Combobox.defaultProps = {
  size: 'regular',
};

Combobox.displayName = 'Combobox';
export default Combobox;
