import Comment from '../Comment/Comment'
import NextVideo from '../NextVideo/NextVideo'
import VideoDescription from '../VideoDescription/VideoDescription'
import data from '../../data/video-details.json'
import './VideoInfoLayout.scss'
import { useState } from 'react'

const VideoInfoLayout = () => {
  const [currentVideo, setCurrentVideo] = useState(data[0])
  const [nextVideos, setNextVidoes] = useState(() =>
    data.filter((video) => video.id != currentVideo.id),
  )

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

export default VideoInfoLayout
