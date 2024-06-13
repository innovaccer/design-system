import { BaseProps } from "../../../utils/types";
import { Menu } from "../../../utils/navigationHelper";
export interface MenuItemProps extends BaseProps {
    menu: Menu;
    isActive: boolean;
    rounded?: boolean;
    expanded?: boolean;
    hasSubmenu?: boolean;
    isChildren?: boolean;
    isChildrenVisible?: boolean;
    onClick?: (menu: Menu) => void;
    customItemRenderer?: (props: MenuItemProps) => JSX.Element;
}
export declare const MenuItem: {
    (props: MenuItemProps): JSX.Element | null;
    defaultProps: {
        isActive: boolean;
    };
};
export default MenuItem;
