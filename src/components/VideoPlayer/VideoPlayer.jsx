import './VideoPlayer.scss'
import PropTypes from 'prop-types'

const VideoPlayer = ({ video }) => {
  return (
    <div className="video__player">
      <video poster={video.image} controls autoPlay>
        <source src={video.video} type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

VideoPlayer.propTypes = {
  video: PropTypes.object.isRequired,
}

export default VideoPlayer
