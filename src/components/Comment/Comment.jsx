import './Comment.scss'

const Comment = () => {
  return (
    <div className="comment__wrapper">
      <div className="comment">
        <div className="comment__avatar">
          {/* <img src={Avatar} alt="avatar" /> */}
        </div>
        <div className="comment__details">
          <div className="comment__details__publication">
            <div className="comment__author">Noah Duncan</div>
            <div className="comment__date">8/11/2023</div>
          </div>
          <div className="commment__text">
            Your insights into the future of AI are enlightening! The
            intersection of technology and ethics is particularly
            thought-provoking. Keep us updated on the tech front!
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment
