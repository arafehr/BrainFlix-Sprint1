import './Comment.scss'
import PropTypes from 'prop-types'

const Comment = ({ comment }) => {
  function convertTimestampToDate(timestamp) {
    const date = new Date(timestamp)

    const day = date.getDate()
    const month = date.getMonth() + 1 // Months are zero-indexed
    const year = date.getFullYear()

    return `${month}/${day}/${year}`
  }
  return (
    <div className="comment__wrapper">
      <div className="comment">
        <div className="comment__avatar"></div>
        <div className="comment__details">
          <div className="comment__details__publication">
            <div className="comment__author">{comment.name}</div>
            <div className="comment__date">
              {convertTimestampToDate(comment.timestamp)}
            </div>
          </div>
          <div className="commment__text">{comment.comment}</div>
        </div>
      </div>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
}

export default Comment
