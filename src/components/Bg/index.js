import React, { Component } from 'react'
import teamMap from 'utils/teamMap'
import { connect } from 'react-redux'
import Bg from './Bg'

const noiseImage = '/images/noise.png'
const defaultImage = 'http://www.googledrive.com/host/0BzRd-RDS5H-YLS1rZ2RfMkltNTg'

@connect(mapStateToProps)
class Connected extends Component {

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
    let bgImage = defaultImage
    if ( favorite && teamMap[favorite.id].bg )
      bgImage = teamMap[favorite.id].bg
    return bgImage
  }

  render() {
    const { loaded, image } = this.state
    return <Bg loaded={loaded} image={image} pattern={noiseImage} />
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

export default Connected
