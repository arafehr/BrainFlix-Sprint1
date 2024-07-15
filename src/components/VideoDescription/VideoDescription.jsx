import eyeIcon from '../../assets/Icons/views.svg'
import heartIcon from '../../assets/Icons/likes.svg'
import Avatar from '../../assets/Images/Mohan-muruge.jpg'
import PlusIcon from '../../assets/Icons/add_comment.svg'
import './VideoDescription.scss'

const VideoDescription = () => {
  return (
    <div className="video__description">
      <div className="video__description__title">
        The Future of Artificial Intelligence
      </div>
      <div className="video__description__stats">
        <div className="video__author">
          <div className="video__author__name">By Aiden Thompson</div>
          <div className="video__author__date">8/8/2023</div>
        </div>
        <div className="video__stats">
          <div className="video__stats__views">
            <img src={eyeIcon} alt="views" />
            <div className="video__stats__views__count">980,544</div>
          </div>
          <div className="video__stats__likes">
            <img src={heartIcon} alt="likes" />
            <div className="video__stats__likes__count">22,479</div>
          </div>
        </div>
      </div>
      <div className="video__description__para">
        Explore the cutting-edge developments and predictions for Artificial
        Intelligence in the coming years. From revolutionary breakthroughs in
        machine learning to the ethical considerations influencing AI
        advancements, this exploration transcends the boundaries of mere
        speculation. Join us on a journey that navigates the intricate interplay
        between innovation, ethics, and the ever-evolving tech frontier.s
      </div>
      <div className="video__commentscount">3 comments</div>
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
