import { OverlayFooterProps } from '@/components/molecules/overlayFooter';

export type AccentAppearance =
  | 'primary'
  | 'secondary'
  | 'alert'
  | 'warning'
  | 'success'
  | 'accent1'
  | 'accent2'
  | 'accent3'
  | 'accent4';

export type HeadingAppearance = 'default' | 'subtle' | 'disabled' | 'white';
export type MessageAppearance = 'default' | 'alert' | 'info' | 'success' | 'warning';
export type FileStatus = 'uploading' | 'completed' | 'error';
export type FooterOptions = {
  actions: OverlayFooterProps['actions'];
};
export type AutoComplete = 'on' | 'off';
export type NumberRange = [number, number];
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type TextColor =
  | 'white'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'alert'
  | 'warning'
  | 'accent1'
  | 'accent2'
  | 'accent3'
  | 'accent4'
  | 'inverse'
  | 'primary-dark'
  | 'secondary-dark'
  | 'success-dark'
  | 'alert-dark'
  | 'warning-dark'
  | 'accent1-dark'
  | 'accent2-dark'
  | 'accent3-dark'
  | 'accent4-dark'
  | 'primary-darker'
  | 'success-darker'
  | 'alert-darker'
  | 'warning-darker'
  | 'accent1-darker'
  | 'accent2-darker'
  | 'accent3-darker'
  | 'accent4-darker'
  | 'primary-light'
  | 'secondary-light'
  | 'success-light'
  | 'alert-light'
  | 'warning-light'
  | 'accent1-light'
  | 'accent2-light'
  | 'accent3-light'
  | 'accent4-light'
  | 'inverse-light'
  | 'primary-lighter'
  | 'secondary-lighter'
  | 'success-lighter'
  | 'alert-lighter'
  | 'warning-lighter'
  | 'accent1-lighter'
  | 'accent2-lighter'
  | 'accent3-lighter'
  | 'accent4-lighter'
  | 'inverse-lighter'
  | 'primary-lightest'
  | 'secondary-lightest'
  | 'success-lightest'
  | 'alert-lightest'
  | 'warning-lightest'
  | 'accent1-lightest'
  | 'accent2-lightest'
  | 'accent3-lightest'
  | 'accent4-lightest'
  | 'inverse-lightest'
  | 'primary-shadow'
  | 'secondary-shadow'
  | 'success-shadow'
  | 'alert-shadow'
  | 'warning-shadow'
  | 'accent1-shadow'
  | 'accent2-shadow'
  | 'accent3-shadow'
  | 'accent4-shadow'
  | 'inverse-shadow';

export type AvatarSize = 'regular' | 'tiny';

export type AvatarShape = 'round' | 'square';

export type IconType = 'rounded' | 'outlined';

export type PositionType =
  | 'auto-start'
  | 'auto'
  | 'auto-end'
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'bottom-end'
  | 'bottom'
  | 'bottom-start'
  | 'left-end'
  | 'left'
  | 'left-start';

export type OptionType = {
  label: string;
  value: any;
  isSelectedOption?: boolean;
};

export type TListboxSize = 'standard' | 'compressed' | 'tight';

export type TEmptyStateSize = 'standard' | 'compressed' | 'tight' | 'large' | 'small';

export type TTabSize = 'regular' | 'small';
