import Comment from '../Comment/Comment'
import NextVideo from '../NextVideo/NextVideo'
import VideoDescription from '../VideoDescription/VideoDescription'
import './VideoInfoLayout.scss'

const VideoInfoLayout = () => {
  return (
    <div className="videoinfo__layout">
      <div className="videoinfo__layout__left">
        <VideoDescription />
        <Comment />
      </div>
      <div className="videoinfo__layout__right">
        <h4 className="next__video__header">Next Videos</h4>
        <NextVideo />
      </div>
    </div>
  )
}

export default VideoInfoLayout
