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

export type HeadingAppearance = 'positive' | 'negative' | 'warning' | 'link' | 'destructive';
export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
export type HeadingSize = 'x-small' | 'small' | 'medium' | 'large' | 'x-large';

export type MessageAppearance = 'default' | 'alert' | 'info' | 'success' | 'warning';
export type FileStatus = 'uploading' | 'completed' | 'error';
// export type FooterOptions = {
//   actions: OverlayFooterProps['actions'];
// };
export type AutoComplete = 'on' | 'off';
export type NumberRange = [number, number];
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
