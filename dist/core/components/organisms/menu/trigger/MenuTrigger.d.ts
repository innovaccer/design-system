import React from 'react';
import { BaseProps } from '@/utils/types';
export type MenuTriggerProps = BaseProps & {
    size?: 'tiny' | 'regular';
    appearance?: 'transparent' | 'basic';
};
export declare const MenuTrigger: (props: MenuTriggerProps) => React.JSX.Element;
export default MenuTrigger;
