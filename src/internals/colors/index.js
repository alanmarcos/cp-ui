import React from 'react';
import colors from './colors';

const SingleColor = (props) => {
  let { color } = props;

  const style = () => {
    let ob = {
      minHeight: '130px',
      backgroundColor: `${color}`,
      color: 'white',
      display: 'block',
      textAlign: 'center',
      display: 'grid',
      borderRadius: '4px',
    }

    return ob;
  }

  return (
    <div {...props} style={style()}>
      <span style={{ alignSelf: 'center' }}>{color}</span>
    </div>
  )
}

const Cores = () => {

  const style = () => {
    let ob ={
      display:'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gridGap: '25px'
    };
    return ob;
  }

  return (
    <div style={style()} >
      {colors.map( (color, index) => <SingleColor key={index} color={color} />)}
    </div>
  )
}

export default Cores;