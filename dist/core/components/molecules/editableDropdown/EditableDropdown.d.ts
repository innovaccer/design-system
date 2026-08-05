import * as React from 'react';
import { Dropdown } from '@/index';
import { DropdownProps } from '@/index.type';
import { BaseProps, MakeOptional } from '@/utils/types';
type DropdownOptions = MakeOptional<DropdownProps, keyof (typeof Dropdown)['defaultProps']>;
export type EditableDropdownProps = {
    placeholder?: string;
    dropdownOptions?: Omit<DropdownOptions, 'getLabel' | 'placeholder'>;
    customTriggerRenderer?: (label: string) => React.ReactNode;
} & BaseProps;
export declare const EditableDropdown: (props: EditableDropdownProps) => React.JSX.Element;
export default EditableDropdown;
