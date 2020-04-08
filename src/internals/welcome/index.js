import React from 'react';
import LogoIcon from '../assets/images/logo-icon.png';
import LogoText from '../assets/images/logo-text.png';
import CSS from './index.module.scss';
const Package = require('../../../package.json');

const Welcome = () => {

  const { version } = Package;

  return (
    <div className={CSS.welcomeWrapper}>
      <div>
        <img className={CSS.icon} src={LogoIcon} alt="Credpago UI Icon" />
        <img className={CSS.text} src={LogoText} alt="Credpago UI" />
        <small className={CSS.versionNumber}>Versão: {version}</small>

        <p>Guia de uso de marca e Biblioteca de componentes front-end feitos em React</p>
      </div>
    </div>
  )
}

export default Welcome;