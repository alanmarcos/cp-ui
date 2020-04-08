import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(
  withInfo({
    header: false,
    inline: true
  })
);

addDecorator(storyFn => <div style={{
  padding: '20px 40px 40px'
}}>{storyFn()}</div>);