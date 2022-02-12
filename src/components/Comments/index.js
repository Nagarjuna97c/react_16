import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  submitForm = event => {
    console.log('Hello There')
    event.preventDefault()

    const {name, comment} = this.state

    const newObject = {
      id: uuidv4(),
      name,
      comment,
      liked: false,
      date: new Date(),
      bgColor:
        initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)],
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newObject],
      name: '',
      comment: '',
    }))
  }

  changeName = event => {
    this.setState({name: event.target.value})
  }

  changeText = event => {
    this.setState({comment: event.target.value})
  }

  changeLikeStatus = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, liked: !eachItem.liked}
        }
        return eachItem
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state

    return (
      <div className="page-container">
        <div className="top-container">
          <div className="comment-entry-container">
            <h1 className="comments">Comments</h1>
            <p className="para">Say something about 4.0 Technologies</p>
            <form className="comments-form" onSubmit={this.submitForm}>
              <input
                type="text"
                onChange={this.changeName}
                className="name-input"
                placeholder="Your Name"
                value={name}
              />
              <textarea
                cols="25"
                rows="6"
                className="comment-textarea"
                placeholder="Your Comment"
                value={comment}
                onChange={this.changeText}
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image"
          />
        </div>
        <div className="bottom-container">
          <p className="para1">
            <span className="comments-count">{commentsList.length}</span>
            Comments
          </p>
          <ul>
            {commentsList.map(eachItem => (
              <CommentItem
                key={eachItem.id}
                itemDetails={eachItem}
                changeLikeStatus={this.changeLikeStatus}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
