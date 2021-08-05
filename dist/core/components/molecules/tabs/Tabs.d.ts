import { BaseProps } from "../../../utils/types";
export interface TabConfig {
    label: string;
    count?: number;
    icon?: string;
    disabled?: boolean;
}
export interface TabsProps extends BaseProps {
    activeIndex?: number;
    withSeparator?: boolean;
    tabs: TabConfig[];
    onTabChange?: (tabIndex: number) => void;
}
export declare const Tabs: {
    (props: TabsProps): JSX.Element;
    displayName: string;
    defaultProps: {
        withSeparator: boolean;
    };
};
export default Tabs;
