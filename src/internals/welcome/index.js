import React from 'react';
import LogoIcon from '../assets/images/logo-icon.png';
import LogoText from '../assets/images/logo-text.png';
import CSS from './index.module.scss';

const Welcome = (props) => {

  console.log(CSS);

  console.log('LogoIcon', LogoIcon);
  return (
    <div>
      <img className={CSS.icon} src={LogoIcon} alt="Credpago UI Icon" />
      <img className={CSS.text} src={LogoText} alt="Credpago UI" />
    </div>
  )
}

export default Welcome;