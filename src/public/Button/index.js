import React from 'react';
import CSS from './index.module.scss';

const Button = (props) => {
  const { children, size, className, type } = props;
  let isSmall = size === 'small';
  let isLarge = size === 'large';
  let isPrimary = type === 'primary';

  const getClasses = () => {
    let base = [className];

    base.push(CSS.button);

    // sizes
    if(isSmall) 
      base.push(CSS.btnSm)
    if(isLarge) 
      base.push(CSS.btnLarge)

    // types
    base.push( isPrimary ? CSS.typePrimary : CSS.typeDefault)

    return base.join(' ')
  }

  return <button {...props} className={getClasses()}>{children}</button>
}

export default Button;