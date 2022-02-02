// import { OverlayFooterProps } from '@/components/overlayFooter';

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
// export type FooterOptions = {
//   actions: OverlayFooterProps['actions'];
// };
export type AutoComplete = 'on' | 'off';
export type NumberRange = [number, number];
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
