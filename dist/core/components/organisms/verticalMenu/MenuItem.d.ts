import { BaseProps } from "../../../utils/types";
import { Menu } from "../navigation/utils";
export interface MenuItemProps extends BaseProps {
    menu: Menu;
    isActive: boolean;
    rounded?: boolean;
    expanded?: boolean;
    hasSubmenu?: boolean;
    isChildren?: boolean;
    isChildrenVisible?: boolean;
    onClick?: (menu: Menu) => void;
}
export declare const MenuItem: {
    (props: MenuItemProps): JSX.Element | null;
    defaultProps: {
        isActive: boolean;
    };
};
export default MenuItem;
