import { MenuItemProps } from "./MenuItem";
import { BaseProps } from "../../../utils/types";
import { ActiveMenu, Menu } from "../../../utils/navigationHelper";
export interface VerticalNavProps extends BaseProps {
    menus: Menu[];
    active?: ActiveMenu;
    onClick?: (menu: Menu) => void;
    rounded: boolean;
    expanded: boolean;
    autoCollapse: boolean;
    customItemRenderer?: (props: MenuItemProps) => JSX.Element;
    showTooltip: boolean;
}
export declare const VerticalNav: {
    (props: VerticalNavProps): JSX.Element;
    defaultProps: {
        expanded: boolean;
        autoCollapse: boolean;
        rounded: boolean;
        showTooltip: boolean;
    };
};
export default VerticalNav;
