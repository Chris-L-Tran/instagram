import React, {Component} from 'react'

import Output from '../Output/Output'

import './Information.css'

class Information extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ' ',
      picture: ' ',
      comment: ' '
    }

    this.post = this.post.bind(this)
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePicture = this.handlePicture.bind(this)
    this.handleComment = this.handleComment.bind(this)
  }

  post (e) {
    console.log(this.state.username)
  }

  handleUsername (e) {
    this.setState({username: e.target.value})
  }

  handlePicture (e) {
    this.setState({picture: e.target.value})
  }

  handleComment (e) {
    this.setState({comment: e.target.value})
  }

  handle
  render () {
    return (
      <div className='information'>
        Information
        <form onSubmit={this.post}>
          <input type='text' value={this.state.username} onChange={this.handleUsername} />
          <input type='text' value={this.state.picture} onChange={this.handlePicture} />
          <input type='text' value={this.state.comment} onChange={this.handleComment} />
          <input type='submit' value='Post' />
        </form>
      </div>
    )
  }
}

export default Information
