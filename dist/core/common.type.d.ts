/// <reference types="react" />
import { OverlayFooterProps } from "./components/molecules/overlayFooter";
export declare type AccentAppearance = 'primary' | 'secondary' | 'alert' | 'warning' | 'success' | 'accent1' | 'accent2' | 'accent3' | 'accent4';
export declare type HeadingAppearance = 'default' | 'subtle' | 'disabled' | 'white';
export declare type MessageAppearance = 'default' | 'alert' | 'info' | 'success' | 'warning';
export declare type FileStatus = 'uploading' | 'completed' | 'error';
export declare type FooterOptions = {
    actions: OverlayFooterProps['actions'];
};
export declare type AutoComplete = 'on' | 'off';
export declare type NumberRange = [number, number];
export declare type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
