import React from 'react';
import { addDecorator } from '@storybook/react';
import './preview.css';

addDecorator(storyFn => 
  <div 
    style={{ 
      padding: '20px 40px 40px', 
      fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif' 
    }}>
    {storyFn()}
  </div>
);