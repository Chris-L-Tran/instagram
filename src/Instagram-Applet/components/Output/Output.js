import React, { Component } from 'react'

import './Output.css'

class Output extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: ' ',
      picture: ' ',
      comment: ' '
    }
  }

  update (name, picture, comment) {
    this.setState({
      username: name,
      picture: picture,
      comment: comment
    })
  }

  render () {
    return (
      <div className='output'>
        <div className='username'>
          <div className='user-pic'>
            <img src={require('./Profile.png')} height={50} width={50} />
          </div>
          <div className='name'>
            {this.state.username}
          </div>
          <div className='time'>
            1m
          </div>
        </div>
        <div className='picture'>
          <img src={require('./selfie.jpg')} width={415.8} height={386} />
        </div>
        <div className='nav-buttons'>
          <div className='left-buttons'>
            <div className='heart-btn'>
              <img src={require('./heart.png')} width={25} height={25} />
            </div>
            <div className='comment-btn'>
              <img src={require('./bubble.png')} width={25} height={25} />
            </div>
            <div className='share-btn'>
              <img src={require('./Arrow.png')} width={25} height={25} />
            </div>
          </div>
          <div className='right-buttons'>
            <div className='nav-btn'>
              <img src={require('./dots.png')} width={25} height={25} />
            </div>
          </div>
        </div>
        <div className='comment'>
          <div className='likes'>20 likes</div>
          <div className='text'>{this.state.comment}</div>
          <div className='all-comments'>View all 20 comments</div>
        </div>
      </div>
    )
  }
}

export default Output
