import { BaseProps } from "../../../utils/types";
interface Breadcrumb {
    label: string;
    link: string;
}
export interface BreadcrumbsProps extends BaseProps {
    list: Breadcrumb[];
    onClick?: (link: string) => void;
    showTooltip?: boolean;
}
export declare const Breadcrumbs: (props: BreadcrumbsProps) => JSX.Element;
export default Breadcrumbs;
