import React from 'react';
import PropTypes from 'prop-types';
import CSS from './index.module.scss';

const Title = (props) => {
  const { level, children, className } = props;

  const getClasses = () => {
    const base = [className];

    base.push( CSS.title )
    return base.join(' ');
  }

  const switchTitles = () => {
    switch(level){
      case 2:
        return <h2 className={getClasses()}>{children}</h2>
      case 3:
        return <h3 className={getClasses()}>{children}</h3>
      case 4:
        return <h4 className={getClasses()}>{children}</h4>
      case 5:
        return <h5 className={getClasses()}>{children}</h5>
      case 6:
        return <h6 className={getClasses()}>{children}</h6>
      default:
        return <h1 className={getClasses()}>{children}</h1>
                                    
    }
  }

  return switchTitles();
}

Title.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node.isRequired
}

export default Title;