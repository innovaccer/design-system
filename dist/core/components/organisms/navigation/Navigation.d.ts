import { BaseProps } from "../../../utils/types";
import { VerticalNavigationProps } from "./VerticalNavigation";
export declare type LayoutType = 'vertical' | 'horizontal';
export declare type Align = 'left' | 'center';
export declare type Menu = {
    name: string;
    label: string;
    link?: string;
    icon?: string;
    count?: number;
    disabled?: boolean;
    subMenu?: Menu[];
};
export interface NavigationProps extends BaseProps, VerticalNavigationProps {
    type: LayoutType;
    align: Align;
}
export declare const Navigation: {
    (props: NavigationProps): JSX.Element;
    defaultProps: {
        type: string;
        align: string;
        expanded: boolean;
        autoCollapse: boolean;
        rounded: boolean;
    };
};
export default Navigation;
