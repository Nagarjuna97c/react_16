import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {itemDetails, changeLikeStatus, deleteComment} = props
  const {id, name, bgColor, comment, liked, date} = itemDetails

  const changeLike = () => {
    changeLikeStatus(id)
  }

  const DeleteComment = () => {
    deleteComment(id)
  }

  const isLiked = liked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="comment">
      <div className="comment-top-part">
        <div className={`icon-container ${bgColor}`}>
          <p className="para2">{name[0].toUpperCase()}</p>
        </div>
        <div className="text-container">
          <div className="name-and-time-container">
            <p className="para3">{name}</p>
            <p className="para4">{formatDistanceToNow(date)}</p>
          </div>
          <p className="para4">{comment}</p>
        </div>
      </div>
      <div className="comment-bottom-part">
        <button type="button" onClick={changeLike} className="button1">
          <img src={isLiked} alt="like" className="image1" />
          Like
        </button>
        <button
          testid="delete"
          type="button"
          onClick={DeleteComment}
          className="button1"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="image1"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
