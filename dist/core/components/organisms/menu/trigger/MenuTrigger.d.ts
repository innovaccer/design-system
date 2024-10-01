import { BaseProps } from "../../../../utils/types";
export interface MenuTriggerProps extends BaseProps {
    size?: 'tiny' | 'regular';
    appearance?: 'transparent' | 'basic';
}
export declare const MenuTrigger: (props: MenuTriggerProps) => JSX.Element;
export default MenuTrigger;
