import React, { Component } from 'react'
import teamMap from 'utils/teamMap'
import { connect } from 'react-redux'
import Loading from './Loading'

const noiseImage = '/images/noise.png'

@connect(mapStateToProps)
class Bg extends Component {

  constructor() {
    super()
    this.state = { loaded: false }
  }

  componentDidMount() {
    this.updateImage(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.updateImage(nextProps)
  }

  updateImage(props) {
    const bgImage = this.getBgImage(props)
    this.setState({ loaded: false, image: null })
    Promise.all([
      loadImage(noiseImage),
      loadImage(bgImage)
    ]).then(() => {
      this.setState({ loaded: true, image: bgImage })
    })
  }

  getBgImage(props) {
    const { favorite } = props
    let bgImage = 'http://www.googledrive.com/host/0BzRd-RDS5H-YLS1rZ2RfMkltNTg'
    if ( favorite && teamMap[favorite.id].bg )
      bgImage = teamMap[favorite.id].bg
    return bgImage
  }

  render() {
    const { loaded, image } = this.state

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
        backgroundImage: `url('${noiseImage}')`,
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
}

function loadImage(src) {
  const image = new Image()
  image.src = src

  return new Promise((resolve, reject) => image.onload = () => resolve())
}

function mapStateToProps() {
  return (state) => {
    return {
      favorite: state.team.favorite
    }
  }
}

export default Bg
