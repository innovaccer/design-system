/// <reference types="react" />
export declare type LayoutType = 'vertical' | 'horizontal';
declare type Menu = {
    id: string;
    name: string;
    disabled?: boolean;
    subMenu?: Menu[];
    icon?: string;
};
export interface NavigationProps {
    type?: LayoutType;
    data: Menu[];
    onClick?: (id: string) => void;
    active?: string;
    collapsed?: boolean;
    onToggle?: (collapsed: boolean) => void;
}
export declare const Navigation: {
    (props: NavigationProps): JSX.Element;
    defaultProps: {
        type: string;
        onClick: () => null;
        onToggle: () => null;
        collapsed: boolean;
    };
};
export default Navigation;
