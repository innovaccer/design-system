import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { Dropdown } from '@/index.type';
import { OptionSchema } from 'types';

export type InputSize = 'tiny' | 'regular' | 'large';

export interface ComboboxProps extends BaseProps {
  size?: InputSize;
  multiSelect?: boolean;
  options: OptionSchema[];
  // customTrigger?: (label: string) => React.ReactElement;
}

export const Combobox = (props: ComboboxProps) => {
  const {
    options,
    // , multiSelect
  } = props;

  // const getCustomTrigger = () => {};

  return (
    <div>
      <Dropdown
        options={options}
        // customTrigger={getCustomTrigger}
      />
    </div>
  );
};

Combobox.defaultProps = {
  size: 'regular',
};

Combobox.displayName = 'Combobox';
export default Combobox;
