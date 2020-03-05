import { create } from '@storybook/theming/create';

export const primary = create({
  base: 'light',

  colorPrimary: '#0000001a',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#0000001a',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Innovaccer UI sandbox',
  brandUrl: 'https://innovaccer.github.io/ui-kit/',
  brandImage: 'https://innovaccer.com/static/image/site-logo/innovaccer-logo-black.svg',
});
