import React from 'react';
import Cores from '../src/internals/colors/index';
import { withInfo } from '@storybook/addon-info';

export const Lista = () => <Cores />;
export default {
  title: 'Cores',
  component: Lista,
  decorators: [withInfo],
  parameters: {
    info: { 
      inline: true,
      text: 'Todas as cores oficiais da CredPago em hexadecimal. Para a versão em CMYK, é melhor chamar o marketing.',
      header: true,
      source: false,
      propTypes: false,
      propTables: false,
    },
  },
};

