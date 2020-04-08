import React from 'react';
import LogoIcon from '../assets/images/logo-icon.png';
import LogoText from '../assets/images/logo-text.png';
import CSS from './index.module.scss';
const Package = require('../../../package.json');

const Welcome = (props) => {

  const { version } = Package;

  return (
    <div>
      <img className={CSS.icon} src={LogoIcon} alt="Credpago UI Icon" />
      <img className={CSS.text} src={LogoText} alt="Credpago UI" />
      <small className={CSS.versionNumber}>Versão: {version}</small>
    </div>
  )
}

export default Welcome;