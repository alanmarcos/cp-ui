import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import './preview.css';

addDecorator(
  withInfo({
    header: true,
    inline: true
  })
);

addDecorator(storyFn => <div className={CSS.previewWrapper} style={{ padding: '20px 40px 40px' }}>{storyFn()}</div>);