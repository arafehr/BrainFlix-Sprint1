import Comment from '../Comment/Comment'
import NextVideo from '../NextVideo/NextVideo'
import VideoDescription from '../VideoDescription/VideoDescription'
import PropTypes from 'prop-types'
import './VideoInfoLayout.scss'

const VideoInfoLayout = ({ currentVideo, nextVideos }) => {
  console.log(nextVideos, 'asnd')
  return (
    <div className="videoinfo__layout">
      <div className="videoinfo__layout__left">
        <VideoDescription video={currentVideo} />
        {currentVideo.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      <div className="videoinfo__layout__right">
        <h4 className="next__video__header">Next Videos</h4>
        {nextVideos.map((video) => (
          <NextVideo video={video} key={video.id} />
        ))}
      </div>
    </div>
  )
}

VideoInfoLayout.propTypes = {
  currentVideo: PropTypes.object.isRequired,
  nextVideos: PropTypes.array.isRequired,
}

export default VideoInfoLayout
