import data from '../../data/video-details.json'
import './VideoPlayer.scss'

const VideoPlayer = () => {
  return (
    <div className="video__player">
      <video poster={data[0].image} controls autoPlay>
        <source src={data[0].video} type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoPlayer
