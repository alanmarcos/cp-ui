import React from 'react';
import { addDecorator } from '@storybook/react';
import './preview.css';

addDecorator(storyFn => <div className={CSS.previewWrapper} style={{ padding: '20px 40px 40px' }}>{storyFn()}</div>);