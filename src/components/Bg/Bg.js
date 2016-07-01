import React, { Component } from 'react'
import Loading from '../Loading'

function Bg({ loaded, image, pattern }) {

  const fixedStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0'
  }

  let style = {
    noise: {
      ...fixedStyle,
      backgroundImage: `url('${pattern}')`,
      zIndex: '-2'
    },
    image: {
      ...fixedStyle,
      backgroundImage: `url('${image}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      zIndex: '-1'
    },
    loader: {
      position: 'absolute',
      top: '60px',
      left: '10px'
    }
  }

  return (
    <div>
      { !loaded && <div style={style.loader}><Loading style={{ width: '30px', height: '30px' }} /></div> }
      { <div style={{...style.noise, opacity: loaded ? '1' : '0' }}></div> }
      { <div style={{...style.image, opacity: loaded ? '.6' : '0' }}></div> }
    </div>
  )
}

export {
  Bg as default
}
