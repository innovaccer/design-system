import { BaseProps } from "../../../utils/types";
interface Tab {
    label: string;
    count?: number;
    icon?: string;
    disabled?: boolean;
}
export interface TabsProps extends BaseProps {
    activeIndex?: number;
    withSeperator?: boolean;
    tabs: Tab[];
    onTabChange?: (tabIndex: number) => void;
}
export declare const Tabs: {
    (props: TabsProps): JSX.Element;
    displayName: string;
};
export default Tabs;
