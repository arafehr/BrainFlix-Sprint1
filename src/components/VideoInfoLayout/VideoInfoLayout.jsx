import VideoDescription from '../VideoDescription/VideoDescription'
import './VideoInfoLayout.scss'

const VideoInfoLayout = () => {
  return (
    <div className="videoinfo__layout">
      <div className="videoinfo__layout__left">
        <VideoDescription />
      </div>
      <div className="videoinfo__layout__right"></div>
    </div>
  )
}

export default VideoInfoLayout
