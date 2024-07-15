import PropTypes from 'prop-types'
import './NextVideo.scss'

const NextVideo = ({ video }) => {
  return (
    <>
      <div className="next__video">
        <div className="next__video__card">
          <div className="card__media">
            <img src={video.image} alt="video-img" />
          </div>
          <div className="video__info">
            <div className="video__title">{video.title}</div>
            <div className="video__author">{video.channel}</div>
          </div>
        </div>
      </div>
    </>
  )
}

NextVideo.propTypes = {
  video: PropTypes.object.isRequired,
}

export default NextVideo
