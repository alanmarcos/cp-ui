import React from 'react';
import { linkTo } from '@storybook/addon-links';
import Welcome from '../src/internals/welcome';

export default {
  title: 'Credpago UI',
  component: Welcome,
};

export const ToStorybook = () => <Welcome />;

ToStorybook.story = {
  name: 'Bem Vindo',
};
