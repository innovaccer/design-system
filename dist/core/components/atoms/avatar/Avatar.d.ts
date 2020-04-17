/// <reference types="react" />
export declare type Appearance = 'primary' | 'alert' | 'warning' | 'success' | 'accent1' | 'accent2' | 'accent3' | 'accent4';
export interface AvatarProps {
    appearance?: Appearance;
    children: string;
}
export declare const Avatar: (props: AvatarProps) => JSX.Element;
export default Avatar;
