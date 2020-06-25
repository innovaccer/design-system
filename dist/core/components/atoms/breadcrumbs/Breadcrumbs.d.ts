/// <reference types="react" />
interface Breadcrumb {
    label: string;
    link: string;
}
export interface BreadcrumbsProps {
    list: Breadcrumb[];
    onClick: (link: string) => void;
}
export declare const Breadcrumbs: (props: BreadcrumbsProps) => JSX.Element;
export default Breadcrumbs;
