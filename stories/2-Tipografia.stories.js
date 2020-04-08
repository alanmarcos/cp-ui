import React from 'react';
import { Button } from '@storybook/react/demo';
import Title from '../src/public/Title/index';

export const Titulo1 = () => <Title>H1. Credpago UI</Title>
export const Titulo2 = () => <Title level={2}>H2. Credpago UI</Title>
export const Titulo3 = () => <Title level={3}>H3. Credpago UI</Title>
export const Titulo4 = () => <Title level={4}>H4. Credpago UI</Title>
export const Titulo5 = () => <Title level={5}>H5. Credpago UI</Title>
export const Titulo6 = () => <Title level={6}>H6. Credpago UI</Title>

export default {
  title: 'Titulos',
  component: Titulo1,
};
