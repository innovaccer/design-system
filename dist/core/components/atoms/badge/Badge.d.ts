/// <reference types="react" />
export declare type Appearance = 'primary' | 'secondary' | 'alert' | 'warning' | 'success' | 'accent1' | 'accent2' | 'accent3' | 'accent4';
export interface BadgeProps {
    appearance?: Appearance;
    subtle?: boolean;
    children: string;
}
export declare const Badge: {
    (props: BadgeProps): JSX.Element;
    displayName: string;
};
export default Badge;
