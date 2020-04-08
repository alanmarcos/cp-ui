import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { withA11y } from '@storybook/addon-a11y';
import CPButton from '../src/public/Button/index';


export default {
  title: 'Button',
  component: Button,
  decorators: [withA11y],
};

export const Default = () => <CPButton onClick={action('clicked')}>Default Button</CPButton>;

export const Primary = () => <CPButton type="primary" onClick={action('clicked')}>Primary Button</CPButton>

export const Pequeno = () => <CPButton size="small" onClick={action('clicked')}>Hello Small Button</CPButton>;

export const Grande = () => <CPButton size="large" onClick={action('clicked')}>Hello Large Button</CPButton>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const accessible = () => (
  <button>
    Accessible button
  </button>
);

export const inaccessible = () => (
  <button style={{ backgroundColor: 'red', color: 'darkRed', }}>
    Inaccessible button
  </button>
);