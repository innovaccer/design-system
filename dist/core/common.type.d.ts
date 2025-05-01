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
export declare type TextColor = 'white' | 'primary' | 'secondary' | 'success' | 'alert' | 'warning' | 'accent1' | 'accent2' | 'accent3' | 'accent4' | 'inverse' | 'primary-dark' | 'secondary-dark' | 'success-dark' | 'alert-dark' | 'warning-dark' | 'accent1-dark' | 'accent2-dark' | 'accent3-dark' | 'accent4-dark' | 'primary-darker' | 'success-darker' | 'alert-darker' | 'warning-darker' | 'accent1-darker' | 'accent2-darker' | 'accent3-darker' | 'accent4-darker' | 'primary-light' | 'secondary-light' | 'success-light' | 'alert-light' | 'warning-light' | 'accent1-light' | 'accent2-light' | 'accent3-light' | 'accent4-light' | 'inverse-light' | 'primary-lighter' | 'secondary-lighter' | 'success-lighter' | 'alert-lighter' | 'warning-lighter' | 'accent1-lighter' | 'accent2-lighter' | 'accent3-lighter' | 'accent4-lighter' | 'inverse-lighter' | 'primary-lightest' | 'secondary-lightest' | 'success-lightest' | 'alert-lightest' | 'warning-lightest' | 'accent1-lightest' | 'accent2-lightest' | 'accent3-lightest' | 'accent4-lightest' | 'inverse-lightest' | 'primary-shadow' | 'secondary-shadow' | 'success-shadow' | 'alert-shadow' | 'warning-shadow' | 'accent1-shadow' | 'accent2-shadow' | 'accent3-shadow' | 'accent4-shadow' | 'inverse-shadow';
export declare type AvatarSize = 'regular' | 'tiny';
export declare type AvatarShape = 'round' | 'square';
export declare type IconType = 'rounded' | 'outlined';
export declare type PositionType = 'auto-start' | 'auto' | 'auto-end' | 'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-end' | 'bottom' | 'bottom-start' | 'left-end' | 'left' | 'left-start';
export declare type OptionType = {
    label: string;
    value: any;
    isSelectedOption?: boolean;
};
export declare type TListboxSize = 'standard' | 'compressed' | 'tight';
export declare type TEmptyStateSize = 'standard' | 'compressed' | 'tight' | 'large' | 'small';
export declare type TTabSize = 'regular' | 'small';
