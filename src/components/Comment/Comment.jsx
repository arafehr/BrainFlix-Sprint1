import './Comment.scss'

const Comment = ({ comment }) => {
  return (
    <div className="comment__wrapper">
      <div className="comment">
        <div className="comment__avatar">
          {/* <img src={Avatar} alt="avatar" /> */}
        </div>
        <div className="comment__details">
          <div className="comment__details__publication">
            <div className="comment__author">{comment.name}</div>
            <div className="comment__date">8/11/2023</div>
          </div>
          <div className="commment__text">{comment.comment}</div>
        </div>
      </div>
    </div>
  )
}

export default Comment
