import './App.scss'
import { Navbar } from './components/Navbar/Navbar'
import VideoInfoLayout from './components/VideoInfoLayout/VideoInfoLayout'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import data from './data/video-details.json'
import { useState } from 'react'

function App() {
  const [currentVideo, setCurrentVideo] = useState(data[0])
  const [nextVideos, setNextVidoes] = useState(() =>
    data.filter((video) => video.id != currentVideo.id),
  )
  return (
    <>
      <Navbar />
      <VideoPlayer video={currentVideo} />
      <VideoInfoLayout currentVideo={currentVideo} nextVideos={nextVideos} />
    </>
  )
}

export default App
