import React from 'react';
import LogoIcon from '../assets/images/logo-icon.png';
import LogoText from '../assets/images/logo-text.png';
import CSS from './index.module.scss';
import README from '../../../README.md';
import Package from '../../../package.json';
const showdown  = require('showdown');


const Welcome = () => {

  const { version } = Package;
  const converter = new showdown.Converter();

  return (
    <div className={CSS.welcomeWrapper}>
      <div>
        <img className={CSS.icon} src={LogoIcon} alt="Credpago UI Icon" />
        <img className={CSS.text} src={LogoText} alt="Credpago UI" />
        <small className={CSS.versionNumber}>Versão: {version}</small>

        <p>Guia de uso de marca e Biblioteca de componentes front-end feitos em React</p>

        <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(README) }}></div>
      </div>
    </div>
  )
}

export default Welcome;