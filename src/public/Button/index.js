import React from 'react';
import PropTypes from 'prop-types';
import CSS from './index.module.scss';

const Button = (props) => {
  const { children, size, className, buttonType } = props;
  let isSmall = size === 'small';
  let isLarge = size === 'large';
  let isPrimary = buttonType === 'primary';

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


Button.propTypes = {
  children: PropTypes.node.isRequired,
  /** 
	 * 'default' vem por padrão mas também é possível usar a variação 'primary'
	 **/
  buttonType: PropTypes.string
}

export default Button;