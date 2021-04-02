import { BaseProps } from "../../../utils/types";
import { ActiveMenu, Menu } from "../navigation/utils";
export interface VerticalMenuProps extends BaseProps {
    menus: Menu[];
    active?: ActiveMenu;
    onClick?: (menu: Menu) => void;
    rounded: boolean;
    expanded: boolean;
    autoCollapse: boolean;
}
export declare const VerticalMenu: {
    (props: VerticalMenuProps): JSX.Element;
    defaultProps: {
        expanded: boolean;
        autoCollapse: boolean;
        rounded: boolean;
    };
};
export default VerticalMenu;
