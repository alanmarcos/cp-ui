import React from 'react';
import { linkTo } from '@storybook/addon-links';
import Welcome from '../src/internals/welcome';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <Welcome />;

ToStorybook.story = {
  name: 'to Storybook',
};
