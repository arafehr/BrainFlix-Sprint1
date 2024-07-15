import eyeIcon from '../../assets/Icons/views.svg'
import heartIcon from '../../assets/Icons/likes.svg'
import Avatar from '../../assets/Images/Mohan-muruge.jpg'
import PlusIcon from '../../assets/Icons/add_comment.svg'
import './VideoDescription.scss'

const VideoDescription = ({ video }) => {
  return (
    <div className="video__description">
      <div className="video__description__title">{video.title}</div>
      <div className="video__description__stats">
        <div className="video__author">
          <div className="video__author__name">By {video.channel}</div>
          <div className="video__author__date">8/8/2023</div>
        </div>
        <div className="video__stats">
          <div className="video__stats__views">
            <img src={eyeIcon} alt="views" />
            <div className="video__stats__views__count">{video.views}</div>
          </div>
          <div className="video__stats__likes">
            <img src={heartIcon} alt="likes" />
            <div className="video__stats__likes__count">{video.likes}</div>
          </div>
        </div>
      </div>
      <div className="video__description__para">{video.description}</div>
      <div className="video__commentscount">
        {video.comments.length} comments
      </div>
      <div className="video__addcomment">
        <div className="video__addcomment__avatar">
          <img src={Avatar} alt="avatar" />
        </div>
        <div className="video__addcomment__input">
          <div className="input__label">Join the Conversation</div>
          <input type="text" placeholder="Add a new comment" />
        </div>
        <div className="video__addcomment__button">
          <img src={PlusIcon} alt="plus-icon" />
          <button>Comment</button>
        </div>
      </div>
    </div>
  )
}

export default VideoDescription
