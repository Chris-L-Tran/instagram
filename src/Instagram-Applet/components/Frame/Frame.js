import React, {Component} from 'react'
import './Frame.css'

import Information from '../Information/Information'

class Frame extends Component {
  render () {
    return (
      <div className='frame'>
        <img src={require('../../../App-Icon.jpg')} width={200} height={200} />
        <div className='info'>
          <p>Welcome to my instagram app</p>
          <Information />
        </div>
      </div>
    )
  }
}

export default Frame
