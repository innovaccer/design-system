import { VerticalNavProps } from "../../../index.type";
import { BaseProps } from "../../../utils/types";
export declare type HorizontalNavProps = BaseProps & Pick<VerticalNavProps, 'menus' | 'active' | 'onClick'>;
export declare type Align = 'left' | 'center';
export declare const HorizontalNav: (props: HorizontalNavProps) => JSX.Element;
export default HorizontalNav;
