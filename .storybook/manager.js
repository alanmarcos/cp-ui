import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import Logo from '../src/internals/assets/images/logo-text.png';

addons.setConfig({
  theme: create({
    base: 'light',

    colorPrimary: '#113c64',
    colorSecondary: '#26c3ef',

    // UI
    appBorderColor: '#d8d8d8',
    appBorderRadius: 4,

    // Form colors
    inputBg: 'white',
    inputBorder: 'silver',
    inputTextColor: 'black',
    inputBorderRadius: 4,

    brandTitle: 'Credpago UI',
    brandUrl: 'https://credpago.com',
    brandImage: Logo,
  }),
});