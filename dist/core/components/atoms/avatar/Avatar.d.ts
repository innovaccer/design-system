/// <reference types="react" />
import { BaseProps } from "../../../utils/types";
export declare type Appearance = 'primary' | 'alert' | 'warning' | 'success' | 'accent1' | 'accent2' | 'accent3' | 'accent4';
export interface AvatarProps extends BaseProps {
    appearance?: Appearance;
    children?: string;
    firstName?: string;
    lastName?: string;
}
export declare const Avatar: {
    (props: AvatarProps): JSX.Element;
    displayName: string;
};
export default Avatar;
