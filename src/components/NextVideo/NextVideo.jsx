import data from '../../data/video-details.json'
import './NextVideo.scss'

const NextVideo = () => {
  return (
    <>
      <div className="next__video">
        <div className="next__video__card">
          <div className="card__media">
            <img src={data[0].image} alt="video-img" />
          </div>
          <div className="video__info">
            <div className="video__title">{data[0].title}</div>
            <div className="video__author">{data[0].channel}</div>
          </div>
        </div>
      </div>
      <div className="next__video">
        <div className="next__video__card">
          <div className="card__media">
            <img src={data[0].image} alt="video-img" />
          </div>
          <div className="video__info">
            <div className="video__title">{data[0].title}</div>
            <div className="video__author">{data[0].channel}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NextVideo
