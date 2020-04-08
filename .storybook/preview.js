import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(storyFn => <div style={{
  padding: '20px 40px 40px'
}}>{storyFn()}</div>);

addDecorator(
  withInfo({
    header: false,
    inline: true
  })
);