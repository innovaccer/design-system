import { transparentize } from 'polished';
import { CSSObject, Theme } from '@storybook/theming';
import { theme } from './theme';

export const headerCommon = (): CSSObject => ({
  margin: '20px 0 8px',
  padding: 0,
  cursor: 'text',
  position: 'relative',
  color: theme.color.defaultText,
  '&:first-of-type': {
    marginTop: 0,
    paddingTop: 0,
  },
  '&:hover a.anchor': {
    textDecoration: 'none',
  },
  '& tt, & code': {
    fontSize: 'inherit',
  },
});

export const codeCommon = (): CSSObject => ({
  lineHeight: 1,
  margin: '0 2px',
  padding: '3px 5px',
  whiteSpace: 'nowrap',

  borderRadius: 4,
  fontSize: '12px',
  fontWeight: 'bold',
  border: theme.base === 'light' ? `1px solid #E5E5E5` : `1px solid#E5E5E5`,
  color:
    theme.base === 'light'
      ? transparentize(0.1, theme.color.defaultText)
      : transparentize(0.3, theme.color.defaultText),
  backgroundColor: '#F4F4F4',
});

export const withReset = (): CSSObject => ({
  fontFamily: 'monospace',
  fontSize: '14px',
  margin: 0,

  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  WebkitOverflowScrolling: 'touch',
});

export const withMargin: CSSObject = {
  margin: '16px 0',
};
