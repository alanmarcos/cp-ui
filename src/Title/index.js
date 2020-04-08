import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {
  const { level, children } = props;

  const switchTitles = () => {
    switch(level){
      case 2:
        return <h2 {...props}>{children}</h2>
      case 3:
        return <h3 {...props}>{children}</h3>
      case 4:
        return <h4 {...props}>{children}</h4>
      case 5:
        return <h5 {...props}>{children}</h5>
      case 6:
        return <h6 {...props}>{children}</h6>
      default:
        return <h1 {...props}>{children}</h1>
                                    
    }
  }

  return switchTitles();
}

Title.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node.isRequired
}

export default Title;